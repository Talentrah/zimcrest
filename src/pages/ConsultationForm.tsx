import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader, Send } from "lucide-react";

function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  // API base URL for Express server
  const API_BASE_URL = process.env.NODE_ENV === 'development' 
    ? '' // Use relative URLs in production (configure proxy in production)
    : 'http://localhost:3000'; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    setDebugInfo(null);

    try {

      // Then attempt the actual form submission
      const apiUrl = `${API_BASE_URL}/api/send-email`;
      
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.status === 404) {
        setSubmitStatus({
          type: "error",
          message: "API endpoint not found. Please make sure the server is running on port 3000."
        });
        setDebugInfo(`API endpoint ${apiUrl} returned 404 Not Found. Make sure to run the Express server with 'node server/index.ts'`);
        return;
      }

      // Get the response text first
      const responseText = await res.text();
      
      let responseData;
      
      // Try to parse as JSON if it looks like JSON
      if (responseText.trim().startsWith('{') || responseText.trim().startsWith('[')) {
        try {
          responseData = JSON.parse(responseText);
        } catch (parseError) {
          setDebugInfo(`Failed to parse JSON response: ${responseText.substring(0, 200)}...`);
          throw new Error(`Invalid JSON response: ${parseError instanceof Error ? parseError.message : 'Parse error'}`);
        }
      } else {
        // Not JSON - likely HTML error page
        setDebugInfo(`Server returned HTML instead of JSON. Response: ${responseText.substring(0, 500)}...`);
        
        if (res.status >= 500) {
          throw new Error('Server error (500+). Please try again later.');
        } else if (res.status >= 400) {
          throw new Error(`Client error (${res.status}). Please check your request.`);
        } else {
          throw new Error('Server returned unexpected response format.');
        }
      }

      if (res.ok) {
        setSubmitStatus({ 
          type: "success", 
          message: "Your message has been sent successfully! We'll get back to you soon." 
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        setSubmitStatus({ 
          type: "error", 
          message: `Error: ${responseData?.error || `HTTP ${res.status} - Failed to send message`}` 
        });
        
        if (responseData?.details) {
          setDebugInfo(`Error details: ${responseData.details}`);
        }
      }
    } catch (err) {
      console.error('Form submission error:', err);
      
      let errorMessage = "Something went wrong with the request. Please try again later.";
      let debugMessage = "";
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        errorMessage = "Network error. Please check your internet connection and make sure the API server is running.";
        debugMessage = `Network error: ${err.message}`;
      } else if (err instanceof SyntaxError && err.message.includes('JSON')) {
        errorMessage = "Server returned invalid response. Please try again.";
        debugMessage = `JSON parsing error: ${err.message}`;
      } else if (err instanceof Error) {
        errorMessage = err.message;
        debugMessage = `Error: ${err.message}`;
      }
      
      setSubmitStatus({ 
        type: "error", 
        message: errorMessage
      });
      
      if (debugMessage) {
        setDebugInfo(debugMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-14">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-white shadow-xl md:p-8 rounded-2xl"
          >
            <h2 className="w-full mb-2 text-2xl font-bold leading-tight text-center md:text-3xl gradient-text">
              Schedule a Consultation
            </h2>
            <p className="w-full mb-8 text-sm leading-tight text-center text-gray- md:text-base">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitStatus.type && (
              <div 
                className={`p-4 mb-6 rounded-md ${
                  submitStatus.type === "success" 
                    ? "bg-green-50 text-green-800 border border-green-200" 
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {debugInfo && (
              <div className="p-4 mb-6 overflow-auto text-xs border border-orange-200 rounded-md bg-orange-50 text-orange-800 max-h-32">
                <strong>Debug Info:</strong>
                <pre>{debugInfo}</pre>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Company"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="form-input"
                  disabled={isSubmitting}
                >
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="h-20 resize-none form-input"
                  placeholder="Tell us about your project and requirements..."
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center w-full btn-primary"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Request
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationForm;