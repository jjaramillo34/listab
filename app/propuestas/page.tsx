'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  BookOpen, 
  Heart, 
  Gamepad2, 
  Music, 
  Trophy, 
  Users, 
  Leaf, 
  Star,
  Calendar,
  Target,
  Sparkles,
  Zap,
  Award,
  MessageCircle,
  Lightbulb,
  Shield,
  Camera,
  Mic,
  Coffee,
  Film,
  Gift,
  DollarSign,
  ShoppingCart,
  Ticket
} from 'lucide-react'
import Link from 'next/link'
import AnimatedMascot from '../../components/AnimatedMascot'
import FloatingElements from '../../components/FloatingElements'
import SectionHeader from '../../components/SectionHeader'

interface Activity {
  title: string
  description: string
  date: string
  responsible: string[]
  icon: any
  color: string
  subtitle?: string
  topics?: string[]
}

export default function PropuestasPage() {
  const [activeTab, setActiveTab] = useState('educacion')

  const categories = [
    { id: 'educacion', name: 'Educación y Cultura', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { id: 'bienestar', name: 'Bienestar Estudiantil', icon: Heart, color: 'from-pink-500 to-pink-600' },
    { id: 'deporte', name: 'Deporte y Recreación', icon: Trophy, color: 'from-green-500 to-green-600' },
    { id: 'infraestructura', name: 'Infraestructura', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { id: 'fundraising', name: 'Recaudación de Fondos', icon: DollarSign, color: 'from-orange-500 to-orange-600' },
    { id: 'especiales', name: 'Actividades Especiales', icon: Sparkles, color: 'from-yellow-500 to-yellow-600' }
  ]

  const educacionActivities: Activity[] = [
    {
      title: "Mentes Brillantes",
      subtitle: "Olimpiadas del Conocimiento",
      description: "Fomentar el desarrollo intelectual, el trabajo en equipo y la sana competencia entre los estudiantes, promoviendo el interés por el aprendizaje y la participación activa en actividades académicas.",
      date: "Marzo",
      responsible: ["Docentes de las distintas áreas", "Estudiantes"],
      icon: Lightbulb,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Reconocimiento al Cuadro de Honor",
      description: "Reconocer y valorar el esfuerzo, la dedicación y el rendimiento académico de los estudiantes que han obtenido los mejores puntajes, promoviendo la motivación, la excelencia y el compromiso con el aprendizaje.",
      date: "Al finalizar el primer y segundo trimestre",
      responsible: ["Consejo Estudiantil", "Secretaría"],
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "InnovaFest",
      subtitle: "Feria de Emprendimiento",
      description: "Promover el espíritu emprendedor y la creatividad de los estudiantes mediante la exposición y venta de productos elaborados por ellos mismos, fomentando el desarrollo de habilidades prácticas, la innovación y el trabajo colaborativo.",
      date: "Enero",
      responsible: ["Consejo Estudiantil", "Estudiantes", "Padres de familia de los estudiantes que participan"],
      icon: Lightbulb,
      color: "from-green-500 to-green-600"
    }
  ]

  const bienestarActivities: Activity[] = [
    {
      title: "Stop and Think",
      description: "Promover el bienestar integral de la comunidad estudiantil mediante charlas formativas que fortalezcan el respeto, la empatía y la responsabilidad, brindando información y herramientas prácticas sobre prevención del bullying y ciberbullying, educación sexual responsable y primeros auxilios.",
      topics: ["Bullying", "Sexualidad", "Primeros Auxilios"],
      date: "Febrero",
      responsible: ["Consejo Estudiantil", "Dra. Giannina Arroba", "Sra. Cristina Bustos"],
      icon: Shield,
      color: "from-red-500 to-red-600"
    },
    {
      title: "EcoGorila en Navidad",
      subtitle: "Concurso de Pesebres con Material Reciclado",
      description: "Fomentar la creatividad, el trabajo en equipo y la conciencia ambiental en la comunidad educativa mediante la elaboración de pesebres con materiales reciclables, promoviendo el espíritu navideño y el compromiso con el cuidado del planeta.",
      date: "Diciembre",
      responsible: ["Consejo estudiantil", "Maestros", "Estudiantes"],
      icon: Leaf,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Batalla ReciclaXtreme",
      subtitle: "Campaña de Reciclaje",
      description: "Fomentar la conciencia ambiental y la responsabilidad ecológica en la comunidad educativa, mediante una campaña de reciclaje que promueva la participación activa y competitiva de los cursos, incentivando el trabajo en equipo y la reducción de residuos dentro de la institución.",
      date: "Noviembre a Febrero",
      responsible: ["Consejo Estudiantil", "Maestros tutores", "Estudiantes"],
      icon: Leaf,
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  const deporteActivities: Activity[] = [
    {
      title: "Gincana Carnavalera",
      description: "Fortalecer la integración, el trabajo en equipo y la sana convivencia entre los estudiantes mediante la realización de una gincana con actividades recreativas y juegos que promuevan la alegría, la cooperación y el espíritu festivo dentro de la comunidad educativa.",
      date: "13 de Febrero",
      responsible: ["Maestro Tutores", "Consejo estudiantil", "Padres del consejo"],
      icon: Gamepad2,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Más allá del Límite",
      subtitle: "Reconocimiento al Mérito Deportivo",
      description: "Reconocer y valorar el esfuerzo, la disciplina y el espíritu deportivo de los estudiantes que se destacan en distintas disciplinas, promoviendo la participación activa, la sana competencia y el fortalecimiento de los valores que fomenta el deporte dentro de la comunidad educativa.",
      date: "Durante el año lectivo",
      responsible: ["Consejo estudiantil"],
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "La Gran Batalla",
      subtitle: "Encuentros Deportivos entre Estudiantes vs Profesores",
      description: "Fomentar el compañerismo, la unión y el espíritu deportivo en la comunidad educativa mediante el apoyo activo de los estudiantes a los equipos finalistas y el reconocimiento a los ganadores del torneo, fortaleciendo los valores de respeto, esfuerzo y trabajo en equipo.",
      date: "Abril",
      responsible: ["Consejo estudiantil", "Maestros de educación Física", "Maestros", "Estudiantes"],
      icon: Users,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Apoyo en Encuentros Deportivos",
      subtitle: "Festival Deportivo",
      description: "Apoyo de los estudiantes en los encuentros deportivos de los equipos finalistas y así vivir un verdadero Festival Deportivo. Reconocimiento a los mejores equipos de cada torneo.",
      date: "Enero",
      responsible: ["Consejo estudiantil", "Maestros de educación física", "Maestros tutores", "Estudiantes"],
      icon: Trophy,
      color: "from-blue-500 to-blue-600"
    }
  ]

  const infraestructuraActivities: Activity[] = [
    {
      title: "Dotación de Sillas e Instrumentos para la Banda de Gala",
      description: "Fortalecer el desarrollo artístico y cultural de la institución mediante la dotación de sillas e instrumentos musicales para la banda de gala, promoviendo el talento estudiantil, la participación en actos institucionales y el sentido de pertenencia hacia la comunidad educativa.",
      date: "Fin del año lectivo",
      responsible: ["Consejo Estudiantil"],
      icon: Music,
      color: "from-purple-500 to-purple-600"
    }
  ]

  const fundraisingActivities: Activity[] = [
    {
      title: "Rifa ($1)",
      description: "Se tiene previsto realizar dos rifas con el propósito de recaudar fondos que permitan cumplir con todas las propuestas planteadas por el Consejo Estudiantil. Estas rifas estarán dirigidas a toda la comunidad educativa y contarán con premios atractivos, entre los que destacan dos mascotas y una membresía para el gimnasio (los premios serán dotados por parte de nuestros auspiciantes) como incentivos principales.",
      date: "Durante el año",
      responsible: ["Consejo Estudiantil"],
      icon: Gift,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Bar Estudiantil",
      description: "Otra estrategia para la recaudación de fondos, será la realización de un bar estudiantil que funcionará dos veces al mes, en el cual se ofrecerán diversos snacks y refrigerios a precios accesibles. Esta actividad busca no solo generar ingresos para apoyar las propuestas y proyectos del Consejo Estudiantil, sino también promover la convivencia y el sentido de comunidad entre los estudiantes.",
      date: "Dos veces al mes",
      responsible: ["Consejo Estudiantil"],
      icon: Coffee,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Función de Cine",
      description: "Se llevará a cabo una función de cine como parte de las actividades destinadas a la recaudación de fondos. Esta iniciativa busca ofrecer un espacio de recreación y sana convivencia entre los estudiantes, quienes podrán disfrutar de una película seleccionada especialmente para el evento. Además, durante la función se les brindará un pequeño snack como cortesía.",
      date: "Durante el año",
      responsible: ["Consejo Estudiantil"],
      icon: Film,
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const especialesActivities: Activity[] = [
    {
      title: "Vístete con Flow",
      description: "Se llevará a cabo una vez al mes, donde los estudiantes tendrán la oportunidad de asistir a clases con su ropa preferida, respetando las normas de presentación y el respeto institucional. A cambio se solicitará una colaboración económica simbólica, cuyos fondos estarán destinados a proyectos y actividades que fortalezcan la participación estudiantil y el bienestar de toda la comunidad educativa.",
      date: "Una vez al mes",
      responsible: ["Consejo Estudiantil"],
      icon: Sparkles,
      color: "from-rose-500 to-rose-600"
    },
    {
      title: "Torneo FIFA",
      description: "Torneo FIFA donde los estudiantes podrán inscribirse y competir en consolas PlayStation, demostrando sus habilidades y pasión por el fútbol virtual. La actividad busca recaudar fondos para apoyar diversas propuestas y proyectos del Consejo Estudiantil, mientras se promueve la competencia sana, la camaradería y la diversión entre los participantes. Los ganadores recibirán reconocimientos especiales.",
      date: "Durante el año",
      responsible: ["Consejo Estudiantil"],
      icon: Gamepad2,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Energía Holandesa",
      description: "Fomentar la convivencia, la motivación y el bienestar integral de los estudiantes mediante la realización mensual de la actividad \"Energía Holandesa\", promoviendo el movimiento, la alegría y la participación activa para iniciar la jornada escolar con entusiasmo y actitud positiva.",
      date: "Noviembre a Junio",
      responsible: ["Consejo Estudiantil", "Maestros de Educación Física"],
      icon: Zap,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Gorilovers Pet Show",
      subtitle: "Concurso de Mascotas",
      description: "Concurso de mascotas donde los estudiantes podrán mostrar y presentar a sus mascotas, promoviendo el cuidado animal y la responsabilidad. Esta actividad fomenta valores como el amor, la compasión y el respeto hacia los animales.",
      date: "Durante el año",
      responsible: ["Consejo Estudiantil"],
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    }
  ]

  const getCurrentActivities = () => {
    switch (activeTab) {
      case 'educacion': return educacionActivities
      case 'bienestar': return bienestarActivities
      case 'deporte': return deporteActivities
      case 'infraestructura': return infraestructuraActivities
      case 'fundraising': return fundraisingActivities
      case 'especiales': return especialesActivities
      default: return educacionActivities
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
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
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Target className="w-12 h-12" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nuestras Propuestas
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Un plan integral para mejorar la vida estudiantil en el Centro Educativo Ecuatoriano Holandés
            </p>
            
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al Inicio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Categories Tabs */}
      <section className="py-8 bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentActivities().map((activity, index) => {
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {activity.title}
                    </h3>
                    {activity.subtitle && (
                      <p className="text-primary-600 font-semibold mb-3">
                        {activity.subtitle}
                      </p>
                    )}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    
                    {/* Topics */}
                    {activity.topics && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Charlas formativas sobre:</p>
                        <div className="flex flex-wrap gap-2">
                          {activity.topics.map((topic, idx) => (
                            <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">{activity.date}</span>
                    </div>
                    
                    {/* Responsible */}
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">Responsables:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {activity.responsible.map((person, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-orange-500" />
                              {person}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Hagamos Estas Propuestas Realidad!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Con tu voto, juntos podemos implementar todas estas actividades que beneficiarán a toda la comunidad estudiantil
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Vota por Lista B
                </motion.button>
              </Link>
              
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Conoce Nuestro Equipo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
