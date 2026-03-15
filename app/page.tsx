'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates'; // renamed from Projects
import Contact from '@/components/Contact';

type Section = 'about' | 'skills' | 'certificates' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative">
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}
          {activeSection === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Skills />
            </motion.div>
          )}
          {activeSection === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Certificates />
            </motion.div>
          )}
          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}