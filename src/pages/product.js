import Image from "next/image";
import Layout from "../components/Layout.js";
import { useState } from "react";
import Link from "next/link";
import Features from "@/components/product/features.js";
import Description from "@/components/product/description.js";
import Reviews from "@/components/product/reviews.js";

export default function Product() {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const handlePackageSelection = (index) => {
    setSelectedPackage(index);
  };

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
        <Description />

        <Features />

        <Reviews />
      </div>
    </Layout>
  );
}
