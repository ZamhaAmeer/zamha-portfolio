import React from 'react';
import { Layers, Smartphone, Globe, Database, Cpu, Palette, GraduationCap, Code } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Layers size={20} style={{ color: '#818CF8' }} />,
      title: 'Full Stack Development',
      desc: 'Developing end-to-end applications, connecting frontend client states with backend logic and relational database systems.'
    },
    {
      icon: <Smartphone size={20} style={{ color: '#60A5FA' }} />,
      title: 'Mobile Application Development',
      desc: 'Building responsive cross-platform mobile application interfaces using React Native and the Expo environment.'
    },
    {
      icon: <Globe size={20} style={{ color: '#38BDF8' }} />,
      title: 'Web Development',
      desc: 'Creating modern, clean web experiences focusing on semantics, responsive styling, and fast performance using React.'
    },
    {
      icon: <Database size={20} style={{ color: '#34D399' }} />,
      title: 'Database Design',
      desc: 'Designing relational database schemas, writing CRUD SQL queries, and utilizing PostgreSQL and MySQL.'
    },
    {
      icon: <Cpu size={20} style={{ color: '#FB7185' }} />,
      title: 'Artificial Intelligence',
      desc: 'Built a chatbot feature for the INTELEARN mobile application. Interested in learning practical AI and integrating it into applications.'
    },
    {
      icon: <Palette size={20} style={{ color: '#F59E0B' }} />,
      title: 'UI/UX Design',
      desc: 'Creating simple, clean, and intuitive user workflows in Figma, heavily inspired by my background in graphic design.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          An Information Systems undergraduate committed to building clean web & mobile client interfaces, database schemas, and complete applications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px' }} className="about-grid">
        
        {/* Left Side Profile Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              padding: '12px', 
              background: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              color: '#818CF8' 
            }}>
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Zamha Ameer</h3>
              <p style={{ color: '#60A5FA', fontSize: '0.85rem', fontWeight: 600 }}>3rd Year IS Undergraduate</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <p>
              I am currently pursuing a BSc (Hons) in Information Systems at Sabaragamuwa University of Sri Lanka and am currently in my third year.
            </p>
            <p>
              I enjoy building modern web and mobile applications using React and React Native. I have experience developing frontend interfaces, backend systems for university projects, and designing relational databases.
            </p>
            <p>
              Due to my graphic design background, I have a strong passion for UI/UX design and crafting visually pleasing, user-centric experiences.
            </p>
            <p>
              As an undergraduate who enjoys learning, I am continuously learning backend development and full-stack technologies while building practical applications.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.03)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
              <Code size={15} style={{ color: '#60A5FA' }} />
              <span>Web & Mobile UI Development</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
              <Database size={15} style={{ color: '#34D399' }} />
              <span>Relational Database & Schema Design</span>
            </div>
          </div>
        </div>

        {/* Right Side Interests Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }} className="interests-grid">
          {interests.map((interest, idx) => (
            <div 
              key={idx} 
              className="glass-card interest-card"
              style={{ 
                padding: '22px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px',
                borderWidth: '1px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {interest.icon}
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{interest.title}</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5' }}>
                {interest.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .interest-card {
          transition: var(--transition-smooth);
        }
        .interest-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 640px) {
          .interests-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
