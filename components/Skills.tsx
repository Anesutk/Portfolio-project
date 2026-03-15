import { 
  FaCode, 
  FaGlobe, 
  FaRobot, 
  FaTools, 
  FaDatabase,
  FaShieldAlt 
} from 'react-icons/fa';

const Skills = () => {
  const skillsData = {
    languages: {
      icon: <FaCode className="category-icon" />,
      items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'R', 'HTML/CSS']
    },
    webDevelopment: {
      icon: <FaGlobe className="category-icon" />,
      items: ['React', 'Next.js', 'Bootstrap', 'Django', 'Flask', 'Node.js']
    },
    aiMl: {
      icon: <FaRobot className="category-icon" />,
      items: ['NumPy', 'Matplotlib', 'AWS Bedrock', 'Boto3', 'RAG Systems']
    },
    cybersecurity: {
      icon: <FaShieldAlt className="category-icon" />,
      items: [
        'Network Security',
        'Ethical Hacking',
        'Penetration Testing',
        'Security Auditing',
        'Cryptography'
      ]
    },
    tools: {
      icon: <FaTools className="category-icon" />,
      items: ['VS Code', 'Anaconda', 'Git', 'Postman', 'Figma']
    },
    databases: {
      icon: <FaDatabase className="category-icon" />,
      items: ['MongoDB', 'PostgreSQL', 'Firebase']
    }
  };

  return (
    <section className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, { icon, items }]) => (
            <div key={category} className="skill-category">
              <h3>
                {icon}
                <span>{category.replace(/([A-Z])/g, ' $1').trim()}</span>
              </h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;