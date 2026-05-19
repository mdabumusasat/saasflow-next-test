"use client";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is your SaaS platform?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 2,
    question: "How secure is your platform?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 3,
    question: "Can I try the platform before subscribing?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 4,
    question: "Is the platform scalable for growing?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 5,
    question: "What kind of customer support?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 6,
    question: "How easy is it to get started?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 7,
    question: "Do you offer a free trial?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 8,
    question: "What integrations are available?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 9,
    question: "Is my data secure?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    id: 10,
    question: "What support options do you provide?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
];

export default function FaqSectionLayout2() {
  const [activeId, setActiveId] = useState<number | null>(2);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const leftFaqs = faqData.slice(0, 5);
  const rightFaqs = faqData.slice(5);

  const renderFaqColumn = (items: typeof faqData) => (
    <ul className="accordion-box-layout2">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <li
            key={item.id}
            className={`accordion block ${isActive ? "active-block" : ""}`}>
            <div
              className={`acc-btn ${isActive ? "active" : ""}`}
              onClick={() => toggleAccordion(item.id)}
              style={{ cursor: "pointer" }}>
              {item.id}. {item.question}
              <div className="icon far fa-angle-right"></div>
            </div>
            <div className={`acc-content ${isActive ? "current" : ""}`}>
              <div className="content">
                <div className="text">{item.answer}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="faqs-section-layout2 pt-0">
      <div className="shape-1">
        <img
          src="/assets/images/icons/shape-60.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2 bounce-x">
        <img
          src="/assets/images/icons/shape-61.png"
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="outer-box pt-110 pb-120">
          <div className="sec-title text-center">
            <div className="h2 title">Frequently asked questions</div>
            <div className="text">
              We’ve got answers. Our Frequently Asked Questions (FAQs)
              section <br />
              is designed to help you quickly find the information.
            </div>
          </div>

          {/* Accordion */}
          <div className="accordion-outer">
            <div className="row">
              <div className="col-xl-6">{renderFaqColumn(leftFaqs)}</div>
              <div className="col-xl-6">{renderFaqColumn(rightFaqs)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}