import { Mail, Users } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">Пётр Фирстов</p>
          <p>AI-разработчик</p>
        </div>
        <div className="flex gap-6">
          <a
            className="inline-flex items-center gap-2 hover:text-white"
            href="https://t.me/PetrFirstovsFriendsBot"
            target="_blank"
            rel="noreferrer"
          >
            <Users className="h-4 w-4" />Telegram
          </a>
          <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:hello@petrfirstov.com">
            <Mail className="h-4 w-4" />Email
          </a>
        </div>
      </div>
    </footer>
  );
}
