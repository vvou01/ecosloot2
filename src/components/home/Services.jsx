import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, TreePine, Beaker, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: FileText,
    title: "Advies op basis van de Groeivormen Index",
    description: "Concrete adviezen gebaseerd op de ecologische beoordeling van uw watergang. Van vegetatiebeheer tot gerichte verbetering van de waterkwaliteit.",
    link: "Contact"
  },
  {
    icon: Beaker,
    title: "Gevorderd waterkwaliteitsonderzoek",
    description: "Uitgebreide onderzoeken op basis van ons overkoepelende waterkwaliteitsmodel. Inclusief macrofauna, vissen en amfibieën, met vertaling naar beheerplannen en inrichtingsmaatregelen.",
    link: "Contact"
  },
  {
    icon: TreePine,
    title: "Landschappelijk en ecologisch advies",
    description: "Brede expertise in landschapsinrichting, kennis van soorten en de Omgevingswet, en ruime veldervaring bij overheidsorganisaties en aannemers.",
    link: "Contact"
  },
  {
    icon: Hammer,
    title: "Landschapsinrichting",
    description: "Herinrichten van bestaande gebieden, al dan niet op basis van de Groeivormen Index of het waterkwaliteitsmodel.",
    link: "Contact"
  }
];

const blobRadii = [
  '60% 40% 50% 50% / 50% 46% 54% 50%',
  '45% 55% 60% 40% / 55% 50% 50% 45%',
  '55% 45% 40% 60% / 48% 55% 45% 52%',
  '50% 50% 55% 45% / 52% 48% 52% 48%',
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,93%) 100%)' }}>
      {/* Paper grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px',
      }} />

      {/* Subtle top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full" style={{ height: 52 }} aria-hidden="true">
          <path d="M0,26 C240,52 480,4 720,28 C960,52 1200,8 1440,24 L1440,0 L0,0 Z" fill="hsl(45,30%,97%)" />
        </svg>
      </div>

      {/* Botanical watermark left — riet stalk */}
      <svg className="absolute left-0 bottom-8 opacity-[0.07] pointer-events-none" width="60" height="220" viewBox="0 0 60 220" aria-hidden="true">
        <line x1="30" y1="220" x2="30" y2="28" stroke="hsl(138,38%,28%)" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="30" cy="18" rx="10" ry="28" fill="hsl(47,65%,48%)" />
        <line x1="48" y1="220" x2="48" y2="68" stroke="hsl(138,38%,28%)" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="48" cy="58" rx="8" ry="20" fill="hsl(47,60%,50%)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block"
              style={{ color: 'hsl(47,65%,42%)' }}
            >
              Diensten
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-normal"
              style={{ color: 'hsl(138,40%,14%)' }}
            >
              Hoe wij u kunnen{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,30%)' }}>ondersteunen</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg font-light max-w-md"
            style={{ color: 'hsl(138,12%,40%)' }}
          >
            Van monitoring en analyse tot praktijkadvies en inrichting: wij helpen u bij elke stap naar beter waterbeheer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link to={createPageUrl(service.link)} className="block h-full group">
                <div
                  className="relative h-full p-8 lg:p-10 transition-all duration-400 hover:-translate-y-1"
                  style={{
                    background: 'hsl(45,30%,97%)',
                    borderRadius: blobRadii[index],
                    boxShadow: '0 2px 10px rgba(52,100,60,0.05)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(52,100,60,0.13)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.05)'}
                >
                  {/* Reed corner accent */}
                  <svg className="absolute top-5 right-6 opacity-[0.12] pointer-events-none" width="22" height="44" viewBox="0 0 22 44" aria-hidden="true">
                    <line x1="11" y1="44" x2="11" y2="12" stroke="hsl(138,40%,26%)" strokeWidth="2" strokeLinecap="round" />
                    <ellipse cx="11" cy="8" rx="5" ry="12" fill="hsl(47,65%,48%)" />
                  </svg>

                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                    style={{ background: 'rgba(52,100,60,0.09)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: 'hsl(138,40%,26%)' }} />
                  </div>
                  
                  <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="font-body text-base font-light leading-relaxed mb-8" style={{ color: 'hsl(138,12%,40%)' }}>
                    {service.description}
                  </p>
                  
                  <div className="flex items-center font-body font-medium" style={{ color: 'hsl(138,38%,30%)' }}>
                    <span className="mr-2">Meer informatie</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}