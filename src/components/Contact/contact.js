import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_ysz2aft', 'template_rdj2tvj', form.current, 'dmELZUsa-cXjs1PuR')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact" id="contact">
    
      <div className="title"><span>Contact Me</span></div>
      <div className="max-width">
        <p className="wow animate__animated animate__heartBeat" data-wow-offset="250">Let's Get Connected!!</p>
        <div className="contact-content">
          <form name="Contact Submission" autoComplete="off" netlify ref={form} onSubmit={sendEmail}>
            <div className="fields">
              <div className="field">
                <input type="text" name="Name" placeholder="Name" required />
              </div>
              <div className="field">
                <input type="email" name="Email" placeholder="Email" required />
              </div>
            
            <div className="field textarea">
              <textarea cols="30" rows="10" name="Message" placeholder="Your Message..." required></textarea>
            </div>
           
          
            <button className="field button-area"><input type="submit" value="Send Message"  className="wow animate__animated animate__zoomIn"/></button>
           
            </div>
          </form>
      </div>
    </div>
      
     
    </section>
  );
};

export default Contact;
