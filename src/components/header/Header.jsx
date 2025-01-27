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
            <h3> Engineers for Professional Inclusion Conference </h3>
            <h3> April 25, 2024 5:30-8:30 PM PST <br/>@ Carnesale Commons </h3>
            <Timer />
          
        </div>
      </header>
    </div>
  )
}

export default Header