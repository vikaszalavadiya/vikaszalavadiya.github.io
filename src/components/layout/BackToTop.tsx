import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          onClick={scrollTop}
          data-testid="button-back-to-top"
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "36px",
            right: "36px",
            zIndex: 900,
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c6fff, #5a50e0)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 24px rgba(124,111,255,0.4)",
            transition: "box-shadow 0.3s, transform 0.3s",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            const b = e.currentTarget as HTMLButtonElement;
            b.style.boxShadow = "0 8px 36px rgba(124,111,255,0.6)";
            b.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const b = e.currentTarget as HTMLButtonElement;
            b.style.boxShadow = "0 4px 24px rgba(124,111,255,0.4)";
            b.style.transform = "translateY(0)";
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
