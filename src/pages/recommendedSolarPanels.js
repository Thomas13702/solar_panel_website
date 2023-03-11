import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

function SolarPanelsPage() {
  const solarPanels = [
    {
      id: 1,
      name: "SunPower E-Series",
      image:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itUG4rTJjWyU/v0/1200x-1.jpg",
      description:
        "The SunPower E-Series solar panels are designed for residential and commercial use, and feature high efficiency and durability.",
      manufacturerUrl: "https://us.sunpower.com/",
    },
    {
      id: 2,
      name: "LG NeON 2",
      image:
        "https://www.moneysavingexpert.com/content/dam/shutterstock_1988665238%20(1).jpg",
      description:
        "The LG NeON 2 solar panels are a high-performance and reliable choice for homes and businesses looking to switch to solar energy.",
      manufacturerUrl: "https://www.lg.com/us/solar-panels",
    },
    {
      id: 3,
      name: "Canadian Solar HiKu",
      image:
        "https://www.cnet.com/a/img/resize/19394aca4affc504651051d009160d0c0d216218/hub/2022/10/10/f2ff9ef7-f016-459d-b88a-a8a68270c315/solar-gettyimages-525206743.jpg?auto=webp&fit=crop&height=675&width=1200",
      description:
        "The Canadian Solar HiKu solar panels feature advanced solar cell technology and are suitable for a wide range of applications.",
      manufacturerUrl: "https://www.canadiansolar.com/",
    },
    {
      id: 4,
      name: "REC TwinPeak 2",
      image:
        "https://static.euronews.com/articles/stories/06/61/83/86/1440x810_cmsv2_1d9dc2f1-6644-5829-ae62-7eed387bf96c-6618386.jpg",
      description:
        "The REC TwinPeak 2 solar panels offer superior performance and reliability, and are ideal for residential and commercial installations.",
      manufacturerUrl: "https://www.recgroup.com/",
    },
    {
      id: 5,
      name: "Trina Solar Honey",
      image:
        "https://images.theecoexperts.co.uk/wp-content/uploads/2021/09/Solar-panels-in-field-1.jpeg",
      description:
        "The Trina Solar Honey solar panels are a cost-effective choice for residential and commercial use, and offer high efficiency and reliability.",
      manufacturerUrl: "https://www.trinasolar.com/us",
    },
    {
      id: 6,
      name: "Jinko Solar Eagle",
      image:
        "https://cdn.shortpixel.ai/spai/q_glossy+w_1162+h_1305+to_auto+ret_img/https://www.goodenergy.co.uk/wp-content/uploads/2022/03/AdobeStock_261376078-2048x1365.jpeg",
      description:
        "The Jinko Solar Eagle solar panels are a popular choice for homes and businesses looking to switch to solar energy, and offer high efficiency and durability.",
      manufacturerUrl: "https://www.jinkosolar.com/",
    },
  ];

  return (
    <Layout className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Recommended Solar Panels
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solarPanels.map((panel) => (
            <div key={panel.id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="h-40 relative">
                <Image
                  src={panel.image}
                  alt={panel.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                {panel.name}
              </h3>
              <p className="text-gray-500">{panel.description}</p>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
                href={panel.manufacturerUrl}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SolarPanelsPage;
