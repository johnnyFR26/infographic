"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { PolicySection } from "@/components/policy-section"
import { NavigationDots } from "@/components/navigation-dots"
import { ThemeToggle } from "@/components/theme-toggle"
import { CardDescription } from "@/components/ui/card"
import { AlertTriangle, ArrowRight, CheckCircle, Cloud, Database, Eye, HardDrive, Info, Thermometer, UserCheck } from "lucide-react"

const policies = [
  {
    id: "access-control",
    page: "/access",
    title: "Política de Controle de Acesso",
    cardTitle: "Fundamentos do Controle de Acesso",
    cardDescription: "O controle de acesso é a base da segurança da informação, determinando quem pode acessar quais recursos e sob quais circunstâncias. Esta política estabelece diretrizes para garantir que apenas usuários autorizados tenham acesso aos sistemas e dados apropriados.",
    cardPlus: (<></>),
    cardGridNumber: ["95%","24/7","78%","89%"],
    cardGridLabel: ["Taxa de Sucesso MFA","Monitoramento","Adoção de Senhas Fortes","Conformidade RBAC"],
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
    page: "backup",
    title: "Política de Backup e Recuperação",
    cardTitle: "Estratégia de Proteção de Dados",
    cardDescription: "A política de backup e recuperação garante a continuidade dos negócios através da proteção sistemática dos dados organizacionais contra perda, corrupção ou desastres.",
    cardPlus: (<><div className="flex items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-700 rounded-xl mb-8 flex-wrap">
                    <div className="flex flex-col items-center text-center min-w-[120px]">
                      <div className="bg-blue-500 text-white w-15 h-15 rounded-full flex items-center justify-center text-2xl mb-4">
                        <Database className="w-6 h-6" />
                      </div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Dados Originais</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Servidores e sistemas de produção</p>
                    </div>
                    <ArrowRight className="text-blue-500 w-6 h-6" />
                    <div className="flex flex-col items-center text-center min-w-[120px]">
                      <div className="bg-blue-500 text-white w-15 h-15 rounded-full flex items-center justify-center text-2xl mb-4">
                        <HardDrive className="w-6 h-6" />
                      </div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Backup Local</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Cópia em storage local</p>
                    </div>
                    <ArrowRight className="text-blue-500 w-6 h-6" />
                    <div className="flex flex-col items-center text-center min-w-[120px]">
                      <div className="bg-blue-500 text-white w-15 h-15 rounded-full flex items-center justify-center text-2xl mb-4">
                        <Cloud className="w-6 h-6" />
                      </div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">Backup Remoto</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Armazenamento em nuvem</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white p-8 rounded-xl mb-8">
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <Info className="w-5 h-5" />
                      Regra 3-2-1 de Backup
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center gap-4">
                        <span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">3</span>
                        <p>Mantenha <strong>3 cópias</strong> dos seus dados importantes</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">2</span>
                        <p>Armazene em <strong>2 tipos diferentes</strong> de mídia</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">1</span>
                        <p>Mantenha <strong>1 cópia offsite</strong> (fora do local)</p>
                      </div>
                    </div>
                  </div>
                  </>),
    cardGridNumber: ["99.5%","4h","15min","100%"],
    cardGridLabel: ["Taxa de Sucesso","RTO Médio","RPO Máximo","Testes Mensais"],
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
    page: "/acceptable",
    title: "Política de Uso Aceitável",
    cardTitle: "Diretrizes de Uso Responsável",
    cardDescription: "Esta política estabelece as regras e diretrizes para o uso apropriado dos recursos de tecnologia da informação da organização, garantindo um ambiente seguro e produtivo.",
    cardPlus: (<><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-xl">
                      <h4 className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Práticas Recomendadas
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Usar senhas fortes e únicas</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Manter software atualizado</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Reportar incidentes de segurança</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Fazer logout ao sair</span>
                        </div>
                      </div>
                    </div>
                  </div></>),
    cardGridNumber: ["92%","15min","98%","24/7"],
    cardGridLabel: ["Conformidade Geral","Tempo Médio de Resposta","Satisfação dos Usuários","Suporte Disponível"],
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
    page: "/phisycs",
    title: "Política de Segurança Física",
    cardTitle: "Proteção de Perímetro e Instalações",
    cardDescription: "A segurança física é fundamental para proteger ativos de informação contra ameaças físicas, incluindo acesso não autorizado, roubo, vandalismo e desastres naturais.",
    cardPlus: (<><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl text-center">
                      <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                      <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Zona Restrita</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Data centers e servidores críticos</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-700 rounded-xl text-center">
                      <Eye className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                      <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">Zona Controlada</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Áreas administrativas e técnicas</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl text-center">
                      <UserCheck className="w-8 h-8 text-green-500 mx-auto mb-3" />
                      <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Zona Pública</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Recepção e áreas comuns</p>
                    </div>
                  </div>

                  {/* Environmental Controls */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8 rounded-xl mb-8">
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <Thermometer className="w-5 h-5" />
                      Controles Ambientais
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">Temperatura e Umidade</h5>
                        <ul className="space-y-2 text-sm">
                          <li>• Temperatura: 18-24°C</li>
                          <li>• Umidade: 45-65%</li>
                          <li>• Monitoramento 24/7</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">Proteção Contra Incêndio</h5>
                        <ul className="space-y-2 text-sm">
                          <li>• Sistema de supressão FM-200</li>
                          <li>• Detectores de fumaça</li>
                          <li>• Alarmes automáticos</li>
                        </ul>
                      </div>
                    </div>
                  </div></>),
    cardGridNumber: ["99.9%","24/7","< 2min","100%"],
    cardGridLabel: ["Uptime do Data Center","Monitoramento Ativo","Tempo de Resposta","Cobertura CCTV"],
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
