import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: '1px solid #F0F0F0'
    }}>
      <h4 style={{ marginBottom: '15px', color: '#374151' }}>Search Products</h4>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 45px 12px 20px',
            border: '2px solid #E5E7EB',
            borderRadius: '10px',
            fontSize: '16px',
            outline: 'none',
            transition: 'all 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#059669'}
          onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
        <div style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '20px',
          color: '#6B7280'
        }}>
          🔍
        </div>
      </div>
    </div>
  );
}