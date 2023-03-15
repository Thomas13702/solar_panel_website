import Link from "next/link";
import React from "react";

export default function features({ personal }) {
  const product = {
    id: 1,
    name: "Apple iPhone 12",
    imageSrc: "/iphone.jpg",
    description:
      "The iPhone 12 features a 6.1-inch Super Retina XDR display, Ceramic Shield with four times better drop performance, and the A14 Bionic chip, the fastest chip ever in a smartphone.",
    price: 799.99,
    rating: 4.9,
    numReviews: 172,
    features: [
      "Maximum Efficiency: With a rotating axis, the solar panel system can track the sun's movement throughout the day, ensuring maximum exposure to sunlight and higher energy output.",
      "Energy Savings: By producing more energy than fixed-tilt solar panels, the rotating axis system can help homeowners and businesses save more on their energy bills.",
      "Sustainability: Solar panel systems with rotating axis technology help reduce reliance on non-renewable energy sources, thereby reducing carbon footprint and contributing to a more sustainable future.",
      "Easy Maintenance: The rotating axis system requires minimal maintenance, as it is designed to operate efficiently with minimal intervention.",
      "Increased Property Value: Installing a solar panel system with rotating axis technology can increase the value of a property, making it more attractive to potential buyers.",
      "Versatility: The rotating axis system is suitable for a wide range of applications, including residential, commercial, and industrial use.",
      "Weather-Resistant: The rotating axis system is designed to withstand harsh weather conditions, making it a reliable and long-lasting energy solution.",
      "Scalability: The rotating axis system can be easily scaled up or down depending on energy needs, making it a flexible and customizable solution.",
      "Smart Technology: Some rotating axis systems come with advanced tracking algorithms and sensors that optimize energy output and minimize shading, ensuring consistent and reliable performance.",
      "Quick Installation: The rotating axis system can be installed quickly and easily, reducing downtime and minimizing disruption to daily operations.",
      "Compatibility: The rotating axis system is compatible with most existing solar panel systems, making it a cost-effective and easy upgrade.",
      "Low Environmental Impact: Solar panel systems with rotating axis technology have a low environmental impact, producing no noise or emissions.",
      "Long Lifespan: The rotating axis system has a long lifespan, with some systems lasting up to 25 years or more, providing long-term energy savings.",
      "Financing Options: Many companies offering rotating axis solar panel systems also provide financing options, making it easier for homeowners and businesses to make the switch to renewable energy.",
    ],
  };
  return (
    <div>
      <div className="mt-8 p-6">
        <h2 className="text-lg font-medium mb-4">Product Features</h2>
        <ul className="list-disc list-inside">
          {product.features.map((feature) => (
            <li key={feature} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {personal && (
        <div className="flex justify-center text-3xl">
          <Link href="/businessProduct">
            <p className=" text-blue-500 rounded-md 0 transition duration-300 m-3">
              Business looking to buy? Click here.
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
