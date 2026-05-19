"use client";
import React, { useState } from "react";

const faqItems = [
  {
    title: "1. What is your SaaS platform?",
    content:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access",
  },
  {
    title: "2. How secure is your platform?",
    content:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access",
  },
  {
    title: "3. Can I try the platform before subscribing?",
    content:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access",
  },
  {
    title: "4. Is the platform scalable for businesses?",
    content:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access",
  },
  {
    title: "5. What kind of customer support do you offer?",
    content:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access",
  },
];

function AccordionColumn() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className="accordion-box">
      {faqItems.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            className={`accordion block ${isActive ? "active-block" : ""}`}
            key={index}>
            <div
              className={`acc-btn ${isActive ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}>
              {item.title}
              <i className="icon fa-solid fa-chevron-down"></i>
            </div>
            {isActive && (
              <div className="acc-content current">
                <div className="content">
                  <div className="text">{item.content}</div>
                    <ul className="acc-list">
                      <li><i className="fa-solid fa-check"></i> 1 chatbot platforms</li>
                      <li><i className="fa-solid fa-check"></i> 100 conversations/month</li>
                      <li><i className="fa-solid fa-check"></i> Basic NLP support</li>
                    </ul>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function FaqSection() {
  return (
    <section className="faqs-section pb-0">
      <div className="auto-container">
        <div className="row">
          <div className="faq-box col-lg-6">
            <div className="inner-box">
              <AccordionColumn />
            </div>
          </div>

          <div className="faq-box col-lg-6">
            <div className="inner-box">
              <AccordionColumn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}