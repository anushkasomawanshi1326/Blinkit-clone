import StockLabel from "./StockLabel";

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
      }
    }}>
      <div style={{ 
        height: '150px', 
        background: '#f8f9fa', 
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15px',
        overflow: 'hidden'
      }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%',
            objectFit: 'contain'
          }} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
      </div>
      
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{product.name}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>{product.category}</p>
      
      <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#666' }}>Price</div> {/* FIXED: Added > here */}
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0c831f' }}>₹{product.price}</div>
          </div>
          <StockLabel stock={product.stock} />
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          style={{
            width: '100%',
            padding: '12px',
            background: '#0c831f',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.3s',
            ':hover': {
              background: '#0a6e1a'
            }
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#0a6e1a'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#0c831f'}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}