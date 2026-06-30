"use client"

import { useState, useEffect } from "react"
import { Clock, MapPin, Phone, Navigation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const schedule = [
  { day: "Segunda-feira", hours: "08:00 – 21:00", open: true },
  { day: "Terça-feira", hours: "08:00 – 21:00", open: true },
  { day: "Quarta-feira", hours: "08:00 – 21:00", open: true },
  { day: "Quinta-feira", hours: "08:00 – 21:00", open: true },
  { day: "Sexta-feira", hours: "08:00 – 21:00", open: true },
  { day: "Sábado", hours: "08:00 – 22:00", open: true },
  { day: "Domingo", hours: "Fechado", open: false },
]

export function HoursSection() {
  const [currentDay, setCurrentDay] = useState("")

  useEffect(() => {
    // Atualiza o dia atual no cliente para evitar problemas de hidratação
    const today = new Date().toLocaleDateString("pt-BR", { weekday: "long" })
    setCurrentDay(today.charAt(0).toUpperCase() + today.slice(1))
  }, [])

  return (
    <section id="horarios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Schedule */}
          <div>
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Horários
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 sm:mb-8 text-balance">
              Horário de Funcionamento
            </h2>

            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-2 sm:space-y-3">
                  {schedule.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center justify-between py-2 sm:py-3 border-b border-border last:border-0 ${
                        item.day === currentDay ? "bg-primary/5 -mx-2 sm:-mx-3 px-2 sm:px-3 rounded-lg" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        {item.day === currentDay && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                        )}
                        <span className={`font-medium text-sm sm:text-base ${item.day === currentDay ? "text-primary" : "text-foreground"}`}>
                          {item.day}
                        </span>
                      </div>
                      <span className={`text-xs sm:text-sm ${item.open ? "text-muted-foreground" : "text-destructive"}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Location with Real Map */}
          <div>
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Localização
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 sm:mb-8 text-balance">
              Onde nos encontrar
            </h2>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-border mb-4 sm:mb-6" style={{ height: "220px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.8247!2d-50.3894667!3d-22.7469167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94960d47f6d9f0a7%3A0x8d9f8d9f8d9f8d9f!2sR.%20Alberto%20Scudeller%2C%20205%20-%20C%C3%A2ndido%20Mota%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Directions Button */}
            <Button
              size="lg"
              className="w-full mb-4 sm:mb-6 bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-auto"
              asChild
            >
              <a 
                href="https://www.google.com/maps/dir//R.+Alberto+Scudeller,+205+-+C%C3%A2ndido+Mota,+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Como Chegar
              </a>
            </Button>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Endereço</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    R. Alberto Scudeller, 205 - 19880-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Telefone / WhatsApp</h4>
                  <a 
                    href="tel:+5518997861272" 
                    className="text-xs sm:text-sm text-primary hover:underline"
                  >
                    (18) 99786-1272
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Horário Resumido</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Seg-Sex: 8h-21h | Sáb: 8h-22h | Dom: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
