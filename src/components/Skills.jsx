import React from 'react';
import { Code, Database, Terminal, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web & Mobile Development',
      icon: <Code size={18} style={{ color: '#60A5FA' }} />,
      glowColor: 'rgba(96, 165, 250, 0.05)',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS', 'React Native', 'Expo', 'Flutter']
    },
    {
      title: 'Databases & Backend',
      icon: <Database size={18} style={{ color: '#34D399' }} />,
      glowColor: 'rgba(52, 211, 153, 0.05)',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Sequelize', 'REST APIs', 'JWT']
    },
    {
      title: 'Programming Languages',
      icon: <Terminal size={18} style={{ color: '#F4F4F5' }} />,
      glowColor: 'rgba(244, 244, 245, 0.05)',
      skills: ['Java', 'JavaScript', 'Python', 'C', 'PHP']
    },
    {
      title: 'AI & Tools',
      icon: <Wrench size={18} style={{ color: '#FB7185' }} />,
      glowColor: 'rgba(251, 113, 133, 0.05)',
      skills: ['Google Gemini API', 'Git', 'GitHub', 'VS Code', 'npm']
    },
    {
      title: 'UI/UX',
      icon: <Palette size={18} style={{ color: '#818CF8' }} />,
      glowColor: 'rgba(129, 140, 248, 0.05)',
      skills: ['Figma', 'Canva', 'Draw.io']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A realistic overview of technologies and tools I have worked with during my coursework and personal projects.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' }} className="skills-grid">
        {skillCategories.map((category, idx) => {
          let span = 'span 2';
          if (idx === 0 || idx === 1) {
            span = 'span 3';
          }
          
          return (
            <div 
              key={idx} 
              className="glass-card skill-card"
              style={{ 
                gridColumn: span,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                '--hover-glow': category.glowColor
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px' }}>
                {category.icon}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, fontFamily: 'var(--font-title)' }}>
                  {category.title}
                </h3>
              </div>

              <div className="badge-list">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="badge skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .skill-card {
          transition: var(--transition-smooth);
        }
        .skill-card:hover {
          box-shadow: 0 10px 25px var(--hover-glow);
          border-color: rgba(255, 255, 255, 0.08);
        }
        .skill-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          color: #D4D4D8;
        }
        .skill-badge:hover {
          color: #FFF;
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .skills-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
