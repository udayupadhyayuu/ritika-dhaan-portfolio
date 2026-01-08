import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Projects", "Skills", "Education", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism-no-border py-3" : "bg-transparent py-6"
      }`}
    >
      {/* MAIN HEADER (ALIGNMENT UNCHANGED) */}
      <div className="container-custom relative flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <div className="w-[2px] h-6 bg-light mr-2" />
          <span className="font-mono text-lg tracking-wider">RK</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-light transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden text-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-secondary py-4 px-6 glassmorphism-no-border md:hidden"
            >
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* THEME BUTTON — ABSOLUTE (NO LAYOUT SHIFT) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <ThemeButton />
      </div>
    </motion.header>
  );
};

export default Header;
