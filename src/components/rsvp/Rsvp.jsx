import React from 'react'
import './rsvp.css'


const Rsvp = () => {
  return (
      <section>
        <div id='rsvp'><br/></div>
        <div className="container attend__container">
          <h2 className="rsvp_title">register for EPIC 2024</h2>
          <p> EPIC 2024 will be taking place on Thursday, April 25, 2024, from 5:30 PM to 8:00 PM PST at Carnesale Commons. </p>
          <p> Registration is free and open to all UCLA students. </p>
          <a className="rsvp_link" href="https://forms.gle/CUrFzmEeeFpCSdKJ6" target='_blank'> RSVP </a>
        </div>
      </section>
  )
}

export default Rsvp