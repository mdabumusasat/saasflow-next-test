"use client";
import React from "react";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Scalable Solutions",
    text: "Adapting effortlessly increasing users, data, and operations whether you’re a startup or a large enterprise.",
  },
  {
    number: "02",
    title: "Enhanced Security",
    text: "Protecting your data is our top priority. our platform uses enterprise-grade security protocols, encryption.",
  },
  {
    number: "03",
    title: "User-Friendly Interface",
    text: "Our platform is designed with simplicity and efficiency in mind. intuitive navigation, clear dashboards.",
  },
];

export default function AboutSectionLayoutFour() {
  return (
    <section className="about-section-layout4">
      <div className="container">
        <div className="inner-container pb-70">
          <div className="row">
            <div className="col-xl-5">
              <div className="sec-title">
                <span className="sub-title">
                  <span>Why Us</span> Learn About Us
                </span>
                <h2 className="title">
                  Built for innovation, trusted by businesses worldwide by
                  results
                </h2>
                <div className="text">
                  We combine scalable technology, enhanced security, and an
                  intuitive interface to ensure your team can work efficiently
                  and confidently. trusted by teams worldwide,
                </div>
                <Link className="btn-style-one mt-30" href="/page-about">
                  <span className="btn-text">Get Started For Free</span>
                </Link>
              </div>
            </div>
            <div className="about-features-column col-xl-6 offset-xl-1">
              <div className="inner-column">
                {features.map((feature, index) => (
                  <div
                    className="about-features-box-layout4"
                    key={feature.number}>
                    <div
                      className={`inner-box ${
                        index === features.length - 1
                          ? "mb-0 pb-0 border-bottom-0"
                          : ""
                      }`}>
                      <div className="number">{feature.number}</div>
                      <div className="content">
                        <h5 className="title">
                          <Link href="/service-details">
                            {feature.title}
                          </Link>
                        </h5>
                        <div className="text">{feature.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape-31.png"
          alt="Shape"
        />
      </div>
    </section>
  );
}