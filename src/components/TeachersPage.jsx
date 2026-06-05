import React from 'react';
import { Palette, Calculator, BookOpen, Compass, Award, Sparkles } from 'lucide-react';
import { Flower } from './SVGIllustrations';

export default function TeachersPage() {
  const teachers = [
    {
      name: 'Mrs. Emily Vance',
      role: 'Art & Craft Instructor',
      experience: '8 Years Exp',
      specialty: 'Watercolor & Clay',
      bio: 'Enjoys finger painting, mixing pastel colors, and showing children how to sculpt clay animals.',
      icon: <Palette size={20} color="#ED1C24" />,
      color: '#ED1C24',
      bg: '#FFF5F5',
      badge: 'CREATIVE SOUL',
      avatar: '/assets/watercolor.png'
    },
    {
      name: 'Mr. Dan Archer',
      role: 'Logic & Puzzle Coach',
      experience: '6 Years Exp',
      specialty: 'Board Games & Building Blocks',
      bio: 'Makes mathematics super fun using logic blocks, pattern cards, and spatial building block challenges.',
      icon: <Calculator size={20} color="#2E3192" />,
      color: '#2E3192',
      bg: '#EEF0FC',
      badge: 'LOGIC WIZARD',
      avatar: '/assets/logic_games.png'
    },
    {
      name: 'Ms. Chloe Geller',
      role: 'Nursery Lead Coordinator',
      experience: '10 Years Exp',
      specialty: 'Toddler Storytelling & Care',
      bio: 'Expert in sensory tactile games, early vocal articulation, and reading bedtime stories for our childcare kids.',
      icon: <BookOpen size={20} color="#FBB040" />,
      color: '#FBB040',
      bg: '#FFFDF0',
      badge: 'KIDS FAVORITE',
      avatar: '/assets/fine_motor.png'
    },
    {
      name: 'Dr. Leo Vance',
      role: 'Science Lab Director',
      experience: '12 Years Exp',
      specialty: 'Nature & Safe Chemistry',
      bio: 'Takes children on insect-spotting garden trips, plants magical bean seeds, and demonstrates kids space maps.',
      icon: <Compass size={20} color="#524FA1" />,
      color: '#524FA1',
      bg: '#F8F6FF',
      badge: 'TINY SCIENTIST',
      avatar: '/assets/kindergarten.png'
    },
    {
      name: 'Mrs. Sophia Parker',
      role: 'Language & Phonics Coach',
      experience: '7 Years Exp',
      specialty: 'Early Grammar & Phonics',
      bio: 'Uses hand puppet shows and alphabet songs to establish early reading capabilities and strong pronunciation.',
      icon: <Award size={20} color="#00ADEF" />,
      color: '#00ADEF',
      bg: '#E0F7FF',
      badge: 'PHONICS GURU',
      avatar: '/assets/art_course.png'
    },
    {
      name: 'Mrs. Elena Vance',
      role: 'Theater & Music Lead',
      experience: '9 Years Exp',
      specialty: 'Rhythm, Drama & Dance',
      bio: 'Directs funny stage acts, organizes cardboard costume designing, and teaches rhythm drumming.',
      icon: <Sparkles size={20} color="#10B981" />,
      color: '#10B981',
      bg: '#EBFDF5',
      badge: 'MUSIC MESTRO',
      avatar: '/assets/hero-bg.png'
    }
  ];

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif", padding: '60px 24px', background: '#FFFDFB', minHeight: '80vh' }}>
      
      {/* Decorative floral components */}
      <Flower className="left-[3%] top-[12%]" color="#FBB040" size={55} />
      <Flower className="right-[3%] bottom-[8%]" color="#524FA1" size={70} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title details */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: '#F5F3FF',
            color: '#524FA1',
            fontSize: '13px',
            fontWeight: '800',
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            OUR EDUCATORS
          </span>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: '38px',
            color: '#1F2937',
            margin: '0 0 10px 0',
            fontWeight: '800'
          }}>
            Meet Our Creative Teachers
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', fontWeight: '600' }}>
            We recruit certified professionals who have a warm heart and endless patience for child guidance.
          </p>
        </div>

        {/* Teachers Profile Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {teachers.map((t, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFF',
                borderRadius: '28px',
                border: `3px solid ${t.color}20`,
                boxShadow: '0 10px 20px rgba(0,0,0,0.02)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = t.color;
                e.currentTarget.style.boxShadow = `0 15px 30px ${t.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = `${t.color}20`;
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.02)';
              }}
            >
              {/* Badge */}
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: t.bg,
                color: t.color,
                fontSize: '10px',
                fontWeight: '900',
                padding: '4px 10px',
                borderRadius: '12px',
                letterSpacing: '0.5px'
              }}>
                {t.badge}
              </span>

              {/* Avatar circle */}
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `4px solid ${t.color}`,
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                marginBottom: '16px',
                background: '#F9FAFB'
              }}>
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Teacher Specialty Icon */}
              <div style={{
                background: t.bg,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
              }}>
                {t.icon}
              </div>

              {/* Teacher Name & role */}
              <h3 style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: '21px',
                color: '#1F2937',
                margin: '0 0 4px 0',
                fontWeight: '700'
              }}>
                {t.name}
              </h3>
              <p style={{
                fontSize: '13px',
                color: t.color,
                fontWeight: '800',
                textTransform: 'uppercase',
                margin: '0 0 12px 0',
                letterSpacing: '0.5px'
              }}>
                {t.role} • {t.experience}
              </p>

              {/* Bio */}
              <p style={{
                fontSize: '14px',
                color: '#6B7280',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: '600'
              }}>
                "{t.bio}"
              </p>

              {/* Subject Tag */}
              <div style={{
                marginTop: '16px',
                padding: '4px 12px',
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '15px',
                fontSize: '12.5px',
                color: '#4B5563',
                fontWeight: '750'
              }}>
                Specializes in: {t.specialty}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
