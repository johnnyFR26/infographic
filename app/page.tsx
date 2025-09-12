"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { PolicySection } from "@/components/policy-section"
import { NavigationDots } from "@/components/navigation-dots"
import { ThemeToggle } from "@/components/theme-toggle"

const policies = [
  {
    id: "access-control",
    title: "Política de Controle de Acesso",
    icon: "🔐",
    description: "Gerenciamento seguro de identidades e permissões de usuários",
    examples: [
      "Autenticação multifator (MFA) obrigatória",
      "Princípio do menor privilégio",
      "Revisão periódica de acessos",
      "Controle de acesso baseado em funções (RBAC)",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backup-recovery",
    title: "Política de Backup e Recuperação",
    icon: "💾",
    description: "Proteção e recuperação de dados críticos da organização",
    examples: [
      "Backup automático diário (regra 3-2-1)",
      "Testes de recuperação mensais",
      "Armazenamento em múltiplas localizações",
      "Criptografia de dados em repouso",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "acceptable-use",
    title: "Política de Uso Aceitável",
    icon: "📋",
    description: "Diretrizes para uso apropriado dos recursos de TI",
    examples: [
      "Proibição de software não autorizado",
      "Uso responsável da internet corporativa",
      "Proteção de informações confidenciais",
      "Relatório de incidentes de segurança",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "physical-security",
    title: "Política de Segurança Física",
    icon: "🏢",
    description: "Proteção física de instalações e equipamentos",
    examples: [
      "Controle de acesso às instalações",
      "Monitoramento por câmeras de segurança",
      "Proteção contra desastres naturais",
      "Descarte seguro de equipamentos",
    ],
    color: "from-orange-500 to-red-500",
  },
]

export default function SecurityInfographic() {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("[data-section]")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed Navigation */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
        <NavigationDots total={policies.length + 1} active={activeSection} onNavigate={scrollToSection} />
      </div>

      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* Policy Sections */}
      {policies.map((policy, index) => (
        <PolicySection
          key={policy.id}
          policy={policy}
          index={index + 1}
          scrollY={scrollY}
          isActive={activeSection === index + 1}
        />
      ))}

      {/* Footer */}
      <footer className="bg-card py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4 text-primary">Segurança da Informação</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A implementação efetiva dessas políticas é fundamental para proteger os ativos digitais da organização e
            garantir a continuidade dos negócios.
          </p>
        </div>
      </footer>
    </div>
  )
}
