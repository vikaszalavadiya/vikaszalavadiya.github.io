import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "110px 0", background: "#07071a" }}>
      <div className="section-divider" />
      <div className="responsive-container">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          About Me
        </motion.div>

        <div className="responsive-grid-about">
          {/* Avatar */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
              <div className="avatar-ring ring1" />
              <div className="avatar-ring ring2" />
              <img
                src="/vikas-profile.jpeg"
                alt="Vikas Zalavadiya"
                style={{
                  width: "100%", height: "100%", borderRadius: "50%",
                  objectFit: "cover", objectPosition: "center top",
                  border: "2px solid rgba(124,111,255,0.35)",
                  boxShadow: "0 0 40px rgba(124,111,255,0.18)",
                }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title" style={{ marginBottom: "24px" }}>
              Quality Assurance Engineer<br />
              <em style={{ fontStyle: "normal", color: "#7c6fff" }}>Based in India</em>
            </h2>

            <p style={{ color: "#9491b0", lineHeight: 1.8, marginBottom: "16px", fontSize: "15px" }}>
              Quality Assurance Engineer with <strong style={{ color: "#eeedfb" }}>3 years of QA experience</strong> and over 5 years in the Electronics &amp; Communication domain. Experienced in testing multi-channel communication platforms including SMS, Email, WhatsApp, RCS, and IVR.
            </p>
            <p style={{ color: "#9491b0", lineHeight: 1.8, marginBottom: "32px", fontSize: "15px" }}>
              Strong expertise in functional, regression, and automation testing using <strong style={{ color: "#eeedfb" }}>Selenium, Java, and TestNG</strong>. Proven ability to improve product quality in Agile environments — achieving 98% test coverage and reducing regression time by 43%.
            </p>

            <div className="responsive-grid-details">
              {[
                { label: "Location", val: "Ahmedabad, Gujarat, India" },
                { label: "Experience", val: "3+ Years in QA" },
                { label: "Email", val: "vikaszalavadiya1995@gmail.com" },
                { label: "Specialization", val: "Automation & Functional Testing" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "14px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}>
                  <div className="info-label">{item.label}</div>
                  <div className="info-val" style={{ marginTop: "4px" }}>{item.val}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/vikaszalavadiya", external: true },
                { label: "GitHub", href: "https://github.com/vikaszalavadiya", external: true },
              ].map((s) => (
                <a key={s.label} href={s.href} data-testid={`link-social-${s.label.toLowerCase()}`}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  style={{
                    padding: "10px 22px", borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#9491b0", fontSize: "13px", fontWeight: 500,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(124,111,255,0.4)"; el.style.color = "#a89dff"; el.style.background = "rgba(124,111,255,0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "#9491b0"; el.style.background = "transparent"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
