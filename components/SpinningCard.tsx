'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MousePointer, ArrowRight, Zap } from 'lucide-react'

interface Propuesta {
  icon: any
  title: string
  description: string
  eyeCatchingWords: string[]
}

interface SpinningCardProps {
  propuesta: Propuesta
  index: number
}

const SpinningCard = ({ propuesta, index }: SpinningCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const IconComponent = propuesta.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative h-80 w-full"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-primary-500 cursor-pointer"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
              <IconComponent className="w-10 h-10 text-primary-600" />
            </div>
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{propuesta.title}</h3>
          <p className="text-gray-600 leading-relaxed">{propuesta.description}</p>
          <motion.div
            className="mt-4 text-center"
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="text-sm text-primary-600 font-semibold flex items-center justify-center gap-1">
              <MousePointer className="w-4 h-4" />
              ¡Hover para ver más!
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        </motion.div>

        {/* Back of card with eye-catching words */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{propuesta.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {propuesta.eyeCatchingWords.map((word: string, wordIndex: number) => (
                <motion.div
                  key={wordIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: wordIndex * 0.1,
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-bold text-sm text-center shadow-lg"
                >
                  {word}
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-yellow-300 text-lg font-bold flex items-center gap-2">
                <Zap className="w-5 h-5" />
                ¡IMPACTO!
                <Zap className="w-5 h-5" />
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SpinningCard
