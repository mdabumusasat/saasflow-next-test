"use client";
import React from "react";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Scalable Solutions",
    href: "/page-service-details",
    description:
      "Adapting effortlessly increasing users, data, and operations whether you’re a startup or a large enterprise.",
  },
  {
    number: "02",
    title: "Enhanced Security",
    href: "/page-service-details",
    description:
      "Protecting your data is our top priority. our platform uses enterprise-grade security protocols, encryption.",
  },
  {
    number: "03",
    title: "User-Friendly Interface",
    href: "/page-service-details",
    description:
      "Our platform is designed with simplicity and efficiency in mind. intuitive navigation, clear dashboards.",
    isLast: true,
  },
];

const AboutSection = () => {
  return (
    <section className="about-section pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="sec-title">
              <span className="sub-title">
                <span>Why Us</span> Learn About Us
              </span>
              <h2 className="h2 title">
                Built for <span>innovation,</span> trusted by businesses
                worldwide by results
              </h2>
              <div className="text">
                We combine scalable technology, enhanced security, and an
                intuitive interface to ensure your team can work efficiently
                and confidently. trusted by teams worldwide,
              </div>
              <Link
                href="/page-contact"
                className="btn-style-two mt-30">
                <span className="btn-text">
                  Get Started For Free
                </span>
              </Link>
            </div>
          </div>
          <div className="about-features-column col-xl-6 offset-xl-1">
            <div className="inner-column">
              <div className="shape1 bounce-x">
                <img
                  src="/assets/images/icons/shape3.png"
                  alt="Shape 1"
                />
              </div>
              <div className="shape2 tm-gsap-img-parallax">
                <img
                  src="/assets/images/icons/shape4.png"
                  alt="Shape 2"
                />
              </div>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="about-features-box">
                  <div
                    className={`inner-box ${
                      feature.isLast
                        ? "mb-0 pb-0 border-bottom-0"
                        : ""
                    }`}>
                    <div className="number">
                      {feature.number}
                    </div>
                    <div className="content">
                      <h5 className="h5 title">
                        <Link href={feature.href}>
                          {feature.title}
                        </Link>
                      </h5>
                      <div className="text">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;