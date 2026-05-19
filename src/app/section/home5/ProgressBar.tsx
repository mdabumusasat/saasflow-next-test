"use client";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "1. Capture & Organize Leads",
    text: "Easily import or collect leads from multiple sources web forms, social media, email, or integrations.",
  },
  {
    id: 2,
    title: "2. Automate Follow-Ups",
    text: "Automatically trigger follow-up emails, reminders, and sequences to keep every lead engaged.",
  },
  {
    id: 3,
    title: "3. Track Sales Pipeline",
    text: "Monitor every stage of the customer journey with full visibility into your pipeline.",
  },
  {
    id: 4,
    title: "4. Collaborate with Your Team",
    text: "Assign tasks, share updates, and keep everyone aligned in one connected workspace.",
  },
  {
    id: 5,
    title: "5. Analyse & Optimize",
    text: "Use performance data and reporting insights to improve workflow efficiency and growth.",
  },
];

const integrations = [
  "/assets/images/icons/integration5-1.png",
  "/assets/images/icons/integration5-2.png",
  "/assets/images/icons/integration5-3.png",
  "/assets/images/icons/integration5-4.png",
  "/assets/images/icons/integration5-5.png",
  "/assets/images/icons/integration5-6.png",
  "/assets/images/icons/integration5-7.png",
  "/assets/images/icons/integration5-8.png",
];

export default function ProgressSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="progress-section-layout5">
      <div className="bg-image bg">
        <img src="/assets/images/background/progress5-bg1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="outer-box">
          <div className="sec-title text-center light">
            <span className="sub-title">
              <span>SaaS</span> Progress Crafted in Sequence
            </span>
            <div className="h2 title">
              Simplify Every Step of <br />
              Your Workflow
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <ul className="progress-box-layout5">
                {steps.map((step) => {
                  const isActive = active === step.id;
                  return (
                    <li
                      key={step.id}
                      className={`accordion block ${isActive ? "active-block" : ""}`}>
                      <div
                        className={`acc-btn ${isActive ? "active" : ""}`}
                        onClick={() => setActive(step.id)}>
                        {step.title}
                      </div>
                      <div className={`acc-content ${isActive ? "current" : ""}`}>
                        {isActive && (
                          <div className="content">
                            <div className="text">{step.text}</div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="progress-image">
                <img src="/assets/images/resource/progress5-1.jpg" alt="progress" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="integration-area pt-120">
        <div className="inner-container">
          <div className="sec-title text-center light">
            <span className="sub-title">Integration & Tools</span>
            <div className="h2 title">
              Powerful Integrations <br />
              & Essential Tools
            </div>
          </div>
          <div className="outer-box">
            {integrations.map((icon, index) => (
              <div className="icon-box" key={index}>
                <div className="icon">
                  <img src={icon} alt={`integration-${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}