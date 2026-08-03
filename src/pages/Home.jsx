import React from 'react';
import Hero from '@/components/home/Hero';
import WaterQualityIntro from '@/components/home/WaterQualityIntro';
import FromComplexToInsight from '@/components/home/FromComplexToInsight';
import GoalsGap from '@/components/home/GoalsGap';
import GroeivormenBridge from '@/components/home/GroeivormenBridge';
import Services from '@/components/home/Services';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <Hero />
      <WaterQualityIntro />
      <FromComplexToInsight />
      <GoalsGap />
      <GroeivormenBridge />
      <Services />
      <CTASection />
    </div>
  );
}