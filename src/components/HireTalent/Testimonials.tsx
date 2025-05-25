import React from 'react';
import { Testimonial } from '../../types/hire.types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      company: "TechInnovate Inc.",
      industry: "Software Development",
      icon: "fas fa-building",
      testimonial: "ZimcrestTech helped us find a senior full stack developer in just a week. The talent was exceptional and integrated seamlessly with our team.",
      rating: 5
    },
    {
      company: "DataViz Solutions",
      industry: "Data Analytics",
      icon: "fas fa-chart-pie",
      testimonial: "We needed specialized data analysts for a time-sensitive project. ZimcrestTech delivered top-tier talent that exceeded our expectations.",
      rating: 4.5
    },
    {
      company: "E-Commerce Plus",
      industry: "Online Retail",
      icon: "fas fa-shopping-cart",
      testimonial: "The UI/UX designer we hired through ZimcrestTech transformed our user experience, resulting in a 40% increase in conversion rates.",
      rating: 5
    }
  ];

  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full md:w-12 md:h-12">
                  <i className={`text-base text-primary-600 md:text-xl ${testimonial.icon}`}></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.company}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.industry}
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "{testimonial.testimonial}"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;