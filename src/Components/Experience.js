import React from 'react';

const workExperience = [
  {
    date: 'Aug 2025 — Present',
    title: 'Software Engineer',
    company: 'MountBlue Tech (Client: Naviga) · Noida',
    points: [
      'Working on a large-scale print automation and workflow system at Naviga using Node.js, Python, and AWS (S3, SQS, EC2)',
      'Modernized parts of the print automation system by contributing to configuration deprecation — removed legacy config blocks while ensuring backward compatibility',
      'Migrated from an older engine setup to a unified flow-based architecture using a fallback strategy for smooth transition',
      'Performed deep dependency analysis across a large codebase to identify active vs unused components, tracing execution flows through backend services, queue systems, and automation pipelines',
      'Improved and maintained an internal Python-based installer tool — implemented version tracking, post-installation cleanup, and optimized installation flow',
      'Conducted log analysis, troubleshot distributed workflows, and traced end-to-end execution from input triggers to final output generation',
      'Contributed to documenting system architecture, identifying environment gaps, and analyzing historical changes',
    ],
  },
  {
    date: 'Aug 2024 — Mar 2025',
    title: 'Web Developer (Intern)',
    company: 'CodSoft · Virtual',
    points: [
      'Designed and developed websites using the MERN stack (MongoDB, Express, React, Node.js)',
      'Enabled components of the project to communicate and exchange data efficiently',
      'Gained hands-on experience with full-stack JavaScript development',
    ],
  },
];

const education = [
  {
    date: 'Jul 2021 — Jun 2025',
    title: 'B.Tech in Computer Science',
    company: 'Bharat Institute of Technology and Engineering · Meerut, India',
    points: [
      'Studied core CS subjects: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks',
      'Built multiple academic and personal projects in Java, React, and Spring Boot',
      'Gained hands-on experience with web development and software engineering practices',
    ],
  },
];

const certifications = [
  {
    date: 'Certification',
    title: 'Blue Prism',
    company: 'Robotic Process Automation (RPA)',
    points: [
      'Certified in Blue Prism RPA platform for automating business processes',
    ],
  },
];

function TimelineBlock({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item fade-in" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-date">{item.date}</p>
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-section-inner">
        <div className="section-header fade-in">
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-line"></div>
        </div>

        {/* Work Experience */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 className="subsection-title fade-in">
            <i className="fa-solid fa-briefcase"></i>
            Work Experience
          </h3>
          <TimelineBlock items={workExperience} />
        </div>

        {/* Education */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 className="subsection-title fade-in">
            <i className="fa-solid fa-graduation-cap"></i>
            Education
          </h3>
          <TimelineBlock items={education} />
        </div>

        {/* Certifications */}
        <div>
          <h3 className="subsection-title fade-in">
            <i className="fa-solid fa-certificate"></i>
            Certifications
          </h3>
          <TimelineBlock items={certifications} />
        </div>
      </div>
    </section>
  );
}
