'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Trophy, Heart, PartyPopper, Zap, Star, Sparkles, MousePointer, ArrowRight } from 'lucide-react'
import AnimatedMascot from './AnimatedMascot'

interface MascotShowcaseProps {
  gorillaNames: {
    showcase: string
  }
  funNames: string[]
  mascotClickCount: number
  onMascotClick: () => void
  getCurrentMascotName: () => string
}

const MascotShowcase = ({ 
  gorillaNames, 
  funNames, 
  mascotClickCount, 
  onMascotClick,
  getCurrentMascotName 
}: MascotShowcaseProps) => {
  const [selectedFeature, setSelectedFeature] = useState(0)

  const mascotFeatures = [
    {
      icon: Trophy,
      title: "Fuerza",
      description: "Representa nuestra determinación para lograr cambios reales en el colegio",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Corazón",
      description: "Trabajamos con pasión y dedicación por todos los estudiantes",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: PartyPopper,
      title: "Diversión",
      description: "Creemos que aprender y participar debe ser emocionante y divertido",
      color: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-primary-50 via-orange-50 to-primary-100 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Star className="w-4 h-4 text-primary-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <motion.span 
              className="bg-gradient-to-r from-primary-600 to-orange-600 text-white px-8 py-3 rounded-full text-2xl md:text-3xl font-bold shadow-2xl flex items-center gap-3"
              animate={{ boxShadow: ["0 10px 30px rgba(255,107,53,0.3)", "0 15px 40px rgba(255,107,53,0.5)", "0 10px 30px rgba(255,107,53,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Crown className="w-8 h-8" />
              GORILÍN
              <Crown className="w-8 h-8" />
            </motion.span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            ¡Conoce a Nuestra Mascota!
          </h2>
          <motion.div 
            className="w-32 h-2 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full mb-6"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            <strong>Gorilín</strong> representa la fuerza, inteligencia y diversión que traemos a Lista B. ¡Es nuestro compañero más cool!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-orange-400 rounded-full blur-3xl"
              />

              {/* Main mascot */}
              <motion.div 
                className="relative flex items-center justify-center cursor-pointer"
                onClick={onMascotClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-full p-12 shadow-2xl">
                  <AnimatedMascot 
                    size={250} 
                    animation="dance" 
                    showSparkles={true}
                    showName={true}
                    name={getCurrentMascotName()}
                  />
                </div>
              </motion.div>

              {/* Orbiting icons */}
              {[Trophy, Heart, PartyPopper, Star].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2
                  }}
                >
                  <motion.div
                    style={{
                      x: Math.cos((i * Math.PI) / 2) * 150,
                      y: Math.sin((i * Math.PI) / 2) * 150,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Click instruction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mt-8"
            >
              <motion.p 
                className="text-sm text-gray-500 italic flex items-center justify-center gap-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MousePointer className="w-4 h-4" />
                ¡Haz clic en Gorilín para ver sus nombres secretos!
                <ArrowRight className="w-4 h-4" />
              </motion.p>
              <p className="text-xs text-gray-400 mt-2">
                Has hecho clic {mascotClickCount} veces
              </p>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              ¿Qué Representa Gorilín?
            </h3>

            {mascotFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              const isSelected = selectedFeature === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedFeature(index)}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, x: 10 }}
                    animate={isSelected ? { scale: 1.05 } : {}}
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      isSelected ? 'ring-4 ring-primary-400' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ 
                          rotate: isSelected ? 360 : 0,
                          scale: isSelected ? [1, 1.2, 1] : 1
                        }}
                        transition={{ 
                          duration: isSelected ? 2 : 0.3,
                          repeat: isSelected ? Infinity : 0
                        }}
                        className={`bg-gradient-to-br ${feature.color} rounded-full p-4 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                          {feature.title}
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring" }}
                            >
                              <Zap className="w-5 h-5 text-primary-600" />
                            </motion.div>
                          )}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}

            {/* Extra mascot info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6" />
                <h4 className="text-xl font-bold">¡Dato Curioso!</h4>
              </div>
              <p className="text-white/90">
                Gorilín tiene {funNames.length} nombres secretos diferentes. ¡Haz clic para descubrirlos todos!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MascotShowcase
