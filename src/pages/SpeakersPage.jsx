import React from 'react'
import Navbar from '../components/navbar/navbar'
import SpeakerBox from '../components/speakers/SpeakerBox'
import Speakers from '../components/speakers/Speakers'
import Footer from '../components/footer/Footer'
import Jones from '../assets/Jones.png'

const SpeakersPage = () => {
  return (
    <div className='speakers-page'>
      <Navbar />
      <SpeakerBox 
        name="Kim Jones"
        role="Executive Coach, Gender Equity Advisor, Keynote Speaker"
        bio="Before rising to divisional Chief Information Officer at Farmers Insurance Company, Kim held multiple executive level roles at Fortune 250 companies over her 25-year career. She now coaches leaders at all levels, from first-time managers to C-Suite executives, to accelerate their impact and rise to their highest professional potential."
        image={Jones}
      />
      <Speakers />
      <Footer />
    </div>
  )
}

export default SpeakersPage
