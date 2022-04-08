import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFreelancer} from 'react-icons/si'


const HeaderSocial = () => {
    return (
        <div className="header_social">
             <a href="https://www.linkedin.com/in/rniochy/" target="_blank"> <BsLinkedin/></a>
             <a href="https://github.com/rniochy" target="_blank"><FaGithub/></a>
             <a href="https://www.freelancer.com/u/rniochy/" target="_blank"><SiFreelancer/></a>
        </div>
    );
}

export default HeaderSocial;
