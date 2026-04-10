'use client';

import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Linux Training by Hunt',
    issuer: 'Cursa App',
    date: '2025',
    image: '/images/certificates/linux-training.png', // replace with actual path
    link: '/certificates/linux-training.png', // link to open the image
  },
  {
    title: 'Ethical Hacking & Penetration Testing',
    issuer: 'Cursa App',
    date: '2023',
    image: '/images/certificates/ethical-hacking.png',
    link: '/certificates/ethical-hacking.png',
  },
  {
    title: 'SQL Injection',
    issuer: 'Cursa App',
    date: '2023',
    image: '/images/certificates/sql injection.png',
    link: '/images/certificates/sql injection.png',
  },
  {
    title: 'AI Powered Cybersecurity Fundamentals',
    issuer: 'Allison',
    date: '2024',
    image: '/images/certificates/ai-cybersecurity.png',
    link: '/images/certificates/ai-cybersecurity.png',
  },
];

const Certificates = () => {
  return (
    <section className="section certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* No image displayed – only title, issuer, date, and a button */}
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-cert-btn"
                >
                  View Certificate ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;