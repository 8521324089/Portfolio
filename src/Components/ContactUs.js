import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    const timeInput = form.current.querySelector('input[name="time"]');
    timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error('Failed to send:', error.text);
          alert('Failed to send message. Please try again.');
          setSending(false);
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="section-header fade-in">
        <p className="section-label">Reach Out</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info fade-in">
          <h3>Let's work together</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out through the form or any of
            the channels below.
          </p>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="contact-detail-text">
              <h4>Email</h4>
              <p>vk27092000@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="contact-detail-text">
              <h4>Phone</h4>
              <p>+91-8521324089</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="contact-detail-text">
              <h4>Location</h4>
              <p>Noida, India</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="contact-detail-text">
              <h4>Availability</h4>
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>

        <form className="contact-form fade-in" ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="time" />
          <div className="form-group">
            <label htmlFor="user_name">Your Name</label>
            <input
              type="text"
              id="user_name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Your Email</label>
            <input
              type="email"
              id="user_email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit" disabled={sending}>
            {sending ? (
              <>Sending...</>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
