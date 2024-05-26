"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Full stuck Development",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: HashtagIcon,
    title: "Data Optimization",
    children:
      "Efficiency is key. I optimize data pipelines and storage solutions to ensure your data is processed quickly and accurately, enhancing performance and reliability for data-driven decisions.",
  },
  {
    icon: EyeIcon,
    title: "Data-Driven Design",
    children:
      "My approach combines data analytics with design thinking. I create data models and visualizations that are not only insightful but also intuitive, enabling stakeholders to easily understand and act on data insights.",
  },
  {
    icon: DocumentTextIcon,
    title: "Data Integrity and Security",
    children:
      "I implement rigorous testing and security protocols to ensure data accuracy and protect sensitive information. Your data's integrity and security are my top priorities.",
  },

];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a Data Scientist; I&apos;m a data alchemist.
          Transforming raw data into actionable insights is not just my job but my passion. 
          Explore below to see how I can leverage data to drive innovation and excellence for you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
