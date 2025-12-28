import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-vertical-text">PORTFOLIO 2025</div>
        <h1 className="hero-name">
          <span className="hero-name-line">Boris</span>
          <span className="hero-name-line">Hall</span>
        </h1>
        <p className="hero-subtitle">Software Engineer</p>
        <div className="hero-details">
          <p>Trinity College Cambridge · Computer Science</p>
          <p>Incoming SWE Intern @ Jane Street · Summer 2026</p>
          <p>Codeforces Master · WEOI Silver Medalist</p>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </section>
  )
}

export default Hero

