'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Music, 
  Palette, 
  BookOpen, 
  Gamepad2, 
  Trophy,
  Heart,
  Star,
  Sparkles,
  Camera,
  Utensils,
  Mic,
  Film,
  PartyPopper,
  Waves,
  Cake
} from 'lucide-react'

const FallingIcons = () => {
  const [icons] = useState([
    { Icon: Trophy, color: 'text-yellow-500' },
    { Icon: Music, color: 'text-purple-500' },
    { Icon: Palette, color: 'text-pink-500' },
    { Icon: BookOpen, color: 'text-blue-500' },
    { Icon: Gamepad2, color: 'text-red-500' },
    { Icon: Heart, color: 'text-red-400' },
    { Icon: Star, color: 'text-yellow-400' },
    { Icon: Sparkles, color: 'text-purple-400' },
    { Icon: Camera, color: 'text-indigo-500' },
    { Icon: Utensils, color: 'text-orange-500' },
    { Icon: Mic, color: 'text-green-500' },
    { Icon: Film, color: 'text-blue-600' },
    { Icon: PartyPopper, color: 'text-pink-400' },
    { Icon: Waves, color: 'text-cyan-500' },
    { Icon: Cake, color: 'text-amber-500' },
  ])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color}`}
          style={{
            left: `${(index * 8 + Math.random() * 10)}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [0, 360, 720],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "linear"
          }}
        >
          <item.Icon className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  )
}

export default FallingIcons
