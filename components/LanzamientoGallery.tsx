'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Filter,
  Grid,
  List,
  Download,
  Share2,
  Heart,
  Eye
} from 'lucide-react'
import Image from 'next/image'
import { LanzamientoImage, LanzamientoVideo } from '../lib/lanzamientoData'

interface LanzamientoGalleryProps {
  images: LanzamientoImage[]
  videos: LanzamientoVideo[]
}

const LanzamientoGallery = ({ images, videos }: LanzamientoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<LanzamientoImage | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<LanzamientoVideo | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set())
  const videoRef = useRef<HTMLVideoElement>(null)

  const categories = ['all', 'zanqueros', 'juegos', 'premios', 'comida', 'actividades', 'especiales', 'equipo', 'mascota']
  
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  const featuredImages = images.filter(img => img.featured)

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }, [selectedVideo])

  const openLightbox = (image: LanzamientoImage, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedVideo(null)
    setIsPlaying(false)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  const toggleLike = (imageId: string) => {
    const newLikedImages = new Set(likedImages)
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId)
    } else {
      newLikedImages.add(imageId)
    }
    setLikedImages(newLikedImages)
  }

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="w-full">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category === 'all' ? 'Todas' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Featured Images Section */}
      {activeCategory === 'all' && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌟 Momentos Destacados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Main Gallery */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
          : 'space-y-4'
      }`}>
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`group cursor-pointer ${
              viewMode === 'list' ? 'flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg' : ''
            }`}
            onClick={() => openLightbox(image, index)}
          >
            {viewMode === 'grid' ? (
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(image.id)
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      likedImages.has(image.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white bg-opacity-80 text-gray-600 hover:bg-opacity-100'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 w-full">
                <div className="w-20 h-20 relative overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{image.alt}</h4>
                  <p className="text-sm text-gray-600">{image.description}</p>
                  <span className="inline-block px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full mt-1">
                    {image.category}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(image.id)
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    likedImages.has(image.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Videos Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          🎬 Videos del Evento
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-video relative bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  muted
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <Play className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{video.title}</h4>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.alt}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(selectedImage.id)
                      }}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                        likedImages.has(selectedImage.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedImages.has(selectedImage.id) ? 'fill-current' : ''}`} />
                      {likedImages.has(selectedImage.id) ? 'Me gusta' : 'Me gusta'}
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Compartir
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-colors">
                      <Download className="w-4 h-4" />
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Videos */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-lg"
                  controls
                  autoPlay
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                </video>
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                  <p className="text-sm opacity-90">{selectedVideo.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanzamientoGallery
