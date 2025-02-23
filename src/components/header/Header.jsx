import React, { useState } from 'react';
import './header.css';
import Timer from '../timer/Timer';
import RINGS from '../../assets/rings.png';
import STAR from '../../assets/shooting_star.png';
import LOGO from '../../assets/EPIC-logo.png';
import GALAXY from '../../assets/cool.svg';

const Header = () => {
  const [animateStar, setAnimateStar] = useState(false);

  const handleStarClick = () => {
    setAnimateStar(true);
    setTimeout(() => setAnimateStar(false), 2000); // Reset after animation duration
  };

  return (
    <div className='header'>
      <header>
        <img className='galaxy-overlay' src={GALAXY} />
        <div className="container header__container">
          <div className="landing_logo">
            <img src={LOGO} alt="logo" />
            <img 
              src={STAR} 
              alt="star" 
              className={`shooting-star ${animateStar ? 'animate' : ''}`} 
              onClick={handleStarClick} 
            />
          </div>

          <h3>
            April 9th, 2025 <br />
            5:00 PM - 8:30 PM PST
          </h3>
          <h4>Engineers for Professional Inclusion Conference</h4>
          <div className="timer-container">
            <Timer />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
