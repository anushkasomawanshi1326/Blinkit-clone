export default function StockLabel({ stock }) {
  if (stock > 10) return null;
  
  if (stock === 0) {
    return (
      <span style={{ 
        background: '#dc3545', 
        color: 'white', 
        padding: '3px 10px', 
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        Out of Stock
      </span>
    );
  }
  
  if (stock <= 3) {
    return (
      <span style={{ 
        background: '#ffc107', 
        color: '#856404', 
        padding: '3px 10px', 
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        Only {stock} left!
      </span>
    );
  }
  
  return (
    <span style={{ 
      background: '#d4edda', 
      color: '#155724', 
      padding: '3px 10px', 
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold'
    }}>
      {stock} in stock
    </span>
  );
}