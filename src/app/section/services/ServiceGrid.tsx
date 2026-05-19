"use client";
import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: "/assets/images/icons/service-icon1.png",
    title: "Cloud-Based Solutions",
    description:
      "Access your tools anywhere, anytime, with secure cloud hosting.",
  },
  {
    id: 2,
    icon: "/assets/images/icons/service-icon2.png",
    title: "Data Analytics & Report",
    description:
      "Valuable insights with powerful data analytics and real-time reporting.",
  },
  {
    id: 3,
    icon: "/assets/images/icons/service-icon3.png",
    title: "Collaboration Tools",
    description:
      "From real-time messaging, file sharing, management and project tracking.",
  },
  {
    id: 4,
    icon: "/assets/images/icons/service-icon4.png",
    title: "API Integrations",
    description:
      "Easily connect your SaaS platform with the tools and applications you use.",
  },
  {
    id: 5,
    icon: "/assets/images/icons/service-icon5.png",
    title: "Security & Compliance",
    description:
      "We prioritize the safety of your data with enterprise-grade security.",
  },
  {
    id: 6,
    icon: "/assets/images/icons/service-icon6.png",
    title: "Multi-Device Access",
    description:
      "Stay connected and productive anytime, anywhere with an optimized platform.",
  },
];

const ServicesSection: React.FC = (): JSX.Element => {
  return (
    <section className="services-section pb-0">
      <div className="container">
        <div className="outer-box">
          <div className="bg-shape bg">
            <img
              src="/assets/images/background/service-shape-bg1.png"
              alt="Service Background Shape"
            />
          </div>
          <div className="inner-row">
            {services.map((service) => (
              <div key={service.id} className="service-block">
                <div className="inner-block">
                  <div className="icon">
                    <img
                      src={service.icon}
                      alt={service.title}
                    />
                  </div>
                  <div className="h5 title">
                    <Link href="/service-details">
                      {service.title}
                    </Link>
                  </div>
                  <div className="text">
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;