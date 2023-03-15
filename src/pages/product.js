import Image from "next/image";
import Layout from "../components/Layout.js";
import { useState } from "react";
import Link from "next/link";
import Features from "@/components/product/features.js";
import Description from "@/components/product/description.js";
import Reviews from "@/components/product/reviews.js";
import AdditionalServices from "@/components/product/additionalServices";
import Package from "@/components/product/package";

export default function Product() {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const handlePackageSelection = (index) => {
    setSelectedPackage(index);
  };
  const packages = [
    { name: "x1", price: 100 },
    { name: "x2", price: 380 },
    { name: "x8", price: 750 },
    { name: "x10", price: 900 },
    { name: "One Time Maintenance", price: 60 },
    { name: "Home Installation", price: 150 },
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

        <AdditionalServices personal={true} />
        <Features personal={true} />
        <Reviews />
      </div>
    </Layout>
  );
}
