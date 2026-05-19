"use client";
import React from "react";
import Link from "next/link";

type Benefit = {
  blockClass: string;
  innerClass?: string;
  image: string;
  title: string;
  description: string;
  href: string;
};

const benefits: Benefit[] = [
  {
    blockClass: "benefit-block-two col-lg-6",
    image: "/assets/images/resource/benefit1-1.jpg",
    title: "Sync with real-time data",
    description:
      "Every update, change, or action is instantly reflected across all devices and platforms, ensuring your team always works with the latest information.",
    href: "/page-project-details",
  },
  {
    blockClass: "benefit-block-three col-lg-6",
    image: "/assets/images/resource/benefit1-2.jpg",
    title: "Take actions on your systems",
    description:
      "Whether it’s managing tasks, updating records, or executing processes, our solution gives you the control and efficiency you need",
    href: "/page-project-details",
  },
  {
    blockClass: "benefit-block-four col-lg-4",
    innerClass: "theme-color3 light",
    image: "/assets/images/resource/benefit1-3.jpg",
    title: "Compare AI models",
    description:
      "Provides side-by-side performance metrics, accuracy scores, and real-time insights.",
    href: "/page-project-details",
  },
  {
    blockClass: "benefit-block-two col-lg-4",
    innerClass: "theme-color1",
    image: "/assets/images/resource/benefit1-4.jpg",
    title: "Smart escalation",
    description:
      "Ensure critical issues addressed promptly with our Smart Escalation feature.",
    href: "/page-project-details",
  },
  {
    blockClass: "benefit-block-four col-lg-4",
    innerClass: "theme-color3 light",
    image: "/assets/images/resource/benefit1-5.jpg",
    title: "Advanced reporting",
    description:
      "Gain deep insights into your business with performance with advanced reporting",
    href: "/page-project-details",
  },
];

const decorativeShapes = [
  {
    className: "shape1 tm-gsap-img-parallax",
    src: "/assets/images/icons/shape-37.png",
  },
  {
    className: "shape2 tm-gsap-img-parallax",
    src: "/assets/images/icons/shape-38.png",
  },
  {
    className: "shape3 animation__rotateY",
    src: "/assets/images/icons/shape-39.png",
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section pt-0 pb-90">
      {decorativeShapes.map((shape, index) => (
        <div key={index} className={shape.className}>
          <img
            src={shape.src}
            alt={`Shape ${index + 1}`}
          />
        </div>
      ))}
      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title bg-transparent">
            <span>Benefits</span> Core SaaS Features
          </span>
          <h2 className="h2 title">
            All-in-one tools built for growth, <br />
            <span>performance,</span> &amp; efficiency
          </h2>
        </div>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div key={index} className={benefit.blockClass}>
              <div
                className={`inner-block ${
                  benefit.innerClass || ""
                }`}>
                <div className="image">
                  <Link href={benefit.href}>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                    />
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h5 className="h5 title">
                    <Link href={benefit.href}>
                      {benefit.title}
                    </Link>
                  </h5>
                  <div className="text">
                    {benefit.description}
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

export default BenefitsSection;