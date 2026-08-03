import React from 'react';
import { motion } from 'framer-motion';

const blocks = [
  {
    title: 'Onderwaterplanten',
    body: 'Belangrijk voor zuurstofproductie in de waterkolom, voedsel voor vissen en macrofauna, en voor schuilplekken en paaiplaatsen. Een goede begroeiing draagt positief bij aan de ecologische kwaliteit.',
    blob: '58% 42% 50% 50% / 48% 54% 46% 52%',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3,18 C5,12 9,10 11,14 C13,18 17,12 19,15" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="7" cy="19" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="17" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    color: 'hsl(200,45%,36%)',
    colorBg: 'rgba(50,110,140,0.09)',
  },
  {
    title: 'Emergente planten',
    body: 'Aanwezig langs de oevers. Emergente planten verankeren de bodem, bieden schuilgelegenheid aan dieren en dragen bij aan de filtering van verontreinigende stoffen vanuit het omringende land.',
    blob: '44% 56% 58% 42% / 54% 44% 56% 46%',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <line x1="11" y1="20" x2="11" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="11" cy="5" rx="5" ry="8" fill="currentColor" opacity="0.5" />
        <line x1="17" y1="20" x2="17" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="17" cy="10" rx="4" ry="6" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    color: 'hsl(47,58%,40%)',
    colorBg: 'rgba(150,120,40,0.09)',
  },
  {
    title: 'Drijvende planten',
    body: 'Drijvende planten zorgen voor schaduw en schuilplekken. Libellen en andere dieren rusten op de bladeren. Bij troebel water kunnen ze onderwaterplanten verdringen door lichtgebrek.',
    blob: '52% 48% 44% 56% / 46% 58% 42% 54%',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <ellipse cx="11" cy="14" rx="8" ry="4" fill="currentColor" opacity="0.55" transform="rotate(-6,11,14)" />
        <circle cx="11" cy="10" r="3.5" fill="currentColor" opacity="0.35" />
      </svg>
    ),
    color: 'hsl(138,42%,30%)',
    colorBg: 'rgba(52,100,60,0.09)',
  },
  {
    title: 'Kroos & FLAB',
    body: 'Kroos en FLAB kunnen voedsel bieden, maar overwoekeren snel bij een hoge voedselrijkdom. Er is geen optimum. Tot circa 15% bedekking is er geen negatief effect. Daarboven weegt het negatief mee in de beoordeling.',
    blob: '48% 52% 56% 44% / 56% 44% 54% 46%',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <ellipse cx="5" cy="11" rx="4" ry="2.5" fill="currentColor" opacity="0.65" />
        <ellipse cx="12" cy="8" rx="3.5" ry="2" fill="currentColor" opacity="0.6" />
        <ellipse cx="17" cy="13" rx="3.5" ry="2" fill="currentColor" opacity="0.55" />
        <ellipse cx="9" cy="15" rx="3.5" ry="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    color: 'hsl(90,38%,34%)',
    colorBg: 'rgba(80,130,50,0.09)',
  },
];

export default function EcologicalRelevance() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {blocks.map((b, i) => (
        <motion.div key={b.title}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}>
          <div className="p-6 h-full transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'hsl(45,30%,97%)',
              borderRadius: b.blob,
              boxShadow: '0 2px 10px rgba(52,100,60,0.06)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 30px rgba(52,100,60,0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}
          >
            <div className="w-11 h-11 flex items-center justify-center mb-5"
              style={{ background: b.colorBg, borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%', color: b.color }}>
              {b.icon}
            </div>
            <h4 className="font-display text-base font-medium mb-3" style={{ color: 'hsl(138,40%,14%)' }}>
              {b.title}
            </h4>
            <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'hsl(138,12%,42%)' }}>
              {b.body}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}