"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOVRGBh-QvoyDhx3RV77Pk90Vx37LkihHsj-m2F=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Salgadinhos frescos",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipO2JfQmRo6fAChxwpX6VQNnGBla8HEu2WyuKHEO=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Variedade de salgados",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHK2RF3p63N3--cyhwAWi3Qp7fhnUolnJA2gBqmL6RXPJFhZ0XuqCbGK-H6RqWabMiSIl6FWF2zpChxvyLHpkj_JLGyOpulNHv7E4naNB5PJnntUIA8N2r5bSpAchZIL1YCH1WldJjNRll-=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Ambiente",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNowO2bpl0L1x79C46XJlBYvHMCTG9GR7xJWzDN=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Porções",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMv-npJo-hW95NZtggEUK31mpjruHICSmJQPVGq=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Frituras",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNQ3LSu6yDdVw6u2kjHlhw1LU_kg2RBWQwfhk1W=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Coxinhas",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipM6KfSFmmwe_ljM9oz7eYclB6op-43JwowAOWRM=s1360-w1360-h1020-rw",
    alt: "Amanda Salgados - Esfihas",
  },
  {
    src: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/709eb118-faba-4c73-975a-ba079b31d4c0/202508011557_7D4J_i.jpg",
    alt: "Amanda Salgados - Porção especial",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Images */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          handleInteraction()
          goToPrev()
        }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={() => {
          handleInteraction()
          goToNext()
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleInteraction()
              goToSlide(index)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            key={currentIndex}
            className="h-full bg-white animate-progress"
            style={{
              animation: "progress 5s linear forwards",
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
