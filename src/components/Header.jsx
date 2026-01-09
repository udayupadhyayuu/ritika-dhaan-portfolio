import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 shadow-sm ${
        scrolled ? "glassmorphism-no-border" : "bg-transparent"
      }`}
      style={{ paddingTop: "10px" }} // height of your top bar
    >
      {/* ================= HEADER ROW ================= */}
      <div className="h-20 flex items-center px-6 md:px-8 lg:px-12">
        {/* LEFT: RU */}
        <div className="flex items-center">
          <div className="w-[2px] h-6 bg-light mr-2" />
          <span className="font-mono text-lg tracking-wider">RU</span>
        </div>

        {/* FLEX SPACER */}
        <div className="flex-1" />

        {/* RIGHT: NAV / THEME / MOBILE BUTTON */}
        <div className="flex items-center gap-6">
          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
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

          {/* THEME BUTTON */}
          <ThemeButton />

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-light text-xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 z-40 bg-black/40 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-10 px-8 pb-10"
            >
              <div className="flex justify-end mb-6">
                <button
                  aria-label="Close menu"
                  className="text-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

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
    </motion.header>
  );
};

export default Header;
