import React from 'react';
import cv from '../../assets/rodrigo cv english.pdf'
const Cta = () => {
    return (
        <div className="cta">
            <a href = {cv} dowaload className="btn" target="_blank"> Download CV</a>
            <a href = "#contact" className="btn btn-primary"> Let's talk</a>
        </div>
    );
}

export default Cta;
