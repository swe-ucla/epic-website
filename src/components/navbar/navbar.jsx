import React from 'react';
import './navbar.css';
import LOGO from '../../assets/EPIC flower logo.svg';
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
          Home
        </Link>
        <Link className="hash-link tab about" to="/speakers">
          Speakers
        </Link>
        <Link className="hash-link tab about" to="/meet-the-team">
          Meet the Team
        </Link>
        <Link className="hash-link tab about" to="/contact">
          Contact
        </Link>
        <Link className="hash-link tab about" to="/">
          RSVP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
