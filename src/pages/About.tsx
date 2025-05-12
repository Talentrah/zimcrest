import {
  Award,
  Calendar,
  Flag,
  Globe2,
  Handshake,
  Laptop,
  Lightbulb,
  Maximize2,
  RefreshCcw,
  Rocket,
  Scale,
  Star,
  Target,
  Users,
  Users2,
} from "lucide-react";
import Seo from "../components/SEO";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { teamMembers } from "../data/team";

export default function About() {
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
      <section className="relative flex flex-col items-center justify-start w-full gap-4 p-0">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%2520corporate%2520office%2520building%2520with%2520glass%2520facade%2520reflecting%2520blue%2520sky%2520and%2520clouds%252C%2520professional%2520business%2520environment%2520with%2520clean%2520architectural%2520lines%252C%2520tech%2520company%2520headquarters%2520with%2520landscaped%2520entrance%252C%2520subtle%2520lighting%2520creating%2520a%2520welcoming%2520atmosphere%252C%2520elegant%2520and%2520sophisticated%2520corporate%2520identity&width=1440&height=600&seq=1&orientation=landscape"
              alt="About ZimcrestTech"
              className="object-cover object-top w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-transparent mix-blend-multiply"></div>
          </div>
          <div className="relative flex flex-col items-center justify-start px-4 mx-auto py-36 max-w-7xl sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-center text-white sm:text-4xl lg:text-6xl">
              About ZimcrestTech
            </h1>
            <p className="max-w-xl mt-6 text-base text-center text-indigo-100 md:text-xl">
              Empowering African tech talent and connecting innovative companies
              with exceptional professionals since 2018.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full bg-opacity-20 backdrop-filter backdrop-blur-sm">
                <Calendar className="mr-2 text-primary-800 size-4" />
                <span className="text-sm font-medium text-white">
                  Est. 2018
                </span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full bg-opacity-20 backdrop-filter backdrop-blur-sm">
                <Users2 className="mr-2 text-primary-800 size-4" />
                <span className="text-sm font-medium text-white">
                  2,000+ Professionals Trained
                </span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full bg-opacity-20 backdrop-filter backdrop-blur-sm">
                <Globe2 className="mr-2 text-primary-800 size-4" />
                <span className="text-sm font-medium text-white">
                  Operating in 5 Countries
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="w-full py-16 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-6 text-gray-600">
                  <p>
                    Founded in 2018, ZimcrestTech began with a simple mission:
                    to bridge the gap between African tech talent and global
                    opportunities. What started as a small training initiative
                    in Harare has grown into a comprehensive tech ecosystem
                    serving multiple countries across Africa.
                  </p>
                  <p>
                    Our journey has been defined by a commitment to excellence,
                    innovation, and community impact. We've evolved from a
                    training center to a full-service tech talent company,
                    providing recruitment, training, and consulting services to
                    clients worldwide.
                  </p>
                  <p>
                    Today, ZimcrestTech stands as a leader in tech talent
                    development in Africa, with a proven track record of
                    launching thousands of successful careers and supporting
                    businesses with exceptional tech professionals.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="#mission"
                    className="flex items-center font-medium cursor-pointer text-primary-600 hover:text-indigo-500"
                  >
                    Learn about our mission
                    <i className="ml-2 fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-4 rounded-lg shadow-sm md:p-6 bg-gray-50">
                  <div className="flex flex-col items-start gap-4 sm:items-center sm:flex-row sm:gap-0">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                      <Lightbulb className="text-primary-600 md:size-5 size-4" />
                    </div>
                    <div className="ml-0 sm:ml-4">
                      <h3 className="text-base font-medium text-gray-900 md:text-lg">
                        Our Vision
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        To be the premier platform for tech talent in Africa,
                        recognized globally for excellence and innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="mission"
                  className="p-4 rounded-lg shadow-sm md:p-6 bg-gray-50"
                >
                  <div className="flex flex-col items-start gap-4 sm:items-center sm:flex-row sm:gap-0">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                      <Target className="text-primary-600 md:size-5 size-4" />
                    </div>
                    <div className="ml-0 sm:ml-4">
                      <h3 className="text-base font-medium text-gray-900 md:text-lg">
                        Our Mission
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        To empower African tech professionals through
                        world-class training and connect them with meaningful
                        opportunities that drive innovation and economic growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg shadow-sm md:p-6 bg-gray-50">
                  <div className="flex flex-col items-start gap-4 sm:items-center sm:flex-row sm:gap-0">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                      <Handshake className="text-primary-600 md:size-5 size-4" />
                    </div>
                    <div className="ml-0 sm:ml-4">
                      <h3 className="text-base font-medium text-gray-900 md:text-lg">
                        Our Promise
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Excellence in everything we do, integrity in all our
                        dealings, and a commitment to creating lasting positive
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="w-full py-16 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
                Our Journey
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                Milestones that have shaped our growth and impact in the tech
                ecosystem.
              </p>
            </div>
            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

              {/* 2018 */}
              <div className="relative mb-8 md:mb-16">
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <div className="flex-1 mb-4 md:text-right md:pr-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2018
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Foundation
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        ZimcrestTech was founded in Harare, Zimbabwe, with our
                        first web development bootcamp training 15 students.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Flag className="text-white size-5" />
                  </div>
                  <div className="flex-1 hidden md:pl-12 md:block"></div>
                </div>
              </div>

              {/* 2019 */}
              <div className="relative mb-8 md:mb-16">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex-1 hidden md:text-right md:pr-12 md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Maximize2 className="text-white size-5" />
                  </div>
                  <div className="flex-1 mb-4 md:pl-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:mr-auto md:ml-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2019
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Expansion
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Expanded our curriculum to include data science and
                        UI/UX design. Opened a second training center in
                        Bulawayo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative mb-8 md:mb-16">
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <div className="flex-1 mb-4 md:text-right md:pr-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2020
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Digital Transformation
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Launched our virtual learning platform in response to
                        the pandemic, reaching students across Africa.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Laptop className="text-white size-5" />
                  </div>
                  <div className="flex-1 hidden md:pl-12 md:block"></div>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative mb-8 md:mb-16">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex-1 hidden md:text-right md:pr-12 md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Handshake className="text-white size-5" />
                  </div>
                  <div className="flex-1 mb-4 md:pl-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:mr-auto md:ml-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2021
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Corporate Partnerships
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Established partnerships with 20+ global tech companies
                        for internships and job placements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative mb-8 md:mb-16">
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <div className="flex-1 mb-4 md:text-right md:pr-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2022
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Regional Growth
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Expanded operations to South Africa, Kenya, and Rwanda.
                        Reached milestone of 1,000 graduates.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Globe2 className="text-white size-5" />
                  </div>
                  <div className="flex-1 hidden md:pl-12 md:block"></div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative mb-8 md:mb-16">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex-1 hidden md:text-right md:pr-12 md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Award className="text-white size-5" />
                  </div>
                  <div className="flex-1 mb-4 md:pl-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:mr-auto md:ml-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2023
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Recognition & Awards
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Named "Best Tech Training Provider in Africa" at the
                        African Tech Awards. Launched scholarship program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative">
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <div className="flex-1 mb-4 md:text-right md:pr-12 md:mb-0">
                    <div className="max-w-md p-6 bg-white rounded-lg shadow-sm md:ml-auto md:mr-0">
                      <h3 className="text-xl font-bold text-primary-600">
                        2024
                      </h3>
                      <h4 className="mt-1 text-lg font-medium text-gray-900">
                        Innovation Hub
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 md:text-base">
                        Launched ZimcrestTech Innovation Hub, providing
                        incubation and acceleration for tech startups across
                        Africa.
                      </p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 border-4 border-white rounded-full shadow">
                    <Rocket className="text-white size-5" />
                  </div>
                  <div className="flex-1 hidden md:pl-12 md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="w-full py-16 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                Our Core Values
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                The principles that guide everything we do at ZimcrestTech.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
              <div className="p-6 transition-shadow duration-300 border border-gray-100 rounded-lg shadow-sm md:p-8 bg-gray-50 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <Star className="fill-primary-700 stroke-transparent size-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                  We are committed to the highest standards in everything we do,
                  from our training programs to our client services and internal
                  operations.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 border border-gray-100 rounded-lg shadow-sm md:p-8 bg-gray-50 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <Scale className="size-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Integrity</h3>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                  We operate with honesty, transparency, and ethical conduct in
                  all our relationships with students, clients, partners, and
                  team members.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 border border-gray-100 rounded-lg shadow-sm md:p-8 bg-gray-50 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <Lightbulb className="size-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                  We embrace creative thinking and continuous improvement,
                  staying at the forefront of technology and educational
                  methodologies.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 border border-gray-100 rounded-lg shadow-sm md:p-8 bg-gray-50 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <Users className="size-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Community</h3>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                  We foster an inclusive, supportive environment where diverse
                  perspectives are valued and everyone can thrive and grow
                  together.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 border border-gray-100 rounded-lg shadow-sm md:p-8 bg-gray-50 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <Handshake className="size-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Impact</h3>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                  We are dedicated to creating meaningful, positive change in
                  the lives of our students and the broader tech ecosystem in
                  Africa.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 border border-gray-100 rounded-lg shadow-sm md:p-8 bg-gray-50 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <RefreshCcw className="size-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Adaptability
                </h3>
                <p className="mt-4 text-sm text-gray-600 md:text-base">
                  We embrace change and remain flexible, continuously evolving
                  to meet the dynamic needs of the tech industry and our
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="w-full py-16 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                Our Leadership Team
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                Meet the experienced professionals guiding ZimcrestTech's vision
                and operations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-16 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* CEO */}
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
                >
                  <div className="overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="font-medium text-primary-600 text-md">
                      {member.role}
                    </p>
                    <p className="mt-4 text-gray-600">{member.description}</p>
                    <div className="flex mt-6 space-x-4">
                      {member.socials.map((social) => (
                        <Link
                          key={crypto.randomUUID()}
                          to={social.href}
                          className="hover:text-primary-600"
                        >
                          {
                            <social.icon className="text-gray-400 hover:text-primary-600" />
                          }
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="w-full py-16 overflow-hidden bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                Our Culture
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                The ZimcrestTech environment is built on collaboration, growth,
                and purpose.
              </p>
            </div>
            <div className="relative mt-16">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                <div className="relative lg:mt-0" aria-hidden="true">
                  <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
                    <div className="relative overflow-hidden shadow-xl rounded-2xl">
                      <img
                        className="inset-0 object-cover w-full h-full"
                        src="https://readdy.ai/api/search-image?query=Modern%2520tech%2520office%2520with%2520diverse%2520African%2520professionals%2520collaborating%2520in%2520bright%2520open%2520workspace%252C%2520contemporary%2520design%2520with%2520glass%2520walls%2520and%2520collaborative%2520areas%252C%2520people%2520engaged%2520in%2520discussion%2520around%2520computers%2520and%2520whiteboards%252C%2520positive%2520work%2520environment%2520with%2520natural%2520light&width=800&height=600&seq=8&orientation=landscape"
                        alt="ZimcrestTech workspace"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="mt-10 space-y-6">
                    <div className="flex flex-col gap-2 md:flex-row md:gap-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-600">
                          <i className="fas fa-graduation-cap"></i>
                        </div>
                      </div>
                      <div className="ml-0 md:ml-4">
                        <h3 className="text-base font-medium text-gray-900 md:text-lg">
                          Continuous Learning
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 md:text-base">
                          We foster a culture where everyone is encouraged to
                          keep learning, experimenting, and growing
                          professionally.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-600">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                      <div className="ml-0 md:ml-4">
                        <h3 className="text-base font-medium text-gray-900 md:text-lg">
                          Collaborative Environment
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 md:text-base">
                          We believe in the power of teamwork and create spaces
                          where diverse perspectives come together to create
                          better solutions.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-600">
                          <i className="fas fa-globe-africa"></i>
                        </div>
                      </div>
                      <div className="ml-0 md:ml-4">
                        <h3 className="text-base font-medium text-gray-900 md:text-lg">
                          African Innovation
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 md:text-base">
                          We celebrate and nurture African tech talent, creating
                          solutions that address local challenges while meeting
                          global standards.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-600">
                          <i className="fas fa-heart"></i>
                        </div>
                      </div>
                      <div className="ml-0 md:ml-4">
                        <h3 className="text-base font-medium text-gray-900 md:text-lg">
                          Work-Life Balance
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 md:text-base">
                          We value the wellbeing of our team and create flexible
                          policies that allow everyone to thrive both
                          professionally and personally.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Link
                      to="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium !rounded-button text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                    >
                      Join Our Team
                      <i className="ml-3 fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="w-full py-16 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                Achievements & Recognition
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                Milestones and accolades that highlight our commitment to
                excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-16 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <i className="text-xl text-primary-600 fas fa-award"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Best Tech Training Provider in Africa
                </h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Awarded at the 2023 African Tech Awards for excellence in tech
                  education and impact across the continent.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <i className="text-xl text-primary-600 fas fa-users"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  2,000+ Graduates
                </h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Trained over two thousand tech professionals who now work at
                  leading companies globally, with a 92% job placement rate.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <i className="text-xl text-primary-600 fas fa-handshake"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  50+ Corporate Partnerships
                </h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Established relationships with over fifty global tech
                  companies for internships, job placements, and curriculum
                  development.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <i className="text-xl text-primary-600 fas fa-globe-africa"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Pan-African Presence
                </h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Expanded operations to five countries across Africa, with
                  training centers in Zimbabwe, South Africa, Kenya, Rwanda, and
                  Nigeria.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <i className="text-xl text-primary-600 fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Scholarship Program
                </h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Launched a scholarship initiative that has provided full
                  training sponsorship to over 200 talented students from
                  underserved communities.
                </p>
              </div>
              <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-indigo-100 rounded-full">
                  <i className="text-xl text-primary-600 fas fa-newspaper"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Media Recognition
                </h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Featured in leading publications including TechCrunch, Forbes
                  Africa, and CNN Africa for our innovative approach to tech
                  education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-full py-16 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
                What People Say
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
                Hear from our graduates, partners, and team members about their
                experience with ZimcrestTech.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="relative p-8 rounded-lg shadow-sm bg-gray-50">
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                  <i className="text-4xl text-indigo-200 fas fa-quote-left"></i>
                </div>
                <p className="relative z-10 italic text-gray-600">
                  "ZimcrestTech transformed my career. Their web development
                  program gave me the skills and confidence to land a job at a
                  global tech company. The instructors were exceptional and the
                  career support was invaluable."
                </p>
                <div className="flex items-center mt-8">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 rounded-full"
                      src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520young%2520African%2520woman%2520with%2520natural%2520hair%2520in%2520business%2520casual%2520attire%2520against%2520neutral%2520background%252C%2520confident%2520smile%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=9&orientation=squarish"
                      alt="Chido Makunike"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      Chido Makunike
                    </div>
                    <div className="text-sm text-primary-600">
                      Frontend Developer at Microsoft
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative p-8 rounded-lg shadow-sm bg-gray-50">
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                  <i className="text-4xl text-indigo-200 fas fa-quote-left"></i>
                </div>
                <p className="relative z-10 italic text-gray-600">
                  "As a hiring partner, we've been consistently impressed with
                  the quality of talent from ZimcrestTech. Their graduates are
                  well-prepared, technically skilled, and bring fresh
                  perspectives to our teams."
                </p>
                <div className="flex items-center mt-8">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 rounded-full"
                      src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520mature%2520African%2520man%2520with%2520glasses%2520in%2520business%2520attire%2520against%2520neutral%2520background%252C%2520confident%2520expression%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=10&orientation=squarish"
                      alt="Dr. Emmanuel Okafor"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      Dr. Emmanuel Okafor
                    </div>
                    <div className="text-sm text-primary-600">
                      CTO, AfriTech Solutions
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative p-8 rounded-lg shadow-sm bg-gray-50">
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                  <i className="text-4xl text-indigo-200 fas fa-quote-left"></i>
                </div>
                <p className="relative z-10 italic text-gray-600">
                  "ZimcrestTech's data science program provided exactly what I
                  needed to transition into tech. The curriculum was rigorous,
                  practical, and aligned with industry needs. I'm now working
                  remotely for a US company."
                </p>
                <div className="flex items-center mt-8">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 rounded-full"
                      src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520young%2520African%2520man%2520in%2520casual%2520business%2520attire%2520against%2520neutral%2520background%252C%2520confident%2520smile%252C%2520professional%2520lighting%252C%2520high%2520quality%2520portrait&width=200&height=200&seq=11&orientation=squarish"
                      alt="Tendai Moyo"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      Tendai Moyo
                    </div>
                    <div className="text-sm text-primary-600">
                      Data Scientist at Databricks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-indigo-700">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to start your tech journey?</span>
              <span className="block text-indigo-200">
                Join ZimcrestTech today.
              </span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-8 lg:mt-0 lg:flex-shrink-0">
              <Link
                to="/training"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium !rounded-button text-primary-600 bg-white hover:bg-indigo-50 whitespace-nowrap cursor-pointer"
              >
                Explore Training Programs
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium !rounded-button text-white bg-transparent hover:bg-indigo-600 whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
