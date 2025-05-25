
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
  ? 'http://localhost:3000' // Development server URL
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
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to send email:", response.status, errorData);
      alert("Something went wrong. Please try again.");
      return;
    }
    
    const result = await response.json();
    
     setSuccessMessage("🎉 Thank you for your inquiry! Our team will contact you shortly..");
    
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
    console.error("Error submitting form:", error);
    alert("A network error occurred. Please try again later.");
  }
};

useEffect(() => {
  if (successMessage) {
    const timeout = setTimeout(() => {
      setSuccessMessage('');
    }, 5000); 
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
        <ValueProposition hireServices={hireServices} />
        <TalentCategories categories={categories} />
        {successMessage && (
  <div className="mb-6 sm:col-span-2 p-4 bg-green-100 border border-green-300 text-green-800 rounded-md text-center transition-opacity duration-300">
    {successMessage}
  </div>
)}
        <ContactForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Testimonials />
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default HireTalent;