import React from 'react';
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/niochy.jpg'

const About = () => {
    return (
        <section id="about">
                <h5>Get know</h5>
                <h2>About me</h2>
                <div className="conatiner about_container">
                    <div className="about_me">
                        <div className="about_me-image">
                            <img src={ME} alt="My image" />
                        </div>
                        </div>

                        <div className="about_content">
                            <div className="about_cards">
                            <article className="about_card">
                                 <FaAward/>
                                <h5>Experience</h5>
                                <small>2+ Working</small>
                            </article>
                            <article className="about_card">
                                 <FiUsers/>
                                <h5>clients</h5>
                                <small>2+ worldwide</small>
                            </article>
                            <article className="about_card">
                                <VscFolderLibrary/>
                                <h5>Project</h5>
                                <small>2+ completed</small>
                            </article>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.  
                            </p>
                            <a href="#contact" className="btn btn-primary"> Let's Talk</a>
                        </div>
                </div>
        </section>
    );
}

export default About;
