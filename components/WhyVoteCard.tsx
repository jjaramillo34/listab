'use client'

import { motion } from 'framer-motion'
import { MousePointer, Sparkles } from 'lucide-react'

interface WhyVoteItem {
  icon: any
  title: string
  description: string
  emoji: any
  kidFriendly: string
  highSchool: string
}

interface WhyVoteCardProps {
  item: WhyVoteItem
  index: number
}

const WhyVoteCard = ({ item, index }: WhyVoteCardProps) => {
  const IconComponent = item.icon
  const EmojiComponent = item.emoji

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15, 
        scale: 1.05,
        rotateY: 5
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-4 border-transparent hover:border-primary-300 relative overflow-hidden"
      >
        {/* Background gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl"
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon with animation */}
          <motion.div 
            className="relative mb-6"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:from-primary-200 group-hover:to-orange-200 transition-all duration-300 shadow-lg">
              <IconComponent className="w-12 h-12 text-primary-600" />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <EmojiComponent className="w-6 h-6 text-primary-600" />
            </motion.div>
          </motion.div>

          {/* Title with special effect */}
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
            whileHover={{ scale: 1.05 }}
          >
            {item.title}
          </motion.h3>

          {/* Kid-friendly message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 mb-4 border-l-4 border-yellow-400"
          >
            <p className="text-lg font-semibold text-orange-800 text-center">
              {item.kidFriendly}
            </p>
          </motion.div>

          {/* High school message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-100 to-primary-100 rounded-lg p-4 mb-4 border-l-4 border-blue-400"
          >
            <p className="text-sm font-medium text-blue-800 text-center">
              {item.highSchool}
            </p>
          </motion.div>

          {/* Main description */}
          <p className="text-gray-600 text-center leading-relaxed">
            {item.description}
          </p>

          {/* Fun interactive element */}
          <motion.div
            className="mt-6 text-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
            >
              <MousePointer className="w-4 h-4" />
              ¡Toca para más info!
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WhyVoteCard
