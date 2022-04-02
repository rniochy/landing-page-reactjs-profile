import React from 'react';
import './nav.css'

const Nav = () => {
    return (
            <nav>
                {/* Add ICON with react/icon */}
                 <a href="#"> Home </a>
                 <a href="#about">About</a>
                 <a href="#experience">Experience</a>
                 <a href="#services">Services</a>
                 <a href="#contact">Contact</a>
            </nav>
    );
}

export default Nav;
