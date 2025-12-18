import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Coupon from "../components/Coupon";
import DeliverySlot from "../components/DeliverySlot";
import RiderInfo from "../components/RiderInfo";
import useCart from "../hooks/useCart";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [finalTotal, setFinalTotal] = useState(cartTotal);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    const orders = JSON.parse(localStorage.getItem("blinkit-orders")) || [];
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: finalTotal,
      status: "Placed",
      date: new Date().toLocaleString(),
      deliveryTime: "10-15 minutes"
    };
    
    orders.unshift(newOrder);
    localStorage.setItem("blinkit-orders", JSON.stringify(orders));
    
    // Update reward points
    const profile = JSON.parse(localStorage.getItem("blinkit-profile")) || { points: 0 };
    const newPoints = profile.points + Math.floor(finalTotal / 10);
    localStorage.setItem("blinkit-profile", JSON.stringify({ ...profile, points: newPoints }));
    
    clearCart();
    setOrderPlaced(true);
    
    setTimeout(() => {
      navigate("/orders");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '50px', 
        maxWidth: '600px', 
        margin: '50px auto',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>✅</div>
        <h1 style={{ color: '#0c831f', marginBottom: '20px' }}>Order Placed Successfully!</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
          Your order will be delivered in 10-15 minutes
        </p>
        <p>Redirecting to orders page...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>Checkout</h1>
      
      {cart.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '50px', 
          background: '#f9f9f9', 
          borderRadius: '10px' 
        }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Your cart is empty</p>
          <button 
            onClick={() => navigate('/')}
            style={{ 
              marginTop: '20px',
              padding: '12px 30px',
              background: '#0c831f',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Order Summary */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#555' }}>Order Summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {cart.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '15px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div>
                    <p style={{ fontWeight: '500' }}>{item.name}</p>
                    <p style={{ fontSize: '14px', color: '#666' }}>Quantity: 1</p>
                  </div>
                  <p style={{ fontWeight: 'bold' }}>₹{item.price}</p>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Subtotal:</span>
                <span>₹{cartTotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Delivery:</span>
                <span style={{ color: '#0c831f' }}>FREE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold', marginTop: '10px' }}>
                <span>Total:</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#555' }}>Delivery Options</h2>
            <DeliverySlot />
            <RiderInfo />
          </div>

          {/* Coupon Section */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#555' }}>Apply Coupon</h2>
            <Coupon total={finalTotal} setTotal={setFinalTotal} />
          </div>

          {/* Place Order Button */}
          <button
            onClick={placeOrder}
            style={{
              padding: '18px',
              background: '#0c831f',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Place Order • ₹{finalTotal}
          </button>
        </div>
      )}
    </div>
  );
}