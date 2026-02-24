import React from 'react'
import Navbar from '../components/navbar/navbar'
import Rsvp from '../components/rsvp/Rsvp'
import Footer from '../components/footer/Footer'

const RsvpPage = () => {
  return (
    <div className='rsvp-page'>
      <Navbar />
      <Rsvp />
      <Footer />
    </div>
  )
}

export default RsvpPage
