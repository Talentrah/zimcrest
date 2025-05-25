
import React from 'react';
import { Category } from '../../types/hire.types';

interface TalentCategoriesProps {
  categories: Category[];
}

const TalentCategories: React.FC<TalentCategoriesProps> = ({ categories }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Our Talent Categories
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We offer experts across all major technology domains to meet
            your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <div
              key={index}
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
  );
};

export default TalentCategories;