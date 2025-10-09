// Centralized team data
export interface TeamMember {
  id: string
  name: string
  position: string
  animation: string
  showSparkles: boolean
  gorillaName: string
  photo: string
  photos: string[]
  year: string
  age: number
  favoriteQuote: string
  hobbies: Array<{
    name: string
    description: string
  }>
  bio: string
  instagram?: string
  email?: string
}

export const teamMembers: TeamMember[] = [
  {
    "id": "daniel",
    "name": "Daniel Córdova",
    "position": "Presidente",
    "animation": "dance",
    "showSparkles": true,
    "gorillaName": "Gorilín",
    "photo": "/images/team/daniel.jpeg",
    "photos": [
      "/images/team/daniel1.jpeg",
      "/images/team/daniel2.jpeg",
      "/images/team/daniel3.jpeg",
      "/images/team/daniel4.jpeg",
      "/images/team/daniel5.jpeg"
    ],
    "year": "2025",
    "age": 16,
    "favoriteQuote": "El verdadero liderazgo se demuestra al servir y unir a las personas por un sueño común.",
    "bio": "Hola, mi nombre es Daniel Córdova, tengo 16 años y estudio en 3ro BGU. Más allá de mi enfoque académico, el deporte es esencial en mi vida; practico fútbol y voy al gimnasio, donde he aprendido la importancia de la disciplina, el trabajo en equipo y la perseverancia. Estos valores me han formado para ser un líder capaz de escuchar y valorar la opinión de cada estudiante, promoviendo la unión y el respeto en nuestra unidad educativa como una verdadera familia. Estoy convencido de que juntos podemos crecer y lograr todos nuestros objetivos, apoyándonos siempre unos a otros.",
    "hobbies": [
      { "name": "reading", "description": "Me gusta leer libros y aprender cosas nuevas." },
      { "name": "gaming", "description": "Me gusta jugar videojuegos y me gusta la programación creativa." },
      { "name": "sports", "description": "Mantenerme activo jugando fútbol y en el gimnasio me enseña la importancia del trabajo en equipo y la disciplina." }
    ],
    "instagram": "@daniel.cordova",
    "email": "daniel@listab.com"
  },
  {
    "id": "ian",
    "name": "Ian Vilaña",
    "position": "Vice Presidente",
    "animation": "bounce",
    "showSparkles": false,
    "gorillaName": "Gorilón",
    "photo": "/images/team/ian.jpeg",
    "photos": [
      "/images/team/ian1.jpeg",
      "/images/team/ian2.jpeg",
      "/images/team/ian3.jpeg",
      "/images/team/ian4.jpeg",
      "/images/team/ian5.jpeg"
    ],
    "year": "2025",
    "age": 16,
    "favoriteQuote": "La creatividad aplicada a la tecnología nos da el poder de transformar nuestro mundo.",
    "bio": "Ian tiene 15 años y es una persona que disfruta de la vida con entusiasmo. Su pasatiempo favorito es jugar fútbol, deporte en el que se divierte y aprende sobre trabajo en equipo y dedicación. Además, Ian es un apasionado de los videojuegos, que le permiten desarrollar su creatividad y habilidades estratégicas. La música también ocupa un lugar especial en su día a día, acompañando siempre sus mejores momentos y motivándolo a seguir creciendo con alegría y buena vibra.",
    "hobbies": [
      { "name": "sports", "description": "Me gusta futbol." },
      { "name": "gaming", "description": "Descubro mundos nuevos en los videojuegos, y la programación me desafía a crear mis propias aventuras." },
      { "name": "music", "description": "La música me inspira y me acompaña en todos los momentos importantes." }
    ],
    "instagram": "@ian.vilana",
    "email": "ian@listab.com"
  },
  {
    "id": "sofy",
    "name": "Sofy Jaramillo",
    "position": "Tesorera",
    "animation": "pulse",
    "showSparkles": true,
    "gorillaName": "Gorilita",
    "photo": "/images/team/sofy.jpeg",
    "photos": [
      "/images/team/sofy1.jpeg",
      "/images/team/sofy2.jpeg",
      "/images/team/sofy3.jpeg",
      "/images/team/sofy4.jpeg",
      "/images/team/sofy5.jpeg"
    ],
    "year": "2025",
    "age": 13,
    "favoriteQuote": "La honestidad y el trabajo en equipo abren caminos hacia grandes logros.",
    "bio": "Sofy es una joven entusiasta, creativa y carismática. Disfruta del arte y la música, y su energía positiva motiva a quienes la rodean. Como tesorera, se esfuerza por ser justa, responsable y transparente, buscando siempre que los recursos lleguen donde más los necesitan los estudiantes.",
    "hobbies": [
      { "name": "drawing", "description": "Dibujar y pintar es mi forma favorita de compartir mis emociones con los demás." },
      { "name": "music", "description": "La música me acompaña cada día; me gusta tocar la guitarra y descubrir melodías nuevas." },
      { "name": "travel", "description": "Siento curiosidad por diferentes culturas y disfruto explorar lugares nuevos." }
    ],
    "instagram": "@sofy.jaramillo",
    "email": "sofy@listab.com"
  },
  {
    "id": "valentina",
    "name": "Valentina Cáceres",
    "position": "Secretaria",
    "animation": "float",
    "showSparkles": true,
    "gorillaName": "Gorilita",
    "photo": "/images/team/valentina.jpeg",
    "photos": [
      "/images/team/valentina1.jpeg",
      "/images/team/valentina2.jpeg",
      "/images/team/valentina3.jpeg",
      "/images/team/valentina4.jpeg",
      "/images/team/valentina5.jpeg"
    ],
    "year": "2025",
    "age": 11,
    "favoriteQuote": "Cada palabra cuenta; la comunicación transforma y une a las personas.",
    "bio": "Valentina es perseverante, siempre busca aprender y brillar con creatividad. Sus logros en karate, arte y baile reflejan su disciplina y amor por nuevos retos. Participa activamente en competencias escolares y aporta alegría y color en cada proyecto del colegio, mostrando que cada experiencia es una oportunidad para crecer.",
    "hobbies": [
      { "name": "reading", "description": "Me apasiona escribir historias y disfrutar de la literatura juvenil." },
      { "name": "painting", "description": "La acuarela y la naturaleza son mi inspiración principal en arte." },
      { "name": "dancing", "description": "Me encanta bailar y hacer coreografías. Es algo que me gusta mucho y me hace feliz." }
    ],
    "instagram": "@vale.caceres",
    "email": "valentina@listab.com"
  },
  {
    "id": "majo",
    "name": "Majo Guevara",
    "position": "Vocal",
    "animation": "wiggle",
    "showSparkles": false,
    "gorillaName": "Gorilita",
    "photo": "/images/team/majo.jpeg",
    "photos": [
      "/images/team/majo1.jpeg",
      "/images/team/majo2.jpeg",
      "/images/team/majo3.jpeg",
      "/images/team/majo4.jpeg",
      "/images/team/majo5.jpeg"
    ],
    "year": "2025",
    "age": 8,
    "favoriteQuote": "Todas las ideas suman; cada voz puede crear un cambio positivo.",
    "bio": "Majo es inteligente, creativa y siempre dispuesta a colaborar. Su actitud positiva inspira a los demás y su responsabilidad la hace destacar como líder en el colegio. Le apasiona motivar y ayudar a sus compañeros, aportando siempre nuevas ideas.",
    "hobbies": [
      { "name": "drawing", "description": "Encuentro alegría dibujando y pintando todo lo que imagino." },
      { "name": "dancing", "description": "Bailar y crear coreografías es mi manera divertida de expresarme." },
      { "name": "painting", "description": "Pintar me permite compartir mi mundo interior con los demás." }
    ],
    "instagram": "@majo.guevara",
    "email": "majo@listab.com"
  },
  {
    "id": "giuliana",
    "name": "Giuliana Carrera",
    "position": "Vocal",
    "animation": "dance",
    "showSparkles": false,
    "gorillaName": "Gorilíta",
    "photo": "/images/team/giuliana.jpeg",
    "photos": [
      "/images/team/giuliana1.jpeg",
      "/images/team/giuliana2.jpeg",
      "/images/team/giuliana3.jpeg",
      "/images/team/giuliana4.jpeg",
      "/images/team/giuliana5.jpeg"
    ],
    "year": "2025",
    "age": 7,
    "favoriteQuote": "La diversidad y la inclusión enriquecen cada momento juntos.",
    "bio": "Giuliana es alegre, cariñosa y llena de vitalidad. Le encanta aprender y destaca por su dedicación en deportes como baloncesto, fútbol y gimnasia, además de crear coreografías y explorar el arte en cada pintura. Su creatividad y energía contagian a todos, demostrando que la disciplina y el entusiasmo abren puertas a la armonía y la amistad.",
    "hobbies": [
      { "name": "drawing", "description": "Dibujar y pintar me permite soñar y crear mundos nuevos." },
      { "name": "dancing", "description": "El baile y las coreografías son mi expresión favorita de alegría." },
      { "name": "sports", "description": "Practico varios deportes, especialmente el baloncesto y la gimnasia, que me enseñan a perseverar y divertirme." }
    ],
    "instagram": "@giu.carrera",
    "email": "giuliana@listab.com"
  }
]


export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}

export function getAllTeamMemberIds(): string[] {
  return teamMembers.map(member => member.id)
}
