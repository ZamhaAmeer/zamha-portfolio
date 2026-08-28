import React from 'react';
import { Palette, Compass, Star } from 'lucide-react';

const DesignExperience = () => {
  const creativeCompetencies = [
    'UI/UX Designs using Figma',
    'Social Media Posts',
    'Posters & Flyers',
    'Certificates',
    'Presentation Slides'
  ];

  const clubs = [
    { name: 'Leo Club', role: 'Creative Design Projects' },
    { name: 'Rotaract Club', role: 'Marketing & Poster Materials' },
    { name: 'IEEE Student Branch', role: 'Official Publicity Designs & UI/UX' }
  ];

  return (
    <section id="design" className="section">
      <div className="section-header">
        <h2 className="section-title">Design Experience</h2>
        <p className="section-subtitle">
          My creative background in graphic design and digital layouts that supports my frontend development and UI/UX work.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '30px' }} className="design-grid">
        
        {/* Creative Competencies Card */}
        <div className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Palette size={22} style={{ color: '#FB7185' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Creative Competencies</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Leveraging visual layouts, color theory, and wireframing tools to build clean interfaces and high-quality graphics.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
            {creativeCompetencies.map((comp) => (
              <span key={comp} className="badge" style={{ padding: '6px 12px', fontSize: '0.75rem', background: 'rgba(255,255,255,0.02)' }}>
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* University Engagements Card */}
        <div className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Compass size={22} style={{ color: '#60A5FA' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>University Club Contributions</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Collaborated closely with organizing committees to provide branding, digital promotional assets, and flyer designs.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
            {clubs.map((club, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: idx !== clubs.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none', paddingBottom: idx !== clubs.length - 1 ? '12px' : '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Star size={14} style={{ color: '#F59E0B' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{club.name}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{club.role}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .design-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DesignExperience;
