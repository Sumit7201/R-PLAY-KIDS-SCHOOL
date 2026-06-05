import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemosSection from './components/DemosSection';
import WooCommerceSection from './components/WooCommerceSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import './App.css';

// Lazy-load subpages to reduce initial bundle size and speed up FCP
const AboutPage = lazy(() => import('./components/AboutPage'));
const ClassesPage = lazy(() => import('./components/ClassesPage'));
const TeachersPage = lazy(() => import('./components/TeachersPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

// A friendly, child-themed fallback spinner
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    gap: '15px'
  }}>
    <div className="spinner" style={{
      width: '40px',
      height: '40px',
      border: '4px solid #00ADEF',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <p style={{
      fontWeight: '700',
      color: '#2E3192',
      fontSize: '18px',
      fontFamily: "'Fredoka', sans-serif"
    }}>
      Opening R PLAY KIDS world... ✨
    </p>
  </div>
);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += product.quantity || 1;
        return updated;
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    // Open cart drawer to give visual confirmation feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const renderContent = () => {
    return (
      <Suspense fallback={<LoadingFallback />}>
        {(() => {
          switch (currentPage) {
            case 'about':
              return <AboutPage />;
            case 'classes':
              return <ClassesPage onAddToCart={handleAddToCart} />;
            case 'teachers':
              return <TeachersPage />;
            case 'shop':
              return <WooCommerceSection onAddToCart={handleAddToCart} />;
            case 'contact':
              return <ContactPage />;
            case 'home':
            default:
              return (
                <>
                  <Hero onEnrollClick={setCurrentPage} />
                  <DemosSection />
                  <WooCommerceSection onAddToCart={handleAddToCart} />
                </>
              );
          }
        })()}
      </Suspense>
    );
  };

  return (
    <>
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <main style={{ flex: 1 }}>
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </>
  );
}

export default App;
