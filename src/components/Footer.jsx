import React from 'react';
import { Mail, Terminal } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.03)',
      backgroundColor: 'rgba(3, 3, 3, 0.95)',
      padding: '40px 24px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Logo / Brand */}
        <a href="#home" onClick={handleScrollToTop} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-title)',
          fontWeight: 800,
          fontSize: '1.2rem',
          color: '#FFF',
          textDecoration: 'none'
        }} className="clickable">
          <Terminal size={18} style={{ color: '#818CF8' }} />
          <span>ZAMHA<span style={{ color: '#818CF8' }}>.</span></span>
        </a>

        {/* Short Text */}
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          textAlign: 'center',
          maxWidth: '500px',
          lineHeight: '1.5'
        }}>
          Information Systems Undergraduate at Sabaragamuwa University of Sri Lanka. Actively seeking software development internship opportunities.
        </p>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link clickable">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link clickable">
            <Linkedin size={18} />
          </a>
          <a href="mailto:zamhaameer855194@gmail.com" className="footer-social-link clickable">
            <Mail size={18} />
          </a>
        </div>

        {/* Navigation Summary Links */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '8px'
        }}>
          {['Home', 'About', 'Skills', 'Projects', 'Design', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="clickable footer-nav-item"
              style={{
                textDecoration: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontWeight: 500,
                transition: 'var(--transition-smooth)'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          marginTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.02)',
          paddingTop: '20px',
          width: '100%',
          textAlign: 'center'
        }}>
          &copy; {currentYear} Zamha Ameer. Designed & Developed from scratch.
        </div>
      </div>

      <style>{`
        .footer-social-link {
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }
        .footer-social-link:hover {
          color: #FFF;
          transform: translateY(-1px);
        }
        .footer-nav-item:hover {
          color: #818CF8 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
