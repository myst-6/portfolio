import './Projects.css'

interface Project {
  title: string
  period: string
  description: string
  highlights: string[]
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Sparkmark',
    period: 'Aug 2025 – present',
    description: 'Website for teachers to organise classes, create tests and assignments, and mark results using AI',
    highlights: [
      'Built an MVP for use by mother at school, allowing her to upload powerpoints and create homework assignments from them, and have students\' submissions be automatically graded, including essays and code blocks.',
      'Uses React+Vite w/ extensive use of the Cloudflare ecosystem for future scalability and reliability.'
    ],
    tags: ['React', 'Vite', 'Cloudflare', 'AI', 'TypeScript']
  },
  {
    title: 'BIO Helper',
    period: 'Aug 2024 – Dec 2024',
    description: 'Website built with Next.js to help students prepare for the British Informatics Olympiad (BIO)',
    highlights: [
      'Managed a team of 12 contributors through 1025 commits by reviewing code changes on GitHub.',
      'Explored cloud services including VM rental for an online grader and used cloud functions to build an API (Recently replaced with Containers for cheaper and faster execution).',
      'Deepened understanding of algorithmic concepts by writing and reviewing editorials and solutions for past BIO problems.'
    ],
    tags: ['Next.js', 'Team Lead', 'Cloud', 'Algorithms'],
    link: 'https://www.britishinformatics.org'
  },
  {
    title: 'Codeforces Round 982',
    period: 'Oct 2024',
    description: 'Authored five hardest problems for Codeforces Round 982',
    highlights: [
      'Adapted problems to feedback from coordinators and testers.',
      'Contest attracted 25,000+ participants and was well-received.'
    ],
    tags: ['Competitive Programming', 'Problem Setting'],
    link: 'https://codeforces.com/contest/2027'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

