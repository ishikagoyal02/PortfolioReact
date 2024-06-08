import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="title"><span>Contact Me</span></div>
      <div className="max-width">
        <p className="wow animate__animated animate__heartBeat" data-wow-offset="250">Let's Get Connected!!</p>
        <div className="contact-content">
          <form name="Contact Submission" autoComplete="off" netlify>
            <div className="fields">
              <div className="field">
                <input type="text" name="Name" placeholder="Name" />
              </div>
              <div className="field">
                <input type="email" name="Email" placeholder="Email"  />
              </div>
            
            <div className="field">
              <input type="text" name="Subject" placeholder="Subject"/>
            </div>
            <div className="field textarea">
              <textarea cols="30" rows="10" name="Message" placeholder="Your Message..."></textarea>
            </div>
            <div className="button-area">
              <button type="submit" className="wow animate__animated animate__zoomIn">SEND MESSAGE</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
