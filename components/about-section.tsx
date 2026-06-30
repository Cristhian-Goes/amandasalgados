import { CheckCircle2 } from "lucide-react"

const features = [
  "Fabricação própria com ingredientes selecionados",
  "Salgadinhos fritos na hora para máxima crocância",
  "Serviço de fritura no local do seu evento",
  "Delivery integrado com Yooga",
  "Combos promocionais para famílias",
  "Atendimento de segunda a sábado",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <img
            src="/logo.jpg"
            alt="Amanda Salgados"
            loading="lazy"
            decoding="async"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-4 sm:mb-6 shadow-lg"
          />
          {/* Header */}
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Sobre Nós
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 sm:mb-6 text-balance">
            Tradição e sabor em cada salgadinho
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base text-pretty leading-relaxed">
            Fundada em fevereiro de 2024, a Amanda Salgados rapidamente se consolidou
            no mercado pela especialização em mini salgadinhos para
            festas e consumo imediato. Nossa missão é trazer mais sabor para seus dias
            com produtos frescos e de qualidade.
          </p>
          <p className="text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base text-pretty leading-relaxed">
            Utilizamos métodos que permitem a entrega de produtos sempre frescos,
            com um cardápio que inclui os tradicionais fritos como coxinhas, bolinhas
            de queijo, quibes, risoles e deliciosas opções doces como mini churros.
          </p>

          {/* Features List */}
          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-left max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background/50">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
