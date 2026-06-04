import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          display: "flex", alignItems: "center",
          padding: "0 clamp(16px, 5vw, 48px)", height: "64px",
          background: scrolled ? "rgba(5,5,16,0.92)" : "rgba(5,5,16,0.5)",
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.055)",
          transition: "background 0.45s cubic-bezier(0.23,1,0.32,1), border-color 0.45s",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="gradient-text font-head"
          style={{ marginRight: "auto", fontSize: "20px", fontWeight: 800, letterSpacing: "1px", border: "none", padding: 0 }}
        >
          VZ.
        </button>

        {/* Desktop nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              style={{
                fontSize: "13px", padding: "7px 14px", borderRadius: "9px",
                fontWeight: 400, letterSpacing: "0.2px", transition: "all 0.25s",
                color: activeSection === link.id ? "#7c6fff" : "rgba(148,145,176,0.8)",
                background: activeSection === link.id ? "rgba(124,111,255,0.1)" : "transparent",
                border: "none",
              }}
              className="nav-desktop-link"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="nav-hamburger"
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px",
            padding: "8px 10px", color: "rgba(148,145,176,0.8)",
            fontSize: "18px", lineHeight: 1,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed", top: "72px", left: "12px", right: "12px", zIndex: 999,
              background: "rgba(7,7,26,0.97)", backdropFilter: "blur(20px)",
              borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)",
              padding: "12px",
            }}
            className="nav-mobile-dropdown"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "12px 16px", borderRadius: "10px",
                  color: activeSection === link.id ? "#7c6fff" : "rgba(238,237,251,0.85)", fontSize: "14px",
                  background: activeSection === link.id ? "rgba(124,111,255,0.08)" : "none", border: "none",
                }}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS to hide/show desktop links vs hamburger */}
      <style>{`
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
          .nav-desktop-link { display: inline-flex !important; }
          .nav-mobile-dropdown { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop-link { display: none !important; }
          .nav-hamburger { display: inline-block !important; }
        }
      `}</style>
    </>
  );
}
