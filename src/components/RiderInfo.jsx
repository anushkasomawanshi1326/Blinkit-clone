import { useEffect, useState } from "react";

export default function RiderInfo() {
  const [rider, setRider] = useState(null);

  useEffect(() => {
    // Mock rider data
    const riders = [
      { name: "Ramesh Kumar", phone: "98765XXXXX", rating: "4.8", deliveryCount: "1.2k+" },
      { name: "Suresh Patel", phone: "98766XXXXX", rating: "4.9", deliveryCount: "2.3k+" },
      { name: "Amit Sharma", phone: "98767XXXXX", rating: "4.7", deliveryCount: "900+" }
    ];
    setRider(riders[Math.floor(Math.random() * riders.length)]);
  }, []);

  if (!rider) return null;

  return (
    <div style={{ marginTop: '20px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
      <h4 style={{ marginBottom: '15px', color: '#555' }}>Your Rider</h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          background: '#0c831f', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          {rider.name.charAt(0)}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '16px' }}>{rider.name}</p>
          <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}>
            ⭐ {rider.rating} • {rider.deliveryCount} deliveries
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            📱 Contact: {rider.phone}
          </p>
        </div>
      </div>
      <div style={{ marginTop: '15px', padding: '10px', background: '#e8f5e9', borderRadius: '5px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#0c831f', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>✅</span> Rider is sanitized and following safety protocols
        </p>
      </div>
    </div>
  );
}
