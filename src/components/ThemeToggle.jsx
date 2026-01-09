import { useEffect, useState } from "react";

function ThemeToggle() {
  // 1️⃣ Default = light, unless user saved dark
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2️⃣ Apply theme + save choice
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="font-mono text-xs px-3 py-1 border border-muted
                 text-muted hover:text-accent transition"
    >
      {dark ? "LIGHT MODE" : "DARK MODE"}
    </button>
  );
}

export default ThemeToggle;
