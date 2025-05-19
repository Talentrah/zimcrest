import { useState } from "react";
import { faqs } from "../data/trainingFaq";
import googleImg from "../assets/icons8-google-48.png";
import microsoftImg from "../assets/icons8-microsoft-48.png";
import appleImg from "../assets/icons8-apple-50.png";
import facebookImg from "../assets/icons8-facebook-48.png";
import amazonImg from "../assets/icons8-amazon-48.png";
import spotify from "../assets/icons8-spotify-48.png";

export default function Training() {
  const [activeTab, setActiveTab] = useState<string>("webDevelopment");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    nationality: "",
    startDate: "",
    experience: "",
    goals: "",
    hearAbout: "",
  });
  const scrollToCourseDetails = (courseTab: string) => {
    const courseDetailsSection = document.getElementById("course-details");
    if (courseDetailsSection) {
      courseDetailsSection.scrollIntoView({ behavior: "smooth" });
      setActiveTab(courseTab);
    }
  };
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would handle form submission
    alert("Registration submitted successfully! We'll contact you shortly.");
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-600 mix-blend-multiply"></div>
          <img
            src="https://readdy.ai/api/search-image?query=Professional%2520training%2520environment%2520with%2520diverse%2520group%2520of%2520adults%2520engaged%2520in%2520learning%2520with%2520instructor%2520at%2520front%2520of%2520modern%2520classroom%2520with%2520large%2520displays%2520showing%2520code%2520and%2520diagrams%252C%2520collaborative%2520atmosphere%2520with%2520blue%2520ambient%2520lighting%2520creating%2520a%2520tech-focused%2520educational%2520environment&width=1440&height=500&seq=14&orientation=landscape"
            alt="Professional training environment"
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center px-4 py-24 mx-auto text-center max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Professional Training Programs
          </h1>
          <p className="max-w-xl mt-6 text-base text-indigo-100 md:text-xl ">
            Elevate your tech skills with our industry-focused training courses.
            Learn from experts and gain practical experience that employers
            value.
          </p>
          <div className="mt-10">
            <a
              href="#courses"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium !rounded-button text-indigo-700 bg-white hover:bg-indigo-50 whitespace-nowrap cursor-pointer"
            >
              Explore Courses
              <i className="ml-3 fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Training Categories */}
      <div id="courses" className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
              Training Categories
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
              Explore our comprehensive range of tech training programs designed
              to meet industry demands and advance your career.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Web%2520development%2520workspace%2520with%2520multiple%2520screens%2520showing%2520HTML%252C%2520CSS%252C%2520and%2520JavaScript%2520code%252C%2520modern%2520office%2520environment%2520with%2520blue%2520ambient%2520lighting%252C%2520web%2520design%2520mockups%2520visible%252C%2520professional%2520development%2520environment%2520with%2520clean%2520minimal%2520background&width=600&height=400&seq=15&orientation=landscape"
                  alt="Web Development"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                    <i className="text-indigo-600 fas fa-code"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Web Development
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      Frontend & Backend
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 md:text-base">
                    Master modern web technologies and frameworks. Build
                    responsive, dynamic websites and web applications from
                    scratch.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-clock"></i>
                      <span>12-16 weeks</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-signal"></i>
                      <span>Beginner to Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => scrollToCourseDetails("webDevelopment")}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Data Science & Analytics */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Data%2520science%2520workspace%2520with%2520multiple%2520screens%2520showing%2520data%2520visualizations%252C%2520charts%252C%2520and%2520Python%2520code%252C%2520modern%2520office%2520environment%2520with%2520blue%2520ambient%2520lighting%252C%2520statistical%2520analysis%2520visible%252C%2520professional%2520analytics%2520environment%2520with%2520clean%2520minimal%2520background&width=600&height=400&seq=16&orientation=landscape"
                  alt="Data Science & Analytics"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                    <i className="text-indigo-600 fas fa-chart-bar"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Data Science & Analytics
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      ML & Visualization
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 md:text-base">
                    Learn to analyze complex datasets, build predictive models,
                    and extract actionable insights using industry-standard
                    tools.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-clock"></i>
                      <span>16-20 weeks</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-signal"></i>
                      <span>Intermediate to Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActiveTab("dataScience")}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Cybersecurity */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Cybersecurity%2520operations%2520center%2520with%2520multiple%2520screens%2520showing%2520security%2520monitoring%252C%2520network%2520traffic%2520analysis%252C%2520and%2520threat%2520detection%2520tools%252C%2520modern%2520office%2520environment%2520with%2520blue%2520ambient%2520lighting%252C%2520security%2520professionals%2520working%252C%2520professional%2520security%2520environment%2520with%2520clean%2520minimal%2520background&width=600&height=400&seq=17&orientation=landscape"
                  alt="Cybersecurity"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                    <i className="text-indigo-600 fas fa-shield-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Cybersecurity
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      Defense & Ethical Hacking
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 md:text-base">
                    Develop skills to protect systems and networks from digital
                    attacks. Learn threat detection, vulnerability assessment,
                    and security protocols.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-clock"></i>
                      <span>14-18 weeks</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-signal"></i>
                      <span>Intermediate to Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActiveTab("cybersecurity")}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* UI/UX Design */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=UI%2520UX%2520design%2520workspace%2520with%2520screens%2520showing%2520interface%2520designs%252C%2520wireframes%252C%2520and%2520prototypes%252C%2520modern%2520creative%2520office%2520environment%2520with%2520blue%2520ambient%2520lighting%252C%2520design%2520tools%2520visible%252C%2520professional%2520design%2520environment%2520with%2520clean%2520minimal%2520background&width=600&height=400&seq=18&orientation=landscape"
                  alt="UI/UX Design"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                    <i className="text-indigo-600 fas fa-palette"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      UI/UX Design
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      User-Centered Design
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 md:text-base">
                    Create intuitive, engaging user experiences and interfaces.
                    Master design thinking, wireframing, prototyping, and
                    usability testing.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-clock"></i>
                      <span>10-14 weeks</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-signal"></i>
                      <span>Beginner to Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActiveTab("uiuxDesign")}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Cloud Computing */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Cloud%2520computing%2520workspace%2520with%2520screens%2520showing%2520cloud%2520infrastructure%2520diagrams%252C%2520deployment%2520configurations%252C%2520and%2520monitoring%2520dashboards%252C%2520modern%2520tech%2520office%2520environment%2520with%2520blue%2520ambient%2520lighting%252C%2520server%2520architecture%2520visible%252C%2520professional%2520cloud%2520environment%2520with%2520clean%2520minimal%2520background&width=600&height=400&seq=19&orientation=landscape"
                  alt="Cloud Computing"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                    <i className="text-indigo-600 fas fa-cloud"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Cloud Computing
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      AWS, Azure & GCP
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 md:text-base">
                    Gain expertise in cloud platforms, infrastructure
                    management, deployment, scaling, and DevOps practices for
                    modern applications.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-clock"></i>
                      <span>12-16 weeks</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-signal"></i>
                      <span>Intermediate to Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActiveTab("cloudComputing")}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Digital Marketing */}
            <div className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Digital%2520marketing%2520workspace%2520with%2520screens%2520showing%2520analytics%2520dashboards%252C%2520social%2520media%2520campaigns%252C%2520and%2520content%2520calendars%252C%2520modern%2520creative%2520office%2520environment%2520with%2520blue%2520ambient%2520lighting%252C%2520marketing%2520materials%2520visible%252C%2520professional%2520marketing%2520environment%2520with%2520clean%2520minimal%2520background&width=600&height=400&seq=20&orientation=landscape"
                  alt="Digital Marketing"
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full">
                    <i className="text-indigo-600 fas fa-bullhorn"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Digital Marketing
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      SEO, SEM & Social Media
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 md:text-base">
                    Learn to create and implement effective digital marketing
                    strategies. Master SEO, content marketing, social media, and
                    analytics.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-clock"></i>
                      <span>8-12 weeks</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <i className="mr-2 text-indigo-500 fas fa-signal"></i>
                      <span>Beginner to Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActiveTab("digitalMarketing")}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          primary-600{" "}
        </div>
        {/* Course Details Section */}
        <div id="course-details" className="py-16 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                Course Details
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                Explore the curriculum and structure of our comprehensive
                training programs.
              </p>
            </div>
            <div className="mt-12">
              {/* Course Navigation */}
              <div className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl">
                  <div className="flex space-x-8 overflow-x-auto scrollThin">
                    <button
                      onClick={() => setActiveTab("webDevelopment")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === "webDevelopment"
                          ? "border-indigo-500 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() => setActiveTab("dataScience")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === "dataScience"
                          ? "border-indigo-500 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Data Science
                    </button>
                    <button
                      onClick={() => setActiveTab("cybersecurity")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === "cybersecurity"
                          ? "border-indigo-500 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Cybersecurity
                    </button>
                    <button
                      onClick={() => setActiveTab("uiuxDesign")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === "uiuxDesign"
                          ? "border-indigo-500 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      UI/UX Design
                    </button>
                    <button
                      onClick={() => setActiveTab("cloudComputing")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === "cloudComputing"
                          ? "border-indigo-500 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Cloud Computing
                    </button>
                    <button
                      onClick={() => setActiveTab("digitalMarketing")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${
                        activeTab === "digitalMarketing"
                          ? "border-indigo-500 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Digital Marketing
                    </button>
                  </div>
                </div>
              </div>
              {/* Web Development Content */}
              {activeTab === "webDevelopment" && (
                <div className="mt-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="p-4 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 md:text-2xl">
                          Full Stack Web Development
                        </h3>
                        <p className="mt-2 text-base leading-tight text-primary-600 md:text-lg">
                          Comprehensive training in modern web technologies
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Most Popular
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Course Overview
                        </h4>
                        <p className="mt-2 text-gray-600">
                          This comprehensive program covers both frontend and
                          backend development, teaching you to build complete,
                          responsive web applications from scratch. You'll learn
                          modern frameworks and best practices used in the
                          industry today.
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-calendar-alt"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Duration
                              </h5>
                              <p className="text-sm text-gray-500">
                                16 weeks (Full-time) / 24 weeks (Part-time)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-graduation-cap"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Skill Level
                              </h5>
                              <p className="text-sm text-gray-500">
                                Beginner to Advanced
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-users"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Class Size
                              </h5>
                              <p className="text-sm text-gray-500">
                                Maximum 20 students
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-dollar-sign"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Tuition
                              </h5>
                              <p className="text-sm text-gray-500">
                                $1,500 (Payment plans available)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Curriculum Highlights
                        </h4>
                        <ul className="mt-2 space-y-3">
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              HTML5, CSS3, and JavaScript fundamentals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Frontend frameworks: React.js, Vue.js
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Backend development with Node.js and Express
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Database design and management (SQL and NoSQL)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              RESTful API development
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Authentication and authorization
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Responsive design and CSS frameworks
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Version control with Git and GitHub
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Deployment and hosting
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Portfolio development and career preparation
                            </span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <a
                            href="#registration-form"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Data Science Content */}
              {activeTab === "dataScience" && (
                <div className="mt-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Data Science & Machine Learning
                        </h3>
                        <p className="mt-2 text-lg text-primary-600">
                          From data analysis to predictive modeling
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          High Demand
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Course Overview
                        </h4>
                        <p className="mt-2 text-gray-600">
                          This program equips you with the skills to extract
                          insights from complex data sets and build predictive
                          models. You'll learn industry-standard tools and
                          techniques used by data scientists at leading
                          companies.
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-calendar-alt"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Duration
                              </h5>
                              <p className="text-sm text-gray-500">
                                20 weeks (Full-time) / 30 weeks (Part-time)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-graduation-cap"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Skill Level
                              </h5>
                              <p className="text-sm text-gray-500">
                                Intermediate to Advanced
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-users"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Class Size
                              </h5>
                              <p className="text-sm text-gray-500">
                                Maximum 15 students
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-dollar-sign"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Tuition
                              </h5>
                              <p className="text-sm text-gray-500">
                                $2,200 (Payment plans available)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Curriculum Highlights
                        </h4>
                        <ul className="mt-2 space-y-3">
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Python programming for data science
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Data cleaning and preprocessing techniques
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Exploratory data analysis and visualization
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Statistical analysis and hypothesis testing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Machine learning algorithms and models
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Deep learning fundamentals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Natural language processing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Big data technologies (Spark, Hadoop)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Data science project workflow
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Model deployment and monitoring
                            </span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <a
                            href="#registration-form"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Placeholder for other course tabs */}
              {/* Cybersecurity Content */}
              {activeTab === "cybersecurity" && (
                <div className="mt-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Cybersecurity Professional
                        </h3>
                        <p className="mt-2 text-lg text-primary-600">
                          Advanced security and ethical hacking
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          High Priority
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Course Overview
                        </h4>
                        <p className="mt-2 text-gray-600">
                          Master cybersecurity fundamentals and advanced
                          techniques. Learn to protect systems, networks, and
                          data from cyber threats while developing skills in
                          ethical hacking and security assessment.
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-calendar-alt"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Duration
                              </h5>
                              <p className="text-sm text-gray-500">
                                18 weeks (Full-time) / 24 weeks (Part-time)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-graduation-cap"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Skill Level
                              </h5>
                              <p className="text-sm text-gray-500">
                                Intermediate to Advanced
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-certificate"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Certification
                              </h5>
                              <p className="text-sm text-gray-500">
                                Industry-recognized cybersecurity certification
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Curriculum Highlights
                        </h4>
                        <ul className="mt-2 space-y-3">
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Network security fundamentals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Ethical hacking techniques
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Security assessment and auditing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Incident response and forensics
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Cloud security
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Security compliance and regulations
                            </span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <a
                            href="#registration-form"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* UI/UX Design Content */}
              {activeTab === "uiuxDesign" && (
                <div className="mt-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          UI/UX Design Professional
                        </h3>
                        <p className="mt-2 text-lg text-primary-600">
                          Create exceptional user experiences
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                          Creative Focus
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Course Overview
                        </h4>
                        <p className="mt-2 text-gray-600">
                          Learn to design intuitive digital experiences through
                          comprehensive training in user interface and user
                          experience design principles, tools, and
                          methodologies.
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-calendar-alt"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Duration
                              </h5>
                              <p className="text-sm text-gray-500">
                                14 weeks (Full-time) / 20 weeks (Part-time)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-graduation-cap"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Skill Level
                              </h5>
                              <p className="text-sm text-gray-500">
                                Beginner to Intermediate
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-paint-brush"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Tools Covered
                              </h5>
                              <p className="text-sm text-gray-500">
                                Figma, Adobe XD, Sketch
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Curriculum Highlights
                        </h4>
                        <ul className="mt-2 space-y-3">
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Design thinking and methodology
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              User research and testing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Wireframing and prototyping
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Visual design principles
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Design systems and documentation
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Portfolio development
                            </span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <a
                            href="#registration-form"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Cloud Computing Content */}
              {activeTab === "cloudComputing" && (
                <div className="mt-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Cloud Computing Professional
                        </h3>
                        <p className="mt-2 text-lg text-primary-600">
                          Master cloud platforms and DevOps
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          Industry Essential
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Course Overview
                        </h4>
                        <p className="mt-2 text-gray-600">
                          Comprehensive training in cloud computing
                          technologies, focusing on major platforms like AWS,
                          Azure, and Google Cloud, along with DevOps practices
                          and tools.
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-calendar-alt"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Duration
                              </h5>
                              <p className="text-sm text-gray-500">
                                16 weeks (Full-time) / 24 weeks (Part-time)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-graduation-cap"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Skill Level
                              </h5>
                              <p className="text-sm text-gray-500">
                                Intermediate to Advanced
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-certificate"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Certifications
                              </h5>
                              <p className="text-sm text-gray-500">
                                AWS, Azure, and GCP preparation
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Curriculum Highlights
                        </h4>
                        <ul className="mt-2 space-y-3">
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Cloud architecture fundamentals
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Multi-cloud deployment strategies
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              DevOps practices and tools
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Container orchestration
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Infrastructure as Code
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Cloud security best practices
                            </span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <a
                            href="#registration-form"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Digital Marketing Content */}
              {activeTab === "digitalMarketing" && (
                <div className="mt-8 overflow-hidden bg-white rounded-lg shadow-sm">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Digital Marketing Professional
                        </h3>
                        <p className="mt-2 text-lg text-primary-600">
                          Master modern marketing strategies
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Growth Focus
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Course Overview
                        </h4>
                        <p className="mt-2 text-gray-600">
                          Learn comprehensive digital marketing strategies, from
                          SEO and content marketing to social media management
                          and analytics, preparing you for a career in modern
                          marketing.
                        </p>
                        <div className="mt-6 space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-calendar-alt"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Duration
                              </h5>
                              <p className="text-sm text-gray-500">
                                12 weeks (Full-time) / 16 weeks (Part-time)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-graduation-cap"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Skill Level
                              </h5>
                              <p className="text-sm text-gray-500">
                                Beginner to Intermediate
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full">
                              <i className="text-primary-600 fas fa-tools"></i>
                            </div>
                            <div className="ml-4">
                              <h5 className="text-sm font-medium text-gray-900">
                                Tools Covered
                              </h5>
                              <p className="text-sm text-gray-500">
                                Google Analytics, SEMrush, Hootsuite
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Curriculum Highlights
                        </h4>
                        <ul className="mt-2 space-y-3">
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              SEO and SEM strategies
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Content marketing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Social media marketing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Email marketing campaigns
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Analytics and reporting
                            </span>
                          </li>
                          <li className="flex items-start">
                            <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                            <span className="text-sm text-gray-600 md:text-base">
                              Digital advertising
                            </span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <a
                            href="#registration-form"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium !rounded-button text-white bg-primary-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Training Benefits */}
      <div className="py-16 bg-primary-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
              Training Benefits
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
              Our programs are designed to provide you with both technical
              skills and career advantages.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md bg-primary-600">
                <i className="text-xl fas fa-certificate"></i>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Industry-Recognized Certification
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Receive a professional certification upon completion that is
                recognized by top employers in the tech industry.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md bg-primary-600">
                <i className="text-xl fas fa-laptop-code"></i>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Hands-on Projects
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Build a professional portfolio with real-world projects that
                demonstrate your skills to potential employers.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md bg-primary-600">
                <i className="text-xl fas fa-user-tie"></i>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Expert Mentorship
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Receive guidance and feedback from industry professionals who
                have years of experience in their fields.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md bg-primary-600">
                <i className="text-xl fas fa-briefcase"></i>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Career Guidance
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Get support with resume building, interview preparation, and job
                search strategies from our career services team.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md bg-primary-600">
                <i className="text-xl fas fa-network-wired"></i>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Networking Opportunities
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with fellow professionals, instructors, and industry
                partners through events and our alumni network.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md bg-primary-600">
                <i className="text-xl fas fa-hands-helping"></i>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Job Placement Assistance
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Access exclusive job opportunities through our employer
                partnerships and recruitment events.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Registration Form */}
      <div
        id="registration-form"
        className="py-24 bg-gradient-to-b from-indigo-50 to-white"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 lg:text-4xl md:text-3xl">
                Begin Your Tech Journey Today
              </h2>
              <p className="mt-4 text-base leading-tight text-center text-gray-600 md:text-xl">
                Transform your career with our industry-leading tech training
                programs. Limited spots available for the next cohort.
              </p>
              <div className="inline-flex items-center justify-center px-4 py-2 mt-6 space-x-2 text-sm text-gray-600 bg-gray-100 rounded-full">
                <i className="text-primary-600 fas fa-users"></i>
                <span>Over 2,000+ students trained</span>
              </div>
            </div>
            {/* Pricing Cards */}
            <div className="px-6 py-2 mx-auto text-sm font-medium text-center text-white rounded-full w-fit bg-primary-600">
              Limited Time Offer - Early Bird Discount
            </div>
            <div className="relative grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
              {/* Nigerian Students */}
              <div className="relative overflow-hidden transition-transform duration-300 transform bg-white border-2 border-indigo-500 shadow-xl rounded-xl hover:scale-105">
                <div className="absolute top-0 right-0 px-4 py-1 text-sm font-medium text-white bg-green-500 rounded-bl-lg">
                  Save 20%
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      Nigerian Students
                    </h3>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 truncate">
                      Popular Choice
                    </span>
                  </div>
                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-extrabold text-primary-600">
                      ₦250,000
                    </span>
                    <span className="ml-2 text-gray-500">/course</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        Full course access with lifetime updates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        Local payment options (Bank transfer, Card)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        Nigerian certification & global recognition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        Dedicated local support team
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        Nigerian tech community access
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <p className="text-sm text-gray-500">
                      * Flexible payment plans available
                    </p>
                    <p className="text-sm text-gray-500">
                      * Early bird discount applicable
                    </p>
                  </div>
                </div>
              </div>
              {/* International Students */}
              <div className="relative overflow-hidden transition-transform duration-300 transform bg-white border-2 border-indigo-500 shadow-xl rounded-xl hover:scale-105">
                <div className="absolute top-0 right-0 px-4 py-1 text-sm font-medium text-white bg-green-500 rounded-bl-lg">
                  Save 20%
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      International Students
                    </h3>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 truncate">
                      Global Access
                    </span>
                  </div>
                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-extrabold text-primary-600">
                      $150
                    </span>
                    <span className="ml-2 text-gray-500">/course</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        Full course access with lifetime updates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        International payment options (PayPal, Card)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        International certification & accreditation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        24/7 global support team
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="mt-1 mr-2 text-green-500 fas fa-check-circle"></i>
                      <span className="text-sm text-gray-600 md:text-base">
                        International tech community access
                      </span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <p className="text-sm text-gray-500">
                      * Flexible payment plans available
                    </p>
                    <p className="text-sm text-gray-500">
                      * Group enrollment discounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-8 space-x-2 text-sm text-gray-600 bg-gray-100 rounded-full">
                <i className="text-primary-600 fas fa-shield-alt"></i>
                <span>Secure Registration Process</span>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 p-8 mt-16 bg-white border border-gray-100 shadow-xl gap-y-6 sm:grid-cols-2 sm:gap-x-8 rounded-xl"
            >
              <div className="mb-8 text-center sm:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Complete Your Registration
                </h3>
                <p className="mt-2 text-gray-600">
                  Fill in your details below to secure your spot
                </p>
              </div>
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
                  htmlFor="nationality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nationality
                </label>
                <div className="mt-1">
                  <select
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select your nationality</option>
                    <option value="Nigerian">Nigerian</option>
                    <option value="International">International</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course of Interest
                </label>
                <div className="mt-1">
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">
                      Data Science & Analytics
                    </option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
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
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experience Level
                </label>
                <div className="mt-1">
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="Beginner">
                      Beginner - No prior experience
                    </option>
                    <option value="Intermediate">
                      Intermediate - Some experience
                    </option>
                    <option value="Advanced">
                      Advanced - Experienced professional
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="goals"
                  className="block text-sm font-medium text-gray-700"
                >
                  What are your learning goals?
                </label>
                <div className="mt-1">
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Briefly describe what you hope to achieve by taking this
                  course (200 words max)
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
                    <option value="Search Engine">Search Engine</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend">Friend/Referral</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Event">Event/Workshop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent !rounded-button shadow-lg text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <i className="mr-2 fas fa-lock"></i>
                  Secure Your Spot Now
                  <i className="ml-2 fas fa-arrow-right"></i>
                </button>
                <div className="mt-8 sm:col-span-2">
                  <div className="p-4 rounded-lg bg-indigo-50">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className="text-2xl text-primary-600 fas fa-shield-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-indigo-900">
                          Secure Registration Guarantee
                        </h4>
                        <p className="mt-1 text-sm text-indigo-700">
                          Your information is encrypted and securely processed.
                          We never share your details with third parties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-center">
                  <p className="text-sm text-gray-500">
                    By registering, you agree to our Terms of Service and
                    Privacy Policy
                  </p>
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center">
                      <i className="mr-2 text-primary-600 fas fa-lock"></i>
                      <span className="text-sm text-gray-600">
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="mr-2 text-primary-600 fas fa-undo"></i>
                      <span className="text-sm text-gray-600">
                        7-Day Money Back
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="mr-2 text-primary-600 fas fa-headset"></i>
                      <span className="text-sm text-gray-600">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-3xl">
              What Our Students Say
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
              Hear from graduates who have successfully completed our training
              programs and advanced their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 overflow-hidden bg-indigo-100 border-2 border-indigo-300 rounded-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520young%2520Indian%2520man%2520with%2520short%2520dark%2520hair%2520in%2520business%2520casual%2520attire%2520against%2520neutral%2520background%252C%2520confident%2520smile%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=25&orientation=squarish"
                    alt="Chinonso Okafor"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Chinonso Okafor
                  </h3>
                  <p className="text-sm text-primary-600">
                    Web 3 Developer at Polygon Labs
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "The Web 3 development program at ZimcrestTech completely
                transformed my career. The curriculum was current, hands-on, and
                mapped to real industry tooling. Barely a month after
                graduating, I had several offers and secured my dream role
                building smart-contract tooling at Polygon Labs."
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
                  Web Development Graduate
                </span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 overflow-hidden bg-indigo-100 border-2 border-indigo-300 rounded-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520young%2520white%2520woman%2520with%2520blonde%2520hair%2520in%2520business%2520casual%2520attire%2520against%2520neutral%2520background%252C%2520confident%2520smile%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=26&orientation=squarish"
                    alt="Aisha Abdullahi"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Aisha Abdullahi
                  </h3>
                  <p className="text-sm text-primary-600">
                    Product Designer at Flutterwave
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                “I already knew basic design, but I wanted to specialise in
                digital-product design. The UI/UX track at ZimcrestTech gave me
                exactly what I needed—intense practice, portfolio-ready
                projects, and direct mentoring. Thanks to the career-support
                sessions, I now craft user-centred experiences at Flutterwave.”
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
                  Product Design Graduate
                </span>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 overflow-hidden bg-indigo-100 border-2 border-indigo-300 rounded-full">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520young%2520Black%2520man%2520with%2520short%2520hair%2520in%2520business%2520casual%2520attire%2520against%2520neutral%2520background%252C%2520confident%2520smile%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=27&orientation=squarish"
                    alt="Tunde Ogunleye"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Tunde Ogunleye
                  </h3>
                  <p className="text-sm text-primary-600">
                    Associate Product Manager at Interswitch
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                “Switching into product management felt daunting, but the PM
                program at ZimcrestTech made the leap possible. The case
                studies, roadmap workshops, and interview prep sharpened my
                skills, and the portfolio I built helped me stand out. I'm now
                driving feature launches at Interswitch.”
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
                  Product Manager Graduate
                </span>
              </div>
            </div>
          </div>
          <div className="mt-16 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-8">
              <h3 className="text-xl font-bold text-center text-gray-900 sm:text-2xl">
                Our Graduates Work At
              </h3>
              <div className="grid grid-cols-2 gap-8 mt-10 sm:grid-cols-3 md:grid-cols-6">
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
                <p className="text-sm text-gray-600 md:text-base">
                  Our training programs have a 92% job placement rate, with
                  graduates working at leading tech companies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
              Find answers to common questions about our training programs.
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-lg bg-gray-50"
                >
                  <button
                    className="flex items-center justify-between w-full px-6 py-4 cursor-pointer focus:outline-none"
                    onClick={() => handleAccordionClick(index)}
                  >
                    <h3 className="text-base font-medium text-left text-gray-900 md:text-lg">
                      {faq.question}
                    </h3>
                    <span className="flex-shrink-0 ml-6">
                      <i
                        className={`fas ${
                          activeAccordion === index
                            ? "fa-chevron-up"
                            : "fa-chevron-down"
                        } text-primary-600`}
                      ></i>
                    </span>
                  </button>
                  <div
                    className={`px-6 pb-4 ${
                      activeAccordion === index ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-sm text-gray-500 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
