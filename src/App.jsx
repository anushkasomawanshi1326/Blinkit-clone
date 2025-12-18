import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F9FAFB'
    }}>
      <Navbar />
      <main style={{ 
        flex: 1,
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;