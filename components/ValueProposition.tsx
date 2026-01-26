
import React from 'react';
import { motion } from 'framer-motion';

const ADVANTAGES = [
  {
    title: 'Меньше издержек',
    description: 'Вы не платите за офис, менеджеров и лишние согласования. Бюджет идет только на продукт.',
    icon: '💰'
  },
  {
    title: 'Быстрее запуск',
    description: 'Нет передачи задач между отделами. Решения принимаются и внедряются мгновенно.',
    icon: '⚡'
  },
  {
    title: 'Прямая связь',
    description: 'Вы общаетесь напрямую с тем, кто проектирует и собирает ваш продукт.',
    icon: '🤝'
  },
  {
    title: 'ИИ-мощности',
    description: 'Нейросети берут на себя рутину: код, аналитику и тексты, ускоряя работу в 3-4 раза.',
    icon: '🧠'
  }
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Evolution of Workflow</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight apple-gradient">
              Модель разработки <br />нового поколения.
            </h2>
          </div>
          
          <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            <p>
              Раньше для создания качественного продукта требовался отдел из 5–7 человек. 
              Сегодня сильный разработчик в связке с ИИ заменяет целую студию.
            </p>
            <p className="font-medium text-white">
              По сути, вы получаете уровень студии — без её накладных расходов.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-morphism p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{adv.icon}</div>
              <h4 className="text-lg font-bold mb-2">{adv.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
