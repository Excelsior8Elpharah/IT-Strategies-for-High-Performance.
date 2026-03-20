import React from 'react';
import { 
  Zap, 
  Search, 
  RefreshCw, 
  CheckCircle,
  Clock,
  Activity,
  Smile
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function ServiceITIL() {
  const processes = [
    {
      title: "Gestão de Incidentes (Voz/Chat)",
      action: "Restaurar canais de atendimento em menos de 5 minutos.",
      focus: "Disponibilidade e Continuidade",
      icon: Zap
    },
    {
      title: "Gestão de Problemas (Sistemas)",
      action: "Eliminar bugs recorrentes em consultas de FGTS e Consignado.",
      focus: "Estabilidade de Integração",
      icon: Search
    },
    {
      title: "Gestão de Mudanças (Bancário)",
      action: "Garantir que atualizações de segurança não parem a operação.",
      focus: "Segurança e Compliance",
      icon: RefreshCw
    }
  ];

  const kpis = [
    { label: "SLA Atendimento", value: "98%", icon: CheckCircle, color: "text-green-500" },
    { label: "TMA Reduzido", value: "-15%", icon: Clock, color: "text-blue-500" },
    { label: "Uptime Canais", value: "99.99%", icon: Activity, color: "text-purple-500" },
    { label: "CSAT (Satisfação)", value: "4.9/5", icon: Smile, color: "text-amber-500" }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight italic serif">Gestão de Serviços: Operação Bancária</h2>
          <InfoTooltip content="Aplicação do ITIL 4 para garantir que a terceirizada entregue valor constante ao banco através de serviços estáveis e seguros." />
        </div>
        <p className="text-sm md:text-base text-muted-foreground mt-2">Foco em alta disponibilidade para SAC, Retenção e Ouvidoria.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {processes.map((p, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white border border-black/5 p-6 rounded-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                <p.icon className="w-5 h-5" />
              </div>
              <InfoTooltip content="Processos padronizados para garantir a estabilidade operacional e a entrega de serviços de alta qualidade." />
            </div>
            <h4 className="font-bold text-lg mb-2">{p.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{p.action}</p>
            <div className="pt-4 border-t border-black/5">
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Foco Principal</p>
              <p className="text-xs font-bold">{p.focus}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-medium italic serif">Indicadores de Performance (KPIs)</h3>
          <InfoTooltip content="Indicadores chave de desempenho para medir a eficácia e eficiência dos serviços de TI entregues ao negócio." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((k, i) => (
            <div key={i} className="bg-white border border-black/5 p-6 rounded-2xl text-center">
              <k.icon className={cn("w-6 h-6 mx-auto mb-3", k.color)} />
              <p className="text-2xl font-mono font-bold">{k.value}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">{k.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-8 rounded-2xl">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-amber-800 font-bold italic serif">Melhoria Contínua (CSI)</h4>
          <InfoTooltip content="A Melhoria Contínua de Serviço garante que os serviços de TI evoluam constantemente para atender às novas demandas do negócio." />
        </div>
        <p className="text-amber-700 text-sm leading-relaxed">
          O ciclo ITIL não termina na resolução. Cada incidente é uma oportunidade de aprendizado. 
          Implementaremos revisões pós-incidente (Post-Mortems) para alimentar a Gestão de Problemas e evitar que o mesmo erro ocorra duas vezes.
        </p>
      </div>
    </div>
  );
}
