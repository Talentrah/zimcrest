import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";
import { servicesData } from "../data/servicesData";
import Seo from "../components/SEO";
import logo from "../assets/zimcrest.png";

export default function ServicesDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = servicesData[id as keyof typeof servicesData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Service not found
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
        title={`${service.title} - Zimcrest Technologies`}
        description={service.fullDescription}
        image={service.image}
      />
      <div className="flex flex-col items-center justify-start w-full min-h-screen gap-20 px-4 bg-white">
        {/* Header */}
        <header className="fixed left-0 z-50 flex items-center justify-center w-full px-4 top-4">
          <nav className="max-w-7xl w-full mx-auto rounded-[28px] shadow-sm border border-gray-300 backdrop-blur-lg bg-white/90">
            <div className="flex items-center justify-between px-6 py-4 sm:py-6 lg:px-8">
              <motion.button
                onClick={() => navigate("/")}
                className="flex items-center text-sm text-black transition-colors outline-none hover:text-primary-600 md:text-base"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="mr-2 md:size-5 size-4" />
                Back to Services
              </motion.button>
              <img src={logo} alt="logo" className="w-10 aspect-[5/4]" />
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="w-full pt-32">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="mb-4 text-2xl font-bold text-white sm:text-4xl md:text-5xl">
                    {service.title}
                  </h1>
                  <p className="max-w-3xl text-sm text-gray-200 sm:text-base md:text-xl">
                    {service.fullDescription}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-2xl font-bold md:text-3xl gradient-text">
                  Key Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
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
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-8 text-2xl font-bold md:text-3xl gradient-text">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={crypto.randomUUID()}
                      className="p-4 bg-gray-100 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center text-base sm:text-lg">
                        <span className="flex items-center justify-center mr-3 font-semibold rounded-full size-8 bg-primary-100 text-primary-600">
                          {index + 1}
                        </span>
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="w-full px-8 py-16 bg-gray-100 rounded-lg max-w-[1200px]">
          <div className="">
            <h2 className="mb-12 text-2xl font-bold text-center md:-3xl gradient-text">
              What You Get
            </h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {service.deliverables.map((deliverable, index) => (
                <motion.div
                  key={crypto.randomUUID()}
                  className="p-6 bg-white shadow-sm rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <p className="text-sm font-medium text-gray-800 sm:text-base md:text-lg">
                    {deliverable}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="mb-8 text-3xl font-bold">Ready to Get Started?</h2>
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

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
