"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const menuCategories = [
  {
    title: "Salgados Clássicos",
    badge: "Mais Pedidos",
    image: "https://lh3.googleusercontent.com/p/AF1QipO2JfQmRo6fAChxwpX6VQNnGBla8HEu2WyuKHEO=s1360-w1360-h1020-rw",
    items: [
      { name: "Coxinha de Frango" },
      { name: "Risoles Presunto e Queijo" },
      { name: "Enroladinho de Salsicha" },
      { name: "Bolinha de Queijo" },
      { name: "Quibe Recheado" },
    ],
  },
  {
    title: "Salgados Premium",
    badge: "Especiais",
    image: "/images/salgados.jpg",
    items: [
      { name: "Mini Pastel Carne" },
      { name: "Mini Pastel Frango" },
      { name: "Mini Pastel Queijo" },
      { name: "Mini Pastel Pizza" },
      { name: "Mini Pastel Brigadeiro" },
      { name: "Esfiha de Carne" },
      { name: "Esfiha de Frango" },
    ],
  },
  {
    title: "Congelados",
    badge: "Pacotes",
    image: "/images/congelados.jpg",
    items: [
      { name: "Pacote 500g" },
      { name: "Pacote 1kg" },
      { name: "Pacote 2kg" },
    ],
  },
  {
    title: "Porções",
    badge: "Novidade",
    image: "/images/porcoes.jpg",
    items: [
      { name: "Batata Frita" },
      { name: "Cebola Empanada" },
    ],
  },
  {
    title: "Doces",
    badge: "Delícias",
    image: "/images/doces.jpg",
    items: [
      { name: "Churros Doce de Leite" },
      { name: "Churros Chocolate" },
    ],
  },
]

const yoogaUrl = "https://delivery.yooga.app/amandasalgados/tabs/home"

export function MenuSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveIndex((prev) => (prev === 0 ? menuCategories.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveIndex((prev) => (prev === menuCategories.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveIndex(index)
  }

  return (
    <section id="cardapio" className="py-12 sm:py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-8 sm:mb-10">
          <img
            src="/logo.jpg"
            alt="Amanda Salgados"
            loading="lazy"
            decoding="async"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mx-auto mb-3 shadow-md"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            Cardápio
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Ingredientes frescos, fritos na hora
          </p>
        </div>

        {/* Mobile: Carrossel */}
        <div className="sm:hidden">
          <div className="relative">
            {/* Card atual */}
            <Card className="bg-background border-border overflow-hidden mx-2">
              <div className="h-40 overflow-hidden">
                <img 
                  src={menuCategories[activeIndex].image} 
                  alt={menuCategories[activeIndex].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {menuCategories[activeIndex].title}
                  </h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs px-2 py-0.5">
                    {menuCategories[activeIndex].badge}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {menuCategories[activeIndex].items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Controles de navegação */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={handlePrev}
                onTouchEnd={handlePrev}
                className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center active:bg-primary/20 active:scale-95 transition-all select-none cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                aria-label="Categoria anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicadores */}
              <div className="flex items-center gap-2">
                {menuCategories.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={handleDotClick(index)}
                    onTouchEnd={handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all select-none cursor-pointer ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30"
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    aria-label={`Ir para ${menuCategories[index].title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                onTouchEnd={handleNext}
                className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center active:bg-primary/20 active:scale-95 transition-all select-none cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                aria-label="Próxima categoria"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Info da navegação */}
            <p className="text-center text-xs text-muted-foreground mt-3">
              {activeIndex + 1} de {menuCategories.length} categorias
            </p>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {menuCategories.map((category, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden hover:border-primary/30 transition-colors">
              {/* Category Image */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-[10px] px-1.5 py-0">
                    {category.badge}
                  </Badge>
                </div>
                <ul className="space-y-1.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs text-muted-foreground">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs text-muted-foreground mb-4">
            Peça agora pelo Yooga:
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 text-base py-6 px-8"
            asChild
          >
            <a
              href={yoogaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Cardápio Completo
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
