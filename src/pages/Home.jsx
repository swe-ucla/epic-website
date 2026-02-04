import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/navbar'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
        <div className='home'>
            <Navbar />
            <Header />
            <Portfolio />
            <Contact /> 
            {/* <Footer /> */}
        </div>
  )
}

export default Home