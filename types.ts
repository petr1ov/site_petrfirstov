
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link?: string; // Ссылка на демо или работающий проект
  aiPrompt?: string; // Промпт для генерации стильного ИИ-изображения
  metrics?: { label: string; value: string }[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface WorkFormat {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price?: string;
  cta: string;
  highlight?: boolean;
  link?: string; // Прямая ссылка на мессенджер или форму
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AnalyticsEvent {
  id: string;
  event: string;
  user: string;
  time: string;
  status: 'success' | 'pending';
}
