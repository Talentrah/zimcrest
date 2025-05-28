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

const HireTalent: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');
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
  const API_BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : '';
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
        console.error('Server error:', errorData);
        alert("Something went wrong. Please try again.");
        return;
      }

      const result = await response.json();
      console.log('Success:', result);
      
      // Set success message
      setSuccessMessage("🎉 Thank you for your inquiry! Our team will contact you shortly.");

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

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error('Network error:', error);
      alert("A network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage('');
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
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg border-l-4 border-green-600 animate-pulse">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="font-medium">{successMessage}</span>
              </div>
            </div>
          </div>
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