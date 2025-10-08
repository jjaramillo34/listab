import Link from 'next/link'
import { Home, Users } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Miembro no encontrado
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar a este miembro del equipo Lista B.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Volver al Inicio
            </button>
          </Link>
          <Link href="/#team">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Ver Equipo
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
