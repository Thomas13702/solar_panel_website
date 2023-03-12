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
              <p className="text-lg text-center mb-8">
                We use high-quality materials such as aluminium, steel, and
                electronic components to build the fundamental structure of our
                solar panel, and high-quality aluminium and rare-earth magnets
                for the extendable arm and motor, respectively.
              </p>
              <h2 className="font-bold mb-4 text-center text-lg">
                How do we track the sun?
              </h2>
              <p className="text-lg text-center mb-8">
                If we want to trace the sun, we must know the sun angle (azimuth
                and zenith angle).
              </p>
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/Azumith.PNG"
                  alt="Formulas"
                  width={400}
                  height={300}
                />
              </div>

              <p className="text-lg text-center">
                One thing we need to know is that Sun angles are fixed once the
                location and time are determined, no matter what the weather
                (rainy, cloudy) is now. According to Reda and Andreas&lsquo;s
                (2008) report &lsquo;s formular, implementing into code and
                downloading to Integrated circuit (IC).After downloading,
                Integrated circuit automatically calculating the sun angles
                after entering the customer&lsquo;s location and time zone, with
                high accuracy and no privacy disclosure (offline). Our machine
                will help maintain the orientation of the solar panel towards
                the sun once we have the data regarding the sun angle.
              </p>
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">
                  Example 1: Harrison Building at Exeter University
                </h1>
                <p className="mb-4">
                  We select Exeter University&lsquo;s Harrison Building at
                  (50.73°, -3.5°), altitude=91m. Our integrated system will
                  direct the motor to move in the directions indicated by the
                  following graph:
                </p>

                <div className="p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="relative h-64  ">
                    <div className=" h-full">
                      <Image
                        src="/Graph1.jpg"
                        alt="graph 1"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="relative h-64  ">
                    <div className="flex flex-col justify-end h-full">
                      <Image
                        src="/Graph2.jpg"
                        alt="graph 2"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="relative h-64 ">
                    <div className="flex flex-col justify-end h-full">
                      <Image
                        src="/Graph3.jpg"
                        alt="graph 3"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="relative h-64  ">
                    <div className="flex flex-col justify-end h-full">
                      <Image
                        src="/Graph4.jpg"
                        alt="graph 4"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <p>
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
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
