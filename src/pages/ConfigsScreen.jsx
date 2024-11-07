import { useAuth } from "contexts/AuthContext";
import { useState, useEffect } from "react";

const ConfigsScreen = () => {
  const { logout } = useAuth();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'synthwave';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "synthwave",
    "retro",
    "cyberpunk",
    "luxury",
    "dracula",
    "night"
  ];

  const handleLogout = async () => {
    await logout();
  };

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-col space-y-4">
      <button className="btn btn-outline" onClick={handleLogout}>
        Logout
      </button>

      <select
        className="select select-bordered w-full max-w-xs"
        value={theme}
        onChange={handleThemeChange}
      >
        <option disabled>Select a theme</option>
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConfigsScreen;
