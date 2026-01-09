import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "",
      period: "2023 – Present",
    },
    {
      institution: "Jetking",
      degree: "Diploma in Cloud Computing",
      field: "",
      period: "2022 – 2023",
    },
    {
      institution: "JD Tytler School",
      degree: "12th CBSE",
      field: "",
      period: "2022",
    },
  ];

  const achievements = [
    "Project Lead – Hotel Wi-Fi Network Deployment using MikroTik routing, VLAN segmentation, captive portal, and bandwidth management",
    "OCNA (Omada Certified Network Associate) – TP-Link Omada",
    "Hands-on experience with MikroTik RouterOS: VLANs, NAT, Firewall Rules, QoS, and PPPoE",
    "Configured and managed enterprise Wi-Fi solutions using TP-Link Omada Controller, Ruckus APs, and managed switches",
    "Configured and supported firewall environments including Fortinet and Sophos",
    "Provided on-site and remote technical support using RDP, AnyDesk, and TeamViewer for enterprise clients",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">BACKGROUND</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Background & Education
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 border border-muted border-opacity-20 bg-primary bg-opacity-30 p-6 rounded-lg"
        >
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <div className="w-4 h-4 border border-light mr-3"></div>
            Professional Experience
          </h3>

          <div className="pl-6 border-l-2 border-muted border-opacity-30 relative">
            <div className="absolute w-3 h-3 bg-secondary border border-light rounded-full -left-[7px] top-1"></div>

            <h4 className="text-lg font-medium">DevOps & Network Engineer</h4>

            <p className="text-muted">
              Securelynkx Networks —{" "}
              <span className="font-mono text-sm">3 Year</span>
            </p>

            <ul className="mt-3 space-y-2 text-sm text-muted max-w-2xl">
              <li>
                • DevOps Engineer with a strong networking-first foundation
              </li>
              <li>
                • Working on cloud infrastructure, automation, and monitoring
              </li>
              <li>
                • Enterprise networking, wireless deployments, and security
                solutions
              </li>
              <li>
                • Hands-on with MikroTik, Omada, firewalls, and production
                networks
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="border-l-2 border-muted border-opacity-30 pl-6 relative"
                  variants={itemVariants}
                >
                  <div className="absolute w-3 h-3 bg-secondary border border-light rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-medium mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-muted mb-1">
                    {edu.degree} {edu.field && `- ${edu.field}`}
                  </p>
                  {edu.period && (
                    <p className="text-sm font-mono text-light opacity-70">
                      {edu.period}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Achievements
            </h3>

            <ul className="space-y-4">
              {achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-light mt-1 mr-2 opacity-60">⁕</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 p-4 border border-muted border-opacity-20 bg-primary bg-opacity-30"
              variants={itemVariants}
            >
              <h4 className="text-sm font-medium mb-2">Continuous Learning</h4>
              <p className="text-muted text-sm">
                Always exploring new technologies and participating in
                hackathons to expand my knowledge and practical experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
