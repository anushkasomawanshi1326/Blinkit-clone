export default function Logo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      {/* Blinkit Logo Image */}
      <img 
        src="/blinkit-logo.png" 
        alt="Blinkit Logo" 
        style={{
          height: '45px',
          width: 'auto',
          objectFit: 'contain'
        }}
        onError={(e) => {
          // Fallback if image doesn't load
          e.target.onerror = null;
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `
            <div style="
              display: flex;
              align-items: center;
              gap: 10px;
            ">
              <div style="
                width: 45px;
                height: 45px;
                background: linear-gradient(135deg, #10B981 0%, #059669 100%);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 22px;
                font-weight: bold;
              ">B</div>
              <div style="
                display: flex;
                flex-direction: column;
              ">
                <span style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #059669;
                  line-height: 1;
                ">blinkit</span>
                <span style="
                  font-size: 10px;
                  color: #6B7280;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                ">clone</span>
              </div>
            </div>
          `;
        }}
      />
      
      {/* Text beside logo (optional) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.1'
      }}>
        <span style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#059669'
        }}>
          blinkit
        </span>
        <span style={{
          fontSize: '11px',
          color: '#6B7280',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          India's Last Minute App
        </span>
      </div>
    </div>
  );
}