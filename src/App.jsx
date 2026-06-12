import Navbar from "./components/Navbar";
import { Hero, About, Skills, Experience, Projects, Testimonials, Blog, Contact, Footer } from "./sections";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
