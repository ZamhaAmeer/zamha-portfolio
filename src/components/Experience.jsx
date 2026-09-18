import React, { useState } from 'react';
import { GraduationCap, Award, Trophy, ExternalLink, Copy, Check, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const certifications = [
    {
      id: 'uom-python',
      title: 'Python for Beginners – Trainee, Full Stack Developer Program',
      issuer: 'University of Moratuwa',
      category: 'uom',
      badgeColor: '#818CF8',
      code: 'pf5yKQPdI8',
      verifyUrl: 'https://open.uom.lk/verify'
    },
    {
      id: 'uom-sqa',
      title: 'Introduction to Software Quality Assurance',
      issuer: 'University of Moratuwa',
      category: 'uom',
      badgeColor: '#818CF8',
      code: 'QVArGlS0Wx',
      verifyUrl: 'https://open.uom.lk/verify'
    },
    {
      id: 'uom-agile',
      title: 'Agile Project Management',
      issuer: 'University of Moratuwa',
      category: 'uom',
      badgeColor: '#818CF8',
      code: 'FPmBzic8Zk',
      verifyUrl: 'https://open.uom.lk/verify'
    },
    {
      id: 'simp-fullstack',
      title: 'Full Stack Developer Course',
      issuer: 'Simplilearn',
      category: 'simplilearn',
      badgeColor: '#F59E0B',
      driveUrl: 'https://drive.google.com/file/d/1QXNTN3AopSW8BRpN6vQi5VYNC-jB7XDK/view?usp=drive_link'
    },
    {
      id: 'simp-ai',
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Simplilearn',
      category: 'simplilearn',
      badgeColor: '#F59E0B',
      driveUrl: 'https://drive.google.com/file/d/1czyH4rlV66SOFoyikLJHyCuGVydVCTKf/view?usp=drive_link'
    },
    {
      id: 'simp-cloud',
      title: 'Introduction to Cloud Computing',
      issuer: 'Simplilearn',
      category: 'simplilearn',
      badgeColor: '#F59E0B',
      driveUrl: 'https://drive.google.com/file/d/1qQE5GRegZZta3dw41OvLwtO7CLO8y1n0/view?usp=drive_link'
    },
    {
      id: 'rec-graphic',
      title: 'Graphic Designer Recognition',
      issuer: 'University Club Projects',
      category: 'recognition',
      badgeColor: '#34D399'
    }
  ];

  const filteredCertifications = certifications.filter(cert => {
    if (activeFilter === 'all') return true;
    return cert.category === activeFilter;
  });

  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title">Education & Credentials</h2>
        <p className="section-subtitle">
          My academic foundation, verified professional certifications, and recognition.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }} className="credentials-grid">
        
        {/* Left Column: Education & Academic Competitions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Education Card */}
          <div className="glass-card credential-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GraduationCap size={20} style={{ color: '#818CF8' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Education</h3>
              </div>
              <span className="badge" style={{ color: '#818CF8', borderColor: 'rgba(129, 140, 248, 0.2)', background: 'rgba(129, 140, 248, 0.05)' }}>
                Academic
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Sabaragamuwa University */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 600, letterSpacing: '0.5px' }}>2024 – Present</span>
                  <span style={{ fontSize: '0.7rem', color: '#34D399', background: 'rgba(52, 211, 153, 0.1)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>Enrolled</span>
                </div>
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
                <span style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 600, letterSpacing: '0.5px' }}>2023</span>
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
                  Secondary Education
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  Mahmud Ladies College, Kalmunai
                </p>
              </div>
            </div>
          </div>

          {/* Competitions Card */}
          <div className="glass-card credential-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Trophy size={18} style={{ color: '#F59E0B' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Competitions</h3>
              </div>
              <span className="badge" style={{ color: '#F59E0B', borderColor: 'rgba(245, 158, 11, 0.2)', background: 'rgba(245, 158, 11, 0.05)' }}>
                Kaggle
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  IDEALIZE 2025 — Kaggle Competition
                </h4>
                <span style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: 600 }}>2025</span>
              </div>
              <p style={{ color: '#818CF8', fontSize: '0.82rem', fontWeight: 500 }}>
                Organized by AIESEC, University of Moratuwa
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: '1.5', marginTop: '2px' }}>
                Team <strong>Web Wizards</strong> — Participant. Contributed to the development of <strong>DIA-Saver</strong>, an AI-powered diabetes risk assessment application.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Certifications & Recognition */}
        <div className="glass-card credential-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={20} style={{ color: '#34D399' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Certifications & Recognition</h3>
            </div>
            <span className="badge" style={{ color: '#34D399', borderColor: 'rgba(52, 211, 153, 0.2)', background: 'rgba(52, 211, 153, 0.05)' }}>
              {certifications.length} Credentials
            </span>
          </div>

          {/* Institution Filter Pills */}
          <div className="cert-filter-bar">
            {[
              { key: 'all', label: `All (${certifications.length})` },
              { key: 'uom', label: `UoM (${certifications.filter(c => c.category === 'uom').length})` },
              { key: 'simplilearn', label: `Simplilearn (${certifications.filter(c => c.category === 'simplilearn').length})` },
              { key: 'recognition', label: `Recognition (${certifications.filter(c => c.category === 'recognition').length})` }
            ].map(filter => (
              <button
                key={filter.key}
                type="button"
                className={`cert-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Certifications List */}
          <div className="certifications-scroll-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredCertifications.map((cert, index) => (
              <React.Fragment key={cert.id}>
                {index > 0 && <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.04)' }} />}
                
                <div className="cert-item" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.35' }}>
                      {cert.title}
                    </h4>
                    <span 
                      className="badge" 
                      style={{ 
                        fontSize: '0.7rem', 
                        padding: '2px 8px', 
                        whiteSpace: 'nowrap',
                        color: cert.badgeColor,
                        borderColor: `${cert.badgeColor}33`,
                        background: `${cert.badgeColor}12`
                      }}
                    >
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Verification Actions for University of Moratuwa */}
                  {cert.code ? (
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '2px' }}>
                      <div className="cert-code-box">
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Code:</span>
                        <code style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F4F4F5', letterSpacing: '0.5px' }}>{cert.code}</code>
                        <button
                          type="button"
                          className="copy-code-btn"
                          onClick={() => handleCopy(cert.code)}
                          title="Copy verification code"
                          aria-label="Copy verification code"
                        >
                          {copiedCode === cert.code ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: '#34D399', fontSize: '0.72rem', fontWeight: 600 }}>
                              <Check size={12} />
                              Copied!
                            </span>
                          ) : (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                              <Copy size={12} />
                              Copy
                            </span>
                          )}
                        </button>
                      </div>

                      {cert.verifyUrl && (
                        <a 
                          href={cert.verifyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="cert-verify-link"
                          style={{ 
                            fontSize: '0.78rem',
                            color: '#60A5FA', 
                            textDecoration: 'none', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '4px', 
                            fontWeight: 500
                          }}
                        >
                          <span>Verify Portal</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  ) : cert.driveUrl ? (
                    /* Google Drive Certificate Link for Simplilearn (no verify text) */
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
                      <a 
                        href={cert.driveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-verify-link"
                        style={{ 
                          fontSize: '0.8rem',
                          color: '#60A5FA', 
                          textDecoration: 'none', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '5px', 
                          fontWeight: 500
                        }}
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  ) : (
                    /* Recognition badge */
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#34D399' }}>
                        <CheckCircle2 size={13} />
                        Club Honor & Recognition
                      </span>
                    </div>
                  )}

                </div>
              </React.Fragment>
            ))}
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
        
        .cert-filter-bar {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 4px;
          border-radius: 8px;
        }

        .cert-filter-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          font-family: var(--font-sans);
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .cert-filter-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .cert-filter-btn.active {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .cert-code-box {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .copy-code-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 2px 4px;
          display: inline-flex;
          align-items: center;
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .copy-code-btn:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .cert-verify-link:hover {
          text-decoration: underline !important;
          color: #93C5FD !important;
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
