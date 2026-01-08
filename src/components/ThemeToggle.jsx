import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="font-mono text-xs px-3 py-1 border border-muted
                 text-muted hover:text-accent transition"
    >
      {dark ? "LIGHT MODE" : "DARK MODE"}
    </button>
  );
}

export default ThemeToggle;
