import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const Grain = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '128px',
  }} />
);

const pillars = [
  {
    label: 'Laagdrempelig',
    description: 'Geen uitgebreid veldonderzoek nodig. Een beperkt aantal eenvoudig te onderscheiden groeivormen volstaat.',
    blob: '60% 40% 50% 50% / 50% 46% 54% 50%',
  },
  {
    label: 'Snel inzicht',
    description: 'Direct een indicatief kwaliteitsoordeel, zonder weken te wachten op laboratoriumresultaten.',
    blob: '45% 55% 60% 40% / 55% 50% 50% 45%',
  },
  {
    label: 'Aansluiting op KRW',
    description: 'Uitkomsten sluiten aan op de principes van de Kaderrichtlijn Water (KRW). Bruikbaar in beleids- en beheerscontext.',
    blob: '55% 45% 40% 60% / 48% 55% 45% 52%',
  },
  {
    label: 'Concrete handvatten',
    description: 'De uitslag laat direct zien waar te veel of te weinig van is en geeft richting aan het beheer.',
    blob: '48% 52% 56% 44% / 56% 44% 54% 46%',
  },
];

export default function FromComplexToInsight() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
      <Grain />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: 52 }}>
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
          <path d="M0,26 C360,52 720,0 1080,28 C1260,40 1380,10 1440,18 L1440,0 L0,0 Z" fill="hsl(45,30%,97%)" />
        </svg>
      </div>

      {/* Riet watermark left */}
      <svg className="absolute left-0 bottom-8 opacity-[0.07] pointer-events-none" width="55" height="200" viewBox="0 0 55 200" aria-hidden="true">
        <line x1="28" y1="200" x2="28" y2="26" stroke="hsl(138,38%,28%)" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="28" cy="16" rx="10" ry="26" fill="hsl(47,65%,48%)" />
        <line x1="44" y1="200" x2="44" y2="66" stroke="hsl(138,38%,28%)" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="44" cy="56" rx="8" ry="20" fill="hsl(47,60%,50%)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
            Aanpak
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,12%)' }}>
            Gericht meten,{' '}
            <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>direct begrijpen</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-lg font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
            Uitgebreide monitoring leidt niet altijd tot een helder oordeel of concrete maatregelen. Ecosloot richt zich op een beperkte selectie van snel in te schatten indicatoren die direct inzicht geven in de ecologische balans.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={p.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className="p-7 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'hsl(45,30%,97%)',
                  borderRadius: p.blob,
                  boxShadow: '0 2px 10px rgba(52,100,60,0.06)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(52,100,60,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}
              >
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-body font-medium mb-4 block w-fit"
                  style={{ background: 'rgba(52,100,60,0.08)', color: 'hsl(138,40%,24%)' }}>
                  {p.label}
                </span>
                <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}