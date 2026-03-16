'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { services, trustItems, workSteps } from '@/data/services';

export function Services() {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">Решения для автоматизации бизнеса</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted">
          {trustItems.map((item) => (
            <span key={item} className="rounded-full border border-border bg-card px-4 py-2">
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">Услуги</h2>
        <div className="section-grid">
          {services.map(({ title, description, price, icon: Icon }) => (
            <motion.div key={title} whileHover={{ scale: 1.02 }}>
              <Card className="h-full p-6 transition hover:shadow-glow">
                <Icon className="mb-4 h-5 w-5 text-accent" />
                <h3 className="mb-3 text-lg font-medium">{title}</h3>
                <p className="mb-6 text-sm text-muted">{description}</p>
                <p className="text-sm font-medium text-accent">{price}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">Как это работает</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {workSteps.map((item, idx) => (
            <Card key={item} className="p-6">
              <p className="mb-2 text-sm text-accent">0{idx + 1}</p>
              <p>{item}</p>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
