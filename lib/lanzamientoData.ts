export interface LanzamientoActivity {
  id: string
  name: string
  description: string
  icon: any
  color: string
  category: 'entretenimiento' | 'comida' | 'actividades' | 'especiales'
}

export interface LanzamientoImage {
  id: string
  src: string
  alt: string
  category: string
  description?: string
  featured?: boolean
}

export interface LanzamientoVideo {
  id: string
  src: string
  title: string
  description: string
  duration?: string
}

export const lanzamientoActivities: LanzamientoActivity[] = [
  {
    id: 'zanqueros',
    name: 'Zanqueros',
    description: 'Diversión con zancos y personajes coloridos',
    icon: '🎭',
    color: 'from-purple-500 to-pink-500',
    category: 'entretenimiento'
  },
  {
    id: 'juegos',
    name: 'Juegos y Competencias',
    description: 'Juegos tradicionales y competencias divertidas',
    icon: '🎮',
    color: 'from-blue-500 to-cyan-500',
    category: 'actividades'
  },
  {
    id: 'premios',
    name: 'Premios y Sorpresas',
    description: 'Premios especiales para todos los participantes',
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500',
    category: 'especiales'
  },
  {
    id: 'caritas-pintadas',
    name: 'Caritas Pintadas',
    description: 'Arte facial para niños y niñas',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500',
    category: 'actividades'
  },
  {
    id: 'granizados',
    name: 'Granizados',
    description: 'Refrescantes granizados de diferentes sabores',
    icon: '🧊',
    color: 'from-cyan-500 to-blue-500',
    category: 'comida'
  },
  {
    id: 'algodon-azucar',
    name: 'Algodón de Azúcar',
    description: 'Dulce algodón de azúcar para todos',
    icon: '🍭',
    color: 'from-pink-400 to-purple-400',
    category: 'comida'
  },
  {
    id: 'gelatina',
    name: 'Gelatina',
    description: 'Deliciosa gelatina de colores',
    icon: '🍮',
    color: 'from-green-400 to-emerald-400',
    category: 'comida'
  },
  {
    id: 'golosinas',
    name: 'Golosinas',
    description: 'Variedad de dulces y golosinas',
    icon: '🍬',
    color: 'from-yellow-400 to-amber-400',
    category: 'comida'
  },
  {
    id: 'musica',
    name: 'Música y Baile',
    description: 'Música en vivo y sesión de baile',
    icon: '🎵',
    color: 'from-indigo-500 to-purple-500',
    category: 'entretenimiento'
  },
  {
    id: 'fotografia',
    name: 'Sesión de Fotos',
    description: 'Fotos especiales con la mascota y el equipo',
    icon: '📸',
    color: 'from-gray-500 to-slate-500',
    category: 'especiales'
  }
]

export const lanzamientoHighlights = [
  {
    title: '¡Más de 100 Fotos!',
    description: 'Capturamos cada momento especial del evento',
    icon: '📷',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: '4 Videos Especiales',
    description: 'Videos del evento completo y momentos destacados',
    icon: '🎬',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: '10+ Actividades',
    description: 'Zanqueros, juegos, premios, comida y mucho más',
    icon: '🎉',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: '¡Diversión Total!',
    description: 'Un día lleno de alegría y entretenimiento',
    icon: '😄',
    color: 'from-green-500 to-emerald-500'
  }
]

export const lanzamientoStats = {
  totalImages: 102,
  totalVideos: 4,
  totalActivities: 10,
  duration: '4+ horas',
  participants: 'Toda la comunidad escolar',
  date: '23 de Octubre, 2025'
}

// Función para generar datos de imágenes dinámicamente
export const generateLanzamientoImages = (): LanzamientoImage[] => {
  const images: LanzamientoImage[] = []
  const categories = ['zanqueros', 'juegos', 'premios', 'comida', 'actividades', 'especiales', 'equipo', 'mascota']
  
  // Generar imágenes con nombres simples (image001.jpeg, image002.jpeg, etc.)
  for (let i = 1; i <= 97; i++) {
    const category = categories[i % categories.length]
    const imageNumber = i.toString().padStart(3, '0')
    
    images.push({
      id: `lanzamiento-${i}`,
      src: `/images/lanzamiento/images/image${imageNumber}.webp`,
      alt: `Imagen ${i} del lanzamiento oficial - ${category}`,
      category,
      description: `Momento especial del lanzamiento oficial - ${category}`,
      featured: i <= 12 // Las primeras 12 son destacadas
    })
  }
  
  return images
}

// Función para generar datos de videos
export const generateLanzamientoVideos = (): LanzamientoVideo[] => {
  return [
    {
      id: 'video-1',
      src: '/images/lanzamiento/videos/WhatsApp Video 2025-10-23 at 11.32.31 AM.mp4',
      title: 'Inicio del Evento',
      description: 'Los primeros momentos del lanzamiento oficial',
      duration: '2:30'
    },
    {
      id: 'video-2',
      src: '/images/lanzamiento/videos/WhatsApp Video 2025-10-23 at 11.57.46 AM.mp4',
      title: 'Actividades y Diversión',
      description: 'Zanqueros, juegos y actividades del evento',
      duration: '1:45'
    },
    {
      id: 'video-3',
      src: '/images/lanzamiento/videos/WhatsApp Video 2025-10-23 at 12.00.14 PM.mp4',
      title: 'Momentos Especiales',
      description: 'Premios, caritas pintadas y sorpresas',
      duration: '3:15'
    },
    {
      id: 'video-4',
      src: '/images/lanzamiento/videos/WhatsApp Video 2025-10-23 at 2.09.49 PM.mp4',
      title: 'Cierre del Evento',
      description: 'Los últimos momentos y despedida del evento',
      duration: '2:00'
    }
  ]
}
