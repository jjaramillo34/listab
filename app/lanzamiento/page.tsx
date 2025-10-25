'use client'

import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Users, 
  Camera, 
  Video, 
  PartyPopper,
  Trophy,
  Palette,
  IceCream,
  Music,
  Heart,
  Star,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import AnimatedMascot from '../../components/AnimatedMascot'
import LanzamientoGallery from '../../components/LanzamientoGallery'
import { 
  lanzamientoActivities, 
  lanzamientoHighlights, 
  lanzamientoStats,
  generateLanzamientoImages,
  generateLanzamientoVideos
} from '../../lib/lanzamientoData'

export default function LanzamientoPage() {
  const images = generateLanzamientoImages()
  const videos = generateLanzamientoVideos()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-orange-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={120} 
                animation="dance" 
                showSparkles={true}
                showName={true}
                name="¡Lanzamiento Oficial!"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🎉 Lanzamiento Oficial
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Revive todos los momentos increíbles de nuestro gran evento de lanzamiento
            </p>
            
            {/* Event Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <Camera className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">{lanzamientoStats.totalImages}</div>
                <div className="text-sm opacity-90">Fotos</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <Video className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">{lanzamientoStats.totalVideos}</div>
                <div className="text-sm opacity-90">Videos</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <PartyPopper className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">{lanzamientoStats.totalActivities}</div>
                <div className="text-sm opacity-90">Actividades</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
              >
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">{lanzamientoStats.duration}</div>
                <div className="text-sm opacity-90">Duración</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🌟 Lo Mejor del Evento
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lanzamientoHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🎪 Actividades del Día
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre todas las actividades increíbles que disfrutamos durante el lanzamiento oficial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {lanzamientoActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{activity.name}</h3>
                <p className="text-sm text-gray-600 text-center">{activity.description}</p>
                <div className="mt-3 text-center">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${activity.color} text-white`}>
                    {activity.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📸 Galería Completa
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora todas las fotos y videos del evento. Filtra por categoría y disfruta de cada momento especial.
            </p>
          </motion.div>

          <LanzamientoGallery images={images} videos={videos} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <AnimatedMascot 
                size={100} 
                animation="bounce" 
                showSparkles={true}
                showName={true}
                name="¡Gracias por el Apoyo!"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¡Gracias por Hacer Posible Este Evento!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Tu apoyo y participación hicieron que este lanzamiento fuera inolvidable. 
              ¡Sigamos trabajando juntos por una mejor educación!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-6 h-6" />
                Volver al Inicio
              </Link>
              <Link
                href="/evento"
                className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Próximo Evento
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
