
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import TechStack from './components/TechStack';
import AIAssistant from './components/AIAssistant';
import YogaPage from './components/YogaPage';
import Dashboard from './components/Dashboard';
import ProjectCalculator from './components/ProjectCalculator';
import ValueProposition from './components/ValueProposition';
import { SERVICES, WORK_FORMATS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const renderContent = () => {
    if (currentPage === 'yoga') return <YogaPage />;
    if (currentPage === 'dashboard') return <Dashboard />;

    return (
      <>
        <Hero onOpenCalculator={() => setIsCalculatorOpen(true)} />
        
        {/* Секция "Что я делаю" */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Что я делаю</h2>
            <p className="text-zinc-500 text-lg">Комплексные решения для вашего цифрового роста.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -8,
                  borderColor: "rgba(255,255,255,0.2)",
                  backgroundColor: "rgba(255,255,255,0.05)"
                }}
                className="glass-morphism p-8 rounded-3xl border border-white/5 transition-all group"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-4 inline-block cursor-default"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed transition-colors group-hover:text-zinc-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <ValueProposition />

        <ProjectSection />

        {/* Форматы работы */}
        <section className="py-24 bg-zinc-950/50 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Форматы работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {WORK_FORMATS.map((format) => (
                <motion.div 
                  key={format.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-10 rounded-[3rem] border flex flex-col h-full ${format.highlight ? 'bg-white text-black border-transparent shadow-[0_30px_60px_rgba(255,255,255,0.1)]' : 'glass-morphism border-white/10'}`}
                >
                  <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${format.highlight ? 'text-blue-600' : 'text-zinc-500'}`}>
                    {format.title}
                  </div>
                  <h3 className="text-3xl font-bold mb-6">{format.subtitle}</h3>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {format.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg className={`w-5 h-5 ${format.highlight ? 'text-blue-600' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={format.highlight ? 'text-black/80' : 'text-zinc-400'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {format.price && <div className="text-4xl font-black mb-8">{format.price}</div>}
                  <div className="mt-auto">
                    <button 
                      onClick={() => setIsCalculatorOpen(true)}
                      className={`w-full py-4 rounded-full font-bold text-lg transition-all ${format.highlight ? 'bg-black text-white hover:bg-zinc-800 active:scale-95' : 'bg-white text-black hover:bg-zinc-200 active:scale-95'}`}
                    >
                      {format.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <TechStack />

        {/* Призыв к действию */}
        <section id="contact" className="py-32 text-center px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">Готовы создавать<br />будущее?</h3>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Я открыт для выборочного партнерства и амбициозных проектов. Давайте создадим что-то необыкновенное вместе.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <motion.a 
                href="https://t.me/petrfirstov" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-blue-400 transition-all underline underline-offset-8"
              >
                Telegram
                <svg className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a 
                href="mailto:petrfirstov@gmail.com" 
                whileHover={{ x: 10 }}
                className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-zinc-400 transition-all underline underline-offset-8"
              >
                petrfirstov@gmail.com
                <svg className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </>
    );
  };

  return (
    <div className="relative selection:bg-white selection:text-black min-h-screen bg-black overflow-x-hidden">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main>
        {renderContent()}
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} FIRSTOV.AI Ecosystem. Технологично. Понятно. Глубоко.
          </div>
          <div className="flex gap-8 text-zinc-400 text-sm font-medium">
            <a href="https://github.com/petr1ov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://t.me/petrfirstov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
      
      <AnimatePresence>
        {isCalculatorOpen && (
          <ProjectCalculator 
            isOpen={isCalculatorOpen} 
            onClose={() => setIsCalculatorOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
