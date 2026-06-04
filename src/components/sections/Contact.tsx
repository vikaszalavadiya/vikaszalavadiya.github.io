import { motion } from "framer-motion";

const contacts = [
  { label: "Email", value: "vikaszalavadiya1995@gmail.com", href: "mailto:vikaszalavadiya1995@gmail.com" },
  { label: "Phone", value: "+91 9898535839", href: "tel:+919898535839" },
  { label: "LinkedIn", value: "linkedin.com/in/vikaszalavadiya", href: "https://linkedin.com/in/vikaszalavadiya" },
  { label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "110px 0 60px" }}>
      <div className="responsive-container">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Get In Touch
        </motion.div>
        <motion.h2 className="section-title" style={{ marginBottom: "24px" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Let&apos;s build something<br />
          <em style={{ fontStyle: "normal", color: "#7c6fff" }}>reliable together.</em>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ color: "#9491b0", fontSize: "16px", lineHeight: 1.7, maxWidth: "520px", marginBottom: "36px" }}>
          Open to QA roles, automation projects, and collaborations. I'm always happy to discuss how I can help improve your software's reliability.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.28 }}
          style={{ marginBottom: "56px" }}>
          <a
            href="/resume-vikas-zalavadiya.pdf"
            download="Vikas_Zalavadiya_Resume.pdf"
            data-testid="button-download-cv-contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 36px", borderRadius: "32px", fontSize: "14px",
              fontFamily: "var(--font-head)", fontWeight: 600,
              background: "rgba(25,195,125,0.08)",
              border: "1px solid rgba(25,195,125,0.35)",
              color: "#19c37d", letterSpacing: "0.3px",
              transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
              boxShadow: "0 4px 20px rgba(25,195,125,0.1)",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(25,195,125,0.15)"; el.style.borderColor = "rgba(25,195,125,0.6)"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 36px rgba(25,195,125,0.2)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(25,195,125,0.08)"; el.style.borderColor = "rgba(25,195,125,0.35)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(25,195,125,0.1)"; }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume / CV
          </a>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", marginBottom: "80px" }}>
          {contacts.map((item, i) => {
            const Inner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="glass-card"
                style={{ padding: "24px", transition: "all 0.25s" }}
                data-testid={`contact-${item.label.toLowerCase()}`}
              >
                <p className="info-label" style={{ marginBottom: "8px" }}>{item.label}</p>
                <p style={{ color: "#eeedfb", fontSize: "14px", fontWeight: 500, wordBreak: "break-all" }}>{item.value}</p>
              </motion.div>
            );

            return item.href ? (
              <a key={item.label} href={item.href}>{Inner}</a>
            ) : (
              <div key={item.label}>{Inner}</div>
            );
          })}
        </div>


        {/* Footer */}
        <div className="responsive-flex-footer" style={{
          marginTop: "64px", paddingTop: "28px",
          borderTop: "1px solid rgba(255,255,255,0.055)",
        }}>
          <span className="gradient-text font-head" style={{ fontSize: "18px", fontWeight: 800 }}>VZ.</span>
          <p style={{ color: "#8b88a8", fontSize: "13px" }}>
            &copy; {new Date().getFullYear()} Vikas Zalavadiya. Quality Assurance Engineer, Ahmedabad.
          </p>
        </div>
      </div>
    </section>
  );
}
