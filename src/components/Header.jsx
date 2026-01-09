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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"; // block scroll
    } else {
      document.body.style.overflow = ""; // allow scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism-no-border h-20" : "bg-transparent h-20"
      }`}
    >
      {/* MAIN HEADER (ALIGNMENT UNCHANGED) */}
      <div className="container-custom relative flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <div className="w-[2px] h-6 bg-light mr-2" />
          <span className="font-mono text-lg tracking-wider">RU</span>
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
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
        absolute top-full left-0 right-0
        z-40
        bg-black/40
        backdrop-blur-lg
        md:hidden
      "
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-10 px-8 pb-10"
              >
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-lg font-medium block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
