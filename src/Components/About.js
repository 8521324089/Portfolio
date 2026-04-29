import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-header fade-in">
        <p className="section-label">Get To Know</p>
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid">
        <div className="about-code-card fade-in">
          <div className="code-window">
            <div className="code-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-title">about_vivek.js</div>
          </div>
          <div className="code-body">
            <pre><code><span className="code-keyword">const</span> <span className="code-var">vivek</span> = {'{'}{'\n'}  <span className="code-key">role</span>: <span className="code-string">"Software Engineer"</span>,{'\n'}  <span className="code-key">company</span>: <span className="code-string">"MountBlue Tech"</span>,{'\n'}  <span className="code-key">client</span>: <span className="code-string">"Naviga"</span>,{'\n'}  <span className="code-key">skills</span>: [<span className="code-string">"Java"</span>, <span className="code-string">"Spring Boot"</span>,{'\n'}    <span className="code-string">"Node.js"</span>, <span className="code-string">"AWS"</span>, <span className="code-string">"Docker"</span>],{'\n'}  <span className="code-key">passion</span>: <span className="code-string">"Building scalable systems"</span>,{'\n'}  <span className="code-key">location</span>: <span className="code-string">"Noida, India"</span>{'\n'}{'}'}</code></pre>
          </div>
        </div>

        <div className="about-text fade-in">
          <h3>
            A passionate <span>Software Engineer</span>
          </h3>
          <p>
            I'm a highly motivated and detail-oriented Software Engineer with a strong
            foundation in backend development using Spring Boot and Microservices. I completed
            my B.Tech in Computer Science from Bharat Institute of Technology and Engineering,
            Meerut in 2025, followed by an intensive bootcamp at MountBlue Technologies.
          </p>
          <p>
            Currently working as a Software Engineer at MountBlue Tech (Client: Naviga), I'm
            involved in a large-scale print automation and workflow system. My day-to-day
            includes backend automation with Node.js and Python, working with AWS services,
            debugging distributed workflows, and improving system reliability. I also hold a
            Blue Prism certification in RPA.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Exp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
