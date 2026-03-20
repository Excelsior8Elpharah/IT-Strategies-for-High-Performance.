import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function GanttRoadmap() {
  const today = 45; // Simulating today is at day 45

  const projects = [
    { name: "Diagnóstico & Baseline", start: 0, duration: 15, color: "bg-red-500", sprint: "S01", category: "Agile Ops" },
    { name: "SLA & Catálogo de Serviços", start: 10, duration: 20, color: "bg-red-400", sprint: "S02", category: "Agile Ops" },
    { name: "Dashboard BSC & KPIs", start: 30, duration: 25, color: "bg-amber-500", sprint: "S03", category: "Agile Ops" },
    { name: "Processos ITIL & Automação", start: 40, duration: 30, color: "bg-amber-400", sprint: "S04", category: "Agile Ops" },
    { name: "ISO 27001 Setup & Compliance", start: 60, duration: 30, color: "bg-green-500", sprint: "S05", category: "Agile Ops" },
    { name: "Otimização Contínua Ops", start: 75, duration: 15, color: "bg-green-400", sprint: "S06", category: "Agile Ops" },
  ];

  const sprints = [
    { name: "S01", start: 0, end: 15, status: "done" },
    { name: "S02", start: 15, end: 30, status: "done" },
    { name: "S03", start: 30, end: 45, status: "done" },
    { name: "S04", start: 45, end: 60, status: "active" },
    { name: "S05", start: 60, end: 75, status: "upcoming" },
    { name: "S06", start: 75, end: 90, status: "upcoming" },
  ];

  const days = [0, 15, 30, 45, 60, 75, 90];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-light tracking-tight italic serif">Roadmap Gantt: Operações Ágeis</h2>
          <InfoTooltip content="O Gráfico de Gantt fornece uma visão cronológica detalhada das iniciativas de Operações Ágeis, permitindo o acompanhamento do progresso e a gestão de dependências." />
        </div>
        <p className="text-muted-foreground mt-2">Visão cronológica de 90 dias com status de Sprints (Concluídas, Em Andamento e Próximas).</p>
      </div>

      <div className="bg-white border border-black/5 rounded-3xl p-8 overflow-x-auto relative">
        <div className="min-w-[800px] relative">
          
          {/* Today Indicator Line */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-blue-500 z-10 flex flex-col items-center"
            style={{ left: `calc(16rem + ${(today / 90) * 100}% - 1px)` }}
          >
            <div className="bg-blue-500 text-white text-[8px] font-bold px-1 rounded-sm -translate-y-full mb-1 uppercase">Hoje</div>
          </div>

          {/* Sprints Header */}
          <div className="flex mb-4">
            <div className="w-64 shrink-0" />
            <div className="flex-1 flex px-4">
              {sprints.map((s, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex-1 text-center py-2 border-l border-black/5 first:border-l-0 transition-all",
                    s.status === 'done' ? "opacity-40" : s.status === 'active' ? "bg-blue-50/50 border-x border-blue-200 opacity-100" : "opacity-20"
                  )}
                  style={{ flexBasis: `${(15/90)*100}%` }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest">{s.name}</div>
                    {i === 0 && <InfoTooltip content="Divisão do roadmap em ciclos iterativos (Sprints) de 15 dias, garantindo entregas rápidas e frequentes de valor ao negócio." />}
                  </div>
                  <div className="text-[8px] uppercase tracking-tighter font-medium">
                    {s.status === 'done' ? 'Concluída' : s.status === 'active' ? 'Em Andamento' : 'Próxima'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Days Header */}
          <div className="flex border-b border-black/5 pb-4 mb-6">
            <div className="w-64 shrink-0 text-[10px] uppercase tracking-widest opacity-40 font-bold">Iniciativa Agile Ops</div>
            <div className="flex-1 flex justify-between px-4">
              {days.map(day => (
                <div key={day} className="text-[10px] font-mono opacity-40">Dia {day}</div>
              ))}
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-6">
            {projects.map((p, i) => (
              <div key={i} className="flex items-center group">
                <div className="w-64 shrink-0 flex items-center justify-between pr-4">
                  <div>
                    <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">{p.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] opacity-30 font-bold uppercase tracking-tighter">{p.sprint}</span>
                      <span className="text-[8px] px-1 bg-black/5 rounded text-black/40 font-bold uppercase">{p.category}</span>
                    </div>
                  </div>
                  {i === 0 && <InfoTooltip content="Lista de projetos e atividades planejadas para os 90 dias, com indicação de duração, categoria e status atual." />}
                </div>
                <div className="flex-1 relative h-8 bg-black/[0.02] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0, x: `${(p.start / 90) * 100}%` }}
                    animate={{ width: `${(p.duration / 90) * 100}%`, x: `${(p.start / 90) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={cn(
                      "absolute h-full rounded-full shadow-sm flex items-center justify-center text-[10px] text-white font-bold transition-opacity",
                      p.start + p.duration <= today ? "opacity-60" : "opacity-100",
                      p.color
                    )}
                  >
                    {p.duration}d
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-black/5 flex flex-wrap gap-8 items-center">
            <div className="flex items-center text-[10px] uppercase tracking-widest opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2" /> Fase 1: Fundação
            </div>
            <div className="flex items-center text-[10px] uppercase tracking-widest opacity-50">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2" /> Fase 2: Estrutura
            </div>
            <div className="flex items-center text-[10px] uppercase tracking-widest opacity-50">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2" /> Fase 3: Maturidade
            </div>
            <InfoTooltip content="Cores e indicadores que facilitam a leitura do roadmap, identificando as fases de Fundação, Estrutura e Maturidade da TI." />
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center text-[10px] uppercase tracking-widest opacity-30">
                <div className="w-4 h-1 bg-black/20 mr-2" /> Concluído
              </div>
              <div className="flex items-center text-[10px] uppercase tracking-widest">
                <div className="w-4 h-1 bg-blue-500 mr-2" /> Em Andamento
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
