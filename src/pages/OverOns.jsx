import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

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

const expertise = [
  'Waterecologie',
  'Watervegetatie & soortenkennis',
  'Ecologische monitoring',
  'Beheeradvies op maat',
  'Vertaling naar concrete maatregelen',
  'Kleurkeur Blauw',
];

const diensten = [
  {
    cat: 'Monitoring & inventarisatie',
    sub: 'Waterkwaliteit in beeld',
    blob: '58% 42% 50% 50% / 48% 54% 46% 52%',
    color: 'hsl(200,45%,36%)',
    colorBg: 'rgba(50,110,140,0.09)',
    items: [
      { label: 'Watervegetatie', subs: ['Groeivormen Index', 'Soortensamenstelling'] },
      { label: 'Chemische & fysisch-chemische waterkwaliteit' },
      { label: 'Macrofauna' },
      { label: 'Vissen' },
      { label: 'Watergangkenmerken', subs: ['Diepte & slibprofiel', 'Doorstroming & inrichting'] },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M2,16 C5,10 8,8 11,12 C14,16 17,10 20,13" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="5" cy="17" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="11" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="17" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    cat: 'Beheer & advies',
    sub: 'Gericht op duurzaam beheer',
    blob: '44% 56% 58% 42% / 54% 44% 56% 46%',
    color: 'hsl(47,58%,40%)',
    colorBg: 'rgba(150,120,40,0.09)',
    items: [
      { label: 'Advies gestuurd op onderzoeksuitkomsten' },
      { label: 'Meerjaren onderhoudsbeheerplanning' },
      { label: 'Inrichtingsadvies' },
      { label: 'Landschapsinrichting & beheeradvies' },
      { label: 'Begeleiding bij projecten en werkzaamheden' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <line x1="11" y1="20" x2="11" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="11" cy="4" rx="5" ry="8" fill="currentColor" opacity="0.5" />
        <line x1="17" y1="20" x2="17" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="17" cy="10" rx="4" ry="6" fill="currentColor" opacity="0.38" />
      </svg>
    ),
  },
  {
    cat: 'Praktijkonderzoek',
    sub: 'Watersysteem in context',
    blob: '52% 48% 44% 56% / 46% 58% 42% 54%',
    color: 'hsl(138,42%,30%)',
    colorBg: 'rgba(52,100,60,0.09)',
    items: [
      { label: 'Praktijkonderzoek aan watersystemen' },
      { label: 'Interpretatie van waterkwaliteitsgegevens' },
      { label: 'Toepassing van uitkomsten van de Groeivormen Index' },
      { label: 'Vertaling naar concrete beheerkeuzes' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <ellipse cx="11" cy="14" rx="8" ry="4" fill="currentColor" opacity="0.55" transform="rotate(-6,11,14)" />
        <circle cx="11" cy="9" r="4" fill="currentColor" opacity="0.35" />
        <path d="M11,13 L11,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function OverOns() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #eaf0e8 45%, #deeae0 100%)' }}>
        <Grain />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[70vh]"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(96,148,102,0.16) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[55vw] h-[50vh]"
            style={{ background: 'radial-gradient(ellipse at 20% 90%, rgba(120,170,150,0.12) 0%, transparent 80%)' }} />
          <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 130" preserveAspectRatio="none" aria-hidden="true">
            <g opacity="0.12" fill="hsl(138,40%,22%)">
              <rect x="20" y="55" width="5" height="75" rx="2" /><ellipse cx="22" cy="47" rx="10" ry="26" />
              <rect x="70" y="70" width="4" height="60" rx="2" /><ellipse cx="72" cy="63" rx="8" ry="20" />
              <rect x="120" y="48" width="6" height="82" rx="2" /><ellipse cx="123" cy="39" rx="11" ry="28" />
              <rect x="1300" y="52" width="5" height="78" rx="2" /><ellipse cx="1302" cy="44" rx="10" ry="26" />
              <rect x="1360" y="68" width="4" height="62" rx="2" /><ellipse cx="1362" cy="61" rx="8" ry="20" />
              <rect x="1410" y="44" width="6" height="86" rx="2" /><ellipse cx="1413" cy="35" rx="11" ry="28" />
            </g>
            <path d="M0,90 C200,75 400,100 700,85 C1000,70 1200,95 1440,82 L1440,130 L0,130 Z" fill="rgba(52,100,60,0.05)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-8"
              style={{ background: 'rgba(52,100,60,0.10)', color: 'hsl(138,40%,22%)', border: '1px solid rgba(52,100,60,0.15)' }}>
              <Droplets className="w-4 h-4" /> Over Ecosloot
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-normal mb-6"
              style={{ color: 'hsl(138,40%,14%)' }}>
              Over{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,30%)' }}>Ecosloot</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body text-xl font-light leading-relaxed mb-6"
              style={{ color: 'hsl(138,15%,35%)' }}>
              Ecosloot is een initiatief van Cas Heikens en Bram Geers: twee ecologen met een passie voor waterecologie, gedreven om de wateren in Nederland terug op peil te brengen.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3">
              <a href="https://www.cas-eco.nl" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                style={{ background: 'rgba(52,100,60,0.09)', color: 'hsl(138,40%,24%)', border: '1px solid rgba(52,100,60,0.18)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,100,60,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(52,100,60,0.09)'}>
                Cas Heikens / Cas-eco <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.bramdebioloog.nl" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                style={{ background: 'rgba(52,100,60,0.09)', color: 'hsl(138,40%,24%)', border: '1px solid rgba(52,100,60,0.18)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,100,60,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(52,100,60,0.09)'}>
                Bram Geers / Bram de Bioloog <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}
              className="hidden lg:block">
              <div className="overflow-hidden" style={{ borderRadius: '42% 58% 46% 54% / 54% 44% 56% 46%', height: '420px' }}>
                <img src="https://media.base44.com/images/public/6984647797357b284bc40672/fd7a5dc35_IMG-20250530-WA0014.jpg" alt="Ecosloot veldwerk" className="w-full h-full object-cover object-center" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── Mensen achter Ecosloot ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
        <Grain />
        <Wave fill="#deeae0" />
        <svg className="absolute right-12 top-20 opacity-[0.055] pointer-events-none" width="130" height="85" viewBox="0 0 130 85" aria-hidden="true">
          <ellipse cx="46" cy="62" rx="38" ry="17" fill="hsl(138,40%,28%)" transform="rotate(-8,46,62)" />
          <ellipse cx="84" cy="52" rx="28" ry="13" fill="hsl(138,38%,30%)" transform="rotate(6,84,52)" />
          <circle cx="46" cy="47" r="5" fill="hsl(47,65%,50%)" opacity="0.8" />
        </svg>

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
              De mensen achter Ecosloot
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal" style={{ color: 'hsl(138,40%,14%)' }}>
              Ecologie als{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>drijfveer</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Cas Heikens */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(45,28%,93%) 100%)', borderRadius: '58% 42% 50% 50% / 48% 54% 46% 52%', boxShadow: '0 2px 10px rgba(52,100,60,0.07)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(52,100,60,0.13)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.07)'}>
                <div className="w-full overflow-hidden mb-5" style={{ borderRadius: '55% 45% 60% 40% / 50% 45% 55% 50%', height: '200px' }}>
                  <img src="https://media.base44.com/images/public/6984647797357b284bc40672/7294f9071_image.png" alt="Cas Heikens" className="w-full h-full object-cover object-center" />
                </div>
                <h3 className="font-display text-xl font-medium mb-1" style={{ color: 'hsl(138,40%,14%)' }}>Cas Heikens</h3>
                <p className="font-body text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: 'hsl(47,60%,42%)' }}>Ecoloog — Cas-eco</p>
                <p className="font-body text-sm font-light leading-relaxed mb-5" style={{ color: 'hsl(138,12%,42%)' }}>
                  Cas is ecoloog met brede veldervaring in watervegetatie en ecologische monitoring. Zijn werk richt zich op de praktische vertaling van ecologische inzichten naar beheeradvies voor waterbeheerders en gemeenten.
                </p>
                <a href="https://www.cas-eco.nl" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200"
                  style={{ color: 'hsl(138,40%,26%)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'hsl(138,40%,18%)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'hsl(138,40%,26%)'}>
                  cas-eco.nl <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Bram Geers */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
              <div className="p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, hsl(200,28%,90%) 0%, hsl(138,22%,92%) 100%)', borderRadius: '44% 56% 58% 42% / 54% 44% 56% 46%', boxShadow: '0 2px 10px rgba(52,100,60,0.07)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(52,100,60,0.13)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.07)'}>
                <div className="w-full overflow-hidden mb-5" style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%', height: '200px' }}>
                  <img src="https://media.base44.com/images/public/6984647797357b284bc40672/188903882_IMG-20250601-WA0025.jpg" alt="Bram Geers" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display text-xl font-medium mb-1" style={{ color: 'hsl(138,40%,14%)' }}>Bram Geers</h3>
                <p className="font-body text-xs font-medium uppercase tracking-[0.14em] mb-4" style={{ color: 'hsl(200,45%,36%)' }}>Ecoloog — Bram de Bioloog</p>
                <p className="font-body text-sm font-light leading-relaxed mb-5" style={{ color: 'hsl(138,12%,42%)' }}>
                  Bram is bioloog en ecoloog met een sterke focus op communicatie van ecologische kennis. Hij maakt complexe biodiversiteitsvraagstukken toegankelijk voor een breed publiek en verbindt wetenschap met de praktijk van het waterbeheer.
                </p>
                <a href="https://www.bramdebioloog.nl" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200"
                  style={{ color: 'hsl(200,45%,32%)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'hsl(200,45%,24%)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'hsl(200,45%,32%)'}>
                  bramdebioloog.nl <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(45,30%,97%)" />
        <svg className="absolute left-0 bottom-8 opacity-[0.07] pointer-events-none" width="55" height="210" viewBox="0 0 55 210" aria-hidden="true">
          <line x1="28" y1="210" x2="28" y2="26" stroke="hsl(138,38%,28%)" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="28" cy="16" rx="10" ry="26" fill="hsl(47,65%,48%)" />
          <line x1="45" y1="210" x2="45" y2="66" stroke="hsl(138,38%,28%)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="45" cy="56" rx="8" ry="20" fill="hsl(47,60%,50%)" />
        </svg>

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
                Expertise
              </motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,14%)' }}>
                Kennis die{' '}
                <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>werkt in de praktijk</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="font-body text-base font-light leading-relaxed mb-8" style={{ color: 'hsl(138,12%,40%)' }}>
                Ecosloot combineert diepgaande ecologische kennis met praktijkervaring in het veld. De methoden zijn direct toepasbaar voor waterschappen, gemeenten, aannemers en beleidsmedewerkers.
              </motion.p>
              <ul className="space-y-3">
                {expertise.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
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
              <div className="overflow-hidden"
                style={{
                  borderRadius: '42% 58% 46% 54% / 54% 44% 56% 46%',
                  height: 'clamp(280px, 45vw, 420px)',
                  boxShadow: '0 8px 32px rgba(52,100,60,0.12)'
                }}>
                <img
                  src="https://media.base44.com/images/public/6984647797357b284bc40672/f4d2bf9a4_IMG-20250603-WA0091.jpg"
                  alt="Ecosloot veldwerk"
                  className="w-full h-full object-cover object-[35%_35%] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Diensten ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,28%,96%)' }}>
        <Grain />
        <Wave fill="hsl(138,22%,91%)" />
        <svg className="absolute right-10 top-16 opacity-[0.055] pointer-events-none" width="110" height="70" viewBox="0 0 110 70" aria-hidden="true">
          <ellipse cx="18" cy="35" rx="13" ry="7" fill="hsl(138,40%,28%)" />
          <ellipse cx="45" cy="22" rx="10" ry="6" fill="hsl(138,38%,30%)" />
          <ellipse cx="70" cy="42" rx="12" ry="7" fill="hsl(138,36%,26%)" />
          <ellipse cx="95" cy="26" rx="9" ry="5" fill="hsl(138,40%,28%)" />
        </svg>

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Diensten
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
              Wat Ecosloot{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>doet</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="font-body text-base font-light max-w-xl mx-auto" style={{ color: 'hsl(138,12%,44%)' }}>
              Van veldmonitoring tot beheeradvies: Ecosloot biedt praktijkgerichte diensten voor waterschappen, gemeenten, aannemers en ecologen.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {diensten.map((d, i) => (
              <motion.div key={d.cat} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="p-7 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'hsl(45,30%,97%)', borderRadius: d.blob, boxShadow: '0 2px 10px rgba(52,100,60,0.06)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(52,100,60,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}>
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ background: d.colorBg, borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%', color: d.color }}>
                    {d.icon}
                  </div>
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] mb-1" style={{ color: d.color }}>
                    {d.sub}
                  </p>
                  <h3 className="font-display text-lg font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                    {d.cat}
                  </h3>
                  <ul className="space-y-2">
                    {d.items.map((item, j) => (
                      <li key={j}>
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: d.color, opacity: 0.7 }} />
                          <span className="font-body text-sm font-light" style={{ color: 'hsl(138,14%,38%)' }}>{item.label}</span>
                        </div>
                        {item.subs && (
                          <ul className="ml-5 mt-1 space-y-1">
                            {item.subs.map((s, k) => (
                              <li key={k} className="flex items-center gap-1.5">
                                <span className="text-[10px]" style={{ color: d.color, opacity: 0.5 }}>—</span>
                                <span className="font-body text-xs font-light" style={{ color: 'hsl(138,12%,50%)' }}>{s}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kleurkeur & Cursus ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(45,28%,96%)" />

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="p-8 lg:p-10"
                style={{ background: 'hsl(45,30%,97%)', borderRadius: '32px 44px 36px 40px / 40px 36px 44px 32px', boxShadow: '0 2px 14px rgba(52,100,60,0.07)', border: '1px solid rgba(52,100,60,0.09)' }}>
                <p className="font-body text-xs font-medium uppercase tracking-[0.18em] mb-3" style={{ color: 'hsl(47,60%,42%)' }}>
                  Kennisdeling & cursus
                </p>
                <h3 className="font-display text-2xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                  Betrokken bij Kleurkeur Blauw
                </h3>
                <p className="font-body text-base font-light leading-relaxed mb-6" style={{ color: 'hsl(138,12%,42%)' }}>
                  Ecosloot is betrokken bij kennisdeling en cursusactiviteiten rond ecologisch beheer van watergangen, waaronder Kleurkeur Blauw. Kleurkeur Blauw is een certificaat voor ecologisch beheer van watergangen, uitgegeven door De Vlinderstichting, FLORON en RAVON.
                </p>
                <Link to={createPageUrl('KleurkeurBlauw')}
                  className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all duration-200 px-5 py-2.5 rounded-full"
                  style={{ background: 'rgba(52,100,60,0.09)', color: 'hsl(138,40%,24%)', border: '1px solid rgba(52,100,60,0.16)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.15)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.28)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.09)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.16)'; }}>
                  Meer over Kleurkeur Blauw <ArrowRight className="w-4 h-4" />
                </Link>
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
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 pt-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal mb-5" style={{ color: 'hsl(45,30%,94%)' }}>
            Monitoring of advies{' '}
            <span className="italic" style={{ color: 'hsl(138,40%,72%)' }}>nodig</span>?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-body text-lg font-light mb-10 max-w-xl mx-auto" style={{ color: 'hsl(138,20%,72%)' }}>
            Neem contact op voor monitoring, beheeradvies of een kennismaking. Wij denken graag mee over uw watergang.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
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