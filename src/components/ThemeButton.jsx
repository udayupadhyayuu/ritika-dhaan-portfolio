import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-checkbox"
        className="theme-checkbox"
        checked={dark}
        onChange={() => setDark(!dark)}
      />
      <label htmlFor="theme-checkbox" className="theme-label">
        <span className="icon moon">🌙</span>
        <span className="icon sun">☀</span>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeButton;
