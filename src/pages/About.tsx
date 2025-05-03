import { ArrowLeft, Sparkles } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/SEO";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/zimcrest.png";
import { useEffect } from "react";
import { values, whatwedo } from "../data/aboutData";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title={"About Us - Zimcrest Technologies"}
        description="At Zimcrest, we are dedicated to transforming ideas into impactful
          digital solutions. As a leading technology company, we specialize in
          delivering custom software development services that cater to the
          unique needs of businesses across various industries."
      />
      <section className="relative flex flex-col items-center justify-start w-full gap-4 p-0 pb-10">
        <header className="fixed left-0 z-50 flex items-center justify-center w-full px-4 top-4">
          <nav className="max-w-7xl w-full mx-auto rounded-[28px] shadow-sm border border-gray-300 backdrop-blur-lg bg-white/90">
            <div className="flex items-center justify-between px-6 py-4 sm:py-6 lg:px-8">
              <motion.button
                onClick={() => navigate("/")}
                className="flex items-center text-sm text-black transition-colors outline-none hover:text-primary-600 md:text-base"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="mr-2 md:size-5 size-4" />
                Back to home
              </motion.button>
              <img src={logo} alt="logo" className="w-10 aspect-[5/4]" />
            </div>
          </nav>
        </header>
        <section className="flex flex-col items-center justify-start w-full gap-4 px-5 pt-32 pb-10 bg-gradient-radial from-primary-800 to-indigo-800 md:px-8">
          <div className="flex items-center justify-center w-auto gap-2 px-4 py-2 text-sm font-medium text-white rounded-full md:px-6 md:py-4 md:text-base bg-gray-400/50">
            <Sparkles className="stroke-primary-900 md:size-5 size-4" />
            <p>Innovating since 2025</p>
          </div>
          <h1 className="md:text-5xl text-3xl font-semibold text-white text-center md:max-w-[36rem] max-w-[26rem] leading-tight">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="md:text-xl text-base font-medium text-white text-center max-w-[40rem] leading-snug">
            We're a team of passionate technologists dedicated to helping
            businesses thrive in the digital age through innovative solutions
            and exceptional service.
          </p>
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-8 max-w-[1100px] mx-auto px-5 mt-10">
          <div className="flex flex-col items-start justify-start w-full gap-4">
            <p className="text-3xl font-semibold text-black">Our Mission</p>
            <p className="text-sm md:text-base">
              At Zimcrest Tech, we believe that technology should empower, not
              complicate. Our mission is to provide innovative, scalable, and
              reliable technology solutions that help businesses thrive in the
              digital age.
            </p>
            <p className="text-sm md:text-base">
              We envision a future where every business, regardless of size, has
              access to cutting-edge technology that drives growth, increases
              efficiency, and creates exceptional experiences for their
              customers.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-4">
            <p className="text-3xl font-semibold text-black">What we do</p>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 place-content-start">
              {whatwedo.map((content, index) => (
                <motion.div
                  className="flex items-center justify-start w-full gap-5 p-4 bg-gray-100 md:gap-8 rounded-2xl"
                  key={content.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <img
                      src={content.image}
                      alt={content.heading}
                      className="size-6"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-lg font-semibold base:text-xl">
                      {content.heading}
                    </p>
                    <p className="text-sm md:text-base">{content.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-4">
            <p className="text-3xl font-semibold text-black">Core Values</p>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 place-content-start">
              {values.map((content, index) => (
                <motion.div
                  className="flex flex-col items-start justify-start w-full gap-5 p-4 bg-gray-100 md:gap-8 rounded-2xl"
                  key={content.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                    <img
                      src={content.image}
                      alt={content.heading}
                      className="size-5"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-lg font-semibold base:text-xl">
                      {content.heading}
                    </p>
                    <p className="text-sm md:text-base">{content.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full px-4 py-12 mt-10 md:px-8 bg-primary-200">
          <div className="w-full max-w-[1300px] mx-auto flex flex-col justify-start items-center text-center gap-4">
            <h3 className="text-3xl font-semibold">Get In Touch</h3>
            <p className="text-base font-medium w-full max-w-[600px]">
              Interested in working with us? Have questions about our services?
              We'd love to hear from you. Reach out using any of the methods
              below.
            </p>
            <div className="grid w-full grid-cols-1 gap-4 mt-8 sm:gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center justify-start w-full gap-4 px-5 py-6 bg-gray-100 sm:py-10 rounded-xl">
                <p className="text-xl font-semibold sm:text-2xl">Email Us</p>
                <Link
                  to={"mailto:info@zimcresttech.com"}
                  className="text-sm tsm:ext-base"
                >
                  info@zimcresttech.com
                </Link>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-4 px-5 py-6 bg-gray-100 sm:py-10 rounded-xl">
                <p className="text-xl font-semibold sm:text-2xl">Call Us</p>
                <Link to={"tel:+15551234567"} className="text-sm tsm:ext-base">
                  +15551234567
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
