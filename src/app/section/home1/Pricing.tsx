"use client";
import React, { useState } from "react";
import Link from "next/link";

type PricingPlan = {
  category: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular?: boolean;
  isActive?: boolean;
  featuresLeft: string[];
  featuresRight: string[];
};

const pricingData: Record<"monthly" | "yearly", PricingPlan[]> = {
  monthly: [
    {
      category: "Growth",
      subtitle: "For growing businesses and marketers",
      price: "$19.00",
      period: "/ Monthly",
      isPopular: true,
      isActive: true,
      featuresLeft: [
        "Real-Time Analytics",
        "Marketing Dashboard Access",
        "CRM Integration",
        "Free Support",
      ],
      featuresRight: [
        "Unlimited Projects",
        "Real-time Collaboration",
        "Recurring Tasks",
        "Custom Workflows",
      ],
    },
    {
      category: "Advanced",
      subtitle: "For growing businesses and marketers",
      price: "$24.00",
      period: "/ Monthly",
      isPopular: true,
      featuresLeft: [
        "Real-Time Analytics",
        "Marketing Dashboard Access",
        "CRM Integration",
        "Free Support",
      ],
      featuresRight: [
        "Unlimited Projects",
        "Real-time Collaboration",
        "Recurring Tasks",
        "Custom Workflows",
      ],
    },
  ],
  yearly: [
    {
      category: "Growth",
      subtitle: "For growing businesses and marketers",
      price: "$190.00",
      period: "/ Yearly",
      isPopular: true,
      featuresLeft: [
        "Real-Time Analytics",
        "Marketing Dashboard Access",
        "CRM Integration",
        "Free Support",
      ],
      featuresRight: [
        "Unlimited Projects",
        "Real-time Collaboration",
        "Recurring Tasks",
        "Custom Workflows",
      ],
    },
    {
      category: "Advanced",
      subtitle: "For growing businesses and marketers",
      price: "$240.00",
      period: "/ Yearly",
      isPopular: true,
      isActive: true,
      featuresLeft: [
        "Real-Time Analytics",
        "Marketing Dashboard Access",
        "CRM Integration",
        "Free Support",
      ],
      featuresRight: [
        "Unlimited Projects",
        "Real-time Collaboration",
        "Recurring Tasks",
        "Custom Workflows",
      ],
    },
  ],
};

const decorativeShapes = [
  {
    className: "shape-1 tm-gsap-img-parallax",
    src: "/assets/images/icons/shape16.png",
  },
  {
    className: "shape-2 tm-gsap-img-parallax",
    src: "/assets/images/icons/shape17.png",
  },
  {
    className: "shape-3 bounce-x",
    src: "/assets/images/icons/shape18.png",
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = pricingData[activeTab];

  return (
    <section className="pricing-section pt-0 pb-100">
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
          <span className="sub-title">
            <span>Pricing</span> Pick your plan
          </span>
          <h2 className="h2 title">
            Flexible pricing for every <br />
            SaaS business
          </h2>
        </div>
        <div className="d-flex justify-content-center mt-3 mt-md-0">
          <div
            className="pricing-two__tab wow fadeInUp"
            data-wow-delay=".4s">
            <nav>
              <div className="nav nav-tabs" role="tablist">
                <button
                  type="button"
                  className={`nav-link ${
                    activeTab === "monthly" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("monthly")}>
                  Monthly
                </button>
                <button
                  type="button"
                  className={`nav-link ${
                    activeTab === "yearly" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("yearly")}>
                  Yearly
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="pricing__tab-content">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row">
                {plans.map((plan, index) => (
                  <div key={index} className="col-xl-6">
                    <div className="pricing-card">
                      <div
                        className={`inner-box ${
                          plan.isActive ? "active" : ""
                        }`}>
                        {plan.isPopular && (
                          <div className="popular-ribbon">
                            Popular
                          </div>
                        )}
                        <div className="category">
                          {plan.category}
                        </div>
                        <h4 className="h4 subtitle">
                          For growing businesses <br />
                          <span>and marketers</span>
                        </h4>
                        <div className="best-offer">
                          <div className="price-area">
                            <div className="price">
                              {plan.price}
                              <span>{plan.period}</span>
                            </div>
                            <Link
                              href="/page-contact"
                              className="btn-style-five">
                              Get Started
                              <i className="fa-classic fa-light fa-angle-right"></i>
                            </Link>
                          </div>
                          <div>
                            <div className="limited-offer">
                              <div className="badge-bg">
                                <span className="texts">
                                  50%
                                </span>
                                <small>OFF</small>
                              </div>
                              <div className="limit">
                                Limited <br />
                                Time Offer
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feature-lists">
                          <ul className="features-list ms-0">
                            {plan.featuresLeft.map(
                              (feature, featureIndex) => (
                                <li key={featureIndex}>
                                  <i className="icon fa-classic far fa-check"></i>
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                          <ul className="features-list">
                            {plan.featuresRight.map(
                              (feature, featureIndex) => (
                                <li key={featureIndex}>
                                  <i className="icon fa-classic far fa-check"></i>
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
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
export default PricingSection;