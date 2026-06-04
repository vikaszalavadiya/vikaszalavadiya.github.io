import { motion } from "framer-motion";

const experiences = [
  {
    role: "Quality Assurance Engineer",
    company: "Phonon Communications Pvt Ltd",
    location: "Vadodara, Gujarat",
    period: "April 2023 – Present",
    current: true,
    highlights: [
      "Executed functional, smoke, sanity, regression, load, and ad-hoc testing across 4 UI modules, achieving 98% test coverage.",
      "Performed Pre and Post-deployment testing to ensure smooth production releases.",
      "Conducted API testing using Postman to validate workflows for SMS, WhatsApp, Email, and IVR calling.",
      "Prepared detailed test cases, bug reports, and test planning documents based on user stories and business requirements.",
      "Maintained test documentation in Confluence and tracked defects in JIRA, improving QA productivity by 15%.",
      "Automated regression testing using Selenium, Java, TestNG, and Maven, reducing execution time by 43%.",
    ],
    tags: ["Selenium", "Java", "TestNG", "Maven", "Postman", "JIRA", "Confluence"],
  },
  {
    role: "Project Engineer",
    company: "PranisKom Solutions Pvt Ltd",
    location: "Vadodara, Gujarat",
    period: "September 2017 – March 2023",
    current: false,
    highlights: [
      "Tested NMS GUI applications controlling 100+ RF devices across 6 locations in India.",
      "Executed on-site implementation, testing, and commissioning for ISRO, AIR, DRDO, and BSNL projects.",
      "Contributed to testing and validation of RF equipment and communication hardware.",
    ],
    tags: ["NMS GUI", "RF Systems", "On-site Testing", "Communication Hardware"],
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ padding: "110px 0", background: "#07071a", position: "relative" }}>
      <div className="section-divider" />
      <div className="responsive-container">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Career
        </motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Work Experience
        </motion.h2>

        <div style={{ position: "relative", paddingLeft: "32px" }}>
          <div className="tl-line" style={{ left: 0 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{ position: "relative" }}
                data-testid={`experience-card-${i}`}
              >
                {/* Timeline dot */}
                <div style={{
                  position: "absolute", left: "-38px", top: "28px",
                  width: "12px", height: "12px", borderRadius: "50%",
                  background: exp.current ? "#7c6fff" : "#0c0c20",
                  border: exp.current ? "2px solid #7c6fff" : "2px solid rgba(255,255,255,0.15)",
                  boxShadow: exp.current ? "0 0 12px rgba(124,111,255,0.5)" : "none",
                }} />

                <div className="glass-card" style={{ padding: "clamp(20px, 4vw, 32px)" }}>
                  <div className="responsive-flex-header" style={{ marginBottom: "20px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: "var(--font-head)", fontSize: "18px", fontWeight: 700, color: "#eeedfb" }}>{exp.role}</h3>
                        {exp.current && (
                          <span style={{
                            padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 600,
                            background: "rgba(25,195,125,0.1)", border: "1px solid rgba(25,195,125,0.25)", color: "#19c37d",
                          }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p style={{ color: "#7c6fff", fontSize: "14px", fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <div className="experience-meta">
                      <p style={{ color: "#9491b0", fontSize: "13px", marginBottom: "4px" }}>{exp.period}</p>
                      <p style={{ color: "#8b88a8", fontSize: "12px" }}>{exp.location}</p>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", gap: "12px", color: "#9491b0", fontSize: "14px", lineHeight: 1.7 }}>
                        <span style={{ marginTop: "8px", width: "4px", height: "4px", borderRadius: "50%", background: "#7c6fff", flexShrink: 0, opacity: 0.7 }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-tag" style={{ fontSize: "12px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .experience-meta { text-align: left; }
        @media (min-width: 960px) {
          .experience-meta { text-align: right; }
        }
      `}</style>
    </section>
  );
}
