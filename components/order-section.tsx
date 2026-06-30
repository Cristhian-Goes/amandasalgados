"use client"

import { ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OrderSection() {
  const yoogaUrl = "https://delivery.yooga.app/amandasalgados/tabs/home"
  const aiqfomeUrl = "https://aiqfome.com/SP/candido-mota/amanda-salgados"
  const ifoodUrl = "https://www.ifood.com.br/delivery/candido-mota-sp/amanda-salgados-vila-garrido/709eb118-faba-4c73-975a-ba079b31d4c0?prato=1c7fc9b1-dfef-4a14-82ae-d4e4a3d09a37"
  const whatsappUrl = "https://wa.me/5518997861272"

  return (
    <section id="pedidos" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Peça Online
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
              Faça seu pedido sem sair de casa
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-pretty leading-relaxed max-w-lg mx-auto lg:mx-0">
              Acesse nosso cardápio completo no Yooga e receba nossos deliciosos salgadinhos 
              fresquinhos na sua porta. Navegue pelo cardápio e monte 
              o pedido perfeito para você ou sua festa.
            </p>

            {/* Recursos */}
            <ul className="space-y-3 text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Cardápio completo com fotos
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Pagamento online seguro
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Acompanhe seu pedido em tempo real
              </li>
            </ul>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 sm:h-auto"
              asChild
            >
              <a href={yoogaUrl} target="_blank" rel="noopener noreferrer">
                Pedir Agora
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Mockup do Celular */}
          <div className="flex items-center justify-center">
            <div className="relative w-[260px] sm:w-[300px] md:w-[320px] mx-auto">
              {/* Corpo do celular */}
              <div className="relative bg-blue-600 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl">
                {/* Tela */}
                <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: "9/19" }}>
                  {/* Barra de status */}
                  <div className="absolute top-0 left-0 right-0 h-7 sm:h-8 bg-black/5 flex items-center justify-center z-10">
                    <div className="w-16 sm:w-20 h-4 sm:h-5 bg-black rounded-full" />
                  </div>

                  {/* Conteúdo do App */}
                  <div className="absolute inset-0 pt-8 sm:pt-10 pb-6 sm:pb-8 flex flex-col">
                    {/* Cabeçalho do App */}
                    <div className="py-4 sm:py-6 px-3 sm:px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <div className="flex items-center justify-center mb-2">
                        <img
                          src="https://play-lh.googleusercontent.com/2Qbbq_p2x-BIBuSodtSBT6S-7SO9D5TNN9b_bOXHU-GIbdLlE8epaPEzvYncBP7Z6br6"
                          alt="Yooga"
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-contain bg-white p-0.5 sm:p-1"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-center">
                        Yooga
                      </h3>
                    </div>

                    {/* Corpo do App */}
                    <div className="flex-1 p-3 sm:p-4 flex flex-col items-center justify-center bg-gray-50">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3 sm:mb-4">
                        <img
                          src="/logo.jpg"
                          alt="Amanda Salgados"
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-center mb-1 sm:mb-2 text-sm sm:text-base">
                        Amanda Salgados
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 text-center mb-4 sm:mb-6 px-2">
                        Cardápio completo e pedidos personalizados
                      </p>

                      {/* Preview do Menu */}
                      <div className="w-full space-y-1.5 sm:space-y-2 px-1 sm:px-2">
                        <div className="h-6 sm:h-8 bg-gray-200 rounded-lg animate-pulse" />
                        <div className="h-6 sm:h-8 bg-gray-200 rounded-lg animate-pulse opacity-70" />
                        <div className="h-6 sm:h-8 bg-gray-200 rounded-lg animate-pulse opacity-40" />
                      </div>
                    </div>

                    {/* Botão de Pedido */}
                    <div className="px-3 sm:px-4 pb-1 sm:pb-2">
                      <a
                        href={yoogaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white font-semibold transition-transform hover:scale-[1.02] bg-gradient-to-r from-blue-500 to-blue-600 text-sm sm:text-base"
                      >
                        Pedir Agora
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Indicador Home */}
                  <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-black/20 rounded-full" />
                </div>
              </div>

              {/* Botões Secundários */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <span className="text-xs text-muted-foreground">Estamos também em:</span>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={aiqfomeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-colors border border-border"
                  >
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mu9RZoVxAUWfQwM3hHj1WMRDXOObQMVjag&s" 
                      alt="AiqFome" 
                      className="w-4 h-4 rounded-sm object-contain"
                    />
                    AiqFome
                  </a>
                  <a
                    href={ifoodUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-colors border border-border"
                  >
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-r5c2a6axWbvFgSKrY2QoLnoJ73Cy_Wm3w&s" 
                      alt="iFood" 
                      className="w-4 h-4 rounded-sm object-contain"
                    />
                    iFood
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-colors border border-border"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
