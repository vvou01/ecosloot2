import React from 'react';
import { motion } from 'framer-motion';

const groeivormen = [
  {
    key: 'emergent',
    label: 'Emergent / emers',
    sub: 'Boven water',
    description: 'Planten die met hun wortels in de bodem staan, maar waarvan blad of stengels boven het water uitsteken. Bekende voorbeelden zijn riet en lisdodde.',
    blob: '58% 42% 50% 50% / 48% 54% 46% 52%',
    color: 'hsl(47,58%,40%)',
    colorBg: 'rgba(150,120,40,0.10)',
    icon: (
      <svg width="36" height="52" viewBox="0 0 36 52" fill="none" aria-hidden="true">
        <line x1="18" y1="52" x2="18" y2="18" stroke="hsl(138,38%,30%)" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="18" cy="10" rx="9" ry="18" fill="hsl(47,65%,48%)" />
        <line x1="28" y1="52" x2="28" y2="32" stroke="hsl(138,38%,30%)" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="28" cy="26" rx="6" ry="12" fill="hsl(47,60%,50%)" />
        <line x1="8" y1="52" x2="8" y2="36" stroke="hsl(138,38%,30%)" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="8" cy="30" rx="6" ry="12" fill="hsl(47,60%,52%)" />
      </svg>
    ),
  },
  {
    key: 'ondergedoken',
    label: 'Ondergedoken / submers',
    sub: 'Onder water',
    description: 'Planten die volledig onder water groeien. De wortels staan in de waterbodem en de bladeren bevinden zich onder het wateroppervlak. Bekende voorbeelden zijn waterpest en fonteinkruid.',
    blob: '44% 56% 58% 42% / 54% 44% 56% 46%',
    color: 'hsl(200,45%,36%)',
    colorBg: 'rgba(50,110,140,0.10)',
    icon: (
      <svg width="44" height="36" viewBox="0 0 44 36" fill="none" aria-hidden="true">
        <path d="M4,28 C8,20 14,16 22,22 C30,28 36,18 40,24" stroke="hsl(138,40%,32%)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M6,34 C10,26 18,22 26,28 C34,34 38,26 42,30" stroke="hsl(138,38%,36%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
        <circle cx="14" cy="32" r="2.5" fill="hsl(138,42%,34%)" opacity="0.5" />
        <circle cx="28" cy="30" r="2" fill="hsl(138,42%,34%)" opacity="0.5" />
        <circle cx="36" cy="34" r="1.5" fill="hsl(138,42%,34%)" opacity="0.4" />
      </svg>
    ),
  },
  {
    key: 'drijvend',
    label: 'Drijvend / natans',
    sub: 'Op het oppervlak',
    description: 'Planten met bladeren die plat op het wateroppervlak drijven. De wortels staan meestal in de bodem. Bekende voorbeelden zijn witte waterlelie en gele plomp.',
    blob: '52% 48% 44% 56% / 46% 58% 42% 54%',
    color: 'hsl(138,42%,30%)',
    colorBg: 'rgba(52,100,60,0.10)',
    icon: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <ellipse cx="20" cy="22" rx="16" ry="7" fill="hsl(138,40%,30%)" transform="rotate(-8,20,22)" opacity="0.75" />
        <ellipse cx="36" cy="20" rx="10" ry="5" fill="hsl(138,38%,32%)" transform="rotate(5,36,20)" opacity="0.65" />
        <path d="M20,22 L21,30" stroke="hsl(138,38%,24%)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="14" r="5" fill="hsl(45,65%,82%)" opacity="0.88" />
        <circle cx="20" cy="14" r="2.5" fill="hsl(47,70%,62%)" opacity="0.9" />
      </svg>
    ),
  },
  {
    key: 'kroos',
    label: 'Kroos',
    sub: 'Klein drijvend',
    description: 'Kleine drijvende plantjes van meestal enkele centimeters groot. Kroos wortelt niet in de waterbodem, maar kan wel korte worteltjes hebben. Bekende voorbeelden zijn eendenkroos en grote kroosvaren.',
    blob: '48% 52% 56% 44% / 56% 44% 54% 46%',
    color: 'hsl(138,48%,28%)',
    colorBg: 'rgba(40,110,50,0.10)',
    icon: (
      <svg width="44" height="28" viewBox="0 0 44 28" fill="none" aria-hidden="true">
        <ellipse cx="8" cy="16" rx="6" ry="3.5" fill="hsl(138,50%,36%)" opacity="0.80" />
        <ellipse cx="18" cy="10" rx="5.5" ry="3" fill="hsl(138,48%,34%)" opacity="0.75" />
        <ellipse cx="28" cy="18" rx="6" ry="3.5" fill="hsl(138,50%,36%)" opacity="0.80" />
        <ellipse cx="38" cy="12" rx="5" ry="3" fill="hsl(138,48%,34%)" opacity="0.70" />
        <ellipse cx="13" cy="22" rx="5" ry="3" fill="hsl(138,46%,38%)" opacity="0.65" />
        <ellipse cx="32" cy="24" rx="5.5" ry="3" fill="hsl(138,46%,36%)" opacity="0.65" />
      </svg>
    ),
  },
  {
    key: 'flab',
    label: 'FLAB',
    sub: 'Drijvend alg',
    description: 'FLAB staat voor Floating Algae Beds: drijvende matten van draadalg. Deze algen vormen matten op het wateroppervlak. Algen die alleen onder water groeien vallen binnen deze methode onder ondergedoken begroeiing.',
    blob: '55% 45% 40% 60% / 48% 55% 45% 52%',
    color: 'hsl(90,38%,34%)',
    colorBg: 'rgba(80,130,50,0.10)',
    icon: (
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none" aria-hidden="true">
        <path d="M2,14 Q10,8 18,14 Q26,20 34,14 Q40,10 42,14" stroke="hsl(100,40%,38%)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M4,18 Q12,12 20,18 Q28,22 38,18" stroke="hsl(100,38%,40%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
        <ellipse cx="12" cy="14" rx="4" ry="2" fill="hsl(100,40%,40%)" opacity="0.35" />
        <ellipse cx="28" cy="16" rx="4" ry="2" fill="hsl(100,40%,40%)" opacity="0.35" />
      </svg>
    ),
  },
];

export default function GroeivormenCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {groeivormen.map((g, i) => (
        <motion.div key={g.key}
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}>
          <div className="p-7 h-full transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'hsl(45,30%,97%)',
              borderRadius: g.blob,
              boxShadow: '0 2px 10px rgba(52,100,60,0.06)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(52,100,60,0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-5 h-14"
              style={{ background: g.colorBg, borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%', padding: '8px 12px', width: 'fit-content' }}>
              {g.icon}
            </div>
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.18em] mb-1 block" style={{ color: g.color }}>
              {g.sub}
            </span>
            <h3 className="font-display text-lg font-medium mb-3" style={{ color: 'hsl(138,40%,14%)' }}>
              {g.label}
            </h3>
            <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'hsl(138,12%,42%)' }}>
              {g.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}