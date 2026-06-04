import { motion } from "framer-motion";

const categories = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: "Testing Types",
    skills: ["Functional", "Smoke", "Sanity", "Regression", "Exploratory", "Pre/Post-Deployment", "Ad-hoc", "Load Testing"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Automation",
    skills: ["Selenium", "Java", "TestNG", "Maven"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: "API Testing",
    skills: ["Postman", "REST APIs", "SMS", "WhatsApp", "Email", "IVR"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Tools & Tracking",
    skills: ["JIRA", "Confluence", "Git"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    title: "Platforms Tested",
    skills: ["Web Applications", "IVR Systems", "Agent & Supervisor UI", "NMS GUI", "Omnichannel Notification Platforms", "Voice & Calling Applications"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: "Domain Knowledge",
    skills: ["CCaaS (Contact Center as a Service)", "SaaS Applications", "Notification Systems (SMS, Email, WhatsApp, IVR)", "Electronics & Comm"],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: "110px 0" }}>
      <div className="responsive-container">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          Technical Expertise
        </motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Skills &amp; Technologies
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(clamp(250px, 100%, 300px), 1fr))", gap: "20px" }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.07 }}
              className="glass-card"
              style={{ padding: "28px" }}
              data-testid={`skill-cat-${i}`}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#7c6fff", flexShrink: 0,
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "15px", fontWeight: 600, color: "#eeedfb" }}>{cat.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag" data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
