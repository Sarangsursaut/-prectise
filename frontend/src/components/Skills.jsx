import '../styles/Skills.css'

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'CSS3', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Vite', 'ESLint'] },
    { category: 'Other', items: ['REST APIs', 'JWT', 'Responsive Design', 'UI/UX'] },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
