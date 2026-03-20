import React from 'react';
import { motion } from 'motion/react';
import { 
  Lock, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2,
  FileText,
  ShieldAlert
} from 'lucide-react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function ComplianceRisk() {
  const iso27001 = [
    { control: "Sigilo Bancário", status: "ok", desc: "Criptografia de ponta a ponta em dados de crédito." },
    { control: "Gravação de Voz (BACEN)", status: "warning", desc: "Redundância de storage em implantação." },
    { control: "LGPD (Dados Sensíveis)", status: "ok", desc: "Anonimização de CPFs em logs de sistema." },
    { control: "Gestão de Identidade", status: "danger", desc: "Acessos de ex-funcionários não revogados." }
  ];

  const iso31000 = [
    { risk: "Queda de Link (Voz/IP)", level: "Alto", impact: "Crítico", mitigation: "SD-WAN com 3 operadoras distintas" },
    { risk: "Vazamento de Dados Bancários", level: "Baixo", impact: "Crítico", mitigation: "DLP & Auditoria de Acessos" },
    { risk: "Indisponibilidade API Banco", level: "Médio", impact: "Alto", mitigation: "Cache local & Contingência Manual" }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-light tracking-tight italic serif">Compliance Bancário & Riscos</h2>
          <InfoTooltip content="Gestão de riscos e conformidade focada nas normas do BACEN, LGPD e exigências contratuais do banco parceiro." />
        </div>
        <p className="text-muted-foreground mt-2">Segurança da Informação e Gestão de Riscos em Operações de Crédito.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ISO 27001 */}
        <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-medium italic serif">ISO 27001 (Segurança)</h3>
            </div>
            <InfoTooltip content="Padrão internacional para Sistemas de Gestão de Segurança da Informação (SGSI), focando na Confidencialidade, Integridade e Disponibilidade dos dados." />
          </div>
          <div className="space-y-4">
            {iso27001.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#f9f9f9] rounded-2xl border border-black/5">
                <div>
                  <p className="text-sm font-bold">{c.control}</p>
                  <p className="text-[10px] text-muted-foreground">{c.desc}</p>
                </div>
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  c.status === 'ok' ? "bg-green-500" : c.status === 'warning' ? "bg-amber-500" : "bg-red-500"
                )} />
              </div>
            ))}
          </div>
        </div>

        {/* Risk Matrix */}
        <div className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-medium italic serif">Matriz de Riscos (Heatmap)</h3>
            </div>
            <InfoTooltip content="Visualização gráfica da probabilidade e do impacto de eventos adversos, permitindo a priorização das ações de mitigação." />
          </div>
          <div className="grid grid-cols-4 gap-2 aspect-square max-w-[300px] mx-auto">
            {[...Array(16)].map((_, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const isHigh = row < 2 && col > 1;
              const isMed = (row < 2 && col <= 1) || (row >= 2 && col > 1);
              return (
                <div 
                  key={i} 
                  className={cn(
                    "rounded-md flex items-center justify-center text-[8px] font-bold text-white/40",
                    isHigh ? "bg-red-500/80" : isMed ? "bg-amber-500/80" : "bg-green-500/80"
                  )}
                >
                  {i === 2 && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                  {i === 7 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-between text-[10px] uppercase tracking-widest opacity-40 font-bold">
            <span>Probabilidade →</span>
            <span className="rotate-90 origin-right translate-x-full">Impacto →</span>
          </div>
        </div>
      </div>

      {/* ISO 31000 */}
        <div className="bg-[#141414] text-white p-8 rounded-3xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-white/60" />
              <h3 className="text-xl font-medium italic serif">ISO 31000 (Gestão de Riscos)</h3>
            </div>
            <InfoTooltip content="Diretrizes para a gestão de riscos corporativos, integrando a tomada de decisão com a incerteza para criar e proteger valor." />
          </div>
          <div className="space-y-6">
            {iso31000.map((r, i) => (
              <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold">{r.risk}</h4>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter",
                    r.level === 'Alto' ? "bg-red-500/20 text-red-400" : "bg-white/10 text-white/60"
                  )}>
                    {r.level}
                  </span>
                </div>
                <p className="text-[10px] text-white/40 mb-2">Impacto: {r.impact}</p>
                <div className="flex items-center gap-2 text-[10px] text-green-400">
                  <ShieldAlert className="w-3 h-3" />
                  Mitigação: {r.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
