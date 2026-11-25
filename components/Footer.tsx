import Scene from "./Scene";
import { person } from "@/data/resume";

export default function Footer() {
  return (
    <footer id="contact" className="foot">
      <div className="foot-top">
        <span className="proj-idx">// 04 · contact</span>
        <h2 className="foot-title">Got a system that has to hold up? <em>Let&rsquo;s talk.</em></h2>
        <div className="foot-links">
          <a href="tel:+919056129686">{person.phone}</a>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.github} target="_blank" rel="noreferrer">github.com/Pranay2603 ↗</a>
          <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <Scene variant="footer" />
      <div className="foot-bar">
        <span>© 2026 Pranay Gupta</span>
        <span>Built with Next.js + GSAP</span>
      </div>
    </footer>
  );
}
