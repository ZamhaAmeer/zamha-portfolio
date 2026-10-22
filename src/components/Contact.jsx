import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      alert("Contact form is not configured yet. Please configure VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: formState.subject || `New Portfolio Message from ${formState.name}`,
          from_name: formState.name,
          replyto: formState.email,
          Name: formState.name,
          Email: formState.email,
          Subject: formState.subject || 'No Subject',
          Message: formState.message,
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const infoList = [
    {
      icon: <Mail size={18} style={{ color: '#818CF8' }} />,
      label: 'Email Address',
      value: 'zamhaameer855194@gmail.com',
      href: 'mailto:zamhaameer855194@gmail.com'
    }
  ];

  const socials = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="section" style={{ paddingBottom: '120px' }}>
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for internship opportunities, project collaborations, or general academic queries.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '48px' }} className="contact-grid">
        
        {/* Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-title)' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {infoList.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.href} 
                  className="clickable contact-info-link"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px', 
                    textDecoration: 'none',
                    color: 'var(--text-primary)' 
                  }}
                >
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '8px', 
                    backgroundColor: 'rgba(255,255,255,0.01)', 
                    border: '1px solid rgba(255,255,255,0.03)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'var(--transition-smooth)'
                  }} className="info-icon-wrapper">
                    {info.icon}
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{info.label}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Socials Connection */}
          <div className="glass-card" style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Connect on socials:</span>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((soc, idx) => (
                <a 
                  key={idx} 
                  href={soc.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn clickable"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Form Column */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formState.name} 
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                  className="form-input clickable"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formState.email} 
                  onChange={handleChange}
                  required
                  placeholder="name@domain.com"
                  className="form-input clickable"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>Subject</label>
              <input 
                type="text" 
                name="subject" 
                value={formState.subject} 
                onChange={handleChange}
                placeholder="Let's collaborate"
                className="form-input clickable"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>Message *</label>
              <textarea 
                name="message" 
                value={formState.message} 
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi Zamha, I would like to discuss..."
                className="form-input clickable"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn btn-primary clickable ${isSent ? 'btn-success' : ''}`}
              style={{ marginTop: '8px', width: '100%', gap: '8px' }}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : isSent ? (
                <>
                  <Check size={15} />
                  <span>Message Sent</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>Send Message</span>
                </>
              )}
            </button>

          </form>
        </div>

      </div>

      <style>{`
        .form-input {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          padding: 10px 14px;
          color: #FFF;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          transition: var(--transition-smooth);
          outline: none;
        }
        .form-input:focus {
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.02);
        }
        .social-btn:hover {
          color: #FFF !important;
          background-color: rgba(255, 255, 255, 0.04) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-1px);
        }
        .contact-info-link:hover .info-icon-wrapper {
          border-color: rgba(255, 255, 255, 0.1) !important;
          background-color: rgba(255, 255, 255, 0.03) !important;
        }
        .btn-success {
          background: #10B981 !important;
          color: #FFF !important;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2) !important;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
