'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  grade: string
  quote: string
  avatar?: string
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 relative"
    >
      {/* Quote icon */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -left-4 bg-primary-500 rounded-full p-3 shadow-lg"
      >
        <Quote className="w-6 h-6 text-white" fill="currentColor" />
      </motion.div>

      {/* Quote text */}
      <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.grade}</p>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary-100 to-transparent rounded-tl-full" />
    </motion.div>
  )
}

export default TestimonialCard
