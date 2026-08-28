import React from 'react';
import { Github } from './SocialIcons';

// Import project images
import intelearnImg1 from '../assets/intelearn_1.jpg';
import intelearnImg2 from '../assets/intelearn_2.jpg';
import intelearnImg3 from '../assets/intelearn_3.jpg';
import diasaverImg from '../assets/diasaver.png';
import threadifyImg from '../assets/threadify.png';
import blossomImg from '../assets/blossom_selections.png';

const Projects = () => {
  const handleAlert = (type, projName) => {
    alert(`${type} link clicked for ${projName}! (This is a placeholder button)`);
  };

  const otherProjects = [
    {
      title: 'DIA Server',
      image: diasaverImg,
      overview: 'DIA Server is an AI-powered health assessment platform designed to help users evaluate and prevent diabetes risk. It solves the challenge of early risk detection by analyzing health habits and symptoms to predict vulnerability in real-time. The application\'s main purpose is to empower individuals with personalized prevention tips and early warning insights for proactive health management.',
      github: 'https://github.com/MayooriEkanthan/DiaSaver'
    },
    {
      title: 'Threadify',
      image: threadifyImg,
      overview: 'Threadify is a modern fashion platform that allows users to explore and personalize clothing designs. It was created to provide a unique and engaging shopping experience while promoting individual style and creativity.',
      github: 'https://github.com/ZamhaAmeer/Threadify'
    },
    {
      title: 'Flower Website',
      image: blossomImg,
      overview: 'Flower Website is a responsive frontend web application developed to showcase a modern floral store. The project focused on creating an attractive and user-friendly interface using frontend web technologies.',
      github: 'https://github.com/ZamhaAmeer/floral-delight'
    }
  ];

  return (
    <section id="projects" className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of flagship academic work and interactive software applications.
        </p>
      </div>

      <div className="projects-container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        {/* Flagship / Featured Project Card (INTELEARN) */}
        <div className="glass-card featured-project-card">
          <div className="featured-grid">
            {/* Project Image Container */}
            <div className="project-image-wrapper" style={{ display: 'flex', gap: '8px', padding: '12px', background: 'rgba(0, 0, 0, 0.2)', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={intelearnImg1} 
                alt="INTELEARN Screenshot 1" 
                className="project-image-multi"
              />
              <img 
                src={intelearnImg2} 
                alt="INTELEARN Screenshot 2" 
                className="project-image-multi"
              />
              <img 
                src={intelearnImg3} 
                alt="INTELEARN Screenshot 3" 
                className="project-image-multi"
              />
              <div className="image-overlay-glow" />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="featured-badge">Flagship Project</span>
                <h3 className="project-title-large">INTELEARN</h3>
                <p className="project-overview">
                  An emotion-aware LMS mobile application that adapts learning activities based on students’ emotional states. It provides personalized quizzes, games, riddles, course materials, and AI-generated learning content to improve student engagement.
                </p>
                <div className="badge-list" style={{ marginTop: '12px' }}>
                  {['React Native', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'Google Gemini AI'].map((tech) => (
                    <span key={tech} className="badge" style={{ backgroundColor: 'rgba(129, 140, 248, 0.08)', color: '#818CF8', borderColor: 'rgba(129, 140, 248, 0.15)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="project-actions">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAlert('GitHub', 'INTELEARN');
                  }}
                  className="project-action-btn"
                  title="View GitHub Repository"
                  aria-label="GitHub Repository"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid (3-column layout) */}
        <div className="other-projects-grid">
          {otherProjects.map((proj, idx) => (
            <div key={idx} className="glass-card project-card">
              {/* Project Image */}
              <div className="project-image-wrapper card-image-wrapper">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="project-image"
                />
                <div className="image-overlay-glow" />
              </div>

              {/* Project Content */}
              <div className="project-card-body">
                <div className="project-card-header">
                  <h4 className="project-title">{proj.title}</h4>
                  
                  {/* Small Action Icons */}
                  <div className="card-actions-mini">
                    <a 
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-action-btn"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                <p className="project-overview text-small">
                  {proj.overview}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Styled JSX for scoped premium transitions & layouts */}
      <style>{`
        /* Section Containers */
        .projects-container {
          width: 100%;
        }

        /* Glass Card Specific Customizations */
        .featured-project-card {
          padding: 40px !important;
          background: linear-gradient(180deg, rgba(15, 15, 20, 0.7) 0%, rgba(8, 8, 12, 0.9) 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        .project-card {
          padding: 0 !important; /* Image spans full top width */
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(10, 10, 12, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.03) !important;
        }

        /* Grids & Layouts */
        .featured-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .other-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Image Wrappers & Zoom Animations */
        .project-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background-color: #08080a;
        }

        .card-image-wrapper {
          border-top-left-radius: 15px; /* Matches glass card border radius */
          border-top-right-radius: 15px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-left: none;
          border-right: none;
          border-top: none;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-image-multi {
          height: 100%;
          width: 31%;
          object-fit: contain;
          border-radius: 6px;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-card:hover .project-image-multi {
          transform: scale(1.04);
        }

        /* Subtle interactive gradient shine on images */
        .image-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(3, 3, 3, 0.4) 100%);
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        /* Content Text Stylings */
        .project-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          gap: 24px;
        }

        .featured-badge {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #818cf8;
          background: rgba(129, 140, 248, 0.1);
          padding: 4px 10px;
          border-radius: 9999px;
          border: 1px solid rgba(129, 140, 248, 0.2);
        }

        .project-title-large {
          font-family: var(--font-title);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .project-title {
          font-family: var(--font-title);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .project-overview {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-top: 8px;
        }

        .text-small {
          font-size: 0.85rem;
          line-height: 1.5;
          margin-top: 0px;
        }

        .project-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Actions & Interactive Elements */
        .project-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .project-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          padding: 8px 16px;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-decoration: none;
        }

        .project-action-btn:hover {
          background: rgba(129, 140, 248, 0.1);
          border-color: rgba(129, 140, 248, 0.2);
          color: #818cf8;
          transform: translateY(-2px);
        }

        .card-actions-mini {
          display: flex;
          gap: 8px;
        }

        .mini-action-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          border: 1px solid transparent;
          text-decoration: none;
        }

        .mini-action-btn:hover {
          color: #818cf8;
          background: rgba(129, 140, 248, 0.1);
          border-color: rgba(129, 140, 248, 0.2);
          transform: translateY(-2px);
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .other-projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 868px) {
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .project-content {
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .other-projects-grid {
            grid-template-columns: 1fr;
          }
          .featured-project-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
