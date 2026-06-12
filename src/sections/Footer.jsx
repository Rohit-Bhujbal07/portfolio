import { personal, navLinks } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "48px 0 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 36 }}>
          {/* Logo */}
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--text-primary)" }}>
              rb<span style={{ color: "var(--accent-cyan)" }}>.</span>
            </span>
            <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 6, fontFamily: "var(--font-mono)" }}>React.js Developer · Pune, India</p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {navLinks.slice(1).map(l => (
              <a key={l.href} href={l.href} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.84rem", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent-cyan)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { href: personal.github, icon: <FiGithub size={17} />, label: "GitHub" },
              { href: personal.linkedin, icon: <FiLinkedin size={17} />, label: "LinkedIn" },
              { href: personal.twitter, icon: <FiTwitter size={17} />, label: "Twitter" },
              { href: `mailto:${personal.email}`, icon: <FiMail size={17} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ width: 36, height: 36, borderRadius: 8, background: "var(--bg-card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", transition: "all 0.2s ease", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.color = "var(--accent-cyan)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontFamily: "var(--font-mono)" }}>
            © {year} Rohit Bhujbal. Built with React + Vite + Tailwind CSS.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontFamily: "var(--font-mono)" }}>
            Designed & Developed by <span style={{ color: "var(--accent-cyan)" }}>Rohit Bhujbal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
