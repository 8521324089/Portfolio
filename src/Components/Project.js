import React from 'react';

const projects = [
  {
    image: 'WellFound.png',
    title: 'WellFound',
    tech: ['Spring Boot', 'MVC', 'JWT', 'PostgreSQL', 'REST API'],
    description:
      'A Spring Boot MVC application featuring secure authentication, authorization, and job search. Includes applications management and profile management with role-based access control.',
  },
  {
    image: 'Splitwise.png',
    title: 'SplitWise',
    tech: ['Spring Boot', 'Factory Pattern', 'PostgreSQL', 'REST API'],
    description:
      'An expense-sharing app built with Spring Boot, using the Factory Design Pattern to create flexible expense types and simplify group cost management across multiple users.',
  },
  {
    image: 'College-erp-system.jpg',
    title: 'College ERP Portal',
    tech: ['Spring Boot', 'Spring Security', 'Role-Based Auth', 'MySQL'],
    description:
      'Implements user authentication and authorization, ensuring secure access to resources based on roles such as admin, HOD, teacher, and student with granular permission control.',
  },
  {
    image: 'NewsApp.png',
    title: 'News Aggregator',
    tech: ['React', 'JavaScript', 'REST API', 'CSS'],
    description:
      'A React-powered news app that aggregates real-time articles from multiple sources. Features category filtering, responsive design, and seamless client-side routing.',
  },
  {
    image: 'StockPredication.png',
    title: 'Stock Prediction System',
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    description:
      'A machine learning system that analyzes historical stock data to forecast price movements using data preprocessing, feature engineering, and model evaluation.',
  },
];

export default function Project() {
  return (
    <div className="section-alt">
      <section className="section" id="projects">
        <div className="section-header fade-in">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card fade-in" key={index}>
              <div className="project-image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/${project.image}`}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
