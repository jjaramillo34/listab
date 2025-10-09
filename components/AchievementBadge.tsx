'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  icon: any
  color: string
}

const AchievementBadge = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const IconComponent = achievement.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 200
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className={`${achievement.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
        whileHover={{ y: -5 }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.6 }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
          >
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white text-center mb-2">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-sm text-center">
            {achievement.description}
          </p>

          {/* Check badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 shadow-lg"
          >
            <CheckCircle className="w-6 h-6 text-white" fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AchievementBadge
