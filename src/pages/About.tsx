import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/SEO";
import { values, whatwedo } from "../data/aboutData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/zimcrest.png";
import { useEffect } from "react";

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
      <section className="relative flex flex-col items-center justify-start w-full gap-4 px-5 pt-32 pb-10 sm:px-8">
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
        <p className="px-4 py-2 text-xs font-medium text-white bg-gray-500 rounded-full">
          About Zimcrest
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium text-black w-full max-w-[600px] text-center">
          Empowering Businesses Through Innovative Software Solutions
        </h1>
        <p className="md:text-sm text-xs font-normal text-black w-full max-w-[600px] text-center">
          At Zimcrest, we are dedicated to transforming ideas into impactful
          digital solutions. As a leading technology company, we specialize in
          delivering custom software development services that cater to the
          unique needs of businesses across various industries.
        </p>
        <div className="w-full max-w-[700px] aspect-video bg-black/20 backdrop-blur-md rounded-2xl flex justify-center items-center">
          <motion.img
            src={logo}
            alt="logo"
            className="w-[40%] aspect-[5/4]"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 70 }}
          />
        </div>
        <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-3 mt-10">
          <h4 className="text-xl font-medium text-gray-700">What we do?</h4>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 place-content-start">
            {whatwedo.map((content, index) => (
              <motion.div
                className="flex flex-col items-center justify-start w-full gap-3 px-3 py-6 text-center bg-gray-100 rounded-lg"
                key={content.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <p className="text-base font-medium">{content.heading}</p>
                <p className="text-sm font-normal">{content.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[600px] flex flex-col justify-start items-start gap-3 mt-10">
          <p className="text-xl font-medium text-black">Our Mission</p>
          <p className="text-base font-normal text-black">
            To empower businesses by providing innovative and reliable software
            solutions that enhance operational efficiency and foster growth.
          </p>
        </div>
        <div className="w-full max-w-[600px] flex flex-col justify-start items-start gap-3 mt-10">
          <p className="text-xl font-medium text-black">Our Vision</p>
          <p className="text-base font-normal text-black">
            To be recognized as a trusted technology partner, delivering
            exceptional digital solutions that make a meaningful impact on
            businesses worldwide.
          </p>
        </div>
        <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-3 mt-10 mb-24">
          <h4 className="text-xl font-medium text-gray-700">Our Core Values</h4>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 place-content-start">
            {values.map((content, index) => (
              <motion.div
                className="flex flex-col items-center justify-start w-full gap-3 px-3 py-6 text-center bg-gray-100 rounded-lg"
                key={content.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <p className="text-base font-medium">{content.heading}</p>
                <p className="text-sm font-normal">{content.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
