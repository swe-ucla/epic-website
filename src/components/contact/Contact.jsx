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
        <a href="mailto:advocacy.swe.ucla@gmail.com"><HiOutlineMail className='contact__option-icon' /></a>
        <h3>advocacy.swe.ucla@gmail.com</h3>
      </div>
    </section>
  )
}

export default Contact;
