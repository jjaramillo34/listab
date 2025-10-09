'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Mail, 
  Instagram, 
  Heart, 
  Palette, 
  Music, 
  Gamepad2, 
  BookOpen, 
  Camera, 
  Utensils, 
  MapPin,
  Star,
  Award,
  Vote,
  Pencil
} from 'lucide-react'
import { getTeamMemberById } from '@/lib/teamData'
import PhotoGallery from '@/components/PhotoGallery'
import AnimatedMascot from '@/components/AnimatedMascot'
import ImageWithFallback from '@/components/ImageWithFallback'
import FloatingElements from '@/components/FloatingElements'
import StatsCounter from '@/components/StatsCounter'
import FunFacts from '@/components/FunFacts'
import { notFound } from 'next/navigation'

export default function MemberPage() {
  const params = useParams()
  const router = useRouter()
  const memberId = params.member as string

  const member = getTeamMemberById(memberId)

  if (!member) {
    notFound()
  }

  const hobbyIcons = {
    painting: Palette,
    drawing: Pencil,
    music: Music,
    gaming: Gamepad2,
    reading: BookOpen,
    photography: Camera,
    cooking: Utensils,
    travel: MapPin,
    sports: Heart
  }

  // Stats para cada miembro
  const memberStats = [
    { label: 'Años', value: member.age, icon: Star },
    { label: 'Proyectos', value: 12, suffix: '+', icon: Award },
    { label: 'Hobbies', value: member.hobbies.length, icon: Heart },
    { label: 'Energía', value: 100, suffix: '%', icon: Vote },
  ]

  // Fun facts personalizados
  const funFacts = [
    `${member.name.split(' ')[0]} siempre está lleno de energía y entusiasmo`,
    `Le encanta ${member.hobbies[0]?.name || 'aprender cosas nuevas'}`,
    `Sueña con hacer del colegio un lugar mejor para todos`,
    `Su lema es: "${member.favoriteQuote}"`,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Lista B
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <FloatingElements />
        
        {/* Animated background circles */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-4 border-white/30 rounded-full"
              />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <ImageWithFallback
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-yellow-400 text-primary-900 rounded-full p-4 shadow-xl"
              >
                <Star className="w-8 h-8" fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4"
              >
                <span className="text-lg font-bold">{member.position}</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {member.name}
              </h1>
              
              <p className="text-xl md:text-2xl opacity-90 mb-6 italic">
                &ldquo;{member.favoriteQuote}&rdquo;
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="font-semibold">{member.age} años</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="font-semibold">Clase {member.year}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {member.instagram && (
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                )}
                {member.email && (
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={`mailto:${member.email}`}
                    className="bg-white text-primary-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="hidden lg:block"
            >
              <AnimatedMascot
                size={150}
                animation={member.animation as any}
                showSparkles={member.showSparkles}
                showName={true}
                name={member.gorillaName}
              />
            </motion.div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-4 border-primary-500 relative overflow-hidden"
        >
          {/* Decorative corner gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100 to-transparent rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">Sobre Mí</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {member.bio}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            En Números
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <StatsCounter stats={memberStats} />
      </section>

      {/* Fun Facts Section */}
      <section className="bg-gradient-to-br from-primary-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Datos Curiosos
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Descubre más sobre {member.name.split(' ')[0]}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FunFacts facts={funFacts} />
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mis Pasatiempos Favoritos
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {member.hobbies.map((hobby, index) => {
            const IconComponent = hobbyIcons[hobby.name as keyof typeof hobbyIcons] || Heart
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 relative overflow-hidden group"
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-orange-200/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 capitalize text-center group-hover:text-primary-600 transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 bg-primary-400 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Galería de Fotos
          </motion.h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            Algunos momentos especiales capturados
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PhotoGallery photos={member.photos} name={member.name} />
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡Únete a Nuestro Equipo!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Juntos podemos hacer del Centro Educativo Ecuatoriano Holandés un lugar mejor para todos
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Vote className="w-5 h-5" />
                  Vota por Lista B
                </motion.button>
              </Link>
              <Link href="/#team">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Conoce al Equipo
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-2">Lista B - Centro Educativo Ecuatoriano Holandés</p>
          <p className="text-gray-400">&copy; 2025 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}
