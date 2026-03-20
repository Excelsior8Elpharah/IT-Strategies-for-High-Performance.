import React from 'react';
import { 
  ChevronRight,
  X,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { InfoTooltip } from './InfoTooltip';
import { MENU_ITEMS } from '../constants';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const checklistItems = [
  { label: "Diagnóstico Inicial", completed: true, info: "Levantamento completo da infraestrutura e processos." },
  { label: "Comitê de TI Formado", completed: true, info: "Grupo de decisão estratégica estabelecido." },
  { label: "Dashboard BSC Ativo", completed: false, info: "Monitoramento em tempo real dos indicadores." },
  { label: "Políticas ISO 27001", completed: false, info: "Documentação de segurança da informação." },
];

export function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={cn(
        "fixed inset-y-0 left-0 w-64 bg-[#141414] text-white z-50 flex flex-col border-r border-white/10 transition-transform duration-300 lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tighter italic serif">GOV.TI</h1>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">Estratégia & Operação</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 py-6 overflow-y-auto">
          <div className="px-6 mb-4">
            <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Navegação</p>
          </div>
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center px-6 py-3 text-sm transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-white text-black font-medium" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-4 h-4 mr-3", activeTab === item.id ? "text-black" : "text-white/40 group-hover:text-white")} />
              {item.label}
              <div className="ml-auto flex items-center gap-2">
                <InfoTooltip content={item.info} className="invert opacity-0 group-hover:opacity-100 transition-opacity" />
                {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
              </div>
            </button>
          ))}

          <div className="mt-8 px-6">
            <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-4">Checklist Crítico</p>
            <div className="space-y-3">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                  <div className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                    item.completed ? "bg-green-500 border-green-500" : "border-white/20"
                  )}>
                    {item.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                  <span className={cn(
                    "text-[11px] transition-colors flex-1",
                    item.completed ? "text-white/80" : "text-white/40"
                  )}>
                    {item.label}
                  </span>
                  <InfoTooltip content={item.info} className="invert opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Status do Plano</p>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs">Progresso</span>
              <span className="text-xs font-mono">15%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-white h-full w-[15%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
