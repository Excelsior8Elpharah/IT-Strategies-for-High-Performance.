import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ListTodo, 
  Layers, 
  Users, 
  CheckCircle2,
  Clock,
  TrendingUp,
  TrendingDown,
  BarChart3,
  AlertCircle,
  Calendar
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

const velocityData = [
  { sprint: 'S08', points: 32 },
  { sprint: 'S09', points: 35 },
  { sprint: 'S10', points: 38 },
  { sprint: 'S11', points: 40 },
  { sprint: 'S12', points: 42 },
  { sprint: 'S13', points: 45 },
];

const sprintHistory = [
  { id: 12, name: "Estabilização", status: "Done", delivery: "100%", focus: "Infra & Monitoramento" },
  { id: 11, name: "Segurança I", status: "Done", delivery: "95%", focus: "IAM & MFA" },
  { id: 10, name: "Fundação", status: "Done", delivery: "88%", focus: "Inventário & Baseline" },
];

export function AgileOps() {
  const backlog = [
    { task: "API Consignado: Retry Logic", priority: "Alta", status: "Backlog", owner: "Squad Consignado", info: "Implementação de lógica de re-tentativa automática em falhas de timeout da API do banco." },
    { task: "Dashboard Retenção v2", priority: "Média", status: "Sprint", owner: "Squad Retenção", info: "Novos KPIs de conversão e motivos de cancelamento integrados ao CRM." },
    { task: "Segurança: Auditoria Voz", priority: "Crítica", status: "Backlog", owner: "Squad Compliance", info: "Garantir que 100% das chamadas de Ouvidoria sejam gravadas e indexadas." },
    { task: "Bot FGTS: Fluxo Saque", priority: "Alta", status: "Done", owner: "Squad FGTS", info: "Automação do fluxo de consulta de saldo via Chatbot." },
    { task: "Otimização PABX/IP", priority: "Média", status: "Backlog", owner: "Infra/Voz", info: "Redução de latência em chamadas internacionais e rotas de backup." },
    { task: "Criptografia Dados Cartão", priority: "Crítica", status: "Backlog", owner: "Security", info: "Implementação de HSM para proteção de dados sensíveis em trânsito." }
  ];

  const sprint = {
    name: "Sprint #13 - Estabilização Crédito",
    progress: 45,
    daysLeft: 6,
    goals: [
      "Reduzir TMA de Financiamento em 10%",
      "Estabilizar integração de margem Consignado",
      "Finalizar auditoria de acessos SAC",
      "Validar novo fluxo de Retenção"
    ]
  };

  const cycleTimeData = [
    { day: "Seg", time: 4.5 },
    { day: "Ter", time: 4.2 },
    { day: "Qua", time: 3.8 },
    { day: "Qui", time: 3.5 },
    { day: "Sex", time: 3.2 },
  ];

  const team = [
    { name: "Squad Consignado", capacity: 85, load: 90, status: "overloaded" },
    { name: "Squad FGTS/Financ.", capacity: 100, load: 75, status: "stable" },
    { name: "Squad Retenção/SAC", capacity: 60, load: 80, status: "warning" }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <h2 className="text-3xl font-light tracking-tight italic serif flex items-center">
          Operação Ágil
          <InfoTooltip content="Gestão tática de entregas baseada em metodologias ágeis (Scrum/Kanban)." />
        </h2>
        <p className="text-muted-foreground mt-2">Gestão de Backlog, Sprints e Dailies focada em entrega contínua.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sprint Status & Velocity */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-medium italic serif">{sprint.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Foco em processos críticos de infraestrutura e segurança.</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-mono font-bold">{sprint.progress}%</p>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Concluído</p>
              </div>
            </div>
            
            <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${sprint.progress}%` }}
                transition={{ duration: 1 }}
                className="bg-black h-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Objetivos da Sprint</h4>
                  <InfoTooltip content="Metas específicas que o time se compromete a entregar ao final desta sprint." />
                </div>
                <ul className="space-y-3">
                  {sprint.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f9f9f9] p-6 rounded-2xl border border-black/5">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 opacity-40" />
                  <h4 className="text-sm font-bold">Daily Scrum Status</h4>
                  <InfoTooltip content="Resumo da reunião diária de alinhamento do time (Daily Scrum)." />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Destaque de Ontem</p>
                    <p className="text-xs text-muted-foreground italic">"Finalizada a configuração dos alertas de disco no Zabbix."</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Foco de Hoje</p>
                    <p className="text-xs text-muted-foreground italic">"Documentação do processo de incidentes e revisão de IAM."</p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase pt-2">
                    <Clock className="w-3 h-3" />
                    Próxima Daily: Amanhã, 09:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Velocity Chart */}
          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm h-[300px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold">Velocidade (Story Points)</h3>
                <InfoTooltip content="Quantidade de trabalho que o time consegue entregar por sprint, medida em pontos." />
              </div>
              <div className="flex items-center gap-2 text-green-500 text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                +18% vs média
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="sprint" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f8f8f8' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="points" fill="#141414" radius={[4, 4, 0, 0]} barSize={32}>
                  {velocityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === velocityData.length - 1 ? '#141414' : '#e5e5e5'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sprint History */}
          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold">Histórico de Sprints</h3>
                <InfoTooltip content="Registro das sprints passadas, seus focos e resultados de entrega." />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-black/5">
                    <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">Sprint</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">Foco Principal</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-center">Entrega</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {sprintHistory.map((s, i) => (
                    <tr key={i} className="group hover:bg-black/[0.01] transition-colors">
                      <td className="py-4 text-sm font-bold">S{s.id}</td>
                      <td className="py-4 text-sm text-muted-foreground">{s.focus}</td>
                      <td className="py-4 text-sm text-center font-mono">{s.delivery}</td>
                      <td className="py-4 text-right">
                        <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded uppercase tracking-widest">
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Backlog Table */}
          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold">Backlog Priorizado</h3>
                <InfoTooltip content="Lista de tarefas ordenadas por valor de negócio e urgência técnica." />
              </div>
              <button className="text-[10px] uppercase tracking-widest font-bold hover:underline">Ver Todos</button>
            </div>
            <div className="space-y-3">
              {backlog.map((b, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#f9f9f9] rounded-2xl border border-black/5 group hover:border-black/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      b.priority === 'Crítica' ? "bg-red-600 animate-pulse" : 
                      b.priority === 'Alta' ? "bg-red-500" : 
                      b.priority === 'Média' ? "bg-amber-500" : "bg-blue-500"
                    )} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium block">{b.task}</span>
                        <InfoTooltip content={b.info} />
                      </div>
                      <span className="text-[10px] opacity-40 uppercase tracking-widest">{b.owner}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest",
                      b.status === 'Sprint' ? "bg-blue-100 text-blue-700" : 
                      b.status === 'Done' ? "bg-green-100 text-green-700" : "bg-black/5 text-black/40"
                    )}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="bg-[#141414] text-white p-8 rounded-3xl">
            <Zap className="w-8 h-8 text-amber-400 mb-6" />
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-medium italic serif">Métricas de Entrega</h4>
              <InfoTooltip content="Indicadores de desempenho do time de desenvolvimento e operações." className="invert" />
            </div>
            <div className="space-y-6 mt-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Velocidade Média</p>
                <p className="text-2xl font-mono font-bold">42 pts</p>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Cycle Time (Dias)</p>
                    <p className="text-2xl font-mono font-bold">4.0</p>
                  </div>
                  <div className="text-green-400 text-[10px] font-bold flex items-center gap-1 mb-1">
                    <TrendingDown className="w-3 h-3" />
                    -23%
                  </div>
                </div>
                <div className="h-[60px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cycleTimeData}>
                      <Line 
                        type="monotone" 
                        dataKey="time" 
                        stroke="#4ade80" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed mt-6">
              A produtividade aumentou 15% após a implementação da Gestão de Mudanças e redução de retrabalho.
            </p>
          </div>

          {/* Sprint Roadmap List */}
          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 opacity-40" />
              <h4 className="text-xs uppercase tracking-widest opacity-40 font-bold">Roadmap de Sprints</h4>
              <InfoTooltip content="Planejamento macro das próximas sprints e seus objetivos principais." />
            </div>
            <div className="space-y-4">
              {[
                { id: "S01", name: "Diagnóstico", status: "done", info: "Fase inicial de levantamento de dados e identificação de gargalos." },
                { id: "S02", name: "SLA & Catálogo", status: "done", info: "Definição de acordos de nível de serviço e catálogo de serviços de TI." },
                { id: "S03", name: "Dashboard BSC", status: "done", info: "Implementação do painel estratégico para acompanhamento de metas." },
                { id: "S04", name: "Processos ITIL", status: "active", info: "Adoção de processos ITIL para gestão de incidentes e mudanças." },
                { id: "S05", name: "ISO 27001", status: "upcoming", info: "Implementação de controles de segurança baseados na norma ISO 27001." },
                { id: "S06", name: "Otimização", status: "upcoming", info: "Fase de refinamento e melhoria contínua dos processos implantados." },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 transition-all",
                    s.status === 'done' ? "bg-green-100 text-green-700" : 
                    s.status === 'active' ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : 
                    "bg-black/5 text-black/40"
                  )}>
                    {s.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={cn(
                        "text-xs font-medium truncate",
                        s.status === 'done' ? "text-black/40" : "text-black"
                      )}>{s.name}</p>
                      <InfoTooltip content={s.info} />
                    </div>
                    <p className="text-[8px] uppercase tracking-widest opacity-30 font-bold">
                      {s.status === 'done' ? 'Concluída' : s.status === 'active' ? 'Em Andamento' : 'Próxima'}
                    </p>
                  </div>
                  {s.status === 'active' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Team Capacity */}
          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <h4 className="text-xs uppercase tracking-widest opacity-40 font-bold">Capacidade do Time</h4>
              <InfoTooltip content="Disponibilidade de cada equipe para assumir novas tarefas nesta sprint." />
            </div>
            <div className="space-y-6">
              {team.map((t, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">{t.name}</span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase",
                      t.status === 'overloaded' ? "text-red-500" : 
                      t.status === 'warning' ? "text-amber-500" : "text-green-500"
                    )}>
                      {t.load}% Carga
                    </span>
                  </div>
                  <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full transition-all duration-500",
                        t.status === 'overloaded' ? "bg-red-500" : 
                        t.status === 'warning' ? "bg-amber-500" : "bg-green-500"
                      )}
                      style={{ width: `${t.load}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
              <p className="text-[10px] text-amber-800 leading-tight">
                Equipe de Infra em sobrecarga. Risco de atraso em tarefas de manutenção preventiva.
              </p>
            </div>
          </div>

          <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-8 h-8 text-black/20" />
              <InfoTooltip content="Trabalho extra necessário para corrigir problemas causados por decisões técnicas rápidas no passado." />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-medium italic serif">Dívida Técnica</h4>
              <InfoTooltip content="Métrica que estima o esforço necessário para refatoração e melhoria da qualidade do código/infra." />
            </div>
            <div className="flex items-end gap-2 mb-2">
              <p className="text-3xl font-mono font-bold">12%</p>
              <TrendingDown className="w-5 h-5 text-green-500 mb-1" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Redução constante através de refatoração e automação de processos manuais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
