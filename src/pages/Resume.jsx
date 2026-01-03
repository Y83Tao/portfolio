import { motion } from 'framer-motion'
import './Resume.css'

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleDownload = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <motion.div
      className="resume-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
    >
      <motion.div className="resume-header" variants={itemVariants}>
        <h1 className="page-title">Resume</h1>
      </motion.div>

      <motion.div className="pdf-viewer-container" variants={itemVariants}>
        <iframe
          src="/resume.pdf"
          className="pdf-viewer"
          title="Resume PDF"
        />
      </motion.div>
    </motion.div>
  )
}

export default Resume
