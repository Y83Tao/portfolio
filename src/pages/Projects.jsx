import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform | ESCPEC',
      dateRange: 'September 2020 - Present',
      isLive: true,
      description: 'Built and maintained a serverless e-commerce platform supporting product purchases, inventory management, and order tracking using AWS Lambda, DynamoDB, S3, Cognito, and Stripe for specialized HVAC industry units. In production use for a family business.',
      technologies: ['AWS Lambda', 'AWS S3', 'AWS API Gateway', 'AWS DynamoDB', 'Stripe', 'Python', 'React', 'VS Code', 'ShipEngine API'],
      highlights: [
        'Implemented SEO strategies that drove thousands of site visits and over 5,000 unique purchases',
        'Production serverless architecture using AWS Lambda and DynamoDB',
        'Integrated Stripe payment processing for HVAC equipment sales'
      ],
      github: null,
      demo: 'https://iaqpec.com/',
      image: '/ESCPEC.png'
    },
    {
      title: 'Website | Bridal Post Dental',
      dateRange: 'January 2025 - Present',
      isLive: true,
      description: 'Built and deployed a production full-stack web application for a dental clinic using React, Vite, SQL, and REST APIs, enabling online appointment scheduling and data persistence. In production serving a real family clinic called Bridal Post Dental located in Markham.',
      technologies: ['React', 'EmailJS', 'VS Code', 'Vite'],
      highlights: [
        'Supported 200+ real patient bookings and 10,000+ visits on a live customer-facing platform',
        'Collaborating with stakeholders to iterate and maintain features',
        'Online appointment scheduling with email integration'
      ],
      github: null,
      demo: 'https://markhamdentistry.ca/',
      image: '/Dental Site.png'
    },
    {
      title: 'Android App | Kettle',
      dateRange: 'May 2025',
      isLive: false,
      description: 'Designed a video game review app, allowing 30+ test users to share and discover new video games. Utilized the OpenAI API, relational databases, and applied design patterns such as MVC, Strategy, and Factory.',
      technologies: ['Java', 'Kotlin', 'Firebase', 'Visual Studio', 'OpenAI API'],
      highlights: [
        'Designed a video game review app, allowing 30+ test users to share and discover new video games',
        'Utilized the OpenAI API, relational databases, and applied design patterns such as MVC, Strategy, and Factory'
      ],
      github: 'https://github.com/Lavan-Nithi/team22-Super-6',
      demo: null,
      image: '/kettle.png'
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

  return (
    <motion.div
      className="projects-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
    >
      <motion.h1 className="page-title" variants={itemVariants}>
        Projects
      </motion.h1>

      <motion.p className="projects-subtitle" variants={itemVariants}>
        Here are some of my recent projects that showcase my skills and passion for development. Most of these are in production and serve real customers, given that, no code can be shown
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-img" />
              ) : (
                <div className="image-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-date">{project.dateRange}</span>
                  {project.isLive && (
                    <div className="live-indicator">
                      <span className="live-dot"></span>
                      <span>Live in production, serving real users</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <motion.a
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    className="project-link demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Link</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
