import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with experience in building
              scalable web applications. I love solving problems and learning
              new technologies.
            </p>
            <p>
              With expertise in JavaScript, TypeScript, React, and Node.js, I
              create efficient and user-friendly solutions. I'm committed to
              writing clean code and following industry best practices.
            </p>
            <p>
              Currently focused on building responsive web applications and
              exploring cloud technologies. Always eager to collaborate and
              contribute to meaningful projects.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>1</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
