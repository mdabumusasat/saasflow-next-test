"use client";
import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "1. What is your SaaS platform?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    question: "2. How secure is your platform?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    question: "3. Can I try the platform before subscribing?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    question: "4. Is the platform scalable for growing businesses?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
  {
    question: "5. What kind of customer support do you offer?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access, and compliance.",
  },
];

export default function FaqSectionLayout4() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section-layout4">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="sec-title">
              <span className="sub-title">
                <span>FAQs</span> Asked Questions
              </span>

              <div className="h2 title">Frequently asked questions</div>

              <div className="text">
                Have questions? We’ve got answers. Our
                <br />
                frequently asked questions cover everything
                <br />
                you need to know about our platform.
              </div>

              <Link className="btn-style-one mt-30" href="/page-faq">
                <span className="btn-text">Request a Quote</span>
              </Link>
            </div>
          </div>

          <div className="col-xl-7 offset-xl-1">
            <ul className="accordion-box-layout4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <li
                    key={index}
                    className={`accordion block ${
                      isActive ? "active-block" : ""
                    } ${index === faqs.length - 1 ? "mb-0" : ""}`}>
                    <div
                      className={`acc-btn ${isActive ? "active" : ""}`}
                      onClick={() => toggleFaq(index)}>
                      {faq.question}
                      <div className="icon fa-solid fa-plus"></div>
                    </div>
                    <div
                      className={`acc-content ${isActive ? "current" : ""}`}
                      style={{
                        display: isActive ? "block" : "none",
                      }}>
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}