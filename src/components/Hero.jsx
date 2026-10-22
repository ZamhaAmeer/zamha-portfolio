import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileCutout from '../assets/profile-cutout.png';

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

        {/* Premium Neon Glow Cutout Portrait Side */}
        <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-illustration">
          <div className="hero-portrait-stage">
            
            {/* Primary soft electric-blue & purple radial glow */}
            <div className="hero-neon-glow primary-glow" />
            
            {/* Core vibrant back-light aura */}
            <div className="hero-neon-glow core-glow" />

            {/* Geometric Orbit Ring 1 - Outer dashed ring with orbiting particle */}
            <div className="orbit-ring orbit-ring-outer">
              <span className="orbit-particle particle-1" />
              <span className="orbit-particle particle-2" />
            </div>

            {/* Geometric Orbit Ring 2 - Inner subtle ring */}
            <div className="orbit-ring orbit-ring-inner" />

            {/* Decorative subtle crosshairs / ticks for technical elegance */}
            <div className="orbit-crosshair crosshair-top" />
            <div className="orbit-crosshair crosshair-bottom" />
            
            {/* Floating Portrait Element */}
            <div className="portrait-image-wrapper">
              <img 
                src={profileCutout} 
                alt="Zamha Ameer" 
                className="portrait-cutout-img"
              />
            </div>

            {/* Small Floating Status Badge */}
            <div className="portrait-status-badge">
              <span className="badge-pulse-indicator" />
              <span className="badge-text">OPEN TO INTERNSHIPS</span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .hero-portrait-stage {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 440px;
          min-height: 480px;
        }

        /* Ambient Electric-Blue & Purple Glow */
        .hero-neon-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .primary-glow {
          width: 430px;
          height: 430px;
          background: radial-gradient(
            circle at 50% 45%, 
            rgba(56, 189, 248, 0.22) 0%, 
            rgba(96, 165, 250, 0.20) 28%, 
            rgba(129, 140, 248, 0.16) 48%, 
            rgba(168, 85, 247, 0.08) 65%, 
            rgba(3, 3, 3, 0) 78%
          );
          filter: blur(48px);
          animation: glowPulse 5s ease-in-out infinite alternate;
        }

        .core-glow {
          width: 260px;
          height: 280px;
          top: 70px;
          background: radial-gradient(
            circle at 50% 50%, 
            rgba(96, 165, 250, 0.25) 0%, 
            rgba(129, 140, 248, 0.14) 50%, 
            transparent 72%
          );
          filter: blur(28px);
          animation: glowPulse 5s ease-in-out infinite alternate 1.5s;
        }

        /* Geometric Orbit Rings */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
        }

        .orbit-ring-outer {
          width: 390px;
          height: 390px;
          border: 1px dashed rgba(96, 165, 250, 0.25);
          animation: orbitRotate 45s linear infinite;
        }

        .orbit-ring-inner {
          width: 320px;
          height: 320px;
          border: 1px solid rgba(129, 140, 248, 0.15);
          animation: orbitRotateRev 55s linear infinite;
        }

        .orbit-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38BDF8;
          box-shadow: 0 0 10px #38BDF8, 0 0 18px rgba(56, 189, 248, 0.6);
        }

        .particle-1 {
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
        }

        .particle-2 {
          bottom: 45px;
          right: 25px;
          background: #818CF8;
          box-shadow: 0 0 10px #818CF8, 0 0 18px rgba(129, 140, 248, 0.6);
        }

        .orbit-crosshair {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          background: rgba(96, 165, 250, 0.3);
        }

        .crosshair-top {
          top: 15px;
          width: 1px;
          height: 14px;
        }

        .crosshair-bottom {
          bottom: 25px;
          width: 1px;
          height: 14px;
        }

        /* Portrait Image Container & Cutout */
        .portrait-image-wrapper {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 100%;
          max-width: 380px;
          animation: portraitFloat 6s ease-in-out infinite;
        }

        .portrait-cutout-img {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.75))
                  drop-shadow(0 0 20px rgba(56, 189, 248, 0.18))
                  drop-shadow(0 0 35px rgba(129, 140, 248, 0.12));
          user-select: none;
          pointer-events: none;
        }

        /* Floating Status Badge */
        .portrait-status-badge {
          position: absolute;
          bottom: 30px;
          left: 5px;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 16px;
          background: rgba(10, 10, 14, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(96, 165, 250, 0.28);
          border-radius: 9999px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.15);
          animation: badgeFloat 6s ease-in-out infinite;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .portrait-status-badge:hover {
          border-color: rgba(96, 165, 250, 0.6);
          transform: translateY(-2px);
        }

        .badge-pulse-indicator {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #34D399;
          box-shadow: 0 0 10px #34D399, 0 0 16px rgba(52, 211, 153, 0.6);
          animation: pulseDot 2s ease-in-out infinite;
        }

        .badge-text {
          font-family: var(--font-title);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #F4F4F5;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Keyframe Animations */
        @keyframes portraitFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0.75;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitRotateRev {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }

        /* Accessibility: Respect Reduced Motion Preferences */
        @media (prefers-reduced-motion: reduce) {
          .portrait-image-wrapper,
          .portrait-status-badge,
          .hero-neon-glow,
          .orbit-ring,
          .badge-pulse-indicator {
            animation: none !important;
            transform: none !important;
          }
        }

        /* Responsive Breakpoints */
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
            order: 1;
            width: 100%;
          }
          .hero-portrait-stage {
            max-width: 380px;
            min-height: 420px;
          }
          .primary-glow {
            width: 360px;
            height: 360px;
          }
          .orbit-ring-outer {
            width: 340px;
            height: 340px;
          }
          .orbit-ring-inner {
            width: 280px;
            height: 280px;
          }
          .portrait-cutout-img {
            max-height: 420px;
          }
          .portrait-status-badge {
            bottom: 20px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: fit-content;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.6rem !important;
          }
          .hero-portrait-stage {
            max-width: 320px;
            min-height: 360px;
          }
          .primary-glow {
            width: 300px;
            height: 300px;
          }
          .orbit-ring-outer {
            width: 290px;
            height: 290px;
          }
          .orbit-ring-inner {
            width: 240px;
            height: 240px;
          }
          .portrait-cutout-img {
            max-height: 350px;
          }
          .portrait-status-badge {
            padding: 6px 12px;
            bottom: 12px;
          }
          .badge-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
