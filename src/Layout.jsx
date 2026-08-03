import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/shared/Footer';

const navigation = [
  { name: 'Home', page: 'Home' },
  { name: 'Groeivormen Index', page: 'Model' },
  { name: 'Kleurkeur Blauw', page: 'KleurkeurBlauw' },
  { name: 'Over ons', page: 'OverOns' }
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(45,30%,97%)' }}>
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={isScrolled
          ? { background: 'rgba(245,240,232,0.92)', backdropFilter: 'blur(16px)', boxShadow: '0 2px 20px rgba(52,100,60,0.10)' }
          : { background: 'transparent' }
        }
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{ background: 'hsl(138,40%,22%)' }}>
                <Droplets className="w-5 h-5" style={{ color: 'hsl(45,30%,94%)' }} />
              </div>
              <span className="text-xl font-display font-medium" style={{ color: 'hsl(138,40%,14%)' }}>
                Ecosloot
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = currentPageName === item.page;
                return (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className="relative px-4 py-2 text-sm font-body font-medium transition-colors duration-300 rounded-full"
                    style={{ color: isActive ? 'hsl(138,40%,22%)' : 'hsl(138,20%,35%)' }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ background: 'rgba(52,100,60,0.10)' }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Contact')}>
                <button
                  className="font-body font-medium rounded-full px-6 py-2.5 text-sm transition-all duration-200"
                  style={{ background: 'hsl(138,40%,22%)', color: 'hsl(45,30%,94%)', boxShadow: '0 2px 12px rgba(52,100,60,0.25)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'hsl(138,40%,18%)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'hsl(138,40%,22%)'}
                >
                  Contact
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ background: 'hsl(45,30%,97%)', borderTop: '1px solid hsl(138,18%,87%)' }}
              className="lg:hidden"
            >
              <nav className="container mx-auto px-6 py-6 space-y-2">
                {navigation.map((item) => {
                  const isActive = currentPageName === item.page;
                  return (
                    <Link
                      key={item.name}
                      to={createPageUrl(item.page)}
                      className="block px-4 py-3 rounded-xl text-lg font-body font-medium transition-colors duration-200"
                      style={{
                        background: isActive ? 'rgba(52,100,60,0.09)' : 'transparent',
                        color: isActive ? 'hsl(138,40%,22%)' : 'hsl(138,18%,38%)',
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}