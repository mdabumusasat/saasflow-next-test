"use client";
import React, { useState } from "react";

const monthlyPlans = [
  {
    title: "Enterprise",
    price: 199,
    icon: "/assets/images/icons/price4-1.png",
    active: false,
  },
  {
    title: "Enterprise",
    price: 199,
    icon: "/assets/images/icons/price4-2.png",
    active: true,
  },
  {
    title: "Enterprise",
    price: 199,
    icon: "/assets/images/icons/price4-3.png",
    active: false,
  },
];

const yearlyPlans = [
  {
    title: "Enterprise",
    price: 199,
    icon: "/assets/images/icons/price4-3.png",
    active: false,
  },
  {
    title: "Enterprise",
    price: 199,
    icon: "/assets/images/icons/price4-2.png",
    active: true,
  },
  {
    title: "Enterprise",
    price: 199,
    icon: "/assets/images/icons/price4-3.png",
    active: false,
  },
];

const features = [
  "Up to 3 Task Projects",
  "5 Team Members includes",
  "Basic Task Management",
  "Real-Time Collaboration",
  "Calendar View & email support",
];

export default function PricingSectionFour() {
  const [activeTab, setActiveTab] = useState("monthly");

  const plans = activeTab === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section className="pricing-section-four pb-100">
      <div className="shape-1 animation__rotateY">
        <img
          src="/assets/images/icons/shape-81.png"
          alt="shape"
        />
      </div>
      <div className="shape-2 bounce-x">
        <img
          src="/assets/images/icons/shape-82.png"
          alt="shape"
        />
      </div>
      <div className="shape-3 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape-83.png"
          alt="shape"
        />
      </div>
      <div className="shape-4">
        <img
          src="/assets/images/icons/shape-80.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title">
            <span>Pricing</span> Pick your plan
          </span>
          <div className="h2 title">
            Flexible pricing for every <br />
            SaaS business
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="pricing-two__tab">
            <nav>
              <div className="nav nav-tabs">
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
          <div className="row">
            {plans.map((plan, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div
                  className={`pricing-card-four ${plan.active ? "active" : ""}`}>
                  <div className="inner-box">
                    <div className="popular-ribbon">Popular Package</div>
                    <div className="price-icon">
                      <img
                        src={plan.icon}
                        alt={plan.title}
                      />
                    </div>
                    <div className="h4 price-title">{plan.title}</div>
                    <div className="price-area">
                      <div className="price">
                        <sup>$</sup>
                        {plan.price}
                        <span>
                          / per {activeTab === "monthly" ? "monthly" : "yearly"}
                        </span>
                      </div>
                    </div>
                    <div className="text">
                      Perfect plan for Single or small teams
                    </div>
                    <div className="feature-lists">
                      <div className="h6 feature-title">
                        Included Features:
                      </div>
                      <ul className="features-list">
                        {features.map((feature, i) => (
                          <li key={i}>
                            <i className="icon fa-classic far fa-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button type="button" className="get-started">
                      <span>Choose Package</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}