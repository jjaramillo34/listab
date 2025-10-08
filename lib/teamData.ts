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
    id: 'daniel',
    name: 'Daniel Córdova',
    position: 'Presidente',
    animation: 'dance',
    showSparkles: true,
    gorillaName: 'Gorilín',
    photo: '/images/team/daniel.jpeg',
    photos: [
      '/images/team/daniel1.jpeg',
      '/images/team/daniel2.jpeg',
      '/images/team/daniel3.jpeg',
      '/images/team/daniel4.jpeg',
      '/images/team/daniel5.jpeg',
    ],
    year: '2025',
    age: 17,
    favoriteQuote: 'Liderazgo significa servir a los demás y trabajar juntos por un objetivo común.',
    bio: 'Como presidente de Lista B, mi compromiso es escuchar a todos los estudiantes y trabajar incansablemente para hacer de nuestro colegio un lugar mejor. Creo en el poder del trabajo en equipo y la participación activa de cada estudiante.',
    hobbies: [
      { name: 'painting', description: 'Me encanta expresar mi creatividad a través de la pintura y el arte digital.' },
      { name: 'music', description: 'Toco guitarra y me gusta componer canciones en mi tiempo libre.' },
      { name: 'sports', description: 'Practico fútbol y me gusta mantenerme activo con mis amigos.' }
    ],
    instagram: '@daniel.cordova',
    email: 'daniel@listab.com'
  },
  {
    id: 'ian',
    name: 'Ian Vilaña',
    position: 'Vice Presidente',
    animation: 'bounce',
    showSparkles: false,
    gorillaName: 'Gorilón',
    photo: '/images/team/ian.jpeg',
    photos: [
      '/images/team/ian1.jpeg',
      '/images/team/ian2.jpeg',
      '/images/team/ian3.jpeg',
      '/images/team/ian4.jpeg',
      '/images/team/ian5.jpeg',
    ],
    year: '2025',
    age: 16,
    favoriteQuote: 'La innovación y la tecnología pueden transformar nuestra experiencia educativa.',
    bio: 'Como vicepresidente, mi objetivo es traer innovación y nuevas ideas al colegio. Me apasiona la tecnología y cómo podemos usarla para mejorar nuestra experiencia de aprendizaje.',
    hobbies: [
      { name: 'gaming', description: 'Diseño videojuegos y me interesa la programación creativa.' },
      { name: 'reading', description: 'Leo sobre ciencia y tecnología para estar siempre actualizado.' },
      { name: 'photography', description: 'Capturo momentos especiales y me gusta la fotografía artística.' }
    ],
    instagram: '@ian.vilana',
    email: 'ian@listab.com'
  },
  {
    id: 'sofy',
    name: 'Sofy Jaramillo',
    position: 'Tesorera',
    animation: 'pulse',
    showSparkles: true,
    gorillaName: 'Gorilita',
    photo: '/images/team/sofy.jpeg',
    photos: [
      '/images/team/sofy1.jpeg',
      '/images/team/sofy2.jpeg',
      '/images/team/sofy3.jpeg',
      '/images/team/sofy4.jpeg',
      '/images/team/sofy5.jpeg',
    ],
    year: '2025',
    age: 13,
    favoriteQuote: 'La organización y el trabajo en equipo son la base del éxito en cualquier proyecto.',
    bio: 'Sofy es una joven creativa y sociable, apasionada por la pintura, la música y todo lo relacionado con el arte. Su alegría y simpatía contagian a quienes la rodean, siempre encontrando algo divertido en cada momento. Como tesorera, Sofy se compromete a gestionar los recursos con transparencia y responsabilidad, asegurando que cada centavo beneficie a los estudiantes. Su amor y dedicación por el colegio la inspiran a buscar nuevas ideas y mantener siempre presentes la honestidad y la organización.',
    hobbies: [
      { name: 'drawing', description: 'Me encanta dibujar y pintar.' },
      { name: 'music', description: 'Me encanta la música y me gusta tocar la guitarra.' },
      { name: 'travel', description: 'Me encanta viajar y conocer nuevos lugares.' }
    ],
    instagram: '@sofy.jaramillo',
    email: 'sofy@listab.com'
  },
  {
    id: 'valentina',
    name: 'Valentina Cáceres',
    position: 'Secretaria',
    animation: 'float',
    showSparkles: true,
    gorillaName: 'Gorilita',
    photo: '/images/team/valentina.jpeg',
    photos: [
      '/images/team/valentina1.jpeg',
      '/images/team/valentina2.jpeg',
      '/images/team/valentina3.jpeg',
      '/images/team/valentina4.jpeg',
      '/images/team/valentina5.jpeg',
    ],
    year: '2025',
    age: 11,
    favoriteQuote: 'La comunicación efectiva es clave para conectar con todos los estudiantes.',
    bio: 'Valentina tiene 11 años y su energía positiva ilumina cada espacio. Alegre, amable y sumamente perseverante, nunca se rinde hasta alcanzar sus metas. Su pasión por aprender la ha llevado a practicar karate por cuatro años, logrando medallas en diferentes categorías gracias a su disciplina y tenacidad. Valentina también explora el mundo artístico por medio de la pintura y el canto, participando en eventos escolares donde demuestra su creatividad y entusiasmo. Actualmente, brilla con su grupo de baile en diversas competencias, disfrutando la música y el ritmo cada día. Para Vale, cada momento es una oportunidad para crecer y contagiar su sonrisa a los demás, viviendo la vida como un baile lleno de color y alegría.',
    hobbies: [
      { name: 'reading', description: 'Escribo historias cortas y me gusta la literatura juvenil.' },
      { name: 'painting', description: 'Pinto acuarelas y me inspiro en la naturaleza para mis obras.' },
      { name: 'sports', description: 'Practico natación y me gusta el atletismo.' }
    ],
    instagram: '@vale.caceres',
    email: 'valentina@listab.com'
  },
  {
    id: 'majo',
    name: 'Majo Guevara',
    position: 'Vocal',
    animation: 'wiggle',
    showSparkles: false,
    gorillaName: 'Gorilita',
    photo: '/images/team/majo.jpeg',
    photos: [
      '/images/team/majo1.jpeg',
      '/images/team/majo2.jpeg',
      '/images/team/majo3.jpeg',
      '/images/team/majo4.jpeg',
      '/images/team/majo5.jpeg',
    ],
    year: '2025',
    age: 11,
    favoriteQuote: 'Cada voz cuenta y cada idea puede hacer la diferencia en nuestro colegio.',
    bio: 'Como vocal, represento las ideas y preocupaciones de todos los estudiantes. Mi compromiso es asegurar que cada perspectiva sea considerada en nuestras decisiones.',
    hobbies: [
      { name: 'photography', description: 'Me especializo en fotografía de eventos y retratos.' },
      { name: 'gaming', description: 'Juego videojuegos estratégicos y me gusta el diseño de niveles.' },
      { name: 'cooking', description: 'Hago postres creativos y me gusta la repostería.' }
    ],
    instagram: '@majo.guevara',
    email: 'majo@listab.com'
  },
  {
    id: 'giuliana',
    name: 'Giuliana Carrera',
    position: 'Vocal',
    animation: 'dance',
    showSparkles: false,
    gorillaName: 'Gorilíta',
    photo: '/images/team/giuliana.jpeg',
    photos: [
      '/images/team/giuliana1.jpeg',
      '/images/team/giuliana2.jpeg',
      '/images/team/giuliana3.jpeg',
      '/images/team/giuliana4.jpeg',
      '/images/team/giuliana5.jpeg',
    ],
    year: '2025',
    age: 16,
    favoriteQuote: 'La diversidad y la inclusión hacen que nuestro colegio sea un lugar especial.',
    bio: 'Como vocal, trabajo para promover la diversidad y la inclusión en todas nuestras actividades. Cada estudiante merece sentirse valorado y escuchado en nuestro colegio.',
    hobbies: [
      { name: 'music', description: 'Toco violín y me gusta la música clásica y contemporánea.' },
      { name: 'travel', description: 'Me encanta viajar y aprender sobre diferentes culturas.' },
      { name: 'sports', description: 'Practico danza y me gusta el ballet clásico.' }
    ],
    instagram: '@giu.carrera',
    email: 'giuliana@listab.com'
  },
]

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}

export function getAllTeamMemberIds(): string[] {
  return teamMembers.map(member => member.id)
}
