import React from 'react'
import './footer.css'
import UpdatedLogo from '../../assets/UpdatedLogo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <a href="/" className="footer__logo">
          <img src={UpdatedLogo} alt="Epic Logo" />
        </a>

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