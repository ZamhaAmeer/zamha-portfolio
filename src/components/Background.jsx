import React from 'react';

const Background = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: -10,
    backgroundColor: '#09090B',
  };

  const blobStyle1 = {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 70%)',
    top: '-10%',
    left: '-10%',
    filter: 'blur(80px)',
  };

  const blobStyle2 = {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
    bottom: '-10%',
    right: '-10%',
    filter: 'blur(100px)',
  };

  const blobStyle3 = {
    position: 'absolute',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0) 70%)',
    top: '40%',
    left: '25%',
    filter: 'blur(90px)',
  };

  // Subtle digital grid overlay
  const gridOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)`,
    backgroundSize: '32px 32px',
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={blobStyle1} className="animate-float-1" />
      <div style={blobStyle2} className="animate-float-2" />
      <div style={blobStyle3} className="animate-float-3" />
      <div style={gridOverlayStyle} />
    </div>
  );
};

export default Background;
