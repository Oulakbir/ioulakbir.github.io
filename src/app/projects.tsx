"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.png",
    title: "Data Engineering",
    desc: "Implementing a solution of anomaly detection and synoptic meteorological messages.",
    url:"https://github.com/Oulakbir/SynopController",
  },
  {
    img: "/image/blog-2.png",
    title: "Data analysis",
    desc: "Creating a solution to detect network anomalies espicially network intrusions.",
    url:"https://github.com/Oulakbir/Network-intrusion-detection",
  },
  {
    img: "/image/blog-3.png",
    title: "Mobile App Development",
    desc: "Creating a messaging solution for students to connect with each other and with their teachers.",
    url:"https://github.com/Oulakbir/PE_ESTE",
  },
  {
    img: "/image/blog-4.png",
    title: "Full stuck development",
    desc: "Create an application for dimentioning of in-house wind and photovoltaic installations.",
    url:"https://github.com/Oulakbir/DimEnergy",
  },
  {
    img: "/image/blog-5.png",
    title: "Web App Development",
    desc: "Creating a web blog that simulates instagram with some featues not added yet.",
    url:"https://github.com/Oulakbir/projet-web",
  },
  {
    img: "/image/blog-6.png",
    title: "Full stuck Development",
    desc: "Developing a desktop realtime messaging application using Java and JAVAFX that simulate whatsapp application.",
    url:"https://github.com/Oulakbir/N7GRAMME",
  },
  {
    img: "/image/blog-7.png",
    title: "Full stuck Development",
    desc: "Implementing an application destined to manage hospitals namely patients, documents, medecines etc.",
    url:"https://github.com/Oulakbir/hospital-management",
  },
  {
    img: "/image/blog-8.png",
    title: "Data science",
    desc: "Implementing a solution for AIESEC in Mohammedia using ML to indecate the elments that enhance its promotion and developpment.",
    url:"https://github.com/Oulakbir/AIESEC_Data_Analysis",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you need to turn raw data into valuable insights or optimize your processes with 
          advanced data science solutions,I&apos;m here to realize your digital ambitions.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
