import React, { useState } from 'react';
import { Flower } from './SVGIllustrations';
import { Star, ArrowUpRight, GraduationCap, MapPin, Clock } from 'lucide-react';

export default function DemosSection() {
  const [activeTab, setActiveTab] = useState('new');
  const [selectedDemo, setSelectedDemo] = useState(null);

  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
  };

  const demosData = {
    new: [
      {
        id: 'kindergarten',
        title: 'Kindergarten',
        subtitle: 'Where Learning Meets Growth and Care',
        description: 'Our dedicated teachers guide your child through structured lessons and hands-on activities, cultivating a lifetime love of learning and social-emotional growth.',
        image: '/assets/kindergarten.png',
        tag: 'NEW',
        color: '#F43F5E',
        rating: 5,
        age: '3-4 Years',
        hours: '8:30 AM - 1:30 PM'
      },
      {
        id: 'preschool',
        title: 'Pre School',
        subtitle: 'Learning Elevated',
        description: 'Feel the difference! Real knowledge and inspiring environments combined to spark active curiosity, language development, and foundational mathematical skills.',
        image: '/assets/art_course.png',
        tag: 'NEW',
        color: '#06B6D4',
        rating: 5,
        age: '4-5 Years',
        hours: '9:00 AM - 2:00 PM'
      },
      {
        id: 'childcare',
        title: 'Childcare',
        subtitle: 'Where Curiosity Grows Every Day',
        description: 'Providing a safe, nurturing, and home-like atmosphere for our little learners, filled with interactive group play, healthy meals, and cozy resting times.',
        image: '/assets/fine_motor.png',
        tag: 'NEW',
        color: '#F59E0B',
        rating: 4,
        age: '1.5 - 3 Years',
        hours: '7:30 AM - 6:00 PM'
      }
    ],
    original: [
      {
        id: 'primary',
        title: 'Primary School',
        subtitle: 'Foundation for Future Leaders',
        description: 'Fostering academic excellence, analytical reasoning, and social collaboration. We prepare children for higher primary grades with state-of-the-art syllabus frameworks.',
        image: '/assets/logic_games.png',
        tag: 'POPULAR',
        color: '#10B981',
        rating: 5,
        age: '5-6 Years',
        hours: '8:00 AM - 2:30 PM'
      },
      {
        id: 'school_lab',
        title: 'School Lab',
        subtitle: 'Exploring Science & Nature',
        description: 'A fun space for tiny scientists! Hands-on kid-safe experiments, planting seeds, learning about animals, space, and discovering how our wonderful world functions.',
        image: '/assets/watercolor.png',
        tag: 'NEW',
        color: '#8B5CF6',
        rating: 5,
        age: '4-6 Years',
        hours: '2:30 PM - 4:30 PM'
      },
      {
        id: 'creative_class',
        title: 'Creative Class',
        subtitle: 'Art, Music & Playtime',
        description: 'Unleashing creative imaginations through clay modeling, drawing classes, musical instrument basics, theater play, and messy paint days.',
        image: '/assets/hero-bg.png',
        tag: 'POPULAR',
        color: '#EC4899',
        rating: 5,
        age: '2-6 Years',
        hours: '3:00 PM - 5:00 PM'
      }
    ]
  };

  const currentDemos = demosData[activeTab];

  return (
    <section id="demos" style={{
      padding: '80px 24px',
      position: 'relative',
      background: '#FFFDFB',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      {/* Decorative flower in the top right */}
      <Flower className="right-[3%] top-[5%]" color="#F472B6" size={70} />
      <Flower className="left-[2%] bottom-[5%]" color="#67E8F9" size={55} />

      {/* Header Info */}
      <div style={{
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 50px auto'
      }}>
        <h2 style={{
          fontFamily: "'Fredoka', sans-serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: '#1F2937',
          marginBottom: '15px',
          fontWeight: '700'
        }}>
          Explore Our Magical Campuses
        </h2>
        <p style={{
          fontSize: '17px',
          color: '#6B7280',
          lineHeight: '1.6',
          fontWeight: '600'
        }}>
          Every classroom is designed to stimulate learning, friendship, and discovery. Choose the environment that matches your child's developmental step!
        </p>
      </div>

      {/* Tabs Menu */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '40px'
      }}>
        <button
          onClick={() => setActiveTab('new')}
          style={{
            background: activeTab === 'new' ? '#F43F5E' : '#FFF',
            color: activeTab === 'new' ? '#FFF' : '#4B5563',
            border: activeTab === 'new' ? 'none' : '2px solid #F3F4F6',
            padding: '12px 30px',
            borderRadius: '25px',
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: activeTab === 'new' ? '0 8px 15px rgba(244, 63, 94, 0.3)' : 'none',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if(activeTab !== 'new') e.target.style.background = '#FFF1F2';
          }}
          onMouseLeave={(e) => {
            if(activeTab !== 'new') e.target.style.background = '#FFF';
          }}
        >
          NEW DEMOS
        </button>
        <button
          onClick={() => setActiveTab('original')}
          style={{
            background: activeTab === 'original' ? '#F43F5E' : '#FFF',
            color: activeTab === 'original' ? '#FFF' : '#4B5563',
            border: activeTab === 'original' ? 'none' : '2px solid #F3F4F6',
            padding: '12px 30px',
            borderRadius: '25px',
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: activeTab === 'original' ? '0 8px 15px rgba(244, 63, 94, 0.3)' : 'none',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if(activeTab !== 'original') e.target.style.background = '#FFF1F2';
          }}
          onMouseLeave={(e) => {
            if(activeTab !== 'original') e.target.style.background = '#FFF';
          }}
        >
          ORIGINAL PROGRAMS
        </button>
      </div>

      {/* Grid of Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {currentDemos.map((demo) => (
          <div 
            key={demo.id}
            onClick={() => handleDemoClick(demo)}
            style={{
              background: '#FFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0,0,0,0.04)',
              border: '2px solid #F9FAF9',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
            className="demo-card-hover"
          >
            {/* Card Image */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img 
                src={demo.image} 
                alt={demo.title} 
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
                className="card-img"
              />
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: demo.color,
                color: '#FFF',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '1px'
              }}>
                {demo.tag}
              </div>
            </div>

            {/* Card Content */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontSize: '22px',
                    color: '#1F2937',
                    margin: 0,
                    fontWeight: '700'
                  }}>
                    {demo.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < demo.rating ? '#F59E0B' : 'none'} 
                        color={i < demo.rating ? '#F59E0B' : '#D1D5DB'} 
                      />
                    ))}
                  </div>
                </div>

                <p style={{
                  color: demo.color,
                  fontSize: '14px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {demo.subtitle}
                </p>

                <p style={{
                  color: '#6B7280',
                  fontSize: '14.5px',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {demo.description}
                </p>
              </div>

              {/* Card Footer Details */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid #F3F4F6',
                color: '#6B7280',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <GraduationCap size={16} color={demo.color} />
                  <span>{demo.age}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={16} color={demo.color} />
                  <span>{demo.hours}</span>
                </div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: '#4B5563'
                }} className="card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Demo Detail Modal */}
      {selectedDemo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setSelectedDemo(null)}>
          <div style={{
            background: '#FFF',
            borderRadius: '28px',
            maxWidth: '650px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: `3px solid ${selectedDemo.color}`,
            position: 'relative',
            animation: 'scaleUp 0.3s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedDemo.image} 
              alt={selectedDemo.title} 
              style={{ width: '100%', height: '260px', objectFit: 'cover' }} 
            />
            
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{
                  background: `${selectedDemo.color}20`,
                  color: selectedDemo.color,
                  fontWeight: '800',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px'
                }}>
                  {selectedDemo.tag}
                </span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < selectedDemo.rating ? '#F59E0B' : 'none'} 
                      color={i < selectedDemo.rating ? '#F59E0B' : '#D1D5DB'} 
                    />
                  ))}
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: '28px',
                color: '#1F2937',
                margin: '0 0 5px 0'
              }}>{selectedDemo.title}</h3>
              
              <h4 style={{
                color: selectedDemo.color,
                fontSize: '15px',
                margin: '0 0 15px 0',
                textTransform: 'uppercase',
                fontWeight: '700'
              }}>{selectedDemo.subtitle}</h4>
              
              <p style={{
                color: '#4B5563',
                fontSize: '15px',
                lineHeight: '1.6',
                margin: '0 0 25px 0'
              }}>{selectedDemo.description}</p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px',
                padding: '15px',
                background: '#FAFAFA',
                borderRadius: '16px',
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', color: '#9CA3AF', fontSize: '11px', textTransform: 'uppercase' }}>Target Age</h5>
                  <p style={{ margin: 0, fontWeight: '700', color: '#374151', fontSize: '14px' }}>{selectedDemo.age}</p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', color: '#9CA3AF', fontSize: '11px', textTransform: 'uppercase' }}>Class Hours</h5>
                  <p style={{ margin: 0, fontWeight: '700', color: '#374151', fontSize: '14px' }}>{selectedDemo.hours}</p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', color: '#9CA3AF', fontSize: '11px', textTransform: 'uppercase' }}>Enrollment</h5>
                  <p style={{ margin: 0, fontWeight: '700', color: '#10B981', fontSize: '14px' }}>Open Now</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button 
                  onClick={() => setSelectedDemo(null)}
                  style={{
                    flex: 1,
                    background: '#F3F4F6',
                    color: '#4B5563',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '25px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#E5E7EB'}
                  onMouseLeave={(e) => e.target.style.background = '#F3F4F6'}
                >
                  Close
                </button>
                <a 
                  href="#shop"
                  onClick={() => setSelectedDemo(null)}
                  style={{
                    flex: 2,
                    background: selectedDemo.color,
                    color: '#FFF',
                    textDecoration: 'none',
                    padding: '12px',
                    borderRadius: '25px',
                    fontWeight: '700',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: `0 4px 10px ${selectedDemo.color}30`,
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Enroll via WooCommerce
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
