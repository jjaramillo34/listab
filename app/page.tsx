'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BookOpen, 
  Palette, 
  Trophy, 
  Heart, 
  Leaf, 
  PartyPopper,
  Users,
  Target,
  Ear,
  Vote,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Sparkles,
  Zap,
  School,
  Star,
  CheckCircle,
  ArrowRight,
  Crown,
  Award,
  Megaphone,
  HandHeart,
  Globe,
  Calendar,
  Lightbulb,
  Shield,
  ThumbsUp,
  Eye,
  MousePointer,
  Info,
  Play
} from 'lucide-react'

// Animated Mascot Component
const AnimatedMascot = ({ 
  size = 120, 
  animation = "float", 
  className = "",
  showSparkles = false,
  showName = false,
  name = "Gorilín"
}: { 
  size?: number
  animation?: "float" | "bounce" | "pulse" | "wiggle" | "dance"
  className?: string
  showSparkles?: boolean
  showName?: boolean
  name?: string
}) => {
  const animations = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    wiggle: {
      rotate: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    dance: {
      rotate: [0, 10, -10, 10, 0],
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      animate={animations[animation]}
    >
      <Image
        src="/images/gorilla.png"
        alt={`${name} - Lista B Mascot`}
        width={size}
        height={size}
        className="drop-shadow-lg"
      />
      {showSparkles && (
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
      )}
      {showName && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
            {name}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('propuestas')
  const [mascotClickCount, setMascotClickCount] = useState(0)

  // Cool gorilla names for different sections
  const gorillaNames = {
    hero: "Gorilín",
    team: "Gorilón",
    propuestas: "Gorilita", 
    showcase: "Gorilín",
    cta1: "Gorilón",
    cta2: "Gorilita"
  }

  // Fun alternative names that appear on click
  const funNames = [
    "Gorilín", "Gorilón", "Gorilita", "Gorilín", "Gorilón", "Gorilita",
    "🦍 Super Gorila", "💪 Gorila Fuerte", "🎉 Gorila Feliz", 
    "⚡ Gorila Eléctrico", "🌟 Gorila Estrella", "🚀 Gorila Espacial"
  ]

  const getCurrentMascotName = () => {
    return funNames[mascotClickCount % funNames.length]
  }

  const team = [
    { name: 'Daniel Córdoba', position: 'Presidente', animation: 'dance', showSparkles: true, gorillaName: 'Gorilín' },
    { name: 'Ian Vilaña', position: 'Vice Presidente', animation: 'bounce', showSparkles: false, gorillaName: 'Gorilón' },
    { name: 'Sofy Jaramillo', position: 'Tesorera', animation: 'pulse', showSparkles: true, gorillaName: 'Gorilita' },
    { name: 'Majo Guevara', position: 'Vocal', animation: 'wiggle', showSparkles: false, gorillaName: 'Gorilón' },
    { name: 'Valentina Caserez', position: 'Vocal', animation: 'float', showSparkles: true, gorillaName: 'Gorilín' },
    { name: 'Giuliana Carrera', position: 'Vocal', animation: 'dance', showSparkles: false, gorillaName: 'Gorilita' },
  ]

  const propuestas = [
    {
      icon: BookOpen,
      title: 'Mejores Espacios de Estudio',
      description: 'Renovaremos las áreas comunes con WiFi mejorado y zonas de estudio cómodas.',
      eyeCatchingWords: ['¡WIFI GRATIS!', 'ESTUDIO', 'COMODIDAD', 'TECNOLOGÍA']
    },
    {
      icon: Palette,
      title: 'Arte y Cultura',
      description: 'Organizaremos eventos culturales mensuales y talleres de expresión artística.',
      eyeCatchingWords: ['¡CREATIVIDAD!', 'ARTE', 'CULTURA', 'TALENTO']
    },
    {
      icon: Trophy,
      title: 'Deportes para Todos',
      description: 'Crearemos torneos inter-clases y acceso a más actividades deportivas.',
      eyeCatchingWords: ['¡COMPETENCIA!', 'DEPORTE', 'GANAR', 'EQUIPO']
    },
    {
      icon: Heart,
      title: 'Bienestar Estudiantil',
      description: 'Implementaremos un programa de apoyo entre estudiantes y salud mental.',
      eyeCatchingWords: ['¡CUIDADO!', 'SALUD', 'APOYO', 'BIENESTAR']
    },
    {
      icon: Leaf,
      title: 'Colegio Sostenible',
      description: 'Iniciaremos proyectos de reciclaje y cuidado del medio ambiente.',
      eyeCatchingWords: ['¡VERDE!', 'RECICLAJE', 'NATURALEZA', 'FUTURO']
    },
    {
      icon: PartyPopper,
      title: 'Más Eventos',
      description: 'Planificaremos actividades recreativas y de integración mensuales.',
      eyeCatchingWords: ['¡DIVERSIÓN!', 'FIESTA', 'AMIGOS', 'RECUERDOS']
    },
  ]

  // Spinning Card Component
  const SpinningCard = ({ propuesta, index }: { propuesta: any, index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const IconComponent = propuesta.icon

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative h-80 w-full"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-primary-500 cursor-pointer"
            style={{ backfaceVisibility: "hidden" }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                <IconComponent className="w-10 h-10 text-primary-600" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{propuesta.title}</h3>
            <p className="text-gray-600 leading-relaxed">{propuesta.description}</p>
            <motion.div
              className="mt-4 text-center"
              animate={{ opacity: 0.7 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <span className="text-sm text-primary-600 font-semibold flex items-center justify-center gap-1">
                <MousePointer className="w-4 h-4" />
                ¡Hover para ver más!
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </motion.div>

          {/* Back of card with eye-catching words */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-xl p-8 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{propuesta.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {propuesta.eyeCatchingWords.map((word: string, wordIndex: number) => (
                  <motion.div
                    key={wordIndex}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: wordIndex * 0.1,
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-bold text-sm text-center shadow-lg"
                  >
                    {word}
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-yellow-300 text-lg font-bold flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  ¡IMPACTO!
                  <Zap className="w-5 h-5" />
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="bg-white text-primary-600 px-6 py-2 rounded-full text-xl font-bold shadow-lg">
                  LISTA B
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
              >
                ¡Tu Voz, Nuestro Compromiso!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8"
              >
                Juntos transformaremos nuestro colegio en un espacio mejor para todos
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-50 transition-all duration-300 shadow-xl"
              >
                Conoce nuestras propuestas
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/campaign-banner.jpeg"
                  alt="Lista B Campaign Banner"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"
                />
                
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
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
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    ¡Conóceme!
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
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
          ))}
        </div>
      </section>

      {/* Propuestas Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestras Propuestas
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometidos con hacer de nuestro colegio un lugar mejor para todos
            </p>
            {/* Floating Mascot in Propuestas */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propuestas.map((propuesta, index) => (
              <SpinningCard key={index} propuesta={propuesta} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* School Info Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="bg-white text-blue-600 px-6 py-2 rounded-full text-xl font-bold shadow-lg flex items-center gap-2">
                <School className="w-6 h-6" />
                CENTRO EDUCATIVO ECUATORIANO HOLANDÉS
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Para Todos los Estudiantes!
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Desde los más pequeños hasta los más grandes, Lista B trabaja para hacer de nuestro colegio un lugar mejor para todos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Por Qué Votarnos Section */}
      <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-primary-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -bottom-20 -left-20 w-32 h-32 bg-orange-200 rounded-full opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-xl flex items-center gap-3">
                <Target className="w-7 h-7" />
                ¿POR QUÉ VOTARNOS?
                <Target className="w-7 h-7" />
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ¡Somos la Mejor Opción!
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>Para niños pequeños y estudiantes grandes:</strong> Tenemos propuestas que benefician a todos en el Centro Educativo Ecuatoriano Holandés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: "Experiencia", 
                description: "Nuestro equipo ha participado activamente en diversas actividades estudiantiles",
                emoji: Star,
                kidFriendly: "¡Somos súper experimentados!",
                highSchool: "Liderazgo comprobado en múltiples proyectos"
              },
              { 
                icon: Target, 
                title: "Compromiso", 
                description: "Trabajaremos incansablemente para cumplir cada una de nuestras promesas",
                emoji: Shield,
                kidFriendly: "¡Prometemos y cumplimos!",
                highSchool: "Transparencia y responsabilidad en cada acción"
              },
              { 
                icon: Ear, 
                title: "Escuchamos", 
                description: "Tus ideas y opiniones son importantes para nosotros. ¡Te escucharemos siempre!",
                emoji: HandHeart,
                kidFriendly: "¡Tu voz es importante!",
                highSchool: "Participación estudiantil real y efectiva"
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: 5
                  }}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-4 border-transparent hover:border-primary-300 relative overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl"
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with animation */}
                      <motion.div 
                        className="relative mb-6"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <div className="bg-gradient-to-br from-primary-100 to-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:from-primary-200 group-hover:to-orange-200 transition-all duration-300 shadow-lg">
                          <IconComponent className="w-12 h-12 text-primary-600" />
                        </div>
                        <motion.div
                          className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <item.emoji className="w-6 h-6 text-primary-600" />
                        </motion.div>
                      </motion.div>

                      {/* Title with special effect */}
                      <motion.h3 
                        className="text-3xl font-bold text-gray-900 mb-4 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Kid-friendly message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 mb-4 border-l-4 border-yellow-400"
                      >
                        <p className="text-lg font-semibold text-orange-800 text-center">
                          {item.kidFriendly}
                        </p>
                      </motion.div>

                      {/* High school message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-100 to-primary-100 rounded-lg p-4 mb-4 border-l-4 border-blue-400"
                      >
                        <p className="text-sm font-medium text-blue-800 text-center">
                          {item.highSchool}
                        </p>
                      </motion.div>

                      {/* Main description */}
                      <p className="text-gray-600 text-center leading-relaxed">
                        {item.description}
                      </p>

                      {/* Fun interactive element */}
                      <motion.div
                        className="mt-6 text-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                        >
                          <MousePointer className="w-4 h-4" />
                          ¡Toca para más info!
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.1)",
                  "0 20px 40px rgba(0,0,0,0.15)",
                  "0 10px 25px rgba(0,0,0,0.1)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block bg-gradient-to-r from-primary-500 to-orange-500 text-white px-12 py-6 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-3">
                <PartyPopper className="w-8 h-8" />
                ¡Lista B para Todos!
                <PartyPopper className="w-8 h-8" />
              </h3>
              <p className="text-lg flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Pequeños y grandes, juntos hacemos la diferencia
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mascot Showcase Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-2xl font-bold shadow-lg flex items-center gap-2">
                <Crown className="w-6 h-6" />
                GORILÍN
                <Crown className="w-6 h-6" />
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¡Conoce a Nuestro Mascota!
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>Gorilín</strong> representa la fuerza, inteligencia y diversión que traemos a Lista B. ¡Es nuestro compañero más cool!
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setMascotClickCount(prev => prev + 1)}
            >
              <AnimatedMascot 
                size={200} 
                animation="dance" 
                showSparkles={true}
                showName={true}
                name={getCurrentMascotName()}
                className="drop-shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-4"
              >
                <p className="text-sm text-gray-500 italic flex items-center justify-center gap-1">
                  <MousePointer className="w-4 h-4" />
                  ¡Haz clic en Gorilín para ver sus nombres secretos!
                  <ArrowRight className="w-4 h-4" />
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left max-w-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                ¡Gorilín de Lista B!
              </h3>
              <div className="space-y-4 text-lg text-gray-600">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Trophy className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <span><strong>Fuerza:</strong> Representa nuestra determinación para lograr cambios</span>
                </div>
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <span><strong>Corazón:</strong> Trabajamos con pasión por nuestro colegio</span>
                </div>
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <PartyPopper className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <span><strong>Diversión:</strong> Creemos que aprender debe ser divertido y emocionante</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¡El Cambio Empieza Contigo!
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Vota por la Lista B y construyamos juntos el colegio que todos merecemos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Vote className="w-6 h-6" />
                Vota Lista B
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Contáctanos
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Mascots in Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-8 left-8 hidden lg:block"
        >
          <AnimatedMascot 
            size={70} 
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
            size={60} 
            animation="wiggle" 
            showSparkles={false}
            showName={true}
            name={gorillaNames.cta2}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-4">
              <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-xl font-bold">
                LISTA B
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Tu voz, nuestro compromiso. Juntos por un mejor colegio.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a 
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="text-gray-400 hover:text-primary-500 transition-colors p-3 rounded-full hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
            <p className="text-sm text-gray-500">
              © 2025 Lista B - Elecciones Estudiantiles. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

