import Image from "next/image";
import React from "react";

export default function description() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="relative w-full h-96">
            <Image
              src="/render.jpg"
              alt="Product Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Product Description */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-2xl font-medium mb-4">
            Soturn - Solar Panel Rotation Device
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            semper nunc. Donec in felis augue. Ut ultricies imperdiet nulla vel
            luctus. Nulla facilisi.
          </p>
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold">$99.99</span>
            <span className="text-sm ml-2 text-gray-400">/ per unit</span>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
