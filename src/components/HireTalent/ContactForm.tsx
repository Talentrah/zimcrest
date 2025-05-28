import React from 'react';
import { FormData } from "../../types/hire.types";

interface ContactFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   isSubmitting?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, handleChange, handleSubmit, isSubmitting }) => {
  return (
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter company name here..."
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter location here..."
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter contact name here..."
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter contact email here..."
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter phone number here..."
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Write here..."
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block w-full px-4 py-3 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                 disabled={isSubmitting}
  className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent shadow-sm cursor-pointer bg-primary-600 rounded-button hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap ${
    isSubmitting
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
  } text-white`}
                
              >
               

                {isSubmitting ? (
    <div className="flex items-center justify-center">
      Sending...
    </div>
  ) : (
    'Submit Request'
  )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;