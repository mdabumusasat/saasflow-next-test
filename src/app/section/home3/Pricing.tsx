"use client";
import React, { useState } from "react";

type BillingType = "monthly" | "yearly";

interface PricingPlan {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  period: string;
  icon: string;
  active?: boolean;
  features: string[];
}

const pricingData: Record<BillingType, PricingPlan[]> = {
  monthly: [
    {
      id: 1,
      title: "Starter",
      subtitle: "Basic Package",
      price: 15,
      period: "/per monthly",
      icon: "/assets/images/icons/pricing-icon3-1.png",
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
    },
    {
      id: 2,
      title: "Popular",
      subtitle: "Standard Package",
      price: 35,
      period: "/per monthly",
      icon: "/assets/images/icons/pricing-icon3-2.png",
      active: true,
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
    },
    {
      id: 3,
      title: "Premium",
      subtitle: "Custom Package",
      price: 250,
      period: "/per monthly",
      icon: "/assets/images/icons/pricing-icon3-3.png",
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
    },
  ],

  yearly: [
    {
      id: 1,
      title: "Starter",
      subtitle: "Basic Package",
      price: 15,
      period: "/per Yearly",
      icon: "/assets/images/icons/pricing-icon3-1.png",
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
    },
    {
      id: 2,
      title: "Popular",
      subtitle: "Standard Package",
      price: 35,
      period: "/per Yearly",
      icon: "/assets/images/icons/pricing-icon3-2.png",
      active: true,
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
    },
    {
      id: 3,
      title: "Premium",
      subtitle: "Custom Package",
      price: 250,
      period: "/per Yearly",
      icon: "/assets/images/icons/pricing-icon3-3.png",
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
    },
  ],
};

const PricingSectionThree = () => {
  const [activeTab, setActiveTab] = useState<BillingType>("monthly");

  const plans = pricingData[activeTab];

  return (
    <section className="pricing-section-three pt-110">
      <div className="shape-1 bounce-y">
        <img
          src="/assets/images/icons/shape-71.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2">
        <img
          src="/assets/images/icons/shape-75.png"
          alt="Shape"
        />
      </div>

      <div className="shape-3 bounce-y">
        <img
          src="/assets/images/icons/shape-72.png"
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="sec-title light text-center">
          <div className="h2 title">
            Flexible Pricing for Every <br />
            Support Team
          </div>
          <div className="text">
            Our pricing plans are designed to fit teams of all sizes, whether
            starting out
            <br />
            or managing a large support operation.
          </div>
        </div>
        <div className="d-flex justify-content-center">
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
                  Yearly Save 20%
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="pricing__tab-content">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row">
                {plans.map((plan) => (
                  <div key={plan.id} className="col-xl-4 col-md-6">
                    <div className="pricing-card-three">
                      <div
                        className={`inner-box ${
                          plan.active ? "active" : ""
                        }`}>
                        <div className="pricing-icon">
                          <img
                            src={plan.icon}
                            alt={plan.title}
                          />
                        </div>
                        <div className="pricing-title">
                          <div className="h6 title">
                            {plan.title} <br />
                            {plan.subtitle}
                          </div>
                        </div>
                        <div className="price-area">
                          <div className="price">
                            <sub>$</sub>
                            {plan.price} <span>{plan.period}</span>
                          </div>
                        </div>
                        <button type="button" className="get-started">
                          Choose Package
                        </button>
                        <div className="feature-lists">
                          <div className="h6 title">Included Features:</div>
                          <ul className="features-list">
                            {plan.features.map((feature, index) => (
                              <li key={index}>
                                <i className="icon fa-classic far fa-check"></i>
                                {feature}
                              </li>
                            ))}
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

export default PricingSectionThree;