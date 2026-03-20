import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface InfoTooltipProps {
  content: string;
  className?: string;
}

export function InfoTooltip({ content, className }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, placement: 'top' as 'top' | 'bottom' });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipHeight = 120; // Estimativa segura
      const spaceAbove = rect.top;
      const placement = spaceAbove < tooltipHeight ? 'bottom' : 'top';
      
      // Centraliza horizontalmente e limita às bordas da tela (margem de 20px)
      let left = rect.left + rect.width / 2;
      const screenWidth = window.innerWidth;
      const tooltipWidth = 224; // w-56 = 14rem = 224px
      
      if (left - tooltipWidth / 2 < 20) {
        left = tooltipWidth / 2 + 20;
      } else if (left + tooltipWidth / 2 > screenWidth - 20) {
        left = screenWidth - tooltipWidth / 2 - 20;
      }

      setPosition({
        top: placement === 'top' ? rect.top : rect.bottom,
        left: left,
        placement
      });
    }
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      // Usar capture: true para detectar scroll em containers internos
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  return (
    <span className={cn("inline-block ml-1", className)}>
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(!isVisible);
        }}
        className="p-1 rounded-full hover:bg-black/5 transition-colors focus:outline-none flex items-center justify-center cursor-help"
        role="button"
        tabIndex={0}
        aria-label="Informação"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(!isVisible);
          }
        }}
      >
        <Info className="w-3.5 h-3.5 opacity-30 hover:opacity-100 transition-opacity" />
      </span>
      
      {createPortal(
        <AnimatePresence>
          {isVisible && (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, scale: 0.95, y: position.placement === 'top' ? 5 : -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: position.placement === 'top' ? 5 : -5 }}
              style={{ 
                position: 'fixed',
                top: position.top,
                left: position.left,
                transform: position.placement === 'top' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
                zIndex: 9999,
                pointerEvents: 'none'
              }}
              className={cn(
                "w-56 p-3 bg-[#141414] text-white text-[10px] leading-relaxed rounded-xl shadow-2xl",
                position.placement === 'top' ? "mb-2" : "mt-2"
              )}
            >
              <div className="relative">
                {content}
                {/* Arrow */}
                <div className={cn(
                  "absolute left-1/2 -translate-x-1/2 border-8 border-transparent",
                  position.placement === 'top' 
                    ? "top-full border-t-[#141414]" 
                    : "bottom-full border-b-[#141414]"
                )} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </span>
  );
}
