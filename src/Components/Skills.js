import React from 'react';

const skillCategories = [
  {
    icon: 'fa-solid fa-code',
    title: 'Languages',
    skills: ['Core Java', 'Advanced Java', 'Go', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'C'],
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Hibernate', 'Thymeleaf', 'React.js', 'Node.js', 'Bootstrap'],
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Databases & DevOps',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS S3', 'AWS EC2', 'AWS SQS', 'Render', 'Railway'],
  },
  {
    icon: 'fa-solid fa-gear',
    title: 'Tools & Concepts',
    skills: ['Git', 'GitHub', 'REST APIs', 'JWT Auth', 'OAuth', 'Cloudinary', 'Postman', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'Core Competencies',
    skills: ['Backend Automation', 'System Debugging', 'Dependency Analysis', 'Log Analysis', 'Workflow Optimization', 'OOP', 'DSA'],
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'What I Do Best',
    skills: ['Production Debugging', 'Legacy Migration', 'Architecture Documentation', 'CI/CD Pipelines', 'Scalable Solutions'],
  },
];

export default function Skills() {
  return (
    <div className="section-alt">
      <section className="section" id="skills">
        <div className="section-header fade-in">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category fade-in" key={index}>
              <div className="skill-category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
