
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const RATE_PER_HOUR = 3000;

const PROJECT_TYPES = [
  { id: 'web', title: 'Веб-сайт / Landing', icon: '🌐', baseHours: 20 },
  { id: 'bot', title: 'Telegram Бот', icon: '🤖', baseHours: 15 },
  { id: 'miniapp', title: 'Mini App', icon: '📱', baseHours: 40 },
  { id: 'ai', title: 'ИИ Интеграция', icon: '🧠', baseHours: 30 },
];

const COMPLEXITY_LEVELS = [
  { id: 'simple', title: 'Базовый', multiplier: 1, description: 'Минимальный набор функций' },
  { id: 'medium', title: 'Стандарт', multiplier: 2, description: 'Средняя сложность и API' },
  { id: 'pro', title: 'Продвинутый', multiplier: 4, description: 'Сложная архитектура и ИИ' },
];

const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);

  const calculateTotal = () => {
    const type = PROJECT_TYPES.find(t => t.id === selectedType);
    const complexity = COMPLEXITY_LEVELS.find(c => c.id === selectedComplexity);
    if (!type || !complexity) return 0;
    return type.baseHours * complexity.multiplier * RATE_PER_HOUR;
  };

  const calculateHours = () => {
    const type = PROJECT_TYPES.find(t => t.id === selectedType);
    const complexity = COMPLEXITY_LEVELS.find(c => c.id === selectedComplexity);
    if (!type || !complexity) return 0;
    return type.baseHours * complexity.multiplier;
  };

  const handleReset = () => {
    setStep(1);
    setSelectedType(null);
    setSelectedComplexity(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl" 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl glass-morphism rounded-[3rem] border border-white/10 overflow-hidden ios-shadow"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10 md:p-14">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Шаг 1 из 3</div>
                  <h2 className="text-3xl font-bold tracking-tight">Какую задачу решаем?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECT_TYPES.map(type => (
                    <button
                      key={type.id}
                      onClick={() => { setSelectedType(type.id); setStep(2); }}
                      className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-left flex items-center gap-4 group"
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform">{type.icon}</span>
                      <span className="font-semibold text-lg">{type.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Шаг 2 из 3</div>
                  <h2 className="text-3xl font-bold tracking-tight">Насколько сложный проект?</h2>
                </div>
                <div className="space-y-4">
                  {COMPLEXITY_LEVELS.map(level => (
                    <button
                      key={level.id}
                      onClick={() => { setSelectedComplexity(level.id); setStep(3); }}
                      className="w-full p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-left flex justify-between items-center group"
                    >
                      <div>
                        <div className="font-bold text-xl mb-1">{level.title}</div>
                        <div className="text-zinc-500 text-sm">{level.description}</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="text-zinc-500 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  ← Назад
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 text-center"
              >
                <div>
                  <div className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Результат расчета</div>
                  <h2 className="text-4xl font-black tracking-tight apple-gradient">
                    {calculateTotal().toLocaleString('ru-RU')} ₽
                  </h2>
                  <p className="text-zinc-500 mt-4 text-lg">
                    Ориентировочное время: <span className="text-white font-bold">{calculateHours()} ч.</span> вайбкодинга.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/5 rounded-3xl p-6 text-left">
                  <div className="text-xs text-zinc-500 uppercase font-black tracking-widest mb-4">Детализация</div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-zinc-400">Тип проекта</span>
                    <span>{PROJECT_TYPES.find(t => t.id === selectedType)?.title}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-zinc-400">Сложность</span>
                    <span>{COMPLEXITY_LEVELS.find(c => c.id === selectedComplexity)?.title}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-zinc-400">Ставка (1ч)</span>
                    <span>3 000 ₽</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl text-left">
                  <span className="text-xl">💡</span>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Стоимость рассчитана для формата <span className="text-blue-400 font-bold">соло-разработки с ИИ</span>, 
                    без агентских накруток и лишних ролей в команде. Вы получаете прямой доступ к исполнителю.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={onClose}
                    className="flex-1 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    Обсудить проект
                  </button>
                  <button 
                    onClick={handleReset}
                    className="flex-1 py-5 bg-zinc-900 text-white rounded-full font-bold border border-white/10 hover:bg-zinc-800 transition-all"
                  >
                    Пересчитать
                  </button>
                </div>
                
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-loose">
                  * Итоговая стоимость может варьироваться в зависимости от конкретных требований и интеграций.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCalculator;
