"use client";
import React from "react";
import Link from "next/link";

interface BenefitItem {
  id: number;
  blockClass: string;
  columnClass: string;
  innerClass?: string;
  image: string;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    id: 1,
    blockClass: "benefit-block-two",
    columnClass: "col-md-6",
    image: "/assets/images/resource/benefit1-1.jpg",
    title: "Sync with real-time data",
    description:
      "Every update, change, or action is instantly reflected across all devices and platforms, ensuring your team always works with the latest information.",
  },
  {
    id: 2,
    blockClass: "benefit-block-three",
    columnClass: "col-md-6",
    image: "/assets/images/resource/benefit1-2.jpg",
    title: "Take actions on your systems",
    description:
      "Whether it's managing tasks, updating records, or executing processes, our solution gives you the control and efficiency you need.",
  },
  {
    id: 3,
    blockClass: "benefit-block-four",
    columnClass: "col-lg-4 col-md-6",
    innerClass: "theme-color3 light",
    image: "/assets/images/resource/benefit1-3.jpg",
    title: "Compare AI models",
    description:
      "Provides side-by-side performance metrics, accuracy scores, and real-time insights.",
  },
  {
    id: 4,
    blockClass: "benefit-block-two",
    columnClass: "col-lg-4 col-md-6",
    innerClass: "theme-color1",
    image: "/assets/images/resource/benefit1-4.jpg",
    title: "Smart escalation",
    description:
      "Ensure critical issues are addressed promptly with our Smart Escalation feature.",
  },
  {
    id: 5,
    blockClass: "benefit-block-four",
    columnClass: "col-lg-4 col-md-6",
    innerClass: "theme-color3 light",
    image: "/assets/images/resource/benefit1-5.jpg",
    title: "Advanced reporting",
    description:
      "Gain deep insights into your business performance with advanced reporting.",
  },
];

const BenefitSection: React.FC = (): JSX.Element => {
  return (
    <section className="benefits-section pb-0">
      <div className="container">
        <div className="row">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`${item.blockClass} ${item.columnClass}`}>
              <div
                className={`inner-block ${item.innerClass ?? ""}`.trim()}>
                <div className="image">
                  <Link href="/page-project-details">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="h5 title">
                    <Link href="/page-project-details">
                      {item.title}
                    </Link>
                  </div>
                  <div className="text">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;