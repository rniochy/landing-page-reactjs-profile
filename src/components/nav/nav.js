import React,  {useState}  from 'react';
import './nav.css'

const Nav = () => {

    const [active, setActive] = useState('#');


    return (
            <nav>
                {/* Add ICON with react/icon */}
                 <a href="#" onClick = { ()=> { setActive('#')}}  className= { active === '#' ? 'active' : ''} >Home</a>
                 <a href="#about" onClick = { ()=> { setActive('#about')}} className={active === '#about' ? 'active' : ''}  >About</a>
                 <a href="#experience" onClick = { ()=> { setActive('#experience')}} className={active === '#experience' ? 'active' : ''}>Experience</a>
                 <a href="#services" onClick = { ()=> { setActive('#services')}} className={active === '#services' ? 'active' : ''}>Services</a>
                 <a href="#contact" onClick = { ()=> { setActive('#contact')}} className={active === '#contact' ? 'active' : ''}>Contact</a>
            </nav>
    );
}

export default Nav;
