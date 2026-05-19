"use client";
import React from "react";
import CounterUp from "../../components/elements/CounterUp";

const funfacts = [
  {
    id: 1,
    icon: "/assets/images/icons/funfact1-1.png",
    value: 10,
    suffix: "m+",
    title: "Clients Revenue",
  },
  {
    id: 2,
    icon: "/assets/images/icons/funfact1-2.png",
    value: 180,
    suffix: "+",
    title: "Integrations easily connect",
  },
  {
    id: 3,
    icon: "/assets/images/icons/funfact1-3.png",
    value: 20,
    suffix: "m+",
    title: "Transactions recorded",
  },
  {
    id: 4,
    icon: "/assets/images/icons/funfact1-4.png",
    value: 4.9,
    suffix: "+",
    title: "Happy user rating",
  },
];

export default function FunfactSection() {
  return (
    <section className="funfact-section pt-0">
      <div className="sec-title text-center">
        <div className="h2 title">
          Trusted by millions, backed <br />
          speaks in numbers
        </div>
        <div className="text">
          Every number tells a story of growth, trust, and innovation <br />
          from global users to successful projects.
        </div>
      </div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="shape-1 bounce-x">
            <img
              src="/assets/images/icons/shape-24.png"
              alt="Shape 1"
            />
          </div>
          <div className="shape-2 bounce-x">
            <img
              src="/assets/images/icons/shape-25.png"
              alt="Shape 2"
            />
          </div>
          {funfacts.map((item) => (
            <div className="funfact-box" key={item.id}>
              <div className="inner-box">
                <span className="icon">
                  <img
                    src={item.icon}
                    alt={item.title}
                  />
                </span>
                <div className="count-box">
                  <CounterUp end={item.value} />
                  {item.suffix}
                </div>
                <div className="text">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}