import { useScrollReveal } from "../hooks";
import { experience } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" className="section" style={{ background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label">Career journey</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="divider" />

          <div style={{ position: "relative", paddingLeft: 48 }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 6, top: 8, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--accent-cyan), var(--accent-violet), transparent)" }} />

            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                style={{ position: "relative", marginBottom: i < experience.length - 1 ? 48 : 0 }}
              >
                {/* Dot */}
                <div className="timeline-dot" style={{ position: "absolute", left: -42, top: 4 }} />

                <div className="card" style={{ padding: "28px 32px" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{exp.role}</h3>
                      <p style={{ color: "var(--accent-cyan)", fontSize: "0.9rem", fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ padding: "4px 12px", background: exp.type === "Full-time" ? "rgba(0,212,255,0.08)" : "rgba(244,114,182,0.08)", border: `1px solid ${exp.type === "Full-time" ? "rgba(0,212,255,0.2)" : "rgba(244,114,182,0.2)"}`, borderRadius: 100, fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: exp.type === "Full-time" ? "var(--accent-cyan)" : "var(--accent-pink)" }}>
                        {exp.type}
                      </span>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 6, fontFamily: "var(--font-mono)" }}>{exp.period}</p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>{exp.location} · {exp.duration}</p>
                    </div>
                  </div>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 18 }}>{exp.description}</p>

                  {/* Highlights */}
                  <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: "0.87rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--accent-cyan)", marginTop: 2, flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
