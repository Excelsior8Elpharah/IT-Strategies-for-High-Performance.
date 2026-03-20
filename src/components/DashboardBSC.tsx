import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'motion/react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert,
  ArrowUpRight,
  Target
} from 'lucide-react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

const trendData = [
  { month: 'Jan', sla: 92, incidents: 12 },
  { month: 'Fev', sla: 94, incidents: 8 },
  { month: 'Mar', sla: 93, incidents: 5 },
];

const pillars = [
  {
    title: "Operação e Canais",
    status: "warning",
    info: "Métricas de estabilidade dos canais de voz e chat, fundamentais para o teleatendimento.",
    metrics: [
      { label: "Uptime PABX/Voz", baseline: "94%", value: "95.2%", target: "99.9%", trend: "up", info: "Disponibilidade da infraestrutura de telefonia IP." },
      { label: "SLA SAC/Ouvidoria", baseline: "72%", value: "75%", target: "95%", trend: "up", info: "Atendimento de chamadas dentro do tempo regulamentar." },
      { label: "Abandono (Voz/Chat)", baseline: "12%", value: "10.5%", target: "< 3%", trend: "down", info: "Percentual de desistência na fila de espera." }
    ],
    impact: "Multas contratuais por descumprimento de SLA de atendimento bancário.",
    roi: "Redução de 5% no abandono recupera R$ 200k/mês em conversão de retenção."
  },
  {
    title: "Produtos e Negócio",
    status: "warning",
    info: "Performance técnica das integrações com os sistemas de financiamento e crédito.",
    metrics: [
      { label: "API Consignado", baseline: "85%", value: "88%", target: "98%", trend: "up", info: "Sucesso nas consultas de margem e averbação." },
      { label: "Conversão FGTS", baseline: "12%", value: "14%", target: "20%", trend: "up", info: "Taxa de sucesso técnico no processamento de saques-aniversário." },
      { label: "Latência Financiamento", baseline: "4s", value: "3.2s", target: "< 1s", trend: "down", info: "Tempo de resposta do sistema de análise de crédito de veículos." }
    ],
    impact: "Lentidão no sistema de financiamento causa perda de leads para a concorrência.",
    roi: "Redução de latência aumenta em 15% a produtividade dos operadores de vendas."
  },
  {
    title: "Eficiência Operacional",
    status: "success",
    info: "Otimização de custos através de automação de processos repetitivos (RPA).",
    metrics: [
      { label: "Automação Backoffice", baseline: "5%", value: "25%", target: "30%", trend: "up", info: "Processos de conferência de documentos automatizados via OCR/RPA." },
      { label: "Custo por Atendimento", baseline: "R$ 12", value: "R$ 9.50", target: "R$ 8.00", trend: "down", info: "Custo total de TI rateado pelo volume de atendimentos." },
      { label: "Self-Service (Bot)", baseline: "10%", value: "22%", target: "40%", trend: "up", info: "Percentual de resoluções via Chatbot sem intervenção humana." }
    ],
    impact: "Redução de 20% no head-count necessário para tarefas manuais de conferência.",
    roi: "Automação de conferência de FGTS economiza R$ 85k/mês em horas extras."
  },
  {
    title: "Compliance e Risco",
    status: "danger",
    info: "Segurança de dados bancários e conformidade com normas do BACEN e LGPD.",
    metrics: [
      { label: "Gravação de Voz", baseline: "88%", value: "92%", target: "100%", trend: "up", info: "Integridade das gravações para fins de auditoria e ouvidoria." },
      { label: "Vazamento de Dados", baseline: "2", value: "0", target: "0", trend: "down", info: "Incidentes de segurança envolvendo dados de clientes bancários." },
      { label: "Acesso Privilegiado", baseline: "45", value: "12", target: "0", trend: "down", info: "Contas com acesso excessivo a dados sensíveis de consignado." }
    ],
    impact: "Risco de descredenciamento junto ao banco parceiro por falha de segurança.",
    roi: "Conformidade total evita multas que podem chegar a 2% do faturamento anual."
  }
];

const actions = [
  { action: "Implementar Gestão de Problemas (ITIL)", owner: "Gestor TI", deadline: "30 dias", priority: "Alta" },
  { action: "Revisão de Contratos Cloud (FinOps)", owner: "Diretoria", deadline: "15 dias", priority: "Média" },
  { action: "Automação de Reset de Senhas", owner: "Equipe Ops", deadline: "45 dias", priority: "Alta" }
];

export function DashboardBSC() {
  return (
    <div className="space-y-8">
      {/* Header Executivo */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <h2 className="text-3xl font-light tracking-tight italic serif flex items-center">
            Dashboard Estratégico de TI
            <InfoTooltip content="Visão consolidada dos indicadores de performance alinhados aos objetivos de negócio." />
          </h2>
          <p className="text-muted-foreground mt-2">Visão executiva: Conexão direta entre métricas técnicas e impacto financeiro.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-red-50 border border-red-100 rounded-xl flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
            <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Risco Crítico: Segurança</span>
            <InfoTooltip content="Alerta de segurança: Vulnerabilidades críticas detectadas que exigem ação imediata." />
          </div>
        </div>
      </div>

      {/* Grid de Pilares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={cn(
                "bg-white border p-6 rounded-2xl shadow-sm relative",
                p.status === 'danger' ? "border-red-100" : "border-black/5"
              )}
            >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold italic serif">{p.title}</h3>
                  <InfoTooltip content={p.info} />
                </div>
                <div className={cn(
                  "text-[10px] font-bold uppercase tracking-widest mt-1 px-2 py-0.5 rounded inline-block",
                  p.status === 'success' ? "bg-green-100 text-green-700" : 
                  p.status === 'warning' ? "bg-amber-100 text-amber-700" : 
                  "bg-red-100 text-red-700"
                )}>
                  {p.status === 'success' ? "Estável" : p.status === 'warning' ? "Atenção" : "Crítico"}
                </div>
              </div>
              {p.status === 'danger' && <ShieldAlert className="w-5 h-5 text-red-500" />}
            </div>

            <div className="space-y-4 mb-6">
              {p.metrics.map((m, j) => (
                <div key={j} className="flex items-center justify-between group">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">{m.label}</span>
                      <InfoTooltip content={m.info} />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] opacity-40 uppercase tracking-widest leading-none">Baseline</span>
                        <span className="text-xs font-mono opacity-60">{m.baseline}</span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 opacity-20" />
                      <div className="flex flex-col">
                        <span className="text-[10px] opacity-40 uppercase tracking-widest leading-none">Atual</span>
                        <span className="text-lg font-mono font-bold">{m.value}</span>
                      </div>
                      <div className="flex flex-col ml-2">
                        <span className="text-[10px] opacity-40 uppercase tracking-widest leading-none">Meta</span>
                        <span className="text-xs font-mono font-bold text-green-600">{m.target}</span>
                      </div>
                    </div>
                  </div>
                  {m.trend !== 'none' && (
                    <div className={cn(
                      "p-1.5 rounded-full",
                      (m.trend === 'up' && p.title !== 'Estabilidade' && p.title !== 'Riscos') || (m.trend === 'down' && (p.title === 'Estabilidade' || p.title === 'Riscos')) ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    )}>
                      {m.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-black/5 space-y-3">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Impacto Financeiro</p>
                  <InfoTooltip content="Estimativa de perda ou ganho financeiro relacionado a este pilar." />
                </div>
                <p className="text-xs italic leading-relaxed text-red-600 font-medium">{p.impact}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-[10px] uppercase tracking-widest text-green-700 font-bold">ROI / Ganho Estimado</p>
                  <InfoTooltip content="Retorno sobre o Investimento ou benefício tangível esperado com as melhorias." />
                </div>
                <p className="text-xs text-green-800 leading-relaxed">{p.roi}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bloco de Ações e Decisões */}
      <div className="bg-[#141414] text-white p-8 rounded-3xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-white/60" />
            <h3 className="text-xl font-medium italic serif">Plano de Ação e Próximos Passos</h3>
            <InfoTooltip content="Ações estratégicas priorizadas para atingir as metas de 90 dias." className="invert" />
          </div>
          <span className="text-[10px] uppercase tracking-widest opacity-40">Atualizado em: 17 Mar 2026</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-medium">Ação Estratégica</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-medium">Responsável</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-medium">Prazo</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-medium text-right">Prioridade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {actions.map((a, i) => (
                <tr key={i} className="group hover:bg-white/5 transition-colors">
                  <td className="py-4 text-sm font-medium">{a.action}</td>
                  <td className="py-4 text-sm text-white/60">{a.owner}</td>
                  <td className="py-4 text-sm text-white/60">{a.deadline}</td>
                  <td className="py-4 text-right">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter",
                      a.priority === 'Alta' ? "bg-red-500/20 text-red-400" : "bg-white/10 text-white/60"
                    )}>
                      {a.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-between items-center">
          <p className="text-xs text-white/40 max-w-md">
            Este relatório foca em indicadores que impactam diretamente a continuidade e o crescimento do negócio. Itens em vermelho requerem atenção imediata da diretoria para destravamento de recursos.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-bold flex items-center hover:bg-white/90 transition-colors">
            Exportar Relatório Completo
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
