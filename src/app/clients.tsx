"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  {
    name: "Essaouira's urban agency2",
    position: "Full stuck developper"
  },
  {
    name: "Essaouira's provincial meteorological centered",
    position: "Data engineer"
  },
  {
    name: "AIESEC-Human-Blue",
    position: "Data scientist"
  },
  {
    name: "N7Geeks Aggregation",
    position: "Technical Lead"
  },
  {
    name: "DigiGirlz1",
    position: "Mentor & Co-lead"
  },
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          My EXPERIENCES
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-9">
          {CLIENTS.map((client, key) => (
            <div key={key} className="text-center">
              <Image
                alt={client.name}
                width={768}
                height={768}
                className="w-40 mx-auto"
                src={`/logos/${client.name}.jpg`}
              />
              <Typography variant="small" color="gray" className="mt-2">
                {client.position}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
