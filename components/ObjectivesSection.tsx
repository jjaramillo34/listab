'use client'

import { motion } from 'framer-motion'
import { Target, Users, MessageCircle, Gamepad2, Leaf, Heart, Crown, Star, CheckCircle } from 'lucide-react'

const ObjectivesSection = () => {
  const generalObjective = {
    icon: Target,
    title: "Objetivo General",
    description: "Implementar un plan de trabajo que promueva la participación estudiantil, el liderazgo juvenil y el desarrollo integral de la comunidad educativa, fortaleciendo la unión, la creatividad y el espíritu colaborativo que distingue a la Lista B."
  }

  const specificObjectives = [
    {
      icon: MessageCircle,
      title: "Comunicación Constante",
      description: "Fomentar la comunicación constante entre los estudiantes, docentes y autoridades para fortalecer el trabajo en equipo.",
      color: "from-blue-500 to-blue-600",
      delay: 0.1
    },
    {
      icon: Gamepad2,
      title: "Actividades Integrales",
      description: "Desarrollar actividades académicas, culturales, recreativas, y deportivas que promuevan la integración y la sana convivencia.",
      color: "from-green-500 to-green-600",
      delay: 0.2
    },
    {
      icon: Leaf,
      title: "Campañas de Valores",
      description: "Impulsar campañas ecológicas, solidarias y de bienestar estudiantil que reflejen los valores de respeto y responsabilidad.",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.3
    },
    {
      icon: Crown,
      title: "Liderazgo Estudiantil",
      description: "Potenciar el liderazgo y la participación activa de los estudiantes en las decisiones escolares.",
      color: "from-purple-500 to-purple-600",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Representación Comprometida",
      description: "Representar con compromiso, entusiasmo y transparencia los intereses de todos los estudiantes, demostrando la fuerza y unidad que caracterizan a la Lista B.",
      color: "from-pink-500 to-pink-600",
      delay: 0.5
    }
  ]

  return (
    <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {[...Array(96)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-orange-400"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, delay: i * 0.02, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            <div className="bg-gradient-to-r from-primary-600 to-orange-500 rounded-full p-4 shadow-xl">
              <Target className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Nuestros Objetivos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un plan claro y comprometido para el desarrollo integral de nuestra comunidad educativa
          </p>
        </motion.div>

        {/* General Objective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-orange-500">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-orange-500 to-primary-600 rounded-full p-4 flex-shrink-0"
              >
                <Target className="w-12 h-12 text-white" />
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {generalObjective.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {generalObjective.description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specific Objectives */}
        <div className="mb-8">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Objetivos Específicos
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specificObjectives.map((objective, index) => {
              const IconComponent = objective.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: objective.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 relative overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-5`} />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`bg-gradient-to-r ${objective.color} rounded-full p-3 w-fit mb-4 relative z-10`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {objective.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                  
                  {/* Check icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: objective.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-orange-500 rounded-2xl p-8 text-white">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-4"
            >
              <Star className="w-16 h-16 mx-auto" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¡Juntos Hacemos la Diferencia!
            </h3>
            
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Con estos objetivos claros y tu apoyo, construiremos una comunidad escolar 
              más fuerte, unida y comprometida con el éxito de todos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ObjectivesSection
