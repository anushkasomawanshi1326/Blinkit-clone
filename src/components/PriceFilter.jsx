import { useState } from "react";

export default function PriceFilter({ onPriceFilter }) {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleChange = (value) => {
    const newRange = [priceRange[0], parseInt(value)];
    setPriceRange(newRange);
    onPriceFilter(newRange);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: '1px solid #F0F0F0'
    }}>
      <h4 style={{ marginBottom: '15px', color: '#374151' }}>Price Range</h4>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={priceRange[1]}
          onChange={(e) => handleChange(e.target.value)}
          style={{ 
            width: '100%',
            height: '6px',
            background: '#E5E7EB',
            borderRadius: '3px',
            outline: 'none'
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          padding: '8px 15px',
          background: '#F0FDF4',
          borderRadius: '8px',
          border: '1px solid #D1FAE5'
        }}>
          <div style={{ fontSize: '12px', color: '#6B7280' }}>Min</div>
          <div style={{ fontWeight: 'bold', color: '#059669' }}>₹{priceRange[0]}</div>
        </div>
        <div style={{ fontSize: '20px', color: '#9CA3AF' }}>→</div>
        <div style={{
          padding: '8px 15px',
          background: '#F0FDF4',
          borderRadius: '8px',
          border: '1px solid #D1FAE5'
        }}>
          <div style={{ fontSize: '12px', color: '#6B7280' }}>Max</div>
          <div style={{ fontWeight: 'bold', color: '#059669' }}>₹{priceRange[1]}</div>
        </div>
      </div>
    </div>
  );
}