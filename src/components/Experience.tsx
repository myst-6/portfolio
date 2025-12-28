import './Experience.css'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  highlight?: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Jane Street',
    location: 'London',
    period: 'Summer 2026',
    description: ['Incoming SWE Intern'],
    highlight: 'Incoming'
  },
  {
    title: 'Full Stack Software Engineer Intern',
    company: 'Iterate',
    location: 'London',
    period: 'June 2025 – Sept 2025',
    description: [
      'Worked mainly on the integrations system of the product, including managing secrets obtained through different types of OAuth flow and handling authentication and authorisation.',
      'Added MCP support to AI agents in a multiplayer chat room environment, which automatically integrated with the above system through discovery endpoints and dynamic client registration.',
      'Given a full-time return offer because of outstanding communication and quality of work, but declined to pursue studies.'
    ]
  },
  {
    title: 'Front-End Software Engineer Intern',
    company: 'Payable',
    location: 'Remote',
    period: 'June 2023 – Sept 2023',
    description: [
      'Built an ROI calculator for the landing page of their website using React and TypeScript.',
      'Maintained consistent communication with mentor and co-workers, asking for advice and providing suggestions.',
      'Presented work to the wider team; project was highly regarded.'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              {exp.highlight && (
                <div className="experience-badge">{exp.highlight}</div>
              )}
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="experience-company">{exp.company} · {exp.location}</p>
                </div>
                <p className="experience-period">{exp.period}</p>
              </div>
              <ul className="experience-description">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

