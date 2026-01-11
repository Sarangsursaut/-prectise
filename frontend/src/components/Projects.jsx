import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Nashamuktis Platform',
      description:
        'A full-featured platform focused on awareness and digital presence, including a public website and managed content system.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
      link: 'https://nashamuktis.com',
      github: '#',
    },
    {
      id: 2,
      title: 'FitBattle',
      description:
        'A fitness-focused platform encouraging healthy competition through challenges and user engagement.',
      tech: ['React', 'JavaScript', 'API Integration'],
      link: 'https://fitbattle.in',
      github: '#',
    },
    {
      id: 3,
      title: 'Artist Portfolio',
      description:
        'A clean and responsive portfolio website showcasing artwork with modern UI and smooth navigation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://artist.com',
      github: '#',
    },
    {
      id: 4,
      title: 'Reerth',
      description:
        'A professional business website focused on branding, content presentation, and SEO optimization.',
      tech: ['React', 'Vite', 'SEO'],
      link: 'https://reerth.in',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  View Website
                </a>

                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
