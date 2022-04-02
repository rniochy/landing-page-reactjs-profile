import React from 'react';
import './header.css'
import me from '../../assets/niochy.jpg'

import CTA from './cta'
import HeaderSocial from './header-social';
const Header = () => {
    return (
        <header>
                <div className="container header__container">
                        <h5>Hello I'm</h5>
                        <h1>Rodrigo Lima</h1>
                        <h4 className="text-light">Full Stack Developer</h4>
                        <CTA/>
                        <HeaderSocial/>
                        <div className="me">
                            <img src={me}  id="me"alt="picture of developer of this portifolio"/>
                        </div>
                        <a href="#contact"className="scroll_down"> Scroll Down </a>         
                </div> 
        </header>
    );
}

export default Header;
