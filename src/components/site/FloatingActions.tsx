import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/254700000000?text=Hello%20Black%20Woodpecker%20Limited%2C%20I%27d%20like%20a%20product%20quote."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white inline-flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="h-12 w-12 rounded-full glass-strong text-gold inline-flex items-center justify-center hover:shadow-glow transition-shadow"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
