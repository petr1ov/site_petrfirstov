'use client';

import { motion } from 'framer-motion';
import { Bot, MessageCircle, Monitor, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platforms = [
  { icon: Send, label: 'Telegram' },
  { icon: MessageCircle, label: 'VK' },
  { icon: Bot, label: 'MAX' },
  { icon: Phone, label: 'Voice' },
  { icon: Monitor, label: 'Web' },
] as const;

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-8"
    >
      <div className="inline-flex rounded-full border border-border bg-card px-4 py-1 text-xs text-muted">petrfirstov.com</div>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Пётр Фирстов</h1>
        <p className="text-xl text-muted md:text-2xl">ИИ-боты и цифровые сервисы для бизнеса</p>
        <p className="max-w-2xl whitespace-pre-line text-base text-muted md:text-lg">
          {'Создаю ботов с искусственным интеллектом\nдля Telegram, VK и MAX.\n\nА также голосовых ботов, сайты\nи мини-сервисы для автоматизации бизнеса.'}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-muted">
        {platforms.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <Icon className="h-4 w-4 text-accent" />
            {label}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a href="#calculator">
          <Button>Рассчитать проект</Button>
        </a>
        <a href="#cases">
          <Button variant="outline">Смотреть кейсы</Button>
        </a>
      </div>
    </motion.section>
  );
}
