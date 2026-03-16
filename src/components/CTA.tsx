'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-card p-8 text-center"
    >
      <h2 className="mb-3 text-2xl font-semibold">Есть задача для автоматизации?</h2>
      <p className="mb-6 text-muted">Можно рассчитать стоимость проекта и посмотреть примеры решений.</p>
      <a href="#calculator">
        <Button>Рассчитать проект</Button>
      </a>
    </motion.section>
  );
}
