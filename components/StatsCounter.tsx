'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Stat {
  label: string
  value: number
  suffix?: string
  icon: any
}

interface StatsCounterProps {
  stats: Stat[]
}

const StatsCounter = ({ stats }: StatsCounterProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} index={index} />
      ))}
    </div>
  )
}

const StatItem = ({ stat, index }: { stat: Stat; index: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const IconComponent = stat.icon

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4"
      >
        <IconComponent className="w-7 h-7 text-primary-600" />
      </motion.div>
      <motion.div
        className="text-4xl font-bold text-primary-600 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {count}{stat.suffix || ''}
      </motion.div>
      <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default StatsCounter
