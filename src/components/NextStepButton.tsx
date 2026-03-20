import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { TRANSITIONS, MENU_ITEMS } from '../constants';

interface NextStepButtonProps {
  currentTab: string;
  onNext: (tabId: string) => void;
}

export function NextStepButton({ currentTab, onNext }: NextStepButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const transition = TRANSITIONS[currentTab];
  
  if (!transition) return null;

  const nextItem = MENU_ITEMS.find(item => item.id === transition.nextId);
  if (!nextItem) return null;

  return (
    <div className="mt-20 pt-10 border-t border-black/5 flex justify-end relative">
      <div className="relative group">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => onNext(transition.nextId)}
          className="flex items-center gap-4 px-8 py-4 bg-[#141414] text-white rounded-full hover:bg-black transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-0.5">Próximo Passo</p>
            <p className="text-sm font-medium">{nextItem.label}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full right-0 mb-6 w-80 p-6 bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl z-50 pointer-events-none"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-black/30 mb-2">Por que avançar?</p>
                  <p className="text-xs leading-relaxed text-[#141414] font-medium">
                    {transition.reason}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-black/30 mb-2">Importância</p>
                  <p className="text-[11px] leading-relaxed text-[#141414]/70 italic">
                    "{transition.importance}"
                  </p>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-12 -translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-black/5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
