import { Bot, Headphones, Globe, Blocks } from 'lucide-react';

export const services = [
  {
    title: 'AI-боты',
    description:
      'Боты с искусственным интеллектом для Telegram, VK и MAX. Отвечают клиентам, принимают заявки, консультируют и продают.',
    price: 'от 15 000 ₽',
    icon: Bot,
  },
  {
    title: 'Голосовые боты',
    description: 'Отвечают на звонки, записывают клиентов, делают обзвон базы.',
    price: 'от 20 000 ₽/мес',
    icon: Headphones,
  },
  {
    title: 'Сайты и лендинги',
    description: 'Быстрый запуск сайтов для бизнеса и продуктов.',
    price: 'от 10 000 ₽',
    icon: Globe,
  },
  {
    title: 'Приложения и SaaS',
    description: 'Мини-сервисы и платформы для работы с клиентами.',
    price: 'от 30 000 ₽',
    icon: Blocks,
  },
] as const;

export const trustItems = [
  'AI-боты',
  'голосовые боты',
  'автоматизация заявок',
  'обзвон базы',
  'цифровые сервисы',
] as const;

export const workSteps = ['Вы описываете задачу', 'Я предлагаю решение', 'Запускаем проект'] as const;
