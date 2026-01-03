import { useState, lazy, Suspense, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpaceBackground from './components/SpaceBackground'
import Navigation from './components/Navigation'
import About from './pages/About'
import './App.css'

const Resume = lazy(() => import('./pages/Resume'))
const Experiences = lazy(() => import('./pages/Experiences'))
const Projects = lazy(() => import('./pages/Projects'))
const Education = lazy(() => import('./pages/Education'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About key="about" setActiveTab={setActiveTab} />
      case 'experiences':
        return <Experiences key="experiences" />
      case 'projects':
        return <Projects key="projects" />
      case 'education':
        return <Education key="education" />
      case 'resume':
        return <Resume key="resume" />
      case 'contact':
        return <Contact key="contact" />
      default:
        return <About key="about" setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="app">
      <SpaceBackground />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="content">
        <Suspense fallback={
          <div className="loading">
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        }>
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  )
}

export default App
