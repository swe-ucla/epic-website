import React from 'react';
import './navbar.css';
import LOGO from '../../assets/EPIC-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={LOGO} alt={'logo'} />
        </Link>
      </div>

      {/* mini menu */}
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      {/* full size navbar */}
      <div className="tabs">
        <Link className="hash-link tab about" to="/">
          home
        </Link>
        <Link className="hash-link tab about" to="/speakers">
          speakers
        </Link>
        <Link className="hash-link tab about" to="/schedule">
          schedule
        </Link>
        <Link className="hash-link tab about" to="/rsvp">
          RSVP
        </Link>
        <Link className="hash-link tab about" to="/about">
          about
        </Link>
        <Link className="hash-link tab about" to="/contact">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
