import { useScrollReveal } from "../hooks";
import { blogPosts } from "../data/portfolio";
import { FiArrowUpRight, FiClock, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const tagColors = {
  "React": { bg: "rgba(97,218,251,0.08)", border: "rgba(97,218,251,0.2)", color: "#61dafb" },
  "Claude API": { bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.2)", color: "var(--accent-pink)" },
  "AI": { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", color: "#a78bfa" },
  "Architecture": { bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.2)", color: "var(--accent-cyan)" },
  "ERP": { bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.2)", color: "#fbbf24" },
  "Hooks": { bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)", color: "#34d399" },
  "Best Practices": { bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.2)", color: "var(--accent-cyan)" },
};

export default function Blog() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="blog" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label">Thoughts & tutorials</p>
          <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
          <div className="divider" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card"
                style={{ padding: "28px", display: "flex", flexDirection: "column", cursor: "pointer" }}
                onClick={() => {/* future: open blog */}}
              >
                {/* Tags */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                  {post.tags.map(tag => {
                    const style = tagColors[tag] || tagColors["Architecture"];
                    return (
                      <span key={tag} style={{ padding: "3px 9px", background: style.bg, border: `1px solid ${style.border}`, borderRadius: 100, fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: style.color }}>{tag}</span>
                    );
                  })}
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.5, marginBottom: 12, flex: 1 }}>{post.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>

                {/* Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      <FiCalendar size={11} /> {post.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      <FiClock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <span style={{ color: "var(--accent-cyan)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 4, fontWeight: 500 }}>
                    Read <FiArrowUpRight size={13} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>More articles coming soon. Follow me on LinkedIn for updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
