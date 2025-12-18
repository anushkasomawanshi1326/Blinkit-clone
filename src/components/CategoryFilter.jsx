export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3 style={{ marginBottom: '15px', color: '#555' }}>Shop by Category</h3>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        flexWrap: 'wrap',
        paddingBottom: '15px',
        overflowX: 'auto'
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            style={{
              padding: '10px 20px',
              background: selected === cat ? '#0c831f' : '#f0f0f0',
              color: selected === cat ? 'white' : '#333',
              border: 'none',
              borderRadius: '25px',
              fontSize: '15px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              fontWeight: selected === cat ? 'bold' : 'normal',
              ':hover': {
                background: selected === cat ? '#0a6e1a' : '#e0e0e0'
              }
            }}
          >
            {cat}
            {selected === cat && ' ✓'}
          </button>
        ))}
      </div>
    </div>
  );
}