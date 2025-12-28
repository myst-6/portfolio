import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a Computer Science student at Trinity College Cambridge, 
              ranked 15th in my first-year cohort. My passion lies in algorithmic 
              problem-solving and building scalable software systems.
            </p>
            <div className="about-grid">
              <div className="about-item">
                <h3>Education</h3>
                <p>BA Computer Science</p>
                <p className="detail">Trinity College Cambridge</p>
                <p className="detail">2024 – 2027</p>
              </div>
              <div className="about-item">
                <h3>Focus</h3>
                <p>Competitive Programming</p>
                <p>Full-Stack Development</p>
                <p>Systems & Algorithms</p>
              </div>
              <div className="about-item">
                <h3>Interests</h3>
                <p>Gym & Running</p>
                <p>Learning Japanese (&gt;N4)</p>
                <p>Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

