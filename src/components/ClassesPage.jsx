import React, { useState } from 'react';
import { Star, GraduationCap, Clock, Search, BookOpen, AlertCircle, ShoppingCart } from 'lucide-react';
import { Flower } from './SVGIllustrations';

export default function ClassesPage({ onAddToCart }) {
  const [selectedAge, setSelectedAge] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);

  const classesData = [
    {
      id: 'kindergarten',
      title: 'Kindergarten Campus',
      ageGroup: 'pre-k',
      ageRange: '3-4 Years',
      hours: '8:30 AM - 1:30 PM',
      price: 25.00,
      rating: 5,
      color: '#2E3192',
      image: '/assets/kindergarten.png',
      description: 'Structured lessons, language play, social integration, and developmental motor skills guided by loving teachers.',
      details: 'This classroom focuses on structural behavior. Children engage in story circles, alphabet puzzles, number associations, and basic coloring labs. We maintain a strict 1:8 teacher-to-child ratio.'
    },
    {
      id: 'preschool',
      title: 'Pre-School Program',
      ageGroup: 'pre-k',
      ageRange: '4-5 Years',
      hours: '9:00 AM - 2:00 PM',
      price: 25.00,
      rating: 5,
      color: '#00ADEF',
      image: '/assets/art_course.png',
      description: 'Foundational mathematics, interactive phonics, curiosity workshops, and physical fitness programs.',
      details: 'Elevating child intelligence! Through early literacy modules and STEM-designed blocks, we prepare toddlers for systematic school grade frameworks while keeping play at the center.'
    },
    {
      id: 'childcare',
      title: 'Childcare & Playgroup',
      ageGroup: 'toddlers',
      ageRange: '1.5 - 3 Years',
      hours: '7:30 AM - 6:00 PM',
      price: 30.00,
      rating: 4,
      color: '#FBB040',
      image: '/assets/fine_motor.png',
      description: 'Cozy and safe home-like atmosphere for our tiny stars, with healthy catering and guided play.',
      details: 'Perfect for busy parents! Fully padded child-safe environment with toddler sleep zones, organic meals, tactile activity boards, and early communication development exercises.'
    },
    {
      id: 'primary',
      title: 'Primary Foundation Class',
      ageGroup: 'junior',
      ageRange: '5-6 Years',
      hours: '8:00 AM - 2:30 PM',
      price: 35.00,
      rating: 5,
      color: '#10B981',
      image: '/assets/logic_games.png',
      description: 'Advanced mathematics preparation, writing skills, nature studies, and collaborative team projects.',
      details: 'Fostering future leaders! Focuses on logical logic puzzles, comprehensive language skills, environmental awareness, and basic social sciences, preparing them for grade schools.'
    },
    {
      id: 'school_lab',
      title: 'School Science Lab',
      ageGroup: 'junior',
      ageRange: '4-6 Years',
      hours: '2:30 PM - 4:30 PM',
      price: 20.00,
      rating: 5,
      color: '#524FA1',
      image: '/assets/watercolor.png',
      description: 'Hands-on safe science, seed planting, animal facts, and space discovery experiments.',
      details: 'For curious young scientists! Safely exploring chemical color modifications, seed growth, astronomical charts, and skeletal details of animals in a highly visual interactive format.'
    },
    {
      id: 'creative_class',
      title: 'Creative Art & Clay',
      ageGroup: 'all',
      ageRange: '2-6 Years',
      hours: '3:00 PM - 5:00 PM',
      price: 18.00,
      rating: 5,
      color: '#ED1C24',
      image: '/assets/hero-bg.png',
      description: 'Clay modeling, visual finger painting, origami, and musical theater workshops.',
      details: 'Absolute artistic liberty! Children mix colors, model animals from safety clay, sing rhythm songs, and dress up for simulated stage plays. Perfect for building emotional intelligence.'
    }
  ];

  // Filtering Logic
  const filteredClasses = classesData.filter((item) => {
    const matchesAge = selectedAge === 'all' || item.ageGroup === selectedAge || item.ageGroup === 'all';
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAge && matchesQuery;
  });

  const handleEnroll = (item) => {
    onAddToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    });
    setSelectedClass(null);
  };

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif", padding: '60px 24px', background: '#FFFDFB', minHeight: '80vh' }}>
      
      {/* Decorative details */}
      <Flower className="right-[4%] top-[12%]" color="#00ADEF" size={60} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            background: '#E0F7FF',
            color: '#00ADEF',
            fontSize: '13px',
            fontWeight: '800',
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            OUR CURRICULUM
          </span>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: '38px',
            color: '#1F2937',
            margin: '0 0 10px 0',
            fontWeight: '800'
          }}>
            Explore Our Classes
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', fontWeight: '600' }}>
            Find the perfect learning track to fit your child's age group and interests.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          background: '#FFF',
          padding: '20px',
          borderRadius: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
          border: '1px solid #F3F4F6'
        }}>
          {/* Age Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { label: 'ALL AGES', id: 'all' },
              { label: 'TODDLERS (1.5 - 3Y)', id: 'toddlers' },
              { label: 'PRE-K (3 - 5Y)', id: 'pre-k' },
              { label: 'JUNIOR (5 - 6Y)', id: 'junior' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedAge(btn.id)}
                style={{
                  background: selectedAge === btn.id ? '#2E3192' : '#F9FAFB',
                  color: selectedAge === btn.id ? '#FFF' : '#4B5563',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontSize: '13.5px',
                  fontWeight: '750',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: selectedAge === btn.id ? '0 4px 10px rgba(46, 49, 146, 0.2)' : 'none'
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <input 
              type="text" 
              placeholder="Search classes or topics..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 42px',
                borderRadius: '25px',
                border: '2px solid #E5E7EB',
                fontSize: '14.5px',
                outline: 'none',
                fontFamily: "'Quicksand', sans-serif"
              }}
            />
            <Search size={18} color="#9CA3AF" style={{ position: 'absolute', left: '16px', top: '14px' }} />
          </div>
        </div>

        {/* Classes Catalog Grid */}
        {filteredClasses.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {filteredClasses.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedClass(item)}
                style={{
                  background: '#FFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
                  border: '2px solid #F3F4F6',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s'
                }}
                className="demo-card-hover"
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="card-img" />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: item.color,
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    letterSpacing: '0.5px'
                  }}>
                    ${item.price.toFixed(2)}/mo
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '20px', color: '#1F2937', margin: 0, fontWeight: '700' }}>
                        {item.title}
                      </h3>
                      <div style={{ display: 'flex' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < item.rating ? '#FBB040' : 'none'} color={i < item.rating ? '#FBB040' : '#E5E7EB'} />
                        ))}
                      </div>
                    </div>
                    <p style={{ fontSize: '14.5px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '15px',
                    borderTop: '1px solid #F3F4F6',
                    fontSize: '13px',
                    color: '#6B7280',
                    fontWeight: '700'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <GraduationCap size={16} color={item.color} />
                      <span>{item.ageRange}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={16} color={item.color} />
                      <span>{item.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '50px 20px',
            background: '#FFF',
            borderRadius: '24px',
            border: '2px dashed #E5E7EB',
            color: '#6B7280'
          }}>
            <AlertCircle size={40} color="#ED1C24" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '20px', margin: '0 0 8px 0' }}>No Classes Found</h3>
            <p style={{ margin: 0, fontSize: '14.5px', fontWeight: '600' }}>
              We couldn't find any classes matching your filter criteria. Try searching for something else!
            </p>
          </div>
        )}

      </div>

      {/* Class Details Modal */}
      {selectedClass && (
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
        }} onClick={() => setSelectedClass(null)}>
          <div style={{
            background: '#FFF',
            borderRadius: '28px',
            maxWidth: '600px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: `3px solid ${selectedClass.color}`,
            position: 'relative',
            animation: 'scaleUp 0.25s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedClass.image} alt={selectedClass.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
            
            <div style={{ padding: '30px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{
                  background: `${selectedClass.color}15`,
                  color: selectedClass.color,
                  fontWeight: '800',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px'
                }}>
                  {selectedClass.ageRange}
                </span>
                <span style={{ fontSize: '22px', fontWeight: '800', color: selectedClass.color }}>
                  ${selectedClass.price.toFixed(2)}/mo
                </span>
              </div>

              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '26px', color: '#1F2937', margin: '0 0 15px 0' }}>
                {selectedClass.title}
              </h3>

              <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.6', marginBottom: '20px' }}>
                {selectedClass.details}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px',
                padding: '15px',
                background: '#FAFAFA',
                borderRadius: '16px',
                marginBottom: '25px'
              }}>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', color: '#9CA3AF', fontSize: '11px', textTransform: 'uppercase' }}>Operating Hours</h5>
                  <p style={{ margin: 0, fontWeight: '700', color: '#374151', fontSize: '14px' }}>{selectedClass.hours}</p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', color: '#9CA3AF', fontSize: '11px', textTransform: 'uppercase' }}>Admission Status</h5>
                  <p style={{ margin: 0, fontWeight: '700', color: '#10B981', fontSize: '14px' }}>Open (Limited Seats)</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button 
                  onClick={() => setSelectedClass(null)}
                  style={{
                    flex: 1,
                    background: '#F3F4F6',
                    color: '#4B5563',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '25px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
                <button 
                  onClick={() => handleEnroll(selectedClass)}
                  style={{
                    flex: 2,
                    background: selectedClass.color,
                    color: '#FFF',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '25px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: `0 4px 10px ${selectedClass.color}30`
                  }}
                >
                  <ShoppingCart size={18} />
                  <span>ENROLL VIA ADMISSIONS BAG</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
