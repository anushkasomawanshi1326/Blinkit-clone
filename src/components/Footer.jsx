export default function Footer() {
  return (
    <footer style={{
      background: '#1F2937',
      color: 'white',
      padding: '40px 20px',
      marginTop: '60px',
      borderTopLeftRadius: '30px',
      borderTopRightRadius: '30px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Section */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#10B981',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                B
              </div>
              <div>
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  marginBottom: '4px'
                }}>
                  Blinkit Clone
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  opacity: 0.7 
                }}>
                  India's Last Minute App
                </div>
              </div>
            </div>
            <p style={{ 
              fontSize: '14px', 
              opacity: 0.8,
              lineHeight: '1.6',
              maxWidth: '400px'
            }}>
              Groceries delivered to your doorstep in just 10 minutes. 
              Experience the fastest grocery delivery service.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ minWidth: '200px' }}>
            <h4 style={{ 
              marginBottom: '20px', 
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="/" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '14px' }}>Home</a>
              <a href="/orders" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '14px' }}>My Orders</a>
              <a href="/profile" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '14px' }}>Profile</a>
              <a href="/checkout" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '14px' }}>Checkout</a>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ minWidth: '250px' }}>
            <h4 style={{ 
              marginBottom: '20px', 
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📞</span>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>+91 1800-123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📧</span>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>support@blinkitclone.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📍</span>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          opacity: 0.7
        }}>
          © {new Date().getFullYear()} Blinkit Clone. All rights reserved.
          <div style={{ marginTop: '8px', fontSize: '12px' }}>
            This is a demo project for educational purposes.
          </div>
        </div>
      </div>
    </footer>
  );
}