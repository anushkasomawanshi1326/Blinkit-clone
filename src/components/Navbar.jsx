import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/orders", label: "Orders", icon: "📦" },
    { path: "/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <nav style={{
      background: 'white',
      padding: '15px 20px',
      boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo Section */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        
        {/* Navigation Items */}
        <div style={{ 
          display: 'flex', 
          gap: '10px',
          background: '#F8FAFC',
          padding: '6px',
          borderRadius: '16px'
        }}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === item.path ? '#059669' : '#6B7280',
                fontWeight: location.pathname === item.path ? 'bold' : '500',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                background: location.pathname === item.path ? 'white' : 'transparent',
                transition: 'all 0.3s',
                boxShadow: location.pathname === item.path ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                border: location.pathname === item.path ? '1px solid #E5E7EB' : '1px solid transparent'
              }}
            >
              <span style={{ 
                fontSize: '18px',
                filter: location.pathname === item.path ? 'none' : 'grayscale(0.3)'
              }}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}