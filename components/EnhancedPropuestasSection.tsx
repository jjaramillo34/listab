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
  CheckCircle,
  Award,
  Lightbulb,
  Leaf,
  Gamepad2,
  Music,
  Gift,
  Coffee,
  Film,
  Zap
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
    // Educación
    {
      id: 'educacion',
      title: "Mentes Brillantes",
      subtitle: "Olimpiadas del Conocimiento",
      description: "Fomentar el desarrollo intelectual, el trabajo en equipo y la sana competencia entre los estudiantes, promoviendo el interés por el aprendizaje y la participación activa en actividades académicas.",
      date: "Marzo",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'educacion',
      title: "Reconocimiento al Cuadro de Honor",
      description: "Reconocer y valorar el esfuerzo, la dedicación y el rendimiento académico de los estudiantes que han obtenido los mejores puntajes, promoviendo la motivación, la excelencia y el compromiso con el aprendizaje.",
      date: "Al finalizar el primer y segundo trimestre",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 'educacion',
      title: "InnovaFest",
      subtitle: "Feria de Emprendimiento",
      description: "Promover el espíritu emprendedor y la creatividad de los estudiantes mediante la exposición y venta de productos elaborados por ellos mismos, fomentando el desarrollo de habilidades prácticas, la innovación y el trabajo colaborativo.",
      date: "Enero",
      icon: Lightbulb,
      color: "from-green-500 to-green-600"
    },
    // Bienestar
    {
      id: 'bienestar',
      title: "Stop and Think",
      description: "Promover el bienestar integral de la comunidad estudiantil mediante charlas formativas que fortalezcan el respeto, la empatía y la responsabilidad, brindando información y herramientas prácticas sobre prevención del bullying y ciberbullying, educación sexual responsable y primeros auxilios.",
      topics: ["Bullying", "Sexualidad", "Primeros Auxilios"],
      date: "Febrero",
      icon: Heart,
      color: "from-red-500 to-red-600"
    },
    {
      id: 'bienestar',
      title: "EcoGorila en Navidad",
      subtitle: "Concurso de Pesebres con Material Reciclado",
      description: "Fomentar la creatividad, el trabajo en equipo y la conciencia ambiental en la comunidad educativa mediante la elaboración de pesebres con materiales reciclables, promoviendo el espíritu navideño y el compromiso con el cuidado del planeta.",
      date: "Diciembre",
      icon: Leaf,
      color: "from-green-500 to-green-600"
    },
    {
      id: 'bienestar',
      title: "Batalla ReciclaXtreme",
      subtitle: "Campaña de Reciclaje",
      description: "Fomentar la conciencia ambiental y la responsabilidad ecológica en la comunidad educativa, mediante una campaña de reciclaje que promueva la participación activa y competitiva de los cursos, incentivando el trabajo en equipo y la reducción de residuos dentro de la institución.",
      date: "Noviembre a Febrero",
      icon: Leaf,
      color: "from-emerald-500 to-emerald-600"
    },
    // Deporte
    {
      id: 'deporte',
      title: "Gincana Carnavalera",
      description: "Fortalecer la integración, el trabajo en equipo y la sana convivencia entre los estudiantes mediante la realización de una gincana con actividades recreativas y juegos que promuevan la alegría, la cooperación y el espíritu festivo dentro de la comunidad educativa.",
      date: "13 de Febrero",
      icon: Gamepad2,
      color: "from-green-500 to-green-600"
    },
    {
      id: 'deporte',
      title: "Más allá del Límite",
      subtitle: "Reconocimiento al Mérito Deportivo",
      description: "Reconocer y valorar el esfuerzo, la disciplina y el espíritu deportivo de los estudiantes que se destacan en distintas disciplinas, promoviendo la participación activa, la sana competencia y el fortalecimiento de los valores que fomenta el deporte dentro de la comunidad educativa.",
      date: "Durante el año lectivo",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 'deporte',
      title: "La Gran Batalla",
      subtitle: "Encuentros Deportivos entre Estudiantes vs Profesores",
      description: "Fomentar el compañerismo, la unión y el espíritu deportivo en la comunidad educativa mediante el apoyo activo de los estudiantes a los equipos finalistas y el reconocimiento a los ganadores del torneo, fortaleciendo los valores de respeto, esfuerzo y trabajo en equipo.",
      date: "Abril",
      icon: Users,
      color: "from-red-500 to-red-600"
    },
    {
      id: 'deporte',
      title: "Apoyo en Encuentros Deportivos",
      subtitle: "Festival Deportivo",
      description: "Apoyo de los estudiantes en los encuentros deportivos de los equipos finalistas y así vivir un verdadero Festival Deportivo. Reconocimiento a los mejores equipos de cada torneo.",
      date: "Enero",
      icon: Trophy,
      color: "from-blue-500 to-blue-600"
    },
    // Infraestructura
    {
      id: 'infraestructura',
      title: "Dotación de Sillas e Instrumentos para la Banda de Gala",
      description: "Fortalecer el desarrollo artístico y cultural de la institución mediante la dotación de sillas e instrumentos musicales para la banda de gala, promoviendo el talento estudiantil, la participación en actos institucionales y el sentido de pertenencia hacia la comunidad educativa.",
      date: "Fin del año lectivo",
      icon: Music,
      color: "from-purple-500 to-purple-600"
    },
    // Fondos
    {
      id: 'fundraising',
      title: "Rifa ($1)",
      description: "Se tiene previsto realizar dos rifas con el propósito de recaudar fondos que permitan cumplir con todas las propuestas planteadas por el Consejo Estudiantil. Estas rifas estarán dirigidas a toda la comunidad educativa y contarán con premios atractivos, entre los que destacan dos mascotas y una membresía para el gimnasio.",
      date: "Durante el año",
      icon: Gift,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 'fundraising',
      title: "Bar Estudiantil",
      description: "Otra estrategia para la recaudación de fondos, será la realización de un bar estudiantil que funcionará dos veces al mes, en el cual se ofrecerán diversos snacks y refrigerios a precios accesibles. Esta actividad busca no solo generar ingresos para apoyar las propuestas y proyectos del Consejo Estudiantil, sino también promover la convivencia y el sentido de comunidad entre los estudiantes.",
      date: "Dos veces al mes",
      icon: Coffee,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 'fundraising',
      title: "Función de Cine",
      description: "Se llevará a cabo una función de cine como parte de las actividades destinadas a la recaudación de fondos. Esta iniciativa busca ofrecer un espacio de recreación y sana convivencia entre los estudiantes, quienes podrán disfrutar de una película seleccionada especialmente para el evento. Además, durante la función se les brindará un pequeño snack como cortesía.",
      date: "Durante el año",
      icon: Film,
      color: "from-indigo-500 to-indigo-600"
    },
    // Especiales
    {
      id: 'especiales',
      title: "Vístete con Flow",
      description: "Se llevará a cabo una vez al mes, donde los estudiantes tendrán la oportunidad de asistir a clases con su ropa preferida, respetando las normas de presentación y el respeto institucional. A cambio se solicitará una colaboración económica simbólica, cuyos fondos estarán destinados a proyectos y actividades que fortalezcan la participación estudiantil y el bienestar de toda la comunidad educativa.",
      date: "Una vez al mes",
      icon: Sparkles,
      color: "from-rose-500 to-rose-600"
    },
    {
      id: 'especiales',
      title: "Torneo FIFA",
      description: "Torneo FIFA donde los estudiantes podrán inscribirse y competir en consolas PlayStation, demostrando sus habilidades y pasión por el fútbol virtual. La actividad busca recaudar fondos para apoyar diversas propuestas y proyectos del Consejo Estudiantil, mientras se promueve la competencia sana, la camaradería y la diversión entre los participantes. Los ganadores recibirán reconocimientos especiales.",
      date: "Durante el año",
      icon: Gamepad2,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'especiales',
      title: "Energía Holandesa",
      description: "Fomentar la convivencia, la motivación y el bienestar integral de los estudiantes mediante la realización mensual de la actividad \"Energía Holandesa\", promoviendo el movimiento, la alegría y la participación activa para iniciar la jornada escolar con entusiasmo y actitud positiva.",
      date: "Noviembre a Junio",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 'especiales',
      title: "Gorilovers Pet Show",
      subtitle: "Concurso de Mascotas",
      description: "Concurso de mascotas donde los estudiantes podrán mostrar y presentar a sus mascotas, promoviendo el cuidado animal y la responsabilidad. Esta actividad fomenta valores como el amor, la compasión y el respeto hacia los animales.",
      date: "Durante el año",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
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

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nuestras Actividades
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
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-orange-500 rounded-3xl p-8 text-white text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Nuestro Plan Integral
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">18</div>
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
          transition={{ duration: 0.8, delay: 0.8 }}
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
