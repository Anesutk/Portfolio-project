'use client';

import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Linux training by hunt',
    issuer: 'Meta',
    date: '2025',
    image: '/images/certificates/certificate.png',
    link: 'https://www.bing.com/ck/a?!&&p=c56c02ba46c52d2c740ceb9caeffa176e4b2defdc079626d5838015a852b7d9bJmltdHM9MTc3MzUzMjgwMA&ptn=3&ver=2&hsh=4&fclid=0b112677-d51c-64f3-145e-316bd47c65f7&psq=cursa+website&u=a1aHR0cHM6Ly9jdXJzYS5hcHAvZW4',
  },
  {
    title: 'ethical hacking and penetration testing',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/images/certificates/ethical hacking and penetration testing.png',
    link: 'https://www.bing.com/ck/a?!&&p=c56c02ba46c52d2c740ceb9caeffa176e4b2defdc079626d5838015a852b7d9bJmltdHM9MTc3MzUzMjgwMA&ptn=3&ver=2&hsh=4&fclid=0b112677-d51c-64f3-145e-316bd47c65f7&psq=cursa+website&u=a1aHR0cHM6Ly9jdXJzYS5hcHAvZW4',
  },
  {
    title: 'Sql Injection',
    issuer: 'FreeCodeCamp',
    date: '2023',
    image: '/images/certificates/sql injection.png',
    link: 'https://www.bing.com/ck/a?!&&p=c56c02ba46c52d2c740ceb9caeffa176e4b2defdc079626d5838015a852b7d9bJmltdHM9MTc3MzUzMjgwMA&ptn=3&ver=2&hsh=4&fclid=0b112677-d51c-64f3-145e-316bd47c65f7&psq=cursa+website&u=a1aHR0cHM6Ly9jdXJzYS5hcHAvZW4',
  },
];

const Certificates = () => {
  return (
    <section className="section certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="certificate-image">
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="certificate-overlay">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
              </div>
              <div className="certificate-footer">
                <span className="certificate-date">{cert.date}</span>
                <span className="certificate-link">View →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;