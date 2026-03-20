import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Users, 
  TrendingDown, 
  AlertTriangle, 
  ZapOff, 
  Search,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';
import { cn } from '../lib/utils';

export function Challenge() {
  const points = [
    "A TI mede muito esforço e pouca entrega de valor.",
    "As prioridades mudam a todo momento, sem critério transparente.",
    "A equipe de suporte apaga incêndios todos os dias e quase não tem tempo para melhorar o serviço.",
    "Não existe um modelo claro de governança. Cada gestor pede uma coisa e a TI tenta atender todos."
  ];

  const questions = [
    {
      q: "Como a TI vai provar valor para o negócio com indicadores relevantes?",
      icon: TrendingDown,
      color: "text-blue-500"
    },
    {
      q: "Como as decisões de TI vão ter critérios claros e responsáveis definidos?",
      icon: Users,
      color: "text-purple-500"
    },
    {
      q: "Como a gestão de serviços vai sair do modo reativo e evoluir com melhoria contínua?",
      icon: ZapOff,
      color: "text-amber-500"
    },
    {
      q: "Como a governança vai acompanhar performance e ajustar rotas com base em dados?",
      icon: Search,
      color: "text-emerald-500"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Desafio Estratégico</span>
            <InfoTooltip content="Contexto e objetivos centrais do projeto de governança." />
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight italic serif leading-[1.1] mb-8">
            Área de TI: trabalhando muito e entregando pouco valor. 
            <span className="block text-black/40">Como organizar performance com BSC, COBIT e ITIL</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Você foi contratado(a) como analista de governança de TI em uma empresa de médio porte do setor de serviços, com cerca de 600 colaboradores e operações em duas cidades.
          </p>
        </motion.div>
      </div>

      {/* The Context */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold italic serif border-b border-black/10 pb-4">O Cenário Atual</h2>
          <p className="text-muted-foreground leading-relaxed">
            A organização cresceu rápido nos últimos dois anos, aumentou o investimento em tecnologia e implantou novos sistemas para atendimento, financeiro e operações. 
            Mesmo com esse crescimento, a percepção da diretoria é clara: <strong>a TI está sempre ocupada, mas os resultados não aparecem do jeito esperado.</strong>
          </p>
          <div className="bg-red-50 border border-red-100 p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              Reclamações Recorrentes
            </div>
            <ul className="space-y-2 text-sm text-red-900/70">
              <li className="flex items-center gap-2">• Indisponibilidade em horários críticos</li>
              <li className="flex items-center gap-2">• Atraso em entregas prioritárias</li>
              <li className="flex items-center gap-2">• Custos subindo sem justificativa</li>
              <li className="flex items-center gap-2">• Dificuldade em demonstrar valor</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm space-y-8"
        >
          <h3 className="text-lg font-bold italic serif">Pontos Identificados</h3>
          <div className="space-y-6">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <span className="text-xs font-mono font-bold">0{i + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-black transition-colors">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* The Goal */}
      <div className="bg-[#141414] text-white p-12 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Target className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light italic serif mb-6">O que você precisa resolver</h2>
            <p className="text-white/60 leading-relaxed">
              O desafio é propor um modelo prático e viável de gestão de alta performance em TI para os próximos 90 dias, que conecte estratégia e execução, organize prioridades, estruture a governança e melhore a gestão de serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {questions.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className={cn("mb-4", item.color)}>
                  <HelpCircle className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium leading-relaxed">{item.q}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['BSC', 'COBIT', 'ITIL'].map((tech) => (
                  <div key={tech} className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold">
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40">Frameworks integrados para alta performance.</p>
            </div>
            <button className="px-8 py-4 bg-white text-black rounded-full text-sm font-bold flex items-center hover:bg-white/90 transition-all group">
              Iniciar Diagnóstico
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
