import React from "react";

export default function features() {
  return (
    <div>
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Features
        </h2>
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              alt="Feature 1"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Easy Maintenance
            </h3>
            <p className="text-gray-600 text-center">
              The rotating axis system requires minimal maintenance, as it is
              designed to operate efficiently with minimal intervention.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              alt="Feature 2"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Weather-Resistant
            </h3>
            <p className="text-gray-600 text-center">
              The rotating axis system is designed to withstand harsh weather
              conditions, making it a reliable and long-lasting energy solution.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              alt="Feature 3"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Scalability
            </h3>
            <p className="text-gray-600 text-center">
              The rotating axis system can be easily scaled up or down depending
              on energy needs, making it a flexible and customizable solution.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              alt="Feature 4"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Quick Installation
            </h3>
            <p className="text-gray-600 text-center mx-3">
              The rotating axis system can be installed quickly and easily,
              reducing downtime and minimizing disruption to daily operations.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              alt="Feature 5"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Low Environmental Impact
            </h3>
            <p className="text-gray-600 text-center mx-3">
              Solar panel systems with rotating axis technology have a low
              environmental impact, producing no noise or emissions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
              alt="Feature 6"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Long Lifespan
            </h3>
            <p className="text-gray-600 text-center mx-3">
              The rotating axis system has a long lifespan, with some systems
              lasting up to 25 years or more, providing long-term energy
              savings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
