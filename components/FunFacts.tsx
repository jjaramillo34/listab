'use client'

import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

interface FunFactsProps {
  facts: string[]
}

const FunFacts = ({ facts }: FunFactsProps) => {
  return (
    <div className="space-y-4">
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, x: 10 }}
          className="group"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-400 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex-shrink-0"
              >
                <Lightbulb className="w-6 h-6 text-yellow-500" fill="currentColor" />
              </motion.div>
              <p className="text-gray-700 font-medium leading-relaxed">{fact}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FunFacts
