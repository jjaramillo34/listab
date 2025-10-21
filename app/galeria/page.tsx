'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Star, 
  Sparkles,
  Users,
  Trophy,
  Calendar,
  MapPin,
  ArrowLeft,
  Rocket
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedMascot from '../../components/AnimatedMascot'
import FloatingElements from '../../components/FloatingElements'

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  // Gallery data with inspiring messages
  const galleryImages = [
    {
      src: "/images/galleria/image1.jpeg",
      title: "Firma Oficial",
      message: "Compromiso firmado, promesas hechas realidad ✍️",
      category: "oficial"
    },
    {
      src: "/images/galleria/image2.jpeg",
      title: "Firma Oficial",
      message: "Compromiso firmado, promesas hechas realidad ✍️",
      category: "oficial"
    },
    {
      src: "/images/galleria/image3.jpeg",
      title: "Firma Oficial",
      message: "Juntos somos más fuertes, juntos somos Lista B 💪",
      category: "oficial"
    },
    {
      src: "/images/galleria/image4.jpeg",
      title: "Momentos de Alegría",
      message: "La felicidad se contagia cuando trabajamos por un objetivo común 😊",
      category: "alegria"
    },
    {
      src: "/images/galleria/image5.jpeg",
      title: "Firma Oficial",
      message: "Cada detalle cuenta, cada esfuerzo vale la pena ⚡",
      category: "oficial"
    },
    {
      src: "/images/galleria/image6.jpeg",
      title: "Firma Oficial",
      message: "Celebramos cada logro, cada paso hacia la victoria 🎉",
      category: "oficial"
    },
    {
      src: "/images/galleria/image7.jpeg",
      title: "Momento Histórico",
      message: "Un día que quedará en la historia de nuestro colegio 📚",
      category: "historico"
    },
    {
      src: "/images/galleria/image8.jpeg",
      title: "Sonrisas Genuinas",
      message: "La autenticidad de nuestro compromiso se refleja en cada sonrisa 😄",
      category: "autenticidad"
    },
    {
      src: "/images/galleria/image9.jpeg",
      title: "Trabajo en Equipo",
      message: "La unión hace la fuerza - Lista B trabajando como uno solo 🤝",
      category: "union"
    },
    {
      src: "/images/galleria/image10.jpeg",
      title: "Momento Especial",
      message: "Cada instante es único cuando trabajamos por nuestros sueños ✨",
      category: "especial"
    },
    {
      src: "/images/galleria/image11.jpeg",
      title: "Firma Oficial",
      message: "El documento que marca el inicio de una nueva era 📋",
      category: "oficial"
    },
    {
      src: "/images/galleria/image12.jpeg",
      title: "Celebración Colectiva",
      message: "Toda la comunidad celebra el inicio de Lista B 🎊",
      category: "comunidad"
    },
    {
      src: "/images/galleria/image13.jpeg",
      title: "Momento de Reflexión",
      message: "Pensando en el futuro que queremos construir juntos 🤔",
      category: "reflexion"
    },
    {
      src: "/images/galleria/image14.jpeg",
      title: "Energía Positiva",
      message: "La energía de Lista B se siente en cada rincón del colegio ⚡",
      category: "energia"
    },
    {
      src: "/images/galleria/image15.jpeg",
      title: "El Futuro Comienza",
      message: "Hoy empezamos a escribir el futuro de nuestro colegio 🌟",
      category: "futuro"
    }
  ]

  const galleryVideos = [
    {
      src: "/images/galleria/video1.mp4",
      title: "Lanzamiento en Video",
      message: "Revive el momento más emocionante del lanzamiento oficial 🎬",
      category: "video"
    },
    {
      src: "/images/galleria/video2.mp4",
      title: "Mensaje del Equipo",
      message: "Las palabras que inspiraron a toda la comunidad estudiantil 💬",
      category: "mensaje"
    }
  ]

  const categories = [
    { id: 'todos', name: 'Todos', icon: Camera, color: 'from-blue-500 to-blue-600' },
    { id: 'lanzamiento', name: 'Lanzamiento', icon: Rocket, color: 'from-orange-500 to-orange-600' },
    { id: 'oficial', name: 'Oficial', icon: Star, color: 'from-purple-500 to-purple-600' },
    { id: 'equipo', name: 'Equipo', icon: Users, color: 'from-green-500 to-green-600' },
    { id: 'celebracion', name: 'Celebración', icon: Trophy, color: 'from-yellow-500 to-yellow-600' }
  ]

  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredImages = activeCategory === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-orange-500 text-white py-16 relative overflow-hidden">
        <FloatingElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-start mb-8"
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al Inicio
              </Link>
            </motion.div>

            {/* Gorilla Mascot */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <AnimatedMascot 
                size={120} 
                animation="bounce"
                showSparkles={true}
                showName={false}
                className="mx-auto"
              />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-orange-100 to-pink-100 bg-clip-text text-transparent">
                📸 Galería Oficial
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-semibold">
              El Lanzamiento de Lista B 2025-2026
            </p>
            
            <p className="text-base md:text-lg text-orange-100 max-w-3xl mx-auto">
              Revive los momentos más emocionantes del lanzamiento oficial de nuestra campaña. 
              Cada imagen cuenta una historia de compromiso, unión y esperanza para nuestro colegio.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Category Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📸 Galería de Fotos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada momento capturado cuenta una historia de compromiso, unión y esperanza para nuestro colegio.
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((item, index) => (
                <motion.div
                  key={`${item.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                    {/* Image */}
                    <div className="relative aspect-square">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.message}
                      </p>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`bg-gradient-to-r ${categories.find(c => c.id === item.category)?.color || 'from-gray-500 to-gray-600'} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}>
                        {categories.find(c => c.id === item.category)?.name || item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Play className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                🎬 Videos del Lanzamiento
              </h2>
              <Play className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Revive los momentos más emocionantes del lanzamiento oficial a través de nuestros videos especiales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {galleryVideos.map((video, index) => (
              <motion.div
                key={`video-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(index)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gray-900">
                    <video
                      className="w-full h-full object-cover"
                      poster={video.src.replace('.mp4', '.jpeg')}
                      muted
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-white bg-opacity-20 rounded-full p-6 group-hover:bg-opacity-30 transition-all duration-300"
                      >
                        <Play className="w-12 h-12 text-white" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Video Duration Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-bold">
                        🎬 Video
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {video.message}
                    </p>
                    
                    {/* Play Button */}
                    <div className="flex items-center gap-2 text-orange-600 font-semibold">
                      <Play className="w-5 h-5" />
                      <span>Reproducir Video</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white text-sm">
                  {galleryImages[selectedImage].message}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={galleryVideos[selectedVideo].src}
                controls
                autoPlay
                className="rounded-lg shadow-2xl w-full h-auto max-h-[80vh]"
              >
                Tu navegador no soporta videos.
              </video>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">
                  {galleryVideos[selectedVideo].title}
                </h3>
                <p className="text-white text-sm">
                  {galleryVideos[selectedVideo].message}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para Ser Parte de la Historia?
            </h2>
            <p className="text-xl text-white mb-8 opacity-95">
              Únete a Lista B y forma parte de los momentos que cambiarán nuestro colegio para siempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Heart className="w-6 h-6" fill="currentColor" />
                Vota por Lista B
              </Link>
              <Link
                href="/propuestas"
                className="bg-white bg-opacity-20 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-opacity-30 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-6 h-6" />
                Ver Propuestas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
