import { Inter } from "next/font/google";
import Layout from "../components/Layout.js";
import Video from "../components/index/video.js";
import Showcase from "../components/index/showcase.js";
import Features from "../components/index/features.js";
import PricingPlans from "../components/index/pricingPlans.js";
import About from "../components/index/aboutIndex.js";
import RecommendedPanels from "../components/index/recommendedPanels.js";
import Carousel from "@/components/index/carousel.js";
import Maintenance from "@/components/index/maintenance.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      {/* Product */}
      <div className="flex flex-col items-center justify-center bg-gray-100 pb-12">
        {/* video */}
        <Video />
        {/* Showcase */}
        <Showcase />
        <Features />
        <PricingPlans />
        <About />

        {/* Recommended Solar Panels */}
        <RecommendedPanels />

        {/* Carousel */}
        <Carousel />
        <Maintenance />
      </div>
    </Layout>
  );
}
