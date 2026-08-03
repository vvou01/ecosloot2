import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Snel inzicht",
    description: "Direct heldere resultaten zonder tijdrovende analyses"
  },
  {
    icon: Shield,
    title: "Wetenschappelijk onderbouwd",
    description: "Gebaseerd op bewezen ecologische indicatoren"
  },
  {
    icon: TrendingUp,
    title: "Betere beslissingen",
    description: "Data-gedreven ondersteuning voor waterbeheer"
  },
  {
    icon: Zap,
    title: "Praktisch toepasbaar",
    description: "Directe vertaling naar concrete acties"
  }
];

const cardBlobs = [
  '58% 42% 50% 50% / 48% 54% 46% 52%',
  '44% 56% 58% 42% / 54% 44% 56% 46%',
  '52% 48% 44% 56% / 46% 58% 42% 54%',
  '48% 52% 56% 44% / 56% 44% 54% 46%',
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(145deg, hsl(138,40%,16%) 0%, hsl(138,35%,22%) 60%, hsl(138,28%,28%) 100%)' }}>
      {/* Organic texture overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 10% 80%, rgba(180,210,145,0.07) 0%, transparent 65%), radial-gradient(ellipse 60% 70% at 90% 20%, rgba(96,148,102,0.08) 0%, transparent 65%)'
      }} />

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px',
      }} />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ height: 60 }} aria-hidden="true">
          <path d="M0,28 C180,58 360,4 600,30 C840,56 1080,6 1260,32 C1340,42 1400,18 1440,24 L1440,0 L0,0 Z" fill="hsl(138,22%,91%)" />
        </svg>
      </div>

      {/* Botanical watermark — waterlelie right */}
      <svg className="absolute right-8 bottom-12 opacity-[0.06] pointer-events-none" width="160" height="100" viewBox="0 0 160 100" aria-hidden="true">
        <ellipse cx="50" cy="72" rx="42" ry="20" fill="hsl(138,40%,60%)" transform="rotate(-10,50,72)" />
        <ellipse cx="95" cy="62" rx="34" ry="16" fill="hsl(138,38%,58%)" transform="rotate(8,95,62)" />
        <ellipse cx="128" cy="76" rx="26" ry="12" fill="hsl(138,36%,55%)" transform="rotate(-4,128,76)" />
        <line x1="50" y1="72" x2="52" y2="95" stroke="hsl(138,40%,55%)" strokeWidth="2" />
        <line x1="95" y1="62" x2="97" y2="88" stroke="hsl(138,38%,55%)" strokeWidth="1.5" />
        <circle cx="50" cy="58" r="6" fill="hsl(47,65%,60%)" opacity="0.6" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block"
              style={{ color: 'hsl(47,60%,65%)' }}
            >
              Waarom Ecosloot
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-normal mb-6"
              style={{ color: 'hsl(45,30%,94%)' }}
            >
              Vertrouw op{' '}
              <span className="italic" style={{ color: 'hsl(138,40%,72%)' }}>betrouwbare</span>
              <br />ecologische monitoring
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl font-light leading-relaxed"
              style={{ color: 'hsl(138,20%,72%)' }}
            >
              De Groeivormen Index maakt complexe ecologische data toegankelijk en bruikbaar.
              Zodat u met vertrouwen keuzes kunt maken voor duurzaam waterbeheer.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div
                  className="p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(180,210,145,0.15)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: cardBlobs[index],
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-4"
                    style={{ background: 'rgba(180,210,145,0.12)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}
                  >
                    <benefit.icon className="w-5 h-5" style={{ color: 'hsl(138,40%,72%)' }} />
                  </div>
                  <h3 className="font-display text-base font-medium mb-2" style={{ color: 'hsl(45,30%,94%)' }}>
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'hsl(138,20%,65%)' }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}