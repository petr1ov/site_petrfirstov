
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenCalculator: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  const profilePhotoUrl = "https://i.ibb.co/hRHWvxYY/photo-2026-01-26-15-41-21.jpg";

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80; // Offset for the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-24 max-w-7xl mx-auto pb-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-10 text-center md:text-left order-2 md:order-1"
      >
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] apple-gradient">
            Пётр Фирстов.<br /><span className="brand-gradient">Цифровые</span><br />продукты.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide leading-relaxed max-w-xl">
            Создаю мобильные приложения и ИИ-системы, которые работают на ваш результат.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
          <button 
            onClick={onOpenCalculator}
            className="px-12 py-5 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            Рассчитать проект
          </button>
          <button 
            onClick={scrollToProjects}
            className="px-12 py-5 bg-zinc-900 text-white rounded-full font-bold border border-white/10 hover:bg-zinc-800 transition-all text-lg flex items-center justify-center gap-2 group"
          >
            Смотреть кейсы
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 relative max-w-[500px] w-full order-1 md:order-2"
      >
        <div className="aspect-square rounded-[4rem] overflow-hidden border-[1px] border-white/10 ios-shadow bg-zinc-950 relative group">
          <img 
            src={profilePhotoUrl} 
            alt="Пётр Фирстов" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-8 -left-8 w-24 h-24 brand-bg-gradient blur-[60px] rounded-full opacity-20" />
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-600 blur-[80px] rounded-full opacity-10" />
      </motion.div>
    </section>
  );
};

export default Hero;
