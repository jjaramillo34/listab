'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
  School,
  Star,
  Crown,
  HandHeart,
  Shield,
  MousePointer,
  ArrowRight,
  Music,
  Gamepad2,
  Camera,
  Utensils,
  MapPin,
  Award,
  Waves,
  Activity,
  Mic,
  Cake,
  Popcorn,
  Film,
  Lightbulb,
  Calendar,
  Sparkles as SparklesIcon
} from 'lucide-react'

// Import components
import AnimatedMascot from '../components/AnimatedMascot'
import SpinningCard from '../components/SpinningCard'
import TeamCard from '../components/TeamCard'
import WhyVoteCard from '../components/WhyVoteCard'
import SectionHeader from '../components/SectionHeader'
import VideoSection from '../components/VideoSection'
import FloatingElements from '../components/FloatingElements'
import CountdownTimer from '../components/CountdownTimer'
import TestimonialCard from '../components/TestimonialCard'
import AchievementBadge from '../components/AchievementBadge'
import FallingIcons from '../components/FallingIcons'
import MascotShowcase from '../components/MascotShowcase'
import CallToActionSection from '../components/CallToActionSection'
import IntroductionSection from '../components/IntroductionSection'
import ObjectivesSection from '../components/ObjectivesSection'
import ConclusionSection from '../components/ConclusionSection'
import EnhancedPropuestasSection from '../components/EnhancedPropuestasSection'
import DonationsSection from '../components/DonationsSection'
import { teamMembers } from '../lib/teamData'


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

  const team = teamMembers

  // Election date - Set your actual election date here
  const electionDate = new Date('2025-11-15') // Example: November 15, 2025

  // Testimonials from students
  const testimonials = [
    {
      name: "Carlos Mendoza",
      grade: "10mo Grado",
      quote: "Lista B realmente escucha nuestras ideas. Han demostrado compromiso con mejorar nuestro colegio."
    },
    {
      name: "Ana García",
      grade: "9no Grado",
      quote: "Me encanta su propuesta de más eventos culturales. ¡Necesitamos más arte en el colegio!"
    },
    {
      name: "Luis Torres",
      grade: "11vo Grado",
      quote: "Su plan de deportes para todos es exactamente lo que necesitábamos. ¡Tienen mi voto!"
    }
  ]

  // Achievements
  const achievements = [
    {
      title: "Experiencia",
      description: "3+ años en consejos estudiantiles",
      icon: Award,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Proyectos",
      description: "15+ iniciativas exitosas",
      icon: Trophy,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "Compromiso",
      description: "100% dedicación al colegio",
      icon: Heart,
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      title: "Unidad",
      description: "Equipo de 6 líderes",
      icon: Users,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    }
  ]

  const propuestas = [
    {
      icon: Trophy,
      title: '⚽ Torneos Deportivos',
      description: 'Campeonatos de fútbol, volleyball, básquet y más deportes cada mes con premios y medallas.',
      eyeCatchingWords: ['¡CAMPEONES!', '⚽ FÚTBOL', '🏐 VOLLEYBALL', '🏀 BÁSQUET']
    },
    {
      icon: Mic,
      title: '🎵 Festival de Talentos',
      description: 'Shows mensuales donde puedes cantar, bailar, tocar instrumentos o hacer stand-up comedy.',
      eyeCatchingWords: ['¡ESCENARIO!', '🎤 CANTAR', '💃 BAILAR', '🎸 MÚSICA']
    },
    {
      icon: Palette,
      title: '🎨 Talleres Creativos',
      description: 'Clases de pintura, dibujo, fotografía y arte digital después de clases totalmente gratis.',
      eyeCatchingWords: ['¡ARTE!', '🎨 PINTURA', '📸 FOTOS', '✨ CREATIVIDAD']
    },
    {
      icon: Utensils,
      title: '🍕 Cafetería Mejorada',
      description: 'Más opciones saludables, postres deliciosos y días temáticos con comida internacional.',
      eyeCatchingWords: ['¡RICO!', '🍕 PIZZA', '🍰 POSTRES', '☕ CAFÉ']
    },
    {
      icon: Gamepad2,
      title: '🎮 Zona Gamer',
      description: 'Sala de videojuegos con consolas, torneos de eSports y espacio para juegos de mesa.',
      eyeCatchingWords: ['¡JUEGA!', '🎮 CONSOLAS', '🏆 TORNEOS', '🎯 DIVERSIÓN']
    },
    {
      icon: Film,
      title: '🎬 Cine Club',
      description: 'Proyecciones de películas cada viernes, palomitas gratis y debates sobre cine.',
      eyeCatchingWords: ['¡CINE!', '🎬 PELÍCULAS', '🍿 PALOMITAS', '⭐ VIERNES']
    },
    {
      icon: BookOpen,
      title: '📚 Biblioteca Digital',
      description: 'WiFi ultra rápido, tablets para estudiar, área silenciosa y rincón de lectura acogedor.',
      eyeCatchingWords: ['¡WIFI!', '📚 LIBROS', '💻 TABLETS', '📖 ESTUDIAR']
    },
    {
      icon: PartyPopper,
      title: '🎉 Fiestas Temáticas',
      description: 'Eventos mensuales: Halloween, Navidad, Carnaval, día del estudiante con decoración increíble.',
      eyeCatchingWords: ['¡FIESTA!', '🎃 HALLOWEEN', '🎄 NAVIDAD', '🎊 CARNAVAL']
    },
    {
      icon: Heart,
      title: '💗 Apoyo Psicológico',
      description: 'Espacio seguro para hablar, talleres de manejo de estrés y actividades de bienestar.',
      eyeCatchingWords: ['¡APOYO!', '💗 ESCUCHA', '🧘 RELAX', '🤝 AYUDA']
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <FloatingElements />
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg"
              >
                ¡Tu Voz, Nuestro Compromiso!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl mb-8 px-4 lg:px-0"
              >
                Juntos transformaremos nuestro colegio en un espacio mejor para todos
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-primary-50 transition-all duration-300 shadow-xl"
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
                  src="/images/campaign-banner.webp"
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

      {/* Introducción */}
      <IntroductionSection />

      {/* Objetivos */}
      <ObjectivesSection />

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Nuestro Equipo"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Video Section - Why Vote Lista B */}
      <VideoSection
        videoSrc="/images/video_new.mp4"
        title="¿Por Qué Votar por Lista B?"
        description="Descubre por qué Lista B es la mejor opción para representar a todos los estudiantes del Unidad Educativa Ecuatoriano Holandés. Nuestro compromiso, experiencia y visión nos hacen únicos."
      />

      {/* Countdown Timer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CountdownTimer targetDate={electionDate} />
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-br from-gray-50 to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Logros
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencia comprobada y compromiso real con el colegio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementBadge key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Propuestas Section */}
      <EnhancedPropuestasSection 
        gorillaNames={gorillaNames}
        propuestas={propuestas}
      />

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
                UNIDAD EDUCATIVA ECUATORIANO HOLANDÉS
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
              <strong>Para niños pequeños y estudiantes grandes:</strong> Tenemos propuestas que benefician a todos en el Unidad Educativa Ecuatoriano Holandés
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
            ].map((item, index) => (
              <WhyVoteCard key={index} item={item} index={index} />
            ))}
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

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen los Estudiantes
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escucha las voces de quienes ya confían en Lista B
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </section>

      {/* Mascot Showcase Section */}
      <MascotShowcase
        gorillaNames={gorillaNames}
        funNames={funNames}
        mascotClickCount={mascotClickCount}
        onMascotClick={() => setMascotClickCount(prev => prev + 1)}
        getCurrentMascotName={getCurrentMascotName}
      />

      {/* Call to Action */}
      <CallToActionSection gorillaNames={gorillaNames} />

      {/* Donations Section - Gorilla Love */}
      <DonationsSection />

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📸 Galerías de Fotos
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Revive los mejores momentos de nuestra campaña y el lanzamiento oficial
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Galería de Campaña</h3>
                <p className="text-gray-600 mb-6">Fotos oficiales y momentos especiales de la campaña</p>
                <Link
                  href="/galeria"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Camera className="w-5 h-5" />
                  Ver Galería
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lanzamiento Oficial</h3>
                <p className="text-gray-600 mb-6">Más de 100 fotos del gran evento de lanzamiento</p>
                <Link
                  href="/lanzamiento"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <PartyPopper className="w-5 h-5" />
                  Ver Lanzamiento
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={100} 
                animation="dance" 
                showSparkles={true}
                showName={true}
                name="¡Gran Evento!"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎉 Gran Evento - 23 de Octubre
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              ¡No te pierdas nuestro gran evento! Zanqueros, juegos, premios, golosinas, 
              caritas pintadas, granizados, algodón de azúcar y la presentación especial de Diego Villacis DVM.
            </p>
            
            {/* Event Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">23 de Octubre</h3>
                <p className="text-gray-600 text-sm">8:00 AM - 9:15 AM</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <Music className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Diego Villacis DVM</h3>
                <p className="text-gray-600 text-sm">Artista Principal</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <PartyPopper className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Diversión Total</h3>
                <p className="text-gray-600 text-sm">Zanqueros, juegos, premios</p>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/evento"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Ver Detalles del Evento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <ConclusionSection />

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
            <p className="text-sm text-gray-500">
              Desarrollado por <a href="https://jaramillohub.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors">Javier Jaramillo</a>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
