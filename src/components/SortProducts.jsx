export default function SortProducts({ onSort }) {
  const options = [
    { value: "default", label: "Recommended" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" },
    { value: "stock", label: "Availability" },
    { value: "popular", label: "Most Popular" }
  ];

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '15px 20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: '1px solid #F0F0F0',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      minWidth: '300px'
    }}>
      <div style={{ 
        fontSize: '18px', 
        color: '#374151',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>🔃</span>
        <span style={{ fontWeight: '500' }}>Sort by:</span>
      </div>
      <select
        onChange={(e) => onSort(e.target.value)}
        style={{
          flex: 1,
          padding: '10px 15px',
          border: '1px solid #D1D5DB',
          borderRadius: '8px',
          fontSize: '15px',
          outline: 'none',
          cursor: 'pointer',
          background: 'white',
          color: '#374151'
        }}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}