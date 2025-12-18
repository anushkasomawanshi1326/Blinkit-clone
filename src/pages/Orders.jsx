import { useEffect, useState } from "react";
import CancelOrder from "../components/CancelOrder";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("blinkit-orders")) || [];
    setOrders(savedOrders);
  }, []);

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: "Cancelled" } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("blinkit-orders", JSON.stringify(updatedOrders));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>My Orders</h1>
      
      {orders.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '50px', 
          background: '#f9f9f9', 
          borderRadius: '10px' 
        }}>
          <p style={{ fontSize: '18px', color: '#666' }}>No orders yet</p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ 
              marginTop: '20px',
              padding: '10px 20px',
              background: '#0c831f',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map(order => (
            <div
              key={order.id}
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                borderLeft: `5px solid ${
                  order.status === "Delivered" ? "#0c831f" :
                  order.status === "Cancelled" ? "#dc3545" : "#ffc107"
                }`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ marginBottom: '10px' }}>Order #{order.id}</h3>
                  <p><strong>Status:</strong> 
                    <span style={{ 
                      color: order.status === "Delivered" ? "#0c831f" :
                             order.status === "Cancelled" ? "#dc3545" : "#ffc107",
                      marginLeft: '10px',
                      fontWeight: 'bold'
                    }}>
                      {order.status}
                    </span>
                  </p>
                  <p><strong>Total:</strong> ₹{order.total}</p>
                  <p><strong>Items:</strong> {order.items?.length || 0}</p>
                </div>
                <div>
                  <CancelOrder order={order} cancel={cancelOrder} />
                </div>
              </div>
              
              {order.items && order.items.length > 0 && (
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <p><strong>Items:</strong></p>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    {order.items.map((item, index) => (
                      <li key={index}>{item.name} - ₹{item.price}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}