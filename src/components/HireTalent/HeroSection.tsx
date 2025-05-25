import React from 'react';

const HeroSection: React.FC = () => {
  return (
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
          Access a pool of highly skilled tech professionals ready to
          elevate your projects and drive innovation.
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
  );
};

export default HeroSection;