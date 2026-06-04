import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ParticleCanvas } from "@/components/layout/ParticleCanvas";

interface StatProps { target: number; suffix: string; label: string; }

function AnimatedStat({ target, suffix, label }: StatProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div>
        <span style={{ fontFamily: "var(--font-head)", fontSize: "26px", fontWeight: 800, color: "#7c6fff" }}>
          {count % 1 === 0 ? count : count.toFixed(1)}
        </span>
        <span style={{ fontFamily: "var(--font-head)", fontSize: "13px", color: "#9491b0" }}>{suffix}</span>
      </div>
      <p style={{ fontSize: "11px", color: "#9491b0", marginTop: "3px", letterSpacing: "0.8px", textTransform: "uppercase" }}>{label}</p>
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 0 }}>
      <ParticleCanvas />

      {/* Radial gradient overlays */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(124,111,255,0.11) 0%, transparent 70%), radial-gradient(ellipse 35% 28% at 78% 72%, rgba(25,195,125,0.05) 0%, transparent 60%), radial-gradient(ellipse 120% 50% at 50% 100%, rgba(5,5,16,0.75) 0%, transparent 65%)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "100px 24px 80px", maxWidth: "900px", width: "100%" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "9px",
            background: "rgba(25,195,125,0.07)", border: "1px solid rgba(25,195,125,0.2)",
            color: "#19c37d", padding: "8px 22px", borderRadius: "28px", fontSize: "13px",
            marginBottom: "36px", backdropFilter: "blur(8px)", letterSpacing: "0.3px",
          }}>
            <span className="badge-dot" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(42px, 7.5vw, 96px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-1.5px",
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="hero-title"
        >
          <span className="hero-title-first">Vikas</span>
          <span className="gradient-text hero-title-last">Zalavadiya</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="hero-subtitle">
          Quality Assurance Engineer &nbsp;·&nbsp; Manual &amp; Automation &nbsp;·&nbsp; Ahmedabad, Gujarat
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="hero-tagline">
          Let's connect and make your software bulletproof.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
          style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px" }}>
          <button onClick={() => scrollTo("experience")} data-testid="button-view-work"
            style={{
              background: "linear-gradient(135deg, #7c6fff, #5a50e0)", color: "#fff",
              padding: "14px 36px", borderRadius: "32px", fontSize: "14px",
              fontFamily: "var(--font-head)", fontWeight: 600, border: "none",
              boxShadow: "0 4px 24px rgba(124,111,255,0.3)", letterSpacing: "0.3px",
              transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 18px 52px rgba(124,111,255,0.42)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(124,111,255,0.3)"; }}
          >
            View Experience
          </button>
          <button onClick={() => scrollTo("contact")} data-testid="button-contact"
            style={{
              background: "transparent", color: "#9491b0",
              padding: "13px 34px", borderRadius: "32px", fontSize: "14px",
              border: "1px solid rgba(255,255,255,0.11)",
              fontFamily: "var(--font-head)", letterSpacing: "0.3px",
              transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
            }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "#7c6fff"; b.style.color = "#7c6fff"; b.style.transform = "translateY(-3px)"; b.style.background = "rgba(124,111,255,0.08)"; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = "rgba(255,255,255,0.11)"; b.style.color = "#9491b0"; b.style.transform = "translateY(0)"; b.style.background = "transparent"; }}
          >
            Get In Touch
          </button>
          <a
            href="/resume-vikas-zalavadiya.pdf"
            download="Vikas_Zalavadiya_Resume.pdf"
            data-testid="button-download-cv"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "#19c37d",
              padding: "13px 34px", borderRadius: "32px", fontSize: "14px",
              border: "1px solid rgba(25,195,125,0.3)",
              fontFamily: "var(--font-head)", letterSpacing: "0.3px",
              transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(25,195,125,0.08)"; el.style.borderColor = "rgba(25,195,125,0.6)"; el.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.borderColor = "rgba(25,195,125,0.3)"; el.style.transform = "translateY(0)"; }}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
              <path d="M8 12l-4-4h2.5V3h3v5H12L8 12z" />
              <path d="M2 13h12v1.5H2z" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="responsive-stats-row"
          data-testid="hero-stats"
        >
          <AnimatedStat target={3} suffix="+" label="Years in QA Exp" />
          <div className="responsive-stats-divider" />
          <AnimatedStat target={8} suffix="+" label="Total Years Exp" />
          <div className="responsive-stats-divider" />
          <AnimatedStat target={8.20} suffix="" label="CGPA in BE" />
          <div className="responsive-stats-divider" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
