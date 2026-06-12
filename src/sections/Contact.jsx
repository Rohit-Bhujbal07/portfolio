import { useState } from "react";
import { useScrollReveal } from "../hooks";
import { personal } from "../data/portfolio";
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiSend, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Simulate send — connect to Formspree / EmailJS in production
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }, 1200);
  };

  const inputStyle = {
    width: "100%", background: "var(--bg-card)", border: "1px solid var(--border)",
    borderRadius: 10, padding: "12px 16px", color: "var(--text-primary)",
    fontFamily: "var(--font-body)", fontSize: "0.9rem", outline: "none",
    transition: "border-color 0.2s ease",
  };

  const links = [
    { icon: <FiMail size={18} />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FiLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/rohitbhujbal", href: personal.linkedin },
    { icon: <FiGithub size={18} />, label: "GitHub", value: "github.com/rohitbhujbal", href: personal.github },
    { icon: <FiTwitter size={18} />, label: "Twitter", value: "twitter.com/rohitbhujbal", href: personal.twitter },
  ];

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <p className="section-label" style={{ textAlign: "center" }}>Let's connect</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Get In <span className="gradient-text">Touch</span></h2>
          <div className="divider" style={{ margin: "14px auto 48px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>
            {/* Left: info */}
            <div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 32 }}>
                I'm currently open to new opportunities — full-time roles, freelance projects, or just a good tech conversation. Reach out and I'll get back to you within 24 hours.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
                {links.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", padding: "14px 18px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, transition: "all 0.2s ease", color: "var(--text-primary)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--bg-card)"; }}
                  >
                    <span style={{ color: "var(--accent-cyan)", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ padding: "16px 18px", background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <FiMapPin size={14} style={{ color: "var(--accent-cyan)", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Location</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>Pune, Maharashtra, India</p>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
                  <span style={{ fontSize: "0.72rem", color: "#22c55e", fontFamily: "var(--font-mono)" }}>Available</span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="card" style={{ padding: "36px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: 24 }}>Send a Message</h3>

              {status === "sent" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
                  <p style={{ color: "var(--accent-cyan)", fontWeight: 600, fontFamily: "var(--font-display)", fontSize: "1.1rem", marginBottom: 8 }}>Message Sent!</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Thanks for reaching out. I'll reply within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>Name *</label>
                      <input
                        style={inputStyle}
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => e.target.style.borderColor = "var(--border-accent)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>Email *</label>
                      <input
                        type="email"
                        style={inputStyle}
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => e.target.style.borderColor = "var(--border-accent)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>Subject</label>
                    <input
                      style={inputStyle}
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={e => e.target.style.borderColor = "var(--border-accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>Message *</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: 130, resize: "vertical" }}
                      placeholder="Tell me about the opportunity or project..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => e.target.style.borderColor = "var(--border-accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }} disabled={status === "sending"}>
                    <FiSend size={14} />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .section > div > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
