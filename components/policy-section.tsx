"use client"

import { ReactNode, useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Database, FileText, Building } from "lucide-react"

interface Policy {
  id: string
  title: string
  icon: string
  description: string
  examples: string[]
  exampleDescription: ReactNode
  color: string
}

interface PolicySectionProps {
  policy: Policy
  index: number
  scrollY: number
  isActive: boolean
}

const iconMap = {
  "🔐": Shield,
  "💾": Database,
  "📋": FileText,
  "🏢": Building,
}

export function PolicySection({ policy, index, scrollY, isActive }: PolicySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const IconComponent = iconMap[policy.icon as keyof typeof iconMap] || Shield

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.querySelector(`[data-section="${index}"]`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [index])

  const isEven = index % 2 === 0
  const parallaxOffset = scrollY * 0.1

  type AccordionItemProps = {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/50">
      <button
        className="hover w-full flex justify-between items-center px-4 py-3 text-left font-medium transition"
        onClick={onToggle}
      >
        <span className="text-card-foreground">{title}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-4 py-3 border-t">
          {content}
        </div>
      )}
    </div>
  );
}

const [openAccordions, setOpenAccordions] = useState<{[key: number]: boolean}>({})

function toggleAccordion(i: number) {
  setOpenAccordions(prev => ({ ...prev, [i]: !prev[i] }))
}

  return (
    <section data-section={index} className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23059669' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
          {/* Content */}
          <div
            className={`space-y-6 ${isEven ? "" : "lg:col-start-2"} ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <Badge variant="secondary" className="text-sm font-medium">
              Política {index}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">{policy.title}</h2>

            <p className="text-xl text-muted-foreground text-pretty">{policy.description}</p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Exemplos de Implementação:</h3>
              <div className="grid gap-3">
                {policy.examples.map((example, exampleIndex) => (
                  <div 
                  className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${exampleIndex * 0.1}s` }}
                  >
                    <AccordionItem
                    title={example}
                    /*@ts-ignore */
                    content={policy.exampleDescription[exampleIndex]}
                    key={exampleIndex}
                    isOpen={openAccordions[exampleIndex]}
                    onToggle={() => toggleAccordion(exampleIndex)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`${isEven ? "lg:col-start-2" : ""} ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <Card className={`relative overflow-hidden ${isActive ? "animate-pulse-glow" : ""}`}>
              <CardHeader className={`bg-gradient-to-br ${policy.color} text-white`}>
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <div className="p-3 bg-white/20 rounded-full">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-balance">{policy.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Interactive Elements */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-3xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Disponibilidade</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoramento</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Implementação</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? "85%" : "0%" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Conformidade</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? "92%" : "0%",
                          transitionDelay: "0.3s",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
