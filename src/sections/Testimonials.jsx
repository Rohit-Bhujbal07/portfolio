import { useState } from "react";
import { useScrollReveal } from "../hooks";
import { testimonials } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#fbbf24", fontSize: "0.85rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section" style={{ background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label" style={{ textAlign: "center" }}>Kind words</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>What People <span className="gradient-text">Say</span></h2>
          <div className="divider" style={{ margin: "14px auto 48px" }} />

          {/* Main card */}
          <div style={{ position: "relative", minHeight: 220 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card"
                style={{ padding: "40px 44px", position: "relative", overflow: "hidden" }}
              >
                {/* Quote mark */}
                <div style={{ position: "absolute", top: 20, right: 32, fontSize: "6rem", lineHeight: 1, color: "rgba(0,212,255,0.06)", fontFamily: "Georgia, serif", fontWeight: 900, pointerEvents: "none" }}>"</div>

                <Stars count={testimonials[active].rating} />
                <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "20px 0 28px", fontStyle: "italic" }}>
                  "{testimonials[active].text}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", color: "var(--bg-primary)", flexShrink: 0 }}>
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}>{testimonials[active].name}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{testimonials[active].role} · {testimonials[active].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + arrows */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 28 }}>
            <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)", width: 36, height: 36, borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", fontSize: "1rem" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent-cyan)"; e.currentTarget.style.color = "var(--accent-cyan)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}>
              ←
            </button>
            <div style={{ display: "flex", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 20 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === active ? "var(--accent-cyan)" : "var(--text-muted)", transition: "all 0.3s ease", boxShadow: i === active ? "0 0 8px var(--accent-cyan)" : "none" }} />
              ))}
            </div>
            <button onClick={() => setActive((active + 1) % testimonials.length)} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)", width: 36, height: 36, borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", fontSize: "1rem" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent-cyan)"; e.currentTarget.style.color = "var(--accent-cyan)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}>
              →
            </button>
          </div>

          {/* All cards row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 40 }}>
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                style={{ background: i === active ? "rgba(0,212,255,0.05)" : "var(--bg-card)", border: `1px solid ${i === active ? "var(--border-accent)" : "var(--border)"}`, borderRadius: 12, padding: "16px", cursor: "pointer", textAlign: "left", transition: "all 0.3s ease" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "var(--bg-primary)", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.82rem" }}>{t.name}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>{t.role}</p>
                  </div>
                </div>
                <Stars count={t.rating} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          #testimonials .card { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  );
}
