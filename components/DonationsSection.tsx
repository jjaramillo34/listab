'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles, Award, Users, Gift, Star } from 'lucide-react'
import { donors, sponsors, donationTiers } from '../lib/donorsData'
import AnimatedMascot from './AnimatedMascot'
import Image from 'next/image'

export default function DonationsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '120%',
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: '-20%',
              rotate: Math.random() * 360 + 360
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            <Heart className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} text-orange-300 opacity-20`} fill="currentColor" />
          </motion.div>
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
            <div className="relative">
              <AnimatedMascot 
                size={160} 
                animation="bounce"
                showSparkles={true}
                showName={false}
                className="mx-auto"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4"
              >
                <Heart className="w-12 h-12 text-red-500" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              💙 Amor Gorila 🦍
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
            ¡Gracias a Todos Nuestros Increíbles Donantes!
          </p>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Con su apoyo, podemos hacer realidad todas nuestras propuestas y crear 
            un año escolar inolvidable para toda la comunidad educativa. 
            ¡Cada donación cuenta! 🌟
          </p>
        </motion.div>

        {/* Donation Tiers Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {Object.entries(donationTiers).map(([key, tier], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${tier.color} rounded-2xl p-4 md:p-6 text-white text-center shadow-xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl mb-2">{tier.icon}</div>
                  <div className="font-bold text-base md:text-lg mb-1">{tier.name}</div>
                  <div className="text-xs md:text-sm opacity-90">{tier.minAmount}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsors Section (Business with Logos) */}
        {sponsors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-orange-600" />
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Patrocinadores Oficiales
                </h3>
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-gray-600">Empresas que apoyan nuestra visión</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 relative overflow-hidden group"
                >
                  {/* Tier Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${donationTiers[sponsor.tier].color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {donationTiers[sponsor.tier].icon} {donationTiers[sponsor.tier].name}
                  </div>

                  {/* Logo */}
                  <div className="relative h-32 mb-4 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        // Fallback to text if logo doesn't exist
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <div className="text-2xl font-bold text-gray-800 text-center">
                      {sponsor.name}
                    </div>
                  </div>

                  {/* Sparkles on hover */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-orange-500" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Individual and Family Donors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-pink-600" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Héroes Gorilas
              </h3>
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <p className="text-gray-600">Familias y personas que nos apoyan con el corazón</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donors.map((donor, index) => {
              const tier = donationTiers[donor.amount as keyof typeof donationTiers]
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${tier?.color || 'from-gray-200 to-gray-400'} rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group cursor-pointer`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Tier Icon */}
                    <div className="text-4xl mb-3 text-center">
                      {tier?.icon || '❤️'}
                    </div>

                    {/* Donor Name */}
                    <h4 className="text-lg md:text-xl font-bold text-center mb-2">
                      {donor.name}
                    </h4>

                    {/* Type Badge */}
                    <div className="text-center">
                      <span className="inline-block bg-white bg-opacity-30 px-3 py-1 rounded-full text-xs font-semibold">
                        {donor.type === 'family' ? '👨‍👩‍👧‍👦 Familia' : '🌟 Individual'}
                      </span>
                    </div>

                    {/* Message if available */}
                    {donor.message && (
                      <p className="text-sm mt-3 text-center opacity-90 italic">
                        &ldquo;{donor.message}&rdquo;
                      </p>
                    )}

                    {/* Floating hearts on hover */}
                    <motion.div
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Heart className="w-6 h-6" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ 
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: 0
                  }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-4 h-4 text-white" fill="currentColor" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10">
              <Gift className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¿Quieres Apoyar Nuestra Causa?
              </h3>
              <p className="text-lg md:text-xl text-white opacity-95 mb-8 max-w-2xl mx-auto">
                Tu donación nos ayuda a organizar eventos increíbles, mejorar las instalaciones 
                y crear experiencias memorables para todos los estudiantes. ¡Únete a nuestra familia gorila! 🦍💙
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl shadow-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-3"
              >
                <Heart className="w-6 h-6" fill="currentColor" />
                Donar Ahora
                <Sparkles className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

