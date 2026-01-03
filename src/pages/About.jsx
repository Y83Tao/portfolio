import { motion } from 'framer-motion'
import './About.css'
import {
  SiPython, SiJavascript, SiCplusplus, SiPhp, SiHtml5, SiCss3,
  SiReact, SiAngular, SiNodedotjs, SiCypress, SiGraphql, SiDotnet,
  SiGit, SiAmazon, SiPostman, SiRedis,
  SiMysql, SiDocker, SiFirebase, SiLinux
} from 'react-icons/si'
import { DiDatabase, DiJava, DiVisualstudio } from 'react-icons/di'
import { BsTerminal, BsCodeSlash } from 'react-icons/bs'
import { TbBrandCSharp, TbLetterC } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'

const About = ({ setActiveTab }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const technicalSkills = {
    'Programming Languages': [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: DiJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'C', icon: TbLetterC },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'PHP', icon: SiPhp },
      { name: 'SQL', icon: DiDatabase },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'Bash', icon: BsTerminal }
    ],
    'Frameworks & Libraries': [
      { name: 'React', icon: SiReact },
      { name: 'Angular', icon: SiAngular },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Orchard Core', icon: SiDotnet },
      { name: '.NET', icon: SiDotnet },
      { name: 'GraphQL', icon: SiGraphql }
    ],
    'Tools/Technologies': [
      { name: 'Git', icon: SiGit },
      { name: 'AWS', icon: SiAmazon },
      { name: 'Postman', icon: SiPostman },
      { name: 'Redis', icon: SiRedis },
      { name: 'VS Code', icon: VscCode },
      { name: 'Visual Studio', icon: DiVisualstudio },
      { name: 'SSMS', icon: DiDatabase },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Docker', icon: SiDocker },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Linux', icon: SiLinux }
    ]
  }

  return (
    <motion.div
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="about-top-section">
        <motion.div className="about-left" variants={itemVariants}>
          <motion.div
            className="profile-image"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src="/profile.jpg" alt="Yun Tao" className="profile-photo" />
          </motion.div>

          <motion.h1 className="name" variants={itemVariants}>
            Yun Tao
          </motion.h1>

          <motion.p className="title" variants={itemVariants}>
            Computer Science 2025 | University of Waterloo
          </motion.p>

          <motion.div className="cta-section" variants={itemVariants}>
            <motion.button
              className="cta-button"
              onClick={() => setActiveTab('contact')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 112, 219, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Get In Touch!
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hi! I'm Yun, a Computer Science graduate from University of Waterloo, Class of 2025. I've worked across enterprise SaaS, insurance analytics, automotive, and cybersecurity, building efficient, scalable, and user-friendly software systems.
          </p>
          <p className="about-text">
            I'm driven by curiosity, a love for problem-solving, and a desire to build technology that makes a positive impact in the real world. I enjoy turning complex ideas into clean, reliable solutions. Outside of work, I enjoy outdoor activities like skiing and rock climbing, playing video games, and traveling.
          </p>
        </motion.div>
      </div>

      <motion.div className="skills-section" variants={itemVariants}>
        <h2 className="section-title">Technical Skills</h2>
        {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon">
                      <IconComponent />
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default About
