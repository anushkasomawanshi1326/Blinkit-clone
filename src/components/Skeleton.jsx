export default function Skeleton() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'loading 1.5s infinite',
      borderRadius: '8px'
    }}>
      <style>{`
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

// Skeleton variations for different components
export function ProductSkeleton() {
  return (
    <div style={{ 
      background: 'white', 
      borderRadius: '12px', 
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <Skeleton style={{ height: '150px', marginBottom: '15px' }} />
      <Skeleton style={{ height: '20px', width: '70%', marginBottom: '10px' }} />
      <Skeleton style={{ height: '15px', width: '50%', marginBottom: '15px' }} />
      <Skeleton style={{ height: '40px', width: '100%' }} />
    </div>
  );
}