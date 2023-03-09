import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout.js";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "This product is amazing! I can't believe how much it has improved my life.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I was skeptical at first, but after using this product for a week, I'm a believer.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    text: "I've tried other products like this before, but none of them compare to this one.",
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
      {/* Image photo */}
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2 md:text-center">
          <img
            className="h-64 w-full object-cover md:h-auto md:w-64 mx-auto"
            src="https://via.placeholder.com/400"
            alt="Product Image"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            New Product
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Product Name
          </a>
          <p className="mt-2 text-gray-500">Product Description</p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-block bg-yellow-500 text-white rounded-full px-3 py-1 font-semibold mr-2"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="bg-gray-100 py-4 my-12">
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
      </div>
      {/* Carousel */}
      <div className="flex flex-col items-center justify-center px-4 py-6 sm:p-8">
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
    </Layout>
  );
}
