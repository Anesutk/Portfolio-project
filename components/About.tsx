'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="profile-image">
            <img
              src="https://picsum.photos/id/100/300/300"
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="about-text" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h2 style={{ color: 'var(--gold-600)', marginBottom: '1rem' }}>Hi, I'm Anesu T Mandebvu</h2>
            <p>
              A passionate developer with a passion for creating AI based applications and interactive websites.
              Currently pursuing Barchellor of Science Degree at Midlands State University.
            </p>
            <p>
              My focus is on building modern web applications with clean code and great user experiences.
            </p>
             <p>
             I also focus on integrating Artficial Intelligence businesses for smoother workflow and reduced workload
            </p>

            <div ref={ref} className="counters">
              <div className="counter-item">
                <div className="counter-number">
                  {inView ? <CountUp end={3} duration={2} /> : '0'}+
                </div>
                <div className="counter-label">Years Coding</div>
              </div>
              <div className="counter-item">
                <div className="counter-number">
                  {inView ? <CountUp end={15} duration={2} /> : '0'}+
                </div>
                <div className="counter-label">Projects</div>
              </div>
              <div className="counter-item">
                <div className="counter-number">
                  {inView ? <CountUp end={8} duration={2} /> : '0'}+
                </div>
                <div className="counter-label">Certificates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;