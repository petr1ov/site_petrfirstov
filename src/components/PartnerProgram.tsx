'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function PartnerProgram() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-5 rounded-2xl border border-border bg-card p-8"
    >
      <h2 className="text-2xl font-semibold">Партнёрская программа</h2>
      <p className="max-w-xl whitespace-pre-line text-muted">{'Зарабатывайте,\nрекомендуя разработку\nботов и цифровых сервисов.'}</p>
      <p className="font-medium text-accent">10–20% с каждого проекта</p>
      <a href="https://t.me/PetrFirstovsFriendsBot" target="_blank" rel="noreferrer">
        <Button>Стать партнёром</Button>
      </a>
    </motion.section>
  );
}
