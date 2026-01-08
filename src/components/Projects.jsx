import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Enterprise Network Infrastructure – Hospitality & Healthcare",
      description:
        "Designed and deployed end-to-end network infrastructure for multiple hospitality and healthcare organizations. Planned network topology, configured routers and switches, implemented VLANs, and deployed secure Wi-Fi networks to support guests, staff, and critical systems with high availability and performance.",
      tech: [
        "Networking",
        "VLAN",
        "Routers",
        "Switches",
        "Wi-Fi",
        "TCP/IP",
        "Firewall",
      ],
      image: "/images/enterprise-network.png",
      highlights: [
        "Lemon Tree Hotel",
        "goSTOPS Hostels",
        "Jaypee Hotel",
        "The Metropolitan Hotel",
        "Max Hospitals",
      ],
    },
    {
      title:
        "Network Design & Deployment – Your Space Hostel Group (Pan India)",
      description:
        "Led the design and deployment of scalable network infrastructure for the Your Space Hostel Group across multiple locations in India. Implemented standardized network architecture to ensure consistent performance, secure connectivity, and centralized management across all properties.",
      tech: [
        "Network Design",
        "VLAN",
        "Wi-Fi Architecture",
        "IP Planning",
        "Network Security",
      ],
      image: "/images/yourspace-network.png",
      highlights: [
        "Pan-India network rollout",
        "Standardized network architecture",
        "Guest and staff network segmentation",
        "Improved uptime and connectivity reliability",
      ],
    },
    {
      title: "Linux Server Administration & Monitoring",
      description:
        "Managed Linux-based servers supporting internal applications and network services. Handled user access management, service monitoring, log analysis, and system troubleshooting to ensure continuous availability in production environments.",
      tech: [
        "Linux",
        "SSH",
        "User Management",
        "System Monitoring",
        "Shell Scripting",
      ],
      image: "/images/linux-admin.png",
      highlights: [
        "Configured and maintained production servers",
        "Handled access control and permissions",
        "Monitored system health and uptime",
        "Performed routine maintenance and backups",
      ],
    },
    {
      title: "Cloud Deployment on AWS (EC2)",
      description:
        "Deployed and managed cloud-based workloads on AWS EC2. Configured security groups, networking rules, and basic monitoring to support reliable and secure application hosting.",
      tech: ["AWS EC2", "Security Groups", "Linux", "CloudWatch", "Networking"],
      image: "/images/aws-ec2.png",
      highlights: [
        "Provisioned and managed EC2 instances",
        "Configured secure inbound and outbound access",
        "Enabled monitoring and alerts",
        "Ensured application availability",
      ],
    },
    {
      title: "Network Monitoring & Alert System",
      description:
        "Implemented a proactive network monitoring system using PRTG and Telegram bot integration. Automated alerts were sent via Telegram and email whenever network devices or critical servers went offline, reducing downtime and improving response times.",
      tech: [
        "PRTG",
        "Telegram Bot",
        "Email Notifications",
        "Network Monitoring",
        "Scripting",
      ],
      image: "/images/network-monitoring.png",
      highlights: [
        "Real-time offline detection for multiple sites",
        "Alerts via Telegram and email",
        "Custom scripts for automated monitoring",
        "Improved incident response time",
      ],
    },
    {
      title: "Access Point Controller Configuration & Wi-Fi Management",
      description:
        "Configured and managed enterprise Wi-Fi networks using Access Point controllers. Responsibilities included setting SSIDs, VLAN mapping, guest networks, bandwidth control, and security policies across multiple properties.",
      tech: [
        "Access Point Controller",
        "Wi-Fi Management",
        "VLAN",
        "Network Security",
        "Monitoring",
      ],
      image: "/images/ap-controller.png",
      highlights: [
        "Centralized AP management for multiple locations",
        "Guest and corporate network segmentation",
        "Implemented secure Wi-Fi authentication",
        "Optimized coverage and bandwidth allocation",
      ],
    },
  ];

  // Auto-change project every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 10000); // 10s
    return () => clearInterval(interval);
  }, []);

  // Handle swipe
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setActiveProject((prev) => (prev + 1) % projects.length);
    } else if (direction === "right") {
      setActiveProject(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
    }
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="mb-8 md:mb-12">
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project list */}
          <div className="hidden md:block md:col-span-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`border-l border-muted p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index
                    ? "bg-secondary bg-opacity-30 border-opacity-100"
                    : "border-opacity-20"
                }`}
                onClick={() => setActiveProject(index)}
              >
                <h3
                  className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}
                >
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </div>
            ))}
          </div>

          {/* Project details */}
          <div className="col-span-1 md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) handleSwipe("left");
                  if (info.offset.x > 50) handleSwipe("right");
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {projects[activeProject].title}
                </h3>

                {/* Smooth progress bar */}
                <motion.div className="h-1 bg-muted rounded mb-4">
                  <motion.div
                    key={activeProject}
                    className="h-1 bg-light rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 10, ease: "linear" }}
                  />
                </motion.div>

                <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <div className="mb-4 md:mb-6">
                  <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                    KEY HIGHLIGHTS
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {projects[activeProject].highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-light opacity-50 mt-1">→</span>
                        <span className="text-xs md:text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
