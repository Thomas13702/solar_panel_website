import Layout from "@/components/Layout";
import React from "react";

export default function test() {
  return (
    <Layout>
      <div className="relative h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="./sun.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold uppercase text-center">
            Welcome the New Day
          </h1>
        </div>
      </div>
    </Layout>
  );
}
