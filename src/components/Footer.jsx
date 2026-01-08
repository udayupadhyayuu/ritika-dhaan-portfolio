import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary py-12"
      style={{ borderTop: "0.5px solid var(--divider)" }}
    >
      <div className="container-custom">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center mb-2">
              <div className="w-[2px] h-6 bg-light mr-2" />
              <span className="font-mono text-lg tracking-wider">
                Ritika Kumari
              </span>
            </div>
            <p className="text-muted text-sm">
              Tech enthusiast building innovative solutions
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0"
          >
            {["Home", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted hover:text-light transition-colors mb-2 md:mb-0"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4 text-light"
          >
            {/* GitHub */}
            <a
              href="https://github.com/ritikakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-light/20 transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ritika-kumari/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-light/20 transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.217 11.846 12.934 13.291 12.934 14.785V20.452H9.38V9H12.764V10.561H12.813C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.339 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.339 3.305C6.482 3.305 7.404 4.23 7.404 5.368C7.404 6.507 6.483 7.433 5.339 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/ritika_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-light/20 transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.099 19.77H18.979L7.055 4.126H5.028L17.099 19.77Z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted"
          style={{ borderTop: "0.5px solid var(--divider)" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 md:mb-0"
          >
            © {currentYear} Ritika Kumari. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Made by{" "}
            <a
              href="https://udayupadhyay.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light inline-flex items-center border-b border-transparent hover:border-light transition-colors"
            >
              Uday<span className="text-red-500 ml-1">❤️</span>
            </a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
