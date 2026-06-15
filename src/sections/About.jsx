import { useScrollReveal } from "../hooks";
import { personal, skillTags } from "../data/portfolio";
import { FiMapPin, FiCalendar, FiBriefcase, FiDownload } from "react-icons/fi";
import { SiReact, SiJavascript, SiTailwindcss, SiGit } from "react-icons/si";
import { motion } from "framer-motion";

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "15+", label: "Modules Built" },
  { value: "2", label: "Companies" },
  { value: "100%", label: "Dedication" },
];

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="section" style={{ background: "linear-gradient(180deg, var(--bg-primary) 0%, rgba(13,17,23,0.5) 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="divider" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            {/* Left: Text */}
            <div>
              {/* Avatar placeholder */}
              <div style={{
                width: 120, height: 120, borderRadius: 20,
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28, fontSize: "2.5rem", fontFamily: "var(--font-display)", fontWeight: 800,
                color: "var(--bg-primary)", boxShadow: "0 0 30px rgba(0,212,255,0.3)",
              }}>RB</div>

              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 20 }}>
                {personal.bio}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
                When I'm not writing React components, I'm learning new tech, reading about software architecture, or exploring ways to make complex UIs feel simple and fast.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  { icon: <FiMapPin size={14} />, text: personal.location },
                  { icon: <FiBriefcase size={14} />, text: "Logicloom IT Solutions Pvt Ltd" },
                  { icon: <FiCalendar size={14} />, text: "Available for new opportunities" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                    <span style={{ color: "var(--accent-cyan)" }}>{icon}</span>
                    {text}
                  </div>
                ))}
              </div>

              <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "fit-content" }}>
                <FiDownload size={14} /> Download Resume
              </a>
            </div>

            {/* Right: Stats + Skills */}
            <div>
              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    style={{
                      background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
                      padding: "20px", textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {s.value}
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: 4, fontFamily: "var(--font-mono)" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tech icons */}
              <div style={{ marginBottom: 28 }}>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>Core Stack</p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {[
                    { icon: <SiReact size={28} />, name: "React", color: "#61dafb" },
                    { icon: <SiJavascript size={28} />, name: "JS", color: "#f7df1e" },
                    { icon: <SiTailwindcss size={28} />, name: "Tailwind", color: "#38bdf8" },
                    { icon: <SiGit size={28} />, name: "Git", color: "#f05032" },
                  ].map(({ icon, name, color }) => (
                    <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                      <div style={{ color, filter: "drop-shadow(0 0 6px currentColor)" }}>{icon}</div>
                      <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill tags */}
              <div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>All Skills</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skillTags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .section > div > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
