import React, { useState } from 'react';
import { Giraffe, WaveTransition, PaymentIcons } from './SVGIllustrations';
import { Star, ShoppingCart, Info, Eye, CheckCircle, ShieldAlert } from 'lucide-react';

export default function WooCommerceSection({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [successMsg, setSuccessMsg] = useState('');

  const products = [
    {
      id: 'watercolor',
      title: 'Watercolor Course',
      price: 20.00,
      image: '/assets/watercolor.png',
      size: 'Small',
      designer: 'Sophia Vance',
      status: 'ACTIVE',
      rating: 5,
      description: 'An introductory course to watercolors, helping kids explore wet-on-wet painting, mixing color palettes, and developing creative self-expression.'
    },
    {
      id: 'logic_games',
      title: 'Logic Games',
      price: 10.00,
      image: '/assets/logic_games.png',
      size: 'Medium',
      designer: 'Leo Archer',
      status: 'ACTIVE',
      rating: 5,
      description: 'Enchanting puzzles and logic structures designed to build young analytical minds, improve spatial awareness, and strengthen pattern matching.'
    },
    {
      id: 'fine_motor',
      title: 'Fine Motor Course',
      price: 12.00,
      image: '/assets/fine_motor.png',
      size: 'Large',
      designer: 'Sarah Parker',
      status: 'ACTIVE',
      rating: 4,
      description: 'Activities focusing on precision and dexterity: threading bead necklaces, drawing lines, utilizing safety scissors, and tactile crafting.'
    },
    {
      id: 'art_course',
      title: 'Art & Crafts Course',
      price: 18.00,
      image: '/assets/art_course.png',
      size: 'Medium',
      designer: 'Elena Geller',
      status: 'ACTIVE',
      rating: 5,
      description: 'Fusing clay sculpting, papier-mâché, origami, and mixed media art to unleash absolute creative freedom for kids of all levels.'
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQty(1);
    setSuccessMsg('');
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    onAddToCart({
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      image: selectedProduct.image,
      quantity: qty
    });
    setSuccessMsg('Added to School Bag! 🎒');
    setTimeout(() => {
      setSuccessMsg('');
      setSelectedProduct(null);
    }, 1200);
  };

  const handleDirectPurchase = () => {
    onAddToCart({
      id: products[0].id, // Default to first item
      title: products[0].title,
      price: products[0].price,
      image: products[0].image,
      quantity: 1
    });
    alert(`Enrolled in ${products[0].title} directly! Click the Bag icon at the top to complete admission! 🎒`);
  };

  return (
    <section id="shop" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #FEF08A 0%, #FFD6A5 50%, #FFB7B2 100%)',
      padding: '80px 24px 0 24px',
      overflow: 'hidden',
      color: '#1F2937',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      {/* Background Splashes simulated using floating items */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '120px',
        height: '120px',
        background: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        zIndex: 0
      }} />

      {/* Main Container */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: '1200px',
        margin: '0 auto',
        paddingBottom: '160px' // Space for giraffe
      }}>
        
        {/* Top Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          {/* Left Column: Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <h2 style={{
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 'clamp(36px, 5vw, 54px)',
              color: '#FFF',
              textShadow: '2px 2px 4px rgba(220, 38, 38, 0.25)',
              margin: 0,
              lineHeight: '1.1',
              fontWeight: '850'
            }}>
              WooCommerce
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#4B5563',
              fontWeight: '700',
              textShadow: '0 1px 1px rgba(255,255,255,0.5)'
            }}>
              Offer to your customers an extra service. Create your products, services and courses in a very simple way and start receiving money thanks to various payment systems. The management of your business will be very simple.
            </p>

            {/* Payment methods */}
            <div style={{ marginTop: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', color: '#FFF', textShadow: '1px 1px 2px rgba(0,0,0,0.15)', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                SOME PAYMENT METHODS
              </span>
              <PaymentIcons />
            </div>

            {/* Purchase Now Button */}
            <button 
              onClick={handleDirectPurchase}
              style={{
                alignSelf: 'flex-start',
                background: '#F59E0B',
                color: '#FFF',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '30px',
                fontFamily: "'Fredoka', sans-serif",
                fontSize: '17px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 6px 15px rgba(245, 158, 11, 0.3)',
                transition: 'all 0.2s',
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                marginTop: '15px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#D97706';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#F59E0B';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 6px 15px rgba(245, 158, 11, 0.3)';
              }}
            >
              PURCHASE NOW
            </button>
          </div>

          {/* Right Column: WooCommerce Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px'
          }}>
            {products.map((prod) => (
              <div 
                key={prod.id} 
                onClick={() => handleProductClick(prod)}
                style={{
                  background: '#FFF',
                  borderRadius: '20px',
                  padding: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '3px solid transparent',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
                className="shop-card-hover"
              >
                {/* Product Image */}
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '110px' }}>
                  <img src={prod.image} alt={prod.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: '#EF4444',
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '8px'
                  }}>
                    ${prod.price}
                  </span>
                </div>
                {/* Product Title */}
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: '700', color: '#1F2937' }}>{prod.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>By {prod.designer.split(' ')[0]}</span>
                    <div style={{ display: 'flex' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill={i < prod.rating ? '#F59E0B' : 'none'} color={i < prod.rating ? '#F59E0B' : '#E5E7EB'} />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Mini Action Overlay */}
                <div className="card-action-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(255,255,255,0.92)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                  pointerEvents: 'none'
                }}>
                  <div style={{
                    background: '#F59E0B',
                    color: '#FFF',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Eye size={14} />
                    <span>View Detail</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Block: Live Order Status Table */}
        <div style={{
          background: '#FFF',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: '0 15px 30px rgba(0,0,0,0.06)',
          border: '1px solid #F3F4F6',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '20px', color: '#1F2937', margin: 0, fontWeight: '700' }}>
              Live Admissions & Courses Status
            </h3>
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: '700', background: '#D1FAE5', padding: '4px 10px', borderRadius: '12px' }}>
              ● LIVE UPDATES
            </span>
          </div>

          {/* Table Container */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', fontFamily: "'Quicksand', sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #F3F4F6', color: '#9CA3AF', fontWeight: '700', textAlign: 'left' }}>
                  <th style={{ padding: '12px' }}>PROGRAM</th>
                  <th style={{ padding: '12px' }}>DESCRIPTION</th>
                  <th style={{ padding: '12px' }}>SIZE CLASS</th>
                  <th style={{ padding: '12px' }}>FEE</th>
                  <th style={{ padding: '12px', textAlign: 'right' }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr 
                    key={item.id} 
                    onClick={() => handleProductClick(item)}
                    style={{
                      borderBottom: '1px solid #F3F4F6',
                      transition: 'background 0.2s',
                      cursor: 'pointer'
                    }}
                    className="table-row-hover"
                  >
                    <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700' }}>
                      <img src={item.image} alt={item.title} style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }} />
                      <span style={{ color: '#1F2937' }}>{item.title}</span>
                    </td>
                    <td style={{ padding: '12px', color: '#6B7280', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.description}
                    </td>
                    <td style={{ padding: '12px', color: '#4B5563', fontWeight: '600' }}>
                      {item.size === 'Small' ? '10-15 Kids' : item.size === 'Medium' ? '15-20 Kids' : '20-25 Kids'}
                    </td>
                    <td style={{ padding: '12px', color: '#F97316', fontWeight: '700' }}>
                      ${item.price.toFixed(2)}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <span style={{
                        background: index % 3 === 0 ? '#DCFCE7' : '#FEF3C7',
                        color: index % 3 === 0 ? '#15803D' : '#D97706',
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '4px 8px',
                        borderRadius: '10px'
                      }}>
                        {index % 3 === 0 ? 'ACTIVE' : 'RUNNING'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Animated peeking Giraffe component */}
      <Giraffe />

      {/* Transition to next section */}
      <WaveTransition fill="#FFF" />

      {/* WooCommerce Item detail modal */}
      {selectedProduct && (
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
        }} onClick={() => setSelectedProduct(null)}>
          <div style={{
            background: '#FFF',
            borderRadius: '24px',
            maxWidth: '550px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '4px solid #F59E0B',
            position: 'relative',
            animation: 'scaleUp 0.25s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            
            <div style={{ position: 'relative' }}>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                style={{ width: '100%', height: '240px', objectFit: 'cover' }} 
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontWeight: '800',
                  fontSize: '16px'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{
                  background: '#FEF3C7',
                  color: '#D97706',
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  letterSpacing: '0.5px'
                }}>
                  WOOCOMMERCE
                </span>
                <span style={{ fontSize: '20px', fontWeight: '800', color: '#F97316' }}>
                  ${selectedProduct.price.toFixed(2)}
                </span>
              </div>

              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '24px', color: '#1F2937', margin: '0 0 10px 0' }}>
                {selectedProduct.title}
              </h3>

              <div style={{ display: 'flex', gap: '15px', fontSize: '13px', color: '#6B7280', marginBottom: '15px', fontWeight: '600' }}>
                <span>Instructor: <strong style={{ color: '#4B5563' }}>{selectedProduct.designer}</strong></span>
                <span>•</span>
                <span>Size: <strong style={{ color: '#4B5563' }}>{selectedProduct.size}</strong></span>
              </div>

              <p style={{
                color: '#4B5563',
                fontSize: '14.5px',
                lineHeight: '1.6',
                margin: '0 0 20px 0'
              }}>
                {selectedProduct.description}
              </p>

              {/* Quantity Select and Action */}
              {successMsg ? (
                <div style={{
                  background: '#D1FAE5',
                  color: '#065F46',
                  fontWeight: '700',
                  padding: '12px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle size={20} />
                  <span>{successMsg}</span>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #D1D5DB', borderRadius: '25px', padding: '4px 12px', background: '#F9FAFB' }}>
                    <button 
                      onClick={() => setQty(q => q > 1 ? q - 1 : 1)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: '700', padding: '4px 8px', fontSize: '16px' }}
                    >-</button>
                    <span style={{ padding: '0 12px', fontWeight: '700', fontSize: '15px', minWidth: '20px', textAlign: 'center' }}>{qty}</span>
                    <button 
                      onClick={() => setQty(q => q + 1)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: '700', padding: '4px 8px', fontSize: '16px' }}
                    >+</button>
                  </div>

                  <button 
                    onClick={handleAddToCart}
                    style={{
                      flex: 1,
                      background: '#10B981',
                      color: '#FFF',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      fontWeight: '700',
                      fontSize: '15px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#059669'}
                    onMouseLeave={(e) => e.target.style.background = '#10B981'}
                  >
                    <ShoppingCart size={18} />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
