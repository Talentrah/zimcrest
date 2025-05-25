import React from 'react';
import { HireService } from '../../types/hire.types';

interface ValuePropositionProps {
  hireServices: HireService[];
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ hireServices }) => {
  const mainFeatures = [
    {
      icon: "fas fa-check-circle",
      title: "Vetted Professionals",
      description: "All our talents undergo rigorous technical assessments and interviews to ensure top quality."
    },
    {
      icon: "fas fa-bolt",
      title: "Quick Matching",
      description: "Get matched with the right talent within days, not weeks or months."
    },
    {
      icon: "fas fa-handshake",
      title: "Ongoing Support",
      description: "We provide continuous support throughout the engagement to ensure success."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 md:text-4xl">
            Why Choose Our Talent
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-base leading-tight text-center text-gray-500 md:text-lg">
            We connect you with pre-vetted tech professionals who have been
            rigorously assessed for both technical skills and cultural fit.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="p-8 text-center rounded-lg bg-indigo-50">
                <div className="flex items-center justify-center w-8 h-8 mx-auto text-white rounded-md md:w-12 md:h-12 bg-primary-600">
                  <i className={`text-base md:text-xl ${feature.icon}`}></i>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
            {hireServices.map((service, index) => (
              <div
                className="p-8 text-center rounded-lg bg-indigo-50"
                key={index}
              >
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-tight text-gray-500">
                  {service.description}
                </p>
                <ul className="flex flex-col items-start justify-start gap-0 mx-auto mt-4 list-disc list-outside w-fit">
                  {service.features.map((list, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-700 md:text-base"
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
