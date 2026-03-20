import React, { useState, useEffect, useRef } from 'react';
import { 
  Sidebar,
  Diagnosis, 
  Challenge, 
  DashboardBSC, 
  GovernanceCOBIT, 
  ServiceITIL, 
  Timeline90Days, 
  PDCACycle, 
  GanttRoadmap, 
  RootCauseAnalysis, 
  ComplianceRisk, 
  AgileOps, 
  RoadmapGanttPDCA,
  NextStepButton
} from './components';
import { motion, AnimatePresence } from 'motion/react';
import { Menu } from 'lucide-react';
import { InfoTooltip } from './components/InfoTooltip';
import { MENU_ITEMS, TRANSITIONS } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('challenge');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'challenge': return <Challenge />;
      case 'diagnosis': return <Diagnosis />;
      case 'bsc': return <DashboardBSC />;
      case 'pdca': return <PDCACycle />;
      case 'cobit': return <GovernanceCOBIT />;
      case 'compliance': return <ComplianceRisk />;
      case 'itil': return <ServiceITIL />;
      case 'rca': return <RootCauseAnalysis />;
      case 'agile': return <AgileOps />;
      case 'gantt': return <GanttRoadmap />;
      case 'gantt-pdca': return <RoadmapGanttPDCA />;
      default: return <Challenge />;
    }
  };

  return (
    <div className="flex h-screen bg-[#fcfcfc] overflow-hidden font-sans text-[#141414]">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-[#141414] text-white flex items-center px-6 shrink-0 z-30">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 hover:bg-white/10 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="ml-4">
            <h1 className="text-sm font-bold tracking-tighter italic serif">GOV.TI</h1>
          </div>
        </header>

        <main ref={mainRef} className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
                <NextStepButton currentTab={activeTab} onNext={setActiveTab} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          <footer className="mt-24 pt-8 border-t border-black/5 text-[10px] uppercase tracking-widest opacity-30 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span>Plano Estratégico de Governança de TI v1.0</span>
              <InfoTooltip content="Versão atual do plano estratégico de governança e gestão de TI." />
            </div>
            <span>© 2026 Consultoria de Governança</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
