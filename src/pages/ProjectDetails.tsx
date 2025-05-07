import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { projectsData } from "../data/projectsData";
import Seo from "../components/SEO";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData[id as keyof typeof projectsData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${project.title} - Zimcrest Technologies`}
        description={project.fullDescription}
        image={project.image}
      />
      <div className="flex flex-col items-center justify-start w-full min-h-screen gap-20 px-4 bg-white">
        {/* Hero Section */}
        <section className="w-full pt-32">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-[500px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={crypto.randomUUID()}
                        className="px-3 py-1 text-xs text-white rounded-full sm:text-sm bg-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    {project.title}
                  </h1>
                  <p className="max-w-3xl text-sm text-gray-200 sm:text-base md:text-xl">
                    {project.fullDescription}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-2xl font-bold md:text-3xl gradient-text">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={crypto.randomUUID()}
                      className="flex items-center p-4 space-x-3 bg-gray-100 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="sm:size-7 size-5 text-primary-600" />
                      <span className="text-base text-black sm:text-lg">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-8 text-2xl font-bold md:text-3xl gradient-text">
                  Technologies Used
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={crypto.randomUUID()}
                      className="p-4 text-base text-center bg-gray-100 rounded-lg md:text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-8 py-16 bg-gray-100 rounded-lg max-w-[1200px]">
          <div className="container-custom">
            <h2 className="mb-12 text-2xl font-bold text-center sm:text-3xl gradient-text">
              Project Results
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result, index) => (
                <motion.div
                  key={crypto.randomUUID()}
                  className="p-6 bg-white shadow-sm rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <p className="font-medium text-gray-800">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              className="p-8 text-center text-white sm:p-12 bg-gradient-to-br from-primary-600 to-indigo-600 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-8 text-base italic md:text-2xl">
                "{project.testimonial.content}"
              </p>
              <p className="font-semibold">{project.testimonial.author}</p>
              <p className="text-primary-200">{project.testimonial.role}</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold">
                Ready to Start Your Project?
              </h2>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/consultation")}
              >
                <span className="flex items-center">
                  Schedule a Consultation
                  <ExternalLink className="w-5 h-5 ml-2" />
                </span>
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
