"use client";
import React from "react";
import Link from "next/link";


const ServiceSectionThree = () => {
  return (
  <section className="services-section-layout4">
    <div className="container">
      <div className="sec-title text-center">
        <span className="sub-title"><span>Services</span> Best SaaS Solutions</span>
        <div className="h2 title">End-to-End Infrastructure <br/>for Training, Scaling, and <br/>Serving AI Models</div>
      </div>
      <div className="row g-3">
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon1.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">Cloud-Based <br/>Solutions</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon2.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">Data Analytics & <br/>Report</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon3.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">Data-Driven <br/>Intelligence</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon4.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">API <br/>Integrations</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon5.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">Security & <br/>Compliance</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon6.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">Multi-Device <br/>Access</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon7.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">AI-Powered <br/>Services</Link></div>
          </div>
        </div>
        <div className="service-block-four col-xl-3 col-sm-6">
          <div className="inner-block">
            <div className="icon"><img src="/assets/images/icons/service4-icon8.png" alt=""/></div>
            <div className="h5 title"><Link href="/page-service-details">Support & <br/>Maintenance</Link></div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-shape bg"><img src="/assets/images/background/service-shape-bg2.png" alt="Image"/></div>
    <div className="shape-1 bounce-y"><img src="/assets/images/icons/shape-32.png" alt="Image"/></div>
    <div className="shape-2 bounce-y"><img src="/assets/images/icons/shape-33.png" alt="Image"/></div>
  </section>
  );
};

export default ServiceSectionThree;