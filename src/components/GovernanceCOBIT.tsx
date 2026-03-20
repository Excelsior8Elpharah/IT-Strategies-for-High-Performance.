import React from 'react';
import { 
  Shield, 
  UserCheck, 
  Briefcase, 
  CheckCircle2,
  Scale,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';
import { InfoTooltip } from './InfoTooltip';

export function GovernanceCOBIT() {
  const roles = [
    {
      role: "Diretoria",
      action: "Define a Estratégia",
      desc: "Define os objetivos de negócio e o apetite ao risco.",
      icon: Briefcase
    },
    {
      role: "Comitê de TI",
      action: "Prioriza Demandas",
      desc: "Analisa o alinhamento das solicitações com a estratégia.",
      icon: Users
    },
    {
      role: "Gestão de TI",
      action: "Executa e Entrega",
      desc: "Responsável pela operação e entrega de valor.",
      icon: UserCheck
    }
  ];

  const raci = [
    { activity: "Priorizar Demandas", r: "TI", a: "Comitê", c: "Negócio", i: "CEO", info: "Processo de escolha das solicitações que trazem maior valor ao negócio." },
    { activity: "Aprovar Projetos > R$ 50k", r: "Comitê", a: "Diretoria", c: "Financeiro", i: "TI", info: "Alçada de decisão financeira para investimentos de médio e alto impacto." },
    { activity: "Gestão de Incidentes Críticos", r: "Suporte", a: "Gestor TI", c: "Infra", i: "Negócio", info: "Protocolo de resposta rápida para falhas que interrompem a operação." },
    { activity: "Definir Orçamento Anual", r: "Gestor TI", a: "Diretoria", c: "Comitê", i: "Todos", info: "Planejamento de CAPEX e OPEX para o próximo ciclo fiscal de TI." },
  ];

  const criteria = [
    { label: "Impacto Financeiro", weight: "40%", desc: "Geração de receita ou redução de custos diretos." },
    { label: "Impacto no Cliente", weight: "30%", desc: "Melhoria na experiência do usuário final." },
    { label: "Urgência Legal/Risco", weight: "20%", desc: "Conformidade e mitigação de riscos críticos." },
    { label: "Esforço Técnico", weight: "10%", desc: "Complexidade de implementação." }
  ];

  return (
    <div className="space-y-12">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight italic serif">Governança com COBIT</h2>
          <InfoTooltip content="O COBIT 2019 é o framework global para governança e gestão de TI, focando no alinhamento estratégico entre tecnologia e os objetivos de negócio da organização." />
        </div>
        <p className="text-sm md:text-base text-muted-foreground mt-2">Estrutura de decisão: quem decide o quê e com quais critérios (Accountability).</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {roles.map((r, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white border border-black/5 p-6 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <r.icon className="w-16 h-16" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-bold text-lg">{r.role}</h4>
              <InfoTooltip content="Definição clara de papéis e responsabilidades para garantir que a TI entregue valor e os riscos sejam mitigados." />
            </div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">{r.action}</p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Matriz RACI */}
      <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 opacity-40" />
            <h3 className="text-xl font-medium italic serif">Matriz RACI de Decisão</h3>
          </div>
          <InfoTooltip content="Ferramenta essencial para definir quem é Responsável, Prestador de Contas, Consultado e Informado em cada processo de decisão." />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-black/5">
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">Atividade / Processo</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-center">
                  <div className="flex items-center justify-center gap-1">
                    R
                    <InfoTooltip content="Responsible: Quem executa a tarefa." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-center">
                  <div className="flex items-center justify-center gap-1">
                    A
                    <InfoTooltip content="Accountable: Quem responde pelo resultado e tem o poder de veto (apenas um por atividade)." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-center">
                  <div className="flex items-center justify-center gap-1">
                    C
                    <InfoTooltip content="Consulted: Quem deve ser consultado antes de uma decisão ou ação (comunicação bidirecional)." />
                  </div>
                </th>
                <th className="pb-4 text-[10px] uppercase tracking-widest opacity-40 font-bold text-center">
                  <div className="flex items-center justify-center gap-1">
                    I
                    <InfoTooltip content="Informed: Quem deve ser informado após a decisão ou ação ser tomada (comunicação unidirecional)." />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {raci.map((item, i) => (
                <tr key={i} className="group hover:bg-black/[0.01] transition-colors">
                  <td className="py-4 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      {item.activity}
                      <InfoTooltip content={item.info} />
                    </div>
                  </td>
                  <td className="py-4 text-xs font-mono text-center text-muted-foreground">{item.r}</td>
                  <td className="py-4 text-xs font-mono text-center font-bold">{item.a}</td>
                  <td className="py-4 text-xs font-mono text-center text-muted-foreground">{item.c}</td>
                  <td className="py-4 text-xs font-mono text-center text-muted-foreground">{item.i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest opacity-50">
          <div className="flex items-center gap-2">
            <span className="font-bold">R:</span> Responsible
            <InfoTooltip content="Responsável pela execução da tarefa." />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">A:</span> Accountable
            <InfoTooltip content="Autoridade final que aprova e responde pelo resultado." />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">C:</span> Consulted
            <InfoTooltip content="Especialistas consultados durante o processo." />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">I:</span> Informed
            <InfoTooltip content="Partes interessadas informadas sobre o progresso." />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#141414] text-white p-8 rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Scale className="w-5 h-5 mr-3 text-white/60" />
              <h3 className="text-xl font-medium italic serif">Critérios de Prioridade</h3>
            </div>
            <InfoTooltip content="Critérios objetivos para priorização de investimentos e projetos, garantindo o uso eficiente dos recursos de TI." />
          </div>
          <div className="space-y-6">
            {criteria.map((c, i) => (
              <div key={i} className="flex items-start">
                <div className="bg-white/10 text-white text-xs font-mono px-2 py-1 rounded mr-4 min-w-[50px] text-center">
                  {c.weight}
                </div>
                <div>
                  <h5 className="text-sm font-bold">{c.label}</h5>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-3 text-black/40" />
              <h3 className="text-xl font-medium italic serif">O Comitê de TI</h3>
            </div>
            <InfoTooltip content="Fórum deliberativo para alinhar as decisões de TI com as necessidades do negócio e garantir a transparência." />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2">Frequência</p>
              <p className="text-sm font-medium">Semanal (Toda Terça-feira, 09:00)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2">Participantes</p>
              <div className="flex flex-wrap gap-2">
                {["Gestor TI", "Dir. Financeiro", "Gerente SAC/Ouvidoria", "Coord. Retenção", "Compliance"].map((p, i) => (
                  <span key={i} className="px-2 py-1 bg-black/5 rounded text-[10px] font-bold uppercase">{p}</span>
                ))}
              </div>
            </div>
            <ul className="space-y-3">
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2">Pauta Fixa</p>
              {[
                "Revisão dos indicadores críticos do BSC",
                "Aprovação de mudanças em produção",
                "Deliberação sobre novos investimentos",
                "Análise de riscos e segurança"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
