import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, BarChart3, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Waterplanten als indicator",
    description: "Waterplanten vertellen veel over de gezondheid van een watergang. Onze methode analyseert de vegetatie om een betrouwbaar beeld te geven van de ecologische toestand.",
    blobPath: "M50,10 C70,5 90,15 95,35 C100,55 88,75 68,82 C48,89 20,80 10,60 C0,40 10,18 30,10 C38,7 44,12 50,10 Z"
  },
  {
    icon: BarChart3,
    title: "Van groeivorm naar inzicht",
    description: "De Groeivormen Index vertaalt bedekkingspercentages naar heldere ecologische beoordelingen. Begrijpelijke scores die direct toepasbaar zijn in uw waterbeheer.",
    blobPath: "M48,8 C68,2 92,12 97,33 C102,54 86,78 64,84 C42,90 14,77 7,55 C0,33 14,14 34,8 C40,6 42,10 48,8 Z"
  },
  {
    icon: Lightbulb,
    title: "Onderbouwde beslissingen",
    description: "Met evidence-based inzichten ondersteunt Ecosloot professionals bij betere keuzes voor water- en biodiversiteitsbeheer.",
    blobPath: "M52,12 C72,4 94,16 96,38 C98,60 84,80 62,85 C40,90 16,78 8,56 C0,34 12,12 34,8 C44,6 46,15 52,12 Z"
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
      {/* Paper grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px',
      }} />

      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full" style={{ height: 64 }} aria-hidden="true">
          <path d="M0,32 C180,64 360,0 540,32 C720,64 900,8 1080,36 C1200,52 1340,16 1440,28 L1440,0 L0,0 Z" fill="hsl(45,25%,91%)" />
        </svg>
      </div>

      {/* Botanical watermark — kroos dots top right */}
      <svg className="absolute top-16 right-12 opacity-[0.06] pointer-events-none" width="120" height="80" viewBox="0 0 120 80" aria-hidden="true">
        <ellipse cx="20" cy="40" rx="14" ry="8" fill="hsl(138,40%,28%)" />
        <ellipse cx="50" cy="28" rx="11" ry="6" fill="hsl(138,38%,30%)" />
        <ellipse cx="75" cy="48" rx="13" ry="7" fill="hsl(138,36%,26%)" />
        <ellipse cx="100" cy="32" rx="10" ry="5" fill="hsl(138,40%,28%)" />
        <ellipse cx="35" cy="58" rx="9" ry="5" fill="hsl(138,38%,30%)" />
        <ellipse cx="90" cy="60" rx="8" ry="4" fill="hsl(138,36%,26%)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block"
            style={{ color: 'hsl(47,65%,42%)' }}
          >
            Onze aanpak
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-normal mb-6"
            style={{ color: 'hsl(138,40%,14%)' }}
          >
            Ecologie begrijpen door{' '}
            <span className="italic" style={{ color: 'hsl(138,38%,30%)' }}>waterplanten</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg font-light leading-relaxed"
            style={{ color: 'hsl(138,12%,40%)' }}
          >
            Waterplanten zijn een betrouwbare graadmeter voor de ecologische kwaliteit van een watergang.
            Ecosloot maakt deze kennis laagdrempelig toegankelijk via de Groeivormen Index.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Organic blob background */}
              <div className="relative p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1">
                {/* Blob shape via clip-path */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(45,28%,94%) 0%, hsl(138,20%,92%) 100%)',
                    borderRadius: index === 0
                      ? '62% 38% 46% 54% / 54% 46% 54% 46%'
                      : index === 1
                        ? '46% 54% 62% 38% / 46% 54% 38% 62%'
                        : '54% 46% 38% 62% / 62% 38% 54% 46%',
                    boxShadow: '0 2px 12px rgba(52,100,60,0.06)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(52,100,60,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(52,100,60,0.06)'}
                />
                {/* Reed accent — top left corner */}
                <svg className="absolute top-4 right-5 opacity-[0.15] pointer-events-none" width="28" height="52" viewBox="0 0 28 52" aria-hidden="true">
                  <line x1="14" y1="52" x2="14" y2="14" stroke="hsl(138,40%,26%)" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="14" cy="10" rx="6" ry="14" fill="hsl(47,65%,48%)" />
                </svg>
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ background: 'rgba(52,100,60,0.10)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: 'hsl(138,40%,26%)' }} />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                    {feature.title}
                  </h3>
                  <p className="font-body text-base font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}