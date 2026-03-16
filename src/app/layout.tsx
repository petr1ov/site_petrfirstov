import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Пётр Фирстов — AI-боты и цифровые сервисы для бизнеса',
  description:
    'Разработка AI-ботов, голосовых ботов, сайтов и мини-сервисов для автоматизации бизнеса. Telegram, VK, MAX.',
  openGraph: {
    title: 'Пётр Фирстов — AI-боты для бизнеса',
    description:
      'Создание AI-ботов, голосовых решений и цифровых сервисов для роста продаж и автоматизации.',
    url: 'https://petrfirstov.com',
    siteName: 'petrfirstov.com',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
