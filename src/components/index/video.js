import React from "react";

export default function video() {
  return (
    <>
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
    </>
  );
}
