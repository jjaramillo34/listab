'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  icon?: React.ReactNode
  className?: string
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  icon,
  className = "" 
}: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          {icon}
        </motion.div>
      )}
      {subtitle && (
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.h3>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
