
import { Project, Service, WorkFormat, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Агрегатор мероприятий',
    category: 'Web / API',
    description: 'Единая платформа для поиска и фильтрации бизнес мероприятий города Новосибирска.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://i.ibb.co/1GLJJcvr/photo-2026-01-25-19-30-44.jpg',
    link: 'https://gorod-plus.lovable.app',
    aiPrompt: 'A sleek futuristic 3D abstract representation of a city map with glowing connection nodes and event icons, Novosibirsk city vibe, cyan and violet neon accents, professional architectural visualization style, minimalist aesthetic.'
  },
  {
    id: '2',
    title: 'ИИ-ментор по балансу',
    category: 'AI / Dashboard',
    description: 'Персональный помощник с личным кабинетом для отслеживания жизненного баланса.',
    tags: ['Gemini AI', 'Next.js', 'Firebase'],
    image: 'https://i.ibb.co/N2pCDdNR/photo-2026-01-25-19-31-23.jpg',
    link: 'https://balance-guide-anil.lovable.app',
    aiPrompt: 'A minimalist zen-style 3D workspace with a floating glass sphere containing a glowing brain, surrounded by balanced smooth stones, soft purple lighting, ultra-clean Apple-inspired aesthetic.'
  },
  {
    id: '3',
    title: 'Жизнь108',
    category: 'Telegram Mini App',
    description: 'Геймифицированное приложение для Telegram, объединяющее практики и социальное взаимодействие.',
    tags: ['React', 'TG API', 'WebSockets'],
    image: 'https://i.ibb.co/zWTW1p0T/photo-2026-01-25-19-31-28.jpg',
    link: 'https://life108.lovable.app',
    aiPrompt: 'A premium 3D mobile phone interface showing a gamified life dashboard with RPG elements, floating glowing 3D icons, vibrant purple and blue gradients, high-quality digital art, dark background.'
  },
  {
    id: '4',
    title: 'ИИ-наставник «Этера»',
    category: 'AI / Mini App',
    description: 'Система сопровождения бизнес-спринтов: ИИ-анализ задач, контроль фокуса и автоматизация прогресса участников через Telegram и Mini App.',
    tags: ['AI Agents', 'TG Mini App', 'Automation', 'CRM'],
    image: 'https://i.ibb.co/bjkGpXW6/photo-2026-01-26-15-18-54.jpg',
    link: 'https://ethera-coach.lovable.app',
    aiPrompt: 'A sophisticated 3D digital cockpit for a business leader, showing glowing goal nodes, AI assistant avatar, premium glass UI, dark blue and gold corporate palette, cinematic depth of field.'
  },
  {
    id: '5',
    title: 'Админка для TG каналов',
    category: 'Tooling',
    description: 'Удобная панель управления контентом и модерацией для крупных Telegram сообществ.',
    tags: ['Vue', 'FastAPI', 'Docker'],
    image: 'https://i.ibb.co/TqWwn38j/photo-2026-01-25-19-31-45.jpg',
    link: 'https://richclubai.lovable.app',
    aiPrompt: 'A minimalist 3D control panel with organized glass cards, content widgets, and notification badges, extremely clean layout, tech-focused, professional studio lighting, cyan accents.'
  },
  {
    id: '6',
    title: 'Бизнес-наставник ИИ',
    category: 'AI Integration',
    description: 'Внедрение ИИ в бизнес-процессы для автоматизации поддержки и продаж.',
    tags: ['LLM', 'Python', 'Vector DB'],
    image: 'https://i.ibb.co/pBhjZk40/photo-2026-01-25-19-31-39.jpg',
    link: 'https://biz-strategy-guru.lovable.app',
    aiPrompt: 'A high-end 3D robotic hand made of glass and silver delicately holding a glowing data crystal, representing business intelligence, premium blue and purple ambient light, cinematic render.'
  }
];

export const SERVICES: Service[] = [
  { title: 'Веб-сайты и сервисы', description: 'Разработка современных SPA и корпоративных платформ.', icon: '🌐' },
  { title: 'Telegram-боты', description: 'Сложная логика автоматизации внутри мессенджера.', icon: '🤖' },
  { title: 'Mini Apps', description: 'Создание полноценных приложений внутри Telegram.', icon: '📱' },
  { title: 'ИИ-ассистенты', description: 'Внедрение нейросетей в ваши бизнес-процессы.', icon: '🧠' },
  { title: 'Аналитика', description: 'Сбор и визуализация данных для принятия решений.', icon: '📈' },
  { title: 'MVP под ключ', description: 'Быстрый запуск продукта для проверки гипотез.', icon: '🚀' }
];

export const WORK_FORMATS: WorkFormat[] = [
  {
    id: 'solo',
    title: 'Соло-разработка',
    subtitle: 'Проектная работа под ключ',
    features: ['Сайты, боты, mini-app', 'Индивидуальный расчет', 'Полный цикл разработки', 'Поддержка после запуска'],
    cta: 'Обсудить проект',
    highlight: false
  },
  {
    id: 'mentor',
    title: 'ИИ-наставничество',
    subtitle: 'Ваш квантовый скачок',
    features: ['2 недели (индивидуально 1 на 1)', '10 часов живых встреч', 'Создание реального продукта', 'Обучение вайб-кодингу'],
    price: '50 000 ₽',
    cta: 'Записаться на курс',
    highlight: true,
    link: 'https://t.me/m/QElpcdBBZDA6'
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: '🟦', category: 'Frontend' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'Telegram API', icon: '✈️', category: 'Tools' },
  { name: 'OpenAI/Gemini', icon: '✨', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
  { name: 'Docker', icon: '🐳', category: 'Tools' }
];
