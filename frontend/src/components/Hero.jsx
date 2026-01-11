import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Sarang Sursaut</h1>
          <p className="hero-subtitle">
            Full-stack Developer | React | Node.js | TypeScript
          </p>
          <p className="hero-description">
            I build responsive web applications with modern technologies and
            best practices. Passionate about writing clean, maintainable code.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar">
            <div className="avatar-placeholder">SS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
