import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import WaterQualityCalculator from '@/components/model/WaterQualityCalculator';
import GroeivormenCards from '@/components/model/GroeivormenCards';
import EcologicalRelevance from '@/components/model/EcologicalRelevance';

const Grain = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '128px',
  }} />
);

const Wave = ({ fill }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: 52 }}>
    <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
      <path d="M0,26 C240,52 480,4 720,28 C960,52 1200,8 1440,24 L1440,0 L0,0 Z" fill={fill} />
    </svg>
  </div>
);

const anchorLinks = [
  { label: 'Toelichting', href: '#toelichting' },
  { label: 'Groeivormen', href: '#groeivormen' },
  { label: 'Ecologie', href: '#ecologie' },
  { label: 'Rekenmodule', href: '#rekenmodule' },
  { label: 'Let op', href: '#bijsluiter' },
];

export default function Model() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(165deg, hsl(45,32%,96%) 0%, hsl(138,18%,90%) 40%, hsl(200,28%,88%) 100%)' }}>
        <Grain />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[70vh]"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(96,148,102,0.16) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-full h-[40%]"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(140,185,195,0.16) 50%, rgba(100,155,175,0.24) 100%)' }} />
          {/* Riet silhouettes */}
          <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 130" preserveAspectRatio="none" aria-hidden="true">
            <g opacity="0.13" fill="hsl(138,40%,22%)">
              <rect x="20" y="48" width="5" height="82" rx="2" /><ellipse cx="22" cy="40" rx="10" ry="26" />
              <rect x="78" y="60" width="4" height="70" rx="2" /><ellipse cx="80" cy="53" rx="8" ry="20" />
              <rect x="140" y="44" width="6" height="86" rx="2" /><ellipse cx="143" cy="35" rx="11" ry="28" />
              <rect x="1300" y="46" width="5" height="84" rx="2" /><ellipse cx="1302" cy="38" rx="10" ry="26" />
              <rect x="1360" y="58" width="4" height="72" rx="2" /><ellipse cx="1362" cy="51" rx="8" ry="20" />
              <rect x="1420" y="40" width="6" height="90" rx="2" /><ellipse cx="1423" cy="31" rx="11" ry="28" />
            </g>
            <path d="M0,90 C200,74 400,98 700,84 C1000,70 1200,94 1440,82 L1440,130 L0,130 Z" fill="rgba(52,100,60,0.05)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6"
              style={{ background: 'rgba(52,100,60,0.10)', color: 'hsl(138,40%,22%)', border: '1px solid rgba(52,100,60,0.15)' }}>
              <Droplets className="w-4 h-4" /> Betaversie
            </motion.span>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="font-body font-medium text-sm uppercase tracking-[0.18em] mb-3" style={{ color: 'hsl(47,65%,42%)' }}>
              Ecologische beoordeling
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6"
              style={{ color: 'hsl(138,40%,12%)' }}>
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>Groeivormen Index</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-2xl"
              style={{ color: 'hsl(138,14%,34%)' }}>
              De Groeivormen Index is een praktische methode om de ecologische kwaliteit van een watergang te beoordelen. De methode kijkt naar de verhouding tussen verschillende groeivormen van waterplanten. Die verhouding geeft inzicht in de balans van het watersysteem.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4">
              <a href="#rekenmodule">
                <button
                  className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'hsl(138,40%,22%)', color: '#f5f0e8', borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px', boxShadow: '0 4px 20px rgba(52,100,60,0.28)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'hsl(138,40%,18%)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'hsl(138,40%,22%)'}>
                  Gebruik de Groeivormen Index <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#toelichting">
                <button
                  className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 text-base transition-all duration-300"
                  style={{ color: 'hsl(138,40%,22%)', background: 'rgba(255,255,255,0.55)', border: '1.5px solid rgba(52,100,60,0.28)', borderRadius: '30px 28px 32px 28px / 28px 30px 28px 32px', backdropFilter: 'blur(4px)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.08)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.28)'; }}>
                  Meer over de methode
                </button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Anchor nav */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="container mx-auto px-4 sm:px-6 lg:px-12 mt-14 relative z-10">
          <div className="flex flex-wrap gap-2">
            {anchorLinks.map(a => (
              <a key={a.label} href={a.href}
                className="px-4 py-1.5 font-body text-xs font-medium rounded-full transition-all duration-200"
                style={{ background: 'rgba(52,100,60,0.08)', color: 'hsl(138,38%,26%)', border: '1px solid rgba(52,100,60,0.14)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.08)'; }}>
                {a.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Toelichting ── */}
      <section id="toelichting" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
        <Grain />
        <Wave fill="hsl(200,28%,88%)" />
        <svg className="absolute right-10 top-20 opacity-[0.055] pointer-events-none" width="120" height="75" viewBox="0 0 120 75" aria-hidden="true">
          <ellipse cx="18" cy="38" rx="14" ry="7" fill="hsl(138,40%,28%)" />
          <ellipse cx="48" cy="26" rx="11" ry="6" fill="hsl(138,38%,30%)" />
          <ellipse cx="74" cy="46" rx="13" ry="7" fill="hsl(138,36%,26%)" />
          <ellipse cx="100" cy="32" rx="10" ry="5" fill="hsl(138,40%,28%)" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
                Toelichting
              </motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,12%)' }}>
                Wat is de{' '}
                <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>Groeivormen Index</span>?
              </motion.h2>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="space-y-4 font-body text-base font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                <p>
                  De Groeivormen Index is een methode om laagdrempelig inzicht te krijgen in de kwaliteit van een watergang. De index kijkt naar de verhoudingen van bepaalde groeivormen van waterplanten.
                </p>
                <p>
                  Te veel of te weinig bedekking van een groeivorm kan een aanwijzing zijn dat de waterkwaliteit niet op orde is. De uitkomst geeft direct richting aan beheer.
                </p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              <div className="p-7"
                style={{ background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(45,28%,93%) 100%)', borderRadius: '42% 58% 38% 62% / 50% 44% 56% 50%' }}>
                <p className="font-body text-xs font-medium uppercase tracking-[0.18em] mb-4" style={{ color: 'hsl(47,60%,42%)' }}>
                  Monitoring
                </p>
                <p className="font-body text-base font-light leading-relaxed mb-4" style={{ color: 'hsl(138,14%,34%)' }}>
                  Het keurmerk voor ecologisch waterbeheer is <strong className="font-medium" style={{ color: 'hsl(138,38%,22%)' }}>Kleurkeur Blauw</strong>, ontwikkeld door De Vlinderstichting, FLORON en RAVON. Voor het natte profiel is de Groeivormen Index de verplichte monitoringsmethode.
                </p>
                <Link to={createPageUrl('KleurkeurBlauw')}
                  className="inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200"
                  style={{ color: 'hsl(138,40%,26%)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'hsl(138,40%,18%)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'hsl(138,40%,26%)'}>
                  Meer over Kleurkeur Blauw <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KRW basis ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(45,30%,97%)" />
        <svg className="absolute left-0 bottom-8 opacity-[0.07] pointer-events-none" width="55" height="200" viewBox="0 0 55 200" aria-hidden="true">
          <line x1="28" y1="200" x2="28" y2="26" stroke="hsl(138,38%,28%)" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="28" cy="16" rx="10" ry="26" fill="hsl(47,65%,48%)" />
          <line x1="44" y1="200" x2="44" y2="66" stroke="hsl(138,38%,28%)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="44" cy="56" rx="8" ry="20" fill="hsl(47,60%,50%)" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Onderbouwing
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,12%)' }}>
              Gebaseerd op de{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>Kaderrichtlijn Water</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="p-8 h-full"
                style={{ background: 'hsl(45,30%,97%)', borderRadius: '58% 42% 50% 50% / 48% 54% 46% 52%', boxShadow: '0 2px 10px rgba(52,100,60,0.06)' }}>
                <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                  Praktisch toepasbaar
                </h3>
                <p className="font-body text-base font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                  De Groeivormen Index is gebaseerd op de principes en maatlatten van de Kaderrichtlijn Water. De methode is geschikt voor stilstaande wateren — met name kleine lijnvormige wateren, vijvers en kleine plassen tot circa 5 hectare.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="p-8 h-full"
                style={{ background: 'hsl(45,30%,97%)', borderRadius: '44% 56% 58% 42% / 54% 44% 56% 46%', boxShadow: '0 2px 10px rgba(52,100,60,0.06)' }}>
                <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                  KRW-principes, praktisch toepasbaar
                </h3>
                <p className="font-body text-base font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                  KRW-beoordelingen zijn specialistisch en lastig direct te vertalen naar beleid en beheer. De Groeivormen Index werkt op basis van dezelfde principes, maar is eenvoudiger toepasbaar in de praktijk.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Wat zijn groeivormen ── */}
      <section id="groeivormen" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,28%,96%)' }}>
        <Grain />
        <Wave fill="hsl(138,22%,91%)" />
        <svg className="absolute right-10 top-16 opacity-[0.055] pointer-events-none" width="140" height="90" viewBox="0 0 140 90" aria-hidden="true">
          <ellipse cx="50" cy="65" rx="40" ry="18" fill="hsl(138,40%,28%)" transform="rotate(-8,50,65)" />
          <ellipse cx="90" cy="55" rx="30" ry="14" fill="hsl(138,38%,30%)" transform="rotate(6,90,55)" />
          <circle cx="50" cy="50" r="5" fill="hsl(47,65%,50%)" opacity="0.8" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-6">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Groeivormen
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-5" style={{ color: 'hsl(138,40%,12%)' }}>
              Wat zijn{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>groeivormen</span>?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-body text-lg font-light max-w-2xl mx-auto" style={{ color: 'hsl(138,12%,40%)' }}>
              Waterplanten groeien op verschillende manieren in een watergang. Voor de Groeivormen Index hoeft u geen soorten te determineren. U schat per groeivorm in hoeveel van de watergang ermee bedekt is. Met enige oefening gaat dat snel.
            </motion.p>
          </div>

          <GroeivormenCards />

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-center mt-12">
            <a href="#rekenmodule">
              <button
                className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'hsl(138,40%,22%)', color: '#f5f0e8', borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px', boxShadow: '0 4px 20px rgba(52,100,60,0.22)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'hsl(138,40%,18%)'}
                onMouseLeave={e => e.currentTarget.style.background = 'hsl(138,40%,22%)'}>
                Naar de Groeivormen Index <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Ecologische relevantie ── */}
      <section id="ecologie" className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(45,28%,96%)" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-6">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Ecologische relevantie
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-5" style={{ color: 'hsl(138,40%,12%)' }}>
              Balans is het{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>sleutelwoord</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-body text-lg font-light max-w-2xl mx-auto" style={{ color: 'hsl(138,12%,40%)' }}>
              Elke groeivorm heeft een eigen ecologische functie. Te veel is niet goed, maar te weinig ook niet. Een gezonde watergang vraagt om een evenwichtige verdeling.
            </motion.p>
          </div>

          <EcologicalRelevance />
        </div>
      </section>

      {/* ── Rekenmodule ── */}
      <section id="rekenmodule" className="relative py-14 lg:py-20 overflow-hidden" style={{ background: 'hsl(45,28%,97%)' }}>
        <Grain />
        <Wave fill="hsl(138,22%,91%)" />
        <svg className="absolute right-8 top-16 opacity-[0.05] pointer-events-none" width="120" height="75" viewBox="0 0 120 75" aria-hidden="true">
          <ellipse cx="18" cy="38" rx="14" ry="7" fill="hsl(138,40%,28%)" />
          <ellipse cx="48" cy="26" rx="11" ry="6" fill="hsl(138,38%,30%)" />
          <ellipse cx="74" cy="46" rx="13" ry="7" fill="hsl(138,36%,26%)" />
          <ellipse cx="100" cy="32" rx="10" ry="5" fill="hsl(138,40%,28%)" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8">
          <div className="text-center mb-10">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Betaversie
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-4"
              style={{ color: 'hsl(138,40%,12%)' }}>
              Beoordeel uw{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>watergang</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-body text-lg font-light max-w-2xl mx-auto" style={{ color: 'hsl(138,12%,40%)' }}>
              Stel de bedekkingspercentages per groeivorm in en zie direct de ecologische beoordeling van uw watergang.
            </motion.p>
          </div>
        </div>
        <WaterQualityCalculator />
      </section>

      {/* ── Waarvoor bedoeld ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,28%,96%)' }}>
        <Grain />
        <Wave fill="hsl(45,28%,97%)" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
                Toepassingen
              </motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl font-normal mb-6" style={{ color: 'hsl(138,40%,12%)' }}>
                Toepasbaar{' '}
                <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>zonder soortenkennis</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="font-body text-base font-light leading-relaxed mb-8" style={{ color: 'hsl(138,12%,40%)' }}>
                De Groeivormen Index is toepasbaar zonder uitgebreide soortenkennis. U maakt snel een eerste inschatting van de kwaliteit van een watergang. Per groeivorm wordt direct duidelijk waar te veel of te weinig van is en hoe het beheer daarop kan worden afgestemd.
              </motion.p>

              <ul className="space-y-3">
                {[
                  'Laagdrempelig in te zetten',
                  'Snel toepasbaar in het veld',
                  'Begrijpelijk voor uitvoerders, ecologen en beleidsmedewerkers',
                  'Direct te koppelen aan beheeradvies',
                  'Gebaseerd op KRW-principes',
                ].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center"
                      style={{ background: 'rgba(52,100,60,0.10)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" aria-hidden="true">
                        <path d="M1,4 L3.5,6.5 L9,1" stroke="hsl(138,42%,30%)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-body text-base font-light" style={{ color: 'hsl(138,15%,32%)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="p-10 lg:p-14 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(200,28%,88%) 100%)', borderRadius: '42% 58% 46% 54% / 54% 44% 56% 46%' }}>
                <svg viewBox="0 0 260 200" className="w-full max-w-xs" aria-hidden="true">
                  <ellipse cx="130" cy="158" rx="108" ry="20" fill="hsl(200,40%,70%)" opacity="0.38" />
                  <path d="M22,158 C60,148 100,162 130,156 C160,150 200,160 238,154" fill="none" stroke="rgba(100,155,175,0.4)" strokeWidth="2" />
                  <ellipse cx="85" cy="156" rx="30" ry="13" fill="hsl(138,40%,30%)" transform="rotate(-10,85,156)" opacity="0.72" />
                  <ellipse cx="148" cy="160" rx="24" ry="10" fill="hsl(138,38%,28%)" transform="rotate(6,148,160)" opacity="0.68" />
                  <circle cx="85" cy="146" r="7" fill="hsl(45,65%,82%)" opacity="0.88" />
                  <circle cx="85" cy="146" r="3.5" fill="hsl(47,70%,62%)" opacity="0.9" />
                  <line x1="175" y1="174" x2="175" y2="68" stroke="hsl(138,38%,28%)" strokeWidth="4.5" strokeLinecap="round" />
                  <ellipse cx="175" cy="57" rx="10" ry="26" fill="hsl(47,65%,46%)" />
                  <line x1="196" y1="174" x2="196" y2="94" stroke="hsl(138,38%,28%)" strokeWidth="3.5" strokeLinecap="round" />
                  <ellipse cx="196" cy="84" rx="8" ry="20" fill="hsl(47,62%,48%)" />
                  <path d="M30,175 Q60,165 90,172 Q120,179 150,170" stroke="hsl(138,36%,38%)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35" />
                  <ellipse cx="50" cy="163" rx="7" ry="3.5" fill="hsl(138,50%,36%)" opacity="0.55" />
                  <ellipse cx="65" cy="168" rx="6" ry="3" fill="hsl(138,48%,34%)" opacity="0.50" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bijsluiter ── */}
      <section id="bijsluiter" className="relative py-20 lg:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(45,28%,96%)" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-6">
          <div className="max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block text-center" style={{ color: 'hsl(47,65%,42%)' }}>
              Let op bij gebruik
            </motion.span>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="p-8 lg:p-10"
                style={{ background: 'hsl(45,30%,97%)', borderRadius: '32px 44px 36px 40px / 40px 36px 44px 32px', boxShadow: '0 2px 14px rgba(52,100,60,0.07)', border: '1px solid rgba(52,100,60,0.10)' }}>
                {/* Info icon */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(52,100,60,0.09)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="7" stroke="hsl(138,40%,28%)" strokeWidth="1.5" fill="none" />
                      <line x1="9" y1="8" x2="9" y2="13" stroke="hsl(138,40%,28%)" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="9" cy="6" r="1" fill="hsl(138,40%,28%)" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-medium mt-1" style={{ color: 'hsl(138,40%,14%)' }}>
                    Groeivormen zijn een indicatie, geen volledig beeld
                  </h3>
                </div>
                <p className="font-body text-base font-light leading-relaxed mb-6" style={{ color: 'hsl(138,12%,40%)' }}>
                  Soortensamenstelling, indicatorsoorten en soortenrijkdom zijn ook belangrijke factoren. Het kan voorkomen dat de Groeivormen Index niet optimaal scoort, terwijl er bijzondere of soortenrijke vegetatie aanwezig is. Ga zorgvuldig om met waardevolle watervegetatie en besteed bij monitoring aandacht aan indicatorsoorten en soortenrijkdom.
                </p>
                <a href="https://www.kleurkeur.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium transition-colors duration-200"
                  style={{ color: 'hsl(138,40%,26%)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'hsl(138,40%,18%)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'hsl(138,40%,26%)'}>
                  <ExternalLink className="w-4 h-4" />
                  Groeivormen Index monitoringshandleiding
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(145deg, hsl(138,40%,16%) 0%, hsl(138,35%,22%) 60%, hsl(138,28%,28%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(138,22%,91%)" />
        <svg className="absolute right-0 bottom-0 opacity-[0.08] pointer-events-none" width="80" height="220" viewBox="0 0 80 220" aria-hidden="true">
          <line x1="40" y1="220" x2="40" y2="30" stroke="hsl(138,38%,60%)" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="40" cy="18" rx="10" ry="28" fill="hsl(47,65%,60%)" />
          <line x1="62" y1="220" x2="62" y2="75" stroke="hsl(138,38%,60%)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="62" cy="63" rx="8" ry="20" fill="hsl(47,62%,58%)" />
        </svg>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 pt-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal mb-5" style={{ color: 'hsl(45,30%,94%)' }}>
            Meer weten over de <span className="italic" style={{ color: 'hsl(138,40%,72%)' }}>Groeivormen Index</span>?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-body text-lg sm:text-xl font-light mb-10 max-w-2xl mx-auto" style={{ color: 'hsl(138,20%,72%)' }}>
            Neem contact op voor meer informatie over de toepassing in uw organisatie of project.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <button
                className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'hsl(45,30%,94%)', color: 'hsl(138,40%,18%)', borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px' }}
                onMouseEnter={e => e.currentTarget.style.background = 'hsl(45,28%,88%)'}
                onMouseLeave={e => e.currentTarget.style.background = 'hsl(45,30%,94%)'}>
                Neem contact op <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}