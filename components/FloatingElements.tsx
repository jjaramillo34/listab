'use client'

import { motion } from 'framer-motion'
import { Star, Heart, Sparkles, Zap } from 'lucide-react'

const FloatingElements = () => {
  const elements = [
    { Icon: Star, delay: 0, duration: 3, color: 'text-yellow-400' },
    { Icon: Heart, delay: 0.5, duration: 4, color: 'text-red-400' },
    { Icon: Sparkles, delay: 1, duration: 3.5, color: 'text-blue-400' },
    { Icon: Zap, delay: 1.5, duration: 3, color: 'text-orange-400' },
    { Icon: Star, delay: 2, duration: 4.5, color: 'text-purple-400' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color}`}
          style={{
            left: `${(index * 20 + 10)}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          <element.Icon className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
