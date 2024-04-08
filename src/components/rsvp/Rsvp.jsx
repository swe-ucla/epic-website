import React from 'react'
import './rsvp.css'
import LINES from '../../assets/lines.png'


const Rsvp = () => {
  return (
      <section>
        <div id='rsvp'><br/><br/><br/></div>
        <img className='divider-lines-rsvp' src={LINES}/>
        <div className="container attend__container">
          {/* <div className='rsvp_content'>
            <div className='rsvp_column'>
              <iframe className='rsvp_embed' src="https://docs.google.com/forms/d/e/1FAIpQLSevweJQfFfKqbf9c8hu0PcyzBJquY-Xa3Z1b2Qh4od-rO1lfA/viewform?embedded=true" width="100%" height="500vw" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div className='rsvp_column'> */}
              <h2 className="rsvp_title">register for EPIC 2024</h2>
              <p> EPIC 2024 will be taking place on Thursday, April 25, 2024, from 5:30 PM to 8:30 PM PST at Carnesale Commons. </p>
              <p> Registration is free and open to all UCLA students. </p>
              <a className="rsvp_link" href="https://forms.gle/CUrFzmEeeFpCSdKJ6" target='_blank'> RSVP </a>
            {/* </div>
          </div> */}
        </div>
      </section>
  )
}

export default Rsvp