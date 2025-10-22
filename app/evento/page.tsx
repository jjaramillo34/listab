'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Gift, 
  IceCream, 
  Palette, 
  Sparkles, 
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Gamepad2,
  Candy,
  Coffee,
  Music,
  Mic,
  Heart,
  Zap,
  Instagram,
  ExternalLink,
  PartyPopper
} from 'lucide-react'
import Link from 'next/link'
import AnimatedMascot from '../../components/AnimatedMascot'

export default function EventoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const eventDate = new Date('2025-10-23T15:00:00')
  const currentDate = new Date()
  const timeUntilEvent = eventDate.getTime() - currentDate.getTime()
  const daysUntilEvent = Math.ceil(timeUntilEvent / (1000 * 60 * 60 * 24))

  const eventDetails = {
    title: "🎉 Gran Presentación de Lista B",
    subtitle: "¡El evento más esperado del año!",
    date: "23 de Octubre, 2025",
    time: "8:00 AM - 9:15 AM",
    location: "Unidad Educativa Ecuatoriano Holandés",
    description: "Únete a nosotros en una mañana llena de diversión, entretenimiento y la presentación oficial de Lista B. ¡Habrá sorpresas increíbles para todos los estudiantes!"
  }

  const attractions = [
    {
      icon: Users,
      title: "Zanqueros",
      description: "Espectáculo de zanqueros profesionales",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Gamepad2,
      title: "Juegos",
      description: "Diversión garantizada para todos",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Premios",
      description: "Sorpresas y premios increíbles",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: IceCream,
      title: "Gelatina",
      description: "Deliciosas gelatinas de todos los sabores",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Candy,
      title: "Golosinas",
      description: "Dulces y golosinas para todos",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Caritas Pintadas",
      description: "Arte facial para los más pequeños",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Coffee,
      title: "Granizados",
      description: "Bebidas refrescantes y deliciosas",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Sparkles,
      title: "Algodón de Azúcar",
      description: "El clásico algodón de azúcar",
      color: "from-rose-500 to-rose-600"
    }
  ]

  const artistInfo = {
    name: "Diego Villacis DVM",
    title: "Artista Principal",
    description: "Una presentación musical única que no te puedes perder",
    video: "/images/artista.MP4",
    instagram: "https://www.instagram.com/dvmtupapi?igsh=aWw2YXMzenNqZGVl",
    message: "¡Hola! Soy Diego Villacis DVM y quiero dar todo mi apoyo a Lista B. Estoy muy emocionado de ser parte de este gran evento el 23 de octubre. Juntos vamos a hacer que nuestro holandés sea aún mejor. ¡Los espero a todos!",
    highlights: [
      "Show musical en vivo",
      "Interacción con el público",
      "Música para todas las edades",
      "Sorpresas especiales"
    ]
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-200 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 && <Star className="w-4 h-4" />}
            {i % 4 === 1 && <Heart className="w-4 h-4" />}
            {i % 4 === 2 && <Music className="w-4 h-4" />}
            {i % 4 === 3 && <Zap className="w-4 h-4" />}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-primary-600 to-orange-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Back Button */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al Inicio
            </Link>
          </motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mascot in Header */}
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={100} 
                animation="dance" 
                showSparkles={true}
                showName={true}
                name="¡Gran Evento!"
                className="text-white"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {eventDetails.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              {eventDetails.subtitle}
            </p>
            
            {/* Event Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <Calendar className="w-8 h-8 mx-auto mb-3 text-orange-200" />
                <h3 className="text-lg font-bold mb-2">{eventDetails.date}</h3>
                <p className="text-orange-100">Fecha del evento</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <Clock className="w-8 h-8 mx-auto mb-3 text-orange-200" />
                <h3 className="text-lg font-bold mb-2">{eventDetails.time}</h3>
                <p className="text-orange-100">Horario</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <MapPin className="w-8 h-8 mx-auto mb-3 text-orange-200" />
                <h3 className="text-lg font-bold mb-2">Colegio</h3>
                <p className="text-orange-100 text-sm">{eventDetails.location}</p>
              </motion.div>
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-2">
                  {daysUntilEvent > 0 ? `¡Faltan ${daysUntilEvent} días!` : '¡Hoy es el día!'}
                </h3>
                <p className="text-orange-100">
                  {daysUntilEvent > 0 ? 'No te lo pierdas' : '¡Nos vemos ahí!'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Artist Section - Main Attraction */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Mic className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                🎤 Atracción Principal
              </h2>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La presentación musical que todos están esperando
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Artist Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Mascot */}
              <div className="flex justify-center mb-6">
                <AnimatedMascot 
                  size={120} 
                  animation="bounce" 
                  showSparkles={true}
                  showName={true}
                  name="¡Apoyo Total!"
                />
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {artistInfo.name}
                </h3>
                <p className="text-xl text-purple-600 font-semibold mb-4">
                  {artistInfo.title}
                </p>
                
                {/* Message from Diego */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <Mic className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Mensaje de Apoyo</h4>
                      <p className="text-gray-700 italic leading-relaxed">
                        &ldquo;{artistInfo.message}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {artistInfo.description}
                </p>

                {/* Instagram Link */}
                <div className="mb-6">
                  <a
                    href={artistInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Instagram className="w-5 h-5" />
                    Seguir en Instagram
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-3">
                  {artistInfo.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  🎬 Video Promocional
                </h4>
                
                <div className="relative rounded-xl overflow-hidden bg-gray-900">
                  <video
                    ref={videoRef}
                    className="w-full aspect-video"
                    poster="/images/campaign-banner.jpeg"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src={artistInfo.video} type="video/mp4" />
                  </video>

                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayPause}
                      className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" fill="currentColor" />
                      )}
                    </motion.button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePlayPause}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      
                      <div className="flex-1 bg-white bg-opacity-30 rounded-full h-1">
                        <div 
                          className="bg-orange-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        ></div>
                      </div>
                      
                      <span className="text-white text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                      
                      <button
                        onClick={handleMute}
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={100} 
                animation="bounce" 
                showSparkles={true}
                showName={true}
                name="¡Diversión Total!"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎪 Atracciones del Evento
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una mañana llena de diversión y entretenimiento para todos los estudiantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${attraction.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <attraction.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Atmosphere Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={100} 
                animation="dance" 
                showSparkles={true}
                showName={true}
                name="¡Fiesta Total!"
              />
            </div>
            
            <div className="inline-flex items-center gap-3 mb-6">
              <PartyPopper className="w-8 h-8 text-pink-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                🎉 ¡Atmósfera de Fiesta!
              </h2>
              <PartyPopper className="w-8 h-8 text-pink-600" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Decoración especial, música, diversión y mucha alegría te esperan en nuestro gran evento
            </p>

            {/* Party Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Decoración Festiva</h3>
                <p className="text-gray-600">Decoración especial y ambiente festivo para crear el momento perfecto</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Música y Ambiente</h3>
                <p className="text-gray-600">Música en vivo y ambiente festivo para todos los estudiantes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diversión Garantizada</h3>
                <p className="text-gray-600">Actividades y sorpresas que harán de este día inolvidable</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Description */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                animation="pulse" 
                showSparkles={true}
                showName={true}
                name="¡Te Esperamos!"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🎉 ¡No Te Lo Pierdas!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {eventDetails.description}
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📅 Información del Evento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Fecha</p>
                    <p className="text-gray-600">{eventDetails.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Horario</p>
                    <p className="text-gray-600">{eventDetails.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">{eventDetails.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Público</p>
                    <p className="text-gray-600">Todos los estudiantes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={120} 
                animation="wiggle" 
                showSparkles={true}
                showName={true}
                name="¡Nos Vemos!"
                className="text-white"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎊 ¡Te Esperamos!
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Una mañana inolvidable llena de diversión, música y sorpresas te espera
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                ← Volver al Inicio
              </Link>
              <Link
                href="/galeria"
                className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Galería →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
