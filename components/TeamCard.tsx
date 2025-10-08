'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Star, Zap, Eye, Sparkles } from 'lucide-react'
import AnimatedMascot from './AnimatedMascot'
import TeamMemberProfile from './TeamMemberProfile'

interface TeamMember {
  id?: string
  name: string
  position: string
  animation: string
  showSparkles: boolean
  gorillaName: string
  photo?: string
  photos?: string[]
  hobbies?: Array<{
    name: string
    icon?: any
    description: string
  }>
  favoriteQuote?: string
  year?: string
  age?: number
  bio?: string
}

interface TeamCardProps {
  member: TeamMember
  index: number
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const [showProfile, setShowProfile] = useState(false)
  const router = useRouter()

  const handleViewProfile = () => {
    if (member.id) {
      router.push(`/${member.id}`)
    } else {
      setShowProfile(true)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ 
          y: -15, 
          scale: 1.05,
          rotateY: 5
        }}
        className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group relative"
      >
      {/* Background gradient on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl"
      />
      
      {/* Mascot section */}
      <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-56 flex items-center justify-center relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"
        />
        
        <AnimatedMascot 
          size={120} 
          animation={member.animation as any}
          showSparkles={member.showSparkles}
          showName={true}
          name={member.gorillaName}
          className="group-hover:scale-110 transition-transform duration-300 relative z-10"
        />
        
        {/* Hover overlay effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-t-3xl"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-white/95 rounded-full p-4 shadow-lg"
          >
            <Zap className="w-10 h-10 text-primary-600" />
          </motion.div>
        </motion.div>

        {/* Position badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.3 }}
          viewport={{ once: true }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg"
        >
          <span className="text-xs font-bold text-primary-600">
            {member.position.split(' ')[0]}
          </span>
        </motion.div>
      </div>
      
      {/* Content section */}
      <div className="p-8 text-center relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {member.name}
        </motion.h3>
        <motion.p 
          className="text-primary-600 font-semibold text-lg mb-4"
          whileHover={{ scale: 1.02 }}
        >
          {member.position}
        </motion.p>
        
        {/* Fun interactive element */}
        <motion.div
          className="mt-4"
          whileHover={{ scale: 1.1 }}
        >
          <motion.button
            onClick={handleViewProfile}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 hover:from-primary-600 hover:to-orange-600 transition-colors duration-300"
          >
            <Eye className="w-4 h-4" />
            ¡Conóceme!
            <Sparkles className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative corner element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.15 + 0.5 }}
        viewport={{ once: true }}
        className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center"
      >
        <Star className="w-3 h-3 text-white" />
      </motion.div>
    </motion.div>

    {/* Profile Modal */}
    {member.photo && (
      <TeamMemberProfile
        member={{
          name: member.name,
          position: member.position,
          photo: member.photo,
          hobbies: member.hobbies || [],
          favoriteQuote: member.favoriteQuote || "¡Trabajemos juntos por un mejor colegio!",
          year: member.year || "2025",
          age: member.age || 17
        }}
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    )}
    </>
  )
}

export default TeamCard
