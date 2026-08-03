import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Droplets, Mail, MapPin } from 'lucide-react';

const navigation = [
  { name: 'Home', page: 'Home' },
  { name: 'Groeivormen Index', page: 'Model' },
  { name: 'Kleurkeur Blauw', page: 'KleurkeurBlauw' },
  { name: 'Over ons', page: 'OverOns' },
  { name: 'Contact', page: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'hsl(138,35%,10%)', color: 'hsl(45,20%,88%)' }}>
      {/* Wave top divider into footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full" style={{ height: 48 }} aria-hidden="true">
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,4 1440,20 L1440,0 L0,0 Z" fill="hsl(45,30%,97%)" />
        </svg>
      </div>

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px',
      }} />

      {/* Botanical watermark reed — right side */}
      <svg className="absolute right-8 top-12 opacity-[0.06] pointer-events-none" width="50" height="180" viewBox="0 0 50 180" aria-hidden="true">
        <line x1="25" y1="180" x2="25" y2="22" stroke="hsl(138,38%,55%)" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="25" cy="14" rx="8" ry="22" fill="hsl(47,60%,55%)" />
        <line x1="38" y1="180" x2="38" y2="58" stroke="hsl(138,38%,55%)" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="38" cy="50" rx="6" ry="16" fill="hsl(47,58%,52%)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 py-16 pt-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center" style={{ background: 'hsl(138,40%,22%)', borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%' }}>
                <Droplets className="w-5 h-5" style={{ color: 'hsl(45,30%,90%)' }} />
              </div>
              <span className="font-display text-xl font-medium" style={{ color: 'hsl(45,25%,92%)' }}>Ecosloot</span>
            </div>
            <p className="font-body font-light leading-relaxed max-w-md mb-6" style={{ color: 'hsl(138,15%,58%)' }}>
              Laagdrempelig inzicht in de ecologische kwaliteit van watergangen via de <span className="italic">Groeivormen Index</span> en het Kleurkeur Blauw keurmerk.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.2em] mb-6" style={{ color: 'hsl(47,50%,55%)' }}>
              Navigatie
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={createPageUrl(item.page)}
                    className="font-body font-light transition-colors duration-200"
                    style={{ color: 'hsl(138,15%,60%)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'hsl(47,55%,62%)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'hsl(138,15%,60%)'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-medium uppercase tracking-[0.2em] mb-6" style={{ color: 'hsl(47,50%,55%)' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(138,35%,45%)' }} />
                <span className="font-body font-light" style={{ color: 'hsl(138,15%,60%)' }}>info@ecosloot.nl</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(138,35%,45%)' }} />
                <span className="font-body font-light" style={{ color: 'hsl(138,15%,60%)' }}>Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(180,210,145,0.10)' }}>
          <p className="font-body text-sm font-light" style={{ color: 'hsl(138,12%,42%)' }}>
            © {new Date().getFullYear()} Ecosloot. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm font-body font-light" style={{ color: 'hsl(138,12%,42%)' }}>
            <span className="cursor-pointer transition-colors duration-200 hover:text-current" 
              onMouseEnter={e => e.currentTarget.style.color = 'hsl(47,55%,60%)'}
              onMouseLeave={e => e.currentTarget.style.color = 'hsl(138,12%,42%)'}>Privacy</span>
            <span className="cursor-pointer transition-colors duration-200"
              onMouseEnter={e => e.currentTarget.style.color = 'hsl(47,55%,60%)'}
              onMouseLeave={e => e.currentTarget.style.color = 'hsl(138,12%,42%)'}>Voorwaarden</span>
          </div>
        </div>
      </div>
    </footer>
  );
}