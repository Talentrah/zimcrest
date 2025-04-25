import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Laptop,
  Users,
  Cpu,
  Blocks,
  Gem,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Star,
  ArrowUpCircle,
  Calendar,
} from "lucide-react";
import WhatsAppLogo from "../components/WhatsAppLogo";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";
import Seo from "../components/SEO";
import { Navbar } from "../components/Navbar";
import { whatWeDoServices } from "../data/whatwedo";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/2349059988298?text=Hi, I'm interested in your services.`,
      "_blank"
    );
  };

  const openCalendar = () => {
    window.open("https://calendar.app.google/5x5fCPbcmRxBkMCm6", "_blank");
  };

  const FadeInSection = ({
    children,
    className = "",
  }: {
    children: any;
    className: any;
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.4,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Seo />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <Navbar />

        {/* Enhanced Hero Section */}
        <section className="relative flex items-center min-h-screen">
          {/* Background Pattern */}
          <div className="absolute inset-0 hero-pattern" />

          {/* Animated Glow */}
          <div className="absolute inset-0 hero-glow animate-pulse-slow" />

          {/* Floating Elements */}
          <motion.div
            className="absolute w-20 h-20 bg-purple-200 top-1/4 left-10 opacity-20"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-32 h-32 bg-indigo-200 bottom-1/4 right-10 opacity-20"
            animate={{
              y: [0, 40, 0],
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 pt-32 pb-20 md:py-20 container-custom">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Content */}
              <div className="flex flex-col items-center justify-start space-y-8 text-center lg:items-start lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1
                    className="text-3xl font-bold leading-tight md:text-5xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Transforming Ideas into
                    <motion.span
                      className="block gradient-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Digital Reality
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="mt-6 text-base leading-relaxed text-gray-800 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    We craft innovative software solutions that empower
                    businesses to thrive in the digital age. From concept to
                    deployment, we're your trusted technology partner.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-6 mx-auto mt-8 lg:mx-0 w-fit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.button
                      className="relative flex items-center overflow-hidden btn-primary group"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openCalendar}
                    >
                      <span className="relative z-10 flex items-center text-sm md:text-base">
                        <Calendar className="mr-2 md:size-5 size-4" />
                        Book a 30-min Call with our CEO
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white opacity-20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl"
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

                <motion.img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Transformation"
                  className="relative shadow-2xl rounded-2xl img-hover"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Stats Card */}
                <motion.div
                  className="absolute -bottom-8 md:-left-8 -left-2 hero-card"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary-100">
                      <CheckCircle2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Trusted By</p>
                      <p className="text-sm text-gray-600">500+ Companies</p>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute -top-10 -right-4 hero-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Star className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p className="text-sm font-medium">10+ Years Experience</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        {/* What We Do Section */}
        <section id="what-we-do" className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="mb-6 text-3xl font-semibold leading-snug md:text-4xl gradient-text">
                What We Do
              </h2>
              <p className="text-base text-gray-600 md:text-xl">
                We help entrepreneurs and business leaders build and launch
                innovative custom software solutions to the market across a
                range of verticals & industries. We can help you turn your
                vision into a successful product together, whether it's in the
                form of a Minimum Viable Product, UX/UI services, full product
                custom software development or help to scale your company.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whatWeDoServices.map((service) => (
                <FadeInSection className={"w-full h-full"} key={service.title}>
                  <button
                    className="w-full h-full p-5 transition-all duration-700 bg-white outline-none cursor-pointer md:p-8 rounded-2xl shadow-soft hover:shadow-lg group hover:-translate-y-2"
                    onClick={() => navigate(`/services/${service.id}`)}
                  >
                    <div className="mb-6 text-primary-600 w-fit group-hover:scale-105 group-hover:rotate-[360deg] transition-all duration-500">
                      {<service.icon className="md:size-12 size-8" />}
                    </div>
                    <h3 className="mb-4 text-lg font-bold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {service.description}
                    </p>
                    <div className="flex items-center mt-4 text-sm transition-all duration-300 text-primary-600 md:text-base group-hover:translate-x-4">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </button>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid md:gap-8 gap-2 md:grid-cols-4 md:max-w-full max-w-[400px] mx-auto">
              {[
                { number: "500+", label: "Clients Worldwide" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "150+", label: "Team Members" },
                { number: "10+ Years", label: "Experience" },
              ].map((stat, index) => (
                <FadeInSection className={""} key={stat.number}>
                  <div className="p-6 text-center cursor-default bg-primary-500 rounded-xl card-hover hover:scale-[1.01] transition-all duration-300">
                    <motion.p
                      className="mb-2 text-2xl font-bold text-white md:text-4xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {stat.number}
                    </motion.p>
                    <motion.p
                      className="text-sm text-white md:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="solutions" className="bg-white section-padding">
          <div className="container-custom">
            <FadeInSection className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="mb-6 text-3xl font-semibold leading-snug md:text-4xl gradient-text">
                Comprehensive Solutions
              </h2>
              <p className="text-base text-gray-600 md:text-xl">
                We deliver end-to-end software solutions that drive business
                growth and innovation.
              </p>
            </FadeInSection>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: <Laptop className="md:size-8 size-5" />,
                  title: "Custom Development",
                  description:
                    "Tailored software solutions designed to meet your unique business requirements.",
                },
                {
                  icon: <Cpu className="md:size-8 size-5" />,
                  title: "Enterprise Solutions",
                  description:
                    "Scalable applications that streamline operations and boost productivity.",
                },
                {
                  icon: <Globe2 className="md:size-8 size-5" />,
                  title: "Digital Transformation",
                  description:
                    "Strategic solutions to modernize your business for the digital age.",
                },
              ].map((service) => (
                <FadeInSection className={"w-full h-full"} key={service.title}>
                  <motion.div
                    className="w-full h-full feature-card group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div className="text-primary-600 w-fit group-hover:rotate-[360deg] duration-500 transition-all ease-in-out">
                      {service.icon}
                    </motion.div>
                    <h3 className="mt-6 mb-4 text-lg font-bold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {service.description}
                    </p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="section-padding bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container-custom">
            <FadeInSection className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="mb-6 text-3xl font-semibold leading-snug md:text-4xl gradient-text">
                Our Development Process
              </h2>
              <p className="text-base text-gray-600 md:text-xl">
                A structured approach to delivering exceptional software
                solutions.
              </p>
            </FadeInSection>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  icon: <Users className="md:size-8 size-6" />,
                  title: "Discovery",
                  description: "Understanding your needs and objectives",
                },
                {
                  icon: <Blocks className="md:size-8 size-6" />,
                  title: "Planning",
                  description: "Detailed roadmap and architecture design",
                },
                {
                  icon: <Cpu className="md:size-8 size-6" />,
                  title: "Development",
                  description: "Agile development with regular updates",
                },
                {
                  icon: <Gem className="md:size-8 size-6" />,
                  title: "Delivery",
                  description: "Testing, deployment, and maintenance",
                },
              ].map((step) => (
                <FadeInSection className={""} key={step.title}>
                  <div className="text-center transition-all duration-300 ease-linear group hover:-translate-y-2">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 group-hover:scale-[1.05] group-hover:rotate-[360deg] transition-all duration-300 ease-in-out">
                      <div className="text-primary-600">{step.icon}</div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold md:mb-4 md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-white section-padding">
          <div className="container-custom">
            <FadeInSection className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="mb-6 text-3xl font-semibold leading-snug md:text-4xl gradient-text">
                Client Testimonials
              </h2>
              <p className="text-base text-gray-600 md:text-xl">
                Don't just take our word for it - hear what our clients have to
                say.
              </p>
            </FadeInSection>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CTO, TechStart Inc",
                  content:
                    "Zimcrest delivered our project on time and exceeded our expectations. Their team's expertise and communication were outstanding.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Founder, EcoTrade",
                  content:
                    "Working with Zimcrest was a game-changer for our business. They transformed our vision into reality with exceptional attention to detail.",
                  rating: 5,
                },
                {
                  name: "Emma Davis",
                  role: "Product Manager, FinFlow",
                  content:
                    "The team at Zimcrest is highly professional and skilled. They provided innovative solutions to our complex requirements.",
                  rating: 5,
                },
              ].map((testimonial) => (
                <FadeInSection
                  className={"w-full h-full"}
                  key={testimonial.name}
                >
                  <div className="md:p-8 p-4 bg-gray-100 rounded-2xl card-hover hover:scale-[1.05] transition-all duration-300 w-full h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={crypto.randomUUID()}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="text-yellow-400 fill-current md:size-5 size-4" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="mb-6 text-sm text-gray-600 md:text-base">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeInSection className={""}>
              <motion.div
                className="p-6 sm:p-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl md:p-16"
                whileHover={{ scale: 1.02 }}
              >
                <div className="max-w-3xl mx-auto text-center text-white">
                  <motion.h2
                    className="mb-6 text-2xl font-bold md:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Ready to Transform Your Business?
                  </motion.h2>
                  <motion.p
                    className="mb-8 text-base md:text-xl text-primary-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Let's discuss how we can help you achieve your digital
                    transformation goals.
                  </motion.p>
                  <motion.button
                    className="flex items-center px-4 py-4 mx-auto text-base font-medium transition duration-300 bg-white rounded-lg md:text-lg md:px-8 text-primary-600 hover:bg-primary-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openCalendar}
                  >
                    <Calendar className="md:size-5 size-4" />
                    Book a 30-min Call with our CEO
                  </motion.button>
                </div>
              </motion.div>
            </FadeInSection>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <motion.button
          className={`fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg ${
            showScrollTop ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="w-6 h-6" aria-hidden="true" />
        </motion.button>

        {/* WhatsApp Chat Button */}
        <motion.button
          className="fixed bottom-8 left-8 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
          onClick={openWhatsApp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Open WhatsApp chat"
        >
          <WhatsAppLogo />
        </motion.button>
      </div>
    </>
  );
}
