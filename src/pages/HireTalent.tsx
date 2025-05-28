import { useEffect, useState } from "react";
import { categories, faqs, hireServices } from "../data/hireData";
import Seo from "../components/SEO";
import HeroSection from "../components/HireTalent/HeroSection";
import ValueProposition from "../components/HireTalent/ValueProposition";
import TalentCategories from "../components/HireTalent/TalentCategories";
import ContactForm from "../components/HireTalent/ContactForm";
import Testimonials from "../components/HireTalent/Testimonials";
import FAQ from "../components/HireTalent/FAQ";
import { FormData } from "../types/hire.types";
import { X } from "lucide-react";

const HireTalent: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    companySize: "",
    location: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    talentType: "",
    projectDetails: "",
    timeline: "",
    budgetRange: "",
  });

  // API base URL for Express server
  const API_BASE_URL =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
  const apiUrl = `${API_BASE_URL}/api/hire-talent`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server error:", errorData);
        alert("Something went wrong. Please try again.");
        return;
      }

      const result = await response.json();
      console.log("Success:", result);

      // Set success message
      setSuccessMessage(
        "🎉 Thank you for your inquiry! Our team will contact you shortly."
      );

      // Reset form
      setFormData({
        companyName: "",
        companySize: "",
        location: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        talentType: "",
        projectDetails: "",
        timeline: "",
        budgetRange: "",
      });
    } catch (error) {
      console.error("Network error:", error);
      alert("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 8000); // Increased to 8 seconds for better UX
      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  return (
    <>
      <Seo
        title={"Hire Talent - Zimcrest Technologies"}
        description="At Zimcrest, we're dedicated to transforming ideas into impactful digital solutions. As a leading technology company, we specialize in building exceptional teams by hiring top-tier talent and delivering custom software development services that cater to the unique needs of businesses across various industries."
      />
      <div className="min-h-screen bg-gray-50">
        <HeroSection />

        {/* Success Message - Fixed positioning at top */}
        {successMessage && (
          <section className="fixed top-0 left-0 z-50 flex items-center justify-center w-full min-h-screen bg-white/30 backdrop-blur-sm">
            <div className="p-4 mb-6 text-center text-green-800 transition-opacity duration-300 bg-green-100 border border-green-300 rounded-md sm:col-span-2 md:w-full w-[80%] max-w-[700px] h-[300px] flex justify-center items-center relative">
              <p>{successMessage}</p>
              <X
                className="absolute text-black cursor-pointer size-6 top-4 right-4"
                onClick={() => setSuccessMessage("")}
              />
            </div>
          </section>
        )}

        <ValueProposition hireServices={hireServices} />
        <TalentCategories categories={categories} />

        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />

        <Testimonials />
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default HireTalent;
