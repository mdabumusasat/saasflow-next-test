"use client";
import Link from "next/link";
import React, { useState } from "react";

const tabs = [
  {
    id: "pt-1",
    label: "Task Management",
    icon: "/assets/images/icons/services-tab1.png",
    title: "Transform Your Workflow with Seamless CRM Task Automation",
    text: "Take control of projects, deadlines, and team activities without switching tools. Automate workflows, assign tasks, and track progress — all inside one connected system.",
    list: [
      "Centralized Workflows That Drive Faster",
      "Built-In Task Automation to Accelerate",
      "Smarter Task Management, Natively Integrated",
    ],
    image1: "/assets/images/resource/services5-1.jpg",
    image2: "/assets/images/resource/services5-2.jpg",
  },
  {
    id: "pt-2",
    label: "Analytics & Reporting",
    icon: "/assets/images/icons/services-tab2.png",
    title: "Understand Business Performance with Real-Time Analytics",
    text: "Measure team performance, customer engagement, and revenue insights with powerful reporting dashboards that help you make faster decisions.",
    list: [
      "Real-Time Performance Tracking",
      "Actionable Reporting Dashboards",
      "Data-Driven Growth Decisions",
    ],
    image1: "/assets/images/resource/services5-1.jpg",
    image2: "/assets/images/resource/services5-2.jpg",
  },
  {
    id: "pt-3",
    label: "Collaboration Tools",
    icon: "/assets/images/icons/services-tab3.png",
    title: "Empower Teams with Better Collaboration Tools",
    text: "Keep communication, shared tasks, and project visibility inside one workspace so teams move faster and stay aligned.",
    list: [
      "Shared Workspaces for Teams",
      "Improved Internal Communication",
      "Unified Project Visibility",
    ],
    image1: "/assets/images/resource/services5-1.jpg",
    image2: "/assets/images/resource/services5-2.jpg",
  },
];

export default function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="services-section2-layout5">
      <div className="shape-1">
        <img src="/assets/images/icons/shape-91.png" alt="shape" />
      </div>
      <div className="shape-2">
        <img src="/assets/images/icons/shape-92.png" alt="shape" />
      </div>
      <div className="shape-3">
        <img src="/assets/images/icons/shape-93.png" alt="shape" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title">
            <span>SaaS</span> The #1 AI Agent for customer service
          </span>
          <div className="h2 title">
            All the Tools You Need <br />
            In One Platform
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 mt-md-0">
          <div className="services__tab">
            <nav>
              <div className="nav nav-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}>
                    <span className="icon">
                      <img src={tab.icon} alt={tab.label} />
                    </span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
        {activeContent && (
          <div className="services__tab-content mt-4">
            <div className="row align-items-center">
              <div className="content-column col-xl-5 col-lg-6">
                <div className="inner-column">
                  <div className="h4 title">{activeContent.title}</div>
                  <div className="text">{activeContent.text}</div>
                  <ul className="service-list-one">
                    {activeContent.list.map((item, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-check" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="theme-btn-four">
                    Get 14th-days trial
                    <i className="fa-light fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="image-column offset-xl-1 col-lg-6">
                <div className="inner-column">
                  <div className="image">
                    <img src={activeContent.image1} alt="service" />
                  </div>
                  <div className="image2 bounce-x">
                    <img src={activeContent.image2} alt="service" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}