import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function Timeline90Days() {
  const phases = [
    {
      period: "Mês 1 (Sprints 01-02)",
      title: "Organizar o Caos",
      color: "bg-red-500",
      tasks: [
        "Levantamento de indicadores atuais (Baseline)",
        "Criação do Catálogo de Serviços e SLA básico",
        "Definição de critérios de prioridade",
        "Instituição do Comitê de TI semanal"
      ],
      sprints: ["S01: Inventário", "S02: Estabilização I"]
    },
    {
      period: "Mês 2 (Sprints 03-04)",
      title: "Estruturar a Governança",
      color: "bg-amber-500",
      tasks: [
        "Implementação do Dashboard BSC",
        "Formalização de papéis COBIT (Accountability)",
        "Padronização de processos ITIL (Incidentes/Mudanças)",
        "Treinamento da equipe nos novos fluxos"
      ],
      sprints: ["S03: Processos", "S04: Governança"]
    },
    {
      period: "Mês 3 (Sprints 05-06)",
      title: "Otimizar e Gerar Valor",
      color: "bg-green-500",
      tasks: [
        "Implantação da Gestão de Problemas (Causa Raiz)",
        "Automação de processos recorrentes",
        "Redução drástica de incidentes repetitivos",
        "Apresentação de resultados estratégicos à Diretoria"
      ],
      sprints: ["S05: Automação", "S06: Valor"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight italic serif">Roadmap Estratégico & Sprints</h2>
          <InfoTooltip content="O Roadmap Estratégico de 90 dias define os marcos críticos e a sequência de ações para transformar a TI de um centro de custo em um parceiro estratégico." />
        </div>
        <p className="text-sm md:text-base text-muted-foreground mt-2">Cronograma de 90 dias com visão de Sprints e marcos de governança.</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-black/10" />

        <div className="space-y-8 md:space-y-12">
          {phases.map((phase, i) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              className="relative pl-10 md:pl-20"
            >
              {/* Dot */}
              <div className={cn(
                "absolute left-2 md:left-6 top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm",
                phase.color
              )} />

              <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div>
                      <span className={cn("text-[10px] font-bold text-white px-2 py-1 rounded uppercase tracking-widest", phase.color)}>
                        {phase.period}
                      </span>
                      <h3 className="text-2xl font-medium italic serif mt-2">{phase.title}</h3>
                    </div>
                    <InfoTooltip content="Cada fase do roadmap foca em objetivos específicos, desde a estabilização operacional até a entrega de valor estratégico ao negócio." />
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-2">
                    {phase.sprints.map((s, idx) => (
                      <div key={idx} className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-black/5">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.tasks.map((task, j) => (
                    <div key={j} className="flex items-start p-3 bg-[#f9f9f9] rounded-xl border border-black/5">
                      <CheckCircle2 className="w-4 h-4 mr-3 text-black/20 mt-0.5" />
                      <span className="text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-black/5 rounded-2xl bg-white text-center relative">
          <div className="absolute top-2 right-2">
            <InfoTooltip content="Mecanismos de controle e comunicação para garantir o alinhamento constante entre a execução técnica e as expectativas da diretoria." />
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Checkpoints</p>
          <p className="text-sm font-bold">Reunião Semanal</p>
        </div>
        <div className="p-6 border border-black/5 rounded-2xl bg-white text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Entregáveis</p>
          <p className="text-sm font-bold">Relatório Mensal</p>
        </div>
        <div className="p-6 border border-black/5 rounded-2xl bg-white text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Visibilidade</p>
          <p className="text-sm font-bold">Dashboard Real-time</p>
        </div>
      </div>
    </div>
  );
}
