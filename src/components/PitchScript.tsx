import React from 'react';
import { Play, Mic, Video, Clock, Settings } from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';

export function PitchScript() {
  const script = [
    {
      time: "0:00 - 0:30",
      title: "O Problema (O Gancho)",
      content: "Comece com a dor: 'Hoje, nossa TI é uma caixa preta. Gastamos 90% do tempo apagando incêndios e a diretoria só nos vê como um custo. Estamos medindo quantos chamados resolvemos, mas o negócio quer saber quanto valor geramos. Essa desconexão é o que vamos resolver hoje.'",
      icon: Clock
    },
    {
      time: "0:30 - 1:30",
      title: "A Solução Estratégica (BSC)",
      content: "Explique o BSC: 'Não vamos mais falar de chamados. Vamos falar de Uptime, Satisfação do Usuário e ROI. Com o Balanced Scorecard, conectamos cada ação técnica a um objetivo de negócio. Se o sistema não cai, a empresa fatura mais.'",
      icon: Play
    },
    {
      time: "1:30 - 2:30",
      title: "Organização e Ordem (COBIT)",
      content: "Fale de Governança: 'Com o COBIT, acabamos com o \"quem grita mais alto\". Criamos um Comitê de TI e critérios claros de prioridade baseados em impacto financeiro e risco. Agora, a TI sabe exatamente onde colocar energia.'",
      icon: Mic
    },
    {
      time: "2:30 - 3:30",
      title: "Eficiência Operacional (ITIL)",
      content: "Fale de ITIL: 'Para sair do caos, padronizamos processos. Gestão de incidentes para velocidade, gestão de problemas para eliminar a raiz e gestão de mudanças para segurança. É o fim do retrabalho.'",
      icon: Settings
    },
    {
      time: "3:30 - 4:00",
      title: "O Resultado (O Fechamento)",
      content: "Encerre com o Plano: 'Em 90 dias, teremos uma TI estratégica, organizada e eficiente. Não somos mais apenas suporte; somos o motor que impulsiona o negócio. Vamos começar?'",
      icon: Video
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-black/10 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-light tracking-tight italic serif">Roteiro do Vídeo Pitch (4 Min)</h2>
          <InfoTooltip content="O Roteiro do Vídeo Pitch é uma ferramenta estratégica para comunicar a visão de transformação da TI de forma clara, concisa e impactante para a diretoria." />
        </div>
        <p className="text-muted-foreground mt-2">Como vender sua estratégia para a diretoria com segurança e clareza.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {script.map((s, i) => (
          <div key={i} className="bg-white border border-black/5 p-8 rounded-2xl flex flex-col md:flex-row gap-8 relative">
            <div className="absolute top-4 right-4">
              <InfoTooltip content="Estrutura narrativa dividida em blocos de tempo para garantir que todos os pontos críticos sejam abordados durante a apresentação." />
            </div>
            <div className="md:w-48 shrink-0">
              <div className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <s.icon className="w-4 h-4 mr-2" />
                {s.time}
              </div>
              <h4 className="text-lg font-bold leading-tight">{s.title}</h4>
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed italic">
                "{s.content}"
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#141414] text-white p-8 rounded-2xl mt-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-medium italic serif">Dicas de Ouro para o Pitch:</h4>
          <InfoTooltip content="Conselhos práticos para aumentar a eficácia da comunicação e garantir o apoio dos stakeholders ao plano estratégico." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-4 rounded-xl">
            <h5 className="text-sm font-bold mb-1">Segurança</h5>
            <p className="text-xs text-white/50">Fale com autoridade. Você é o especialista em governança.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl">
            <h5 className="text-sm font-bold mb-1">Foco no Negócio</h5>
            <p className="text-xs text-white/50">Evite termos técnicos demais. Fale de dinheiro, tempo e risco.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-xl">
            <h5 className="text-sm font-bold mb-1">Visualização</h5>
            <p className="text-xs text-white/50">Use os dashboards do plano para ilustrar seus pontos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
