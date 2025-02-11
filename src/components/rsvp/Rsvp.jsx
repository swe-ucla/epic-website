import React from 'react'
import './rsvp.css'


const Rsvp = () => {
  return (
      <section>
        <div id='rsvp'><br/><br/><br/></div>
        <div className="container attend__container">
          <div className='rsvp_content'>
            <div className='rsvp_column'>
              <iframe className='rsvp_embed' src="https://docs.google.com/forms/d/e/1FAIpQLSdMyclrLa4IAhUQSmjlH28syCnNmZRww53JY9e53uHPYbPNJQ/viewform?embedded=true" width="100%" height="500vw" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div className='rsvp_column'>
              <h2 className="rsvp_title">register for EPIC 2025</h2>
              <p> EPIC 2025 will be taking place on Wednesday, April 9, 2024, from 5:00 PM to 8:30 PM PST at Pauley Pavilion Clubhouse [may update] </p>
              <p> Registration is free and open to all UCLA students. </p>
              <a className="rsvp_link" href="https://forms.gle/D6oxa3GctyxpBYNfA" target='_blank'> RSVP </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Rsvp