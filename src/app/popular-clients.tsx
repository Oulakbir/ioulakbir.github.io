"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CERTIFICATIONS = [
  {
    name: "DeepLearning.AI",
    description: "Supervised Machine learning",
  },
  {
    name: "IBM",
    description: "Python for data science",
  },
  {
    name: "Cisco",
    description: "Introduction to IoT",
  },
  {
    name: "MongoDB",
    description: "Introduction to MongoDB",
  },
  {
    name: "Google",
    description: "Data, Data, Everywhere",
  },
  {
    name: "365-Data-Science",
    description: "Data and Data Science",
  },
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h6" className="mb-12 uppercase !text-gray-500">
          Certifications
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {CERTIFICATIONS.map((certification, key) => (
            <div key={key} className="flex flex-col items-center">
              <Image
                alt={certification.name}
                width={480}
                height={480}
                src={`/logos/logo-${certification.name}.png`}
                className="w-40 h-40 object-contain mb-4"
              />
              <Typography variant="caption">
                {certification.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
