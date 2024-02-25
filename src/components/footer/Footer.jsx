import React from 'react'
import './footer.css'
import{BsLinkedin} from 'react-icons/bs'
import {HashLink } from "react-router-hash-link";
import{BsInstagram} from 'react-icons/bs'
import{HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer>
      <HashLink to='/#' className='footer__logo'>Engineers for Professional Inclusion Conference</HashLink>
      
      <ul className='permalinks'>
        <li><HashLink to='/#speaker'>Speakers</HashLink></li>
        <li><HashLink to='/#schedule'>Schedule</HashLink></li>
        <li><HashLink to='/#rsvp'>RSVP</HashLink></li>
        <li><HashLink to='/#about'>About</HashLink></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/company/swe-ucla" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/uclasweewi/" target="_blank"><BsInstagram/></a>
        <a href="mailto:ewi.swe.ucla@gmail.com" target="_blank"><HiOutlineMail/></a>
       
      </div>

    </footer>
  )
}

export default Footer