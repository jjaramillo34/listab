'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

interface AnimatedMascotProps {
  size?: number
  animation?: "float" | "bounce" | "pulse" | "wiggle" | "dance"
  className?: string
  showSparkles?: boolean
  showName?: boolean
  name?: string
}

const AnimatedMascot = ({ 
  size = 120, 
  animation = "float", 
  className = "",
  showSparkles = false,
  showName = false,
  name = "Gorilín"
}: AnimatedMascotProps) => {
  const animations = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    wiggle: {
      rotate: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    dance: {
      rotate: [0, 10, -10, 10, 0],
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      animate={animations[animation]}
    >
      <Image
        src="/images/gorilla.png"
        alt={`${name} - Lista B Mascot`}
        width={size}
        height={size}
        className="drop-shadow-lg"
      />
      {showSparkles && (
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
      )}
      {showName && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
            {name}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default AnimatedMascot
