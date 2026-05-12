import "./lib/error-capture";

import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const serverDir = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(serverDir, "../../client");

const mimeTypes: Record<string, string> = {
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".html": "text/html; charset=utf-8",
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

async function tryServeStatic(pathname: string): Promise<Response | null> {
  const normalizedPath = path.posix.normalize(pathname);
  const filePath = path.resolve(clientDir, `.${normalizedPath}`);
  if (!filePath.startsWith(clientDir)) return null;

  try {
    const stat = await fs.promises.stat(filePath);
    if (!stat.isFile()) return null;
  } catch {
    return null;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] ?? "application/octet-stream";
  const body = await fs.promises.readFile(filePath);
  const headers = new Headers({
    "content-type": contentType,
  });
  if (pathname.startsWith("/assets/")) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  } else {
    headers.set("cache-control", "public, max-age=3600");
  }

  return new Response(body, {
    status: 200,
    headers,
  });
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};

// Start HTTP server for Koyeb
if (!process.env.VITE_DEV) {
  const port = process.env.PORT || 8000;
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
      const staticResponse = await tryServeStatic(url.pathname);
      if (staticResponse) {
        res.writeHead(staticResponse.status, Object.fromEntries(staticResponse.headers));
        const buffer = await staticResponse.arrayBuffer();
        res.end(Buffer.from(buffer));
        return;
      }
      
      const request = new Request(url, {
        method: req.method,
        headers: req.headers as HeadersInit,
        body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
      });

      const handler = await getServerEntry();
      const response = await handler.fetch(request, process.env, {});
      const normalizedResponse = await normalizeCatastrophicSsrResponse(response);

      res.writeHead(normalizedResponse.status, Object.fromEntries(normalizedResponse.headers));
      const buffer = await normalizedResponse.arrayBuffer();
      res.end(Buffer.from(buffer));
    } catch (error) {
      console.error(error);
      const errorResponse = brandedErrorResponse();
      res.writeHead(errorResponse.status, Object.fromEntries(errorResponse.headers));
      res.end(await errorResponse.text());
    }
  });

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}
