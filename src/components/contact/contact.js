import React from 'react';
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container container_contact">
                <div className="contact_options">
                    <article className="contact_option">
                     <MdOutlineEmail/>            
                        <h4>Email</h4>
                        <h5>lniochy@gmail.com</h5>
                        <a href="mailto:lniochy@gmail.com"> Send message</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp/>            
                        <h4>WhatsApp</h4>
                        <h5>+244923687304</h5>
                        <a href="https://api.whatsapp.com/send?phone=+244923687304"> Send message</a>
                    </article>
                </div>

                <form action='' method='post'>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea row="8" name="name" placeholder="Your Message" required></textarea>

                    <button className="btn btn-primary" >Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
