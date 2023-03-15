import Layout from "@/components/Layout";
import React from "react";
import Features from "@/components/product/features.js";
import Description from "@/components/product/description.js";
import Reviews from "@/components/product/reviews.js";
import Package from "@/components/product/package";
import AdditionalServices from "@/components/product/additionalServices";

export default function businessProduct() {
  const packages = [
    { name: "Organisation", price: 95 },
    { name: "Organisation+", price: 90 },
    { name: "One Time Maintenance", price: 60 },
    { name: "Business Installation", price: 150 },
  ];
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
        <Description whatPackage={packages} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4">
          <Package
            title="Personal package"
            price="£90 for one, min of 20"
            features={[
              "Multiple solar panel trackers",
              "One-year free maintenance insurance",
            ]}
          />
          <Package
            title="Personal package +"
            price="£95 for one, min of 20"
            features={[
              "Multiple solar panel trackers ",
              "Three-year free maintenance insurance",
              "To-home installation (UK)",
            ]}
          />
        </div>
        <AdditionalServices />

        <Features />

        <Reviews />
      </div>
    </Layout>
  );
}
