import Link from "next/link";
import React from "react";

export default function recommendedPanels() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Recommended Solar Panels
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Check out our selection of high-quality solar panels to get the most
            out of your solar panel system.
          </p>

          <div className="bg-white rounded-lg shadow-lg px-8 py-6 mb-8 flex flex-col md:flex-row md:items-center justify-between w-full">
            <div className="md:w-2/3 md:mr-8 mb-4 md:mb-0">
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                Find Your Perfect Solar Panel
              </h3>
              <p className="text-gray-500">
                Explore our selection of recommended solar panels to find the
                right fit for your home or business.
              </p>
            </div>
            <Link
              href="/recommendedSolarPanels"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Shop Now
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-500">
              Need help choosing the right solar panel?{" "}
              <Link
                href="/contact"
                className="text-yellow-500 hover:text-yellow-700"
              >
                Contact us
              </Link>{" "}
              for expert advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
