import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

const DottedText = ({ text }) => {
  return (
    <div className="pixelated-text">
      {text.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#202020] to-transparent opacity-30 blur-xl"
          animate={{ x: [0, 10, 0], y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#252525] to-transparent opacity-20 blur-xl"
          animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* TOP BAR — FIXED DIVIDER */}
      <div
        className="absolute top-0 left-0 right-0 bg-primary bg-opacity-50
                   flex justify-between items-center px-6 py-1"
        style={{
          borderBottom: "0.5px solid var(--divider)",
        }}
      >
        <div className="font-mono text-xs text-muted">
          {formatTime(currentTime)} - {formatDate(currentTime)}
        </div>
        <div className="font-mono text-xs text-muted">~Ritika Kumari</div>
      </div>

      <div className="container-custom">
        {/* Avatar */}
        <div className="hidden md:block absolute top-1/2 right-20 lg:right-32 -translate-y-1/2 z-10">
          <Avatar />
        </div>

        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants} className="mb-4">
            <div className="inline-block w-12 h-[1px] bg-muted mr-4 align-middle" />
            <span className="text-muted text-sm font-mono">PORTFOLIO</span>
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <div className="mb-2 font-mono text-sm tracking-wider text-muted">
              HELLO, I'M
            </div>
            <div className="nothing-headline font-mono tracking-wide">
              <DottedText text="RITIKA KUMARI" />
            </div>
            <div className="mt-3 text-gradient">
              Cloud • Network • DevOps Engineer
            </div>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-muted text-lg md:text-xl mb-10 max-w-xl"
          >
            Designing, automating, and securing scalable cloud and network
            infrastructure with a strong focus on reliability and security.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
