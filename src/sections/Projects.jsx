import { useState } from "react";
import { useScrollReveal } from "../hooks";
import { projects } from "../data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const categories = ["All", "AI Tool", "ERP / Web App"];

export default function Projects() {
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="divider" />

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "7px 18px", borderRadius: 100, border: "1px solid",
                  fontFamily: "var(--font-mono)", fontSize: "0.78rem", cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderColor: active === cat ? "var(--accent-cyan)" : "var(--border)",
                  background: active === cat ? "rgba(0,212,255,0.1)" : "transparent",
                  color: active === cat ? "var(--accent-cyan)" : "var(--text-muted)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="card"
                style={{ padding: "28px", display: "flex", flexDirection: "column", height: "100%" }}
              >
                {/* Top: folder + links */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ fontSize: "1.6rem" }}>
                      {proj.category === "AI Tool" ? "🤖" : "⚡"}
                    </div>
                    {proj.featured && (
                      <span style={{ padding: "2px 8px", background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)", borderRadius: 100, fontSize: "0.65rem", fontFamily: "var(--font-mono)", color: "var(--accent-pink)" }}>Featured</span>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--accent-cyan)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                        <FiGithub size={17} />
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--accent-cyan)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>{proj.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{proj.description}</p>

                {/* Status + category */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: proj.status === "Production" ? "#22c55e" : "var(--accent-cyan)" }}>
                    ● {proj.status}
                  </span>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{proj.category}</span>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {proj.tech.map(t => (
                    <span key={t} className="tag" style={{ fontSize: "0.68rem", padding: "3px 9px" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 16 }}>Want to see more? All public projects are on GitHub.</p>
            <a href="https://github.com/rohitbhujbal" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FiGithub size={15} /> View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
