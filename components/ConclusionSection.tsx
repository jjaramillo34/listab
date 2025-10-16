'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Zap, Star, CheckCircle, HandHeart, Shield } from 'lucide-react'
import AnimatedMascot from './AnimatedMascot'

const ConclusionSection = () => {
  const commitments = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Con la comunidad educativa",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Transparencia",
      description: "En todas nuestras acciones",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Inclusión",
      description: "Cada voz cuenta",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Unidad",
      description: "Trabajando juntos",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-900 via-primary-800 to-orange-700 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl"
      />

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-orange-500 to-primary-600 rounded-full p-4 shadow-xl">
              <HandHeart className="w-12 h-12" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestro Compromiso
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-6xl mx-auto"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              En conclusión, la <span className="font-bold text-orange-400">Lista B</span> reafirma su 
              <span className="font-bold text-orange-400"> compromiso</span> con la comunidad educativa a través de un 
              <span className="font-bold text-orange-400"> plan de trabajo responsable, inclusivo y dinámico</span>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Nuestro propósito es <span className="font-bold text-primary-300">fortalecer los valores institucionales</span>, 
              <span className="font-bold text-primary-300"> fomentar la participación estudiantil</span> y 
              <span className="font-bold text-primary-300"> promover actividades</span> que contribuyan al desarrollo 
              académico, social y personal de todos los estudiantes.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Con la <span className="font-bold text-yellow-400">energía del color naranja</span> y la 
              <span className="font-bold text-yellow-400"> fortaleza que simboliza nuestro gorila</span>, trabajaremos con 
              <span className="font-bold text-green-400"> entusiasmo, transparencia y unidad</span> para construir un ambiente escolar mejor, 
              donde <span className="font-bold text-pink-400">cada voz cuente</span> y 
              <span className="font-bold text-pink-400"> cada acción sume</span> al crecimiento de nuestra institución.
            </p>

            {/* Signatures Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-white/20 pt-8"
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-orange-400">
                Firmas de Responsabilidad
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h4 className="text-lg font-bold mb-2 text-orange-300">Consejo Estudiantil</h4>
                  <p className="text-white/80">Lista B 2025-2026</p>
                  <div className="mt-4 h-16 border-b-2 border-dashed border-white/30"></div>
                  <p className="text-sm text-white/60 mt-2">Firma del Representante</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h4 className="text-lg font-bold mb-2 text-orange-300">Comunidad Educativa</h4>
                  <p className="text-white/80">Unidad Educativa Ecuatoriano Holandés</p>
                  <div className="mt-4 h-16 border-b-2 border-dashed border-white/30"></div>
                  <p className="text-sm text-white/60 mt-2">Aprobación Institucional</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className={`bg-gradient-to-r ${commitment.color} rounded-full p-3 w-fit mb-4`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
                <p className="text-white/80">{commitment.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Mascot Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-primary-600 rounded-3xl p-8 text-center"
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
                ¡Lista B para el Futuro!
              </motion.h3>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                Con la fuerza del gorila, la energía del naranja y el compromiso de todos, 
                construiremos juntos un colegio mejor para las nuevas generaciones.
              </motion.p>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
              >
                <Star className="w-6 h-6" />
                <span className="font-bold">¡Vota por Lista B!</span>
                <CheckCircle className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConclusionSection
