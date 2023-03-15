import React, { useState } from "react";

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

export default function carousel() {
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
    <>
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
    </>
  );
}
