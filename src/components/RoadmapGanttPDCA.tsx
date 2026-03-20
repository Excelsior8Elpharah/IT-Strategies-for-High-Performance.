import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';
import { 
  Target, 
  Play, 
  CheckCircle2, 
  RotateCcw,
  ClipboardList,
  ArrowRight
} from 'lucide-react';

export function RoadmapGanttPDCA() {
  const today = 45;

  const pdcaPhases = [
    {
      id: 'P',
      title: 'Plan (Planejar)',
      icon: Target,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      info: "Cronograma das atividades de planejamento e definição de estratégia.",
      projects: [
        { name: "Definição de KPIs Estratégicos", start: 0, duration: 10, sprint: "S01", info: "Estabelecimento dos indicadores chave de performance." },
        { name: "Mapeamento de Processos ITIL", start: 5, duration: 15, sprint: "S01-S02", info: "Documentação e desenho dos fluxos de serviço de TI." },
        { name: "Análise de Riscos ISO 31000", start: 10, duration: 10, sprint: "S02", info: "Identificação e avaliação de riscos operacionais." },
      ]
    },
    {
      id: 'D',
      title: 'Do (Executar)',
      icon: Play,
      color: 'bg-amber-500',
      textColor: 'text-amber-600',
      info: "Cronograma de execução das iniciativas e treinamentos.",
      projects: [
        { name: "Treinamento em Governança", start: 20, duration: 15, sprint: "S02-S03", info: "Capacitação da equipe nos novos modelos de gestão." },
        { name: "Execução de Sprints Ágeis", start: 30, duration: 30, sprint: "S03-S04", info: "Ciclos de desenvolvimento e entrega contínua." },
        { name: "Implantação de Controles ISO 27001", start: 40, duration: 25, sprint: "S04-S05", info: "Aplicação de controles de segurança da informação." },
      ]
    },
    {
      id: 'C',
      title: 'Check (Verificar)',
      icon: CheckCircle2,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      info: "Cronograma de monitoramento, auditoria e checkpoints.",
      projects: [
        { name: "Análise de Dashboard Executivo", start: 50, duration: 20, sprint: "S04-S05", info: "Revisão periódica dos indicadores de performance." },
        { name: "Reuniões de Checkpoint Semanais", start: 60, duration: 20, sprint: "S05-S06", info: "Alinhamento tático e acompanhamento de progresso." },
        { name: "Auditorias de Conformidade", start: 70, duration: 15, sprint: "S06", info: "Verificação do cumprimento de normas e políticas." },
      ]
    },
    {
      id: 'A',
      title: 'Act (Agir)',
      icon: RotateCcw,
      color: 'bg-red-500',
      textColor: 'text-red-600',
      info: "Cronograma de ações corretivas e padronização.",
      projects: [
        { name: "Ações Corretivas (RCA)", start: 75, duration: 10, sprint: "S06", info: "Resolução de causas raiz identificadas no ciclo." },
        { name: "Padronização de Mudanças", start: 80, duration: 10, sprint: "S06", info: "Formalização de novos processos e melhorias." },
        { name: "Otimização de Fluxos de Trabalho", start: 85, duration: 5, sprint: "S06", info: "Refinamento final dos processos para o próximo ciclo." },
      ]
    }
  ];

  const consolidatedActions = [
    { action: "Checklist de Deploy (RCA)", owner: "DevOps", start: 0, duration: 2, source: "RCA", priority: "Crítica", info: "Padronização de deploys para evitar falhas recorrentes." },
    { action: "Monitoramento de Disco (RCA)", owner: "Infra", start: 0, duration: 7, source: "RCA", priority: "Alta", info: "Alertas preventivos para evitar indisponibilidade por falta de espaço." },
    { action: "Implementar Gestão de Problemas", owner: "Gestor TI", start: 15, duration: 30, source: "ITIL", priority: "Alta", info: "Processo formal para tratar causas raiz de incidentes." },
    { action: "Revisão de Contratos Cloud", owner: "Diretoria", start: 5, duration: 15, source: "FinOps", priority: "Média", info: "Otimização de custos de infraestrutura em nuvem." },
    { action: "Automação de Reset de Senhas", owner: "Equipe Ops", start: 30, duration: 45, source: "Agile", priority: "Alta", info: "Redução de carga de suporte através de self-service." },
    { action: "Revisão de Acessos IAM", owner: "Security", start: 10, duration: 20, source: "ISO 27001", priority: "Alta", info: "Garantia de que cada usuário tenha apenas os acessos necessários." },
    { action: "Plano de Continuidade (DRP)", owner: "Gestor TI", start: 45, duration: 45, source: "ISO 22301", priority: "Alta", info: "Estratégia de recuperação de desastres para sistemas críticos." },
    { action: "Auditoria de Conformidade LGPD", owner: "DPO/Legal", start: 60, duration: 30, source: "Compliance", priority: "Crítica", info: "Validação da proteção de dados pessoais conforme a lei." },
    { action: "Otimização de Custos SaaS", owner: "FinOps", start: 20, duration: 30, source: "FinOps", priority: "Média", info: "Redução de desperdício em assinaturas de software não utilizadas." }
  ];

  const days = [0, 15, 30, 45, 60, 75, 90];

  return (
    <div className="space-y-12">
      <div className="border-b border-black/10 pb-6">
        <h2 className="text-3xl font-light tracking-tight italic serif flex items-center">
          Roadmap Gantt (Ciclo PDCA)
          <InfoTooltip content="Visualização temporal das etapas do PDCA ao longo de 90 dias." />
        </h2>
        <p className="text-muted-foreground mt-2">Cronograma estratégico de 90 dias estruturado pelas fases do ciclo de melhoria contínua.</p>
      </div>

      <div className="space-y-16">
        {pdcaPhases.map((phase, i) => (
          <div key={phase.id} className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white", phase.color)}>
                  <phase.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold italic serif">{phase.title}</h3>
              </div>
              <InfoTooltip content={phase.info} />
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

                {/* Days Header */}
                <div className="flex border-b border-black/5 pb-4 mb-6">
                  <div className="w-64 shrink-0 flex items-center gap-1">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Iniciativa</span>
                    <InfoTooltip content="Projeto ou atividade estratégica mapeada no roadmap." />
                  </div>
                  <div className="flex-1 flex justify-between px-4">
                    {days.map(day => (
                      <div key={day} className="text-[10px] font-mono opacity-40">Dia {day}</div>
                    ))}
                  </div>
                </div>

                {/* Rows */}
                <div className="space-y-6">
                  {phase.projects.map((p, j) => (
                    <div key={j} className="flex items-center group">
                      <div className="w-64 shrink-0 flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium group-hover:text-blue-600 transition-colors truncate">{p.name}</div>
                          <div className="text-[10px] opacity-30 font-bold uppercase tracking-tighter">{p.sprint}</div>
                        </div>
                        <InfoTooltip content={p.info} />
                      </div>
                      <div className="flex-1 relative h-6 bg-black/[0.02] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0, x: `${(p.start / 90) * 100}%` }}
                          animate={{ width: `${(p.duration / 90) * 100}%`, x: `${(p.start / 90) * 100}%` }}
                          transition={{ duration: 1, delay: (i * 3 + j) * 0.1 }}
                          className={cn(
                            "absolute h-full rounded-full shadow-sm flex items-center justify-center text-[10px] text-white font-bold transition-opacity",
                            p.start + p.duration <= today ? "opacity-60" : "opacity-100",
                            phase.color
                          )}
                        >
                          {p.duration}d
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Plano de Ação Consolidado Gantt */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-6 h-6 opacity-40" />
            <h3 className="text-xl font-medium italic serif">Gantt: Plano de Ação Consolidado</h3>
          </div>
          <InfoTooltip content="Cronograma detalhado de todas as ações estratégicas unificadas." />
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

            {/* Days Header */}
            <div className="flex border-b border-black/5 pb-4 mb-6">
              <div className="w-64 shrink-0 flex items-center gap-1">
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Ação Estratégica</span>
                <InfoTooltip content="Ação corretiva ou preventiva unificada para execução no plano." />
              </div>
              <div className="flex-1 flex justify-between px-4">
                {days.map(day => (
                  <div key={day} className="text-[10px] font-mono opacity-40">Dia {day}</div>
                ))}
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-6">
              {consolidatedActions.map((a, i) => (
                <div key={i} className="flex items-center group">
                  <div className="w-64 shrink-0 flex items-center gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium group-hover:text-blue-600 transition-colors truncate pr-4" title={a.action}>{a.action}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] opacity-30 font-bold uppercase tracking-tighter">{a.owner}</span>
                        <span className="text-[8px] px-1 bg-black/5 rounded text-black/40 font-bold uppercase">{a.source}</span>
                      </div>
                    </div>
                    <InfoTooltip content={a.info} />
                  </div>
                  <div className="flex-1 relative h-6 bg-black/[0.02] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0, x: `${(a.start / 90) * 100}%` }}
                      animate={{ width: `${(a.duration / 90) * 100}%`, x: `${(a.start / 90) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className={cn(
                        "absolute h-full rounded-full shadow-sm flex items-center justify-center text-[10px] text-white font-bold transition-opacity",
                        a.start + a.duration <= today ? "opacity-60" : "opacity-100",
                        a.priority === 'Crítica' ? "bg-red-600" : a.priority === 'Alta' ? "bg-red-500" : "bg-amber-500"
                      )}
                    >
                      {a.duration}d
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] text-white p-8 rounded-3xl">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-medium italic serif">Sincronização do Ciclo</h4>
          <InfoTooltip content="Explicação sobre como as fases do PDCA se integram no tempo." className="invert" />
        </div>
        <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
          Este roadmap garante que as quatro fases do PDCA ocorram de forma orquestrada ao longo dos 90 dias. 
          O planejamento inicial (Plan) alimenta a execução (Do), que é constantemente validada (Check) para gerar as correções necessárias (Act), criando um ciclo virtuoso de governança.
        </p>
      </div>
    </div>
  );
}
