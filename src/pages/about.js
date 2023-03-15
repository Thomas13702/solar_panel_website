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
                More About the product:
              </h1>
              <h2 className="font-bold mb-4  text-lg">How it Works:</h2>
              <p className="text-lg  mb-8">
                Our product is a small, mechanism that can be attached to solar
                panels, to make them move on a vertical and rotational axis, so
                they protrude further above ground level and are always facing
                the sun.
              </p>
              <h2 className="font-bold mb-4  text-lg">
                How SoTurn tracks the sun:
              </h2>
              <p className="text-lg  mb-8">
                SoTurn tracks the sun through knowing the Azimuth and Zenith sun
                angles. Once we have this data, our product can maintain the
                orientation of the solar panel towards the sun. The suns
                position in the sky will vary seasonally, yet our programming
                systems deal with this once the suns angles are inputted. Hence
                your panels won&lsquo;t ever have a moment when there not being
                shined upon.
              </p>
              <h2 className="font-bold mb-4  text-lg">Materials</h2>
              <p className="text-lg  mb-8">
                The fundamental materials to build our product are aluminium and
                steel. The mechanical parts will be designed from high-quality
                aluminium, as it&lsquo;s lightweight, resistant to corrosion and
                has a high strength-to-weight ratio. Hence, SoTurn can continue
                to work effectively for many years, even during severe weather
                conditions, as these materials provide longevity.
              </p>
              <h2 className="font-bold mb-4  text-lg">Dimensions</h2>
              <p className="text-lg  mb-8">
                Our product accommodates to sit different sized solar panels,
                through having extendable arms which can fit to smaller,
                residential solar panels, but also to larger, utility-scale
                sized panels. We decided to develop the chassis in a cylindrical
                shape, with a 40cm radius, and 30cm tall, so it can fit the
                electrical circuits and motor in. The mechanical arm that moves
                in the vertical axis reaches a maximum height of 20cm, the plate
                which attaches to the solar panel is 80cm x 40 cm.
              </p>
              <p className="text-lg  mb-8">
                SoTurn tracks the sun through knowing the Azimuth and Zenith sun
                angles. Once we have this data, our product can maintain the
                orientation of the solar panel towards the sun.
              </p>

              <p className="text-lg ">
                The suns position in the sky will vary seasonally, yet our
                programming systems deal with this once the suns angles are
                inputted. Hence your panels won&lsquo;t ever have a moment when
                there not being shined upon.
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
