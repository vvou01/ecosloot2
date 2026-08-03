import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

const Grain = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '96px',
  }} />
);

const audiences = [
  'Uitvoerend personeel',
  'Ecologen',
  'Beleidsmedewerkers',
  'Beheerders',
  'Opdrachtgevers',
  'Burgers',
  'Studenten',
];

export default function GroeivormenBridge() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, hsl(138,40%,16%) 0%, hsl(138,35%,22%) 60%, hsl(138,28%,28%) 100%)' }}>
      <Grain />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: 52 }}>
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
          <path d="M0,26 C240,52 480,4 720,28 C960,52 1200,8 1440,24 L1440,0 L0,0 Z" fill="hsl(45,28%,96%)" />
        </svg>
      </div>

      {/* Reed silhouettes right */}
      <svg className="absolute right-0 bottom-0 opacity-[0.08] pointer-events-none" width="80" height="220" viewBox="0 0 80 220" aria-hidden="true">
        <line x1="40" y1="220" x2="40" y2="30" stroke="hsl(138,38%,60%)" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="40" cy="18" rx="10" ry="28" fill="hsl(47,65%,60%)" />
        <line x1="62" y1="220" x2="62" y2="75" stroke="hsl(138,38%,60%)" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="62" cy="63" rx="8" ry="20" fill="hsl(47,62%,58%)" />
        <line x1="20" y1="220" x2="20" y2="100" stroke="hsl(138,38%,60%)" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="20" cy="90" rx="6" ry="16" fill="hsl(47,60%,56%)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: main message */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,60%,65%)' }}>
              De Groeivormen Index
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(45,30%,94%)' }}>
              Doel, monitoring en beheer{' '}
              <span className="italic" style={{ color: 'hsl(138,40%,72%)' }}>in balans</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-body text-lg font-light leading-relaxed mb-6" style={{ color: 'hsl(138,20%,72%)' }}>
              De Groeivormen Index maakt zichtbaar waar te veel of te weinig van is. De uitslag geeft direct richting aan beheer, zonder uitgebreide analyse of specialistische kennis vooraf.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="font-body text-base font-light leading-relaxed mb-10" style={{ color: 'hsl(138,15%,58%)' }}>
              De methode is laagdrempelig opgezet en daardoor eenvoudig toepasbaar voor uitvoerend personeel, ecologen en beleidsmedewerkers. Daarnaast is de methode ook geschikt voor betrokken burgers, vrijwilligers en studenten die inzicht willen krijgen in de ecologische kwaliteit van watergangen.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
              <Link to={createPageUrl('Model')}>
                <button
                  className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'hsl(45,30%,94%)', color: 'hsl(138,40%,18%)', borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'hsl(45,28%,88%)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'hsl(45,30%,94%)'}
                >
                  Bekijk de Groeivormen Index
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right: audience chips */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="relative p-8 lg:p-10"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(180,210,145,0.14)',
                borderRadius: '42% 58% 46% 54% / 54% 44% 56% 46%',
                backdropFilter: 'blur(4px)',
              }}>

              {/* Organic label top */}
              <p className="font-body text-xs font-medium uppercase tracking-[0.2em] mb-6 text-center" style={{ color: 'rgba(180,210,165,0.50)' }}>
                Begrijpelijk voor
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                {audiences.map((a, i) => (
                  <motion.span key={a}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                    className="inline-flex items-center gap-2 px-4 py-2 font-body text-sm font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(180,210,145,0.18)',
                      color: 'hsl(45,25%,88%)',
                      borderRadius: i % 2 === 0 ? '50% 50% 60% 40% / 50% 50% 50% 50%' : '40% 60% 50% 50% / 50% 50% 50% 50%',
                    }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'hsl(138,40%,60%)' }} />
                    {a}
                  </motion.span>
                ))}
              </div>

              {/* Subtle waterline */}
              <svg className="w-full mt-8 opacity-20" viewBox="0 0 300 20" aria-hidden="true">
                <path d="M0,10 C50,4 100,16 150,10 C200,4 250,14 300,10" fill="none" stroke="hsl(138,40%,60%)" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}