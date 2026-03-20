import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2,
  ArrowDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';

export function RootCauseAnalysis() {
  const whys = [
    { q: "Por que o sistema ficou indisponível?", a: "O servidor de banco de dados parou de responder." },
    { q: "Por que o servidor parou?", a: "O disco ficou cheio devido a logs excessivos." },
    { q: "Por que os logs ficaram cheios?", a: "Uma nova aplicação foi implantada com debug ativado." },
    { q: "Por que o debug estava ativado?", a: "Não houve revisão de configuração antes do deploy." },
    { q: "Por que não houve revisão?", a: "Falta de um processo formal de Gestão de Mudanças (ITIL)." }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-light tracking-tight italic serif">RCA - Análise de Causa Raiz</h2>
          <InfoTooltip content="A Análise de Causa Raiz (RCA) é um processo sistemático para identificar a origem de um problema e implementar soluções permanentes." />
        </div>
        <p className="text-muted-foreground mt-2">Técnica dos 5 Porquês para evitar a recorrência de problemas.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs uppercase tracking-widest opacity-50 font-bold">Método dos 5 Porquês</h3>
            <InfoTooltip content="Técnica iterativa interrogativa usada para explorar as relações de causa e efeito subjacentes a um problema específico." />
          </div>
          {whys.map((w, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="relative"
            >
              <div className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm font-bold italic serif">{w.q}</p>
                </div>
                <p className="text-sm text-muted-foreground pl-9">{w.a}</p>
              </div>
              {i < whys.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-4 h-4 text-black/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-[#141414] text-white p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium italic serif">Causa Raiz Identificada</h4>
              <InfoTooltip content="Identificação do fator fundamental que, se removido, impediria a recorrência do problema indesejado." />
            </div>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-6">
              <p className="text-sm text-red-400 font-bold">Ausência de Governança de Mudanças</p>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Sem um processo de Gestão de Mudanças (ITIL), falhas humanas simples em ambiente de produção tornam-se incidentes críticos. A solução não é apenas "limpar o disco", mas implementar o processo.
            </p>
          </div>

          <div className="bg-white border border-black/5 p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium italic serif">Plano de Ação (RCA)</h4>
              <InfoTooltip content="Conjunto de medidas corretivas e preventivas para eliminar a causa raiz e monitorar a eficácia da solução." />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                <div>
                  <p className="text-sm font-bold">Checklist de Deploy</p>
                  <p className="text-xs text-muted-foreground">Validar variáveis de ambiente antes de cada subida.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                <div>
                  <p className="text-sm font-bold">Monitoramento de Disco</p>
                  <p className="text-xs text-muted-foreground">Alertas automáticos quando atingir 80% de uso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
