import React from 'react';
import './Pages.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    alert('Thanks! Your message has been sent.');
  };

  return (
    <section className="page contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Send me a message.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in touch</h3>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:chrisejaylord@gmail.com">chrisejaylord@gmail.com</a>
            </li>
            <li>
              <span className="contact-label">Facebook</span>
              <a href="https://www.facebook.com/Askaberados" target="_blank" rel="noopener noreferrer">Chris Jaylord Lacre</a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What is this about?" required />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message..." required />
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
