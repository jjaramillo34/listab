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
  Zap
} from 'lucide-react'

// Animated Mascot Component
const AnimatedMascot = ({ 
  size = 120, 
  animation = "float", 
  className = "",
  showSparkles = false 
}: { 
  size?: number
  animation?: "float" | "bounce" | "pulse" | "wiggle" | "dance"
  className?: string
  showSparkles?: boolean
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
        alt="Lista B Mascot"
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
    </motion.div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('propuestas')

  const team = [
    { name: 'Paul Cordova', position: 'Presidente', animation: 'dance', showSparkles: true },
    { name: 'John Doe', position: 'Vice Presidente', animation: 'bounce', showSparkles: false },
    { name: 'Sofia Jaramillo', position: 'Tesorera', animation: 'pulse', showSparkles: true },
    { name: 'Jane Doe', position: 'Vocal 1', animation: 'wiggle', showSparkles: false },
    { name: 'Maria Joe Doe', position: 'Vocal 2', animation: 'float', showSparkles: true },
  ]

  const propuestas = [
    {
      icon: BookOpen,
      title: 'Mejores Espacios de Estudio',
      description: 'Renovaremos las áreas comunes con WiFi mejorado y zonas de estudio cómodas.'
    },
    {
      icon: Palette,
      title: 'Arte y Cultura',
      description: 'Organizaremos eventos culturales mensuales y talleres de expresión artística.'
    },
    {
      icon: Trophy,
      title: 'Deportes para Todos',
      description: 'Crearemos torneos inter-clases y acceso a más actividades deportivas.'
    },
    {
      icon: Heart,
      title: 'Bienestar Estudiantil',
      description: 'Implementaremos un programa de apoyo entre estudiantes y salud mental.'
    },
    {
      icon: Leaf,
      title: 'Colegio Sostenible',
      description: 'Iniciaremos proyectos de reciclaje y cuidado del medio ambiente.'
    },
    {
      icon: PartyPopper,
      title: 'Más Eventos',
      description: 'Planificaremos actividades recreativas y de integración mensuales.'
    },
  ]

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
                {/* Floating Mascot in Hero */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute top-4 right-4"
                >
                  <AnimatedMascot 
                    size={80} 
                    animation="dance" 
                    showSparkles={true}
                    className="drop-shadow-2xl"
                  />
                </motion.div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center relative">
                <AnimatedMascot 
                  size={100} 
                  animation={member.animation as any}
                  showSparkles={member.showSparkles}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-t-2xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/90 rounded-full p-3"
                  >
                    <Zap className="w-8 h-8 text-primary-600" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold">{member.position}</p>
              </div>
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
                className="drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propuestas.map((propuesta, index) => {
              const IconComponent = propuesta.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-primary-500 cursor-pointer group"
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Por Qué Votarnos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué Votarnos?
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Experiencia", description: "Nuestro equipo ha participado activamente en diversas actividades estudiantiles" },
            { icon: Target, title: "Compromiso", description: "Trabajaremos incansablemente para cumplir cada una de nuestras promesas" },
            { icon: Ear, title: "Escuchamos", description: "Tus ideas y opiniones son importantes para nosotros. ¡Te escucharemos siempre!" }
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300"
                >
                  <IconComponent className="w-10 h-10 text-primary-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¡Conoce a Nuestro Mascota!
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro gorila mascota representa la fuerza, inteligencia y diversión que traemos a Lista B
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <AnimatedMascot 
                size={200} 
                animation="dance" 
                showSparkles={true}
                className="drop-shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left max-w-2xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                ¡El Gorila de Lista B!
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

