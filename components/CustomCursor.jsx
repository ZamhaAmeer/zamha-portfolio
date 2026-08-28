import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const bgCanvasRef = useRef(null);
  const fgCanvasRef = useRef(null);
  
  // Interactive UI elements tracking
  const mouse = useRef({ x: -1000, y: -1000 }); // Viewport mouse coordinates
  const pulses = useRef([]); // Click pulses
  const buttonGlows = useRef([]); // Active button glow animations
  
  // Hovered elements tracking
  const hoveredCard = useRef(null);
  const hoveredButton = useRef(null);
  
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
        window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    // Handle canvas resizing
    const handleResize = () => {
      const bg = bgCanvasRef.current;
      const fg = fgCanvasRef.current;
      if (bg) {
        bg.width = window.innerWidth;
        bg.height = window.innerHeight;
      }
      if (fg) {
        fg.width = window.innerWidth;
        fg.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Update typography gradient sweep variable
      const xPercent = (e.clientX / window.innerWidth) * 100;
      document.documentElement.style.setProperty('--mouse-x-percent', `${xPercent}%`);
      
      // Handle card 3D tilt if mouse is over a card
      if (hoveredCard.current) {
        const card = hoveredCard.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--glow-x', `${x}px`);
        card.style.setProperty('--glow-y', `${y}px`);
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const dx = e.clientX - (rect.left + centerX);
        const dy = e.clientY - (rect.top + centerY);
        
        const tiltX = (dy / centerY) * -4.5; // Max 4.5 degrees tilt
        const tiltY = (dx / centerX) * 4.5;
        
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-3px)`;
      }
    };

    const handleMouseDown = (e) => {
      // Spawn soft pulse on click
      pulses.current.push({
        x: e.clientX,
        y: e.clientY,
        startTime: Date.now(),
        duration: 500,
        maxRadius: 35
      });
    };

    const handleMouseLeaveWindow = () => {
      // Move mouse coordinates out of screen
      mouse.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Event delegation for card/button hovers
    const handleMouseOver = (e) => {
      // 1. Detect project cards (.glass-card)
      const card = e.target.closest('.glass-card');
      if (card && card !== hoveredCard.current) {
        hoveredCard.current = card;
        
        // Dynamic Sheen Injection
        if (!card.querySelector('.glass-card-sheen')) {
          const sheen = document.createElement('div');
          sheen.className = 'glass-card-sheen';
          card.appendChild(sheen);
        }
        
        // Remove transitions on hover to make tilt super responsive
        card.style.transition = 'none';
        card.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.45)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.12)';
      }
      
      // 2. Detect buttons/links (.btn, button, a, .clickable, .social-btn, .icon-btn)
      const button = e.target.closest('a, button, .clickable, .social-btn, .icon-btn');
      if (button && button !== hoveredButton.current) {
        hoveredButton.current = button;
        
        const rect = button.getBoundingClientRect();
        buttonGlows.current = buttonGlows.current.filter(g => g.element !== button);
        buttonGlows.current.push({
          element: button,
          startTime: Date.now(),
          duration: 650,
          perimeter: 2 * (rect.width + rect.height)
        });
      }
    };

    const handleMouseOut = (e) => {
      // Reset card tilt
      if (hoveredCard.current && !hoveredCard.current.contains(e.relatedTarget)) {
        const card = hoveredCard.current;
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.boxShadow = '';
        card.style.borderColor = '';
        hoveredCard.current = null;
      }
      
      // Reset button
      if (hoveredButton.current && !hoveredButton.current.contains(e.relatedTarget)) {
        hoveredButton.current = null;
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    // Magnetic pull for buttons/clickables
    const handleButtonMagneticMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const elX = rect.left + rect.width / 2;
      const elY = rect.top + rect.height / 2;
      const x = e.clientX - elX;
      const y = e.clientY - elY;
      el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
    };

    const handleButtonMagneticReset = (e) => {
      const el = e.currentTarget;
      el.style.transform = 'translate3d(0, 0, 0)';
    };

    const applyMagneticListeners = () => {
      const targets = document.querySelectorAll('.btn, .social-btn, .icon-btn, .clickable');
      targets.forEach(el => {
        el.removeEventListener('mousemove', handleButtonMagneticMove);
        el.removeEventListener('mouseleave', handleButtonMagneticReset);
        el.addEventListener('mousemove', handleButtonMagneticMove);
        el.addEventListener('mouseleave', handleButtonMagneticReset);
        el.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
      });
    };

    const magneticTimer = setInterval(applyMagneticListeners, 1000);
    applyMagneticListeners();

    // Canvas animation loop
    let animationId;
    const animate = () => {
      const bg = bgCanvasRef.current;
      const fg = fgCanvasRef.current;
      const now = Date.now();

      // Update background grid canvas
      if (bg) {
        const ctx = bg.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, bg.width, bg.height);
          
          const stepX = 32;
          const stepY = 32;
          const cols = Math.ceil(bg.width / stepX) + 1;
          const rows = Math.ceil(bg.height / stepY) + 1;
          const m = mouse.current;
          
          for (let c = 0; c < cols; c++) {
            const xGrid = c * stepX;
            for (let r = 0; r < rows; r++) {
              const yGrid = r * stepY;
              
              const dx = m.x - xGrid;
              const dy = m.y - yGrid;
              const dist = Math.hypot(dx, dy);
              
              if (dist < 180) {
                // Dynamic deflection/warp
                const strength = Math.pow(1 - dist / 180, 2);
                const deflectX = (dx / dist) * strength * 7.5;
                const deflectY = (dy / dist) * strength * 7.5;
                
                const drawX = xGrid + deflectX;
                const drawY = yGrid + deflectY;
                const opacity = 0.055 + strength * 0.16;
                
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fillRect(drawX - 0.75, drawY - 0.75, 1.5, 1.5);
              } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.055)';
                ctx.fillRect(xGrid - 0.75, yGrid - 0.75, 1.5, 1.5);
              }
            }
          }
        }
      }

      // Update foreground UI reaction canvas
      if (fg) {
        const ctx = fg.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, fg.width, fg.height);
          
          // 1. Draw click pulses
          pulses.current = pulses.current.filter(p => now - p.startTime < p.duration);
          pulses.current.forEach(p => {
            const progress = (now - p.startTime) / p.duration;
            const radius = p.maxRadius * Math.sin(progress * Math.PI / 2);
            const opacity = 1 - progress;
            
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
            grad.addColorStop(0, `rgba(129, 140, 248, ${opacity * 0.4})`);
            grad.addColorStop(0.5, `rgba(96, 165, 250, ${opacity * 0.15})`);
            grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
            
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          });

          // 2. Draw button wrapping charging outline
          buttonGlows.current = buttonGlows.current.filter(g => now - g.startTime < g.duration);
          buttonGlows.current.forEach(g => {
            const progress = (now - g.startTime) / g.duration;
            const rect = g.element.getBoundingClientRect();
            const opacity = 1 - progress;
            const w = rect.width;
            const h = rect.height;
            const x = rect.left;
            const y = rect.top;
            
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            
            const offset = 2.0;
            ctx.beginPath();
            ctx.roundRect(x - offset, y - offset, w + 2 * offset, h + 2 * offset, 8);
            
            const grad = ctx.createLinearGradient(x, y, x + w, y + h);
            grad.addColorStop(0, `rgba(129, 140, 248, ${opacity * 0.9})`);
            grad.addColorStop(1, `rgba(56, 189, 248, ${opacity * 0.9})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2.0;
            
            const totalPerim = 2 * (w + h + 4 * offset);
            const dashLen = totalPerim * 0.35;
            ctx.setLineDash([dashLen, totalPerim]);
            ctx.lineDashOffset = -totalPerim * progress * 1.35;
            
            ctx.shadowBlur = 8 * (1 - progress);
            ctx.shadowColor = 'rgba(129, 140, 248, 0.4)';
            ctx.stroke();
            ctx.restore();
          });
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationId);
      clearInterval(magneticTimer);
    };
  }, [isMobile]);

  // Clean up static background dot overlay inside CSS if CustomCursor is rendering the dynamic one!
  useEffect(() => {
    if (isMobile) return;
    
    const hideStaticGrid = () => {
      const divs = document.querySelectorAll('div');
      divs.forEach(div => {
        if (div.style.backgroundImage && div.style.backgroundImage.includes('radial-gradient')) {
          div.style.display = 'none';
        }
      });
    };
    
    const timer = setTimeout(hideStaticGrid, 800);
    return () => clearTimeout(timer);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Background Interactive Dot Grid Canvas */}
      <canvas
        ref={bgCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -5
        }}
      />
      
      {/* Foreground UI Action Reaction Canvas */}
      <canvas
        ref={fgCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 99999
        }}
      />
    </>
  );
};

export default CustomCursor;

