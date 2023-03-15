import Link from "next/link";
import React from "react";

export default function showcase() {
  return (
    <div className="container max-w-9xl mx-auto flex flex-col md:flex-row items-center md:justify-between px-4 py-8">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="md:hidden">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center">
            SoTurn
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
          Our product is a small mechanism that can be attached to solar panels,
          to make them move on a vertical and rotational axis, so they protrude
          further above ground level and are always facing the sun.
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <Link
            href="/product"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
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
      </div>
    </div>
  );
}
