import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and algorithms.
          </p>
          <div className="contact-links">
            <a 
              href="mailto:mborishall@gmail.com" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">mborishall@gmail.com</span>
            </a>
            <a 
              href="https://github.com/myst-6" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">@myst-6</span>
            </a>
            <a 
              href="https://codeforces.com/profile/myst-6" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Codeforces</span>
              <span className="contact-value">@myst-6</span>
            </a>
            <div className="contact-link">
              <span className="contact-label">Location</span>
              <span className="contact-value">London, UK</span>
            </div>
          </div>
          <div className="contact-footer">
            <p>© 2025 Boris Hall. Built with React & TypeScript.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

