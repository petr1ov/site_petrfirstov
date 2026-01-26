
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => {
  const [filter, setFilter] = useState<'Все' | 'Mobile' | 'Backend' | 'Frontend' | 'Tools'>('Все');

  const filteredSkills = filter === 'Все' ? SKILLS : SKILLS.filter(s => s.category === filter);

  const filterLabels: Record<string, string> = {
    'Все': 'Все',
    'Mobile': 'Мобайл',
    'Backend': 'Бэкенд',
    'Frontend': 'Фронтенд',
    'Tools': 'Инструменты'
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Технологический стек</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Все', 'Mobile', 'Backend', 'Frontend', 'Tools'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {filterLabels[cat]}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div 
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  borderColor: "rgba(255,255,255,0.4)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.5), 0 0 15px rgba(255,255,255,0.05)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="glass-morphism p-8 rounded-3xl text-center border border-white/10 transition-colors group cursor-default"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="font-semibold text-lg transition-colors group-hover:text-white">{skill.name}</div>
                <div className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">{filterLabels[skill.category]}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
