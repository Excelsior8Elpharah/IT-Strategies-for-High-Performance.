import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Play, 
  CheckCircle2, 
  RotateCcw,
  ArrowRight,
  ClipboardList,
  User,
  Calendar
} from 'lucide-react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function PDCACycle() {
  const steps = [
    {
      id: 'P',
      title: 'Plan (Planejar)',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      desc: 'Definir objetivos, indicadores e processos necessários para entregar resultados.',
      items: ['Definição de KPIs Estratégicos', 'Mapeamento de Processos ITIL', 'Análise de Riscos ISO 31000'],
      info: "Fase de planejamento estratégico e definição de metas claras."
    },
    {
      id: 'D',
      title: 'Do (Executar)',
      color: 'bg-amber-500',
      textColor: 'text-amber-600',
      desc: 'Implementar os processos e executar o plano de ação conforme definido.',
      items: ['Treinamento em Governança', 'Execução de Sprints Ágeis', 'Implantação de Controles ISO 27001'],
      info: "Execução prática das ações planejadas e treinamento da equipe."
    },
    {
      id: 'C',
      title: 'Check (Verificar)',
      color: 'bg-green-500',
      textColor: 'text-green-600',
      desc: 'Monitorar e medir processos e produtos em relação às políticas e objetivos.',
      items: ['Análise de Dashboard Executivo', 'Reuniões de Checkpoint Semanais', 'Auditorias de Conformidade'],
      info: "Monitoramento contínuo dos resultados e validação das metas."
    },
    {
      id: 'A',
      title: 'Act (Agir)',
      color: 'bg-red-500',
      textColor: 'text-red-600',
      desc: 'Tomar ações para melhorar continuamente o desempenho dos processos.',
      items: ['Ações Corretivas (RCA)', 'Padronização de Mudanças', 'Otimização de Fluxos de Trabalho'],
      info: "Ajustes e melhorias baseadas nas verificações da fase anterior."
    }
  ];

  const consolidatedActions = [
    { action: "Checklist de Deploy (RCA)", owner: "DevOps", deadline: "Imediato", source: "RCA", priority: "Crítica", info: "Padronização do processo de deploy para evitar erros humanos recorrentes." },
    { action: "Monitoramento de Disco (RCA)", owner: "Infra", deadline: "7 dias", source: "RCA", priority: "Alta", info: "Implementação de alertas preventivos de capacidade de armazenamento." },
    { action: "Implementar Gestão de Problemas", owner: "Gestor TI", deadline: "30 dias", source: "ITIL", priority: "Alta", info: "Processo formal para identificar e eliminar causas raiz de incidentes." },
    { action: "Revisão de Contratos Cloud", owner: "Diretoria", deadline: "15 dias", source: "FinOps", priority: "Média", info: "Análise de faturamento e otimização de recursos em nuvem (FinOps)." },
    { action: "Automação de Reset de Senhas", owner: "Equipe Ops", deadline: "45 dias", source: "Agile", priority: "Alta", info: "Redução de volume de chamados básicos através de autoatendimento." },
    { action: "Revisão de Acessos IAM", owner: "Security", deadline: "20 dias", source: "ISO 27001", priority: "Alta", info: "Garantia do princípio de privilégio mínimo em sistemas críticos." },
    { action: "Plano de Continuidade (DRP)", owner: "Gestor TI", deadline: "60 dias", source: "ISO 22301", priority: "Alta", info: "Estratégia de recuperação de desastres para garantir resiliência do negócio." },
    { action: "Auditoria de Conformidade LGPD", owner: "DPO/Legal", deadline: "90 dias", source: "Compliance", priority: "Crítica", info: "Verificação da proteção de dados pessoais conforme a legislação vigente." },
    { action: "Otimização de Custos SaaS", owner: "FinOps", deadline: "30 dias", source: "FinOps", priority: "Média", info: "Identificação e cancelamento de licenças de software subutilizadas." }
  ];

  return (
    <div className="space-y-12">
      <div className="border-b border-black/10 pb-6">
        <h2 className="text-3xl font-light tracking-tight italic serif flex items-center">
          Ciclo PDCA
          <InfoTooltip content="Metodologia iterativa de gestão para controle e melhoria contínua de processos e produtos." />
        </h2>
        <p className="text-muted-foreground mt-2">Metodologia de melhoria contínua aplicada à Governança de TI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Center Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex w-20 h-20 bg-white border border-black/5 rounded-full items-center justify-center z-10 shadow-xl">
          <RotateCcw className="w-8 h-8 text-black/20 animate-spin-slow" />
        </div>

        {steps.map((step, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={step.id} 
            className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm relative group"
          >
            <div className={cn("absolute top-0 left-0 w-2 h-full", step.color)} />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl", step.color)}>
                  {step.id}
                </div>
                <h3 className="text-xl font-bold italic serif">{step.title}</h3>
              </div>
              <InfoTooltip content={step.info} />
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
            <div className="space-y-3">
              {step.items.map((item, j) => (
                <div key={j} className="flex items-center text-xs font-medium">
                  <ArrowRight className={cn("w-3 h-3 mr-2", step.textColor)} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Plano de Ação Consolidado */}
      <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-6 h-6 opacity-40" />
            <h3 className="text-xl font-medium italic serif">Plano de Ação Consolidado</h3>
            <InfoTooltip content="Lista unificada de todas as ações corretivas e preventivas identificadas no ciclo." />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-black/5">
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
                  <div className="flex items-center gap-1">
                    Ação
                    <InfoTooltip content="Descrição da atividade a ser executada." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
                  <div className="flex items-center gap-1">
                    Origem
                    <InfoTooltip content="Framework ou processo que originou esta ação." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
                  <div className="flex items-center gap-1">
                    Responsável
                    <InfoTooltip content="Pessoa ou equipe encarregada da execução." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
                  <div className="flex items-center gap-1">
                    Prazo
                    <InfoTooltip content="Data limite para a conclusão da ação." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-right">
                  <div className="flex items-center justify-end gap-1">
                    Prioridade
                    <InfoTooltip content="Nível de urgência e impacto da ação no negócio." />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {consolidatedActions.map((a, i) => (
                <tr key={i} className="group hover:bg-black/[0.01] transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        a.priority === 'Crítica' ? "bg-red-600" : a.priority === 'Alta' ? "bg-red-500" : "bg-amber-500"
                      )} />
                      <span className="text-sm font-medium">{a.action}</span>
                      <InfoTooltip content={a.info} />
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-black/5 rounded uppercase tracking-tighter">
                      {a.source}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{a.owner}</td>
                  <td className="py-4 text-sm text-muted-foreground">{a.deadline}</td>
                  <td className="py-4 text-right">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest",
                      a.priority === 'Crítica' ? "text-red-600" : a.priority === 'Alta' ? "text-red-500" : "text-amber-500"
                    )}>
                      {a.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#141414] text-white p-8 rounded-3xl">
        <h4 className="text-lg font-medium italic serif mb-4">Aplicação no Plano de 90 Dias</h4>
        <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
          O PDCA não é um evento único, mas um motor. No primeiro mês focamos no **Plan**, no segundo no **Do** e **Check**, e no terceiro consolidamos o **Act** para garantir que a governança se torne parte da cultura da empresa.
        </p>
      </div>
    </div>
  );
}
