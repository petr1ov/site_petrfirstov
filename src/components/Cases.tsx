'use client';

import { motion } from 'framer-motion';
import { cases } from '@/data/cases';
import { Card } from '@/components/ui/card';

export function Cases() {
  return (
    <motion.section
      id="cases"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Кейсы</h2>
      <div className="section-grid">
        {cases.map((item) => (
          <Card key={item.title} className="p-6 transition hover:shadow-glow">
            <h3 className="mb-3 text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
