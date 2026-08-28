import React from 'react';

const LanguageProfile = () => {
  const languages = [
    {
      code: 'EN',
      name: 'English',
      proficiency: 'Fluent',
      accent: '#818CF8'
    },
    {
      code: 'TA',
      name: 'Tamil',
      proficiency: 'Native',
      accent: '#34D399'
    },
    {
      code: 'SI',
      name: 'Sinhala',
      proficiency: 'Read, Write, and Understand',
      accent: '#F59E0B'
    }
  ];

  return (
    <section id="languages" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <div className="section-header">
        <h2 className="section-title">LANGUAGES</h2>
      </div>

      <div className="languages-unified-panel">
        {/* Background Dot Grid for the whole panel */}
        <div className="panel-grid-bg"></div>

        {languages.map((lang) => (
          <div key={lang.code} className="lang-item" style={{ '--accent-color': lang.accent }}>
            {/* Hover Accent Line */}
            <div className="hover-accent-line"></div>

            <div className="lang-item-content">
              {/* Monogram Badge */}
              <div className="lang-monogram">{lang.code}</div>

              {/* Language Text Info */}
              <div className="lang-info">
                <span className="lang-name">{lang.name}</span>
                <span className="lang-proficiency">{lang.proficiency}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .languages-unified-panel {
          background: rgba(10, 10, 12, 0.45);
          backdrop-filter: blur(16px) saturate(120%);
          -webkit-backdrop-filter: blur(16px) saturate(120%);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        /* Subtle grid pattern background texture */
        .panel-grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 16px 16px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.8;
        }

        .lang-item {
          padding: 40px 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: 2;
          opacity: 0.6;
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        /* Vertical dividers between languages on desktop */
        .lang-item:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.04);
        }

        .lang-item:hover {
          opacity: 1;
        }

        .lang-item-content {
          display: flex;
          align-items: center;
          gap: 20px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Monogram styling */
        .lang-monogram {
          font-family: var(--font-title);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.2), 
                      border-color 0.3s ease, 
                      color 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .lang-item:hover .lang-monogram {
          transform: scale(1.08) rotate(4deg);
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.02);
        }

        /* Text info layout */
        .lang-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 4px;
        }

        .lang-name {
          font-family: var(--font-title);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .lang-proficiency {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        /* Dynamic hover accent line at the bottom of the language block */
        .hover-accent-line {
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .lang-item:hover .hover-accent-line {
          transform: scaleX(1);
        }

        /* Responsive styling */
        @media (max-width: 768px) {
          .languages-unified-panel {
            grid-template-columns: 1fr;
          }

          .lang-item {
            padding: 30px 24px;
          }

          /* Remove right borders and use bottom borders for mobile dividers */
          .lang-item:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          }

          .lang-item-content {
            width: 100%;
            justify-content: flex-start;
            padding-left: 20px;
          }

          /* Adjust accent line to be left-aligned on mobile */
          .hover-accent-line {
            left: 0;
            right: auto;
            width: 3px;
            height: 60%;
            top: 20%;
            bottom: auto;
            background: var(--accent-color);
            transform: scaleY(0);
            transform-origin: center;
            transition: transform 0.3s ease;
          }

          .lang-item:hover .hover-accent-line {
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  );
};

export default LanguageProfile;
