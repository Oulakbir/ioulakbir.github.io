"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

const activities = [
  {
    title: "Mentorship and leadership",
    description: "As a mentor and co-lead at DigiGirlz Morocco, I have had the privilege of guiding and inspiring young women in the field of technology. My role involves providing mentorship, leading workshops, and supporting the next generation of female tech leaders.",
    name: "DigiGirlz Morocco",
    position: "Mentor & co-lead",
    image: "/image/digigirlz.jpg",
    memo: "/image/digigirlzphoto.jpg",
  },
  {
    title: "Technical Leadership",
    description: "As a Technical Lead at N7Geeks Aggregation, I spearheaded the development of innovative solutions, ensuring top-tier quality and performance in every project.",
    name: "N7Geeks Aggregation",
    position: "Technical Lead",
    image: "/image/N7Ag.png",
    memo: "/image/photoN7.png",
  },
  {
    title: "Leadership and Data Science",
    description: "As a team leader of BD and Ewa department and data scientist at the LST project at AIESEC in Mohammedia, I led a team of  enthusiasts in comming with quality and long term sponsors and partners. My role included managing projects, developing data-driven strategies, and fostering a collaborative team environment.",
    name: "AIESEC in Mohammedia",
    position: "Team leader & Data Scientist",
    image: "/image/aiesec.png",
    memo: "/image/aiesecphoto.jpg",
  },
  {
    title: "Content creator",
    description: "As a social media manager at LDX Enset Mohammedia, I create engaging content that resonates with our audience and promotes our brand across various platforms. From crafting compelling posts to designing eye-catching visuals, I strive to deliver content that drives engagement and builds brand awareness.",
    name: "LDX Enset Mohammedia",
    position: "Social media manager",
    image: "/image/ldx.png",
    memo: "/image/LDXphoto.jpg",
  },
];

export function Testimonial() {
  const [active, setActive] = React.useState(0);

  const currentActivity = activities[active];

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Extracurricular activities
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Beyond my professional work, I am actively involved in various 
            extracurricular activities that help me develop new skills and contribute to my community!
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {currentActivity.title}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {currentActivity.description}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                {currentActivity.name}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {currentActivity.position}
              </Typography>
              <div className="flex items-center gap-4">
                {activities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <Avatar
                      variant="rounded"
                      src={activity.image}
                      alt={activity.name}
                      size="sm"
                      className={`cursor-pointer ${
                        active === index ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(index)}
                    />
                    {index < activities.length - 1 && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={1000}
                height={800}
                alt={currentActivity.name}
                src={currentActivity.memo}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
