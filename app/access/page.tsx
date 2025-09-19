"use client"
import { ArrowRight, ChevronDown, Cloud, Database, HardDrive, Info, Key, Layers, LogIn, Smartphone, TestTube, Users } from "lucide-react";
import { useState } from "react";
export default function Access(){
      const [expandedItems, setExpandedItems] = useState<string[]>([]);
        
          const toggleExpanded = (itemId: string) => {
            setExpandedItems(prev => 
              prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev.filter(id => !id.startsWith(itemId.split('-')[0])), itemId]
            );
          };
    return(
                    <section className="animate-fadeIn">
              <div className="flex items-center gap-8 mb-10 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="text-6xl text-blue-500">
                  <Key className="w-16 h-16" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                    Política de Controle de Acesso
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300">
                    Gerenciamento seguro de identidades e permissões de usuários
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-5 text-blue-500">
                    Fundamentos do Controle de Acesso
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    O controle de acesso é a base da segurança da informação, determinando quem pode acessar quais recursos e sob quais circunstâncias. Esta política estabelece diretrizes para garantir que apenas usuários autorizados tenham acesso aos sistemas e dados apropriados.
                  </p>

                  {/* Expandable Items */}
                  <div className="space-y-4">
                    {[
                      {
                        id: 'login-process',
                        icon: LogIn,
                        title: 'Processos de Login Seguro',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Autenticação Robusta: Implementação de sistemas de login que verificam a identidade do usuário através de múltiplos fatores.</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Verificação de credenciais (usuário e senha)
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Bloqueio automático após tentativas falhadas
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Registro de logs de acesso
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Timeout de sessão por inatividade
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'strong-passwords',
                        icon: Lock,
                        title: 'Senhas Fortes e Seguras',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Critérios de Complexidade:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Mínimo de 12 caracteres
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Combinação de letras maiúsculas e minúsculas
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Números e símbolos especiais
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Evitar informações pessoais
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Troca obrigatória a cada 90 dias
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Histórico de senhas para evitar reutilização
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'mfa',
                        icon: Smartphone,
                        title: 'Autenticação Multifator (MFA)',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Camadas Adicionais de Segurança:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Algo que você sabe:</strong> Senha ou PIN
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Algo que você tem:</strong> Token, smartphone, cartão
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Algo que você é:</strong> Biometria (digital, facial)
                              </li>
                            </ul>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                              A MFA reduz em 99.9% o risco de comprometimento de contas.
                            </p>
                          </div>
                        )
                      },
                      {
                        id: 'rbac',
                        icon: Users,
                        title: 'Controle Baseado em Funções (RBAC)',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Princípio do Menor Privilégio: Usuários recebem apenas as permissões mínimas necessárias para executar suas funções.</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Definição de perfis de acesso por cargo
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Revisão periódica de permissões
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Segregação de funções críticas
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Aprovação para acessos especiais
                              </li>
                            </ul>
                          </div>
                        )
                      }
                    ].map((item) => {
  const isExpanded = expandedItems.includes(item.id);

  return (
    <div key={item.id} className="border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => toggleExpanded(item.id)}
        className="w-full bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 p-5 text-left flex items-center gap-4 transition-colors"
      >
        <span className="font-medium text-slate-900 dark:text-white flex-grow">{item.title}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="p-5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {item.content}
        </div>
      )}
    </div>
  );
})}
                  </div>
                </div>

                {/* Stats Panel */}
                <div className="space-y-6">
                  {[
                    { value: '95%', label: 'Taxa de Sucesso MFA' },
                    { value: '24/7', label: 'Monitoramento' },
                    { value: '78%', label: 'Adoção de Senhas Fortes' },
                    { value: '89%', label: 'Conformidade RBAC' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

 
