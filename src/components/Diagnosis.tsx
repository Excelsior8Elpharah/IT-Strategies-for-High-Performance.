import React from 'react';
import { 
  TrendingDown, 
  AlertTriangle, 
  ZapOff, 
  Users, 
  EyeOff,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function Diagnosis() {
  const baseline = [
    { label: "Disponibilidade Canais", current: "94%", target: "99.9%", unit: "%", status: "critical", info: "Uptime dos sistemas de voz (PABX/IP) e chat integrados ao banco." },
    { label: "SLA de Atendimento", current: "72%", target: "95%", unit: "%", status: "critical", info: "Percentual de chamadas atendidas dentro do tempo regulamentar (SAC/Ouvidoria)." },
    { label: "TMA (Média)", current: "8.5m", target: "5.5m", unit: "min", status: "warning", info: "Tempo Médio de Atendimento para produtos de Financiamento e FGTS." },
    { label: "Taxa de Abandono", current: "12%", target: "< 3%", unit: "%", status: "critical", info: "Percentual de clientes que desistem da espera no chat ou voz." },
    { label: "NPS (Satisfação)", current: "58", target: "85", unit: "pts", status: "warning", info: "Net Promoter Score dos clientes finais do banco atendidos pela terceirizada." },
    { label: "Incidentes de Integração", current: "15/mês", target: "< 2/mês", unit: "", status: "critical", info: "Falhas na sincronização de dados entre a terceirizada e o core banking." },
  ];

  const problems = [
    {
      title: "Latência em Sistemas Bancários",
      desc: "Instabilidade nas APIs de consulta de saldo FGTS e margem consignável impactam o tempo de atendimento.",
      icon: TrendingDown,
      color: "text-red-400",
      info: "Gargalos técnicos na integração com o banco parceiro."
    },
    {
      title: "Risco de Desconformidade",
      desc: "Processos de gravação e auditoria de voz com falhas intermitentes, gerando risco regulatório (BACEN).",
      icon: AlertTriangle,
      color: "text-amber-400",
      info: "Ausência de redundância em sistemas de compliance e gravação."
    },
    {
      title: "Silos de Atendimento",
      desc: "Áreas de SAC, Retenção e Ouvidoria usam bases de conhecimento distintas, gerando informações conflitantes.",
      icon: ZapOff,
      color: "text-orange-400",
      info: "Falta de uma plataforma unificada de CRM e Conhecimento."
    },
    {
      title: "Shadow IT em Operações",
      desc: "Setores criam planilhas paralelas para controle de metas por falta de confiança nos dashboards oficiais.",
      icon: Users,
      color: "text-blue-400",
      info: "Descentralização de dados e falta de governança sobre as ferramentas de apoio."
    },
    {
      title: "Custo de Ineficiência",
      desc: "A TI é vista como suporte de hardware, ignorando o papel estratégico na conversão de retenção e vendas.",
      icon: EyeOff,
      color: "text-purple-400",
      info: "Dificuldade em correlacionar estabilidade técnica com batimento de metas de negócio."
    }
  ];

  return (
    <div className="space-y-12">
      <div className="border-b border-black/10 pb-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight italic serif flex items-center">
          Diagnóstico: Operação de Teleatendimento Bancário
          <InfoTooltip content="Análise detalhada do estado atual da TI na terceirizada, focando em canais de voz, chat e produtos financeiros." />
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2">Cenário atual: Alta dependência de sistemas legados e integrações instáveis com o banco parceiro.</p>
      </div>

      {/* Baseline Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {baseline.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={i}
            className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{item.label}</p>
              <InfoTooltip content={item.info} />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-mono font-bold">{item.current}</span>
                <span className="text-xs text-muted-foreground ml-1">{item.unit}</span>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Meta 90d</p>
                  <InfoTooltip content="Objetivo estratégico a ser atingido ao final do plano de 90 dias." />
                </div>
                <p className="text-sm font-bold text-green-600">{item.target}</p>
              </div>
            </div>
            <div className={cn(
              "mt-4 h-1 w-full rounded-full bg-black/5 overflow-hidden"
            )}>
              <div className={cn(
                "h-full",
                item.status === 'critical' ? "bg-red-500 w-1/3" : "bg-amber-500 w-2/3"
              )} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {problems.map((p, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn(p.color)}>
                <p.icon className="w-6 h-6" />
              </div>
              <InfoTooltip content={p.info} />
            </div>
            <h3 className="font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#141414] text-white p-8 rounded-3xl mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-medium italic serif">Conclusão do Diagnóstico</h3>
            <InfoTooltip content="Resumo executivo das ações prioritárias para reverter o cenário atual." className="invert" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            A organização precisa de uma transição imediata de um modelo de "Suporte Técnico" para um modelo de "Gestão de Serviços e Valor". O plano de 90 dias atacará a raiz desses problemas focando em **estabilização**, **governança** e **visibilidade**.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-4">
          <InfoTooltip content="Clique para avançar para a próxima etapa da estratégia." className="invert" />
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group hover:border-white/40 transition-colors cursor-pointer">
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
