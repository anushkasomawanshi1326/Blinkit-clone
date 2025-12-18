import { useState } from "react";

export default function Coupon({ total, setTotal }) {
  const [applied, setApplied] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  
  const coupons = [
    { code: "SAVE50", discount: 50, minOrder: 300, description: "Get ₹50 off on orders above ₹300" },
    { code: "WELCOME100", discount: 100, minOrder: 500, description: "Get ₹100 off on orders above ₹500" },
    { code: "QUICK20", discount: 20, minOrder: 200, description: "Get ₹20 off on orders above ₹200" }
  ];

  const applyCoupon = (coupon) => {
    if (total >= coupon.minOrder) {
      setTotal(total - coupon.discount);
      setSelectedCoupon(coupon);
      setApplied(true);
      alert(`Coupon ${coupon.code} applied! Saved ₹${coupon.discount}`);
    } else {
      alert(`Minimum order value of ₹${coupon.minOrder} required for ${coupon.code}`);
    }
  };

  const removeCoupon = () => {
    if (selectedCoupon) {
      setTotal(total + selectedCoupon.discount);
      setApplied(false);
      setSelectedCoupon(null);
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: '15px', color: '#555' }}>Available Coupons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {coupons.map(coupon => (
          <div
            key={coupon.code}
            style={{
              border: selectedCoupon?.code === coupon.code 
                ? '2px solid #0c831f' 
                : '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              background: selectedCoupon?.code === coupon.code 
                ? '#f0fff4' 
                : '#f9f9f9',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                <span style={{ 
                  background: '#0c831f', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  {coupon.code}
                </span>
                <span style={{ fontWeight: 'bold', color: '#0c831f' }}>₹{coupon.discount} OFF</span>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{coupon.description}</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#888' }}>
                Min. order: ₹{coupon.minOrder}
              </p>
            </div>
            
            {selectedCoupon?.code === coupon.code ? (
              <button
                onClick={removeCoupon}
                style={{
                  padding: '8px 15px',
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => applyCoupon(coupon)}
                disabled={total < coupon.minOrder}
                style={{
                  padding: '8px 15px',
                  background: total >= coupon.minOrder ? '#0c831f' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '14px',
                  cursor: total >= coupon.minOrder ? 'pointer' : 'not-allowed',
                  opacity: total >= coupon.minOrder ? 1 : 0.6
                }}
              >
                Apply
              </button>
            )}
          </div>
        ))}
      </div>
      
      {selectedCoupon && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          background: '#d4edda', 
          borderRadius: '5px',
          color: '#155724',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>✅ Coupon <strong>{selectedCoupon.code}</strong> applied (-₹{selectedCoupon.discount})</span>
        </div>
      )}
    </div>
  );
}