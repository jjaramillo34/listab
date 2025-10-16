'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react'
import AnimatedMascot from './AnimatedMascot'

const IntroductionSection = () => {
  const values = [
    {
      icon: Users,
      title: "Unión",
      description: "Trabajamos juntos como una sola familia",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Liderazgo",
      description: "Guiando con ejemplo y determinación",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Fuerza",
      description: "Símbolo de nuestra determinación inquebrantable",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description: "Innovando para un mejor futuro",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-10 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-30"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-primary-100 rounded-full opacity-30"
      />

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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-orange-500 to-primary-600 rounded-full p-4 shadow-xl">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestra Misión
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500 max-w-5xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              La <span className="font-bold text-orange-600">Lista B</span>, representada por el color 
              <span className="font-bold text-orange-600"> naranja</span> y el 
              <span className="font-bold text-orange-600"> gorila</span> como símbolo de 
              <span className="font-bold text-orange-600"> fuerza, unión y liderazgo</span>, presenta su 
              plan de trabajo con el compromiso de ser la voz activa de todos los estudiantes.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Nuestro propósito es construir una comunidad escolar más 
              <span className="font-bold text-primary-600"> participativa, alegre y solidaria</span>, 
              donde cada estudiante se sienta motivado a ser parte del cambio.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Inspirados por la energía y determinación que representamos, buscamos promover 
              proyectos que fortalezcan los valores institucionales, mejoren la convivencia y 
              fomenten el espíritu de compañerismo en nuestro colegio.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className={`bg-gradient-to-r ${value.color} rounded-full p-3 w-fit mb-4`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Mascot Symbolism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-primary-600 rounded-3xl p-8 text-white text-center"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <AnimatedMascot 
                size={120} 
                animation="bounce" 
                showSparkles={true}
                showName={false}
                className="drop-shadow-2xl"
              />
            </motion.div>
            
            <div className="flex-1">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                ¿Por qué un Gorila?
              </motion.h3>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                El gorila representa la <span className="font-bold">fuerza</span> para enfrentar 
                cualquier desafío, la <span className="font-bold">unión</span> como familia que 
                nos protege y cuida, y el <span className="font-bold">liderazgo</span> natural 
                que nos guía hacia el éxito. Así como los gorilas protegen a su manada, 
                nosotros protegemos los derechos y sueños de todos los estudiantes.
              </motion.p>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
              >
                <Zap className="w-6 h-6" />
                <span className="font-bold">Lista B: Fuerza, Unión, Liderazgo</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroductionSection
