import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

const photos = [
  { src: "/default.jpg", caption: "Sophie - Project Manager" },
  { src: "/Abdul.jpg", caption: "Abdul-Salam Jah - Researcher" },
  { src: "/Tom.jpg", caption: "Thomas Pritchard - Lead Web Designer" },
  { src: "/Enoch.png", caption: "Enoch Ng - Marketing Lead Editor" },
  { src: "/Zihuan.jpg", caption: "Zihuan Zhang - Lead Test Engineer" },
  { src: "/default.jpg", caption: "Nijad Merhebi - Chief Financial Officer" },
  { src: "/default.jpg", caption: "Angus Neville - Business Analyst" },
  { src: "/default.jpg", caption: "Ewan Green - Pitch lead" },
  // Add more photos here
];

export default function ourMission() {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold mb-8">Meet the team</h1>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.src}>
            <div className="flex items-center justify-center">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={200}
                height={500}
              />
            </div>
            <div className="text-center">
              <p>{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
