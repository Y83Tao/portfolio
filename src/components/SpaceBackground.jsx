import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './SpaceBackground.css'

const SpaceBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  }, [])

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: i * 8 + Math.random() * 3,
    }))
  }, [])

  return (
    <div className="space-background">
      <div className="gradient-overlay" />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="shooting-star"
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{
            x: [0, 300],
            y: [0, 300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: star.delay,
            repeatDelay: 10,
          }}
        />
      ))}

      <div className="planet planet-1" />
      <div className="planet planet-2" />
    </div>
  )
}

export default SpaceBackground
