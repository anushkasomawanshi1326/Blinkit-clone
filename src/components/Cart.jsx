import { useNavigate } from "react-router-dom";

export default function Cart({ cart, cartTotal, onCheckout }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: '100px',
      height: 'fit-content'
    }}>
      <h3 style={{ 
        margin: '0 0 20px 0', 
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>🛒</span>
        Shopping Cart ({cart.length})
      </h3>
      
      {cart.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '30px 20px',
          color: '#666'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🛒</div>
          <p style={{ fontSize: '16px' }}>Your cart is empty</p>
          <p style={{ fontSize: '14px', color: '#888', marginTop: '5px' }}>Add items to get started</p>
        </div>
      ) : (
        <>
          <div style={{ 
            maxHeight: '300px', 
            overflowY: 'auto',
            marginBottom: '20px',
            paddingRight: '10px'
          }}>
            {cart.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee'
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: '500' }}>{item.name}</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>1 item</p>
                </div>
                <div style={{ fontWeight: 'bold', color: '#0c831f' }}>₹{item.price}</div>
              </div>
            ))}
          </div>
          
          <div style={{ 
            paddingTop: '20px', 
            borderTop: '2px solid #eee',
            marginTop: '10px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#666' }}>Subtotal:</span>
              <span style={{ fontWeight: '500' }}>₹{cartTotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#666' }}>Delivery:</span>
              <span style={{ color: '#0c831f', fontWeight: '500' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontSize: '20px', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span>₹{cartTotal}</span>
            </div>
            
            <button
              onClick={handleCheckout}
              style={{
                width: '100%',
                padding: '16px',
                background: '#0c831f',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'background 0.3s',
                ':hover': {
                  background: '#0a6e1a'
                }
              }}
            >
              Proceed to Checkout
            </button>
            
            <p style={{ 
              textAlign: 'center', 
              marginTop: '15px', 
              fontSize: '12px', 
              color: '#888' 
            }}>
              Delivery in 10-15 minutes
            </p>
          </div>
        </>
      )}
    </div>
  );
}