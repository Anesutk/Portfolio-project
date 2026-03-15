'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

type Section = 'about' | 'skills' | 'certificates' | 'contact';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: Dispatch<SetStateAction<Section>>;  // ← Changed from (section: string) => void
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { id: 'about' as Section, label: 'About' },
    { id: 'skills' as Section, label: 'Skills' },
    { id: 'certificates' as Section, label: 'Certificates' },
    { id: 'contact' as Section, label: 'Contact' },
  ];

  if (!mounted) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MyPortfolio</div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="theme-toggle"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;