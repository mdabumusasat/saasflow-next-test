"use client";
import React from "react";
import Link from "next/link";


const ServiceSectionThree = () => {
  return (
  <div className="services-section-layout3 pt-110 pb-110">
    <div className="bg-image bg"><img src="/assets/images/background/services3-bg1.jpg" alt=""/></div>
    <div className="shape-1 bounce-y"><img src="/assets/images/icons/shape-65.png" alt=""/></div>
    <div className="container">
      <div className="sec-title light text-center">
        <div className="h2 title">Intelligent support platform powered by <br/> AI for seamless collaboration</div>
        <div className="text">Our AI-powered help desk is designed to make customer support <br/> faster, smarter, and more collaborative.</div>
      </div>
    </div>
    <div className="outer-box">
      <div className="image"><img src="/assets/images/resource/service3-1.jpg" alt=""/></div>
    </div>
    <div className="container">
      <div className="inner-row">
        <div className="services-box-layout3">
          <div className="inner-box">
            <div className="icon"><img src="/assets/images/icons/service5-icon4.png" alt=""/></div>
            <div className="h6 title"><Link href="/page-service-details">Instant Support Anytime</Link></div>
            <div className="text">Resolve customer queries quickly with <br/>AI-driven assistance around clock.</div>
          </div>
        </div>
        <div className="services-box-layout3">
          <div className="inner-box">
            <div className="icon"><img src="/assets/images/icons/service5-icon2.png" alt=""/></div>
            <div className="h6 title"><Link href="/page-service-details">Unified Communication</Link></div>
            <div className="text"> Keep all your chats, emails, and calls <br/>in one easy-to-manage platform.</div>
          </div>
        </div>
        <div className="services-box-layout3">
          <div className="inner-box">
            <div className="icon"><img src="/assets/images/icons/service5-icon3.png" alt=""/></div>
            <div className="h6 title"><Link href="/page-service-details">Collaborative Team Tools</Link></div>
            <div className="text">Enable your support agents to work <br/>together seamlessly quicker</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ServiceSectionThree;