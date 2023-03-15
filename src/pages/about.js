import Layout from "../components/Layout.js";
import Head from "next/head";
import Image from "next/image";

export default function Product() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We build mechanisms to rotate solar panels for maximum efficiency
            </p>
            <p className="mt-4  text-xl text-gray-500 ">
              Solar energy faces efficiency limitations, particularly on cloudy
              days. To overcome this issue, our team have developed
              &lsquo;SoTurn,&lsquo; a novel new solar tracker that improves the
              efficiency and performance of solar panels. Our device is a
              retrofit specifically designed to be installed on pre-existing
              solar panels, which will allow them to move up to 120 degrees on a
              rotational axis and 20cm on a vertical axis, our data shows that
              our solar trackers may increase daily power output by up to 25%.
            </p>
            <p className="mt-4  text-xl text-gray-500 ">
              Our innovative solution can significantly enhance the efficiency
              of solar panels, making it an attractive investment for those
              looking to transition to more sustainable energy sources, and as
              the market for solar energy continues to develop, we are delighted
              to be at the forefront of this emerging field and believe our
              technology will play a vital part in determining the future of
              sustainable energy by pushing humanity’s constant need to
              innovate.
            </p>
          </div>
          <div className="mt-10">
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <h1 className="font-bold mb-4 text-2xl text-black">
                How we differ:
              </h1>
              <p className="text-lg  mb-8">
                The market for solar panel systems with rotating axis is
                expected to experience significant growth in the coming years
                due to increasing demand for renewable energy and advancements
                in solar technology.
              </p>
              <p className="text-lg  mb-8">
                By tracking the movement of the sun throughout the day, SoTurn
                can alter the angle of the solar panels for optimum energy
                absorption. This can lead to higher energy savings and faster
                returns on investment and will add value to your property. With
                our cost-efficient and highly effective product, we see
                ourselves ahead of other competition, making us your number 1
                provider of solar tracking equipment.
              </p>
              <h1 className="font-bold mb-4 text-2xl text-black">
                Our Clients:
              </h1>
              <p className="text-lg  mb-8">
                Our solar tracker can be an excellent investment for consumers
                and businesses looking to reduce energy expenses while also
                demonstrating their dedication to sustainability. Our solar
                tracker is easy to connect into current solar panel systems,
                giving our customers new ways to improve their energy efficiency
                and reduce their carbon footprint. SoTurn can be used in a
                variety of different settings such as homes and apartment
                buildings, as well as offices, schools, hospitals, and retail
                stores for commercial use. Our solar trackers can also be
                customised to fit a variety of configurations including
                ground-mounted, rooftop-mounted, and carport-mounted systems.
                Additionally, our solar tracker is built to last, making it a
                fantastic long-term investment for clients looking to save money
                on their energy costs while also contributing to a cleaner
                environment.
              </p>
              <p className="text-lg  mb-8">
                Our solar tracker product is intended for use by consumers and
                businesses, but we are also open to the idea of being acquired
                by a solar panel manufacturer and operating as their subsidiary.
                This would allow us to take advantage of their financial
                backing, expertise, reputation, and economies of scale.{" "}
              </p>
              <h1 className="font-bold mb-4 text-2xl text-black">
                More About the product:
              </h1>
              <p className="text-lg  mb-8">
                We use high-quality materials such as aluminium, steel, and
                electronic components to build the fundamental structure of our
                solar panel, and high-quality aluminium and rare-earth magnets
                for the extendable arm and motor, respectively.
              </p>
              <h2 className="font-bold mb-4  text-lg">
                How do we track the sun?
              </h2>
              <p className="text-lg  mb-8">
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

              <p className="text-lg ">
                It&lsquo;s important to note that the position of the sun is
                fixed once its location and time have been determined,
                regardless of the current weather conditions. To make use of
                this knowledge, we&lsquo;ve implemented Reda and Andreas&lsquo;s
                (2008) formula into our product&lsquo;s code and integrated it
                into an IC. Once downloaded and installed, the IC accurately
                calculates the sun&lsquo;s angles based on the customer&lsquo;s
                location and time zone, without any privacy concerns. With this
                data, our machine effortlessly maintains the orientation of the
                solar panel towards the sun, ensuring maximum energy efficiency.
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
