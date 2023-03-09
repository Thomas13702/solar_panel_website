import Layout from "../components/Layout.js";
import Head from "next/head";
import Image from "next/image";

export default function Product() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>About Us - Solar Panel Rotation Business</title>
          <meta
            name="description"
            content="Learn about our business of building a mechanism that rotates solar panels to always face the sun"
          />
        </Head>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We build mechanisms to rotate solar panels for maximum efficiency
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our business is dedicated to creating a more sustainable future by
              harnessing the power of the sun. We believe that solar energy is
              the key to reducing our reliance on fossil fuels and creating a
              cleaner, greener world for generations to come.
            </p>
          </div>
          <div className="mt-10">
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                The global shift towards sustainable energy is fuelling the
                rising popularity of solar power for both homes and businesses.
                Despite its numerous advantages, solar energy faces efficiency
                limitations, particularly on cloudy days. To overcome this
                issue, our team have developed SoTurn, a novel new solar tracker
                that improves the efficiency and performance of solar panels.
              </p>
              <p>
                Our device is a retrofit specifically designed to be installed
                on pre-existing solar panels, which will allow them to move up
                to 180 degrees on a rotational and vertical axis. This
                breakthrough technology significantly improves the efficiency of
                solar panels, resulting in significant energy cost savings over
                time and a reduced carbon footprint. In fact, our data shows
                that our solar trackers may increase daily power output by up to
                25%, making it an environmentally responsible and cost-effective
                choice for consumers.
              </p>
              <p>
                For our development process we begin by using Lidar cameras and
                manufacturer dimensions to create 3D models of existing solar
                panels. Using computer-aided manufacturing (CAM), we then create
                a model of our device that perfectly fits these 3D models.
                Finally, we manufacture the product using computer-aided design
                (CAD) software, utilizing the model created during the CAM
                stage. This process is easily scalable and can be replicated for
                several types of solar panels, allowing us to reach a wider
                global market.
              </p>
              <p>
                Our target market for this product is primarily commercial, as
                solar trackers are typically better suited for larger
                installations. While similar products exist, our retrofit device
                provides a unique solution that is more accessible and
                cost-effective for businesses by allowing it to be installed on
                pre-existing panels.
              </p>
              <p>
                Our innovative solution can significantly enhance the efficiency
                of solar panels, making it an attractive investment for those
                looking to transition to more sustainable energy sources, and as
                the market for solar energy continues to develop, we are
                delighted to be at the forefront of this emerging field and
                believe our technology will play a vital part in determining the
                future of sustainable energy by pushing humanitys constant need
                to innovate.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
