import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Logo } from './SVGIllustrations';

export default function Navbar({ cartCount, onCartClick, currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '3px solid #FFF5F2',
      padding: '12px 24px',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      {/* Main Navbar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Playful Vector Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <Logo size={58} />
        </div>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }} className="hidden md:flex">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                style={{
                  textDecoration: 'none',
                  color: isActive ? link.color : '#4B5563',
                  fontWeight: '800',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  position: 'relative',
                  paddingBottom: '4px',
                  borderBottom: isActive ? `3px solid ${link.color}` : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = link.color;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = '#4B5563';
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Action Icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          {/* Cart Trigger */}
          <button 
            onClick={onCartClick}
            style={{
              background: '#FFF5F5',
              border: '2px solid #FEE2E2',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.borderColor = '#00ADEF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = '#FEE2E2';
            }}
          >
            <ShoppingCart size={20} color="#2E3192" />
            {cartCount > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#ED1C24',
                color: '#FFF',
                fontSize: '11px',
                fontWeight: '800',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(237, 28, 36, 0.4)',
                animation: 'pulse 1.5s infinite'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Contact / Enroll Button */}
          <button 
            onClick={() => onNavigate('contact')}
            style={{
              background: '#00ADEF',
              color: '#FFF',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 4px 6px rgba(0, 173, 239, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            className="hidden sm:inline-block"
            onMouseEnter={(e) => {
              e.target.style.background = '#2E3192';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#00ADEF';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Enroll Today
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#2E3192',
              padding: '4px'
            }}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#FFF',
          padding: '20px',
          borderBottom: '3px solid #FFF5F2',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 15px rgba(0,0,0,0.05)',
          zIndex: 899
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate(link.id);
              }}
              style={{
                textDecoration: 'none',
                color: currentPage === link.id ? link.color : '#4B5563',
                fontWeight: '800',
                fontSize: '16px',
                padding: '8px 0',
                borderBottom: '1px solid #F3F4F6'
              }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('contact');
            }}
            style={{
              background: '#00ADEF',
              color: '#FFF',
              border: 'none',
              textAlign: 'center',
              padding: '12px',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '15px',
              marginTop: '10px',
              cursor: 'pointer'
            }}
          >
            Enroll Today
          </button>
        </div>
      )}
    </nav>
  );
}

const navLinks = [
  { name: 'HOME', id: 'home', color: '#2E3192' },
  { name: 'ABOUT US', id: 'about', color: '#524FA1' },
  { name: 'CLASSES', id: 'classes', color: '#00ADEF' },
  { name: 'TEACHERS', id: 'teachers', color: '#ED1C24' },
  { name: 'SHOP', id: 'shop', color: '#10B981' },
  { name: 'CONTACT', id: 'contact', color: '#FBB040' }
];
