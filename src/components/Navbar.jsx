import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personal } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(5,8,22,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "var(--text-primary)" }}>
            rb<span style={{ color: "var(--accent-cyan)" }}>.</span>
          </span>
        </a>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {navLinks.slice(1).map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.83rem", fontWeight: 500,
                color: active === link.href.replace("#", "") ? "var(--accent-cyan)" : "var(--text-secondary)",
                textDecoration: "none", padding: "6px 12px", borderRadius: 6, transition: "all 0.2s ease",
                background: active === link.href.replace("#", "") ? "rgba(0,212,255,0.08)" : "transparent",
              }}
            >
              {link.label}
            </a>
          ))}
          <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "8px 18px", fontSize: "0.82rem", marginLeft: 8 }}>
            Resume
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }} className="mobile-menu-btn" aria-label="Toggle menu">
          <div style={{ width: 22, height: 2, background: "var(--accent-cyan)", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "var(--accent-cyan)", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "var(--accent-cyan)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(5,8,22,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid var(--border)" }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column" }}>
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  style={{ color: "var(--text-secondary)", textDecoration: "none", padding: "12px 0", fontSize: "0.9rem", borderBottom: "1px solid var(--border)" }}>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
