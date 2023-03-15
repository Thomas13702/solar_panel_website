import Layout from "@/components/Layout";
import React from "react";

export default function ourMission() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Mission</h1>
        <p className="mt-4 text-gray-500">
          Our mission is to revolutionize the renewable energy industry by
          providing innovative solar panel solutions that are both sustainable
          and cost-effective. We believe in harnessing the power of nature to
          create clean energy solutions that will benefit both consumers and the
          environment. Our solar panels with rotating axis technology are
          designed to optimize energy output and efficiency, allowing us to
          provide our customers with a reliable and affordable source of
          renewable energy. We are committed to making a positive impact on the
          world by promoting sustainable living and reducing our carbon
          footprint.
        </p>
        <h2 className="mt-12 text-2xl font-bold text-gray-900">Our Values</h2>
        <ul className="mt-4 ml-8 list-disc text-gray-500">
          <li className="mb-2">
            <span className="font-semibold">Innovation:</span> We strive to
            create products that push the boundaries of what&lsquo;s possible.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Reliability:</span> Our devices are
            built to last, and we stand behind them with a solid warranty and
            exceptional customer service.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Accessibility:</span> We believe
            that everyone should have access to renewable energy, and we work
            hard to make our products affordable and easy to use.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Sustainability:</span> We are
            committed to reducing our environmental impact and promoting
            sustainable practices throughout our organization.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
