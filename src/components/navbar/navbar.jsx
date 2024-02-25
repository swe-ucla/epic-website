import React from 'react';
import './navbar.css';
import LOGO from '../../assets/EPIC-logo.png'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <HashLink to="/#top"> <img src={LOGO} alt={'logo'}/> </HashLink>
            </div>

            {/* mini menu */}
            <input class="side-menu" type="checkbox" id="side-menu"/>
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

            {/* full size navbar */}
            <div className="tabs">
                <HashLink className="hash-link" to="/#speaker"><a className="tab about">Speakers</a></HashLink>
                <HashLink className="hash-link" to="/#schedule"><a className="tab about">Schedule</a></HashLink>
                <HashLink className="hash-link" to="/#rsvp"><a className="tab about">RSVP</a></HashLink>
                <HashLink className="hash-link" to="/#about"><a className="tab about">About</a></HashLink>
            </div>
        </div>
    );
}

export default Navbar;

