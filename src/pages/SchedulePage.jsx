import React from 'react'
import Navbar from '../components/navbar/navbar'
import Schedule from '../components/schedule/Schedule'
import Footer from '../components/footer/Footer'

const SchedulePage = () => {
  return (
    <div className='schedule-page'>
      <Navbar />
      <Schedule />
      <Footer />
    </div>
  )
}

export default SchedulePage
