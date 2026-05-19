"use client";
import React, { useState } from "react";

const features = [
  "Up to 3 Task Projects",
  "5 Team Members includes",
  "Basic Task Management",
  "Real-Time Collaboration",
  "Calendar View & email support",
];

const monthlyPlans = [
  {
    id: 1,
    title: "Enterprise",
    price: 199,
    period: "/ per monthly",
    icon: "/assets/images/icons/price4-1.png",
    active: false,
  },
  {
    id: 2,
    title: "Enterprise",
    price: 199,
    period: "/ per monthly",
    icon: "/assets/images/icons/price4-2.png",
    active: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: 199,
    period: "/ per monthly",
    icon: "/assets/images/icons/price4-3.png",
    active: false,
  },
];

const yearlyPlans = [
  {
    id: 1,
    title: "Enterprise",
    price: 199,
    period: "/ per Yearly",
    icon: "/assets/images/icons/price4-1.png",
    active: false,
  },
  {
    id: 2,
    title: "Enterprise",
    price: 199,
    period: "/ per Yearly",
    icon: "/assets/images/icons/price4-2.png",
    active: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: 199,
    period: "/ per Yearly",
    icon: "/assets/images/icons/price4-3.png",
    active: false,
  },
];

interface PricingCardProps {
  plan: {
    id: number;
    title: string;
    price: number;
    period: string;
    icon: string;
    active: boolean;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => (
  <div className="col-xl-4 col-md-6">
    <div className={`pricing-card-four ${plan.active ? "active" : ""}`}>
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
            {plan.price} <span>{plan.period}</span>
          </div>
        </div>
        <div className="text">
          Perfect plan for Single or small teams
        </div>
        <div className="feature-lists">
          <div className="h6 feature-title">Included Features:</div>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>
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
);

const PricingSectionFour: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans =
    activeTab === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section className="pricing-section-four pb-0">
      <div className="shape-1 animation__rotateY">
        <img
          src="/assets/images/icons/shape-81.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2 bounce-x">
        <img
          src="/assets/images/icons/shape-82.png"
          alt="Shape"
        />
      </div>
      <div className="shape-3 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape-83.png"
          alt="Shape"
        />
      </div>
      <div className="shape-4">
        <img
          src="/assets/images/icons/shape-80.png"
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div
            className="pricing-two__tab wow fadeInUp"
            data-wow-delay=".4s">
            <nav>
              <div
                className="nav nav-tabs"
                role="tablist">
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

        {/* Pricing Cards */}
        <div className="pricing__tab-content">
          <div className="row">
            {plans.map((plan) => (
              <PricingCard
                key={`${activeTab}-${plan.id}`}
                plan={plan}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionFour;