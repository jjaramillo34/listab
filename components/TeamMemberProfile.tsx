'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Palette, Music, Gamepad2, BookOpen, Camera, Utensils, MapPin, Pencil } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

interface Hobby {
  name: string
  icon?: any
  description: string
}

interface TeamMemberProfileProps {
  member: {
    name: string
    position: string
    photo: string
    hobbies: Hobby[]
    favoriteQuote: string
    year: string
    age: number
  }
  isOpen: boolean
  onClose: () => void
}

const TeamMemberProfile = ({ member, isOpen, onClose }: TeamMemberProfileProps) => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null)

  const hobbyIcons = {
    painting: Palette,
    drawing: Pencil,
    music: Music,
    gaming: Gamepad2,
    reading: BookOpen,
    photography: Camera,
    cooking: Utensils,
    travel: MapPin,
    sports: Heart
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-primary-500 to-orange-500 p-8 rounded-t-3xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white shadow-xl"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 border-2 border-white/30 rounded-full"
                  />
                </motion.div>
                
                <div className="text-white text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                  <p className="text-xl opacity-90 mb-2">{member.position}</p>
                  <p className="text-lg opacity-75">{member.age} años • {member.year}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-6 mb-8 border-l-4 border-primary-500"
              >
                <p className="text-lg italic text-gray-700 text-center">
                  &ldquo;{member.favoriteQuote}&rdquo;
                </p>
              </motion.div>

              {/* Hobbies Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Mis Pasatiempos Favoritos
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {member.hobbies.map((hobby, index) => {
                    const IconComponent = hobbyIcons[hobby.name as keyof typeof hobbyIcons] || Heart
                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedHobby(hobby)}
                        className="bg-gradient-to-br from-primary-100 to-orange-100 hover:from-primary-200 hover:to-orange-200 rounded-xl p-4 text-center transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                        <p className="font-semibold text-gray-800 capitalize">
                          {hobby.name}
                        </p>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Selected Hobby Details */}
              <AnimatePresence>
                {selectedHobby && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-2xl p-6 border border-primary-200"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {React.createElement(hobbyIcons[selectedHobby.name as keyof typeof hobbyIcons] || Heart, {
                        className: "w-8 h-8 text-primary-600"
                      })}
                      <h4 className="text-xl font-bold text-gray-900 capitalize">
                        {selectedHobby.name}
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedHobby.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-8"
              >
                <p className="text-lg text-gray-600 mb-4">
                  ¿Quieres conocer más sobre {member.name.split(' ')[0]}?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  ¡Vota por {member.name.split(' ')[0]}!
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TeamMemberProfile
