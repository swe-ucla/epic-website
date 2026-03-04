import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/navbar'
import Carousel from '../components/carousel/Carousel'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import HomeSchedule from '../components/homeSchedule/HomeSchedule'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
        <div className='home'>
            <Navbar />
            <Header />
            <Carousel />
            <Portfolio />
            <Contact />
            <HomeSchedule />
            <Footer />
        </div>
  )
}

export default Home