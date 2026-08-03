import React from 'react';
import { motion } from 'framer-motion';
import { Award, Droplets, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const audiences = [
  {
    title: 'Opdrachtgevers',
    desc: 'Kleurkeur Blauw helpt u om ecologische kwaliteit en beheerafspraken concreter te maken. Het geeft duidelijkheid over wat u nastreeft en hoe het bereikt kan worden.',
    blob: '58% 42% 50% 50% / 48% 54% 46% 52%',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2,16 C5,10 8,8 10,12 C12,16 15,10 18,13" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="5" cy="17" r="1.2" fill="currentColor" opacity="0.5" />
        <circle cx="10" cy="18" r="1.2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Aannemers',
    desc: 'Kleurkeur Blauw geeft richting aan ecologisch beheer in de praktijk. Het biedt concrete criteria en richtlijnen voor het uitvoeren van werkzaamheden gericht op biodiversiteit.',
    blob: '44% 56% 58% 42% / 54% 44% 56% 46%',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <line x1="10" y1="18" x2="10" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <ellipse cx="10" cy="3" rx="4" ry="7" fill="currentColor" opacity="0.5" />
        <line x1="15" y1="18" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="15" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.38" />
      </svg>
    ),
  },
  {
    title: 'Ecologisch beheerders',
    desc: 'Monitoring en beheer kunnen beter op elkaar worden afgestemd. De Groeivormen Index ondersteunt u bij het evalueren van beheermaatregelen en het treffen van gericht vervolgbeheer.',
    blob: '52% 48% 44% 56% / 46% 58% 42% 54%',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <ellipse cx="10" cy="13" rx="7" ry="3.5" fill="currentColor" opacity="0.5" transform="rotate(-6,10,13)" />
        <circle cx="10" cy="8" r="3.5" fill="currentColor" opacity="0.35" />
        <path d="M10,11 L10,16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Grain = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    backgroundSize: '128px',
  }} />
);

const Wave = ({ fill }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: 52 }}>
    <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
      <path d="M0,26 C360,52 720,0 1080,26 C1260,40 1380,12 1440,20 L1440,0 L0,0 Z" fill={fill} />
    </svg>
  </div>
);

export default function KleurkeurBlauw() {
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
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-8"
              style={{ background: 'rgba(52,100,60,0.10)', color: 'hsl(138,40%,22%)', border: '1px solid rgba(52,100,60,0.15)' }}>
              <Award className="w-4 h-4" /> Keurmerk
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-normal mb-6"
              style={{ color: 'hsl(138,40%,14%)' }}>
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>Kleurkeur</span>{' '}Blauw
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body text-xl font-light leading-relaxed mb-8"
              style={{ color: 'hsl(138,15%,35%)' }}>
              Kleurkeur Blauw is gericht op ecologisch beheer van watergangen. Het helpt opdrachtgevers en aannemers om beheer beter af te stemmen op biodiversiteit en waterkwaliteit.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="https://vlinderstichting.nl/kleurkeur/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-medium px-7 py-3 text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'hsl(138,40%,22%)',
                  color: 'hsl(45,30%,94%)',
                  borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px',
                  boxShadow: '0 4px 20px rgba(52,100,60,0.28)'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'hsl(138,40%,18%)'}
                onMouseLeave={e => e.currentTarget.style.background = 'hsl(138,40%,22%)'}>
                Bekijk officiële informatie <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Wat is Kleurkeur? ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
        <Grain />
        <Wave fill="#deeae0" />
        <svg className="absolute right-12 top-20 opacity-[0.055] pointer-events-none" width="130" height="85" viewBox="0 0 130 85" aria-hidden="true">
          <ellipse cx="46" cy="62" rx="38" ry="17" fill="hsl(138,40%,28%)" transform="rotate(-8,46,62)" />
          <ellipse cx="84" cy="52" rx="28" ry="13" fill="hsl(138,38%,30%)" transform="rotate(6,84,52)" />
          <circle cx="46" cy="47" r="5" fill="hsl(47,65%,50%)" opacity="0.8" />
        </svg>

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
                Wat is Kleurkeur?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,14%)' }}>
                Een gecertificeerd{' '}
                <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>keurmerk</span>
              </h2>
              <p className="font-body text-base font-light leading-relaxed mb-6" style={{ color: 'hsl(138,12%,40%)' }}>
                Kleurkeur is een certificaat voor ecologisch maaibeheer van bermen en watergangen. Kleurkeur Groen richt zich op bermen en <span className="font-medium">Kleurkeur Blauw op watergangen</span>.
              </p>
              <p className="font-body text-base font-light leading-relaxed mb-6" style={{ color: 'hsl(138,12%,40%)' }}>
                Kleurkeur is bedoeld als standaard voor aannemers en opdrachtgevers voor ecologisch beheer gericht op behoud en verbetering van biodiversiteit.
              </p>
              <div className="p-6 rounded-2xl border-l-4" style={{ background: 'rgba(52,100,60,0.07)', borderColor: 'hsl(138,40%,28%)', borderRadius: '0 16px 16px 0' }}>
                <p className="font-body text-sm font-light" style={{ color: 'hsl(138,12%,36%)' }}>
                  <span className="font-medium" style={{ color: 'hsl(138,40%,24%)' }}>Uitgegeven door:</span> De Vlinderstichting en Stichting Groenkeur. Kleurkeur is een <span className="font-medium">officieel gecertificeerd keurmerk</span>.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="p-10 lg:p-12 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(200,28%,90%) 100%)', borderRadius: '42% 58% 46% 54% / 54% 44% 56% 46%' }}>
                <svg viewBox="0 0 240 200" className="w-full max-w-xs" aria-hidden="true">
                  {/* Water */}
                  <ellipse cx="120" cy="165" rx="105" ry="18" fill="hsl(200,40%,70%)" opacity="0.35" />
                  <path d="M20,165 Q60,155 120,162 Q180,168 220,160" fill="none" stroke="rgba(100,155,175,0.3)" strokeWidth="1.5" />
                  {/* Waterlelie */}
                  <ellipse cx="80" cy="160" rx="35" ry="15" fill="hsl(138,40%,28%)" transform="rotate(-12,80,160)" opacity="0.68" />
                  <ellipse cx="145" cy="164" rx="28" ry="12" fill="hsl(138,38%,26%)" transform="rotate(8,145,164)" opacity="0.62" />
                  <circle cx="80" cy="148" r="8" fill="hsl(45,70%,78%)" opacity="0.85" />
                  <circle cx="80" cy="148" r="4" fill="hsl(47,70%,60%)" />
                  {/* Riet */}
                  <line x1="175" y1="175" x2="175" y2="65" stroke="hsl(138,38%,28%)" strokeWidth="5" strokeLinecap="round" />
                  <ellipse cx="175" cy="54" rx="11" ry="28" fill="hsl(47,65%,46%)" />
                  <line x1="200" y1="175" x2="200" y2="92" stroke="hsl(138,38%,28%)" strokeWidth="3.5" strokeLinecap="round" />
                  <ellipse cx="200" cy="82" rx="8" ry="22" fill="hsl(47,62%,48%)" />
                  {/* Kroos */}
                  <ellipse cx="50" cy="166" rx="6" ry="3.2" fill="hsl(138,50%,34%)" opacity="0.55" />
                  <ellipse cx="65" cy="171" rx="5.5" ry="2.8" fill="hsl(138,48%,32%)" opacity="0.48" />
                  <ellipse cx="110" cy="168" rx="5" ry="2.5" fill="hsl(138,50%,36%)" opacity="0.50" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Groeivormen Index ── */}
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
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-5 block" style={{ color: 'hsl(47,65%,42%)' }}>
                Monitoring
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: 'hsl(138,40%,14%)' }}>
                Kleurkeur Blauw & Groeivormen{' '}
                <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>Index</span>
              </h2>
              <p className="font-body text-lg font-light leading-relaxed mb-8" style={{ color: 'hsl(138,12%,40%)' }}>
                De Groeivormen Index is een monitoringsmethode die speciaal <span className="font-medium">ontwikkeld is voor Kleurkeur Blauw</span>. De methode biedt inzicht in de ecologische balans van watergangen aan de hand van groeivormen van waterplanten.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: '📊', label: 'Kleurkeur Blauw', desc: 'Gaat over ecologisch beheer van watergangen' },
                  { icon: '🔍', label: 'Groeivormen Index', desc: 'Ondersteunt monitoring en beoordeling' },
                  { icon: '🎯', label: 'Praktisch', desc: 'Helpt beheer beter aan te sluiten op waarnemingen' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="p-5 text-center" style={{ background: 'hsl(45,30%,97%)', borderRadius: '20px 28px 24px 28px / 24px 20px 28px 24px' }}>
                      <p className="text-2xl mb-3">{item.icon}</p>
                      <p className="font-body font-medium mb-2" style={{ color: 'hsl(138,40%,18%)' }}>{item.label}</p>
                      <p className="font-body text-sm font-light" style={{ color: 'hsl(138,12%,46%)' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="font-body text-base font-light leading-relaxed p-6 rounded-2xl"
                style={{ background: 'rgba(52,100,60,0.06)', borderLeft: '4px solid hsl(138,40%,28%)' }}>
                De methode helpt om beheer beter te koppelen aan wat er in de watergang wordt waargenomen. Zo kunnen opdrachtgevers en aannemers gericht inzicht krijgen in de effectiviteit van beheermaatregen en vervolgbeslissingen beter onderbouwen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Voor wie? ── */}
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
              Toepassingen
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal" style={{ color: 'hsl(138,40%,14%)' }}>
              Voor wie is Kleurkeur{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>relevant</span>?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((aud, i) => (
              <motion.div key={aud.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="p-7 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'hsl(45,30%,97%)', borderRadius: aud.blob, boxShadow: '0 2px 10px rgba(52,100,60,0.06)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(52,100,60,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}>
                  <div className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ background: 'rgba(52,100,60,0.10)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%', color: 'hsl(138,40%,28%)' }}>
                    {aud.icon}
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3" style={{ color: 'hsl(138,40%,14%)' }}>
                    {aud.title}
                  </h3>
                  <p className="font-body text-sm font-light leading-relaxed" style={{ color: 'hsl(138,12%,40%)' }}>
                    {aud.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meer informatie ── */}
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
                  Officiële informatie & cursusaanbod
                </p>
                <h3 className="font-display text-2xl font-medium mb-4" style={{ color: 'hsl(138,40%,14%)' }}>
                  De Vlinderstichting
                </h3>
                <p className="font-body text-base font-light leading-relaxed mb-6" style={{ color: 'hsl(138,12%,42%)' }}>
                  Ecosloot licht de Groeivormen Index toe en ondersteunt monitoring. Voor officiële informatie over Kleurkeur, certificering, richtlijnen en cursusaanbod verwijzen wij u naar De Vlinderstichting. Zij beheren het keurmerk en verzorgen de officiële scholing.
                </p>
                <a href="https://vlinderstichting.nl/kleurkeur/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm transition-all duration-200 px-6 py-2.5 rounded-full"
                  style={{ background: 'rgba(52,100,60,0.09)', color: 'hsl(138,40%,24%)', border: '1px solid rgba(52,100,60,0.16)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.15)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.28)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.09)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.16)'; }}>
                  Bekijk Kleurkeur bij De Vlinderstichting <ExternalLink className="w-4 h-4" />
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
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 pt-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal mb-5" style={{ color: 'hsl(45,30%,94%)' }}>
            Meer weten over de{' '}
            <span className="italic" style={{ color: 'hsl(138,40%,72%)' }}>Groeivormen Index</span>?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-body text-lg font-light mb-10 max-w-xl mx-auto" style={{ color: 'hsl(138,20%,72%)' }}>
            Neem contact op voor monitoring, advies of meer informatie over de toepassing van de methode.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to={createPageUrl('Contact')}>
              <button
                className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'hsl(45,30%,94%)',
                  color: 'hsl(138,40%,18%)',
                  borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px'
                }}
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