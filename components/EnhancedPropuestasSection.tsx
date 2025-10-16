'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Heart, 
  Trophy, 
  Shield, 
  DollarSign, 
  Sparkles,
  Target,
  ArrowRight,
  Calendar,
  Users,
  Star,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import AnimatedMascot from './AnimatedMascot'
import SpinningCard from './SpinningCard'

interface EnhancedPropuestasSectionProps {
  gorillaNames: {
    propuestas: string
  }
  propuestas: any[]
}

const EnhancedPropuestasSection = ({ gorillaNames, propuestas }: EnhancedPropuestasSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('todas')

  const categories = [
    { id: 'todas', name: 'Todas', icon: Star, color: 'from-orange-500 to-orange-600' },
    { id: 'educacion', name: 'Educación', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { id: 'bienestar', name: 'Bienestar', icon: Heart, color: 'from-pink-500 to-pink-600' },
    { id: 'deporte', name: 'Deporte', icon: Trophy, color: 'from-green-500 to-green-600' },
    { id: 'infraestructura', name: 'Infraestructura', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { id: 'fundraising', name: 'Fondos', icon: DollarSign, color: 'from-yellow-500 to-yellow-600' }
  ]

  const detailedActivities = [
    {
      id: 'educacion',
      title: "Mentes Brillantes",
      subtitle: "Olimpiadas del Conocimiento",
      description: "Fomentar el desarrollo intelectual y la sana competencia entre estudiantes.",
      date: "Marzo",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'bienestar',
      title: "Stop and Think",
      subtitle: "Charlas Formativas",
      description: "Prevención del bullying, educación sexual responsable y primeros auxilios.",
      date: "Febrero",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 'deporte',
      title: "La Gran Batalla",
      subtitle: "Estudiantes vs Profesores",
      description: "Encuentros deportivos que fomentan el compañerismo y espíritu deportivo.",
      date: "Abril",
      icon: Trophy,
      color: "from-green-500 to-green-600"
    },
    {
      id: 'infraestructura',
      title: "Banda de Gala",
      subtitle: "Dotación de Instrumentos",
      description: "Fortalecer el desarrollo artístico y cultural de la institución.",
      date: "Fin del año",
      icon: Shield,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 'fundraising',
      title: "Bar Estudiantil",
      subtitle: "Recaudación de Fondos",
      description: "Snacks y refrigerios dos veces al mes para apoyar proyectos.",
      date: "Mensual",
      icon: DollarSign,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 'especiales',
      title: "Vístete con Flow",
      subtitle: "Día de Ropa Casual",
      description: "Una vez al mes, asiste con tu ropa preferida respetando las normas.",
      date: "Mensual",
      icon: Sparkles,
      color: "from-rose-500 to-rose-600"
    }
  ]

  const getFilteredActivities = () => {
    if (activeCategory === 'todas') {
      return detailedActivities
    }
    return detailedActivities.filter(activity => activity.id === activeCategory)
  }

  return (
    <section className="bg-gradient-to-br from-orange-50 to-primary-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-200/10 to-orange-200/10"></div>
      
      {/* Animated circles background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-16 h-16 text-primary-600 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            🎯 Nuestras Propuestas
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            ¡Ideas increíbles que harán del colegio el mejor lugar para estudiar y divertirse!
          </p>
          
          {/* Floating Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -top-4 -right-4 hidden lg:block"
          >
            <AnimatedMascot 
              size={60} 
              animation="float" 
              showSparkles={true}
              showName={true}
              name={gorillaNames.propuestas}
              className="drop-shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Original Spinning Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propuestas.map((propuesta, index) => (
              <SpinningCard key={index} propuesta={propuesta} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Detailed Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Actividades Detalladas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredActivities().map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 relative overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5`} />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`bg-gradient-to-r ${activity.color} rounded-full p-3 w-fit mb-4 relative z-10`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {activity.title}
                    </h4>
                    {activity.subtitle && (
                      <p className="text-primary-600 font-semibold mb-3">
                        {activity.subtitle}
                      </p>
                    )}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">{activity.date}</span>
                    </div>
                    
                    {/* Check icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-orange-500 rounded-3xl p-8 text-white text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Nuestro Plan Integral
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-sm md:text-base opacity-90">Actividades Planificadas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">6</div>
              <div className="text-sm md:text-base opacity-90">Categorías Principales</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">12</div>
              <div className="text-sm md:text-base opacity-90">Meses de Actividades</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Compromiso Estudiantil</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/propuestas">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-primary-600 to-orange-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-primary-700 hover:to-orange-600 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto"
            >
              <Target className="w-6 h-6" />
              Ver Todas las Propuestas Detalladas
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </Link>
          <p className="text-gray-600 mt-4 text-lg">
            Descubre todas nuestras actividades planificadas para el año lectivo
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedPropuestasSection
