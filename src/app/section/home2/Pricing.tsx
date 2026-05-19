"use client";

import React, { useState } from "react"; 

type BillingType = "monthly" | "yearly";

const features = [
  "Email Automation",
  "Lead Capture Forms",
  "Basic Analytics & Reporting",
  "Maximum 1 User",
  "24/7 hours supports",
];

const pricingPlans = {
  monthly: [
    {
      id: 1,
      name: "Basic Plan",
      description: "Perfect for Single or small teams",
      price: 13,
      active: false,
    },
    {
      id: 2,
      name: "Standard Plan",
      description: "Perfect for Single or small teams",
      price: 59,
      active: true,
    },
    {
      id: 3,
      name: "Enterprise Plan",
      description: "Perfect for Single or small teams",
      price: 97,
      active: false,
    },
  ],
  yearly: [
    {
      id: 1,
      name: "Basic Plan",
      description: "Perfect for Single or small teams",
      price: 13,
      active: false,
    },
    {
      id: 2,
      name: "Standard Plan",
      description: "Perfect for Single or small teams",
      price: 59,
      active: true,
    },
    {
      id: 3,
      name: "Enterprise Plan",
      description: "Perfect for Single or small teams",
      price: 97,
      active: false,
    },
  ],
};

export default function PricingSectionTwo() {
  const [billingType, setBillingType] = useState<BillingType>("monthly");

  const plans = pricingPlans[billingType];

  return (
    <section className="pricing-section-two pt-110 pb-80">
      <div className="shape-1 bounce-x">
        <img
          src="/assets/images/icons/shape-52.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2 bounce-y">
        <img
          src="/assets/images/icons/shape-52.png"
          alt="Shape"
        />
      </div>
      <div className="shape-3">
        <img
          src="/assets/images/icons/shape-56.png"
          alt="Shape"
        />
      </div>
      <div className="shape-4">
        <img
          src="/assets/images/icons/shape-57.png"
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="sec-title light text-center">
          <div className="h2 title">
            Plans designed to fit your <br />
            business needs
          </div>
          <div className="text">
            We have flexible plans that deliver maximum value with <br />
            no hidden costs and scalable features
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 mt-md-0">
          <div className="pricing-two__tab">
            <nav>
              <div className="nav nav-tabs" role="tablist">
                <button
                  type="button"
                  className={`nav-link ${
                    billingType === "monthly" ? "active" : ""
                  }`}
                  onClick={() => setBillingType("monthly")}>
                  Monthly
                </button>
                <button
                  type="button"
                  className={`nav-link ${
                    billingType === "yearly" ? "active" : ""
                  }`}
                  onClick={() => setBillingType("yearly")}>
                  Yearly <span>Save 23%</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="pricing__tab-content">
          <div className="row">
            {plans.map((plan) => (
              <div className="col-xl-4 col-lg-6" key={plan.id}>
                <div className="pricing-card-two">
                  <div
                    className={`inner-box ${plan.active ? "active" : ""}`}>
                    <div className="pricing-title">
                      <div className="h5 title">{plan.name}</div>
                      <div className="text">{plan.description}</div>
                    </div>
                    <div className="feature-lists">
                      <div className="h6 title">Included Features:</div>
                      <ul className="features-list">
                        {features.map((feature, index) => (
                          <li key={index}>
                            <i className="icon fa-classic far fa-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="price-area">
                      <div className="price">
                        <sub>$</sub>
                        {plan.price}{" "}
                        <span>
                          / per{" "}
                          {billingType === "monthly"
                            ? "monthly"
                            : "Yearly"}
                        </span>
                      </div>
                    </div>
                    <button type="button" className="get-started">
                      Choose Package
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