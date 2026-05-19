"use client";
import React from "react";
import Link from "next/link";

export default function FeatureSection() {

  return (
  <section className="features-section-layout3 pt-0 pb-110">
    <div className="shape-1 bounce-x"><img src="/assets/images/icons/shape-68.png" alt=""/></div>
    <div className="shape-2"><img src="/assets/images/icons/shape-69.png" alt=""/></div>
    <div className="container">
      <div className="row align-items-center">
        <div className="image-column col-xl-6 col-lg-5">
          <div className="inner-column">
            <div className="image"><img src="/assets/images/resource/feature3-1.jpg" alt=""/></div>
          </div>
        </div>
        <div className="content-column col-xl-6 col-lg-7">
          <div className="inner-column">
            <div className="sec-title">
              <div className="h2 title">AI-Powered solutions for customer support</div>
              <div className="text">Our customer support tools leverage AI-driven ticketing make managing inquiries faster and more efficient. By automatically categorizing and prioritizing tickets responses.</div>
              <ul className="features-list">
                <li>Automated Ticket Categorization</li>
                <li>Provides smart reply templates to help support agents respond faster.</li>
                <li>Automatically routes complex tickets to the right specialist.</li>
              </ul>
              <Link className="btn-style-13" href="/page-about">
                <span className="btn-text">Get Started 14th-days Trial</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}