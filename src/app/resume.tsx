"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Future Data Engineer",
  },
  {
    icon: PuzzlePieceIcon,
    children: "University Diploma of Technology's degree in Computer Science ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Bachelor's degree in physical sciences",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
          Highly skilled and creative data scientist with one year of experience in applying 
          advanced statistical and machine learning techniques to extract insights from complex 
          datasets. Proficient in data preprocessing, exploratory data analysis, predictive modeling, 
          and data visualization. Experienced in utilizing tools such as Python, R, SQL, and TensorFlow
           to develop and deploy machine learning models for solving real-world problems in various 
           domains, including finance, healthcare, and marketing. Passionate about leveraging 
           data-driven approaches to drive business decision-making and achieve meaningful outcomes.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
