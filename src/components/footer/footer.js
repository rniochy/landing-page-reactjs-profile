import React from 'react';
import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiFreelancer} from 'react-icons/si';


const Footer = () => {
    return (
            <footer >

                    {/* <div className="footer_logo">
                        <a href='#'> Rodrigo Lima</a>
                    </div> */}
                    
                    <ul className="permalinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portifolio">Portifolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                
                    <div className="footer_social">
                        <a href="https://www.linkedin.com/in/rniochy/" target="_blank"> <BsLinkedin/></a>
                        <a href="https://github.com/rniochy" target="_blank"><FaGithub/></a>
                        <a href="https://www.freelancer.com/u/rniochy/" target="_blank"><SiFreelancer/></a>
                     </div>


                    <div className='footer_copyright'> 
                    <small> Rodrigo Lima - rniochy. &copy;</small>
                    </div>
            </footer>
    );
}

export default Footer;
