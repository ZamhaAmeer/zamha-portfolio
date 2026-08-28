import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Experience = () => {


  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title">Education & Credentials</h2>
        <p className="section-subtitle">
          My academic foundation, language proficiencies, and extra certifications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="credentials-grid">
        
        {/* Education Card */}
        <div className="glass-card credential-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px' }}>
            <GraduationCap size={20} style={{ color: '#818CF8' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* sabotagamuwa university */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 600, letterSpacing: '0.5px' }}>2023 – Present</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                BSc (Hons) in Information Systems
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                Sabaragamuwa University of Sri Lanka
              </p>
            </div>

            {/* divider line */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />

            {/* BCAS Campus */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 600, letterSpacing: '0.5px' }}>2022 – 2023</span>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Diploma in English
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                BCAS Campus, Kalmunai
              </p>
            </div>

            {/* divider line */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />

            {/* Mahmud Ladies College */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 600, letterSpacing: '0.5px' }}>2022</span>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Mahmud Ladies College, Kalmunai
              </h4>
            </div>
          </div>
        </div>

        {/* Certifications & Recognition Card */}
        <div className="glass-card credential-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px' }}>
            <Award size={20} style={{ color: '#34D399' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Certifications & Recognition</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* python certificate */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Programming in Python - Python for Beginners
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                University of Moratuwa
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>Verification Code: <strong style={{ color: 'var(--text-primary)' }}>pf5yKQPdI8</strong></span>
                <a 
                  href="https://open.uom.lk/verify" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#60A5FA', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500, alignSelf: 'flex-start' }}
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  Verify Certificate
                </a>
              </div>
            </div>

            {/* divider line */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />

            {/* agile project management certificate */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Agile Project Management
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                University of Moratuwa
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>Verification Code: <strong style={{ color: 'var(--text-primary)' }}>FPmBzic8Zk</strong></span>
                <a 
                  href="https://open.uom.lk/verify" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#60A5FA', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500, alignSelf: 'flex-start' }}
                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                  Verify Certificate
                </a>
              </div>
            </div>

            {/* divider line */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />

            {/* graphic designer recognition */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Graphic Designer Recognition
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                University Club Projects
              </p>
            </div>
          </div>
        </div>



      </div>

      <style>{`
        .credential-card {
          transition: var(--transition-smooth);
        }
        .credential-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        @media (max-width: 900px) {
          .credentials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
