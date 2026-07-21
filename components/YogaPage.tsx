
import React from 'react';
import { motion } from 'framer-motion';


const qrCodes = [
  { title: 'Сайт', url: 'https://dhamma.org.ru/', image: '/qr/site.svg' },
  { title: 'Вк', url: 'https://vk.ru/vipassana', image: '/qr/vk.svg' },
  { title: 'Курс 1', url: 'https://mycourses.dhamma.org.ru/ru/enrolment/initial_enrolment_form/35HIet6W02owK9F', image: '/qr/course-1.svg' },
  { title: 'Курс 2', url: 'https://mycourses.dhamma.org.ru/ru/enrolment/initial_enrolment_form/BNj27whriN2K1SK', image: '/qr/course-2.svg' },
  { title: 'Подробней', url: 'https://ru.dhamma.org/ru/o-meditacii-vipassana/chto-takoe-vipassana/', image: '/qr/details.svg' },
  { title: 'Кодекс', url: 'https://ru.dhamma.org/ru/ssylki/kodeks-discipliny/', image: '/qr/code.svg' },
];

const YogaPage: React.FC = () => {
  const scrollToFormats = () => {
    const element = document.getElementById('formats');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter apple-gradient leading-[0.9]">
            Йога, тишина и<br />живое присутствие
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Практика, которая возвращает к себе. Йога, медитация и ретриты как пространство для ясности, опоры и внутренней тишины.
          </p>
          <div className="pt-8">
            <button 
              onClick={scrollToFormats}
              className="px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all"
            >
              Посмотреть форматы
            </button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* 2. МОЯ ПРАКТИКА */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">The Journey</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Моя практика</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Я в практике йоги, медитации и телесной осознанности более 6 лет. Для меня это не спорт и не «достижения», а способ жить — с вниманием, дисциплиной и честностью к себе.
              </p>
              <div className="p-6 bg-white/5 border-l-2 border-blue-500 rounded-r-2xl">
                <p className="text-white font-medium italic">
                  «Был период личного челленджа — 108 дней ежедневной практики йоги и медитации. Не как цель, а как углубление и проверка устойчивости.»
                </p>
              </div>
              <p>
                У меня есть преподавательский опыт по йоге и опыт ведения групповых и выездных практик. Я делюсь тем, что прожил сам.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 ios-shadow"
          >
            <img 
              src="https://i.ibb.co/xSz5gtXz/photo-2026-01-26-14-02-53.jpg" 
              alt="Yoga Practice" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. МОСТ К ПРОДУКТАМ */}
      <section className="py-24 text-center border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6"
        >
          <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-relaxed italic">
            «Иногда одной личной практики недостаточно. Тогда помогает поле — пространство, люди и правильный ритм. Так появились форматы ретритов и путешествий.»
          </p>
        </motion.div>
      </section>

      {/* 4. ФОРМАТЫ УЧАСТИЯ */}
      <section id="formats" className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* FORMAT 1: ONE DAY RETREAT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">One Day Intensity</div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Однодневный<br />йога-ретрит</h3>
                <p className="text-zinc-500 mt-2 font-medium">ОбьГЭС · 10:00–19:00</p>
              </div>
              
              <p className="text-xl text-zinc-300 font-light leading-relaxed">
                Формат глубокой перезагрузки за один день. Тело, эмоции и бессознательное — в мягкой, безопасной и тёплой среде.
              </p>

              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">9 часов практик от 3 мастеров:</h4>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-2xl">🧘‍♂️</span>
                    <div>
                      <div className="font-bold">Аштанга-йога + анапана</div>
                      <div className="text-sm text-zinc-500">Вход в тело, дыхание и фокус (Пётр Фирстов)</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-2xl">🎭</span>
                    <div>
                      <div className="font-bold">Эмоциональный интеллект</div>
                      <div className="text-sm text-zinc-500">Работа с чувствами и паттернами (Надежда Васильева)</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-2xl">🌀</span>
                    <div>
                      <div className="font-bold">Дао-гипноз</div>
                      <div className="text-sm text-zinc-500">Теория + глубокое погружение (Лариса Дьяконова)</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="glass-morphism p-10 md:p-14 rounded-[3.5rem] border border-white/10 ios-shadow">
                <h4 className="text-2xl font-bold mb-8">Для тех, кто хочет:</h4>
                <ul className="space-y-6 mb-12">
                  {[
                    "перезагрузиться без уезда на неделю",
                    "снять телесное и эмоциональное напряжение",
                    "услышать себя и получить ясный инсайт",
                    "побыть в поле, где спокойно и безопасно"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-zinc-400 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-xs text-zinc-500 uppercase font-black mb-1">1 блок</div>
                    <div className="text-3xl font-black">3 000 ₽</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white text-black">
                    <div className="text-xs text-black/50 uppercase font-black mb-1">Весь день</div>
                    <div className="text-3xl font-black">7 000 ₽</div>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 mb-10 leading-relaxed italic">
                  Полный день — это целостный путь: тело → эмоции → ум → бессознательное → интеграция.
                </p>

                <a 
                  href="https://t.me/m/EhqM1d-5MDhi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center w-full py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20"
                >
                  Записаться на ретрит
                </a>
                <p className="text-center mt-4 text-xs text-zinc-600 uppercase tracking-widest">Группа до 10 человек</p>
              </div>
            </motion.div>
          </div>

          {/* FORMAT 2: YOGA TOUR (5 DAYS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-white/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Journey of Friends</div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Путешествие друзей</h3>
                <p className="text-zinc-500 mt-2 font-medium">Йога-тур · Тайга · 5 дней</p>
              </div>
              
              <div className="space-y-6 text-xl text-zinc-300 font-light leading-relaxed">
                <p>
                  Это не ретрит и не тур «для всех». Это путешествие для тех, кто уже в пути. 
                </p>
                <p className="font-medium text-white">
                  Закрытый круг: практикующие йогу, психологи, коучи, проводники. Люди с внутренней дисциплиной и запросом на глубину.
                </p>
              </div>

              <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-white/10">
                <img src="https://i.ibb.co/hFjy40Km/photo-2025-12-24-21-05-10.jpg" className="w-full h-full object-cover" alt="Taiga" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="glass-morphism p-10 md:p-14 rounded-[3.5rem] border border-white/10 ios-shadow space-y-10">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Локация и суть:</h4>
                  <p className="text-zinc-400">Красноярский край · тайга · озеро Тиберкуль. Минимум цивилизации. Природа, где ум естественно замолкает.</p>
                  <p className="text-zinc-400">Йога, медитации, телесные и энергетические практики в поддержке природных состояний и тишины.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Программа:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { d: "1", t: "Сбор круга" },
                      { d: "2", t: "Вера и контекст" },
                      { d: "3", t: "Тело как храм" },
                      { d: "4", t: "День тишины" },
                      { d: "5", t: "Радость и тело" },
                      { d: "6", t: "Возвращение" }
                    ].map(day => (
                      <div key={day.d} className="flex gap-3 items-center">
                        <span className="text-xs font-bold text-purple-500">D{day.d}</span>
                        <span className="text-sm text-zinc-400">{day.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-zinc-500 uppercase font-black">Даты</div>
                      <div className="text-lg font-bold">1–5 марта 2026</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-500 uppercase font-black">Стоимость</div>
                      <div className="text-3xl font-black">40 000 ₽</div>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-500 text-right">Бронь места: 5 000 ₽</div>
                </div>

                <a 
                  href="https://t.me/m/BaZKsYluNzdi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center w-full py-5 bg-zinc-900 text-white rounded-full font-bold text-xl hover:bg-zinc-800 transition-all border border-white/10"
                >
                  Запросить участие
                </a>
                <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest">Только по предварительному согласованию</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 5. QR CODES */}
      <section className="py-32 px-6 border-t border-white/5 bg-zinc-950/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">QR Links</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">QR-коды для практики</h2>
            <p className="text-zinc-500 text-lg font-light">
              Быстрые ссылки на сайт, сообщество, регистрацию на курсы, описание Випассаны и кодекс дисциплины.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qrCodes.map((qr) => (
              <motion.a
                key={qr.title}
                href={qr.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/25 transition-all"
              >
                <div className="bg-white rounded-3xl p-4 mb-5 aspect-square flex items-center justify-center">
                  <img src={qr.image} alt={`QR-код: ${qr.title}`} className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">{qr.title}</h3>
                    <p className="text-xs text-zinc-500 break-all mt-1">{qr.url}</p>
                  </div>
                  <svg className="w-5 h-5 shrink-0 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter apple-gradient">Готовы к глубине?</h2>
          <p className="text-xl text-zinc-500 font-light">
            Если вы чувствуете отклик на любой из форматов или хотите провести совместную практику — напишите мне.
          </p>
          <div className="pt-4">
            <a 
              href="https://t.me/petrfirstov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-3xl font-bold hover:text-blue-400 transition-colors underline underline-offset-8"
            >
              @petrfirstov
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default YogaPage;
