import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Design', href: '#design' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
    transition: 'var(--transition-smooth)',
    padding: scrolled ? '16px 24px' : '24px 24px',
    backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-title)',
    fontWeight: 800,
    fontSize: '1.4rem',
    color: '#FFF',
    textDecoration: 'none',
    transition: 'var(--transition-smooth)',
  };

  const linksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  };

  const linkStyle = {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'var(--transition-smooth)',
    position: 'relative',
  };

  const mobileToggleStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#FFF',
    cursor: 'pointer',
  };

  // Mobile menu style
  const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    right: isOpen ? '0' : '-100%',
    width: '300px',
    height: '100vh',
    backgroundColor: 'rgba(9, 9, 11, 0.95)',
    backdropFilter: 'blur(20px)',
    borderLeft: '1px solid var(--card-border)',
    zIndex: 1000,
    transition: 'var(--transition-smooth)',
    padding: '40px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const mobileOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 998,
    display: isOpen ? 'block' : 'none',
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <a href="#home" style={logoStyle} className="clickable">
            <Terminal size={24} className="text-gradient" style={{ stroke: 'url(#grad)' }} />
            <span>ZAMHA<span className="text-gradient">.</span></span>
          </a>

          {/* Desktop Links */}
          <div style={linksContainerStyle} className="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={linkStyle} 
                className="nav-item-link clickable"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-secondary clickable" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={mobileToggleStyle} 
            className="mobile-nav-toggle clickable" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div style={mobileOverlayStyle} onClick={() => setIsOpen(false)} />
      <div style={mobileMenuStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: '1.2rem' }}>NAVIGATION</span>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            style={{ ...linkStyle, fontSize: '1.2rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }} 
            onClick={handleLinkClick}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn btn-primary clickable" 
          style={{ marginTop: '20px', width: '100%' }}
          onClick={handleLinkClick}
        >
          Connect Me
        </a>
      </div>

      {/* SVG Gradient definition for lucide icon */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </svg>

      {/* CSS overrides for desktop/mobile responsive logic */}
      <style>{`
        .nav-item-link:hover {
          color: #FFF !important;
        }
        .nav-item-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          transition: var(--transition-smooth);
        }
        .nav-item-link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
