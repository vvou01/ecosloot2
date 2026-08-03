import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// Animated water surface ripple
function WaterRipple({ cx, cy, r, delay }) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={r}
      fill="none"
      stroke="rgba(120,170,190,0.25)"
      strokeWidth="1"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1.3, opacity: 0 }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(170deg, hsl(45,32%,96%) 0%, hsl(138,18%,90%) 38%, hsl(200,30%,88%) 100%)' }}>

      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
      }} />

      {/* Deep landscape composition */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Sky wash */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}
          className="absolute top-0 right-0 w-full h-[60%]"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(180,210,195,0.28) 0%, transparent 75%)' }} />

        {/* Water surface - bottom third */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.4 }}
          className="absolute bottom-0 left-0 w-full h-[42%]"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(140,185,195,0.18) 40%, rgba(100,155,175,0.28) 100%)' }} />

        {/* Animated water ripples SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-[42%]" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {/* Gentle water lines */}
          <motion.path
            d="M0,180 C120,172 240,188 360,180 C480,172 600,186 720,180 C840,174 960,184 1080,180 C1200,176 1320,182 1440,180"
            fill="none" stroke="rgba(120,165,180,0.20)" strokeWidth="1.5"
            animate={{ d: [
              "M0,180 C120,172 240,188 360,180 C480,172 600,186 720,180 C840,174 960,184 1080,180 C1200,176 1320,182 1440,180",
              "M0,184 C120,178 240,184 360,176 C480,168 600,182 720,176 C840,170 960,188 1080,176 C1200,172 1320,186 1440,176",
              "M0,180 C120,172 240,188 360,180 C480,172 600,186 720,180 C840,174 960,184 1080,180 C1200,176 1320,182 1440,180",
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,210 C180,202 360,218 540,210 C720,202 900,216 1080,210 C1200,206 1340,212 1440,208"
            fill="none" stroke="rgba(100,150,170,0.15)" strokeWidth="1"
            animate={{ d: [
              "M0,210 C180,202 360,218 540,210 C720,202 900,216 1080,210 C1200,206 1340,212 1440,208",
              "M0,206 C180,214 360,204 540,214 C720,220 900,208 1080,214 C1200,218 1340,206 1440,212",
              "M0,210 C180,202 360,218 540,210 C720,202 900,216 1080,210 C1200,206 1340,212 1440,208",
            ]}}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

          {/* Drijvende waterlelie pads */}
          <g opacity="0.55" fill="hsl(138,40%,30%)">
            <ellipse cx="820" cy="220" rx="36" ry="14" transform="rotate(-8,820,220)" />
            <ellipse cx="870" cy="235" rx="28" ry="11" transform="rotate(5,870,235)" />
            <ellipse cx="780" cy="240" rx="22" ry="9" transform="rotate(-3,780,240)" />
            {/* notch */}
            <path d="M820,208 L820,220" stroke="hsl(138,38%,22%)" strokeWidth="1.5" />
            <path d="M870,225 L870,235" stroke="hsl(138,38%,22%)" strokeWidth="1" />
          </g>
          {/* Bloem */}
          <circle cx="820" cy="212" r="5" fill="hsl(45,60%,85%)" opacity="0.8" />
          <circle cx="820" cy="212" r="2.5" fill="hsl(47,70%,65%)" opacity="0.9" />

          {/* Kroos cluster */}
          <g opacity="0.45" fill="hsl(138,48%,34%)">
            <ellipse cx="1050" cy="228" rx="12" ry="5" transform="rotate(-4)" />
            <ellipse cx="1070" cy="233" rx="10" ry="4" transform="rotate(3)" />
            <ellipse cx="1040" cy="238" rx="9" ry="4" />
            <ellipse cx="1060" cy="244" rx="11" ry="4.5" transform="rotate(-2)" />
            <ellipse cx="1085" cy="240" rx="8" ry="3.5" />
          </g>

          {/* Flab streaks */}
          <g opacity="0.18" fill="hsl(100,40%,38%)">
            <ellipse cx="320" cy="260" rx="50" ry="8" transform="rotate(-5,320,260)" />
            <ellipse cx="380" cy="275" rx="35" ry="6" transform="rotate(3,380,275)" />
          </g>

          {/* Ripples */}
          <WaterRipple cx={700} cy={220} r={20} delay={0} />
          <WaterRipple cx={700} cy={220} r={35} delay={1.2} />
          <WaterRipple cx={1100} cy={240} r={15} delay={2.5} />
          <WaterRipple cx={400} cy={250} r={18} delay={1.8} />
        </svg>

        {/* Oeverrand – organische grondlijn */}
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C80,20 160,38 280,28 C400,18 500,35 640,25 C780,15 900,32 1040,24 C1160,18 1300,30 1440,22 L1440,60 L0,60 Z" fill="rgba(52,90,40,0.06)" />
        </svg>

        {/* Back plane riet – very faint */}
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true">
          <g opacity="0.10" fill="hsl(138,30%,38%)">
            <rect x="580" y="60" width="5" height="180" rx="2" /><ellipse cx="582" cy="52" rx="10" ry="28" />
            <rect x="620" y="80" width="4" height="160" rx="2" /><ellipse cx="622" cy="73" rx="8" ry="22" />
            <rect x="660" y="55" width="6" height="185" rx="2" /><ellipse cx="663" cy="46" rx="11" ry="30" />
            <rect x="700" y="75" width="4" height="165" rx="2" /><ellipse cx="702" cy="68" rx="8" ry="22" />
          </g>
        </svg>

        {/* Mid plane riet */}
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <g opacity="0.16" fill="hsl(138,36%,30%)">
            <rect x="0" y="68" width="6" height="132" rx="2" /><ellipse cx="3" cy="60" rx="12" ry="32" />
            <rect x="50" y="88" width="5" height="112" rx="2" /><ellipse cx="52" cy="81" rx="9" ry="24" />
            <rect x="105" y="62" width="7" height="138" rx="2" /><ellipse cx="108" cy="53" rx="13" ry="34" />
            <rect x="168" y="85" width="5" height="115" rx="2" /><ellipse cx="170" cy="77" rx="9" ry="24" />
            <rect x="1230" y="65" width="6" height="135" rx="2" /><ellipse cx="1233" cy="57" rx="12" ry="32" />
            <rect x="1290" y="86" width="5" height="114" rx="2" /><ellipse cx="1292" cy="78" rx="9" ry="24" />
            <rect x="1355" y="58" width="7" height="142" rx="2" /><ellipse cx="1358" cy="49" rx="13" ry="34" />
            <rect x="1425" y="80" width="5" height="120" rx="2" /><ellipse cx="1427" cy="72" rx="9" ry="24" />
          </g>
        </svg>

        {/* Front plane riet – darkest */}
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 165" preserveAspectRatio="none" aria-hidden="true">
          <g opacity="0.22" fill="hsl(138,40%,22%)">
            <rect x="-5" y="68" width="7" height="97" rx="3" /><ellipse cx="-2" cy="58" rx="14" ry="36" />
            <rect x="42" y="85" width="6" height="80" rx="3" /><ellipse cx="45" cy="76" rx="11" ry="28" />
            <rect x="92" y="72" width="8" height="93" rx="3" /><ellipse cx="96" cy="61" rx="15" ry="38" />
            <rect x="1340" y="70" width="7" height="95" rx="3" /><ellipse cx="1343" cy="60" rx="14" ry="36" />
            <rect x="1390" y="86" width="6" height="79" rx="3" /><ellipse cx="1393" cy="77" rx="11" ry="28" />
            <rect x="1435" y="73" width="8" height="92" rx="3" /><ellipse cx="1439" cy="62" rx="15" ry="38" />
          </g>
          {/* Organic water edge */}
          <path d="M0,132 C80,118 160,130 260,122 C360,114 440,128 560,120 C660,113 760,125 880,118 C1000,111 1100,126 1220,119 C1320,113 1400,127 1440,122 L1440,165 L0,165 Z" fill="rgba(52,100,60,0.055)" />
        </svg>

        {/* Waterlelie pads – closer, right side */}
        <svg className="absolute bottom-24 right-[5%] opacity-[0.09] pointer-events-none" width="200" height="130" viewBox="0 0 200 130" aria-hidden="true">
          <ellipse cx="70" cy="96" rx="54" ry="25" fill="hsl(138,40%,26%)" transform="rotate(-12,70,96)" />
          <ellipse cx="125" cy="85" rx="42" ry="20" fill="hsl(138,38%,30%)" transform="rotate(8,125,85)" />
          <ellipse cx="162" cy="102" rx="32" ry="15" fill="hsl(138,36%,24%)" transform="rotate(-5,162,102)" />
          <line x1="70" y1="96" x2="72" y2="125" stroke="hsl(138,38%,26%)" strokeWidth="2.5" />
          <line x1="125" y1="85" x2="127" y2="115" stroke="hsl(138,38%,26%)" strokeWidth="2" />
          <circle cx="70" cy="81" r="7" fill="hsl(45,60%,82%)" opacity="0.85" />
          <circle cx="70" cy="81" r="3.5" fill="hsl(47,70%,62%)" opacity="0.9" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-8"
              style={{ background: 'rgba(52,100,60,0.10)', color: 'hsl(138,40%,22%)', border: '1px solid rgba(52,100,60,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(138,40%,30%)' }} />
              Ecologische waterkwaliteit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] mb-8"
            style={{ color: 'hsl(138,40%,12%)' }}
          >
            Inzicht in de{' '}
            <span className="relative inline-block italic">
              <span className="relative z-10" style={{ color: 'hsl(138,38%,28%)' }}>gezondheid</span>
              <motion.span
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute bottom-1.5 left-0 right-0 h-2.5 origin-left"
                style={{ background: 'rgba(170,205,130,0.50)', zIndex: 0, borderRadius: '0 60% 40% 60% / 0 40% 60% 40%' }}
              />
            </span>
            <br />van uw watergang
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-body text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl"
            style={{ color: 'hsl(138,14%,34%)' }}
          >
            Nederland telt duizenden kilometers aan watergangen. Ecosloot biedt inzicht in de ecologische kwaliteit van uw water: van laagdrempelige monitoring tot concrete handvatten voor beheer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to={createPageUrl('Model')}>
              <button
                className="inline-flex items-center justify-center font-body font-medium px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'hsl(138,40%,22%)', color: '#f5f0e8', boxShadow: '0 4px 20px rgba(52,100,60,0.32)', borderRadius: '28px 32px 30px 32px / 30px 32px 28px 30px' }}
                onMouseEnter={e => e.currentTarget.style.background = 'hsl(138,40%,18%)'}
                onMouseLeave={e => e.currentTarget.style.background = 'hsl(138,40%,22%)'}
              >
                Ontdek de Groeivormen Index
              </button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <button
                className="inline-flex items-center justify-center font-body font-medium px-8 py-4 text-base transition-all duration-300"
                style={{ color: 'hsl(138,40%,22%)', background: 'rgba(255,255,255,0.55)', border: '1.5px solid rgba(52,100,60,0.28)', borderRadius: '30px 28px 32px 28px / 28px 30px 28px 32px', backdropFilter: 'blur(4px)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,100,60,0.08)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(52,100,60,0.28)'; }}
              >
                Neem contact op
              </button>
            </Link>
          </motion.div>

          {/* Ecological badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {['Waterplanten', 'Groeivormen Index', 'Ecologische beoordeling', 'Waterbeheer'].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-body font-medium"
                style={{ background: 'rgba(52,100,60,0.07)', color: 'hsl(138,35%,32%)', borderRadius: '50%', border: '1px solid rgba(52,100,60,0.12)', borderRadius: '20px' }}>
                <span className="w-1 h-1 rounded-full" style={{ background: 'hsl(138,40%,40%)' }} />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5" style={{ color: 'hsl(138,20%,48%)' }}>
          <span className="text-xs uppercase tracking-[0.2em] font-body">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
            <path d="M8 4 C8 4 4 14 8 20 C12 14 8 4 8 4Z" fill="currentColor" opacity="0.5" />
            <path d="M5 16 L8 20 L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}