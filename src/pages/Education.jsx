import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const education = {
    school: 'University of Waterloo',
    degree: 'Honours Computer Science - Cooperative Program',
    period: '2020 - 2025',
    distinction: 'Distinction',
    gpa: '3.7/4.0',
    highlights: []
  }

  const coursework = [
    'Algorithms and Data Structures',
    'Databases',
    'Computer Networks',
    'Operating Systems',
    'Security',
    'Compilers',
    'User Interfaces',
    'Mathematics',
    'Software Design and Architectures'
  ]

  return (
    <motion.div
      className="education-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20 }}
    >
      <motion.h1 className="page-title" variants={itemVariants}>
        Education
      </motion.h1>

      <motion.section className="education-section" variants={itemVariants}>
        <div className="education-card">
          <div className="education-header">
            <div className="university-logo">
              <img
                src="https://cdn.brandfetch.io/idIfIi7wMZ/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1727398082786"
                alt="University of Waterloo Logo"
                className="uwaterloo-logo"
              />
            </div>
            <div className="education-info">
              <h3 className="institution">{education.school}</h3>
              <p className="degree">{education.degree}</p>
              <div className="education-meta">
                <span className="period">{education.period}</span>
                <span className="separator">•</span>
                <span className="distinction">{education.distinction}</span>
                <span className="separator">•</span>
                <span className="distinction">GPA: {education.gpa}</span>
              </div>
            </div>
          </div>
          <ul className="highlights-list">
            {education.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section className="education-section" variants={itemVariants}>
        <h2 className="section-title">Relevant Coursework</h2>
        <div className="coursework-grid">
          {coursework.map((course, index) => (
            <motion.div
              key={index}
              className="coursework-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
            >
              {course}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Education
