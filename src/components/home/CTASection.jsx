import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'hsl(45,30%,97%)' }}>
      {/* Paper grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px',
      }} />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="w-full" style={{ height: 52 }} aria-hidden="true">
          <path d="M0,26 C480,52 960,0 1440,26 L1440,0 L0,0 Z" fill="hsl(138,40%,16%)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-12 lg:p-20"
          style={{
            background: 'linear-gradient(135deg, hsl(138,22%,91%) 0%, hsl(45,28%,94%) 60%, hsl(47,40%,90%) 100%)',
            boxShadow: '0 4px 40px rgba(52,100,60,0.08)',
            borderRadius: '42% 58% 38% 62% / 52% 44% 56% 48%',
          }}
        >
          {/* Reed plant silhouette decoration */}
          <svg className="absolute right-0 bottom-0 h-full opacity-[0.12] pointer-events-none" viewBox="0 0 200 300" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">
            <line x1="100" y1="300" x2="100" y2="80" stroke="hsl(138,38%,30%)" strokeWidth="4" strokeLinecap="round"/>
            <ellipse cx="100" cy="75" rx="8" ry="30" fill="hsl(47,65%,48%)" />
            <line x1="130" y1="300" x2="130" y2="110" stroke="hsl(138,38%,30%)" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="130" cy="103" rx="6" ry="22" fill="hsl(47,65%,48%)" />
            <line x1="70" y1="300" x2="70" y2="130" stroke="hsl(138,38%,30%)" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="70" cy="123" rx="6" ry="22" fill="hsl(47,65%,48%)" />
            <line x1="155" y1="300" x2="155" y2="155" stroke="hsl(138,38%,30%)" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="155" cy="148" rx="5" ry="18" fill="hsl(47,60%,52%)" />
            <line x1="45" y1="300" x2="45" y2="165" stroke="hsl(138,38%,30%)" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="45" cy="158" rx="5" ry="18" fill="hsl(47,60%,52%)" />
          </svg>

          {/* Waterlelie left watermark */}
          <svg className="absolute left-8 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none" width="80" height="60" viewBox="0 0 80 60" aria-hidden="true">
            <ellipse cx="35" cy="42" rx="30" ry="14" fill="hsl(138,40%,28%)" transform="rotate(-8,35,42)" />
            <ellipse cx="58" cy="36" rx="22" ry="10" fill="hsl(138,38%,30%)" transform="rotate(6,58,36)" />
            <circle cx="35" cy="30" r="5" fill="hsl(47,65%,50%)" opacity="0.7" />
          </svg>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl lg:text-4xl font-normal mb-6"
              style={{ color: 'hsl(138,40%,14%)' }}
            >
              Aan de slag met de{' '}
              <span className="italic" style={{ color: 'hsl(138,38%,30%)' }}>Groeivormen Index</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg font-light mb-10"
              style={{ color: 'hsl(138,12%,38%)' }}
            >
              Wilt u de Groeivormen Index toepassen in uw project of organisatie? Neem contact op voor meer informatie of een vrijblijvend gesprek.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to={createPageUrl('Contact')}>
                <button
                  className="inline-flex items-center justify-center font-body font-medium px-8 py-4 text-lg transition-all duration-300 shadow-md group"
                  style={{
                    background: 'hsl(138,40%,22%)',
                    color: 'hsl(45,30%,97%)',
                    boxShadow: '0 4px 20px rgba(52,100,60,0.28)',
                    borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'hsl(138,40%,18%)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'hsl(138,40%,22%)'}
                >
                  Contact opnemen
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to={createPageUrl('Model')}>
                <button
                  className="inline-flex items-center justify-center font-body font-medium px-8 py-4 text-lg transition-all duration-300"
                  style={{
                    color: 'hsl(138,40%,22%)',
                    background: 'transparent',
                    border: '1.5px solid rgba(52,100,60,0.28)',
                    borderRadius: '30px 28px 32px 28px / 28px 30px 28px 32px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.07)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.50)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.28)'; }}
                >
                  Groeivormen Index bekijken
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}