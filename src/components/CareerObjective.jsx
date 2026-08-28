import React from 'react';
import { Target } from 'lucide-react';

const CareerObjective = () => {
  return (
    <section id="objective" className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="section-header">
        <h2 className="section-title">Career Objective</h2>
        <p className="section-subtitle">My professional aspiration and focus for the upcoming internship period.</p>
      </div>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center', padding: '40px 30px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '48px', 
          height: '48px', 
          borderRadius: '12px', 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          color: '#818CF8'
        }}>
          <Target size={24} />
        </div>
        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.75', fontWeight: '400' }}>
          I am currently pursuing a BSc (Hons) in Information Systems at Sabaragamuwa University of Sri Lanka and actively seeking internship opportunities where I can apply my technical knowledge, gain real-world experience, and continue improving my software development skills while contributing to meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default CareerObjective;
