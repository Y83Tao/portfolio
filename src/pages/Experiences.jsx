import { motion } from 'framer-motion'
import { useRef } from 'react'
import './Experiences.css'

const Experiences = () => {
  const experiences = [
    {
      company: 'Verisk Inc',
      position: 'Software Developer Intern',
      period: 'May 2024 - August 2024',
      location: 'Halifax, NS',
      description: [
        'Migrated over 20 backend API endpoints and reduced request payload sizes by 20–72% as part of a backend migration initiative for an insurance modeling platform serving top 100 U.S. property insurers.',
        'Overhauled company form handling system by integrating JSON Forms for a more modernized schema-based form system, significantly improving developer workflow and productivity',
        'Led daily scrums during scrum-master absences, coordinating sprint across 6-person cross-functional team'
      ],
      technologies: ['C#', '.NET', 'Angular', 'TypeScript', 'JSON Forms', 'SQL']
    },
    {
      company: 'Dayforce',
      position: 'Software Developer Intern',
      period: 'September 2023 - April 2024',
      location: 'North York, ON',
      description: [
        'Implemented tenant preloading step for a core microservice within monolithic SaaS application using C# and .NET, reducing cold-start latency by 63% for thousands of companies and millions of users.',
        'Eliminated redundant data transfer in high-volume microservice by refining request/response payloads and optimizing data types, improving end-to-end responsiveness by 10-34%.',
        'Delivered 12+ bug fixes and feature implementations whilst maintaining 95%+ code coverage',
        'Collaborated cross-functionally in agile environment using Git-based version control and CI/CD pipelines'
      ],
      technologies: ['C#', '.NET', 'SQL', 'Redis', 'Git', 'Azure']
    },
    {
      company: 'Ford Motor Company Of Canada',
      position: 'Software Engineering Intern',
      period: 'January 2023 - April 2023',
      location: 'Oakville, ON',
      description: [
        'Shipped 15+ features and resolved 25+ defects to enhance system stability, latency, and user experience.',
        'Engineered frontend and backend features for Ford\'s order-processing workflow with React, Java and Spring Boot.',
        'Wrote automated end-to-end testing using Cypress, and used Quantum Metrics to monitor web performance'
      ],
      technologies: ['React', 'Angular', 'Java', 'Spring Boot', 'Cypress', 'SQL']
    },
    {
      company: 'Alert Driving',
      position: 'Software Engineering Intern',
      period: 'May 2022 - August 2022',
      location: 'North York, ON',
      description: [
        'Rearchitected credential validation and storage system using modern cryptography (bcrypt, AES-256), passing third-party security audit and strengthening data protection for 10,000+ enterprise customers',
        'Resolved over 10+ bugs and implemented 5+ features on the front-end website using PHP and Javascript',
        'Participated in test-driven development cycles and regression testing sessions'
      ],
      technologies: ['PHP', 'JavaScript', 'SQL', 'bcrypt', 'AES-256']
    },
    {
      company: 'Ostar Education',
      position: 'Full Stack Developer Intern',
      period: 'May 2021 - August 2021',
      location: 'Richmond Hill, ON',
      description: [
        'Engaged in web development, delivering an intuitive resource management website for tutoring service',
        'Engineered account creation and storing user files on SQL database with permission-based viewing'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Calculate total years of experience
  const totalYears = '2+ years'

  // Create refs for each experience card
  const experienceRefs = useRef([])

  const scrollToExperience = (index) => {
    experienceRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <motion.div
      className="experiences-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
    >
      <motion.h1 className="page-title" variants={itemVariants}>
        Work Experience
      </motion.h1>

      <div className="experience-container">
        <motion.div className="experience-sidebar" variants={itemVariants}>
          <div className="sidebar-section">
            <h3 className="sidebar-title">Overview</h3>
            <div className="sidebar-content">
              <div className="summary-item">
                <span className="summary-label">Years of Experience</span>
                <span className="summary-value">{totalYears}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Companies</span>
                <span className="summary-value">{experiences.length}</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Roles</h3>
            <div className="roles-list">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="role-item"
                  onClick={() => scrollToExperience(index)}
                >
                  <div className="role-company">{exp.company}</div>
                  <div className="role-position">{exp.position}</div>
                  <div className="role-period">{exp.period}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              ref={(el) => (experienceRefs.current[index] = el)}
            >
              <div className="timeline-date">
                <span className="date-text">{exp.period}</span>
              </div>

              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>

              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h2 className="position">{exp.position}</h2>
                    <h3 className="company">{exp.company}</h3>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>

                <ul className="responsibilities-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="technologies">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Experiences
