"use client";
import React, { useState } from "react";
import Link from "next/link";

const PricingSectionLayout5 = () => {
  const [planType, setPlanType] = useState("monthly");

  return (
    <section className="pricing-section-layout5">
      <div className="shape-1 bounce-x">
        <img src="/assets/images/icons/shape-94.png" alt="shape" />
      </div>
      <div className="shape-2 bounce-y">
        <img src="/assets/images/icons/shape-95.png" alt="shape" />
      </div>
      <div className="shape-3">
        <img src="/assets/images/icons/shape-96.png" alt="shape" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title">
            <span>SaaS</span> Pick your plan
          </span>
          <div className="h2 title">Flexible Pricing for Every Stage</div>
          <div className="text">
            Whether you're just getting started or scaling fast, we’ve got a
            pricing plan that <br />
            fits your needs. Our transparent and flexible packages are designed
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="pricing-two__tab">
            <nav>
              <div className="nav nav-tabs">
                <button
                  className={`nav-link ${planType === "monthly" ? "active" : ""}`}
                  onClick={() => setPlanType("monthly")}>
                  Monthly
                </button>
                <button
                  className={`nav-link ${planType === "yearly" ? "active" : ""}`}
                  onClick={() => setPlanType("yearly")}>
                  Yearly
                </button>
                <span>Save 23%</span>
              </div>
            </nav>
          </div>
        </div>
        <div className="table-responsive">
          <table className="pricing-table">
            <thead>
              <tr>
                <th></th>
                <th>
                  <div className="price-area">
                    <div className="h6 price-title">Basic Plan</div>
                    <div className="price">$18.00</div>
                    <div className="month">per month</div>
                    <div className="popular-ribbon">Popular plan</div>
                  </div>
                </th>
                <th>
                  <div className="price-area">
                    <div className="h6 price-title">Standard Plan</div>
                    <div className="price">$49.00</div>
                    <div className="month">per month</div>
                    <div className="popular-ribbon">Popular plan</div>
                  </div>
                </th>
                <th>
                  <div className="price-area">
                    <div className="h6 price-title">Premium Plan</div>
                    <div className="price">$105.00</div>
                    <div className="month">per month</div>
                    <div className="popular-ribbon">Popular plan</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "Mistakes To Avoid",
                  values: ["x", "check", "check"],
                },
                {
                  title: "Unlimited Software Projects",
                  values: ["x", "check", "check"],
                },
                {
                  title: "Lifetime Support & SEO Experts",
                  values: ["x", "check", "check"],
                },
                {
                  title: "Advance Dashboard",
                  values: ["x", "check", "check"],
                },
                {
                  title: "Cloud Hosting & Domain",
                  values: ["200 GB", "05 TB", "Unlimited"],
                },
                {
                  title: "Knew About Fonts",
                  values: ["check", "check", "check"],
                },
                {
                  title: "Real-time editing & Updating",
                  values: ["check", "check", "check"],
                },
                {
                  title: "Streamlined information sharing",
                  values: ["check", "check", "check"],
                },
                {
                  title: "Knowledge management",
                  values: ["check", "check", "check"],
                },
              ].map((item, i) => (
                <tr key={i}>
                  <td className="price-title2">{item.title}</td>
                  {item.values.map((val, idx) => (
                    <td key={idx} className="price">
                      {val === "check" ? (
                        <i className="icon fa-solid fa-check"></i>
                      ) : val === "x" ? (
                        <i className="icon fa-solid fa-xmark"></i>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td></td>
                <td className="price-btn">
                  <Link href="#" className="theme-btn-ten">
                    Get Started <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </td>
                <td className="price-btn">
                  <Link href="#" className="theme-btn-ten">
                    Get Started <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </td>
                <td className="price-btn">
                  <Link href="#" className="theme-btn-ten">
                    Get Started <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionLayout5;