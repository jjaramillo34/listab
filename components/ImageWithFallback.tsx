'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  fallbackSrc?: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

const ImageWithFallback = ({
  src,
  fallbackSrc = '/images/campaign-banner.webp',
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        onError={handleError}
        priority={priority}
        sizes={sizes}
      />
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 400}
      height={height || 400}
      className={className}
      onError={handleError}
      priority={priority}
      sizes={sizes}
    />
  )
}

export default ImageWithFallback
