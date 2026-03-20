import { 
  LayoutDashboard, 
  ShieldCheck, 
  Settings, 
  Calendar, 
  Activity,
  Lock,
  RefreshCw,
  Zap,
  Search,
  Target
} from 'lucide-react';

export const MENU_ITEMS = [
  { id: 'challenge', label: 'O Desafio', icon: Target, info: "Contexto e objetivos estratégicos do projeto." },
  { id: 'diagnosis', label: 'Diagnóstico', icon: Activity, info: "Análise do estado atual da TI e identificação de gaps." },
  { id: 'bsc', label: 'Dashboard Executivo', icon: LayoutDashboard, info: "Visão estratégica baseada no Balanced Scorecard." },
  { id: 'pdca', label: 'Ciclo PDCA', icon: RefreshCw, info: "Metodologia de melhoria contínua de processos." },
  { id: 'gantt-pdca', label: 'Roadmap PDCA', icon: RefreshCw, info: "Cronograma detalhado das fases do PDCA." },
  { id: 'cobit', label: 'COBIT & Governança', icon: ShieldCheck, info: "Framework de governança e gestão de TI." },
  { id: 'compliance', label: 'ISO 27001 / 31000', icon: Lock, info: "Gestão de segurança e riscos (Compliance)." },
  { id: 'itil', label: 'Gestão ITIL', icon: Settings, info: "Melhores práticas para gestão de serviços de TI." },
  { id: 'rca', label: 'RCA (Causa Raiz)', icon: Search, info: "Análise de problemas e definição de planos de ação." },
  { id: 'agile', label: 'Operação Ágil', icon: Zap, info: "Gestão tática de entregas e sprints." },
  { id: 'gantt', label: 'Roadmap & Sprints', icon: Calendar, info: "Cronograma de projetos e marcos estratégicos." },
];

export const TRANSITIONS: Record<string, { nextId: string; reason: string; importance: string }> = {
  'challenge': { 
    nextId: 'diagnosis', 
    reason: 'O diagnóstico revela os gaps reais por trás dos desafios estratégicos.',
    importance: 'Sem diagnóstico, as ações são baseadas em suposições, não em fatos.'
  },
  'diagnosis': { 
    nextId: 'bsc', 
    reason: 'Com os gaps mapeados, definimos os indicadores de sucesso no Dashboard Executivo.',
    importance: 'O BSC traduz a estratégia em números acompanháveis pela diretoria.'
  },
  'bsc': { 
    nextId: 'pdca', 
    reason: 'Os indicadores mostram o "quê"; o PDCA define "como" melhorar continuamente.',
    importance: 'Garante que a estratégia não fique no papel, mas entre em um ciclo de execução.'
  },
  'pdca': { 
    nextId: 'gantt-pdca', 
    reason: 'A metodologia precisa de um cronograma claro para execução das melhorias.',
    importance: 'Evita a perda de fôlego do projeto ao dar visibilidade temporal às ações.'
  },
  'gantt-pdca': { 
    nextId: 'cobit', 
    reason: 'A execução operacional deve estar alinhada aos frameworks de governança global.',
    importance: 'O COBIT garante que a TI esteja entregando o que o negócio realmente precisa.'
  },
  'cobit': { 
    nextId: 'compliance', 
    reason: 'Governança sem segurança é vulnerabilidade; vamos ao compliance ISO 27001.',
    importance: 'Protege os ativos de informação e garante a continuidade do negócio bancário.'
  },
  'compliance': { 
    nextId: 'itil', 
    reason: 'Com riscos mitigados, focamos na excelência da entrega de serviços no dia a dia.',
    importance: 'ITIL garante estabilidade e previsibilidade na operação de teleatendimento.'
  },
  'itil': { 
    nextId: 'rca', 
    reason: 'Mesmo com bons serviços, problemas ocorrem; a análise de causa raiz evita reincidências.',
    importance: 'Reduz o custo operacional ao eliminar a origem dos incidentes repetitivos.'
  },
  'rca': { 
    nextId: 'agile', 
    reason: 'Resolver problemas pontuais é bom, mas operar com agilidade garante entregas constantes.',
    importance: 'A agilidade permite que a TI responda rápido às mudanças do mercado financeiro.'
  },
  'agile': { 
    nextId: 'gantt', 
    reason: 'A agilidade das squads se materializa no roadmap de longo prazo da TI.',
    importance: 'Dá previsibilidade de longo prazo para os investimentos em tecnologia.'
  },
  'gantt': { 
    nextId: 'challenge', 
    reason: 'Ciclo completo. Revisitar o desafio garante o alinhamento contínuo com o negócio.',
    importance: 'A governança é um ciclo vivo; o que era desafio ontem pode ser base para o amanhã.'
  },
};
