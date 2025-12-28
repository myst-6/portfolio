import './Achievements.css'

interface Achievement {
  title: string
  description: string
  year?: string
  highlight?: boolean
}

const achievements: Achievement[] = [
  {
    title: '1st Place UK - OUCC Elite Division 2024',
    description: 'Oxford University Computing Challenge from a field of over 300,000 students',
    year: '2024',
    highlight: true
  },
  {
    title: 'Codeforces Master',
    description: 'Peak rating 2290, top 0.5% worldwide',
    year: '2024',
    highlight: true
  },
  {
    title: 'WEOI 2024 - Silver Medal',
    description: 'Western European Olympiad in Informatics - Placed 5th in camp to qualify',
    year: '2024'
  },
  {
    title: 'WEOI 2023 - Bronze Medal',
    description: 'Western European Olympiad in Informatics - Placed 6th in camp to qualify',
    year: '2023'
  },
  {
    title: 'British Informatics Olympiad Finalist',
    description: 'Top 15 students in the country to qualify for the Finals',
    year: '2023/2024'
  },
  {
    title: 'Codewars 1 dan',
    description: '#25 in JavaScript worldwide',
    year: '2024'
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
            >
              {achievement.year && (
                <div className="achievement-year">{achievement.year}</div>
              )}
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

