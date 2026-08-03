import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Droplets, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const subjects = [
  'Groeivormen Index',
  'Monitoring waterkwaliteit',
  'Beheeradvies',
  'Kleurkeur Blauw',
  'Cursus of kennisdeling',
  'Anders',
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectClick = (subject) => {
    setFormData(prev => ({ ...prev, subject }));
  };

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #eaf0e8 45%, #deeae0 100%)' }}>
        <Grain />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[50vw] h-[70vh]"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(96,148,102,0.16) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[55vw] h-[50vh]"
            style={{ background: 'radial-gradient(ellipse at 20% 90%, rgba(120,170,150,0.12) 0%, transparent 80%)' }} />
          <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
            <g opacity="0.11" fill="hsl(138,40%,22%)">
              <rect x="20" y="48" width="5" height="62" rx="2" /><ellipse cx="22" cy="40" rx="10" ry="26" />
              <rect x="75" y="62" width="4" height="48" rx="2" /><ellipse cx="77" cy="55" rx="8" ry="20" />
              <rect x="1350" y="44" width="5" height="66" rx="2" /><ellipse cx="1352" cy="36" rx="10" ry="26" />
              <rect x="1410" y="60" width="4" height="50" rx="2" /><ellipse cx="1412" cy="53" rx="8" ry="20" />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-8"
              style={{ background: 'rgba(52,100,60,0.10)', color: 'hsl(138,40%,22%)', border: '1px solid rgba(52,100,60,0.15)' }}>
              <Droplets className="w-4 h-4" /> Contact
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-normal mb-6"
              style={{ color: 'hsl(138,40%,14%)' }}>
              Neem{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,30%)' }}>contact</span>{' '}
              op
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="font-body text-xl font-light leading-relaxed"
              style={{ color: 'hsl(138,15%,35%)' }}>
              Heeft u vragen over de Groeivormen Index, ecologische monitoring of beheeradvies voor watergangen? We denken graag mee over een praktische aanpak.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Formulier ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
        <Grain />
        <Wave fill="#deeae0" />
        <svg className="absolute right-10 top-16 opacity-[0.06] pointer-events-none" width="110" height="70" viewBox="0 0 110 70" aria-hidden="true">
          <ellipse cx="18" cy="35" rx="13" ry="7" fill="hsl(138,40%,28%)" />
          <ellipse cx="45" cy="22" rx="10" ry="6" fill="hsl(138,38%,30%)" />
          <ellipse cx="70" cy="42" rx="12" ry="7" fill="hsl(138,36%,26%)" />
          <ellipse cx="95" cy="26" rx="9" ry="5" fill="hsl(138,40%,28%)" />
          <ellipse cx="30" cy="52" rx="8" ry="5" fill="hsl(138,38%,30%)" />
        </svg>

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

              {isSubmitted ? (
                <div className="p-10 lg:p-12 text-center"
                  style={{ background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)', borderRadius: '42% 58% 38% 62% / 52% 44% 56% 48%', boxShadow: '0 4px 24px rgba(52,100,60,0.07)' }}>
                  <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                    className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(52,100,60,0.10)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}>
                    <CheckCircle2 className="w-8 h-8" style={{ color: 'hsl(138,40%,26%)' }} />
                  </motion.div>
                  <h3 className="font-display text-2xl lg:text-3xl font-medium mb-3" style={{ color: 'hsl(138,40%,14%)' }}>
                    Bericht verzonden!
                  </h3>
                  <p className="font-body font-light mb-6" style={{ color: 'hsl(138,12%,40%)' }}>
                    Bedankt voor uw bericht. We reageren zo snel mogelijk en kijken graag mee naar een praktische, ecologisch onderbouwde oplossing.
                  </p>
                  <button onClick={() => setIsSubmitted(false)}
                    className="inline-flex font-body font-medium px-6 py-2.5 text-sm rounded-full transition-all duration-200"
                    style={{ background: 'rgba(52,100,60,0.10)', color: 'hsl(138,40%,24%)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,100,60,0.16)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(52,100,60,0.10)'}>
                    Nieuw bericht versturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 lg:p-12"
                  style={{
                    background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)',
                    borderRadius: '32px 44px 36px 40px / 40px 36px 44px 32px',
                    boxShadow: '0 4px 24px rgba(52,100,60,0.07)',
                  }}>
                  <div className="space-y-6">
                    {/* Naam */}
                    <div>
                      <Label htmlFor="name" className="font-body font-medium mb-2.5 block" style={{ color: 'hsl(138,40%,18%)' }}>
                        Naam *
                      </Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="h-12 font-body font-light"
                        style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(52,100,60,0.20)', borderRadius: '12px 16px 14px 14px / 14px 14px 12px 16px' }}
                        placeholder="Uw naam" />
                    </div>

                    {/* E-mail */}
                    <div>
                      <Label htmlFor="email" className="font-body font-medium mb-2.5 block" style={{ color: 'hsl(138,40%,18%)' }}>
                        E-mailadres *
                      </Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                        className="h-12 font-body font-light"
                        style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(52,100,60,0.20)', borderRadius: '12px 16px 14px 14px / 14px 14px 12px 16px' }}
                        placeholder="uw@email.nl" />
                    </div>

                    {/* Organisatie */}
                    <div>
                      <Label htmlFor="organization" className="font-body font-medium mb-2.5 block" style={{ color: 'hsl(138,40%,18%)' }}>
                        Organisatie
                      </Label>
                      <Input id="organization" name="organization" value={formData.organization} onChange={handleChange}
                        className="h-12 font-body font-light"
                        style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(52,100,60,0.20)', borderRadius: '12px 16px 14px 14px / 14px 14px 12px 16px' }}
                        placeholder="Uw organisatie (optioneel)" />
                    </div>

                    {/* Onderwerp */}
                    <div>
                      <Label className="font-body font-medium mb-3 block" style={{ color: 'hsl(138,40%,18%)' }}>
                        Waar gaat het over? *
                      </Label>
                      <div className="flex flex-wrap gap-2.5">
                        {subjects.map(subj => (
                          <button key={subj} type="button"
                            onClick={() => handleSubjectClick(subj)}
                            className="px-4 py-2 font-body text-sm font-medium rounded-full transition-all duration-200"
                            style={{
                              background: formData.subject === subj ? 'hsl(138,40%,22%)' : 'rgba(255,255,255,0.6)',
                              color: formData.subject === subj ? 'hsl(45,30%,94%)' : 'hsl(138,40%,24%)',
                              border: formData.subject === subj ? 'none' : '1px solid rgba(52,100,60,0.15)',
                            }}
                            onMouseEnter={e => {
                              if (formData.subject !== subj) {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.85)';
                              }
                            }}
                            onMouseLeave={e => {
                              if (formData.subject !== subj) {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                              }
                            }}>
                            {subj}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bericht */}
                    <div>
                      <Label htmlFor="message" className="font-body font-medium mb-2.5 block" style={{ color: 'hsl(138,40%,18%)' }}>
                        Bericht *
                      </Label>
                      <p className="font-body text-xs font-light mb-2.5" style={{ color: 'hsl(138,14%,50%)' }}>
                        Beschrijf kort uw watergang, vraag of project. Dan kunnen we gericht meedenken over de beste vervolgstap.
                      </p>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="font-body font-light resize-none"
                        style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(52,100,60,0.20)', borderRadius: '12px 16px 14px 14px / 14px 14px 12px 16px' }}
                        placeholder="Uw vraag of project..." />
                    </div>

                    {/* Submit knop */}
                    <motion.button type="submit" disabled={isSubmitting || !formData.subject}
                      className="w-full h-14 font-body font-medium text-base flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5"
                      style={{
                        background: isSubmitting || !formData.subject ? 'hsl(138,30%,48%)' : 'hsl(138,40%,22%)',
                        color: 'hsl(45,30%,97%)',
                        borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px',
                        boxShadow: '0 4px 20px rgba(52,100,60,0.28)',
                        cursor: isSubmitting || !formData.subject ? 'not-allowed' : 'pointer',
                      }}
                      onMouseEnter={e => !isSubmitting && formData.subject && (e.currentTarget.style.background = 'hsl(138,40%,18%)')}
                      onMouseLeave={e => !isSubmitting && formData.subject && (e.currentTarget.style.background = 'hsl(138,40%,22%)')}>
                      {isSubmitting ? (
                        <>
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                            ⟳
                          </motion.span>
                          Verzenden...
                        </>
                      ) : (
                        <>
                          <span>Verstuur bericht</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}

              {/* Geruststellende tekst */}
              {!isSubmitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="font-body text-sm font-light text-center mt-6 px-4"
                  style={{ color: 'hsl(138,12%,48%)' }}>
                  We reageren zo snel mogelijk en kijken graag mee naar een praktische, ecologisch onderbouwde oplossing.
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Diensten overzicht ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(175deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 100%)' }}>
        <Grain />
        <Wave fill="hsl(45,30%,97%)" />

        <div className="container mx-auto px-6 lg:px-12 pt-6">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-body font-medium text-xs uppercase tracking-[0.2em] mb-4 block" style={{ color: 'hsl(47,65%,42%)' }}>
              Waarvoor kunt u terecht
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal" style={{ color: 'hsl(138,40%,14%)' }}>
              Waar kunnen we u bij{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,28%)' }}>helpen</span>?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📊', label: 'Monitoring & Inventarisatie', desc: 'Watervegetatie, macrofauna, waterkwaliteit' },
              { icon: '🎯', label: 'Beheeradvies', desc: 'Gericht op uitkomsten van monitoring' },
              { icon: '🌿', label: 'Groeivormen Index', desc: 'Laagdrempelige ecologische beoordeling' },
              { icon: '⭐', label: 'Kleurkeur Blauw', desc: 'Keurmerk voor ecologisch beheer' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}>
                <div className="p-6 h-full text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'hsl(45,30%,97%)',
                    borderRadius: '28px 36px 32px 36px / 32px 28px 36px 32px',
                    boxShadow: '0 2px 10px rgba(52,100,60,0.06)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(52,100,60,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 10px rgba(52,100,60,0.06)'}>
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <h3 className="font-display text-base font-medium mb-2" style={{ color: 'hsl(138,40%,14%)' }}>
                    {item.label}
                  </h3>
                  <p className="font-body text-sm font-light" style={{ color: 'hsl(138,12%,46%)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}