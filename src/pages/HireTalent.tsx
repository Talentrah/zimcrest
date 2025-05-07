import { useState } from "react";
import { categories, faqs } from "../data/hireData";

export default function HireTalent() {
  const [formData, setFormData] = useState({
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
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Thank you for your inquiry! Our team will contact you shortly.");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-600 mix-blend-multiply"></div>
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20diverse%20tech%20team%20working%20in%20a%20modern%20office%20environment%20with%20blue%20lighting%2C%20showing%20collaboration%20and%20innovation%2C%20high%20quality%20professional%20photograph%20with%20soft%20lighting%20and%20modern%20aesthetic&width=1440&height=500&seq=1&orientation=landscape"
            alt="Tech professionals working together"
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="relative flex flex-col items-center justify-start w-full px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
            Find Your Next Tech Star
          </h1>
          <p className="max-w-xl mt-6 text-base text-center text-indigo-100 md:text-xl">
            Access a pool of highly skilled tech professionals ready to elevate
            your projects and drive innovation.
          </p>
          <div className="mt-10">
            <a
              href="#contact-form"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent cursor-pointer rounded-button hover:bg-indigo-50 whitespace-nowrap"
            >
              Contact Us
              <i className="ml-3 fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Value Proposition */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 md:text-4xl">
              Why Choose ZimcrestTech Talent
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
              We connect you with pre-vetted tech professionals who have been
              rigorously assessed for both technical skills and cultural fit.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-8 text-center rounded-lg bg-indigo-50">
                <div className="flex items-center justify-center w-8 h-8 mx-auto text-white rounded-md md:w-12 md:h-12 bg-primary-600">
                  <i className="text-base md:text-xl fas fa-check-circle"></i>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  Vetted Professionals
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  All our talents undergo rigorous technical assessments and
                  interviews to ensure top quality.
                </p>
              </div>
              <div className="p-8 text-center rounded-lg bg-indigo-50">
                <div className="flex items-center justify-center w-8 h-8 mx-auto text-white rounded-md md:w-12 md:h-12 bg-primary-600">
                  <i className="text-base md:text-xl fas fa-bolt"></i>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  Quick Matching
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Get matched with the right talent within days, not weeks or
                  months.
                </p>
              </div>
              <div className="p-8 text-center rounded-lg bg-indigo-50">
                <div className="flex items-center justify-center w-8 h-8 mx-auto text-white rounded-md md:w-12 md:h-12 bg-primary-600">
                  <i className="text-base md:text-xl fas fa-handshake"></i>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  Ongoing Support
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We provide continuous support throughout the engagement to
                  ensure success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Talent Categories */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
              Our Talent Categories
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We offer experts across all major technology domains to meet your
              specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div
                key={crypto.randomUUID()}
                className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-center w-8 h-8 mx-auto text-white rounded-md bg-primary-600 md:w-12 md:h-12">
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div id="contact-form" className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Request Tech Talent
            </h2>
            <p className="mt-4 text-lg text-center text-gray-500">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 mt-12 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="companySize"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Size
                </label>
                <div className="mt-1">
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Person Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="contactName"
                    id="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="contactEmail"
                    id="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contactPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="contactPhone"
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="talentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Required Talent
                </label>
                <div className="mt-1">
                  <select
                    id="talentType"
                    name="talentType"
                    value={formData.talentType}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select talent type</option>
                    <option value="Frontend">Frontend Developer</option>
                    <option value="Backend">Backend Developer</option>
                    <option value="FullStack">Full Stack Engineer</option>
                    <option value="UIUX">UI/UX Designer</option>
                    <option value="DataAnalyst">Data Analyst</option>
                    <option value="DigitalMarketing">Digital Marketer</option>
                    <option value="DevOps">Cloud/DevOps Engineer</option>
                    <option value="ProductManager">Product Manager</option>
                    <option value="ProjectManager">Project Manager</option>
                    <option value="BusinessAnalyst">Business Analyst</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>
                <div className="mt-1">
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Timeline
                </label>
                <div className="mt-1">
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="budgetRange"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget Range
                </label>
                <div className="mt-1">
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $5k">Under $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k-$25k">$10,000 - $25,000</option>
                    <option value="$25k-$50k">$25,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent shadow-sm cursor-pointer bg-primary-600 rounded-button hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="py-16 bg-indigo-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Hear from companies who have found their perfect tech match
              through ZimcrestTech.
            </p>
          </div>
          <div className="grid gap-4 mt-12 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                  <i className="text-base text-primary-600 md:text-xl fas fa-building"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    TechInnovate Inc.
                  </h4>
                  <p className="text-sm text-gray-500">Software Development</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "ZimcrestTech helped us find a senior full stack developer in
                just a week. The talent was exceptional and integrated
                seamlessly with our team."
              </p>
              <div className="flex mt-4 text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                  <i className="text-base text-primary-600 md:text-xl fas fa-chart-pie"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    DataViz Solutions
                  </h4>
                  <p className="text-sm text-gray-500">Data Analytics</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "We needed specialized data analysts for a time-sensitive
                project. ZimcrestTech delivered top-tier talent that exceeded
                our expectations."
              </p>
              <div className="flex mt-4 text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                  <i className="text-base text-primary-600 md:text-xl fas fa-shopping-cart"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    E-Commerce Plus
                  </h4>
                  <p className="text-sm text-gray-500">Online Retail</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "The UI/UX designer we hired through ZimcrestTech transformed
                our user experience, resulting in a 40% increase in conversion
                rates."
              </p>
              <div className="flex mt-4 text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find answers to common questions about our talent hiring process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={crypto.randomUUID()}
                  className="p-6 rounded-lg bg-gray-50"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
