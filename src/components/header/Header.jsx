import React from 'react'
import './header.css'
import Timer from '../timer/Timer'
import LOGO from '../../assets/EPIC-logo.png'
import GALAXY from '../../assets/cool.svg'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <img className='galaxy-overlay' src={GALAXY} />
        <div className="container header__container">
            <div className="landing_logo">
              <img src={LOGO} alt={'logo'}/>
            </div>
            <h3> April 9th, 2025 <br/>
            5:00 PM - 8:30 PM PST</h3>
            <Timer />
            <h4>Engineers for Professional Inclusion Conference</h4>
          
        </div>
      </header>
    </div>
  )
}

export default Header