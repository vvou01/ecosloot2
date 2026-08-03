import React from 'react';
import { motion } from 'framer-motion';

const Grain = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '128px',
  }} />
);

const columns = [
  {
    number: '01',
    title: 'Doelen',
    body: 'Waterbeheerders werken met doelen afgeleid van KRW-normen en ecologische ambities. Op papier helder, maar in de praktijk lastig te vertalen naar concrete maatregelen.',
    accent: 'hsl(200,40%,50%)',
    accentBg: 'rgba(80,140,170,0.10)',
    blob: '58% 42% 50% 50% / 48% 54% 46% 52%',
  },
  {
    number: '02',
    title: 'Monitoring',
    body: 'Ecologische monitoring is vaak breed en intensief opgezet. Dat levert veel data op, maar niet altijd een helder oordeel dat direct aansluit op beheer.',
    accent: 'hsl(138,40%,34%)',
    accentBg: 'rgba(52,100,60,0.10)',
    blob: '44% 56% 58% 42% / 54% 44% 56% 46%',
  },
  {
    number: '03',
    title: 'Beheer & maatregelen',
    body: 'Beheer is complex. Een waterbeheerder heeft beperkte invloed op het systeem. Waterveiligheid, wateraanvoer, inrichting en historische context spelen allemaal een rol. Niet alles is bij te sturen.',
    accent: 'hsl(47,60%,42%)',
    accentBg: 'rgba(170,130,40,0.10)',
    blob: '52% 48% 44% 56% / 46% 58% 42% 54%',
  },
];

export default function GoalsGap() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'hsl(45,28%,96%)' }}>
      <Grain />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: 52 }}>
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
          <path d="M0,26 C480,52 960,0 1440,26 L1440,0 L0,0 Z" fill="hsl(138,22%,91%)" />
        </svg>
      </div>

      {/* Waterlelie watermark right */}
      <svg className="absolute right-10 top-16 opacity-[0.055] pointer-events-none" width="140" height="90" viewBox="0 0 140 90" aria-hidden="true">
        <ellipse cx="50" cy="65" rx="40" ry="18" fill="hsl(138,40%,28%)" transform="rotate(-8,50,65)" />
        <ellipse cx="90" cy="55" rx="30" ry="14" fill="hsl(138,38%,30%)" transform="rotate(6,90,55)" />
        <circle cx="50" cy="50" r="5" fill="hsl(47,65%,50%)" opacity="0.8" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
            De praktijk
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-5" style={{ color: 'hsl(138,40%,12%)' }}>
            Doelen, monitoring en beheer{' '}
            <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>staan vaak los van elkaar</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-lg font-light leading-relaxed max-w-2xl mx-auto" style={{ color: 'hsl(138,12%,40%)' }}>
            In de praktijk zijn doelen, monitoring en beheermaatregelen vaak slecht op elkaar afgestemd. Het resultaat: veel data, weinig richting.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, i) => (
            <motion.div key={col.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.14 }}>
              <div className="relative p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'hsl(45,30%,97%)',
                  borderRadius: col.blob,
                  boxShadow: '0 2px 10px rgba(52,100,60,0.06)',
                  borderTop: `3px solid ${col.accent}`,
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(52,100,60,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}
              >
                <span className="font-display text-5xl font-light mb-4 block" style={{ color: 'rgba(52,100,60,0.10)' }}>
                  {col.number}
                </span>
                <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-full"
                  style={{ background: col.accentBg, borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" stroke={col.accent} strokeWidth="1.5" fill="none" />
                    <circle cx="11" cy="11" r="3" fill={col.accent} opacity="0.5" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                  {col.title}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                  {col.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}