import { motion } from "framer-motion";

const project1Metrics = [
  { value: "85%", label: "Test Coverage" },
  { value: "43%", label: "Faster Execution" },
  { value: "15%", label: "QA Productivity" },
  { value: "5+", label: "Channels Tested" },
];

const project2Metrics = [
  { value: "98%", label: "Test Coverage" },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "110px 0" }}>
      <div className="responsive-container">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Work
        </motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Selected Projects
        </motion.h2>

        {/* Project 1 — Notification Automation Suite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ overflow: "hidden", marginBottom: "24px" }}
        >
          {/* Card top band */}
          <div style={{
            padding: "clamp(20px, 4vw, 28px) clamp(16px, 4vw, 32px) 0",
            background: "linear-gradient(135deg, rgba(124,111,255,0.12), rgba(25,195,125,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.055)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "5px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: 600,
                background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.25)", color: "#a89dff",
                letterSpacing: "1px", textTransform: "uppercase",
              }}>
                Featured Project
              </span>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Selenium", "Java", "TestNG"].map((t) => (
                  <span key={t} className="skill-tag" style={{ fontSize: "11px", padding: "4px 10px" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Terminal mock */}
            <div style={{
              background: "rgba(5,5,16,0.8)", borderRadius: "12px 12px 0 0",
              border: "1px solid rgba(255,255,255,0.07)", borderBottom: "none",
              padding: "20px 24px", fontFamily: "monospace", fontSize: "13px",
              overflowX: "auto",
            }}>
              <div style={{ display: "flex", gap: "6px", marginBottom: "16px", minWidth: "320px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: "8px", fontSize: "11px", color: "#8b88a8" }}>RegressionSuite.java</span>
              </div>
              <div style={{ lineHeight: 1.9, color: "#9491b0", minWidth: "480px" }}>
                <p><span style={{ color: "#7c6fff" }}>@Test</span></p>
                <p><span style={{ color: "#a89dff" }}>public void</span> <span style={{ color: "#19c37d" }}>testNotificationFlow</span><span style={{ color: "#eeedfb" }}>()</span> <span style={{ color: "#eeedfb" }}>{"{"}</span></p>
                <p style={{ paddingLeft: "24px" }}><span style={{ color: "#7a7899" }}>// Validate multi-channel delivery — SMS, Email, WhatsApp, IVR</span></p>
                <p style={{ paddingLeft: "24px" }}><span style={{ color: "#eeedfb" }}>driver.sendSMS(</span><span style={{ color: "#ff6b47" }}>"test_payload"</span><span style={{ color: "#eeedfb" }}>);</span></p>
                <p style={{ paddingLeft: "24px" }}><span style={{ color: "#a89dff" }}>Assert</span><span style={{ color: "#eeedfb" }}>.assertTrue(delivered);</span></p>
                <p><span style={{ color: "#eeedfb" }}>{"}"}</span></p>
                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#19c37d", animation: "pulseDot 2s infinite" }} />
                  <span style={{ color: "#19c37d" }}>BUILD SUCCESS — 43% faster regression · 5+ channels covered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: "clamp(20px, 4vw, 32px)" }}>
            <div className="responsive-grid-projects">
              <div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "24px", fontWeight: 700, color: "#eeedfb", marginBottom: "14px" }}>
                  Notification Automation Suite
                </h3>
                <p style={{ color: "#9491b0", lineHeight: 1.8, fontSize: "15px", marginBottom: "16px" }}>
                  At Phonon Communications, I built a robust automated regression suite from the ground up for a multi-channel notification platform using Selenium, Java, and TestNG.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Automated end-to-end flows for SMS, Email, WhatsApp, and IVR notifications",
                    "Developed scripts for all critical UI elements — product menus, setup, and config pages for 100% functional stability",
                    "Reduced regression testing execution time by 43%, enabling faster product deployments",
                  ].map((point) => (
                    <li key={point} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#9491b0", fontSize: "14px", lineHeight: 1.7 }}>
                      <span style={{ color: "#7c6fff", marginTop: "4px", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-metrics-grid-1">
                {project1Metrics.map((m) => (
                  <div key={m.label} style={{
                    padding: "20px", borderRadius: "14px",
                    background: "rgba(124,111,255,0.06)", border: "1px solid rgba(124,111,255,0.12)",
                    textAlign: "center",
                  }}>
                    <p style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 800, color: "#7c6fff" }}>{m.value}</p>
                    <p style={{ fontSize: "11px", color: "#9491b0", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.8px" }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 — Contact Center Application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card"
          style={{ overflow: "hidden", marginBottom: "24px" }}
        >
          {/* Card top band */}
          <div style={{
            padding: "clamp(20px, 4vw, 28px) clamp(16px, 4vw, 32px) 0",
            background: "linear-gradient(135deg, rgba(25,195,125,0.1), rgba(255,107,71,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.055)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "5px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: 600,
                background: "rgba(25,195,125,0.1)", border: "1px solid rgba(25,195,125,0.25)", color: "#19c37d",
                letterSpacing: "1px", textTransform: "uppercase",
              }}>
                Featured Project
              </span>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Postman", "Jira", "Agent UI", "Supervisor UI"].map((t) => (
                  <span key={t} className="skill-tag" style={{ fontSize: "11px", padding: "4px 10px" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Postman-style mock */}
            <div style={{
              background: "rgba(5,5,16,0.8)", borderRadius: "12px 12px 0 0",
              border: "1px solid rgba(255,255,255,0.07)", borderBottom: "none",
              padding: "20px 24px", fontFamily: "monospace", fontSize: "13px",
              overflowX: "auto",
            }}>
              <div style={{ display: "flex", gap: "6px", marginBottom: "16px", minWidth: "320px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: "8px", fontSize: "11px", color: "#8b88a8" }}>contact-center-tests.postman</span>
              </div>
              <div style={{ lineHeight: 1.9, color: "#9491b0", minWidth: "480px" }}>
                <p>
                  <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(25,195,125,0.15)", color: "#19c37d", fontWeight: 700, marginRight: "10px" }}>POST</span>
                  <span style={{ color: "#eeedfb" }}>/api/v1/call/transfer</span>
                </p>
                <p style={{ paddingLeft: "8px" }}><span style={{ color: "#7a7899" }}>// Trigger inbound call transfer to agent</span></p>
                <p style={{ paddingLeft: "8px" }}>
                  <span style={{ color: "#a89dff" }}>Body: </span>
                  <span style={{ color: "#eeedfb" }}>{"{"}</span>
                  <span style={{ color: "#ff6b47" }}> "agentId"</span>
                  <span style={{ color: "#eeedfb" }}>: </span>
                  <span style={{ color: "#19c37d" }}>"A-104"</span>
                  <span style={{ color: "#eeedfb" }}>, </span>
                  <span style={{ color: "#ff6b47" }}>"type"</span>
                  <span style={{ color: "#eeedfb" }}>: </span>
                  <span style={{ color: "#19c37d" }}>"consultation"</span>
                  <span style={{ color: "#eeedfb" }}> {"}"}</span>
                </p>
                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#19c37d", animation: "pulseDot 2s infinite" }} />
                  <span style={{ color: "#19c37d" }}>200 OK — 98% test coverage · 0 critical bugs in production</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: "clamp(20px, 4vw, 32px)" }}>
            <div className="responsive-grid-projects">
              <div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "24px", fontWeight: 700, color: "#eeedfb", marginBottom: "14px" }}>
                  Contact Center Application
                </h3>
                <p style={{ color: "#9491b0", lineHeight: 1.8, fontSize: "15px", marginBottom: "16px" }}>
                  Conducted comprehensive manual testing for complex calling flows — inbound, outbound, and dialers — using Postman to trigger core workflows and Jira for effective bug tracking.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Rigorous manual testing for critical call handling: transfers, consultation calls, and conference features",
                    "Validated end-to-end user journeys across both Agent UI and Supervisor UI for seamless operations",
                    "Ensured high reliability of core communication systems, delivering a bug-free experience for contact center agents",
                  ].map((point) => (
                    <li key={point} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#9491b0", fontSize: "14px", lineHeight: 1.7 }}>
                      <span style={{ color: "#19c37d", marginTop: "4px", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-metrics-grid-2">
                {project2Metrics.map((m) => (
                  <div key={m.label} style={{
                    padding: "20px", borderRadius: "14px",
                    background: "rgba(25,195,125,0.06)", border: "1px solid rgba(25,195,125,0.15)",
                    textAlign: "center",
                  }}>
                    <p style={{ fontFamily: "var(--font-head)", fontSize: "22px", fontWeight: 800, color: "#19c37d" }}>{m.value}</p>
                    <p style={{ fontSize: "11px", color: "#9491b0", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.8px" }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        .project-metrics-grid-1 {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%;
        }
        .project-metrics-grid-2 {
          display: grid; grid-template-columns: 1fr; gap: 12px; width: 100%;
        }
        @media (min-width: 960px) {
          .project-metrics-grid-1 { width: auto; min-width: 280px; }
          .project-metrics-grid-2 { width: auto; min-width: 140px; }
        }
      `}</style>
    </section>
  );
}
