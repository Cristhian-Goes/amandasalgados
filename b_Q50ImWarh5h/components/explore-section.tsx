"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, RotateCcw, ZoomIn, Move, X, ChefHat, Building2, Store, MapPin } from "lucide-react"

const locations = [
  {
    id: "cozinha",
    name: "Cozinha",
    icon: ChefHat,
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE9Jdsax-1jH54qeJRMCQ0Qln_AoRgF9KELtcrO3riwDYKhSxztIXO51puOVarNkUAqf3zWzOrM3OFGUkJ9e42lkSsPDk0lCMWVGVSiNS4u1X7HXzqSG1XzHhpyyf_Lnp-S5Z9Z1j3z63c=w600-h400-n-k-no-nu-pi0-ya80-ro0-fo100",
  },
  {
    id: "estabelecimento",
    name: "Estabelecimento",
    icon: Building2,
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEA7Nw0j6z-hhddRelwfQawKmJql-4tKaMEnKBcdEZ0q4wAH-wUq3KFz_SZsu4iNAZvjyJeGndzloqFZk9Gv7LJWsSSxKvpcHfBA8IvcH3m8xKNTFFiJ5A4vu9U5QeUW_xMyqyDsjFqpNf_=w600-h400-n-k-no-nu-pi0-ya20-ro0-fo100",
  },
  {
    id: "fachada",
    name: "Parte de Fora",
    icon: Store,
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF_odQhGlwfUu3EJOeQGWVrbWyeuaHBNf4lTWyuHcojfehElhM1IMBShUI5G9frXlOybF9TIu6kifS9aCL4ULkhBthwaqEDTUdErzhs-4XjkOz5cLIxLEg0fOZld9-KLIaaU1TJP4jKJmI=w600-h400-n-k-no-nu-pi-20-ya320-ro0-fo100",
  },
  {
    id: "lateral",
    name: "Lateral",
    icon: MapPin,
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFD461q-y4anoirpOMZv-hGW6SKZuV4sMcINxglL6B1OlbB-sAUlC2O8Rq-OnddRZohCxjlZ1C6c9nCffJ22iGM0yGfjVDbLITPwfVAO2A8OKAbk30r3B5fyPaobzUhgDARbhsb-ptMVqaB=w600-h400-n-k-no-nu-pi0-ya280-ro0-fo100",
  },
]

export function ExploreSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [isExploring, setIsExploring] = useState(false)

  const currentLocation = locations.find(loc => loc.id === selectedLocation)

  return (
    <section id="conheca" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Visita Virtual
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3 sm:mb-4 text-balance">
            Conheça Nosso Estabelecimento
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base text-pretty">
            Explore nosso espaço em uma experiência interativa 360 graus. 
            Arraste para os lados e dê zoom para conhecer cada detalhe.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
          {locations.map((location) => {
            const Icon = location.icon
            return (
              <button
                key={location.id}
                onClick={() => {
                  setSelectedLocation(location.id)
                  setIsExploring(false)
                }}
                className={`group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedLocation === location.id
                    ? "border-primary shadow-lg scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-white font-medium text-xs sm:text-sm">{location.name}</span>
                </div>
                {selectedLocation === location.id && (
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            )
          })}
        </div>

        {/* 360 Viewer Container */}
        {selectedLocation && (
          <div className="max-w-5xl mx-auto">
            <div 
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-border bg-card"
              style={{ aspectRatio: "16/9" }}
            >
              {!isExploring ? (
                /* Preview State */
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Preview Image */}
                  <div className="absolute inset-0">
                    <img
                      src={currentLocation?.image}
                      alt={`Prévia de ${currentLocation?.name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                  </div>

                  {/* CTA Content */}
                  <div className="relative z-10 text-center px-4">
                    {/* Animated Icon */}
                    <div className="mb-4 sm:mb-6 relative">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto backdrop-blur-sm">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 flex items-center justify-center">
                          <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-spin" style={{ animationDuration: "3s" }} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {currentLocation?.name}
                    </h3>
                    <p className="text-white/80 mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
                      Clique para explorar em 360 graus
                    </p>

                    <Button 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 h-10 sm:h-auto"
                      onClick={() => setIsExploring(true)}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Explorar Ambiente
                    </Button>

                    {/* Feature hints */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-white/70">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Move className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Arraste</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Zoom</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>360</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Google Street View Embed */
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1710000000000!6m8!1m7!1sCAoSLEFGMVFpcE9YUHpYMnZGT2xYbXBfWmtfRVVQVDVVUHR0MHpQVjBILWxLTXFz!2m2!1d-22.7469167!2d-50.3868918!3f0!4f0!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  
                  {/* Close Button */}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-card/90 backdrop-blur-sm hover:bg-card"
                    onClick={() => setIsExploring(false)}
                  >
                    <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                    Fechar
                  </Button>

                  {/* Instructions overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-center">
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground flex items-center gap-3 sm:gap-4">
                      <span className="flex items-center gap-1">
                        <Move className="w-3 h-3 sm:w-4 sm:h-4" /> Arraste para explorar
                      </span>
                      <span className="flex items-center gap-1 hidden sm:flex">
                        <ZoomIn className="w-4 h-4" /> Use scroll para zoom
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Initial CTA if no location selected */}
        {!selectedLocation && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">Selecione uma das imagens acima para explorar</p>
            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Move className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Arraste</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Zoom</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>360</span>
              </div>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Venha nos visitar pessoalmente! Estamos na R. Alberto Scudeller, 205
          </p>
        </div>
      </div>
    </section>
  )
}
