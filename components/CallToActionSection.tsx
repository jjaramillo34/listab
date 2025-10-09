'use client'

import { motion } from 'framer-motion'
import { Vote, MessageCircle, Users, Target, Zap, Sparkles, ArrowRight, Heart, PartyPopper, Star } from 'lucide-react'
import AnimatedMascot from './AnimatedMascot'
import FloatingElements from './FloatingElements'

interface CTAProps {
  gorillaNames: {
    cta1: string
    cta2: string
  }
}

const CallToActionSection = ({ gorillaNames }: CTAProps) => {
  const actionCards = [
    {
      icon: Vote,
      title: "Vota",
      description: "Tu voto es tu voz",
      color: "from-blue-500 to-blue-600",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Participa",
      description: "Sé parte del cambio",
      color: "from-green-500 to-green-600",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Comparte",
      description: "Corre la voz",
      color: "from-pink-500 to-pink-600",
      delay: 0.6
    },
    {
      icon: Target,
      title: "Logra",
      description: "Juntos lo hacemos",
      color: "from-purple-500 to-purple-600",
      delay: 0.8
    }
  ]

  return (
    <section className="bg-gradient-to-r from-primary-600 to-orange-500 text-white py-24 relative overflow-hidden">
      <FloatingElements />
      
      {/* Animated circles background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          {[...Array(72)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, delay: i * 0.05, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Animated Vote Icon */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6 inline-block"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-8">
              <Vote className="w-24 h-24 mx-auto" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¡El Cambio Empieza Contigo!
          </motion.h2>

          <motion.p 
            className="text-xl md:text-3xl mb-12 font-semibold max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Vota por la Lista B y construyamos juntos el colegio que todos merecemos
          </motion.p>

          {/* Action Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            {actionCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <IconComponent className="w-10 h-10 mx-auto mb-3" />
                  </motion.div>
                  <h4 className="font-bold text-lg mb-1">{card.title}</h4>
                  <p className="text-sm opacity-90">{card.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white text-primary-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-primary-50 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
            >
              <Vote className="w-7 h-7" />
              ¡Vota por Lista B!
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-3 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Contáctanos
            </motion.button>
          </div>

          {/* Animated banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            animate={{ 
              rotateX: [0, 5, -5, 0],
            }}
            className="inline-block bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl border-2 border-white/30"
          >
            <div className="flex items-center gap-3 justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <PartyPopper className="w-8 h-8" />
                ¡Lista B para Todos!
                <PartyPopper className="w-8 h-8" />
              </h3>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>
            <p className="text-lg flex items-center justify-center gap-2 mt-2 opacity-90">
              <Users className="w-5 h-5" />
              Pequeños y grandes, juntos hacemos la diferencia
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Mascots */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-8 left-8 hidden lg:block"
        >
          <AnimatedMascot 
            size={100} 
            animation="bounce" 
            showSparkles={true}
            showName={true}
            name={gorillaNames.cta1}
            className="drop-shadow-2xl"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <AnimatedMascot 
            size={90} 
            animation="wiggle" 
            showSparkles={false}
            showName={true}
            name={gorillaNames.cta2}
            className="drop-shadow-2xl"
          />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-4 hidden xl:block"
        >
          <Zap className="w-16 h-16 text-yellow-300 opacity-30" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 right-4 hidden xl:block"
        >
          <Star className="w-20 h-20 text-yellow-300 opacity-30" />
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection
