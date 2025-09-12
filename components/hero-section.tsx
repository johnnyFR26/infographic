"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface HeroSectionProps {
  scrollY: number
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      data-section="0"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          hsl(var(--primary)) 0%, 
          hsl(var(--secondary)) 50%, 
          hsl(var(--accent)) 100%)`,
      }}
    >
      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Security Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-6xl animate-float" style={{ animationDelay: "0s" }}>
          🔒
        </div>
        <div className="absolute top-40 right-32 text-4xl animate-float" style={{ animationDelay: "1s" }}>
          🛡️
        </div>
        <div className="absolute bottom-40 left-32 text-5xl animate-float" style={{ animationDelay: "2s" }}>
          🔐
        </div>
        <div className="absolute bottom-20 right-20 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>
          🔑
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center z-10">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white text-balance">
            Políticas de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Segurança
            </span>
            da Informação
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
            Um guia interativo sobre as principais políticas que protegem os ativos digitais da sua organização
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: "🔐", label: "Controle de Acesso" },
              { icon: "💾", label: "Backup & Recuperação" },
              { icon: "📋", label: "Uso Aceitável" },
              { icon: "🏢", label: "Segurança Física" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white/80 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
