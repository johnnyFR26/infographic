"use client"
import { AlertTriangle, ArrowRight, Building, Camera, ChevronDown, Cloud, Database, DoorOpen, Eye, HardDrive, Info, Layers, TestTube, Thermometer, UserCheck, Zap, Lock } from "lucide-react";
import { useState } from "react";
export default function Phisycs(){
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
                  <Building className="w-16 h-16" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                    Política de Segurança Física
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300">
                    Proteção física das instalações e equipamentos
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-5 text-blue-500">
                    Proteção de Perímetro e Instalações
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    A segurança física é fundamental para proteger ativos de informação contra ameaças físicas, incluindo acesso não autorizado, roubo, vandalismo e desastres naturais.
                  </p>

                  {/* Security Zones */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
                  </div>

                  {/* Expandable Items */}
                  <div className="space-y-4">
                    {[
                      {
                        id: 'access-control',
                        icon: DoorOpen,
                        title: 'Controle de Acesso Físico',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Sistemas de controle de entrada:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Cartões de acesso com RFID/NFC
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Biometria (impressão digital, facial)
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Códigos PIN para áreas específicas
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Registro de todos os acessos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Escolta obrigatória para visitantes
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'surveillance',
                        icon: Camera,
                        title: 'Sistema de Vigilância',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Monitoramento por CCTV:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Câmeras HD em pontos estratégicos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Gravação contínua por 90 dias
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Monitoramento remoto 24/7
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Detecção de movimento inteligente
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Backup redundante das gravações
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'power-protection',
                        icon: Zap,
                        title: 'Proteção Elétrica',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Sistemas de energia ininterrupta:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                UPS com autonomia de 30 minutos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Gerador diesel para emergências
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Proteção contra surtos elétricos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Circuitos elétricos redundantes
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Monitoramento de qualidade da energia
                              </li>
                            </ul>
                          </div>
                        )
                      },
                      {
                        id: 'equipment-security',
                        icon: Lock,
                        title: 'Segurança de Equipamentos',
                        content: (
                          <div>
                            <p className="font-semibold mb-3">Proteção de hardware e dispositivos:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Racks e gabinetes com fechadura
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Cabos de segurança para laptops
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Inventário e etiquetagem de ativos
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Política de mesa limpa
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                Descarte seguro de equipamentos
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
                    { value: '99.9%', label: 'Uptime do Data Center' },
                    { value: '24/7', label: 'Monitoramento Ativo' },
                    { value: '< 2min', label: 'Tempo de Resposta' },
                    { value: '100%', label: 'Cobertura CCTV' }
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