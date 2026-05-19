"use client";
import React from "react";
import Link from "next/link";

type Service = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    icon: "/assets/images/icons/service-icon1.png",
    title: "Cloud-Based Solutions",
    description:
      "Access your tools anywhere, anytime, with secure cloud hosting.",
    href: "/page-service-details",
  },
  {
    icon: "/assets/images/icons/service-icon2.png",
    title: "Data Analytics & Repor",
    description:
      "Valuable insights with powerful data analytics and real-time reporting.",
    href: "/page-service-details",
  },
  {
    icon: "/assets/images/icons/service-icon3.png",
    title: "Collaboration Tools",
    description:
      "From real-time messaging file sharing management and project tracking,",
    href: "/page-service-details",
  },
  {
    icon: "/assets/images/icons/service-icon4.png",
    title: "API Integrations",
    description:
      "Easily connect your SaaS platform with the tools and applications use.",
    href: "/page-service-details",
  },
  {
    icon: "/assets/images/icons/service-icon5.png",
    title: "Security & Compliance",
    description:
      "We prioritize the safety of your data with enterprise-grade security.",
    href: "/page-service-details",
  },
  {
    icon: "/assets/images/icons/service-icon6.png",
    title: "Multi-Device Access",
    description:
      "Stay connected productive anytime, anywhere platform optimized.",
    href: "/page-service-details",
  },
];

const decorativeShapes = [
  {
    className: "shape1 animation__rotateY",
    src: "/assets/images/icons/shape10.png",
  },
  {
    className: "shape2 bounce-y",
    src: "/assets/images/icons/shape11.png",
  },
  {
    className: "shape3 tm-gsap-img-parallax",
    src: "/assets/images/icons/shape12.png",
  },
  {
    className: "shape4 bounce-x",
    src: "/assets/images/icons/shape5.png",
  },
  {
    className: "shape5 animation__rotateY",
    src: "/assets/images/icons/shape6.png",
  },
  {
    className: "shape6 bounce-y",
    src: "/assets/images/icons/shape7.png",
  },
  {
    className: "shape7 bounce-x",
    src: "/assets/images/icons/shape9.png",
  },
  {
    className: "shape8 animation__rotateY",
    src: "/assets/images/icons/shape8.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section pt-0">
      <div className="large-container">
        <div className="inner-container pt-120 pb-120">
          <div className="sec-title text-center">
            <span className="sub-title bg-transparent">
              <span>Services</span> Best SaaS Solutions
            </span>
            <h2 className="h2 title">
              End-to-End <span>infrastructure</span> <br />
              for Training, Scaling, and <br />
              Serving AI Models
            </h2>
          </div>
          <div className="container">
            <div className="outer-box">
              <div className="bg-shape bg">
                <img
                  src="/assets/images/background/service-shape-bg1.png"
                  alt="Service Background"
                />
              </div>
              <div className="inner-row">
                {services.map((service, index) => (
                  <div
                    className="service-block"
                    key={index}>
                    <div className="inner-block">
                      <div className="icon">
                        <img
                          src={service.icon}
                          alt={service.title}
                        />
                      </div>
                      <h5 className="h5 title">
                        <Link href={service.href}>
                          {service.title}
                        </Link>
                      </h5>
                      <div className="text">
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {decorativeShapes.map((shape, index) => (
            <div
              key={index}
              className={shape.className}>
              <img
                src={shape.src}
                alt={`Shape ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;