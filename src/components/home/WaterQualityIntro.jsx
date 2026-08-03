import React from 'react';
import { motion } from 'framer-motion';

const Grain = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '128px',
  }} />
);

const qualities = [
  { label: 'Chemische stoffen', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 11 C8 8 14 8 14 11 C14 14 8 14 8 11Z" fill="currentColor" opacity="0.4" />
      <circle cx="11" cy="11" r="2" fill="currentColor" />
    </svg>
  )},
  { label: 'Waterplanten', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 20 L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="11" cy="7" rx="5" ry="9" fill="currentColor" opacity="0.5" />
      <path d="M6 17 C8 14 11 15 11 18" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )},
  { label: 'Waterdiertjes', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M4 13 Q11 6 18 13 Q11 20 4 13Z" fill="currentColor" opacity="0.45" />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )},
  { label: 'Algen', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 15 Q7 9 11 14 Q15 9 19 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="7" cy="18" r="1.5" fill="currentColor" opacity="0.55" />
      <circle cx="15" cy="18" r="1.5" fill="currentColor" opacity="0.55" />
    </svg>
  )},
  { label: 'Fysieke kenmerken', icon: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 16 C6 10 9 14 11 10 C13 6 16 12 19 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M3 19 L19 19" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )},
];

export default function WaterQualityIntro() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
      <Grain />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: 52 }}>
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
          <path d="M0,26 C240,52 480,4 720,28 C960,52 1200,8 1440,24 L1440,0 L0,0 Z" fill="hsl(200,30%,88%)" />
        </svg>
      </div>

      {/* Subtle kroos watermark */}
      <svg className="absolute right-10 top-20 opacity-[0.055] pointer-events-none" width="120" height="75" viewBox="0 0 120 75" aria-hidden="true">
        <ellipse cx="18" cy="38" rx="14" ry="7" fill="hsl(138,40%,28%)" />
        <ellipse cx="48" cy="26" rx="11" ry="6" fill="hsl(138,38%,30%)" />
        <ellipse cx="74" cy="46" rx="13" ry="7" fill="hsl(138,36%,26%)" />
        <ellipse cx="100" cy="32" rx="10" ry="5" fill="hsl(138,40%,28%)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Waterkwaliteit
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,12%)' }}>
              Water is meer dan{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>H₂O</span>
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="space-y-4 font-body text-base font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
              <p>
              Waterkwaliteit is essentieel voor een gezonde leefomgeving en biodiversiteit. De Kaderrichtlijn Water (KRW) stelt bovendien steeds hogere eisen aan Nederlandse wateren.
              </p>
              <p>
              Waterkwaliteit is geen enkelvoudig begrip. Het gaat om een samenspel van chemische stoffen, waterplanten, waterdieren, algen en de fysieke kenmerken van de watergang.
              </p>
              <p>
              Waar begin je? En hoe weet je of de ecologie in balans is?
              </p>
            </motion.div>
          </div>

          {/* Right: quality icons grid */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {qualities.map((q, i) => (
                <motion.div key={q.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}>
                  <div className="p-5 flex flex-col items-start gap-3 h-full transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, hsl(45,28%,94%) 0%, hsl(138,20%,92%) 100%)',
                      borderRadius: i % 2 === 0 ? '55% 45% 50% 50% / 50% 55% 45% 50%' : '45% 55% 60% 40% / 55% 45% 55% 45%',
                      boxShadow: '0 2px 8px rgba(52,100,60,0.06)',
                      color: 'hsl(138,40%,26%)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(52,100,60,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(52,100,60,0.06)'}
                  >
                    <span>{q.icon}</span>
                    <span className="font-body text-sm font-medium" style={{ color: 'hsl(138,38%,18%)' }}>{q.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}