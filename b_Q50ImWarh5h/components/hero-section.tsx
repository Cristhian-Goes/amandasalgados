"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/fachada.jpg')",
          transform: "translateZ(0)"
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="max-w-xl order-1 lg:order-1 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-6 leading-tight text-balance">
              Amanda{" "}
              <span className="text-primary">Salgados</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-8 text-pretty">
              Salgadinhos de festa com fabricação própria. 
              Trazendo mais sabor para seus dias desde 2024.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 sm:px-8 h-12 sm:h-auto w-full sm:w-auto"
                asChild
              >
                <a href="https://delivery.yooga.app/amandasalgados/tabs/home" target="_blank" rel="noopener noreferrer">
                  Fazer Pedido
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border text-foreground hover:bg-secondary text-base px-6 sm:px-8 h-12 sm:h-auto w-full sm:w-auto"
                asChild
              >
                <a href="#cardapio">
                  Ver Cardápio
                </a>
              </Button>
            </div>

            {/* Quick Info - Hidden on mobile, shown on larger screens */}
            <div className="mt-8 sm:mt-12 hidden sm:grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex flex-col items-center p-2 sm:p-4 rounded-xl bg-card border border-border shadow-sm">
                <span className="text-lg sm:text-2xl font-bold text-primary">Delivery</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 text-center">Entrega rápida</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-4 rounded-xl bg-card border border-border shadow-sm">
                <span className="text-lg sm:text-2xl font-bold text-primary">Festas</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 text-center">Fritamos no local</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-4 rounded-xl bg-card border border-border shadow-sm">
                <span className="text-lg sm:text-2xl font-bold text-primary">Frescos</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 text-center">Feitos na hora</span>
              </div>
            </div>
          </div>

          {/* Carousel - Right Side / Below on mobile */}
          <div className="relative flex items-center justify-center order-2 lg:order-2 mt-4 lg:mt-0">
            <div className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <HeroCarousel />
            </div>
          </div>

          {/* Quick Info - Mobile only, below carousel */}
          <div className="order-3 sm:hidden grid grid-cols-3 gap-2 mt-4">
            <div className="flex flex-col items-center p-3 rounded-xl bg-card border border-border shadow-sm">
              <span className="text-base font-bold text-primary">Delivery</span>
              <span className="text-[10px] text-muted-foreground mt-0.5 text-center">Entrega rápida</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-card border border-border shadow-sm">
              <span className="text-base font-bold text-primary">Festas</span>
              <span className="text-[10px] text-muted-foreground mt-0.5 text-center">Fritamos no local</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-card border border-border shadow-sm">
              <span className="text-base font-bold text-primary">Frescos</span>
              <span className="text-[10px] text-muted-foreground mt-0.5 text-center">Feitos na hora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
