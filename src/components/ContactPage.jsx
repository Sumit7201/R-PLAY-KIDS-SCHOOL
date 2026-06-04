import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, Send } from 'lucide-react';
import { Flower } from './SVGIllustrations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childAge: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif", padding: '60px 24px', background: '#FFFDFB', minHeight: '80vh' }}>
      
      {/* Decorative details */}
      <Flower className="right-[4%] top-[10%]" color="#ED1C24" size={60} />
      <Flower className="left-[2%] bottom-[12%]" color="#00ADEF" size={50} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: '#FFF3E0',
            color: '#FBB040',
            fontSize: '13px',
            fontWeight: '800',
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            GET IN TOUCH
          </span>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: '38px',
            color: '#1F2937',
            margin: '0 0 10px 0',
            fontWeight: '800'
          }}>
            Connect With Our Campus
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', fontWeight: '600' }}>
            Schedule a personal tour, send a query, or chat directly with our administration team.
          </p>
        </div>

        {/* Contact info cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          {[
            { title: 'Call Us', val: '+1 (800) 752-9724', sub: 'Mon-Fri, 8AM - 5PM', icon: <Phone size={24} color="#00ADEF" />, color: '#00ADEF', bg: '#E0F7FF' },
            { title: 'Mail Us', val: 'admissions@rplaykids.com', sub: 'Direct response in 24h', icon: <Mail size={24} color="#2E3192" />, color: '#2E3192', bg: '#EEF0FC' },
            { title: 'Visit Campus', val: '123 Rainbow Lane, Playland', sub: 'Secure child-safe parking', icon: <MapPin size={24} color="#ED1C24" />, color: '#ED1C24', bg: '#FEECEC' },
            { title: 'Opening Hours', val: 'Mon - Sat: 8:00 AM - 5:00 PM', sub: 'Sunday Playgroup Closed', icon: <Clock size={24} color="#524FA1" />, color: '#524FA1', bg: '#F5F3FF' }
          ].map((c, i) => (
            <div key={i} style={{
              background: '#FFF',
              border: '3px solid #FFF5F2',
              borderRadius: '24px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 8px 15px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                background: c.bg,
                width: '50px',
                height: '50px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                {c.icon}
              </div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {c.title}
              </h4>
              <p style={{ margin: '0 0 4px 0', fontSize: '15.5px', fontWeight: '750', color: '#1F2937' }}>
                {c.val}
              </p>
              <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '600' }}>
                {c.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Layout split: Form vs Map */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {/* Form container */}
          <div style={{
            background: '#FFF',
            border: '3px solid #FFF5F2',
            borderRadius: '30px',
            padding: '40px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  background: '#E6F4EA',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <CheckCircle size={36} color="#10B981" />
                </div>
                <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '24px', color: '#1F2937', margin: '0 0 10px 0' }}>
                  Tour Scheduled Successfully!
                </h3>
                <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6', fontWeight: '600', marginBottom: '24px' }}>
                  We have sent details and a schedule guide to your email. Our admissions counselor will contact you shortly to confirm timings. See you soon! 🎒
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: '#2E3192',
                    color: '#FFF',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Schedule Another Tour
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left' }}>
                <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '22px', color: '#1F2937', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={22} color="#00ADEF" />
                  <span>Schedule a Campus Tour</span>
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: '#4B5563', marginBottom: '6px' }}>PARENT'S NAME *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name" 
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: '#4B5563', marginBottom: '6px' }}>EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: '#4B5563', marginBottom: '6px' }}>PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (800) 000-0000" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: '#4B5563', marginBottom: '6px' }}>KID'S AGE RANGE</label>
                  <select 
                    value={formData.childAge}
                    onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                    style={inputStyle}
                  >
                    <option value="">Select age group</option>
                    <option value="toddlers">Playgroup (1.5 - 3 Years)</option>
                    <option value="pre-k">Pre-School / Pre-K (3 - 5 Years)</option>
                    <option value="junior">Primary school (5 - 6 Years)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: '#4B5563', marginBottom: '6px' }}>YOUR MESSAGE / INTERESTS</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your child's needs or interests..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ ...inputStyle, resize: 'none', borderRadius: '16px' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  style={{
                    background: '#00ADEF',
                    color: '#FFF',
                    border: 'none',
                    padding: '14px 20px',
                    borderRadius: '25px',
                    fontWeight: '800',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 10px rgba(0, 173, 239, 0.25)',
                    transition: 'background 0.2s',
                    marginTop: '10px'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#2E3192'}
                  onMouseLeave={(e) => e.target.style.background = '#00ADEF'}
                >
                  {loading ? (
                    <div style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid #FFF',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.6s linear infinite'
                    }} />
                  ) : (
                    <>
                      <Send size={16} />
                      <span>SUBMIT TOUR REQUEST</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Stylized Vector Map representation */}
          <div style={{
            background: '#EEF0FC',
            borderRadius: '30px',
            padding: '30px',
            border: '3px solid #2E319215',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Map Background grid & drawings */}
            <svg width="100%" height="320" viewBox="0 0 400 320" style={{ overflow: 'visible' }}>
              {/* Roads */}
              <rect x="0" y="140" width="400" height="40" fill="#CBD5E1" />
              <rect x="180" y="0" width="40" height="320" fill="#CBD5E1" />
              {/* Road markings */}
              <line x1="0" y1="160" x2="400" y2="160" stroke="#FFF" strokeWidth="2" strokeDasharray="10 10" />
              <line x1="200" y1="0" x2="200" y2="320" stroke="#FFF" strokeWidth="2" strokeDasharray="10 10" />

              {/* Parkings & Houses (Pastel block placeholders) */}
              {/* Park */}
              <rect x="20" y="20" width="140" height="100" rx="12" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="2" />
              <text x="90" y="70" textAnchor="middle" fill="#15803D" fontWeight="700" fontSize="12" fontFamily="'Quicksand', sans-serif">Rainbow Park 🌳</text>

              {/* Residential Block */}
              <rect x="240" y="200" width="140" height="100" rx="12" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="2" />
              <text x="310" y="250" textAnchor="middle" fill="#D97706" fontWeight="700" fontSize="12" fontFamily="'Quicksand', sans-serif">Playland Townhouses</text>

              {/* R PLAY KIDS School Campus (Main highlight) */}
              <rect x="240" y="20" width="140" height="100" rx="16" fill="#EEF2FF" stroke="#2E3192" strokeWidth="3.5" />
              
              {/* Little Vector School building inside map */}
              <g transform="translate(290, 40)">
                <polygon points="10,25 30,10 50,25" fill="#ED1C24" />
                <rect x="15" y="25" width="30" height="25" fill="#00ADEF" />
                <rect x="25" y="38" width="10" height="12" fill="#FFF200" />
              </g>
              <text x="310" y="110" textAnchor="middle" fill="#2E3192" fontWeight="800" fontSize="11" fontFamily="'Fredoka', sans-serif">R PLAY KIDS CAMPUS 🎒</text>

              {/* Red location Pin on School */}
              <g transform="translate(310, 50)" style={{ animation: 'bounce 2s infinite' }}>
                <path d="M 0 0 C -6 -6 -10 -12 -10 -18 C -10 -24 -6 -28 0 -28 C 6 -28 10 -24 10 -18 C 10 -12 6 -6 0 0 Z" fill="#ED1C24" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="0" cy="-18" r="4.5" fill="#FFF" />
              </g>
              
              {/* Compass symbol in the corner */}
              <g transform="translate(45, 275)">
                <circle cx="0" cy="0" r="18" fill="#FFF" stroke="#6B7280" strokeWidth="2" />
                <polygon points="0,-14 4,0 -4,0" fill="#ED1C24" />
                <polygon points="0,14 4,0 -4,0" fill="#2E3192" />
                <text x="0" y="-19" textAnchor="middle" fontSize="9" fontWeight="800" fill="#374151">N</text>
              </g>
            </svg>

            {/* Address tooltip */}
            <div style={{
              background: '#FFF',
              border: '2px solid #2E3192',
              padding: '12px 18px',
              borderRadius: '16px',
              fontSize: '13.5px',
              fontWeight: '750',
              color: '#2E3192',
              marginTop: '15px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <MapPin size={16} />
              <span>We are right opposite to Rainbow Park!</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '25px',
  border: '2px solid #E5E7EB',
  fontSize: '14.5px',
  outline: 'none',
  fontFamily: "'Quicksand', sans-serif",
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
  background: '#F9FAFB'
};
