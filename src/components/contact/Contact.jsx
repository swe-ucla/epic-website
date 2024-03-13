import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


export const Contact = () => {
  return (
    <section>
      <div className="container contact__container">
        <h2 className="contact__header">contact us</h2>

        <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(251, 7, 217, 1)"/>
          <stop offset="13%" stop-color="rgba(255, 0, 0, 1)"/>
          <stop offset="24%" stop-color="rgba(255, 154, 0, 1)"/>
          <stop offset="35%" stop-color="rgba(208, 222, 33, 1)"/>
          <stop offset="46%" stop-color="rgba(79, 220, 74, 1)"/>
          <stop offset="57%" stop-color="rgba(63, 218, 216, 1)"/>
          <stop offset="68%" stop-color="rgba(47, 201, 226, 1)"/>
          <stop offset="79%" stop-color="rgba(28, 127, 238, 1)"/>
          <stop offset="90%" stop-color="rgba(95, 21, 242, 1)"/>
          <stop offset="100%" stop-color="rgba(186, 12, 248, 1)"/>
          </linearGradient>
        </svg>


        <a href="mailto:advocacy.swe.ucla@gmail.com"><HiOutlineMail className='contact__option-icon' style={{ stroke: "url(#blue-gradient)" }}/></a>
        <h3>advocacy.swe.ucla@gmail.com</h3>
      </div>
    </section>
  )
}

export default Contact;
