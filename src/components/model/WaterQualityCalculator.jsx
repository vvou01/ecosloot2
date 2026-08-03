import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Crown } from 'lucide-react';
import RiverVisual from '@/components/model/RiverVisual';

// ─── Lookup tables (unchanged) ──────────────────────────────────────────────
const LOOKUP_TABLE = {
  ondergedoken: [
    { pct: 0, value: 0 }, { pct: 1, value: 0.4 }, { pct: 2, value: 0.8 }, { pct: 3, value: 1.2 },
    { pct: 4, value: 1.6 }, { pct: 5, value: 2 }, { pct: 6, value: 2.4 }, { pct: 7, value: 2.8 },
    { pct: 8, value: 3.3 }, { pct: 9, value: 3.7 }, { pct: 10, value: 4 }, { pct: 11, value: 4.3 },
    { pct: 12, value: 4.5 }, { pct: 13, value: 4.8 }, { pct: 14, value: 5 }, { pct: 15, value: 5.2 },
    { pct: 16, value: 5.3 }, { pct: 17, value: 5.5 }, { pct: 18, value: 5.7 }, { pct: 19, value: 5.8 },
    { pct: 20, value: 6 }, { pct: 21, value: 6.2 }, { pct: 22, value: 6.3 }, { pct: 23, value: 6.5 },
    { pct: 24, value: 6.6 }, { pct: 25, value: 6.8 }, { pct: 26, value: 6.9 }, { pct: 27, value: 7 },
    { pct: 28, value: 7.1 }, { pct: 29, value: 7.3 }, { pct: 30, value: 7.4 }, { pct: 31, value: 7.5 },
    { pct: 32, value: 7.6 }, { pct: 33, value: 7.8 }, { pct: 34, value: 7.9 }, { pct: 35, value: 8 },
    { pct: 36, value: 8.1 }, { pct: 37, value: 8.3 }, { pct: 38, value: 8.4 }, { pct: 39, value: 8.6 },
    { pct: 40, value: 8.8 }, { pct: 41, value: 9 }, { pct: 42, value: 9.1 }, { pct: 43, value: 9.3 },
    { pct: 44, value: 9.5 }, { pct: 45, value: 9.6 }, { pct: 46, value: 9.8 }, { pct: 47, value: 9.9 },
    { pct: 48, value: 10 }, { pct: 49, value: 10 }, { pct: 50, value: 10.1 }, { pct: 51, value: 10.1 },
    { pct: 52, value: 10 }, { pct: 53, value: 9.9 }, { pct: 54, value: 9.7 }, { pct: 55, value: 9.5 },
    { pct: 56, value: 9.1 }, { pct: 57, value: 8.8 }, { pct: 58, value: 8.4 }, { pct: 59, value: 8.2 },
    { pct: 60, value: 8 }, { pct: 61, value: 7.9 }, { pct: 62, value: 7.8 }, { pct: 63, value: 7.7 },
    { pct: 64, value: 7.6 }, { pct: 65, value: 7.6 }, { pct: 66, value: 7.5 }, { pct: 67, value: 7.4 },
    { pct: 68, value: 7.4 }, { pct: 69, value: 7.4 }, { pct: 70, value: 7.3 }, { pct: 71, value: 7.3 },
    { pct: 72, value: 7.3 }, { pct: 73, value: 7.2 }, { pct: 74, value: 7.2 }, { pct: 75, value: 7.2 },
    { pct: 76, value: 7.1 }, { pct: 77, value: 7.1 }, { pct: 78, value: 7.1 }, { pct: 79, value: 7 },
    { pct: 80, value: 7 }, { pct: 81, value: 6.9 }, { pct: 82, value: 6.9 }, { pct: 83, value: 6.8 },
    { pct: 84, value: 6.7 }, { pct: 85, value: 6.6 }, { pct: 86, value: 6.5 }, { pct: 87, value: 6.4 },
    { pct: 88, value: 6.3 }, { pct: 89, value: 6.2 }, { pct: 90, value: 6 }, { pct: 91, value: 5.8 },
    { pct: 92, value: 5.4 }, { pct: 93, value: 4.9 }, { pct: 94, value: 4.4 }, { pct: 95, value: 4 },
    { pct: 96, value: 3.6 }, { pct: 97, value: 3.2 }, { pct: 98, value: 2.8 }, { pct: 99, value: 2.4 },
    { pct: 100, value: 2 }
  ],
  drijvend: [
    { pct: 0, value: 0 }, { pct: 1, value: 2 }, { pct: 2, value: 2.9 }, { pct: 3, value: 3.4 },
    { pct: 4, value: 3.7 }, { pct: 5, value: 4 }, { pct: 6, value: 4.4 }, { pct: 7, value: 4.8 },
    { pct: 8, value: 5.2 }, { pct: 9, value: 5.6 }, { pct: 10, value: 6 }, { pct: 11, value: 6.4 },
    { pct: 12, value: 6.9 }, { pct: 13, value: 7.5 }, { pct: 14, value: 8 }, { pct: 15, value: 8.5 },
    { pct: 16, value: 9 }, { pct: 17, value: 9.4 }, { pct: 18, value: 9.7 }, { pct: 19, value: 9.9 },
    { pct: 20, value: 10 }, { pct: 21, value: 9.9 }, { pct: 22, value: 9.7 }, { pct: 23, value: 9.3 },
    { pct: 24, value: 8.9 }, { pct: 25, value: 8.4 }, { pct: 26, value: 7.8 }, { pct: 27, value: 7.3 },
    { pct: 28, value: 6.8 }, { pct: 29, value: 6.4 }, { pct: 30, value: 6 }, { pct: 31, value: 5.7 },
    { pct: 32, value: 5.4 }, { pct: 33, value: 5.2 }, { pct: 34, value: 5 }, { pct: 35, value: 4.8 },
    { pct: 36, value: 4.6 }, { pct: 37, value: 4.4 }, { pct: 38, value: 4.3 }, { pct: 39, value: 4.1 },
    { pct: 40, value: 4 }, { pct: 41, value: 3.9 }, { pct: 42, value: 3.8 }, { pct: 43, value: 3.7 },
    { pct: 44, value: 3.6 }, { pct: 45, value: 3.5 }, { pct: 46, value: 3.4 }, { pct: 47, value: 3.3 },
    { pct: 48, value: 3.2 }, { pct: 49, value: 3.2 }, { pct: 50, value: 3.1 }, { pct: 51, value: 3 },
    { pct: 52, value: 3 }, { pct: 53, value: 2.9 }, { pct: 54, value: 2.8 }, { pct: 55, value: 2.8 },
    { pct: 56, value: 2.7 }, { pct: 57, value: 2.7 }, { pct: 58, value: 2.7 }, { pct: 59, value: 2.6 },
    { pct: 60, value: 2.6 }, { pct: 61, value: 2.6 }, { pct: 62, value: 2.5 }, { pct: 63, value: 2.5 },
    { pct: 64, value: 2.5 }, { pct: 65, value: 2.5 }, { pct: 66, value: 2.4 }, { pct: 67, value: 2.4 },
    { pct: 68, value: 2.4 }, { pct: 69, value: 2.4 }, { pct: 70, value: 2.4 }, { pct: 71, value: 2.4 },
    { pct: 72, value: 2.4 }, { pct: 73, value: 2.3 }, { pct: 74, value: 2.3 }, { pct: 75, value: 2.3 },
    { pct: 76, value: 2.3 }, { pct: 77, value: 2.3 }, { pct: 78, value: 2.3 }, { pct: 79, value: 2.3 },
    { pct: 80, value: 2.3 }, { pct: 81, value: 2.3 }, { pct: 82, value: 2.3 }, { pct: 83, value: 2.3 },
    { pct: 84, value: 2.3 }, { pct: 85, value: 2.3 }, { pct: 86, value: 2.3 }, { pct: 87, value: 2.2 },
    { pct: 88, value: 2.2 }, { pct: 89, value: 2.2 }, { pct: 90, value: 2.2 }, { pct: 91, value: 2.2 },
    { pct: 92, value: 2.2 }, { pct: 93, value: 2.2 }, { pct: 94, value: 2.2 }, { pct: 95, value: 2.1 },
    { pct: 96, value: 2.1 }, { pct: 97, value: 2.1 }, { pct: 98, value: 2.1 }, { pct: 99, value: 2 },
    { pct: 100, value: 2 }
  ],
  emergent: [
    { pct: 0, value: 0 }, { pct: 1, value: 0.4 }, { pct: 2, value: 0.8 }, { pct: 3, value: 1.2 },
    { pct: 4, value: 1.6 }, { pct: 5, value: 2 }, { pct: 6, value: 2.4 }, { pct: 7, value: 2.8 },
    { pct: 8, value: 3.2 }, { pct: 9, value: 3.6 }, { pct: 10, value: 4 }, { pct: 11, value: 4.4 },
    { pct: 12, value: 4.8 }, { pct: 13, value: 5.2 }, { pct: 14, value: 5.6 }, { pct: 15, value: 6 },
    { pct: 16, value: 6.4 }, { pct: 17, value: 6.8 }, { pct: 18, value: 7.3 }, { pct: 19, value: 7.7 },
    { pct: 20, value: 8 }, { pct: 21, value: 8.3 }, { pct: 22, value: 8.6 }, { pct: 23, value: 8.9 },
    { pct: 24, value: 9.1 }, { pct: 25, value: 9.4 }, { pct: 26, value: 9.6 }, { pct: 27, value: 9.8 },
    { pct: 28, value: 9.9 }, { pct: 29, value: 10 }, { pct: 30, value: 10 }, { pct: 31, value: 10 },
    { pct: 32, value: 9.9 }, { pct: 33, value: 9.7 }, { pct: 34, value: 9.5 }, { pct: 35, value: 9.2 },
    { pct: 36, value: 9 }, { pct: 37, value: 8.7 }, { pct: 38, value: 8.5 }, { pct: 39, value: 8.2 },
    { pct: 40, value: 8 }, { pct: 41, value: 7.8 }, { pct: 42, value: 7.6 }, { pct: 43, value: 7.4 },
    { pct: 44, value: 7.1 }, { pct: 45, value: 6.9 }, { pct: 46, value: 6.7 }, { pct: 47, value: 6.5 },
    { pct: 48, value: 6.3 }, { pct: 49, value: 6.2 }, { pct: 50, value: 6 }, { pct: 51, value: 5.9 },
    { pct: 52, value: 5.7 }, { pct: 53, value: 5.6 }, { pct: 54, value: 5.5 }, { pct: 55, value: 5.4 },
    { pct: 56, value: 5.3 }, { pct: 57, value: 5.2 }, { pct: 58, value: 5.1 }, { pct: 59, value: 5.1 },
    { pct: 60, value: 5 }, { pct: 61, value: 4.9 }, { pct: 62, value: 4.8 }, { pct: 63, value: 4.8 },
    { pct: 64, value: 4.7 }, { pct: 65, value: 4.7 }, { pct: 66, value: 4.6 }, { pct: 67, value: 4.5 },
    { pct: 68, value: 4.5 }, { pct: 69, value: 4.4 }, { pct: 70, value: 4.4 }, { pct: 71, value: 4.3 },
    { pct: 72, value: 4.2 }, { pct: 73, value: 4.2 }, { pct: 74, value: 4.1 }, { pct: 75, value: 4 },
    { pct: 76, value: 3.9 }, { pct: 77, value: 3.8 }, { pct: 78, value: 3.8 }, { pct: 79, value: 3.7 },
    { pct: 80, value: 3.6 }, { pct: 81, value: 3.5 }, { pct: 82, value: 3.4 }, { pct: 83, value: 3.4 },
    { pct: 84, value: 3.3 }, { pct: 85, value: 3.2 }, { pct: 86, value: 3.1 }, { pct: 87, value: 3 },
    { pct: 88, value: 3 }, { pct: 89, value: 2.9 }, { pct: 90, value: 2.8 }, { pct: 91, value: 2.7 },
    { pct: 92, value: 2.6 }, { pct: 93, value: 2.6 }, { pct: 94, value: 2.5 }, { pct: 95, value: 2.4 },
    { pct: 96, value: 2.3 }, { pct: 97, value: 2.2 }, { pct: 98, value: 2.2 }, { pct: 99, value: 2.1 },
    { pct: 100, value: 2 }
  ],
  flabkroos: [
    { pct: 15, value: 6 }, { pct: 16, value: 5.9 }, { pct: 17, value: 5.7 }, { pct: 18, value: 5.6 },
    { pct: 19, value: 5.4 }, { pct: 20, value: 5.3 }, { pct: 21, value: 5.2 }, { pct: 22, value: 5 },
    { pct: 23, value: 4.9 }, { pct: 24, value: 4.7 }, { pct: 25, value: 4.6 }, { pct: 26, value: 4.5 },
    { pct: 27, value: 4.3 }, { pct: 28, value: 4.2 }, { pct: 29, value: 4.1 }, { pct: 30, value: 4 },
    { pct: 31, value: 3.9 }, { pct: 32, value: 3.8 }, { pct: 33, value: 3.7 }, { pct: 34, value: 3.6 },
    { pct: 35, value: 3.5 }, { pct: 36, value: 3.5 }, { pct: 37, value: 3.4 }, { pct: 38, value: 3.3 },
    { pct: 39, value: 3.2 }, { pct: 40, value: 3.2 }, { pct: 41, value: 3.1 }, { pct: 42, value: 3 },
    { pct: 43, value: 3 }, { pct: 44, value: 2.9 }, { pct: 45, value: 2.8 }, { pct: 46, value: 2.8 },
    { pct: 47, value: 2.7 }, { pct: 48, value: 2.7 }, { pct: 49, value: 2.6 }, { pct: 50, value: 2.6 },
    { pct: 51, value: 2.5 }, { pct: 52, value: 2.4 }, { pct: 53, value: 2.4 }, { pct: 54, value: 2.3 },
    { pct: 55, value: 2.3 }, { pct: 56, value: 2.2 }, { pct: 57, value: 2.2 }, { pct: 58, value: 2.1 },
    { pct: 59, value: 2.1 }, { pct: 60, value: 2 }, { pct: 61, value: 1.9 }, { pct: 62, value: 1.9 },
    { pct: 63, value: 1.8 }, { pct: 64, value: 1.8 }, { pct: 65, value: 1.7 }, { pct: 66, value: 1.7 },
    { pct: 67, value: 1.6 }, { pct: 68, value: 1.6 }, { pct: 69, value: 1.5 }, { pct: 70, value: 1.5 },
    { pct: 71, value: 1.4 }, { pct: 72, value: 1.4 }, { pct: 73, value: 1.3 }, { pct: 74, value: 1.3 },
    { pct: 75, value: 1.2 }, { pct: 76, value: 1.2 }, { pct: 77, value: 1.1 }, { pct: 78, value: 1.1 },
    { pct: 79, value: 1 }, { pct: 80, value: 1 }, { pct: 81, value: 0.9 }, { pct: 82, value: 0.9 },
    { pct: 83, value: 0.8 }, { pct: 84, value: 0.8 }, { pct: 85, value: 0.7 }, { pct: 86, value: 0.7 },
    { pct: 87, value: 0.6 }, { pct: 88, value: 0.6 }, { pct: 89, value: 0.5 }, { pct: 90, value: 0.5 },
    { pct: 91, value: 0.4 }, { pct: 92, value: 0.4 }, { pct: 93, value: 0.3 }, { pct: 94, value: 0.3 },
    { pct: 95, value: 0.2 }, { pct: 96, value: 0.2 }, { pct: 97, value: 0.1 }, { pct: 98, value: 0.1 },
    { pct: 99, value: 0 }, { pct: 100, value: 0 }
  ]
};

const QUALITY_RANGES = {
  ondergedoken: [
    { min: 0, max: 5, label: 'Slecht' }, { min: 5, max: 10, label: 'Onvoldoende' },
    { min: 10, max: 20, label: 'Matig' }, { min: 20, max: 35, label: 'Voldoende' },
    { min: 35, max: 60, label: 'Goed' }, { min: 60, max: 90, label: 'Voldoende' },
    { min: 90, max: 95, label: 'Matig' }, { min: 95, max: 100, label: 'Onvoldoende' }
  ],
  emergent: [
    { min: 0, max: 5, label: 'Slecht' }, { min: 5, max: 10, label: 'Onvoldoende' },
    { min: 10, max: 15, label: 'Matig' }, { min: 15, max: 20, label: 'Voldoende' },
    { min: 20, max: 35, label: 'Goed' }, { min: 35, max: 40, label: 'Voldoende' },
    { min: 40, max: 50, label: 'Matig' }, { min: 50, max: 75, label: 'Onvoldoende' },
    { min: 75, max: 100, label: 'Slecht' }
  ],
  drijvend: [
    { min: 0, max: 1, label: 'Slecht' }, { min: 1, max: 5, label: 'Onvoldoende' },
    { min: 5, max: 10, label: 'Matig' }, { min: 10, max: 20, label: 'Voldoende' },
    { min: 20, max: 30, label: 'Goed' }, { min: 30, max: 40, label: 'Matig' },
    { min: 40, max: 100, label: 'Onvoldoende' }
  ],
  flabkroos: [
    { min: 0, max: 15, label: 'Optimum/Goed' }, { min: 15, max: 30, label: 'Matig' },
    { min: 30, max: 60, label: 'Onvoldoende' }, { min: 60, max: 100, label: 'Slecht' }
  ]
};

const QUALITY_COLORS = {
  'Optimum': { bg: 'rgba(56,130,80,0.15)', text: 'hsl(138,45%,28%)', dot: 'hsl(138,50%,38%)' },
  'Optimum/Goed': { bg: 'rgba(56,130,80,0.15)', text: 'hsl(138,45%,28%)', dot: 'hsl(138,50%,38%)' },
  'Goed': { bg: 'rgba(80,148,90,0.13)', text: 'hsl(138,42%,30%)', dot: 'hsl(138,45%,38%)' },
  'Voldoende': { bg: 'rgba(140,180,90,0.14)', text: 'hsl(90,35%,32%)', dot: 'hsl(90,40%,42%)' },
  'Matig': { bg: 'rgba(190,160,60,0.14)', text: 'hsl(47,50%,32%)', dot: 'hsl(47,60%,45%)' },
  'Onvoldoende': { bg: 'rgba(200,120,50,0.14)', text: 'hsl(28,50%,36%)', dot: 'hsl(28,55%,45%)' },
  'Slecht': { bg: 'rgba(185,70,55,0.13)', text: 'hsl(5,50%,38%)', dot: 'hsl(5,55%,46%)' },
};

// ─── Score interpretatie tekst ───────────────────────────────────────────────
const QUALITY_INTERPRETATION = {
  'Optimum': 'Uitstekende ecologische balans in de watergang.',
  'Goed': 'De vegetatiesamenstelling wijst op een goede waterkwaliteit.',
  'Voldoende': 'De watergang scoort voldoende. Er is ruimte voor verbetering.',
  'Matig': 'De vegetatiebalans is matig. Beheer kan hier op worden afgestemd.',
  'Onvoldoende': 'De verhouding groeivormen wijst op onvoldoende waterkwaliteit.',
  'Slecht': 'De ecologische balans is sterk verstoord. Actie is gewenst.',
};

// ─── Slider metadata ─────────────────────────────────────────────────────────
const SLIDER_META = {
  ondergedoken: {
    label: 'Ondergedoken',
    sub: 'Submerse planten',
    color: 'hsl(200,45%,36%)',
    colorBg: 'rgba(50,110,140,0.09)',
    dot: 'hsl(200,45%,42%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2,14 C4,9 7,7 9,11 C11,15 14,9 16,12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="4" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="9" cy="16" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  emergent: {
    label: 'Emergent',
    sub: 'Oeverplanten',
    color: 'hsl(47,58%,40%)',
    colorBg: 'rgba(150,120,40,0.09)',
    dot: 'hsl(47,60%,45%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <line x1="9" y1="18" x2="9" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="9" cy="4" rx="5" ry="9" fill="currentColor" opacity="0.55" />
        <line x1="14" y1="18" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="14" cy="9" rx="4" ry="7" fill="currentColor" opacity="0.40" />
      </svg>
    ),
  },
  drijvend: {
    label: 'Drijvend',
    sub: 'Natante planten',
    color: 'hsl(138,42%,30%)',
    colorBg: 'rgba(52,100,60,0.09)',
    dot: 'hsl(138,44%,36%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <ellipse cx="9" cy="12" rx="7" ry="3.5" fill="currentColor" opacity="0.60" transform="rotate(-6,9,12)" />
        <circle cx="9" cy="8" r="3" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  flab: {
    label: 'Flab',
    sub: 'Drijvende draadalgen',
    color: 'hsl(90,38%,34%)',
    colorBg: 'rgba(80,130,50,0.09)',
    dot: 'hsl(90,40%,40%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2,12 Q6,6 11,12 Q14,15 16,11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M2,15 Q8,9 16,14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  kroos: {
    label: 'Kroos',
    sub: 'Klein drijvend',
    color: 'hsl(138,48%,28%)',
    colorBg: 'rgba(40,110,50,0.09)',
    dot: 'hsl(138,48%,34%)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <ellipse cx="5" cy="10" rx="3.5" ry="2.2" fill="currentColor" opacity="0.75" />
        <ellipse cx="11" cy="7" rx="3" ry="2" fill="currentColor" opacity="0.65" />
        <ellipse cx="14" cy="12" rx="2.8" ry="1.8" fill="currentColor" opacity="0.55" />
        <ellipse cx="8" cy="14" rx="2.5" ry="1.6" fill="currentColor" opacity="0.60" />
      </svg>
    ),
  },
};

// ─── Pure calculation functions (unchanged) ──────────────────────────────────
function getQualityCategory(percentage, type) {
  const ranges = QUALITY_RANGES[type];
  if (!ranges) return null;
  for (const range of ranges) {
    if (percentage >= range.min && percentage < range.max) return range;
    if (percentage === 100 && range.max === 100) return range;
  }
  return ranges[ranges.length - 1];
}

function interpolateValue(percentage, type) {
  const table = LOOKUP_TABLE[type];
  if (!table) return 0;
  if (type === 'flabkroos' && percentage < 15) return 0;
  const lower = [...table].reverse().find(entry => entry.pct <= percentage);
  const upper = table.find(entry => entry.pct >= percentage);
  if (!lower || !upper) return 0;
  if (lower.pct === upper.pct) return lower.value;
  const ratio = (percentage - lower.pct) / (upper.pct - lower.pct);
  return lower.value + ratio * (upper.value - lower.value);
}

const getQualityLevel = (score) => {
  if (score >= 10) return { label: 'Optimum', ...QUALITY_COLORS['Optimum'] };
  if (score >= 8)  return { label: 'Goed', ...QUALITY_COLORS['Goed'] };
  if (score >= 6)  return { label: 'Voldoende', ...QUALITY_COLORS['Voldoende'] };
  if (score >= 4)  return { label: 'Matig', ...QUALITY_COLORS['Matig'] };
  if (score >= 2)  return { label: 'Onvoldoende', ...QUALITY_COLORS['Onvoldoende'] };
  return { label: 'Slecht', ...QUALITY_COLORS['Slecht'] };
};

// ─── Score droplet indicator ─────────────────────────────────────────────────
function ScoreDroplet({ score }) {
  const quality = getQualityLevel(score);
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const fill = circumference * (1 - score / 10.5);
  const strokeColor =
    score >= 8 ? 'hsl(138,45%,38%)' :
    score >= 6 ? 'hsl(90,40%,42%)' :
    score >= 4 ? 'hsl(47,60%,45%)' :
    score >= 2 ? 'hsl(28,55%,45%)' :
    'hsl(5,55%,46%)';

  return (
    <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 88, height: 88 }}>
      <div className="absolute inset-0" style={{ background: quality.bg, borderRadius: '55% 45% 50% 50% / 50% 55% 45% 50%', transform: 'scale(1.08)' }} />
      <svg viewBox="0 0 88 88" className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(52,80,50,0.08)" strokeWidth="5" />
        <circle cx="44" cy="44" r={radius} fill="none" stroke={strokeColor} strokeWidth="5"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={fill}
          style={{ transition: 'stroke-dashoffset 0.65s ease, stroke 0.5s ease', filter: `drop-shadow(0 0 3px ${strokeColor}88)` }} />
      </svg>
      <div className="relative text-center z-10">
        <motion.p key={score.toFixed(1)} initial={{ scale: 0.85, opacity: 0.7 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-display text-2xl font-semibold leading-none tabular-nums"
          style={{ color: '#ffffff' }}>
          {score.toFixed(1)}
        </motion.p>
        <p className="font-body text-[10px] font-medium mt-0.5" style={{ color: '#ffffff' }}>/ 10</p>
      </div>
    </div>
  );
}

// ─── Quality badge ────────────────────────────────────────────────────────────
function QualityBadge({ label, isOptimum }) {
  if (isOptimum) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-body font-medium rounded-full"
        style={{ background: QUALITY_COLORS['Optimum'].bg, color: QUALITY_COLORS['Optimum'].text }}>
        <Crown className="w-3 h-3" style={{ fill: 'hsl(47,65%,48%)' }} /> Optimum
      </span>
    );
  }
  const colors = QUALITY_COLORS[label] || QUALITY_COLORS['Matig'];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-body font-medium rounded-full"
      style={{ background: colors.bg, color: colors.text }}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colors.dot }} />
      {label}
    </span>
  );
}

// ─── Single slider row ────────────────────────────────────────────────────────
function SliderRow({ valueKey, value, scoreValue, categoryType, hasScore, onChange }) {
  const meta = SLIDER_META[valueKey];
  const isOptimum = hasScore && scoreValue >= 10;
  const cat = hasScore ? getQualityCategory(value, categoryType) : null;
  const colors = cat ? (QUALITY_COLORS[cat.label] || QUALITY_COLORS['Matig']) : { bg: 'rgba(52,100,60,0.07)', text: 'hsl(138,30%,38%)', dot: 'hsl(138,40%,38%)' };

  return (
    <div className="py-3.5"
      style={{ borderBottom: '1px solid rgba(100,140,80,0.09)' }}>
      {/* Header row */}
      <div className="flex items-start justify-between mb-2.5 gap-2">
        <div className="flex items-start gap-2.5 min-w-0">
          {/* Icon blob */}
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
            style={{ background: meta.colorBg, borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%', color: meta.color }}>
            {meta.icon}
          </div>
          <div className="min-w-0">
            <p className="font-body text-sm font-medium leading-tight" style={{ color: 'hsl(138,38%,18%)' }}>
              {meta.label}
            </p>
            <p className="font-body text-[11px] font-light leading-tight mt-0.5" style={{ color: '#555' }}>
              {meta.sub}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {hasScore && <QualityBadge label={cat?.label} isOptimum={isOptimum} />}
          {hasScore && (
            <span className="font-display text-sm font-semibold tabular-nums" style={{ color: 'hsl(138,38%,22%)', minWidth: '2.2rem', textAlign: 'right' }}>
              {scoreValue.toFixed(1)}
            </span>
          )}
          <span className="font-body text-xs tabular-nums font-medium px-1.5 py-0.5 rounded-md"
            style={{ background: 'rgba(52,80,40,0.07)', color: 'hsl(138,18%,42%)', minWidth: '2.8rem', textAlign: 'right' }}>
            {value}%
          </span>
        </div>
      </div>
      {/* Slider */}
      <div className="px-0.5">
        <Slider
          value={[value]}
          onValueChange={(val) => onChange(valueKey, val)}
          max={100}
          step={1}
          className="[&_[data-radix-slider-track]]:h-[5px] [&_[data-radix-slider-track]]:rounded-full [&_[data-radix-slider-track]]:bg-stone-200/80 [&_[data-radix-slider-range]]:rounded-full [&_[data-radix-slider-range]]:bg-emerald-700/60 [&_[data-radix-slider-thumb]]:w-4 [&_[data-radix-slider-thumb]]:h-4 [&_[data-radix-slider-thumb]]:bg-white [&_[data-radix-slider-thumb]]:border-2 [&_[data-radix-slider-thumb]]:border-emerald-600/70 [&_[data-radix-slider-thumb]]:shadow-sm [&_[data-radix-slider-thumb]]:cursor-pointer [&_[data-radix-slider-thumb]]:transition-transform [&_[data-radix-slider-thumb]]:duration-150 [&_[data-radix-slider-thumb]]:hover:scale-125"
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function WaterQualityCalculator() {
  const [values, setValues] = useState({
    emergent: 20,
    ondergedoken: 40,
    drijvend: 5,
    flab: 0,
    kroos: 0
  });

  const handleSliderChange = (key, newValue) => {
    setValues(prev => ({ ...prev, [key]: newValue[0] }));
  };

  // ── Calculations (unchanged) ──
  const scores = {
    emergent: interpolateValue(values.emergent, 'emergent'),
    ondergedoken: interpolateValue(values.ondergedoken, 'ondergedoken'),
    drijvend: interpolateValue(values.drijvend, 'drijvend'),
    flabkroos: interpolateValue(values.flab + values.kroos, 'flabkroos')
  };

  const scoresArray = [scores.emergent, scores.ondergedoken, scores.drijvend];
  const flabkroosPct = values.flab + values.kroos;
  const flabkroosActive = flabkroosPct >= 15;
  if (flabkroosActive) scoresArray.push(scores.flabkroos);
  const totalScore = scoresArray.reduce((sum, s) => sum + s, 0) / scoresArray.length;
  const quality = getQualityLevel(totalScore);
  const interpretation = QUALITY_INTERPRETATION[quality.label] || '';

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 lg:px-8 pb-10">

      {/* ── Outer card ── */}
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        borderRadius: '24px 32px 28px 32px / 28px 24px 32px 28px',
        boxShadow: '0 4px 40px rgba(52,80,40,0.10), 0 1px 4px rgba(52,80,40,0.06)',
        border: '1px solid rgba(120,160,100,0.18)',
        background: 'hsl(45,28%,97%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* ── Top: visual + panel ── */}
        <div className="flex flex-col lg:grid" style={{ gridTemplateColumns: '56% 1fr' }}>

          {/* River visual */}
          <div style={{ borderRight: '1px solid rgba(120,160,100,0.14)', margin: 0, padding: 0, overflow: 'hidden', width: '100%', aspectRatio: '16/9' }}
            className="lg:aspect-auto lg:self-stretch lg:flex lg:flex-col">
            <RiverVisual values={values} />
          </div>

          {/* Controls panel */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, background: 'hsl(45,25%,96%)' }}>
            <div className="relative overflow-hidden px-6 py-4"
              style={{ background: 'linear-gradient(150deg, hsl(138,28%,17%) 0%, hsl(138,32%,23%) 55%, hsl(138,25%,27%) 100%)', borderBottom: '1px solid rgba(120,160,100,0.14)' }}>
              <p className="relative font-body text-[10px] font-medium uppercase tracking-[0.22em]"
                style={{ color: 'rgba(190,215,175,0.70)' }}>
                Bedekkingspercentages instellen
              </p>
            </div>
            <div className="flex-1 px-6 pt-2 pb-4" style={{ background: 'hsl(45,25%,96%)', overflowY: 'auto' }}>
              <p className="font-body text-xs font-light italic py-3 mb-1" style={{ color: 'hsl(138,14%,56%)' }}>
                Pas de schuifjes aan om de bedekkingspercentages per groeivorm in te stellen.
              </p>
              <SliderRow valueKey="ondergedoken" value={values.ondergedoken} scoreValue={scores.ondergedoken}
                categoryType="ondergedoken" hasScore={true} onChange={handleSliderChange} />
              <SliderRow valueKey="emergent" value={values.emergent} scoreValue={scores.emergent}
                categoryType="emergent" hasScore={true} onChange={handleSliderChange} />
              <SliderRow valueKey="drijvend" value={values.drijvend} scoreValue={scores.drijvend}
                categoryType="drijvend" hasScore={true} onChange={handleSliderChange} />
              <div className="mt-1">
                <SliderRow valueKey="flab" value={values.flab} scoreValue={null}
                  categoryType={null} hasScore={false} onChange={handleSliderChange} />
                <div style={{ borderBottom: 'none' }}>
                  <SliderRow valueKey="kroos" value={values.kroos} scoreValue={null}
                    categoryType={null} hasScore={false} onChange={handleSliderChange} />
                </div>
              </div>
              <div className="mt-3 px-4 py-3 font-body text-xs leading-relaxed"
                style={{ background: 'rgba(52,100,60,0.07)', color: 'hsl(138,38%,28%)', border: '1px solid rgba(52,100,60,0.12)', borderRadius: '14px 18px 14px 18px / 16px 14px 18px 14px' }}>
                <span className="font-semibold">Flab + Kroos: {flabkroosPct}%</span>
                {flabkroosActive ? (
                  <> — Gecombineerde score: {scores.flabkroos.toFixed(1)} / 10 — {getQualityCategory(flabkroosPct, 'flabkroos')?.label}</>
                ) : (
                  <span className="italic ml-1" style={{ color: 'hsl(138,14%,52%)' }}>telt niet mee (&lt;15%)</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Adviesbalk — full-width bottom strip with complete score block ── */}
        <div style={{
          borderTop: '1px solid rgba(120,160,100,0.16)',
          background: 'hsl(138,14%,20%)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {/* Score gauge */}
          <div style={{ flexShrink: 0 }}>
            <ScoreDroplet score={totalScore} />
          </div>

          {/* Status badge + label */}
          <div style={{ flexShrink: 0 }}>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] mb-1.5"
              style={{ color: 'rgba(255,255,255,0.75)' }}>Ecologische kwaliteit</p>
            <AnimatePresence mode="wait">
              <motion.span key={quality.label}
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-body font-semibold text-sm"
                style={{ background: '#6aab5e', color: '#ffffff', border: 'none' }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#ffffff', boxShadow: `0 0 5px #ffffff` }} />
                {quality.label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

          {/* Interpretation + disclaimer */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <AnimatePresence mode="wait">
              <motion.p key={interpretation}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-body text-sm font-light leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.85)' }}>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{interpretation}</span>{' '}
                <span style={{ color: 'rgba(255,255,255,0.60)' }}>
                  De Groeivormen Index geeft een indicatie van de ecologische balans. Voor een volledige beoordeling kunnen aanvullende gegevens over soortensamenstelling, waterchemie en beheercontext nodig zijn.
                </span>
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.div>
  );
}