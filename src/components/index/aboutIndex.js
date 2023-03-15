import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function aboutIndex() {
  return (
    <>
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
              Soturn is built with high-quality materials like aluminum, steel,
              and rare-earth magnets to ensure that it works effectively for
              many years, even during severe weather conditions. To track the
              sun, we use a solar panel that maintains its orientation towards
              the sun with high accuracy and precision, thanks to an Integrated
              Circuit that calculates the sun angles after entering the
              customer&lsquo;s location and time zone. For technical details on
              how we achieve this, click the link below.
            </p>

            <Link
              href="/about"
              className="text-white bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded  transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
