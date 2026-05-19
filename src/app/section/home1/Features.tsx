"use client"
import React from "react";

const featureBoxes = [
  {
    icon: "/assets/images/icons/feature-icon1.png",
    title: "Intelligent Automation",
    description:
      "By integrating machine learning natural language processing",
    className: "mb-20",
  },
  {
    icon: "/assets/images/icons/feature-icon2.png",
    title: "Real-time tracking",
    description:
      "By continuously monitoring updating data it ensures",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="shape-1 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape-42.png"
          alt="Decorative Shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="images-column col-lg-5">
            <div className="inner-column">
              <div
                className="image1">
                <img
                  src="/assets/images/resource/feature1-3.png"
                  alt="Feature Image 1"
                />
              </div>
              <div
                className="image2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300">
                <img
                  src="/assets/images/resource/feature1-1.png"
                  alt="Feature Image 2"
                />
              </div>
              <div
                className="image3">
                <img
                  src="/assets/images/resource/feature1-2.png"
                  alt="Feature Image 3"
                />
              </div>
            </div>
          </div>
          <div
            className="content-column col-xl-6 col-lg-7 offset-xl-1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">
                  <span>SaaS</span> Build modern SaaS
                </span>
                <h2 className="h2 title">
                  Build, scale &amp; <span>succeed </span>
                  <br />
                  with modern SaaS
                </h2>
                <div className="text">
                  Empower your business with cutting-edge SaaS
                  solutions designed
                  <br />
                  for speed, scalability, and simplicity SaaS
                  approach helps
                </div>
              </div>
              <div className="row">
                {featureBoxes.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-box col-sm-6">
                    <div
                      className={`inner-box ${
                        feature.className || ""
                      }`}>
                      <div className="icon">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                        />
                      </div>
                      <h6 className="h6 title">
                        {feature.title}
                      </h6>
                      <div className="text">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;