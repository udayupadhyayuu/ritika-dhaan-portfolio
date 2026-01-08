import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Cloud Platforms",
      skills: [
        "AWS",
        "EC2",
        "S3",
        "VPC",
        "IAM",
        "CloudWatch",
        "Lambda",
        "RDS",
        "Route 53",
        "Elastic Load Balancer (ELB)",
        "CloudFront",
        "ECS",
        "EKS",
      ],
    },
    {
      name: "DevOps & Automation",
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD",
        "GitHub Actions",
        "Jenkins",
        "Ansible",
        "Helm",
        "Packer",
        "ArgoCD",
        "GitLab CI/CD",
        "Prometheus Alerting",
      ],
    },
    {
      name: "Networking & Security",
      skills: [
        "TCP/IP",
        "DNS",
        "HTTP/HTTPS",
        "Load Balancing",
        "Firewalls",
        "VPN",
        "Network Monitoring",
        "IP Addressing & Subnetting",
        "VLAN",
        "Routing Protocols (OSPF, BGP)",
        "Wi-Fi Management",
        "Network Security Policies",
        "IDS/IPS",
      ],
    },
    {
      name: "Monitoring & Tools",
      skills: [
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "Linux",
        "Git",
        "Shell Scripting",
        "PRTG",
        "Nagios",
        "Zabbix",
        "CloudWatch Metrics",
        "Splunk",
        "Logstash",
        "Kibana",
      ],
    },
    {
      name: "Scripting & APIs",
      skills: [
        "Python",
        "Bash",
        "REST APIs",
        "JSON",
        "YAML",
        "PowerShell",
        "API Automation",
        "Shell Scripts for DevOps Tasks",
        "Python Requests & Flask",
        "Terraform Modules",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Infrastructure & DevOps Skills
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="border border-muted border-opacity-20 bg-primary bg-opacity-40 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted border-opacity-20">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="
    text-sm px-3 py-1 rounded-sm cursor-pointer
    bg-secondary
    transition-colors duration-200
    hover:bg-accent hover:text-primary
  "
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 border border-muted border-opacity-20 bg-primary bg-opacity-40 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Ready to collaborate?</h3>
            <p className="text-muted">
              Let's discuss how my skills can help your project.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary whitespace-nowrap flex items-center gap-2"
          >
            Get in Touch <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
