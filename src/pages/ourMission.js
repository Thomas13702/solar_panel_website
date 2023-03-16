import Layout from "@/components/Layout";
import React from "react";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Infrastructure Aspects",
    content:
      "Over time, the spinning mechanism may deteriorate and lose efficiency due to mechanical breakdown. Hence, we need tools and equipment to perform regular cleaning on the rotating mechanism and control system. The solar panels' ability to track the sun may be compromised by a problem with the motor that propels their revolution. Hence, we could require a control system to manage the movement of the solar panels and ensure they are facing the sun correctly.",
  },
  {
    title: "Resources or Infrastructure",
    content:
      "Motors to drive the rotation of the solar panels. The motors used to drive the rotation of the solar panels are also considered a fixed asset, as they are integral to the functioning of the system and are not intended to be sold. Potential tools and equipment used to install the solar panels, such as scaffolding, ladders, and electrical wiring.",
  },
  {
    title: "Value Proposition",
    content:
      "Renewable energy which will be used to power homes, businesses and other buildings. In addition, it, other products and service include the hardware and components required to generate the energy including the motor for rotation. The direct values are increased energy efficiency and cost savings by maximizing the exposure to sunlight. With our product we are helping to solve the global issue of the energy crisis. Hence, if we can improve on renewable energy devices that already exist, not only will it make more people want to invest in solar panels, but also it targets the customers who are clearly already concerned about saving energy to improve their solar panels to get the maximum benefit. Hence, there is a large target market.",
  },
  {
    title: "Market Aspects",
    content:
      "We are operating in a business to consumer market. The target customers include residential customers such as homeowners and commercial customers i.e., businesses. We have potential competitors in;, SunPower, SolarEdge, NEXTracker. However, we have achieved product development in creating a new product that the market hasn't seen yet. So, by marketing this USP we can succeed among our competitors. Moreover, we will provide exceptional customer service and build strong relationship with the customer. To build relationships with the customers we will be keeping them informed about the status of their solar panel system providing updates on maintenance and performance and answering any questions they may have. We will provide training on how to use and maintain the solar panel system.",
  },
  {
    title: "Finance Aspects",
    content:
      "To finance the development and launch of the product, there are several options for raising capital, including: Self-funding: The founders of the company can provide the initial capital required to launch the product by using personal savings or other sources of personal financing. Strategic partnerships and collaborations by partnering with larger companies or organizations that share an interest in renewable energy to provide financing or other resources for the development and launch of the product. Our product will attract the attention of the government due to the renewable energy targets that we will help reach, so we can potentially acquire government funding.",
  },
];

export default function OurMission() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Mission</h1>
        <p className="mt-4 text-gray-500">
          Our mission is to revolutionize the renewable energy industry by
          providing innovative solar panel solutions that are both sustainable
          and cost-effective. We believe in harnessing the power of nature to
          create clean energy solutions that will benefit both consumers and the
          environment. Our solar panels with rotating axis technology are
          designed to optimize energy output and efficiency, allowing us to
          provide our customers with a reliable and affordable source of
          renewable energy. We are committed to making a positive impact on the
          world by promoting sustainable living and reducing our carbon
          footprint.
        </p>
        <h2 className="mt-12 text-2xl font-bold text-gray-900">Our Values</h2>
        <ul className="mt-4 ml-8 list-disc text-gray-500">
          <li className="mb-2">
            <span className="font-semibold">Innovation:</span> We strive to
            create products that push the boundaries of what&lsquo;s possible.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Reliability:</span> Our devices are
            built to last, and we stand behind them with a solid warranty and
            exceptional customer service.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Accessibility:</span> We believe
            that everyone should have access to renewable energy, and we work
            hard to make our products affordable and easy to use.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Sustainability:</span> We are
            committed to reducing our environmental impact and promoting
            sustainable practices throughout our organization.
          </li>
        </ul>
      </div>
      <div className="mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10 w-full h-full "></div>
          <div className="relative z-20 text-black flex items-center justify-center h-full">
            <div className="w-full p-4">
              <h2 className="text-xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base">{slides[currentSlide].content}</p>
            </div>
          </div>
          <button
            className="absolute left-0 top-0 bottom-0 z-30 px-4 py-6 text-white hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L9.83 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 top-0 bottom-0 z-30 px-4 py-6 text-white hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M8.59 16.41L10 18l6-6-6-6-1.41 1.41L14.17 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
}
