"use client";
import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  delay: number;
}


const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Q1: What is a Help Desk and how does it work?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
    delay: 200,
  },
  {
    id: 2,
    question: "Q2: Can I integrate the Help Desk with other tools?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
    delay: 300,
  },
  {
    id: 3,
    question: "Q3: Is the Help Desk suitable for small businesses?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
    delay: 400,
  },
  {
    id: 4,
    question: "Q4: How secure is my customer data?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
    delay: 500,
  },
  {
    id: 5,
    question: "Q5: Do you offer a free trial?",
    answer:
      "A Help Desk is a centralized platform where businesses manage customer inquiries, issues, and support requests. It helps teams track, prioritize, and resolve tickets efficiently while improving customer satisfaction.",
    delay: 500,
  },
];


const FaqsAndBlogSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="faqs-outer-box-layout3 pt-0 pb-110">
      <div className="bg-shape bg">
        <img
          src="/assets//assets/images/background/faqs-bg3.png"
          alt="FAQ Background"
        />
      </div>
      <section className="faqs-section-layout3 pb-110 pt-110">
        <div className="container">
          <div className="outer-box">
            <div className="sec-title text-center">
              <div className="h2 title">
                Common questions, simple <br />
                way to solutions
              </div>
              <div className="text">
                Our FAQ section is designed to give you quick, straightforward
                <br />
                answers to the most common questions.
              </div>
            </div>
            <ul className="accordion-box-layout3">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <li
                    key={faq.id}
                    className={`accordion block ${
                      isActive ? "active-block" : ""
                    } ${
                      index === faqs.length - 1
                        ? "mb-0 border-bottom-0"
                        : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={faq.delay}>
                    <div
                      className={`acc-btn ${isActive ? "active" : ""}`}
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: "pointer" }}>
                      {faq.question}
                      <div className="icon fa-solid fa-plus"></div>
                    </div>
                    <div
                      className={`acc-content ${
                        isActive ? "current" : ""
                      }`}
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
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="sec-title text-center">
            <div className="h2 title">Help Desk Tips & Trends</div>
            <div className="text">Stay informed with our blog, where we share the latest <br /> insights, best practices, and industry trends.</div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="blog-block-three">
                <div className="inner-block style-3">
                  <div className="content mb-10">
                    <div className="post-meta">
                      <div className="category">Help desk</div>
                      <div className="date">May 12, 2026</div>
                    </div>
                    <div className="h6 title"><Link href="/news-details">Future of customer support how AI is transforming help desks</Link></div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <Link href="/news-details">
                        <img src="/assets/images/resource/blog3-3.jpg" alt="blog"/>
                        <img src="/assets/images/resource/blog3-3.jpg" alt="blog"/>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="post-meta">
                        <div className="category">Help desk</div>
                        <div className="date">May 12, 2026</div>
                      </div>
                      <div className="h6 title"><Link href="/news-details">Future of customer support how AI is transforming help desks</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="blog-block-three">
                <div className="inner-block style-2">
                  <div className="image-box mb-10">
                    <div className="image">
                      <Link href="/news-details">
                        <img src="/assets/images/resource/blog3-2.jpg" alt="blog"/>
                        <img src="/assets/images/resource/blog3-2.jpg" alt="blog"/>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="post-meta">
                        <div className="category">Help desk</div>
                        <div className="date">May 12, 2026</div>
                      </div>
                      <div className="h6 title"><Link href="/news-details">Future of customer support how AI is transforming help desks</Link></div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="post-meta">
                      <div className="category">Help desk</div>
                      <div className="date">May 12, 2026</div>
                    </div>
                    <div className="h6 title"><Link href="/news-details">Future of customer support how AI is transforming help desks</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="blog-block-three">
                <div className="inner-block">
                  <div className="content mb-10">
                    <div className="post-meta">
                      <div className="category">Help desk</div>
                      <div className="date">May 12, 2026</div>
                    </div>
                    <div className="h6 title"><Link href="/news-details">Future of customer support how AI is transforming help desks</Link></div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <Link href="/news-details">
                        <img src="/assets/images/resource/blog3-1.jpg" alt="blog"/>
                        <img src="/assets/images/resource/blog3-1.jpg" alt="blog"/>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="post-meta">
                        <div className="category">Help desk</div>
                        <div className="date">May 12, 2026</div>
                      </div>
                      <div className="h6 title"><Link href="/news-details">Future of customer support how AI is transforming help desks</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsAndBlogSection;