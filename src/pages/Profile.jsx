import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Bangalore",
    points: 150
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("blinkit-profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem("blinkit-profile", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile saved successfully!");
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ marginBottom: '30px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>👤</span> My Profile
      </h1>

      <div style={{ marginBottom: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '15px', color: '#666' }}>Reward Points</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ff9800' }}>{profile.points}</div>
          <div style={{ color: '#666' }}>points available</div>
        </div>
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>Earn 10 points for every ₹100 spent</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {Object.entries(profile).map(([key, value]) => {
          if (key === 'points') return null;
          
          return (
            <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: '500', color: '#555', textTransform: 'capitalize' }}>
                {key}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                  style={{
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                />
              ) : (
                <div style={{ 
                  padding: '10px', 
                  background: '#f8f9fa', 
                  borderRadius: '5px',
                  border: '1px solid transparent'
                }}>
                  {value}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
        {isEditing ? (
          <>
            <button
              onClick={saveProfile}
              style={{
                padding: '12px 30px',
                background: '#0c831f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                flex: 1
              }}
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{
                padding: '12px 30px',
                background: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                flex: 1
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: '12px 30px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              flex: 1
            }}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}