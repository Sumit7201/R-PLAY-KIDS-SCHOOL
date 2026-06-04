import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Check } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckedOut(true);
      setTimeout(() => {
        setCheckedOut(false);
        onClearCart();
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300"
          onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
        />
      )}

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[400px] max-w-full bg-white shadow-2xl z-[1001] transition-transform duration-300 ease-in-out flex flex-col`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: 'min(400px, 100%)',
          backgroundColor: '#FFF',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
          zIndex: 1001,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Quicksand', sans-serif"
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#EEF0FC'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={24} color="#2E3192" />
            <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1F2937', fontFamily: "'Fredoka', sans-serif" }}>
              Your School Bag
            </h2>
            <span style={{
              background: '#2E3192',
              color: '#FFF',
              fontSize: '12px',
              fontWeight: '700',
              padding: '2px 8px',
              borderRadius: '10px',
            }}>
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#4B5563',
              padding: '4px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#F3F4F6'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Checkout Success Screen */}
        {checkedOut ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#DCFCE7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              animation: 'bounce 1s infinite'
            }}>
              <Check size={40} color="#15803D" strokeWidth={3} />
            </div>
            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '24px', color: '#16A34A', margin: '0 0 10px 0' }}>
              Order Confirmed!
            </h3>
            <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.5' }}>
              Woohoo! Your enrollment materials and playful dashboard login details are flying to your email inbox! Let the learning adventure begin! 🎈
            </p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              {cartItems.length === 0 ? (
                <div style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9CA3AF',
                  gap: '15px'
                }}>
                  <div style={{ opacity: 0.5 }}>
                    <ShoppingBag size={64} strokeWidth={1} />
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: '500' }}>Your school bag is empty!</p>
                  <button 
                    onClick={onClose}
                    style={{
                      background: '#00ADEF',
                      color: '#FFF',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '14px',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Go Explore Courses
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid #F3F4F6',
                    background: '#FAFAFA',
                    alignItems: 'center'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        border: '2px solid #E5E7EB'
                      }} 
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        margin: '0 0 4px 0',
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#1F2937'
                      }}>{item.title}</h4>
                      <p style={{
                        margin: '0 0 8px 0',
                        fontSize: '14px',
                        color: '#2E3192',
                        fontWeight: '700'
                      }}>${item.price.toFixed(2)}</p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          style={qtyBtnStyle}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '14px', fontWeight: '700', minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          style={qtyBtnStyle}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#9CA3AF',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        transition: 'color 0.2s, background 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#EF4444';
                        e.target.style.background = '#FEE2E2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#9CA3AF';
                        e.target.style.background = 'none';
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div style={{
                padding: '20px',
                borderTop: '1px solid #E5E7EB',
                background: '#FAFAFA'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1F2937'
                }}>
                  <span>Subtotal</span>
                  <span style={{ color: '#2E3192', fontSize: '18px' }}>${subtotal.toFixed(2)}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  style={{
                    width: '100%',
                    background: '#00ADEF',
                    color: '#FFF',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '25px',
                    fontWeight: '700',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 10px rgba(0, 173, 239, 0.25)',
                    transition: 'all 0.2s',
                    opacity: isCheckingOut ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if(!isCheckingOut) {
                      e.target.style.background = '#2E3192';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if(!isCheckingOut) {
                      e.target.style.background = '#00ADEF';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isCheckingOut ? (
                    <>
                      <div className="spinner" style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid #FFF',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite'
                      }} />
                      Processing Admission...
                    </>
                  ) : (
                    `Enroll Now & Checkout ($${subtotal.toFixed(2)})`
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

const qtyBtnStyle = {
  background: '#FFF',
  border: '1px solid #E5E7EB',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#4B5563',
  transition: 'border-color 0.2s'
};
