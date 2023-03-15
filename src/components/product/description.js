import Image from "next/image";
import React from "react";
import PackageSelector from "./packageSelector";

export default function description({ whatPackage }) {
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
            SoTurn - Solar Panel Rotation Device
          </h1>
          <p className="text-gray-600 mb-8">
            SoTurn is a small, cylindrical block with a motor inside that can be
            attached to solar panels, to make them move on a vertical and
            rotational axis, so they protrude further above ground level and are
            always facing the sun.
          </p>
          <div className="flex items-center mb-4">
            <PackageSelector packages={whatPackage} />
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
