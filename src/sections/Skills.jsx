import { useScrollReveal } from "../hooks";
import { skills } from "../data/portfolio";
import { motion } from "framer-motion";

function SkillPill({ name, index, visible, color = "cyan" }) {
  const styles = {
    cyan: {
      background: "rgba(0,212,255,0.07)",
      border: "1px solid rgba(0,212,255,0.2)",
      color: "var(--accent-cyan)",
    },
    violet: {
      background: "rgba(124,58,237,0.07)",
      border: "1px solid rgba(124,58,237,0.2)",
      color: "#a78bfa",
    },
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={visible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 16px",
        borderRadius: 100,
        fontSize: "0.83rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        cursor: "default",
        transition: "all 0.2s ease",
        ...styles[color],
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = color === "cyan" ? "0 4px 16px rgba(0,212,255,0.15)" : "0 4px 16px rgba(124,58,237,0.2)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color === "cyan" ? "var(--accent-cyan)" : "#a78bfa", flexShrink: 0 }} />
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills & <span className="gradient-text">Expertise</span></h2>
          <div className="divider" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* Frontend */}
            <div className="card" style={{ padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>⚛</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>Frontend Development</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {skills.frontend.map((s, i) => (
                  <SkillPill key={s.name} name={s.name} index={i} visible={visible} color="cyan" />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card" style={{ padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🔧</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>Tools & Workflow</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {skills.tools.map((s, i) => (
                  <SkillPill key={s.name} name={s.name} index={i} visible={visible} color="violet" />
                ))}
              </div>
            </div>
          </div>

          {/* Currently learning */}
          <div style={{ marginTop: 32, padding: "24px 32px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, borderLeft: "3px solid var(--accent-cyan)" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Currently Learning →</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {skills.currently.map(s => (
                <span key={s} style={{ padding: "8px 16px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 100, fontSize: "0.78rem", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > div > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
