import { useTypingEffect } from "../hooks";
import { personal } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiArrowDown, FiMail } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import { motion } from "framer-motion";

export default function Hero() {
  const typedRole = useTypingEffect(personal.roles, 75, 2000);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", padding: "80px 0 60px", overflow: "hidden" }}>
      {/* Grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)", pointerEvents: "none" }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", top: "10%", left: "-100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", bottom: "10%", right: "-80px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
          <div style={{ maxWidth: 720 }}>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: 100, marginBottom: 32 }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-secondary)", letterSpacing: "0.05em" }}>{personal.availability}</span>
              <span style={{ width: 1, height: 12, background: "var(--border)" }} />
              <FiMapPin size={11} color="var(--text-muted)" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>{personal.location}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 6vw, 4.4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}
            >
              Hi, I&apos;m{" "}
              <span style={{ background: "linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-violet) 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Rohit Bhujbal
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.5rem)", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 20, height: "2.2rem", display: "flex", alignItems: "center", gap: 8 }}
            >
              <SiReact style={{ color: "var(--accent-cyan)", animation: "spin 8s linear infinite", flexShrink: 0 }} size={20} />
              <span>{typedRole}</span>
              <span style={{ width: 2, height: "1.2em", background: "var(--accent-cyan)", display: "inline-block", animation: "blink 1s step-end infinite" }} />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{ fontSize: "1.02rem", color: "var(--text-secondary)", maxWidth: 560, marginBottom: 40, lineHeight: 1.75 }}
            >
              {personal.tagline}{" "}
              <span style={{ color: "var(--text-primary)" }}>2.8+ years building production ERP systems and web apps with React.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}
            >
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-ghost">Let&apos;s Talk</a>
            </motion.div>

            {/* Social links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {[
                { href: personal.github, icon: <FiGithub size={18} />, label: "GitHub" },
                { href: personal.linkedin, icon: <FiLinkedin size={18} />, label: "LinkedIn" },
                { href: personal.twitter, icon: <FiTwitter size={18} />, label: "Twitter" },
                { href: `mailto:${personal.email}`, icon: <FiMail size={18} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ color: "var(--text-muted)", transition: "all 0.2s ease", display: "flex" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent-cyan)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {icon}
                </a>
              ))}
              <div style={{ width: 1, height: 18, background: "var(--border)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>{personal.email}</span>
            </motion.div>
          </div>

          {/* Floating code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="code-card-hide"
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px",
              fontFamily: "var(--font-mono)", fontSize: "0.82rem", lineHeight: 1.7,
              width: 280, animation: "float 6s ease-in-out infinite",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,212,255,0.05)",
            }}
          >
            <div style={{ marginBottom: 6, color: "#6b7280" }}>{'// Rohit.js'}</div>
            <div><span style={{ color: "#c792ea" }}>const </span><span style={{ color: "#82aaff" }}>dev</span> = {'{'}</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#80cbc4" }}>name</span>: <span style={{ color: "#c3e88d" }}>"Rohit Bhujbal"</span>,</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#80cbc4" }}>role</span>: <span style={{ color: "#c3e88d" }}>"React Dev"</span>,</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#80cbc4" }}>exp</span>: <span style={{ color: "#f78c6c" }}>2.8</span>, <span style={{ color: "#6b7280" }}>// years</span></div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#80cbc4" }}>stack</span>: [<span style={{ color: "#c3e88d" }}>"React"</span>, <span style={{ color: "#c3e88d" }}>"JS"</span>],</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#80cbc4" }}>open</span>: <span style={{ color: "#22c55e" }}>true</span></div>
            <div>{'}'}</div>
            <div style={{ marginTop: 8, color: "#6b7280" }}>{'// Based in Pune 🇮🇳'}</div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, animation: "float 2.5s ease-in-out infinite" }}
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>scroll</span>
        <FiArrowDown size={15} color="var(--text-muted)" />
      </motion.button>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .code-card-hide { display: none !important; } }
      `}</style>
    </section>
  );
}
