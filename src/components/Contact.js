import React from 'react';

const Contact = _ => 
    <section className="contactForm">
        <h2 id="contact">Contact</h2>
        <form action="https://formspree.io/me@dfarquharson.com" method="POST">
            <input type="text" name="full-name" placeholder="Name"  required/>
            <input type="text" name="_subject" placeholder="subject"  required/>                
            <input type="email" name="_replyto" placeholder="email"  required/>
            <textarea name="message" placeholder="Enter your message" required></textarea>       
            {/* Avoiding spam */}
            <input type="text" name="_gotcha" style={{display:'none'}} />
            <input className="uk-button-default uk-button" type="submit" value="Send" />
        </form>
    </section>
;

export default Contact;