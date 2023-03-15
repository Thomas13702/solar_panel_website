import Image from "next/image";
import Layout from "../components/Layout.js";
import { useState } from "react";
import Link from "next/link";
import Features from "@/components/product/features.js";
import Description from "@/components/product/description.js";
import Reviews from "@/components/product/reviews.js";
import PackageDescription from "@/components/product/packageDescription.js";
import AdditionalServices from "@/components/product/additionalServices";

export default function Product() {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const handlePackageSelection = (index) => {
    setSelectedPackage(index);
  };
  const packages = [
    { name: "One Tracker", price: 100 },
    { name: "Personal", price: 390 },
    { name: "Personal +", price: 490 },
    { name: "One Time Maintenance", price: 60 },
    { name: "Home Installation", price: 150 },
  ];

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
        <Description whatPackage={packages} />

        <PackageDescription />
        <AdditionalServices />
        <Features />

        <Reviews />
      </div>
    </Layout>
  );
}
