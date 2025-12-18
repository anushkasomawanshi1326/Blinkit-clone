import { useEffect, useState } from "react";

export default function RecentlyOrdered({ addToCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("blinkit-orders")) || [];
    if (orders.length > 0) {
      // Get items from most recent order
      const recentItems = orders[0].items || [];
      setItems(recentItems.slice(0, 3)); // Show only 3 items
    }
  }, []);

  if (items.length === 0) return null;

  return (
    <div style={{ marginTop: '40px' }}>
      <h3 style={{ marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>🔄</span> Order Again
      </h3>
      <div style={{ 
        display: 'flex', 
        gap: '15px',
        overflowX: 'auto',
        paddingBottom: '10px'
      }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div>
              <p style={{ margin: '0 0 5px 0', fontWeight: '500' }}>{item.name}</p>
              <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#0c831f' }}>
                ₹{item.price}
              </p>
            </div>
            <button
              onClick={() => addToCart(item)}
              style={{
                padding: '8px 15px',
                background: '#0c831f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '14px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Add Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}