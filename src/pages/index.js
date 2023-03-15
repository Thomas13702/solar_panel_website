import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout.js";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "Soturn is a game changer! It's the only product on the market that can rotate solar panels towards the sun for maximum energy efficiency.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I was skeptical about Soturn at first, but after using it for a month, I'm convinced it's the best solution for solar energy optimization.",
  },

  {
    id: 4,
    name: "Samantha Lee",
    text: "Soturn has completely exceeded my expectations. It's improved my solar panel energy output by 30%!",
  },
  {
    id: 5,
    name: "Chris Taylor",
    text: "I'm blown away by the impact Soturn has had on my energy bill. It's truly a revolutionary product.",
  },
  {
    id: 6,
    name: "Maria Rodriguez",
    text: "Soturn has made such a difference in my energy usage. I highly recommend it to anyone who wants to save money and reduce their carbon footprint.",
  },
  {
    id: 7,
    name: "Samantha Lee",
    text: "I never knew how much I needed Soturn until I tried it. It's the only product on the market that can truly optimize solar panel energy output.",
  },
  {
    id: 8,
    name: "Mike Williams",
    text: "Soturn is the real deal. It's made a huge difference in my energy efficiency and I couldn't be happier with the results.",
  },
  {
    id: 9,
    name: "Emily Davis",
    text: "I'm so glad I discovered Soturn. It's exceeded all of my expectations and has helped me save money on my energy bill.",
  },
  {
    id: 10,
    name: "Chris Thompson",
    text: "I've been using Soturn for six months now and I'm still amazed at how much more efficient my solar panels are. It's the only product on the market worth considering.",
  },
  {
    id: 11,
    name: "Karen Rodriguez",
    text: "Soturn is a game changer for anyone who cares about energy efficiency. It's the best product on the market for optimizing solar panel output.",
  },
];
export default function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePreviousReview = () => {
    setCurrentReviewIndex(
      (currentReviewIndex - 1 + reviews.length) % reviews.length
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex];
  return (
    <Layout>
      {/* Product */}
      <div className="flex flex-col items-center justify-center bg-gray-100 pb-12">
        {/* video */}
        <div className="relative w-full h-96 overflow-hidden hidden sm:block">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src="./sun.mp4"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl font-bold uppercase text-center">
                Soturn
              </h1>
              <h3 className="mt-4 text-white text-3xl">
                Track the Sun, Save the Planet
              </h3>
            </div>
          </div>
        </div>
        <div className="container max-w-9xl mx-auto flex flex-col md:flex-row items-center md:justify-between px-4 py-8">
          {/* Showcase */}

          <div className="flex flex-col items-center w-full md:w-1/2">
            <div className="md:hidden">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center">
                Soturn
              </h1>
              <h3 className="mb-4 text-black text-3xl text-center">
                Track the Sun, Save the Planet
              </h3>
            </div>
            <div className=" hidden sm:block">
              <h1 className="text-3xl md:text-6xl font-bold text-gray-800 text-center mb-8">
                Buy Now!
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-8 mx-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              lorem50
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <Link
                href="/product"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Buy Now
              </Link>
              <p className="text-gray-500 text-sm md:ml-4 mt-2 md:mt-0">
                Free Shipping on All Orders
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-96 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsinline
                src="./finished2.mp4"
              />
            </div>

            {/* <img
              src="https://source.unsplash.com/800x600/?product"
              alt="Product"
              className="rounded shadow-lg"
            /> */}
          </div>
        </div>
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
                conditions, making it a reliable and long-lasting energy
                solution.
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
                The rotating axis system can be easily scaled up or down
                depending on energy needs, making it a flexible and customizable
                solution.
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
        <div className="bg-gray-100 py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Pricing Plans
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0 mx-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Personal
                </h3>
                <p className="text-gray-600 mb-4">
                  Our personal package for SoTurn is the perfect solution for
                  individuals looking to upgrade to renewable energy. With
                  tailored consultations, installation services, and ongoing
                  maintenance and support, we make it easy to switch to solar
                  and start saving on your energy bills.
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Business
                </h3>
                <p className="text-gray-600 mb-4">
                  Our business package for rotating solar panels is the ideal
                  solution for companies seeking to reduce their energy costs
                  and carbon footprint. Our expert team will work with you to
                  design a customized solar panel system that fits your specific
                  needs and energy goals.
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
        <div className="container px-4 mx-auto py-12">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <Image
                src="/render.jpg"
                width={700}
                height={500}
                alt="Soturn Render"
              />
            </div>
            <div className="md:w-1/2 px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About Us - How does it work
              </h2>
              <p className="text-gray-600 mb-6">
                Soturn is built with high-quality materials like aluminum,
                steel, and rare-earth magnets to ensure that it works
                effectively for many years, even during severe weather
                conditions. To track the sun, we use a solar panel that
                maintains its orientation towards the sun with high accuracy and
                precision, thanks to an Integrated Circuit that calculates the
                sun angles after entering the customer&lsquo;s location and time
                zone. For technical details on how we achieve this, click the
                link below.
              </p>

              <Link
                href="/about"
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Recommended Solar Panels */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Recommended Solar Panels
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Check out our selection of high-quality solar panels to get the
              most out of your solar panel system.
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Shop Now
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-500">
                Need help choosing the right solar panel?{" "}
                <Link href="/contact" className="text-blue-500">
                  Contact us
                </Link>{" "}
                for expert advice.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-100 py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0 mx-4 md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  How do I get started?
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0 mx-4 md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Carousel */}
        <div className="flex flex-col items-center justify-center px-4 py-6 sm:p-8 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What People are Saying
          </h2>
          <div className="text-center mb-4">
            <p className="text-lg font-medium text-gray-900">
              {currentReview.text}
            </p>
            <p className="text-gray-500 mt-2">{currentReview.name}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handlePreviousReview}
              className="bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded-l-lg focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNextReview}
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
                Request Maintenance
              </h2>
              <p className="text-gray-500 text-center mb-8">
                If you are experiencing issues with your solar panel system,
                fill out the form below and we will get in touch with you to
                schedule maintenance.
              </p>

              <form
                onSubmit={""}
                className="bg-white rounded-lg shadow-lg px-8 py-6 mb-8"
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="johndoe@example.com"
                    value={""}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                    placeholder="Describe the issue you are experiencing"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      {/* <div className="bg-gray-100 py-4 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-auto md:flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-yellow-500">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
              <p className="ml-3 font-medium text-gray-900 text-center md:text-left">
                <span className="md:hidden">Shop now and get 10% off!</span>
                <span className="hidden md:inline">
                  Do not miss out on our limited-time offer: get 10% off when
                  you buy today!
                </span>
              </p>
            </div>
            <div className="w-full mt-2 md:w-auto md:mt-0 md:ml-4 md:order-3 md:flex-shrink-0">
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
