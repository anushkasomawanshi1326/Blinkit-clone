import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("blinkit-theme");
    return saved === "dark" || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--card-bg', '#2d2d2d');
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
      localStorage.setItem("blinkit-theme", "dark");
    } else {
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#333333');
      document.documentElement.style.setProperty('--card-bg', '#ffffff');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#333333';
      localStorage.setItem("blinkit-theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        padding: '8px 15px',
        background: isDark ? '#333' : '#f0f0f0',
        color: isDark ? '#fff' : '#333',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px'
      }}
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}