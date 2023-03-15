import React from "react";

const Package = ({ title, price, features }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 text-3xl font-bold mb-8">{price}</p>
      <ul className="text-gray-700 text-lg mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-4">
            <svg
              className="fill-current text-yellow-500 w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Package;
