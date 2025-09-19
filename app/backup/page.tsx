"use client"
import { ArrowRight, ChevronDown, Cloud, Database, HardDrive, Info, Layers, TestTube } from "lucide-react";
import { useState } from "react";

export default function Backup(){
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
                  <Database className="w-16 h-16" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                    Política de Backup e Recuperação
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300">
                    Proteção e recuperação de dados críticos da organização
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-5 text-blue-500">
                    Estratégia de Proteção de Dados
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    A política de backup e recuperação garante a continuidade dos negócios através da proteção sistemática dos dados organizacionais contra perda, corrupção ou desastres.
                  </p>

                  {/* Backup Flow */}
                  <div className="flex items-center justify-center gap-6 p-8 bg-slate-50 dark:bg-slate-700 rounded-xl mb-8 flex-wrap">
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

                  {/* Regra 3-2-1 */}
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

                  {/* Expandable Items */}
                  <div className="space-y-4">
                    {[
                      {
                        id: 'backup-types',
                        icon: Layers,
                        title: 'Tipos de Backup',
                        content: (
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Backup Completo:</strong> Cópia integral de todos os dados
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Backup Incremental:</strong> Apenas dados alterados desde o último backup
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Backup Diferencial:</strong> Dados alterados desde o último backup completo
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <strong>Backup Contínuo:</strong> Replicação em tempo real
                            </li>
                          </ul>
                        )
                      },
                      {
                        id: 'recovery-tests',
                        icon: TestTube,
                        title: 'Testes de Recuperação',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Validação Regular:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Testes mensais de restauração
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Verificação da integridade dos dados
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Medição do tempo de recuperação (RTO)
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Documentação dos procedimentos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Simulação de cenários de desastre
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
                    { value: '99.5%', label: 'Taxa de Sucesso' },
                    { value: '4h', label: 'RTO Médio' },
                    { value: '15min', label: 'RPO Máximo' },
                    { value: '100%', label: 'Testes Mensais' }
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