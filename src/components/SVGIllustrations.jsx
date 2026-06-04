import React from 'react';

// Animated Honey Bee Component
export const Bee = ({ className = "" }) => (
  <div className={`bee-container ${className}`} style={{
    position: 'absolute',
    animation: 'beeHover 4s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 10
  }}>
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flight Trail */}
      <path d="M 5 35 Q 20 20 30 35 T 50 35" stroke="#ccc" strokeDasharray="3 3" fill="none" strokeWidth="1.5" />
      {/* Wings - Upper and Lower */}
      <ellipse cx="40" cy="18" rx="8" ry="12" fill="#E0F2FE" opacity="0.8" stroke="#0ea5e9" strokeWidth="1.5" style={{
        transformOrigin: '40px 18px',
        animation: 'wingFlap 0.15s ease-in-out infinite alternate'
      }} />
      <ellipse cx="48" cy="20" rx="6" ry="10" fill="#E0F2FE" opacity="0.7" stroke="#0ea5e9" strokeWidth="1.5" style={{
        transformOrigin: '48px 20px',
        animation: 'wingFlap 0.15s ease-in-out infinite alternate-reverse',
        animationDelay: '0.05s'
      }} />
      {/* Bee Body */}
      <ellipse cx="45" cy="35" rx="20" ry="15" fill="#FBBF24" stroke="#78350F" strokeWidth="2" />
      {/* Stripes */}
      <path d="M 38 21 C 38 21 34 30 38 48" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
      <path d="M 46 20 C 46 20 43 30 46 50" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
      <path d="M 54 22 C 54 22 52 32 54 47" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
      {/* Eye */}
      <circle cx="33" cy="30" r="3" fill="#000" />
      <circle cx="32" cy="29" r="1" fill="#FFF" />
      {/* Rosy Cheek */}
      <circle cx="30" cy="36" r="2.5" fill="#F43F5E" opacity="0.6" />
      {/* Smile */}
      <path d="M 27 34 Q 29 38 31 34" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Stinger */}
      <path d="M 65 35 L 70 35 L 65 38 Z" fill="#78350F" />
      {/* Antennae */}
      <path d="M 33 22 Q 28 15 25 18" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="25" cy="18" r="2" fill="#78350F" />
    </svg>
  </div>
);

// Animated Peeking Bear Component
export const Bear = ({ className = "" }) => (
  <div className={`bear-container ${className}`} style={{
    position: 'absolute',
    bottom: '-10px',
    left: '5%',
    zIndex: 12,
    transformOrigin: 'bottom center',
    animation: 'bearPeek 6s ease-in-out infinite'
  }}>
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="45" cy="55" r="18" fill="#F97316" stroke="#C2410C" strokeWidth="3" />
      <circle cx="45" cy="55" r="10" fill="#FED7AA" />
      <circle cx="105" cy="55" r="18" fill="#F97316" stroke="#C2410C" strokeWidth="3" />
      <circle cx="105" cy="55" r="10" fill="#FED7AA" />
      
      {/* Head */}
      <circle cx="75" cy="85" r="42" fill="#F97316" stroke="#C2410C" strokeWidth="3" />
      
      {/* Eyes */}
      <circle cx="60" cy="78" r="6" fill="#000" />
      <circle cx="58" cy="76" r="2" fill="#FFF" />
      
      <circle cx="90" cy="78" r="6" fill="#000" />
      <circle cx="88" cy="76" r="2" fill="#FFF" />
      
      {/* Snout */}
      <ellipse cx="75" cy="94" rx="16" ry="12" fill="#FED7AA" stroke="#C2410C" strokeWidth="1.5" />
      {/* Nose */}
      <polygon points="71,90 79,90 75,95" fill="#78350F" />
      {/* Mouth */}
      <path d="M 75 95 Q 75 101 71 100" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 75 95 Q 75 101 79 100" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      
      {/* Rosy Cheeks */}
      <circle cx="48" cy="88" r="6" fill="#F43F5E" opacity="0.5" />
      <circle cx="102" cy="88" r="6" fill="#F43F5E" opacity="0.5" />

      {/* Waving Hand */}
      <g style={{
        transformOrigin: '35px 120px',
        animation: 'bearWave 3s ease-in-out infinite'
      }}>
        <path d="M 25 110 C 15 110 10 125 20 130 C 30 135 40 120 40 120 Z" fill="#F97316" stroke="#C2410C" strokeWidth="3" />
        <circle cx="23" cy="118" r="4" fill="#FED7AA" />
        <circle cx="17" cy="123" r="2.5" fill="#FED7AA" />
        <circle cx="21" cy="128" r="2.5" fill="#FED7AA" />
        <circle cx="27" cy="126" r="2.5" fill="#FED7AA" />
      </g>
    </svg>
  </div>
);

// Animated Giraffe Component
export const Giraffe = ({ className = "" }) => (
  <div className={`giraffe-container ${className}`} style={{
    position: 'absolute',
    bottom: '-2px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    transformOrigin: 'bottom center',
    animation: 'giraffeSway 8s ease-in-out infinite'
  }}>
    <svg width="220" height="340" viewBox="0 0 220 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neck */}
      <path d="M 95 340 L 95 140 L 125 140 L 125 340 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="3.5" />
      {/* Spots on Neck */}
      <rect x="100" y="280" width="16" height="22" rx="6" fill="#D97706" />
      <rect x="106" y="220" width="14" height="26" rx="5" fill="#D97706" />
      <rect x="98" y="160" width="18" height="20" rx="6" fill="#D97706" />
      
      {/* Head */}
      <path d="M 75 140 C 75 120 85 95 110 95 C 135 95 145 120 145 140 C 145 160 135 170 110 170 C 85 170 75 160 75 140 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="3.5" />
      
      {/* Muzzle */}
      <ellipse cx="110" cy="150" rx="30" ry="16" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
      {/* Nostrils */}
      <circle cx="100" cy="148" r="2.5" fill="#78350F" />
      <circle cx="120" cy="148" r="2.5" fill="#78350F" />
      {/* Mouth */}
      <path d="M 102 156 Q 110 162 118 156" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <g style={{ animation: 'giraffeBlink 4s infinite' }}>
        {/* Left Eye */}
        <circle cx="95" cy="122" r="7" fill="#000" />
        <circle cx="93" cy="119" r="2.5" fill="#FFF" />
        {/* Right Eye */}
        <circle cx="125" cy="122" r="7" fill="#000" />
        <circle cx="123" cy="119" r="2.5" fill="#FFF" />
      </g>

      {/* Horns (Ossicones) */}
      <path d="M 98 97 L 92 78" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
      <circle cx="91" cy="76" r="7" fill="#78350F" />
      
      <path d="M 122 97 L 128 78" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
      <circle cx="129" cy="76" r="7" fill="#78350F" />

      {/* Ears */}
      {/* Left Ear */}
      <path d="M 80 106 C 60 106 55 90 76 96 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      <path d="M 77 103 C 65 103 62 95 75 98 Z" fill="#FDE68A" />
      {/* Right Ear */}
      <path d="M 140 106 C 160 106 165 90 124 96 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      <path d="M 143 103 C 155 103 158 95 145 98 Z" fill="#FDE68A" />

      {/* Rosy Cheeks */}
      <circle cx="84" cy="136" r="4.5" fill="#F43F5E" opacity="0.4" />
      <circle cx="136" cy="136" r="4.5" fill="#F43F5E" opacity="0.4" />

      {/* Spots on Head */}
      <circle cx="100" cy="108" r="4.5" fill="#D97706" />
      <circle cx="120" cy="108" r="4" fill="#D97706" />
      <circle cx="110" cy="104" r="3" fill="#D97706" />
    </svg>
  </div>
);

// Spinning Flower Component
export const Flower = ({ className = "", color = "#38bdf8", size = 80 }) => (
  <div className={`flower-container ${className}`} style={{
    position: 'absolute',
    animation: 'flowerSpin 25s linear infinite',
    pointerEvents: 'none',
    width: size,
    height: size,
    zIndex: 5
  }}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      <circle cx="50" cy="24" r="16" fill={color} opacity="0.85" />
      <circle cx="50" cy="76" r="16" fill={color} opacity="0.85" />
      <circle cx="24" cy="50" r="16" fill={color} opacity="0.85" />
      <circle cx="76" cy="50" r="16" fill={color} opacity="0.85" />
      <circle cx="32" cy="32" r="16" fill={color} opacity="0.85" />
      <circle cx="68" cy="68" r="16" fill={color} opacity="0.85" />
      <circle cx="32" cy="68" r="16" fill={color} opacity="0.85" />
      <circle cx="68" cy="32" r="16" fill={color} opacity="0.85" />
      
      {/* Center */}
      <circle cx="50" cy="50" r="18" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" fill="#FDE68A" />
    </svg>
  </div>
);

// Curved Wave Transition
export const WaveTransition = ({ className = "", fill = "#ffffff", isFlipped = false }) => (
  <div className={`wave-transition ${className}`} style={{
    width: '100%',
    lineHeight: 0,
    position: 'relative',
    transform: isFlipped ? 'rotate(180deg)' : 'none',
    zIndex: 5
  }}>
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <path d="M0,64 C288,117.3 576,117.3 864,64 C1152,10.7 1296,10.7 1440,64 L1440,120 L0,120 Z" fill={fill} />
    </svg>
  </div>
);

// WooCommerce Payment Icons Group
export const PaymentIcons = ({ className = "" }) => (
  <div className={`payment-icons ${className}`} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    {/* Visa Icon */}
    <div style={cardStyle}>
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#1A1F71" />
        <path d="M15.4 16 L17.1 8.5 L19.8 8.5 L18.1 16 L15.4 16 Z M24.2 8.7 C23.6 8.4 22.8 8.3 22 8.3 C19.3 8.3 17.5 9.7 17.5 11.6 C17.5 13 18.8 13.8 19.8 14.3 C20.8 14.8 21.1 15.1 21.1 15.5 C21.1 16.2 20.2 16.5 19.5 16.5 C18.1 16.5 17.3 16.1 16.7 15.8 L16.2 18 C16.8 18.3 18 18.5 19.2 18.5 C22 18.5 23.8 17.1 23.8 15 C23.8 11.6 22.1 11.3 21 10.8 C20.1 10.4 19.6 10.1 19.6 9.6 C19.6 9.2 20.1 8.7 21.2 8.7 C22.1 8.7 22.8 8.9 23.3 9.1 L24.2 8.7 Z" fill="#FFF" />
      </svg>
    </div>
    {/* Mastercard Icon */}
    <div style={cardStyle}>
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#0A0A0A" />
        <circle cx="17" cy="12" r="7" fill="#EB001B" />
        <circle cx="23" cy="12" r="7" fill="#FF5F00" opacity="0.85" />
      </svg>
    </div>
    {/* Paypal Icon */}
    <div style={cardStyle}>
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#003087" />
        <path d="M14 6.5 L17.5 6.5 C19.5 6.5 20.5 7.5 20.2 9.5 C19.9 11.5 18.5 12.5 16.5 12.5 L14.7 12.5 L13.7 17.5 L12.5 17.5 L14.7 6.5 Z M15.5 8 L14.8 11 L16 11 C17.3 11 18.2 10.5 18.5 9.5 C18.8 8.5 18 8 16.7 8 L15.5 8 Z" fill="#0079C1" />
        <path d="M16 8.5 L19.5 8.5 C21.5 8.5 22.5 9.5 22.2 11.5 C21.9 13.5 20.5 14.5 18.5 14.5 L16.7 14.5 L15.7 19.5 L14.5 19.5 L16.7 8.5 Z M17.5 10 L16.8 13 L18 13 C19.3 13 20.2 12.5 20.5 11.5 C20.8 10.5 20 10 18.7 10 L17.5 10 Z" fill="#00457C" opacity="0.6" />
      </svg>
    </div>
    {/* Apple Pay Icon */}
    <div style={cardStyle}>
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#FFF" stroke="#E5E7EB" strokeWidth="1" />
        <path d="M15 15.5 C14.2 15.5 12.8 14.5 12.8 12.5 C12.8 10.5 14.2 9.5 15.2 9.5 C16.2 9.5 16.8 9.9 17.2 9.9 C17.6 9.9 18.4 9.5 19.2 9.5 C20.2 9.5 21.2 10.1 21.6 11 C19.6 12 19.6 14.5 21.6 15.3 C20.8 16.5 19.8 17.5 18.8 17.5 C18 17.5 17.6 17.1 17 17.1 C16.4 17.1 15.8 17.5 15 17.5 Z M18.5 8 C19 7.4 19.2 6.6 19.2 5.8 C18.4 5.8 17.6 6.3 17 7 C16.6 7.5 16.3 8.3 16.3 9.1 C17.2 9.1 18 8.6 18.5 8 Z" fill="#000" />
      </svg>
    </div>
  </div>
);

const cardStyle = {
  background: '#FFF',
  padding: '4px',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
};

// Custom Vector R PLAY KIDS Logo Component
export const Logo = ({ size = 65, showText = true, className = "" }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        {/* Sun/Starburst on the left */}
        <g transform="translate(30, 50)">
          <circle cx="0" cy="0" r="10" fill="#2E3192" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <line
                key={i}
                x1="0"
                y1="0"
                x2="22"
                y2="0"
                stroke="#2E3192"
                strokeWidth="3.5"
                strokeLinecap="round"
                transform={`rotate(${angle})`}
              />
            );
          })}
        </g>

        {/* Arch: "Learn. Play. Grow." */}
        <path id="arch-path" d="M 30,75 A 65,65 0 0,1 145,70" fill="none" stroke="#2E3192" strokeWidth="4" strokeLinecap="round" />
        <text fontStyle="italic" fontWeight="bold" fontSize="13" fill="#1F2937" fontFamily="'Quicksand', sans-serif">
          <textPath href="#arch-path" startOffset="50%" textAnchor="middle">
            Learn. Play. Grow.
          </textPath>
        </text>

        {/* Tree Pencil Trunk in the center */}
        {/* Pencil body: polygon */}
        <polygon points="85,115 95,115 95,78 85,78" fill="#2E3192" />
        {/* Pencil wood tip */}
        <polygon points="85,115 95,115 90,123" fill="#FDBA74" />
        {/* Pencil lead */}
        <polygon points="89.5,122 90.5,122 90,125" fill="#000" />
        {/* Leaves (Red/Orange flames/petals on top of tree) */}
        {/* Center branch/stem split */}
        <path d="M 90,78 Q 78,65 65,70" stroke="#2E3192" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 90,78 Q 102,65 115,70" stroke="#2E3192" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 90,78 V 50" stroke="#2E3192" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        
        {/* Red leaves/petals */}
        {/* Top middle leaf */}
        <path d="M 90,50 Q 82,32 90,20 Q 98,32 90,50 Z" fill="#ED1C24" />
        <path d="M 78,55 Q 68,40 80,30 Q 86,42 78,55 Z" fill="#ED1C24" />
        <path d="M 102,55 Q 112,40 100,30 Q 94,42 102,55 Z" fill="#ED1C24" />
        
        {/* Left branch leaf */}
        <path d="M 65,70 Q 52,60 62,48 Q 72,58 65,70 Z" fill="#ED1C24" />
        <path d="M 72,67 Q 62,52 75,44 Q 80,56 72,67 Z" fill="#ED1C24" />

        {/* Right branch leaf */}
        <path d="M 115,70 Q 128,60 118,48 Q 108,58 115,70 Z" fill="#ED1C24" />
        <path d="M 108,67 Q 118,52 105,44 Q 100,56 108,67 Z" fill="#ED1C24" />
        
        {/* Little Flame details (yellow/orange centers) */}
        <path d="M 90,45 Q 86,35 90,28 Q 94,35 90,45 Z" fill="#FFF200" />
        <path d="M 78,50 Q 73,43 80,36 Q 83,43 78,50 Z" fill="#FFF200" />
        <path d="M 102,50 Q 107,43 100,36 Q 97,43 102,50 Z" fill="#FFF200" />

        {/* Blue Boy Figure (left) */}
        <g transform="translate(60, 100)">
          {/* Head */}
          <circle cx="0" cy="-22" r="8" fill="#00ADEF" />
          {/* Body and limbs */}
          {/* Torso */}
          <path d="M 0,-14 L 0,2" stroke="#00ADEF" strokeWidth="5.5" strokeLinecap="round" />
          {/* Arms waving up */}
          <path d="M 0,-12 Q -12,-20 -20,-10" stroke="#00ADEF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M 0,-12 Q 12,-6 24,-12" stroke="#00ADEF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          {/* Legs running/jumping */}
          <path d="M 0,2 L -12,18" stroke="#00ADEF" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 0,2 L 8,14 Q 16,16 20,22" stroke="#00ADEF" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Purple/Indigo Girl Figure (right) */}
        <g transform="translate(115, 102)">
          {/* Head */}
          <circle cx="0" cy="-22" r="8" fill="#524FA1" />
          {/* Ponytail */}
          <path d="M 6,-25 Q 15,-27 12,-19 Q 7,-17 6,-22" stroke="#524FA1" strokeWidth="3" fill="#524FA1" strokeLinecap="round" />
          {/* Body (Dress-like path) */}
          <path d="M 0,-14 L -6,4 L 6,4 Z" fill="#524FA1" stroke="#524FA1" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Arms waving up */}
          <path d="M -2,-12 Q -12,-8 -20,2" stroke="#524FA1" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M 2,-12 Q 15,-18 20,-10" stroke="#524FA1" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Legs */}
          <path d="M -3,4 L -8,18" stroke="#524FA1" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 3,4 Q 8,12 16,14" stroke="#524FA1" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>
      {showText && (
        <span style={{
          fontFamily: "'Fredoka', sans-serif",
          fontSize: '24px',
          fontWeight: '800',
          color: '#2E3192', // Logo Indigo
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '1.0'
        }}>
          R PLAY <span style={{ color: '#00ADEF', fontSize: '18px', fontWeight: '700' }}>KIDS</span>
        </span>
      )}
    </div>
  );
};
