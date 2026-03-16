'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const quiz = [
  { q: 'Что нужно сделать?', options: ['AI-бот', 'голосовой бот', 'сайт', 'мини-сервис'] },
  { q: 'Где будет работать бот?', options: ['Telegram', 'VK', 'MAX', 'несколько платформ'] },
  { q: 'Какая задача?', options: ['продажи', 'поддержка', 'запись клиентов', 'обзвон базы'] },
  { q: 'Когда нужен запуск?', options: ['срочно', '1-2 недели', '1 месяц'] },
] as const;

const demoReplies: Record<string, string> = {
  clinic:
    'Для клиники рекомендую AI-бота в Telegram + виджет на сайт: ответы на частые вопросы, запись к врачу, напоминания и передача лидов в CRM.',
  sales:
    'Для продаж подойдёт AI-бот с квалификацией заявок: собираем контакты, сегментируем клиента, передаём в отдел продаж и запускаем догрев.',
};

export function Calculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [demoText, setDemoText] = useState('');
  const done = step >= quiz.length;

  const result = useMemo(() => {
    if (!done) return null;
    return { price: '15 000 — 60 000 ₽', time: '1-3 недели' };
  }, [done]);

  const demoAnswer = useMemo(() => {
    const text = demoText.toLowerCase();
    if (text.includes('клиник')) return demoReplies.clinic;
    if (text.includes('продаж')) return demoReplies.sales;
    if (!text) return 'Опишите задачу, и я покажу пример AI-решения под ваш бизнес.';
    return 'Можно сделать AI-бота под вашу задачу: приём заявок, ответы клиентам, автоматизация продаж и интеграция с CRM.';
  }, [demoText]);

  const onSelect = (value: string) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    setStep((s) => s + 1);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.section
        id="calculator"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">Калькулятор проекта</h2>
        <Card className="p-6">
          {!done ? (
            <div className="space-y-4">
              <p className="text-sm text-muted">
                Вопрос {step + 1} из {quiz.length}
              </p>
              <h3 className="text-lg font-medium">{quiz[step].q}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {quiz[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => onSelect(option)}
                    className="rounded-xl border border-border bg-bg px-4 py-3 text-left text-sm transition hover:border-accent hover:shadow-glow"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg font-medium">Примерная стоимость: {result?.price}</p>
              <p className="text-muted">Срок: {result?.time}</p>
              <a href="https://t.me/PetrFirstovsFriendsBot" target="_blank" rel="noreferrer" className="inline-flex">
                <Button>Получить примеры</Button>
              </a>
            </div>
          )}
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">AI DEMO</h2>
        <Card className="space-y-4 p-6">
          <p className="text-sm text-muted">Напишите, какую задачу хотите автоматизировать. Пример: «Мне нужен бот для клиники».</p>
          <textarea
            value={demoText}
            onChange={(e) => setDemoText(e.target.value)}
            placeholder="Мне нужен бот для клиники"
            className="min-h-28 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition focus:border-accent"
          />
          <div className="rounded-xl border border-border bg-bg p-4 text-sm text-muted">{demoAnswer}</div>
        </Card>
      </motion.section>
    </div>
  );
}
