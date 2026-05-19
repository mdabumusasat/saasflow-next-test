"use client";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is your SaaS platform?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 2,
    question: "How secure is your platform?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 3,
    question: "Can I try the platform before subscribing?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 4,
    question: "Is the platform scalable for businesses?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 5,
    question: "What kind of customer support do you offer?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 6,
    question: "What happens after my trial ends?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 7,
    question: "Can I cancel my subscription anytime?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 8,
    question: "Do you offer customer support?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 9,
    question: "Does it integrate with other tools?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
  {
    id: 10,
    question: "Do I need technical skills to use it?",
    answer:
      "We use enterprise-grade security protocols, including end-to-end encryption, role-based access.",
    list: [
      "1 chatbot platforms",
      "100 conversations/month",
      "Basic NLP support",
    ],
  },
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(2);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const half = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, half);
  const rightFaqs = faqData.slice(half);

  const renderFaqs = (items: typeof faqData) => (
    <ul className="accordion-box">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <li
            key={item.id}
            className={`accordion block ${isActive ? "active-block" : ""}`}>
            <div
              className={`acc-btn ${isActive ? "active" : ""}`}
              onClick={() => toggle(item.id)}>
              {item.id}. {item.question}
              <div className="icon fa-solid fa-angle-right" />
            </div>
            <div className={`acc-content ${isActive ? "current" : ""}`}>
              <div className="content">
                <div className="text">{item.answer}</div>

                <ul className="acc-list">
                  {item.list.map((l, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check"></i> {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="faqs-section">
      <div className="shape1 tm-gsap-img-parallax">
        <img src="/assets/images/icons/shape-43.png" alt="" />
      </div>
      <div className="container mx-auto px-4">
        <div className="sec-title text-center mb-10">
          <span className="sub-title">
            <span>FAQs</span> Asked Questions
          </span>
          <div className="h2 title text-3xl font-bold">
            Frequently asked questions
          </div>
        </div>
        <div className="outer-box">
          <div className="shape2 animation__rotateY"><img src="/assets/images/icons/shape-44.png" alt=""/></div>
          <div className="row g-5">
            <div className="col-xl-6">
              {renderFaqs(leftFaqs)}
            </div>
            <div className="col-xl-6">
              {renderFaqs(rightFaqs)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}