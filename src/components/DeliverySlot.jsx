import { useState } from "react";

export default function DeliverySlot() {
  const [selectedSlot, setSelectedSlot] = useState("10-15");
  
  const slots = [
    { id: "10-15", time: "10-15 minutes", desc: "Fastest", fee: "Free" },
    { id: "15-30", time: "15-30 minutes", desc: "Standard", fee: "Free" },
    { id: "30-45", time: "30-45 minutes", desc: "Scheduled", fee: "Free" }
  ];

  return (
    <div>
      <h4 style={{ marginBottom: '15px', color: '#555' }}>Choose Delivery Slot</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {slots.map(slot => (
          <div
            key={slot.id}
            onClick={() => setSelectedSlot(slot.id)}
            style={{
              border: selectedSlot === slot.id 
                ? '2px solid #0c831f' 
                : '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              background: selectedSlot === slot.id 
                ? '#f0fff4' 
                : '#f9f9f9',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.2s'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                {selectedSlot === slot.id && <span>✅</span>}
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{slot.time}</span>
                <span style={{ 
                  background: '#0c831f', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  {slot.desc}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                Delivery fee: <span style={{ color: '#0c831f', fontWeight: 'bold' }}>{slot.fee}</span>
              </p>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0c831f' }}>{slot.fee}</div>
            </div>
          </div>
        ))}
      </div>
      
      <p style={{ marginTop: '15px', fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
        ⚡ Our riders are sanitized and follow all safety protocols
      </p>
    </div>
  );
}