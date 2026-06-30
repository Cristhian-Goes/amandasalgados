import { Truck, Flame, Package, PartyPopper } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Truck,
    title: "Delivery",
    description: "Entrega rápida e prática na sua casa. Peça pelo Yooga ou WhatsApp e receba seus salgadinhos quentinhos.",
  },
  {
    icon: Flame,
    title: "Fritura no Local",
    description: "Levamos nossa estrutura até seu evento e fritamos os salgadinhos na hora, garantindo máxima crocância e sabor.",
  },
  {
    icon: Package,
    title: "Combos Promocionais",
    description: "Opções que combinam salgados, mini churros e bebidas com excelente custo-benefício para famílias e pequenos grupos.",
  },
  {
    icon: PartyPopper,
    title: "Festas e Eventos",
    description: "Atendemos festas de aniversário, eventos corporativos, confraternizações e celebrações especiais com qualidade.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Como podemos atender você
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base text-pretty">
            Oferecemos diversas modalidades de atendimento para garantir que seus 
            salgadinhos cheguem sempre frescos e deliciosos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
