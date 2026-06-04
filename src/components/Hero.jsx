import React, { useState, useEffect } from 'react';
import { Bear, Bee, WaveTransition } from './SVGIllustrations';

export default function Hero({ onEnrollClick }) {
  // Active countdown timer for admission intake
  const [timeLeft, setTimeLeft] = useState(23 * 3600 + 46 * 60 + 16);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 24 * 3600)); // Reset if hits 0
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      hours: hrs.toString().padStart(2, '0'),
      minutes: mins.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div style={{
      position: 'relative',
      backgroundImage: "url('/assets/hero-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      {/* Semi-transparent dark overlay for background depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(46, 49, 146, 0.45), rgba(46, 49, 146, 0.15))',
        zIndex: 1
      }} />

      {/* Floating Bee */}
      <Bee className="absolute top-[10%] right-[12%]" />

      {/* Hero Content Card */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '850px',
        margin: 'auto auto',
        padding: '50px 30px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(16px)',
        borderRadius: '30px',
        border: '2px solid rgba(255, 255, 255, 0.35)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '90%'
      }}>
        {/* Sketch Title */}
        <h1 style={{
          fontFamily: "'Fredoka', sans-serif",
          fontSize: 'clamp(44px, 7vw, 80px)',
          fontWeight: '900',
          margin: 0,
          color: '#FFF',
          textShadow: '3px 3px 0px rgba(46, 49, 146, 0.6)',
          letterSpacing: '1px',
          lineHeight: '1',
          textTransform: 'uppercase'
        }}>
          R Play Kids
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: 0,
          fontWeight: '700',
          color: '#F9FAF9',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
        }}>
          Where children learn, play, and grow! Join our state-of-the-art interactive classrooms designed to spark creativity, logic, and motor skills. Enroll for the special Summer intake before the deadline!
        </p>

        {/* Enrollment Deadline Countdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '2px', color: '#FFF200', textShadow: '1px 1px 2px rgba(0,0,0,0.4)', textTransform: 'uppercase' }}>
            ⏳ Summer Registration Closes In:
          </span>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
          }}>
            {[
              { label: 'Hours', value: time.hours, color: '#ED1C24' },   // Red
              { label: 'Minutes', value: time.minutes, color: '#00ADEF' }, // Cyan
              { label: 'Seconds', value: time.seconds, color: '#FFF200' }  // Yellow
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  background: '#FFF',
                  color: '#2E3192',
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: 'clamp(30px, 4.5vw, 42px)',
                  fontWeight: '800',
                  padding: '8px 16px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
                  borderBottom: `6px solid ${item.color}`,
                  minWidth: '65px',
                  textAlign: 'center',
                  lineHeight: '1.1'
                }}>
                  {item.value}
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: '800',
                  marginTop: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#FFF',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.4)'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => onEnrollClick('contact')}
          style={{
            background: '#00ADEF',
            color: '#FFF',
            border: 'none',
            padding: '16px 42px',
            borderRadius: '35px',
            fontFamily: "'Fredoka', sans-serif",
            fontSize: '18px',
            fontWeight: '800',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0, 173, 239, 0.35)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '10px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#2E3192';
            e.target.style.transform = 'scale(1.05) translateY(-2px)';
            e.target.style.boxShadow = '0 10px 25px rgba(46, 49, 146, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#00ADEF';
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.boxShadow = '0 6px 20px rgba(0, 173, 239, 0.35)';
          }}
        >
          Enroll Now
        </button>
      </div>

      {/* Bear peeking at the bottom-left */}
      <Bear />

      {/* Curved SVG Wave Transition at the bottom */}
      <WaveTransition fill="#FFF" />
    </div>
  );
}
