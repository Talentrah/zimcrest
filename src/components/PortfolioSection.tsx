import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "fintech",
    title: "FinTech Platform",
    description:
      "A comprehensive financial management system with real-time analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Fintech", "Dashboard", "Analytics"],
    category: "FINTECH",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solution",
    description: "Custom-built marketplace with advanced inventory management",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["E-commerce", "Marketplace", "Inventory"],
    category: "E-COMMERCE",
  },
  {
    id: "healthcare",
    title: "Healthcare Management System",
    description:
      "Integrated platform for patient care and medical record management",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthcare", "EMR", "Patient Care"],
    category: "HEALTHCARE",
  },
  {
    id: "realestate",
    title: "Real Estate Platform",
    description:
      "Advanced property management and listing platform with virtual tours",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["Real Estate", "Virtual Tours", "Property Management"],
    category: "REAL ESTATE",
  },
];

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="portfolio"
      className="overflow-hidden section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        <motion.div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-snug md:text-4xl gradient-text">
            Featured Projects
          </h2>
          <p className="text-base text-gray-600 md:text-xl">
            Explore some of our successful projects across different industries.
          </p>
        </motion.div>

        <div className="space-y-5 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start gap-8 lg:gap-16`}
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-3/5">
                  <motion.div
                    className="absolute opacity-50 -inset-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl"
                    animate={{
                      scale: [1, 1.02, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="relative rounded-2xl overflow-hidden aspect-[16/9]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full pt-2 space-y-6 lg:w-2/5">
                  <div className="space-y-4">
                    <motion.span
                      className="block text-sm font-semibold text-primary-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {project.category}
                    </motion.span>
                    <motion.h3
                      className="text-2xl font-bold md:text-3xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-base text-gray-600 md:text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={crypto.randomUUID()}
                        className="px-4 py-1 text-sm font-medium rounded-full bg-primary-50 text-primary-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.button
                    className="flex items-center font-medium group text-primary-600 hover:text-primary-700"
                    onClick={() => navigate(`/project/${project.id}`)}
                    whileHover={{ x: 5 }}
                  >
                    See Case Study
                    <ArrowRight className="w-5 h-5 ml-2 transition transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute top-1/2 ${
                  index % 2 === 0 ? "-right-16" : "-left-16"
                } -translate-y-1/2 w-32 h-32 bg-primary-100/30 rounded-full blur-3xl`}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
