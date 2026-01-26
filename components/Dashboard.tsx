
import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const levels = [
    'Осознанность', 'Тело', 'Ум', 'Отношения',
    'Деньги', 'Реализация', 'Служение', 'Поток'
  ];

  const quests = [
    { title: '7 дней медитации', icon: '🧘‍♂️', desc: 'Ежедневная практика анапаны.' },
    { title: 'Ценности проекта', icon: '💎', desc: 'Глубокая проработка смыслов.' },
    { title: 'Разрыв паттерна', icon: '🔄', desc: 'Действие из нового состояния.' }
  ];

  const APP_URL = "https://life108.lovable.app";

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* 1. Hero / Вход в игру */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-6xl space-y-12 py-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">
            System Online: 108 Levels
          </div>
          <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[1.05] apple-gradient pb-4">
            Жизнь – это игра.<br />
            <span className="text-zinc-600">А ты на каком уровне?</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            «Жизнь 108» – это игра реальной жизни, где твои действия, осознанность и выбор превращаются в уровни, квесты и рост.
          </p>
          <div className="pt-12">
            <a 
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
            >
              Войти в игру
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. В чём суть игры */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">
            «Жизнь 108» – это система, которая собирает твой путь: мысли, решения, практики и превращает их в <span className="text-blue-500">механику роста</span>.
          </h2>
          <div className="p-10 rounded-[3rem] bg-white text-black inline-block">
            <p className="text-2xl md:text-4xl font-black tracking-tight">
              Ты не играешь в персонажа. <br />
              <span className="opacity-50">Ты и есть персонаж.</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. Как работает игра */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              step: '01', 
              title: 'Общение с ИИ', 
              desc: 'Распаковка личности, коучинг, йога. Все диалоги – про твою реальную жизнь.',
              icon: '🧠'
            },
            { 
              step: '02', 
              title: 'Единый профиль', 
              desc: 'Инсайты и данные собираются в твою карту игрока, подсвечивая паттерны и силу.',
              icon: '👤'
            },
            { 
              step: '03', 
              title: 'Твой путь', 
              desc: 'Игра выдает квесты, открывает уровни и соединяет тебя с нужными людьми.',
              icon: '🛤️'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 space-y-6"
            >
              <div className="text-blue-500 font-black text-xs tracking-widest">{item.step} / STEP</div>
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Уровни игры */}
      <section className="py-32 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">108 Уровней</h2>
            <p className="text-zinc-500 text-lg">Которые ты проходишь не в теории, а в реальности.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {levels.map((lvl, i) => (
              <motion.div 
                key={lvl}
                whileHover={{ y: -5, borderColor: 'rgba(59,130,246,0.3)' }}
                className="p-8 rounded-3xl border border-white/5 bg-black/40 text-sm font-bold uppercase tracking-widest"
              >
                {lvl}
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-zinc-600 text-xs uppercase tracking-[0.3em]">And 100 more steps to mastery</p>
        </div>
      </section>

      {/* 5. Квесты и практика */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Квесты и практика</h2>
          <p className="text-zinc-500">Каждое задание – это реальное действие или выбор.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quests.map((q, i) => (
            <div key={i} className="glass-morphism p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-4">
              <span className="text-4xl">{q.icon}</span>
              <div className="font-bold text-xl">{q.title}</div>
              <p className="text-zinc-500 text-sm">{q.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Команда и люди */}
      <section className="py-32 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ты не идёшь один</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              В игре есть слой <span className="text-white font-bold">«Команда»</span>, где мэтчинг строится на архетипах, ценностях и генных ключах.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Партнёры', 'Наставники', 'Друзья', 'Союзники'].map(tag => (
                <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Для кого эта игра */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-zinc-700 mb-12 text-center">Focus Group</h2>
        <div className="space-y-4">
          {[
            'Для тех, кто чувствует, что «можно глубже»',
            'Для тех, кто устал от хаоса и ищет структуру',
            'Для тех, кто растёт через честную практику',
            'Для создателей, предпринимателей и искателей'
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-6 group hover:bg-white hover:text-black transition-all cursor-default">
              <span className="text-blue-500 font-black group-hover:text-black">/ {i + 1}</span>
              <span className="text-xl font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Финальный CTA */}
      <section className="py-40 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
              Ты уже в игре.<br />
              <span className="text-zinc-600 italic font-light">Вопрос только – осознанно или нет.</span>
            </h2>
          </div>
          <a 
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-6 bg-blue-600 text-white rounded-full font-bold text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
          >
            Начать путь
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Dashboard;
