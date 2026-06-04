import React, { useState, useEffect } from 'react';
import { Palette, ShieldCheck, Gamepad2, Users, CheckCircle2, Award, Heart, Sparkles } from 'lucide-react';
import { Flower, WaveTransition } from './SVGIllustrations';

// Interactive auto-incrementing stat counter
function StatCounter({ target, suffix = "+", label, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let totalDuration = 1500; // 1.5 seconds animation
    let incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 40); // Increment chunk
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div style={{
      textAlign: 'center',
      padding: '24px',
      background: '#FFF',
      borderRadius: '24px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
      border: '3px solid #FFF5F2',
      transition: 'transform 0.2s'
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <h3 style={{
        fontFamily: "'Fredoka', sans-serif",
        fontSize: 'clamp(32px, 5vw, 44px)',
        color: color,
        margin: '0 0 4px 0',
        fontWeight: '800'
      }}>
        {count}{suffix}
      </h3>
      <p style={{
        fontSize: '15px',
        color: '#6B7280',
        fontWeight: '700',
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {label}
      </p>
    </div>
  );
}

export default function AboutPage() {
  const values = [
    {
      title: 'Creative Learning',
      desc: 'We unleash visual imagination, clay work, drawing, and musical basics to build individual self-expression.',
      icon: <Palette size={32} color="#00ADEF" />,
      bg: '#E0F7FF',
      border: '#00ADEF'
    },
    {
      title: 'Ultra Safe Campus',
      desc: 'Every corridor, classroom, playzone, and school bus has absolute safety standards and CCTV surveillance.',
      icon: <ShieldCheck size={32} color="#2E3192" />,
      bg: '#EEF0FC',
      border: '#2E3192'
    },
    {
      title: 'Playful Curriculum',
      desc: 'Learning matches toys, custom board games, logic blocks, and physical challenges that kids love.',
      icon: <Gamepad2 size={32} color="#ED1C24" />,
      bg: '#FEECEC',
      border: '#ED1C24'
    },
    {
      title: 'Active Community',
      desc: 'Frequent family meetups, parent newsletter clubs, healthy child counseling, and social gatherings.',
      icon: <Users size={32} color="#524FA1" />,
      bg: '#F5F3FF',
      border: '#524FA1'
    }
  ];

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif", background: '#FFFDFB' }}>
      
      {/* Intro Header Section */}
      <section style={{ padding: '60px 24px 40px 24px', textAlign: 'center', position: 'relative' }}>
        <Flower className="left-[4%] top-[10%]" color="#FFF200" size={50} />
        <Flower className="right-[5%] bottom-[5%]" color="#ED1C24" size={60} />
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
            background: '#EEF0FC',
            color: '#2E3192',
            fontSize: '13px',
            fontWeight: '800',
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            WHO WE ARE
          </span>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: '#1F2937',
            margin: '0 0 16px 0',
            fontWeight: '800'
          }}>
            Welcome to R PLAY KIDS School
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#6B7280',
            lineHeight: '1.7',
            fontWeight: '600',
            margin: 0
          }}>
            Founded on the philosophy of integrated child growth, we provide a warm, encouraging, and motivating ecosystem. We believe that learning shouldn't feel like a chore—it should be a colorful adventure filled with magic, games, and wonderful discoveries.
          </p>
        </div>
      </section>

      {/* Auto-Incrementing Stats section */}
      <section style={{
        padding: '30px 24px 50px 24px',
        background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F2 100%)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          <StatCounter target="450" label="Happy Students" color="#00ADEF" />
          <StatCounter target="18" label="Classrooms" color="#2E3192" />
          <StatCounter target="35" label="Educators" color="#ED1C24" />
          <StatCounter target="12" label="Bus Routes" color="#524FA1" />
        </div>
      </section>

      {/* Brand Values Grid */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            background: '#FEECEC',
            color: '#ED1C24',
            fontSize: '13px',
            fontWeight: '800',
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            OUR PILLARS
          </span>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: '34px',
            color: '#1F2937',
            margin: '0 0 40px 0',
            fontWeight: '800'
          }}>
            The R PLAY KIDS Philosophy
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {values.map((v, i) => (
              <div 
                key={i} 
                style={{
                  background: '#FFF',
                  border: `3px solid ${v.border}20`,
                  borderRadius: '28px',
                  padding: '30px',
                  textAlign: 'left',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = v.border;
                  e.currentTarget.style.boxShadow = `0 12px 25px ${v.border}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = `${v.border}20`;
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.02)';
                }}
              >
                <div style={{
                  background: v.bg,
                  width: '60px',
                  height: '60px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: '20px',
                  color: '#1F2937',
                  margin: '0 0 10px 0',
                  fontWeight: '700'
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontSize: '14.5px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                  margin: 0,
                  fontWeight: '600'
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Accreditations (Left-Right Split Layout) */}
      <section style={{
        padding: '60px 24px',
        background: '#FFFBF7',
        borderTop: '3px solid #FFF5F2',
        borderBottom: '3px solid #FFF5F2'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Left Column: Visual List */}
          <div>
            <span style={{
              background: '#E0F7FF',
              color: '#00ADEF',
              fontSize: '12px',
              fontWeight: '800',
              padding: '6px 14px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              CAMPUS HIGHLIGHTS
            </span>
            <h2 style={{
              fontFamily: "'Fredoka', sans-serif",
              fontSize: '34px',
              color: '#1F2937',
              margin: '0 0 20px 0',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              Premium School Facilities
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: '1.7',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              We spare no efforts in providing resources that trigger absolute physical health, mental dexterity, and creative comfort for kids.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Interactive Science & Nature Lab', color: '#00ADEF' },
                { title: 'Soft-padded Outdoor Play Grounds', color: '#2E3192' },
                { title: 'Toddler Pool with Qualified Life-Guards', color: '#ED1C24' },
                { title: 'In-House Organic Dining (Nutritious meals)', color: '#524FA1' },
                { title: 'Smart Classrooms with Visual projectors', color: '#10B981' }
              ].map((f, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color={f.color} />
                  <span style={{ fontSize: '15px', fontWeight: '700', color: '#374151' }}>
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements Cards */}
          <div style={{
            background: '#FFF',
            border: '3px solid #FFF5F2',
            borderRadius: '30px',
            padding: '40px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#FFF7ED', padding: '12px', borderRadius: '16px' }}>
                <Award size={32} color="#FBB040" />
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                  National Kids Care Excellence
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#6B7280', lineHeight: '1.6', fontWeight: '600' }}>
                  Voted #1 Primary Kindergarten school in the state for consecutive years of 2024 & 2025.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#F5F3FF', padding: '12px', borderRadius: '16px' }}>
                <Heart size={32} color="#524FA1" />
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                  Curriculum Approved by Counselors
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#6B7280', lineHeight: '1.6', fontWeight: '600' }}>
                  Our emotional support and guidance structure are certified by the Association of Child Psychologists.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#EEF0FC', padding: '12px', borderRadius: '16px' }}>
                <Sparkles size={32} color="#2E3192" />
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                  Fun Craft & Fine Art Events
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#6B7280', lineHeight: '1.6', fontWeight: '600' }}>
                  Hosting annual painting fairs, clay model exhibition days, and kids drama events to support creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
