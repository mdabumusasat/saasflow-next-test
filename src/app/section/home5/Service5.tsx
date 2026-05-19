"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const services = [
  {
    id: 1,
    icon: "/assets/images/icons/service5-icon1.png",
    value: 80,
    suffix: "+",
    title: "Templates",
    text: "Over 80+ template ready to regular globally use.",
  },
  {
    id: 2,
    icon: "/assets/images/icons/service5-icon2.png",
    value: 10,
    suffix: "x",
    title: "Power Faster",
    text: "Our productivity skyrocketed. 10X power, faster results.",
  },
  {
    id: 3,
    icon: "/assets/images/icons/service5-icon3.png",
    value: 99,
    suffix: "%",
    title: "AI-automation",
    text: "Our CRM solutions harness the power of AI to handle.",
  },
  {
    id: 4,
    icon: "/assets/images/icons/service5-icon4.png",
    value: 13,
    suffix: "%",
    title: "Reduce Cost",
    text: "AI-driven CRM solutions have a 13% cost reduction.",
  },
];

const ServiceSectionThree = () => {
  return (
    <section className="services-section-layout5">
      <div className="shape-2">
        <img src="/assets/images/icons/shape-87.png" alt="shape" />
      </div>
      <div className="shape-3">
        <img src="/assets/images/icons/shape-88.png" alt="shape" />
      </div>
      <div className="shape-4 animation__rotateY">
        <img src="/assets/images/icons/shape-90.png" alt="shape" />
      </div>
      <div className="shape-5 animation__rotateX">
        <img src="/assets/images/icons/shape-89.png" alt="shape" />
      </div>
      <div className="outer-box pb-100">
        <div className="shape-1">
          <img src="/assets/images/icons/shape-86.png" alt="shape" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">
              <span>SaaS</span> Learn About Us
            </span>
            <div className="h2 title">
              “Working with <span>Saslion</span> was a game-
              <br />
              changer. They didn’t just design a CRM
              <br />
              platform — they helped us redefine how
              <br />
              we connect with our customers.”
            </div>
          </div>
          <div className="author-info-box">
            <div className="author-image">
              <img src="/assets/images/resource/service5-1.jpg" alt="David Ronald" />
            </div>
            <div className="content">
              <div className="h3 title">David Ronald</div>
              <div className="designation">VP of Sales, FinTech Solutions</div>
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-block-five col-xl-3 col-sm-6">
                <div className="inner-block">
                  <div className="icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="h6 count-box">
                    <CounterUp end={service.value} />
                    {service.suffix} {service.title}
                  </div>
                  <div className="text">{service.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThree;