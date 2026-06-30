"use client"

import { useState, useEffect, useRef } from "react"
import { Minus, Plus, Check, TriangleAlert as AlertTriangle, Package, Users, MessageCircle, Sparkles, X } from "lucide-react"

const combos = [
  { units: 400, price: 276 },
  { units: 500, price: 345 },
  { units: 600, price: 414 },
  { units: 700, price: 483 },
  { units: 900, price: 621 },
  { units: 1000, price: 690 },
  { units: 1200, price: 828 },
  { units: 1500, price: 1035 },
  { units: 2000, price: 1380 },
]

function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const previousValue = useRef(0)

  useEffect(() => {
    const start = previousValue.current
    const end = value
    const duration = 500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * easeOut)
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        previousValue.current = end
      }
    }

    requestAnimationFrame(animate)
  }, [value])

  return <span className={className}>{displayValue.toLocaleString("pt-BR")}</span>
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

// Modal Component
function ServiceModal({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: { 
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode 
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card rounded-2xl border border-border shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
        <h3 className="text-xl font-bold mb-4 pr-8">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export function PartyCalculator() {
  const [adults, setAdults] = useState(10)
  const [children, setChildren] = useState(5)
  const [partyType, setPartyType] = useState<"normal" | "acompanhamentos">("normal")
  const [selectedCombo, setSelectedCombo] = useState<number | null>(null)
  const [frituraModalOpen, setFrituraModalOpen] = useState(false)
  const [garcomModalOpen, setGarcomModalOpen] = useState(false)

  // Cálculos
  const adultsMin = partyType === "normal" ? 12 : 10
  const adultsMax = partyType === "normal" ? 15 : 12
  const childrenMin = partyType === "normal" ? 8 : 6
  const childrenMax = partyType === "normal" ? 10 : 8

  const minSalgadinhos = adults * adultsMin + children * childrenMin
  const maxSalgadinhos = adults * adultsMax + children * childrenMax
  const avgSalgadinhos = Math.round((minSalgadinhos + maxSalgadinhos) / 2)

  // Encontrar combo ideal
  const idealCombo = combos.find((c) => c.units >= avgSalgadinhos) || combos[combos.length - 1]
  const activeCombo = selectedCombo !== null ? combos.find((c) => c.units === selectedCombo) || idealCombo : idealCombo

  // Extras
  const totalPeople = adults + children
  const potatoKg = Math.ceil((totalPeople * 0.125) * 2) / 2
  const potatoPrice = potatoKg * 21
  const churrosQty = Math.ceil(totalPeople * 4 / 100) * 100
  const churrosPrice = (churrosQty / 100) * 68.99
  const beveragesLiters = Math.ceil(totalPeople * 0.6)

  // Status do combo selecionado
  const getComboStatus = (units: number) => {
    if (units >= avgSalgadinhos && units <= maxSalgadinhos + 100) {
      return { status: "ideal", label: "Ideal", icon: Check, color: "text-green-600" }
    } else if (units < avgSalgadinhos) {
      return { status: "pouco", label: "Pouco", icon: AlertTriangle, color: "text-amber-500" }
    } else {
      return { status: "sobra", label: "Sobra", icon: Package, color: "text-blue-500" }
    }
  }

  const currentStatus = getComboStatus(activeCombo.units)

  // Handlers
  const handleAdultsChange = (value: number) => {
    setAdults(Math.max(0, value))
  }

  const handleChildrenChange = (value: number) => {
    setChildren(Math.max(0, value))
  }

  // Mensagem WhatsApp
  const whatsappMessage = `Olá! Calculei meu pedido para ${totalPeople} pessoas (${adults} adultos e ${children} crianças) e gostaria de fechar:

- Combo de ${activeCombo.units} salgadinhos (${formatCurrency(activeCombo.price)})
- ${potatoKg}kg de batata frita (${formatCurrency(potatoPrice)})
- ${churrosQty} churros (${formatCurrency(churrosPrice)})

Valor estimado: ${formatCurrency(activeCombo.price + potatoPrice + churrosPrice)}

Aguardo confirmação!`

  const whatsappUrl = `https://wa.me/5518997249634?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="calculadora" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <img
            src="/logo.jpg"
            alt="Amanda Salgados"
            loading="lazy"
            decoding="async"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto mb-3 sm:mb-4 shadow-lg"
          />
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Planeje sua festa
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-balance">
            Calculadora de Festa
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base text-pretty">
            Descubra a quantidade ideal de salgadinhos
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-border shadow-xl">
            
            {/* Inputs de Convidados */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Quantos convidados?</h3>
            </div>

            <div className="space-y-4 mb-6">
              {/* Adultos */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Adultos</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleAdultsChange(adults - 1)}
                    className="w-14 h-14 rounded-xl bg-muted border-2 border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary active:scale-95 transition-all touch-manipulation flex-shrink-0"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={adults}
                    onChange={(e) => handleAdultsChange(parseInt(e.target.value) || 0)}
                    className="flex-1 h-14 min-w-[80px] rounded-xl bg-muted border-2 border-border text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => handleAdultsChange(adults + 1)}
                    className="w-14 h-14 rounded-xl bg-muted border-2 border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary active:scale-95 transition-all touch-manipulation flex-shrink-0"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Crianças */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Crianças</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleChildrenChange(children - 1)}
                    className="w-14 h-14 rounded-xl bg-muted border-2 border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary active:scale-95 transition-all touch-manipulation flex-shrink-0"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={children}
                    onChange={(e) => handleChildrenChange(parseInt(e.target.value) || 0)}
                    className="flex-1 h-14 min-w-[80px] rounded-xl bg-muted border-2 border-border text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => handleChildrenChange(children + 1)}
                    className="w-14 h-14 rounded-xl bg-muted border-2 border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary active:scale-95 transition-all touch-manipulation flex-shrink-0"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tipo de Festa */}
            <div className="mb-8">
              <label className="block text-sm text-muted-foreground mb-2">Tipo de festa</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPartyType("normal")}
                  className={`py-3 px-4 rounded-xl border-2 transition-all font-medium text-sm touch-manipulation ${
                    partyType === "normal"
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-muted border-border hover:border-primary/50"
                  }`}
                >
                  Festa Normal
                </button>
                <button
                  type="button"
                  onClick={() => setPartyType("acompanhamentos")}
                  className={`py-3 px-4 rounded-xl border-2 transition-all font-medium text-sm touch-manipulation ${
                    partyType === "acompanhamentos"
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-muted border-border hover:border-primary/50"
                  }`}
                >
                  Com Extras
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {partyType === "normal"
                  ? "Salgadinhos como prato principal"
                  : "Salgadinhos + outros pratos"}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-6" />

            {/* Resultado */}
            <div className="text-center mb-6 p-5 sm:p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">Total recomendado</p>
              <div className="flex items-baseline justify-center gap-2">
                <AnimatedNumber
                  value={avgSalgadinhos}
                  className="text-4xl sm:text-5xl font-bold text-primary"
                />
                <span className="text-xl text-muted-foreground">un.</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Entre {minSalgadinhos.toLocaleString("pt-BR")} e {maxSalgadinhos.toLocaleString("pt-BR")} unidades
              </p>
            </div>

            {/* Combo Selecionado */}
            <div className="bg-muted/50 rounded-xl p-4 mb-5 border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Combo selecionado</span>
                <span className={`flex items-center gap-1.5 text-sm font-medium ${currentStatus.color}`}>
                  <currentStatus.icon className="w-4 h-4" />
                  {currentStatus.label}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4">
                <div>
                  <span className="text-2xl sm:text-4xl font-bold">{activeCombo.units.toLocaleString("pt-BR")}</span>
                  <span className="text-muted-foreground ml-1">unidades</span>
                </div>
                <span className="text-xl sm:text-3xl font-bold text-primary">
                  {formatCurrency(activeCombo.price)}
                </span>
              </div>
            </div>

            {/* Seletor de Combos */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">Escolha outro combo:</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {combos.map((combo) => {
                  const isActive = activeCombo.units === combo.units
                  const isIdeal = combo.units === idealCombo.units && selectedCombo === null

                  return (
                    <button
                      type="button"
                      key={combo.units}
                      onClick={() => setSelectedCombo(combo.units)}
                      className={`relative py-2.5 sm:py-3 rounded-xl text-sm font-medium transition-all touch-manipulation ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted hover:bg-muted/80 border border-border"
                      }`}
                    >
                      {combo.units >= 1000 ? `${combo.units / 1000}k` : combo.units}
                      {isIdeal && !isActive && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Extras */}
            <div className="space-y-3 mb-6">
              <p className="text-sm text-muted-foreground">Extras sugeridos:</p>
              
              <div className="grid gap-3">
                <div className="flex items-center justify-between bg-muted/50 rounded-xl p-3 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-lg">
                      🍟
                    </div>
                    <div>
                      <p className="font-medium text-sm">{potatoKg}kg Batata</p>
                      <p className="text-xs text-muted-foreground">~125g/pessoa</p>
                    </div>
                  </div>
                  <span className="font-semibold text-primary">{formatCurrency(potatoPrice)}</span>
                </div>

                <div className="flex items-center justify-between bg-muted/50 rounded-xl p-3 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-lg">
                      🥖
                    </div>
                    <div>
                      <p className="font-medium text-sm">{churrosQty} Churros</p>
                      <p className="text-xs text-muted-foreground">~4/pessoa</p>
                    </div>
                  </div>
                  <span className="font-semibold text-primary">{formatCurrency(churrosPrice)}</span>
                </div>

                <div className="flex items-center justify-between bg-muted/50 rounded-xl p-3 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-lg">
                      🥤
                    </div>
                    <div>
                      <p className="font-medium text-sm">{beveragesLiters}L Bebidas</p>
                      <p className="text-xs text-muted-foreground">~600ml/pessoa</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">Sugestão</span>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <span className="text-sm sm:text-base text-muted-foreground">Total estimado:</span>
                <span className="text-2xl sm:text-4xl font-bold text-primary">
                  {formatCurrency(activeCombo.price + potatoPrice + churrosPrice)}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-lg shadow-green-600/30 transition-all touch-manipulation"
            >
              <MessageCircle className="w-6 h-6" />
              Fechar Pedido no WhatsApp
            </a>
          </div>
        </div>

        {/* Serviços Extras */}
        <div className="mt-10 sm:mt-14 max-w-2xl mx-auto">
          <h3 className="text-center text-xl font-semibold mb-6">Serviços Extras</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFrituraModalOpen(true)}
              className="bg-card rounded-xl p-4 border border-border text-left hover:border-primary/50 active:bg-primary/10 transition-all touch-manipulation"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xl">
                  🔥
                </div>
                <div>
                  <h4 className="font-semibold">Fritura no Local</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">R$ 300,00 por 3 horas</p>
                  <p className="text-xs text-primary mt-1">Toque para saber mais</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setGarcomModalOpen(true)}
              className="bg-card rounded-xl p-4 border border-border text-left hover:border-primary/50 active:bg-primary/10 transition-all touch-manipulation"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-xl">
                  🤵
                </div>
                <div>
                  <h4 className="font-semibold">Garçom</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">R$ 100,00 por 4 horas</p>
                  <p className="text-xs text-primary mt-1">Toque para saber mais</p>
                </div>
              </div>
            </button>
          </div>

          {/* Sugestão de Consumo */}
          <div className="mt-6 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-xl p-5 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-lg">
                💡
              </div>
              <h4 className="font-semibold">Sugestão de Consumo</h4>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-card/60 rounded-lg p-3">
                <p className="font-medium text-sm mb-2">Festas com muitas opções:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Adultos: 10 a 12 un.</li>
                  <li>• Crianças: 6 a 8 un.</li>
                </ul>
              </div>
              
              <div className="bg-card/60 rounded-lg p-3">
                <p className="font-medium text-sm mb-2">Outros itens no cardápio:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Batata: 100-150g/pessoa</li>
                  <li>• Churros: 3-5 un./pessoa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modais */}
      <ServiceModal
        isOpen={frituraModalOpen}
        onClose={() => setFrituraModalOpen(false)}
        title="Fritura no Local"
      >
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Levamos tudo para fritar os salgadinhos fresquinhos no seu evento!
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-semibold text-lg text-primary">R$ 300,00</p>
            <p className="text-sm text-muted-foreground">por 3 horas de serviço</p>
          </div>
          <div>
            <p className="font-medium text-sm mb-2">O que levamos:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Fritadeiras profissionais</li>
              <li>• Óleo de qualidade</li>
              <li>• Cestinhas e utensílios</li>
              <li>• Funcionário treinado</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 rounded-lg p-3">
            <p className="text-xs text-amber-700">
              Disponível apenas para Cândido Mota e Assis
            </p>
          </div>
        </div>
      </ServiceModal>

      <ServiceModal
        isOpen={garcomModalOpen}
        onClose={() => setGarcomModalOpen(false)}
        title="Serviço de Garçom"
      >
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Garçom profissional para servir seus convidados com elegância!
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-semibold text-lg text-primary">R$ 100,00</p>
            <p className="text-sm text-muted-foreground">por garçom / 4 horas</p>
          </div>
          <div>
            <p className="font-medium text-sm mb-2">Incluso:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Garçom uniformizado</li>
              <li>• Jarras e bandejas</li>
              <li>• Atendimento cortês</li>
            </ul>
          </div>
        </div>
      </ServiceModal>
    </section>
  )
}
