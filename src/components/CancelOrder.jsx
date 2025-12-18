export default function CancelOrder({ order, cancel }) {
  if (order.status !== "Placed") return null;

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      cancel(order.id);
    }
  };

  return (
    <button
      onClick={handleCancel}
      style={{
        padding: '8px 20px',
        background: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'background 0.2s',
        ':hover': {
          background: '#c82333'
        }
      }}
    >
      Cancel Order
    </button>
  );
}