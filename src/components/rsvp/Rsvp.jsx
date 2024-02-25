import React from 'react'
import './rsvp.css'
import CTA from './CTA'
import CTA2 from './CTA2'


const Rsvp = () => {
  return (
      <section>
        <h6 id='rsvp'></h6>
        <div className="attend__container">
          <h2 >RSVP</h2>
          <p className="date"> February 8, 2024, 5:30-10:00 PM @ Carnesale Commons </p>
          <CTA />
          <CTA2 />
        </div>
      </section>
  )
}

export default Rsvp