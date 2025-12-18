export default function PeakTime() {
  const hour = new Date().getHours();
  const isPeakTime = (hour >= 18 && hour <= 22) || (hour >= 12 && hour <= 14);
  
  if (!isPeakTime) return null;

  const messages = [
    "⚡ High demand right now - Delivery might take 15-20 minutes",
    "🔥 Peak hours - Consider ordering early for faster delivery",
    "🚀 Busy time! Our riders are working extra fast"
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div style={{
      background: '#fff3cd',
      border: '1px solid #ffeaa7',
      color: '#856404',
      padding: '12px 20px',
      borderRadius: '8px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '15px'
    }}>
      <span style={{ fontSize: '20px' }}>⚠️</span>
      <div>
        <strong>Peak Time Alert:</strong> {randomMessage}
      </div>
    </div>
  );
}