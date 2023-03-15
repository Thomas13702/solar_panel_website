import Layout from "@/components/Layout";
import React from "react";
import Features from "@/components/product/features.js";
import Description from "@/components/product/description.js";
import Reviews from "@/components/product/reviews.js";
import Package from "@/components/product/package";
import AdditionalServices from "@/components/product/additionalServices";

export default function businessProduct() {
  const packages = [
    { name: "x20", price: 1800 },
    { name: "x30", price: 2600 },
    { name: "x40", price: 3550 },
    { name: "x50", price: 4300 },
    { name: "One Time Maintenance", price: 60 },
    { name: "Business Installation", price: 150 },
  ];
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
        <Description whatPackage={packages} />

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 py-8 px-4">
          <h1 className="font-bold text-2xl text-gray-500">
            Package deals - if you&lsquo;re buying several solar trackers, we
            have a package deal for you!
          </h1>
          <Package
            title="Package Deal"
            price="Only £150 Extra"
            features={[
              "Free Shipping",
              "Two-year free maintenance",
              "Home Installation (Uk Only)",
            ]}
          />
        </div>
        <AdditionalServices personal={false} />

        <Features />

        <Reviews />
      </div>
    </Layout>
  );
}
