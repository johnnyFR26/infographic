"use client"
import { CheckCircle, ChevronDown, ClipboardCheck, FileText, Globe, Mail, Monitor, XCircle, Lock } from "lucide-react";
import { useState } from "react";

export default function Acceptable(){
    
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
                  <ClipboardCheck className="w-16 h-16" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                    Política de Uso Aceitável
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300">
                    Diretrizes para uso responsável dos recursos tecnológicos
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-5 text-blue-500">
                    Diretrizes de Uso Responsável
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Esta política estabelece as regras e diretrizes para o uso apropriado dos recursos de tecnologia da informação da organização, garantindo um ambiente seguro e produtivo.
                  </p>

                  {/* Do's and Don'ts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

                    <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-xl">
                      <h4 className="text-red-600 dark:text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        Práticas Proibidas
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Compartilhar credenciais</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Instalar software não autorizado</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Acessar conteúdo inadequado</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Usar redes Wi-Fi públicas para trabalho</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Items */}
                  <div className="space-y-4">
                    {[
                      {
                        id: 'internet-usage',
                        icon: Globe,
                        title: 'Uso da Internet',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Diretrizes para navegação segura:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Evitar sites suspeitos ou não confiáveis
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Não baixar arquivos de fontes desconhecidas
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Verificar URLs antes de clicar em links
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Usar navegadores atualizados com proteção ativa
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'email-security',
                        icon: Mail,
                        title: 'Segurança de E-mail',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Boas práticas para e-mail corporativo:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Verificar remetente antes de abrir anexos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Não responder a e-mails de phishing
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Usar criptografia para informações sensíveis
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Reportar e-mails suspeitos ao TI
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'device-usage',
                        icon: Monitor,
                        title: 'Uso de Dispositivos',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Políticas para equipamentos corporativos:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Manter dispositivos fisicamente seguros
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Não permitir uso pessoal excessivo
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Instalar apenas software aprovado
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Reportar problemas técnicos imediatamente
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'data-handling',
                        icon: FileText,
                        title: 'Manuseio de Dados',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Proteção de informações corporativas:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Classificar dados conforme sensibilidade
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Não compartilhar informações confidenciais
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Usar canais seguros para transmissão
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Descartar dados de forma segura
                              </li>
                            </ul>
                          </div>
                        )
                      }
                    ].map((item) => {
                      const IconComponent = item.icon;
                      const isExpanded = expandedItems.includes(item.id);
                      
                      return (
                        <div key={item.id} className="border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <button
                            onClick={() => toggleExpanded(item.id)}
                            className="w-full bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 p-5 text-left flex items-center gap-4 transition-colors"
                          >
                            <IconComponent className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
                    { value: '92%', label: 'Conformidade Geral' },
                    { value: '15min', label: 'Tempo Médio de Resposta' },
                    { value: '98%', label: 'Satisfação dos Usuários' },
                    { value: '24/7', label: 'Suporte Disponível' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    )
}