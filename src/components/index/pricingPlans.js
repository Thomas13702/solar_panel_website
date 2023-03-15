import Link from "next/link";
import React from "react";

export default function pricingPlans() {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Pricing Plans
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0 mx-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personal</h3>
              <p className="text-gray-600 mb-4">
                Our personal package for SoTurn is the perfect solution for
                individuals looking to upgrade to renewable energy. With
                tailored consultations, installation services, and ongoing
                maintenance and support, we make it easy to switch to solar and
                start saving on your energy bills.
              </p>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">$19</h4>
              <Link
                href="/product"
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Buy Now
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0 mx-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Business</h3>
              <p className="text-gray-600 mb-4">
                Our business package for rotating solar panels is the ideal
                solution for companies seeking to reduce their energy costs and
                carbon footprint. Our expert team will work with you to design a
                customized solar panel system that fits your specific needs and
                energy goals.
              </p>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">$49</h4>
              <Link
                href="/businessProduct"
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
