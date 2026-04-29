import React, { useState, useEffect, useCallback } from 'react';

const titles = [
  'Software Engineer',
  'Backend Developer',
  'Spring Boot & Microservices',
  'Java Developer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const tick = useCallback(() => {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      setDisplayText(currentTitle.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
    } else {
      setDisplayText(currentTitle.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    }
  }, [charIndex, isDeleting, titleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Vivek <span className="gradient-text">Kumar</span>
        </h1>
        <div className="hero-titles">
          <span className="typing-text">{displayText}</span>
        </div>
        <p className="hero-description">
          Software Engineer with a strong foundation in backend development using
          Spring Boot and Microservices. Skilled in design patterns, PostgreSQL,
          JWT-based authentication, and building scalable, high-quality solutions.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary-custom">
            <i className="fa-solid fa-paper-plane"></i> Get In Touch
          </a>
          <a href="#projects" className="btn-outline-custom">
            <i className="fa-solid fa-code"></i> View Projects
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:vk27092000@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
