import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">logo</Link>
            </div>

            {/* mini menu */}
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

            {/* full size navbar */}
            <div className="tabs">
                <Link className="hash-link tab about" to="/">Home</Link>
                <Link className="hash-link tab about" to="/speakers">Speakers</Link>
                <Link className="hash-link tab about" to="/">Meet the Team</Link>
                <Link className="hash-link tab about" to="/">Contact</Link>
                <Link className="hash-link tab about bold" to="/rsvp">RSVP</Link>
            </div>
        </div>
    );
}

export default Navbar;

