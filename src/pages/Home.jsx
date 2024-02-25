import React from 'react'
import Header from '../components/header/Header'
import Speakers from '../components/speakers/Speakers'
import About from '../components/about/About'
import Rsvp from '../components/rsvp/Rsvp'
import Schedule from '../components/schedule/Schedule'
import Navbar from '../components/navbar/navbar'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
        <div className='home'>
            <Navbar />
            <Header />
            <Speakers />
            <Schedule />
            <Rsvp />
            <About />
            <Portfolio />
            <Contact /> 
            {/* <Footer /> */}
        </div>
  )
}

export default Home