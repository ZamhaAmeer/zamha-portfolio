import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const handleDownloadCV = () => {
    alert("CV download triggered! (Replace this trigger with your actual CV file link in production)");
  };

  return (
    <section id="home" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '60px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center', width: '100%' }} className="hero-grid">
        
        {/* Intro Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 14px', 
            background: 'rgba(255, 255, 255, 0.02)', 
            border: '1px solid rgba(255, 255, 255, 0.05)', 
            borderRadius: '6px', 
            width: 'fit-content' 
          }}>
            <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#60A5FA', boxShadow: '0 0 10px #60A5FA' }}></span>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.5px' }}>SEEKING INTERNSHIP OPPORTUNITIES</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '1rem', fontWeight: 500, color: '#818CF8', letterSpacing: '1px', textTransform: 'uppercase' }}>Hello, I am</span>
            <h1 style={{ 
              fontFamily: 'var(--font-title)', 
              fontSize: '3.6rem', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em',
              background: 'linear-gradient(to right, #FFFFFF, #A1A1AA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Zamha Ameer
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              <p style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.3' }}>
                BSc (Hons) in Information Systems Undergraduate
              </p>
              <p style={{ fontSize: '1.15rem', fontWeight: 500, color: '#60A5FA' }}>
                Sabaragamuwa University of Sri Lanka
              </p>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.65', maxWidth: '580px' }}>
            I am a third-year undergraduate who is continuously learning and actively seeking internship opportunities. Through my university projects, I have gained experience developing both frontend and backend components for web and mobile applications, designing relational databases, and building complete applications.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px' }}>
            <a href="#projects" className="btn btn-primary clickable">
              <span>View Projects</span>
              <ArrowRight size={15} />
            </a>
            <button onClick={handleDownloadCV} className="btn btn-secondary clickable">
              <Download size={15} />
              <span>Download CV</span>
            </button>
            <a href="#contact" className="btn btn-accent clickable">
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Professional Portrait Picture Side */}
        <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-illustration">
          <div className="portrait-container">
            {/* Background ambient glow circle */}
            <div style={{ 
              position: 'absolute', 
              width: '360px', 
              height: '360px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, rgba(56, 189, 248, 0) 70%)', 
              filter: 'blur(45px)', 
              zIndex: -2,
              pointerEvents: 'none'
            }} />
            
            {/* Offset glass layer for depth */}
            <div style={{ 
              position: 'absolute', 
              width: '240px', 
              height: '240px', 
              border: '1px solid rgba(255, 255, 255, 0.04)', 
              background: 'rgba(255, 255, 255, 0.005)', 
              borderRadius: '50%', 
              backdropFilter: 'blur(4px)', 
              transform: 'translate(-8px, 8px)', 
              zIndex: -1, 
              pointerEvents: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }} />
            
            {/* Main glass frame image holder */}
            <div className="glass-card" style={{ 
              width: '240px', 
              height: '240px', 
              padding: '8px', 
              border: '1px solid rgba(255, 255, 255, 0.06)', 
              boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(180deg, rgba(20, 20, 25, 0.4) 0%, rgba(10, 10, 12, 0.7) 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={profileImg} 
                alt="Zamha Ameer" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center 20%',
                  borderRadius: '50%',
                  pointerEvents: 'none' // Let hover go through to card for 3D tilt
                }} 
              />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .portrait-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 360px;
          animation: portraitFloat 6s ease-in-out infinite;
        }

        @keyframes portraitFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
            text-align: center;
          }
          .hero-grid > div {
            align-items: center !important;
          }
          .hero-illustration {
            order: 1; /* Puts photo below intro text on mobile */
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 2.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

