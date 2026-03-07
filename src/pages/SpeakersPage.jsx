import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'
import Speakers from '../components/speakers/Speakers'

const SpeakersPage = () => {
  return (
    <div className='speakers-page'>
      <Navbar />
      <Speakers />
      <Footer />
    </div>
  )
}

export default SpeakersPage