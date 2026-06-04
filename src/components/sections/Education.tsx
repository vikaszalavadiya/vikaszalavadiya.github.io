import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics & Communication Engineering",
    institution: "Sardar Vallabhbhai Patel Institute of Technology",
    period: "August 2014 – June 2017",
    cgpa: "8.20",
  },
  {
    degree: "Diploma Engineering",
    field: "Electronics & Communication Engineering",
    institution: "Sigma Institute of Technology and Engineering",
    period: "June 2011 – May 2014",
    cgpa: "8.22",
  },
];

const certifications = [
  { title: "Selenium Automation Testing with Java", issuer: "Udemy" },
  { title: "Software Manual Testing", issuer: "Udemy" },
  { title: "Git Tutorial Course", issuer: "Great Learning" },
];

const achievements = [
  { title: "AWS Cost Optimization Award", issuer: "Phonon Communications · 2025" },
  { title: '"Movers of Mountain" Award', issuer: "Phonon Communications · 2024" },
  { title: "Academic Scholarship", issuer: "SVIT · 2014 – 2017" },
];

export function Education() {
  return (
    <section id="education" style={{ padding: "110px 0", background: "#07071a", position: "relative" }}>
      <div className="section-divider" />
      <div className="responsive-container">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Background
        </motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Education &amp; Certifications
        </motion.h2>

        <div className="responsive-grid-education">
          {/* Education */}
          <div>
            <h3 style={{ fontFamily: "var(--font-head)", fontSize: "13px", fontWeight: 600, color: "#7c6fff", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "24px" }}>
              Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass-card"
                  style={{ padding: "24px" }}
                  data-testid={`education-card-${i}`}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "#eeedfb", fontSize: "15px", marginBottom: "4px" }}>{edu.degree}</p>
                      <p style={{ color: "#7c6fff", fontSize: "13px" }}>{edu.field}</p>
                    </div>
                    <span style={{
                      flexShrink: 0, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700,
                      background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.22)", color: "#a89dff",
                    }}>
                      {edu.cgpa}
                    </span>
                  </div>
                  <p style={{ color: "#9491b0", fontSize: "12px" }}>{edu.institution}</p>
                  <p style={{ color: "#8b88a8", fontSize: "12px", marginTop: "2px" }}>{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certs + Achievements */}
          <div>
            <h3 style={{ fontFamily: "var(--font-head)", fontSize: "13px", fontWeight: 600, color: "#19c37d", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "24px" }}>
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="glass-card"
                  style={{ padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: "14px" }}
                  data-testid={`cert-card-${i}`}
                >
                  <span style={{ color: "#19c37d", marginTop: "2px", flexShrink: 0 }}>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#eeedfb", lineHeight: 1.4 }}>{cert.title}</p>
                    <p style={{ fontSize: "11px", color: "#9491b0", marginTop: "2px" }}>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 style={{ fontFamily: "var(--font-head)", fontSize: "13px", fontWeight: 600, color: "#ff6b47", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "16px" }}>
              Achievements
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass-card"
                  style={{ padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: "14px" }}
                  data-testid={`achievement-card-${i}`}
                >
                  <span style={{ color: "#ff6b47", marginTop: "2px", flexShrink: 0 }}>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#eeedfb" }}>{a.title}</p>
                    <p style={{ fontSize: "11px", color: "#9491b0", marginTop: "2px" }}>{a.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
