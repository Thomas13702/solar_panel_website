import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

export default function ourMission() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                Meet the Team
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image1.jpg"
                    alt="Image 1"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">Sophie</h3>
                  <p className="text-lg text-gray-800">Project Manager</p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image2.jpg"
                    alt="Image 2"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Adbul-Salam Jah
                  </h3>
                  <p className="text-lg text-gray-800">Researcher</p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image3.jpg"
                    alt="Image 3"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Thomas Pritchard
                  </h3>
                  <p className="text-lg text-gray-800">Lead Web Designer</p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image4.jpg"
                    alt="Image 4"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Zihuan Zhang
                  </h3>
                  <p className="text-lg text-gray-800">Lead Test Engineer</p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image5.jpg"
                    alt="Image 5"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Angus Neville
                  </h3>
                  <p className="text-lg text-gray-800">Business Analyst</p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image6.jpg"
                    alt="Image 6"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Enoch Ng
                  </h3>
                  <p className="text-lg text-gray-800">Marketing Lead Editor</p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image7.jpg"
                    alt="Image 7"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Nijad Merhebi
                  </h3>
                  <p className="text-lg text-gray-800">
                    Chief Financial Officer
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative pb-48/100">
                  <Image
                    src="/image8.jpg"
                    alt="Image 8"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Ewan Green
                  </h3>
                  <p className="text-lg text-gray-800">Pitch Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
