const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const server = spawn(process.execPath, [path.join(__dirname, 'dist/server/index.js')], {
  stdio: ['ignore', 'inherit', 'inherit'],
  env: { ...process.env, PORT: String(port) },
});

function checkUrls() {
  const urls = ['/assets/styles-_MAG-Zan.css', '/assets/index-D5D4naDE.js', '/1.png', '/10.png'];
  let pending = urls.length;
  urls.forEach((pathname) => {
    const req = http.request({ hostname: '127.0.0.1', port, path: pathname, method: 'GET' }, (res) => {
      console.log(`${pathname} ${res.statusCode} ${res.headers['content-type']}`);
      res.resume();
      if (!--pending) {
        server.kill('SIGTERM');
      }
    });
    req.on('error', (err) => {
      console.log(`${pathname} ERROR ${err.message}`);
      if (!--pending) {
        server.kill('SIGTERM');
      }
    });
    req.end();
  });
}

setTimeout(checkUrls, 3000);
server.on('exit', (code, signal) => {
  process.exit(code ?? (signal ? 0 : 0));
});
