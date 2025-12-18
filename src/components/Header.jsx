export default function Header({ cartCount }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      color: 'white',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 8px 32px rgba(5, 150, 105, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: `
          radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          marginBottom: '10px'
        }}>
          <div style={{ 
            background: 'white', 
            color: '#059669',
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
          }}>
            ⚡
          </div>
          <div>
            <h2 style={{ 
              margin: 0, 
              fontSize: '34px',
              fontWeight: '800',
              lineHeight: '1.1'
            }}>
              Groceries in 10 Minutes
            </h2>
            <p style={{ 
              margin: '8px 0 0 0', 
              opacity: 0.95,
              fontSize: '16px',
              maxWidth: '500px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>🚀</span>
              <span>India's fastest grocery delivery</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Cart Counter */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: 'rgba(255,255,255,0.15)',
        padding: '18px 28px',
        borderRadius: '18px',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.25)',
        position: 'relative',
        zIndex: 1,
        transition: 'all 0.3s',
        cursor: 'pointer',
        ':hover': {
          background: 'rgba(255,255,255,0.2)',
          transform: 'translateY(-2px)'
        }
      }}>
        <div style={{
          background: 'white',
          color: '#059669',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '26px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
        }}>
          🛒
        </div>
        <div>
          <div style={{ 
            fontSize: '14px', 
            opacity: 0.9, 
            fontWeight: '600',
            marginBottom: '4px'
          }}>
            Cart Items
          </div>
          <div style={{ 
            fontSize: '32px', 
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'baseline',
            gap: '5px'
          }}>
            {cartCount}
            <span style={{ 
              fontSize: '16px', 
              opacity: 0.8, 
              fontWeight: 'normal' 
            }}>
              {cartCount === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}