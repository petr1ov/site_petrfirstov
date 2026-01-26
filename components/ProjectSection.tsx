
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => {
  const categoryMap: Record<string, string> = {
    'Web / API': 'Web / API',
    'AI / Dashboard': 'AI / Dashboard',
    'Telegram Mini App': 'Telegram Mini App',
    'SaaS / Data': 'SaaS / Data',
    'Tooling': 'Инструменты',
    'AI Integration': 'ИИ Интеграция'
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full flex flex-col"
    >
      <div className="overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 aspect-[4/3] relative ios-shadow transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
        />
        
        {/* Overlay gradient for better text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 left-6 flex gap-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest"
            >
                {categoryMap[project.category] || project.category}
            </motion.div>
        </div>

        {/* Floating action button on image for quick access */}
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 z-10"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      <div className="mt-8 px-2 flex flex-col flex-grow">
        <motion.h4 
          className="text-2xl font-bold mb-3 tracking-tight group-hover:apple-gradient transition-all duration-300"
        >
          {project.title}
        </motion.h4>
        <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2 transition-colors group-hover:text-zinc-400">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <motion.span 
              key={tag} 
              initial={{ opacity: 0.6 }}
              whileHover={{ 
                opacity: 1, 
                y: -2, 
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)" 
              }}
              className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-[10px] text-zinc-400 font-semibold transition-all duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {project.link && (
          <div className="mt-auto pt-2">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors group/link"
            >
              Посмотреть проект
              <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Web / API',
    'AI / Dashboard',
    'Telegram Mini App',
    'SaaS / Data',
    'Tooling',
    'AI Integration'
  ];

  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];
    if (filter !== 'All') {
      result = result.filter((project) => project.category === filter);
    }
    return result;
  }, [filter]);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Portfolio Cases</div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 apple-gradient">Избранные<br />проекты.</h3>
          <p className="text-zinc-500 text-xl font-light">Реальные кейсы, демонстрирующие подход к архитектуре и пользовательскому опыту.</p>
        </motion.div>

        <motion.div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="glass-morphism px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest border border-white/10 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer pr-12 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:14px] bg-[right_16px_center] bg-no-repeat"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-zinc-900">{cat === 'All' ? 'Все категории' : cat}</option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-zinc-500 text-xl font-light">В этой категории пока нет опубликованных кейсов.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
