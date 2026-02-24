import React from 'react';
import './contact.css';

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container contact__container">
        <div className="contact__copy">
          <h2 className="contact__title">Contact Us</h2>
          <p className="contact__blurb">
            Have questions about EPIC or want to get involved? Send us a
            message and we&apos;ll get back to you as soon as we can.
          </p>
        </div>

        <div className="contact__form-card">
          <form className="contact__form">
            <label className="contact__label">
              <span>Name</span>
              <input
                type="text"
                name="name"
                className="contact__input"
                placeholder="Enter your name"
              />
            </label>

            <label className="contact__label">
              <span>Email</span>
              <input
                type="email"
                name="email"
                className="contact__input"
                placeholder="Enter your email"
              />
            </label>

            <label className="contact__label">
              <span>Message</span>
              <textarea
                name="message"
                rows="4"
                className="contact__textarea"
                placeholder="Type your message"
              />
            </label>

            <button type="submit" className="contact__submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
