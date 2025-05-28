import { useState } from "react";
import { faqs } from "../data/internshipFaq";
import googleImg from "../assets/icons8-google-48.png";
import microsoftImg from "../assets/icons8-microsoft-48.png";
import appleImg from "../assets/icons8-apple-50.png";
import facebookImg from "../assets/icons8-facebook-48.png";
import amazonImg from "../assets/icons8-amazon-48.png";
import spotify from "../assets/icons8-spotify-48.png";
import Seo from "../components/SEO";

export default function Internship() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
   const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    education: string;
    graduationDate: string;
    internshipArea: string;
    startDate: string;
    resume: File | null;
    coverLetter: string;
    hearAbout: string;
  }>({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    graduationDate: "",
    internshipArea: "",
    startDate: "",
    resume: null,
    coverLetter: "",
    hearAbout: "",
  });
  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
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

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const file = e.target.files?.[0] || null;
  
  // Validate file size (5MB limit)
  if (file && file.size > 5 * 1024 * 1024) {
    alert("File size must be less than 5MB");
    e.target.value = ""; // Clear the input
    return;
  }
  
  // Validate file type
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (file && !allowedTypes.includes(file.type)) {
    alert("Please upload a PDF or Word document");
    e.target.value = ""; // Clear the input
    return;
  }
  
  setFormData(prevState => ({
    ...prevState,
    resume: file
  }));
};
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [isNigerianCandidate, setIsNigerianCandidate] = useState<boolean>(true);
  console.log("Nigerian Candidate:", isNigerianCandidate);
  const handleApplyNowClick = () => {
    setShowPaymentModal(true);
  };

   // API base URL for Express server
  const API_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000' 
  : ''; 

       const apiUrl = `${API_BASE_URL}/api/internship-apply`;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
setIsSubmitting(true);

  const form = new FormData();
  form.append("fullName", formData.fullName);
  form.append("email", formData.email);
  form.append("phone", formData.phone);
  form.append("education", formData.education);
  form.append("graduationDate", formData.graduationDate);
  form.append("internshipArea", formData.internshipArea);
  form.append("startDate", formData.startDate);
  form.append("coverLetter", formData.coverLetter);
  form.append("hearAbout", formData.hearAbout);
  if (formData.resume) {
    form.append("resume", formData.resume);
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: form, 
    });

    const result = await response.json();
    alert(result.message || "Application submitted!");
     // Reset form
      setFormData({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    graduationDate: "",
    internshipArea: "",
    startDate: "",
    resume: null,
    coverLetter: "",
    hearAbout: "",
      });
      
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally{
    setIsSubmitting(false);
}
};


  const handlePaymentSelection = (isNigerian: boolean) => {
    setIsNigerianCandidate(isNigerian);
    const amount = isNigerian ? "N20,000" : "$15";
    window.location.href = `https://payment-provider.com/pay?amount=${amount}`; // Replace with actual payment URL
  };
  const PaymentModal = () => {
    return (
      <div className="fixed inset-0 z-50 w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
        <div className="relative max-w-md p-8 mx-auto bg-white rounded-lg shadow-xl top-20">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Application Payment
            </h3>
            <p className="mb-6 text-gray-600">
              Please select your location to proceed with the application
              payment
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handlePaymentSelection(true)}
                className="w-full py-3 px-4 border border-transparent !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
              >
                Pay ₦20,000 (Nigerian Candidates)
              </button>
              <button
                onClick={() => handlePaymentSelection(false)}
                className="w-full py-3 px-4 border border-transparent !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
              >
                Pay $15 (International Candidates)
              </button>
            </div>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="mt-6 text-sm text-gray-600 cursor-pointer hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Seo
        title={"Internship - Zimcrest Technologies"}
        description="At Zimcrest, we're dedicated to transforming ideas into impactful digital solutions. As a leading technology company, we specialize in offering dynamic internship programs that provide aspiring professionals with hands-on experience and a unique opportunity to contribute to real-world projects across various industries."
      />

      <div className="min-h-screen bg-gray-50">
        {showPaymentModal && <PaymentModal />}
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-600 mix-blend-multiply"></div>
            <img
              src="https://readdy.ai/api/search-image?query=Diverse%2520young%2520professionals%2520in%2520a%2520modern%2520tech%2520office%2520environment%2520collaborating%2520on%2520projects%252C%2520with%2520mentors%2520guiding%2520them%252C%2520surrounded%2520by%2520computers%2520and%2520digital%2520displays%252C%2520with%2520a%2520blue%2520and%2520purple%2520ambient%2520lighting%2520creating%2520an%2520innovative%2520atmosphere&width=1440&height=500&seq=2&orientation=landscape"
              alt="Interns working in tech environment"
              className="object-cover object-top w-full h-full"
            />
          </div>
          <div className="relative flex flex-col items-center justify-start w-full px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
              Launch Your Tech Career
            </h1>
            <p className="max-w-xl mt-6 text-base leading-tight text-center text-indigo-100 md:text-xl">
              Gain hands-on experience, professional mentorship, and valuable
              industry connections through our immersive internship programs.
            </p>
            <div className="mt-10">
              <a
                href="#application-form"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium !rounded-button text-indigo-700 bg-white hover:bg-indigo-50 whitespace-nowrap cursor-pointer"
              >
                Apply Now
                <i className="ml-3 fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Program Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto scrollThin">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "overview"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Program Overview
              </button>
              <button
                onClick={() => setActiveTab("positions")}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "positions"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Available Positions
              </button>
              <button
                onClick={() => setActiveTab("benefits")}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "benefits"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("stories")}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "stories"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Success Stories
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "pricing"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Pricing
              </button>
            </div>
          </div>
        </div>
        {/* Program Overview */}
        {activeTab === "overview" && (
          <div className="py-16 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Program Overview
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                  Our internship program is designed to provide aspiring tech
                  professionals with real-world experience and mentorship from
                  industry experts.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 rounded-lg bg-indigo-50">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-600 rounded-md">
                    <i className="text-xl fas fa-calendar-alt"></i>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    Program Duration
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our internships run for 12 weeks (3 months) with full-time
                    and part-time options available. We offer flexible start
                    dates throughout the year.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-indigo-50">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-600 rounded-md">
                    <i className="text-xl fas fa-laptop-code"></i>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    Hands-on Experience
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Interns work on real projects alongside our development
                    teams, gaining practical experience with modern technologies
                    and industry best practices.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-indigo-50">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-600 rounded-md">
                    <i className="text-xl fas fa-user-friends"></i>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    Dedicated Mentorship
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Each intern is paired with an experienced mentor who
                    provides guidance, feedback, and career advice throughout
                    the program.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-indigo-50">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-600 rounded-md">
                    <i className="text-xl fas fa-chalkboard-teacher"></i>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    Learning Sessions
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Weekly workshops, tech talks, and training sessions help
                    interns develop both technical and professional skills.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-indigo-50">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-600 rounded-md">
                    <i className="text-xl fas fa-tasks"></i>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    Project-Based Learning
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Interns work on meaningful projects that solve real business
                    problems, building a portfolio of work to showcase to future
                    employers.
                  </p>
                </div>
                <div className="p-8 rounded-lg bg-indigo-50">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-600 rounded-md">
                    <i className="text-xl fas fa-certificate"></i>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    Certification
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Upon successful completion, interns receive a recognized
                    certification and detailed performance evaluation to boost
                    their resume.
                  </p>
                </div>
              </div>
              <div className="mt-16 overflow-hidden bg-indigo-700 rounded-lg shadow-xl">
                <div className="px-6 py-12 sm:px-12 lg:px-16">
                  <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Program Highlights
                      </h3>
                      <ul className="mt-6 space-y-4 text-indigo-100">
                        <li className="flex flex-col items-start md:flex-row">
                          <i className="mt-1 mr-2 text-indigo-300 fas fa-check-circle"></i>
                          <span>
                            Competitive monthly stipend for all interns
                          </span>
                        </li>
                        <li className="flex flex-col items-start md:flex-row">
                          <i className="mt-1 mr-2 text-indigo-300 fas fa-check-circle"></i>
                          <span>
                            Remote, onsite, and hybrid options available
                          </span>
                        </li>
                        <li className="flex flex-col items-start md:flex-row">
                          <i className="mt-1 mr-2 text-indigo-300 fas fa-check-circle"></i>
                          <span>
                            Opportunity to work with cutting-edge technologies
                          </span>
                        </li>
                        <li className="flex flex-col items-start md:flex-row">
                          <i className="mt-1 mr-2 text-indigo-300 fas fa-check-circle"></i>
                          <span>
                            Networking events with industry professionals
                          </span>
                        </li>
                        <li className="flex flex-col items-start md:flex-row">
                          <i className="mt-1 mr-2 text-indigo-300 fas fa-check-circle"></i>
                          <span>
                            Potential for full-time employment after completion
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional%2520tech%2520mentorship%2520session%2520with%2520diverse%2520young%2520professionals%2520in%2520modern%2520office%2520environment%2520with%2520glass%2520walls%2520and%2520blue%2520accent%2520lighting%252C%2520mentor%2520explaining%2520code%2520on%2520large%2520screen%2520display%252C%2520collaborative%2520atmosphere%2520with%2520natural%2520lighting&width=600&height=400&seq=3&orientation=landscape"
                        alt="Mentorship session"
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Available Positions */}
        {activeTab === "positions" && (
          <div className="py-16 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Available Internship Positions
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                  Explore our current internship opportunities across various
                  tech disciplines. We're always looking for passionate
                  individuals to join our teams.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-start justify-between w-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Software%2520developer%2520coding%2520on%2520multiple%2520screens%2520in%2520modern%2520tech%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520focused%2520on%2520code%2520with%2520programming%2520languages%2520visible%2520on%2520screen%252C%2520professional%2520workspace%2520with%2520minimal%2520distractions&width=600&height=400&seq=4&orientation=landscape"
                      alt="Software Development Intern"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col items-center md:flex-row">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                        <i className="text-indigo-600 fas fa-code"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Software Development
                        </h3>
                        <span className="text-sm font-medium text-indigo-600">
                          Multiple Positions
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        Work on real-world applications using modern frameworks
                        and languages. Gain experience in full-stack
                        development, testing, and deployment.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Key Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Knowledge of JavaScript, Python, or Java
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>Understanding of web technologies</span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>Problem-solving aptitude</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleApplyNowClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=UI%2520UX%2520designer%2520working%2520on%2520digital%2520interface%2520designs%2520with%2520wireframes%2520and%2520color%2520palettes%2520visible%2520on%2520screen%252C%2520in%2520modern%2520creative%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520design%2520tools%2520and%2520tablet%2520on%2520desk%252C%2520professional%2520workspace&width=600&height=400&seq=5&orientation=landscape"
                      alt="UI/UX Design Intern"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                        <i className="text-indigo-600 fas fa-palette"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          UI/UX Design
                        </h3>
                        <span className="text-sm font-medium text-indigo-600">
                          3 Positions
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        Create user-centered designs, wireframes, and
                        prototypes. Collaborate with product and development
                        teams to deliver intuitive user experiences.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Key Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Design portfolio showcasing UI/UX projects
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Experience with design tools (Figma, Adobe XD)
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Understanding of user-centered design principles
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleApplyNowClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Data%2520analyst%2520working%2520with%2520visualizations%2520and%2520charts%2520on%2520multiple%2520screens%2520in%2520modern%2520tech%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520analyzing%2520statistics%2520and%2520trends%252C%2520professional%2520workspace%2520with%2520data%2520dashboards%2520visible&width=600&height=400&seq=6&orientation=landscape"
                      alt="Data Analytics Intern"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                        <i className="text-indigo-600 fas fa-chart-bar"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Data Analytics
                        </h3>
                        <span className="text-sm font-medium text-indigo-600">
                          2 Positions
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        Analyze data sets, create visualizations, and extract
                        actionable insights. Work with business teams to drive
                        data-informed decisions.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Key Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Knowledge of SQL and data analysis tools
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Experience with Python or R for data analysis
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Strong analytical and problem-solving skills
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleApplyNowClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Digital%2520marketing%2520professional%2520analyzing%2520campaign%2520metrics%2520and%2520social%2520media%2520analytics%2520on%2520computer%2520screens%2520in%2520modern%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520marketing%2520materials%2520and%2520content%2520calendar%2520visible%252C%2520professional%2520workspace&width=600&height=400&seq=7&orientation=landscape"
                      alt="Digital Marketing Intern"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                        <i className="text-indigo-600 fas fa-bullhorn"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Digital Marketing
                        </h3>
                        <span className="text-sm font-medium text-indigo-600">
                          2 Positions
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        Develop and execute digital marketing campaigns. Learn
                        about SEO, content marketing, social media strategy, and
                        analytics.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Key Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Understanding of digital marketing principles
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>Experience with social media platforms</span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Strong written and verbal communication skills
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleApplyNowClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Cloud%2520engineer%2520working%2520with%2520server%2520infrastructure%2520diagrams%2520and%2520cloud%2520architecture%2520on%2520multiple%2520screens%2520in%2520modern%2520tech%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520focused%2520on%2520deployment%2520configurations%252C%2520professional%2520workspace&width=600&height=400&seq=8&orientation=landscape"
                      alt="Cloud Computing Intern"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                        <i className="text-indigo-600 fas fa-cloud"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Cloud Computing
                        </h3>
                        <span className="text-sm font-medium text-indigo-600">
                          2 Positions
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        Work with cloud platforms and infrastructure. Learn
                        about deployment, scaling, security, and DevOps
                        practices.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Key Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Basic knowledge of cloud platforms (AWS, Azure,
                              GCP)
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>Understanding of networking concepts</span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Familiarity with Linux/Unix environments
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleApplyNowClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between w-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Cybersecurity%2520professional%2520monitoring%2520security%2520systems%2520and%2520analyzing%2520threat%2520data%2520on%2520multiple%2520screens%2520in%2520modern%2520tech%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520focused%2520on%2520security%2520protocols%252C%2520professional%2520workspace%2520with%2520network%2520diagrams&width=600&height=400&seq=9&orientation=landscape"
                      alt="Cybersecurity Intern"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                        <i className="text-indigo-600 fas fa-shield-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Cybersecurity
                        </h3>
                        <span className="text-sm font-medium text-indigo-600">
                          1 Position
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm leading-tight text-gray-600 md:text-base">
                        Learn about security best practices, vulnerability
                        assessment, and threat detection. Work with security
                        tools and protocols.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">
                          Key Requirements:
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Basic understanding of cybersecurity concepts
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Knowledge of networking and system administration
                            </span>
                          </li>
                          <li className="flex flex-col items-start md:flex-row">
                            <i className="mt-1 mr-2 text-xs text-indigo-500 fas fa-circle"></i>
                            <span>
                              Strong analytical and problem-solving skills
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleApplyNowClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Benefits */}
        {activeTab === "benefits" && (
          <div className="py-16 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Internship Benefits
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                  Our internship program offers numerous advantages to help you
                  kickstart your career in the tech industry.
                </p>
              </div>
              <div className="mt-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative">
                    <img
                      src="https://readdy.ai/api/search-image?query=Group%2520of%2520diverse%2520young%2520professionals%2520in%2520casual%2520business%2520attire%2520collaborating%2520in%2520modern%2520tech%2520office%2520with%2520blue%2520ambient%2520lighting%252C%2520sharing%2520ideas%2520with%2520mentors%252C%2520professional%2520workspace%2520with%2520glass%2520walls%2520and%2520natural%2520light&width=600&height=800&seq=10&orientation=portrait"
                      alt="Interns collaborating"
                      className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                          <i className="text-xl fas fa-hands-helping"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Hands-on Experience
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Work on real projects that impact our business and
                          clients. Build a portfolio of work that demonstrates
                          your skills and capabilities to future employers.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                          <i className="text-xl fas fa-user-tie"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Professional Mentorship
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Receive guidance from industry experts who are
                          committed to your growth. Regular feedback sessions
                          help you develop both technical and soft skills.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                          <i className="text-xl fas fa-network-wired"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Networking Opportunities
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Connect with professionals across the tech industry
                          through events, workshops, and team activities. Build
                          relationships that can help advance your career.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                          <i className="text-xl fas fa-briefcase"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Potential Job Placement
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Top-performing interns are often considered for
                          full-time positions at ZimcrestTech or recommended to
                          our partner companies. Many of our current employees
                          started as interns.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                          <i className="text-xl fas fa-certificate"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Certification & References
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Receive an industry-recognized certification upon
                          completion. Strong performers also receive
                          personalized recommendation letters from senior team
                          members.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 mt-16 rounded-lg bg-indigo-50">
                  <h3 className="text-2xl font-bold text-center text-gray-900">
                    Additional Perks
                  </h3>
                  <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-indigo-600 bg-indigo-100 rounded-full">
                        <i className="fa-solid fa-briefcase"></i>
                      </div>
                      <h4 className="mt-4 text-lg font-medium text-gray-900">
                        Flexible Work Options
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        The internship is fully remote, allowing you to work
                        from anywhere.
                      </p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-indigo-600 bg-indigo-100 rounded-full">
                        <i className="text-xl fas fa-laptop-house"></i>
                      </div>
                      <h4 className="mt-4 text-lg font-medium text-gray-900">
                        Learning Resources
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        Gain access to courses, workshops, and curated learning
                        materials to support your professional growth.
                      </p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-indigo-600 bg-indigo-100 rounded-full">
                        <i className="text-xl fas fa-graduation-cap"></i>
                      </div>
                      <h4 className="mt-4 text-lg font-medium text-gray-900">
                        Team Activities
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        Participate in virtual social events and team-building
                        activities that foster collaboration and fun.
                      </p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-indigo-600 bg-indigo-100 rounded-full">
                        <i className="fa-solid fa-file"></i>
                      </div>
                      <h4 className="mt-4 text-lg font-medium text-gray-900">
                        CV Enhancement
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        Receive guidance and feedback to refine and enhance your
                        CV for future opportunities.
                      </p>
                    </div>
                    <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto text-indigo-600 bg-indigo-100 rounded-full">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </div>
                      <h4 className="mt-4 text-lg font-medium text-gray-900">
                        LinkedIn Optimization
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        Get support in optimizing your LinkedIn profile to build
                        your personal brand and attract recruiters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Stories */}
        {activeTab === "pricing" && (
          <div className="py-16 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Program Pricing
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                  Invest in your future with our comprehensive internship
                  program. Choose the plan that best suits your location.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-16 lg:grid-cols-2">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-5 md:px-6 md:py-8">
                    <div className="flex flex-wrap items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                        Nigerian Candidates
                      </h3>
                      <span className="px-3 py-1 text-sm font-medium text-indigo-600 rounded-full bg-indigo-50">
                        Local Rate
                      </span>
                    </div>
                    <div className="flex items-baseline mt-4">
                      <span className="text-2xl font-extrabold text-gray-900 md:text-5xl">
                        ₦20,000
                      </span>
                      <span className="ml-1 text-base font-semibold text-gray-500 md:text-xl">
                        /program
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      Everything you need to kickstart your tech career in
                      Nigeria
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          Full access to internship program
                        </span>
                      </li>
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          Local mentorship and networking
                        </span>
                      </li>
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          Nigerian tech community access
                        </span>
                      </li>
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          Local job placement support
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={handleApplyNowClick}
                      className="mt-8 w-full bg-indigo-600 text-white px-6 py-3 !rounded-button hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-5 md:px-6 md:py-8">
                    <div className="flex flex-wrap items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                        International Candidates
                      </h3>
                      <span className="px-3 py-1 text-sm font-medium text-indigo-600 rounded-full bg-indigo-50">
                        Global Rate
                      </span>
                    </div>
                    <div className="flex items-baseline mt-4">
                      <span className="text-2xl font-extrabold text-gray-900 md:text-5xl">
                        $15
                      </span>
                      <span className="ml-1 text-base font-semibold text-gray-500 md:text-xl">
                        /program
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      Access global opportunities from anywhere in the world
                    </p>
                    <ul className="mt-6 space-y-4">
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          Full access to internship program
                        </span>
                      </li>
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          International mentorship network
                        </span>
                      </li>
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          Global tech community access
                        </span>
                      </li>
                      <li className="flex flex-col items-start md:flex-row">
                        <i className="mt-1 mr-2 text-indigo-500 fas fa-check-circle"></i>
                        <span className="text-sm leading-tight text-gray-600 md:text-base">
                          International job placement support
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={handleApplyNowClick}
                      className="mt-8 w-full bg-indigo-600 text-white px-6 py-3 !rounded-button hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8 mt-16 rounded-lg bg-indigo-50">
                <h3 className="text-base font-bold text-center text-gray-900 md:text-xl">
                  What's Included in Your Program Fee
                </h3>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
                  <div className="flex flex-col items-start md:flex-row">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                        <i className="text-xl fas fa-laptop-code"></i>
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Technical Training
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Access to all training materials, workshops, and
                        hands-on projects
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:flex-row">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                        <i className="text-xl fas fa-user-friends"></i>
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Mentorship
                      </h4>
                      <p className="mt-2 text-gray-600">
                        One-on-one guidance from industry experts throughout the
                        program
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:flex-row">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 rounded-md">
                        <i className="text-xl fas fa-certificate"></i>
                      </div>
                    </div>
                    <div className="ml-0 md:ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Certification
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Industry-recognized certification upon successful
                        completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "stories" && (
          <div className="py-16 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Success Stories
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                  Hear from former interns who have launched successful careers
                  after completing our program.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3">
                <div className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-sm bg-indigo-50 hover:shadow-md">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center mb-6">
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Chinonso Okafor
                        </h3>
                        <p className="text-sm text-indigo-600">
                          Web 3 Developer at Polygon Labs
                        </p>
                        <p className="text-xs text-gray-500">
                          Former Software Development Intern
                        </p>
                      </div>
                    </div>
                    <p className="italic text-gray-600">
                      "The Web 3 development program at ZimcrestTech completely
                      transformed my career. The curriculum was current,
                      hands-on, and mapped to real industry tooling. Barely a
                      month after graduating, I had several offers and secured
                      my dream role building smart-contract tooling at Polygon
                      Labs."
                    </p>
                    <div className="flex items-center mt-6">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        Class of 2023
                      </span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-sm bg-indigo-50 hover:shadow-md">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center mb-6">
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Aisha Abdullahi
                        </h3>
                        <p className="text-sm text-indigo-600">
                          Product Designer at Flutterwave
                        </p>
                        <p className="text-xs text-gray-500">
                          Former UI/UX Design Intern
                        </p>
                      </div>
                    </div>
                    <p className="italic text-gray-600">
                      “I already knew basic design, but I wanted to specialise
                      in digital-product design. The UI/UX track at ZimcrestTech
                      gave me exactly what I needed—intense practice,
                      portfolio-ready projects, and direct mentoring. Thanks to
                      the career-support sessions, I now craft user-centred
                      experiences at Flutterwave.”
                    </p>
                    <div className="flex items-center mt-6">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        Class of 2022
                      </span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-sm bg-indigo-50 hover:shadow-md">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center mb-6">
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Tunde Ogunleye
                        </h3>
                        <p className="text-sm text-indigo-600">
                          Associate Product Manager at Interswitch
                        </p>
                        <p className="text-xs text-gray-500">
                          Former Product Management Intern
                        </p>
                      </div>
                    </div>
                    <p className="italic text-gray-600">
                      “Switching into product management felt daunting, but the
                      PM program at ZimcrestTech made the leap possible. The
                      case studies, roadmap workshops, and interview prep
                      sharpened my skills, and the portfolio I built helped me
                      stand out. I'm now driving feature launches at
                      Interswitch.”
                    </p>
                    <div className="flex items-center mt-6">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        Class of 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-center text-gray-900">
                    Where Our Interns Work Now
                  </h3>
                  <div className="grid grid-cols-2 gap-8 mt-10 md:grid-cols-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 text-gray-400">
                        <img
                          src={googleImg}
                          alt="google"
                          className="size-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600">
                        Google
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 text-gray-400">
                        <img
                          src={microsoftImg}
                          alt="microsoft"
                          className="size-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600">
                        Microsoft
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 text-gray-400">
                        <img
                          src={amazonImg}
                          alt="amazon"
                          className="size-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600">
                        Amazon
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 text-gray-400">
                        <img
                          src={facebookImg}
                          alt="meta"
                          className="size-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600">
                        Meta
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 text-gray-400">
                        <img
                          src={appleImg}
                          alt="apple"
                          className="size-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600">
                        Apple
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 text-gray-400">
                        <img
                          src={spotify}
                          alt="spotify"
                          className="size-10"
                          width={40}
                          height={40}
                        />
                      </div>
                      <span className="mt-2 text-sm font-medium text-gray-600">
                        Spotify
                      </span>
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <p className="text-sm leading-tight text-gray-600 md:text-base">
                      Our internship program has a 85% placement rate, with
                      graduates working at top tech companies worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Application Form */}
        <div id="application-form" className="py-16 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center text-gray-900">
                Apply for an Internship
              </h2>
              <p className="mt-4 text-lg text-center text-gray-500">
                Complete the form below to apply for our internship program. Our
                team will review your application and contact you within 2
                weeks.
              </p>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 mt-12 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="education"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Education Level
                  </label>
                  <div className="mt-1">
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select education level</option>
                      <option value="High School">High School</option>
                      <option value="Associate's Degree">
                        Associate's Degree
                      </option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="PhD">PhD</option>
                      <option value="Self-taught">Self-taught</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="graduationDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Graduation Date (Expected)
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="graduationDate"
                      id="graduationDate"
                      value={formData.graduationDate}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="internshipArea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Internship Area of Interest
                  </label>
                  <div className="mt-1">
                    <select
                      id="internshipArea"
                      name="internshipArea"
                      value={formData.internshipArea}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select area of interest</option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preferred Start Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Resume/CV
                  </label>
                  <div className="mt-1">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      onChange={handleFileChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    PDF or Word document, max 5MB
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Why do you want to join our internship program?
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    ></textarea>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Briefly describe your motivation, relevant experience, and
                    what you hope to gain from the program (300 words max)
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="hearAbout"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="University">University/College</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Job Board">Job Board</option>
                      <option value="Friend">Friend/Referral</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                type="submit"
                 disabled={isSubmitting}
  className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent !rounded-button shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer${
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
    'Submit Application'
  )}
              </button>
                </div>
              </form>
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
              <p className="mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                Find answers to common questions about our internship program.
              </p>
            </div>
            <div className="max-w-3xl mx-auto mt-12">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={crypto.randomUUID()}
                    className="overflow-hidden rounded-lg bg-gray-50"
                  >
                    <button
                      className="flex items-center justify-between w-full px-6 py-4 cursor-pointer focus:outline-none"
                      onClick={() => handleAccordionClick(index)}
                    >
                      <h3 className="text-base font-medium leading-tight text-left text-gray-900 md:text-lg">
                        {faq.question}
                      </h3>
                      <span className="flex-shrink-0 ml-6">
                        <i
                          className={`fas ${
                            activeAccordion === index
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          } text-indigo-500`}
                        ></i>
                      </span>
                    </button>
                    <div
                      className={`px-6 pb-4 ${
                        activeAccordion === index ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-sm leading-tight text-gray-500 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
