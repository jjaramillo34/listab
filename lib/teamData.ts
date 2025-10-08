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
    age: 16,
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
    bio: 'Ian es una persona que destaca por su excelente compañerismo y actitud colaboradora. Alegre y siempre dispuesto a ayudar, contribuye al buen ambiente en cada grupo al que pertenece. Su responsabilidad se refleja en todas sus acciones, demostrando compromiso tanto en sus tareas como en el apoyo a sus compañeros. Ian es un ejemplo de cómo la cooperación y la alegría pueden hacer la diferencia en el trabajo en equipo y en la convivencia diaria.',
    hobbies: [
      { name: 'gaming', description: 'Me encanta jugar videojuegos y me gusta la programación creativa.' },
      { name: 'reading', description: 'Leo sobre ciencia y tecnología para estar siempre actualizado.' },
      { name: 'painting', description: 'Me encanta pintar y hacer arte.' }
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
    age: 8,
    favoriteQuote: 'Cada voz cuenta y cada idea puede hacer la diferencia en nuestro colegio.',
    bio: 'Majo Guevara es una niña inteligente y creativa que ha demostrado ser una gran líder en nuestro colegio. Ella es muy responsable y siempre está dispuesta a ayudar a los demás. Su personalidad positiva y su habilidad para motivar a los demás la hacen un gran vocal.',
    hobbies: [
      { name: 'drawing', description: 'Me encanta dibujar y pintar.' },
      { name: 'dancing', description: 'Me encanta bailar y hacer coreografías.' },
      { name: 'painting', description: 'Me encanta pintar y hacer arte.' }
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
    age: 7
    ,
    favoriteQuote: 'La diversidad y la inclusión hacen que nuestro colegio sea un lugar especial.',
    bio: 'Giuliana Carrera es una niña alegre y afectuosa que contagia su energía positiva en cada actividad que realiza. Inteligente y siempre curiosa, disfruta participar activamente en deportes como el baloncesto, fútbol, gimnasia y carreras, demostrando dedicación y disciplina en cada entrenamiento. Además, Giuliana cultiva su lado artístico a través de la pintura y el baile, donde crea coreografías llenas de ritmo y creatividad. Su entusiasmo y entrega la convierten en una gran compañera, capaz de enfrentar desafíos con una sonrisa y de inspirar a quienes la rodean a crecer en armonía y alegría.',
    hobbies: [
      { name: 'drawing', description: 'Me encanta dibujar y pintar.' },
      { name: 'dancing', description: 'Me encanta bailar y hacer coreografías.' },
      { name: 'sports', description: 'Practico deportes y me gusta el baloncesto.' }
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
