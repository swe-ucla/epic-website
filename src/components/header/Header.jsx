import React from 'react';
import './header.css';
import EpicFlowerLogo from '../../assets/EPIC flower logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <header>
        <img src={EpicFlowerLogo} alt="EPIC Flower Logo" className="epic-flower-logo" />
        <p className="epic-description">Short 1–2 line description of what EPIC is</p>
        <p className="epic-datetime-location">Date, time, location</p>
        <div className="epic-group-2">
          <a href="/" className="rsvp-button">
            <span className="rsvp-text">RSVP</span>
          </a>
        </div>
        <div className="container header__container">
        </div>
      </header>
    </div>
  );
};

export default Header;
