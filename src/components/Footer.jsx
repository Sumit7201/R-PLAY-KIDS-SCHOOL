import React, { useState } from 'react';
import { Mail, Send, Heart, MapPin, Phone } from 'lucide-react';
import { Logo } from './SVGIllustrations';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }, 1200);
  };

  return (
    <footer style={{
      background: '#FFF8F6',
      borderTop: '5px solid #FEE2E2',
      padding: '60px 24px 20px 24px',
      color: '#4B5563',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        textAlign: 'left',
        marginBottom: '40px'
      }}>
        {/* About / Logo Column */}
        <div>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
            <Logo size={52} />
          </div>
          <p style={{ fontSize: '14.5px', lineHeight: '1.6', marginBottom: '20px', fontWeight: '600' }}>
            We provide a happy, safe, motivating, and interactive ecosystem for young children. Our early curriculum sparks logical, creative, and sensory growth.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: '700' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#ED1C24" />
              <span>123 Rainbow Lane, Playland</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#00ADEF" />
              <span>+1 (800) 752-9724</span>
            </div>
          </div>
        </div>

        {/* Operating Hours Column */}
        <div>
          <h4 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '18px', color: '#1F2937', margin: '0 0 20px 0', fontWeight: '800' }}>
            Class Hours
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', fontWeight: '600' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '6px' }}>
              <span>Monday - Friday</span>
              <strong style={{ color: '#2E3192' }}>8:00 AM - 5:00 PM</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '6px' }}>
              <span>Saturday Special</span>
              <strong style={{ color: '#2E3192' }}>9:00 AM - 1:00 PM</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '6px' }}>
              <span>Sunday Playgroup</span>
              <strong style={{ color: '#ED1C24' }}>CLOSED</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px' }}>
              <span>Summer Camp</span>
              <strong style={{ color: '#10B981' }}>Intake Open</strong>
            </li>
          </ul>
        </div>

        {/* Navigation Links Column */}
        <div>
          <h4 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '18px', color: '#1F2937', margin: '0 0 20px 0', fontWeight: '800' }}>
            Quick Links
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14.5px', fontWeight: '750' }}>
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Us', id: 'about' },
              { name: 'Classes', id: 'classes' },
              { name: 'Teachers', id: 'teachers' },
              { name: 'Woo Shop', id: 'shop' },
              { name: 'Contact', id: 'contact' }
            ].map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate(link.id);
                }}
                style={{ textDecoration: 'none', color: '#4B5563', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#00ADEF'}
                onMouseLeave={(e) => e.target.style.color = '#4B5563'}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '18px', color: '#1F2937', margin: '0 0 20px 0', fontWeight: '800' }}>
            Newsletter
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.5', marginBottom: '15px', fontWeight: '600' }}>
            Subscribe to receive notices of fun activities, schedules, and summer camp registrations!
          </p>

          <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading || subscribed}
              style={{
                width: '100%',
                padding: '12px 40px 12px 16px',
                borderRadius: '25px',
                border: '2px solid #00ADEF',
                outline: 'none',
                fontSize: '14px',
                fontFamily: "'Quicksand', sans-serif",
                boxSizing: 'border-box'
              }} 
            />
            <button 
              type="submit"
              disabled={loading || subscribed}
              style={{
                position: 'absolute',
                right: '4px',
                top: '4px',
                bottom: '4px',
                background: '#00ADEF',
                color: '#FFF',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#2E3192'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#00ADEF'}
            >
              {loading ? (
                <div style={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid #FFF',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.6s linear infinite'
                }} />
              ) : (
                <Send size={16} />
              )}
            </button>
          </form>

          {subscribed && (
            <p style={{ color: '#10B981', fontSize: '13px', marginTop: '8px', fontWeight: '750' }}>
              Awesome! Welcome to R PLAY KIDS Club! ✉️
            </p>
          )}
        </div>
      </div>

      {/* Bottom copyrights */}
      <div style={{
        borderTop: '1px solid #FEE2E2',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#9CA3AF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontWeight: '600'
      }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} R PLAY KIDS. Built with ❤️ for child development. All Rights Reserved.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: 0 }}>
          <span>Created by coding wizards</span>
          <Heart size={12} fill="#ED1C24" color="#ED1C24" />
          <span>Antigravity</span>
        </div>
      </div>
    </footer>
  );
}
