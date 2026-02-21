import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo">EPIC</div>

        <div className="footer__links">
          <a 
            href="https://www.instagram.com/epicsweucla/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:advocacy.swe.ucla@gmail.com">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer