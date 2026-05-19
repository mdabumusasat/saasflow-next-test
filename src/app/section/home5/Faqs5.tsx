"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Q1: What is a Help Desk and how does it work?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
  },
  {
    question: "Q2: Can I integrate the Help Desk with other tools?",
    answer:
     "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
  },
  {
    question: "Q3: Is the Help Desk suitable for small businesses?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
  },
  {
    question: "Q4: How secure is my customer data?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
  },
  {
    question: "Q5: Do you offer a free trial?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
  },
];

const FaqSectionLayout3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faqs-section-layout3">
      <div className="container">
        <div className="outer-box">
          <div className="sec-title text-center">
            <span className="sub-title">
              <span>SaaS</span> Asked Questions
            </span>
            <div className="h2 title">Frequently Asked Questions</div>
            <div className="text">
              Our FAQ section covers everything you need to know, from setup
              and <br />
              functionality to customization and support.
            </div>
          </div>
          <ul className="accordion-box-layout3">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={index}
                  className={`accordion block ${
                    isActive ? "active-block" : ""
                  }`}>
                  <div
                    className={`acc-btn ${isActive ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}>
                    {item.question}
                    <div className="icon fa-solid fa-plus"></div>
                  </div>
                  <div className={`acc-content ${isActive ? "current" : ""}`}>
                    {isActive && (
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqSectionLayout3;