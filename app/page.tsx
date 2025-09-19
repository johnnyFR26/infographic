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
      "Processos de Login Seguro",
      "Senhas Fortes e Seguras",
      "Autentificação Multifator (MFA)",
      "Controle baseado em funções (RBAC)",
    ],
    exampleDescription:  [(<p>
      <b>Autenticação Robusta: Implementação de sistemas de login que verificam a identidade do usuário através de múltiplos fatores.</b>
      <br/>
      <ul>
        <li>Verificação de credenciais (usuário e senha)</li>
        <li>Bloqueio automático após tentativas falhadas</li>
        <li>Registro de logs de acesso</li>
        <li>Timeout de sessão por inatividade</li></ul>
        </p>),
        (<p>
      <b>Critérios de Complexidade:</b>
      <br/>
      <ul>
        <li>Mínimo de 12 caracteres</li>
        <li>Combinação de letras maiúsculas e minúsculas</li>
        <li>Números e símbolos especiais</li>
        <li>Evitar informações pessoais</li>
        <li>Troca obrigatória a cada 90 dias</li>
        <li>Histórico de senhas para evitar reutilização</li>
      </ul>
      </p>),
        (<p>
      <b>Autenticação Multifator (MFA)</b>
      <br/>
      <ul>
        <li><b>Algo que você sabe:</b> Senha ou PIN</li>
        <li><b>Algo que você tem:</b> Token, Smartphone, Cartão</li>
        <li><b>Algo que você é:</b> Biometria (digital, facial)</li>
      </ul>
      <span className="description">A MFA reduz em 99.9% o risco de comprometimento de contas.</span>
      </p>),
        (<p>
      <b>Princípio do Menor Privilégio: Usuários recebem apenas as permissões mínimas necessárias para executar suas funções.</b>
      <br/>
      <ul>
        <li>Definição de perfis de acesso por cargo</li>
        <li>Revisão periódica de permissões</li>
        <li>Segregação de funções críticas</li>
        <li>Aprovação para acessos especiais</li>
      </ul>
      </p>),
        ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backup-recovery",
    title: "Política de Backup e Recuperação",
    icon: "💾",
    description: "Proteção e recuperação de dados críticos da organização",
    examples: [
      "Tipos de Backup",
      "Testes de recuperação",
    ],
    exampleDescription:[(<p>
      <ul>
        <li><b>Backup Completo:</b>Cópia integral de todos os dados</li>
        <li><b>Backup Incremental:</b>Apenas dados alterados desde o último backup</li>
        <li><b>Backup Diferencial:</b>Dados alterados desde o último backup completo</li>
        <li><b>Backup Contínuo:</b>Replicação em tempo real</li>
        </ul>
        </p>),
        (<p>
          <b>Validação Regular:</b>
      <ul>
          <li>Testes mensais de restauração</li>
          <li>Verificação da integridade dos dados</li>
          <li>Medição do tempo de recuperação (RTO)</li>
          <li>Documentação dos procedimentos</li>
          <li>Simulação de cenários de desastre</li>
        </ul>
        </p>),
        ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "acceptable-use",
    title: "Política de Uso Aceitável",
    icon: "📋",
    description: "Diretrizes para uso apropriado dos recursos de TI",
    examples: [
      "Uso da Internet",
      "Segurança de E-mail",
      "Uso de dispositivos",
      "Manuseio de Dados",
    ],
    exampleDescription:[(<p>
      <b>Diretrizes para navegação segura:</b>
      <ul>
        <li>Evitar sites suspeitos ou não confiáveis</li>
        <li>Não baixar arquivos de fontes desconhecidas</li>
        <li>Verificar URLs antes de clicar em links</li>
        <li>Usar navegadores atualizados com proteção ativa</li>
      </ul>
        </p>),
        (<p>
      <b>Boas práticas para e-mail corporativo:</b>
      <ul>
        <li>Verificar remetente antes de abrir anexos</li>
        <li>Não responder a e-mails de phishing</li>
        <li>Usar criptografia para informações sensíveis</li>
        <li>Reportar e-mails suspeitos ao TI</li>
      </ul>
        </p>),
        (<p>
      <b>Políticas para equipamentos corportativos:</b>
      <ul>
        <li>Manter dispositivos fisicamente seguros</li>
        <li>Não permitir uso pessoal excessivo</li>
        <li>Instalar apenas software aprovado</li>
        <li>Reportar problemas técnicos imediatamente</li>
      </ul>
        </p>),
        (<p>
      <b>Proteção de informações corporativas:</b>
      <ul>
        <li>Classificar dados conforme sensibilidade</li>
        <li>Não compartilhar informações confidenciais</li>
        <li>Usar canais seguros para transmissão</li>
        <li>Descartar dados de forma segura</li>
      </ul>
        </p>),
        ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "physical-security",
    title: "Política de Segurança Física",
    icon: "🏢",
    description: "Proteção física de instalações e equipamentos",
    examples: [
      "Controle de Acesso Físico",
      "Sistema de vigilância",
      "Proteção Elétrica",
      "Segurança de Equipamentos",
    ],
    exampleDescription:[(<p>
      <b>Sistemas de controle de entrada:</b>
      <br/>
      <ul>
        <li>Cartões de acesso com RFID/NFC</li>
        <li>Biometria (impressão digital, facial)</li>
        <li>Códigos PIN para áreas específicas</li>
        <li>Registro de todos os acessos</li>
        <li>Escolta obrigatória para visitantes</li>
      </ul>
        </p>),(<p>
      <b>Monitoramento por CCTV:</b>
      <br/>
      <ul>
        <li>Câmeras HD em pontos estratégicos</li>
        <li>Gravação contínua por 90 dias</li>
        <li>Monitoramento remoto 24/7</li>
        <li>Detecção de movimento inteligente</li>
        </ul>
        </p>),(<p>
      <b>Sistemas de energia ininterrupta:</b>
      <br/>
      <ul>
        <li>UPS com autonomia de 30 minutos</li>
        <li>Gerador diesel para emergências</li>
        <li>Proteção contra surtos elétricos</li>
        <li>Circuitos elétricos redundantes</li>
        <li>Monitoramento de qualidade da energia</li>
      </ul>
        </p>),(<p>
      <b>Proteção de hardware e dispositivos:</b>
      <br/>
      <ul>
        <li>Racks e gabinetes com fechadura</li>
        <li>Cabos de segurança para laptops</li>
        <li>Inventário e etiquetagem de ativos</li>
        <li>Política de mesa limpa</li>
        <li>Descarte seguro de equipamentos</li>
      </ul>
        </p>),
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
