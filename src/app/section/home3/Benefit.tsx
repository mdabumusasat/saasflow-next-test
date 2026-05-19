"use client";
import React from "react";
import Link from "next/link";
 

const BenefitSectionThree = () => {
  return (
  <div className="benefit-section-layout3">
    <div className="shape-1 animation__rotateY"><img src="/assets/images/icons/shape-66.png" alt=""/></div>
    <div className="shape-2"><img src="/assets/images/icons/shape-67.png" alt=""/></div>
    <div className="container">
      <div className="sec-title text-center">
        <div className="h2 title">All-in-One features to delight <br/>your customers</div>
        <div className="text">Our Help Desk is packed with powerful features designed to <br/>simplify support and keep customers happy.</div>
      </div>
      <div className="row">
        <div className="benefit-block-eight col-lg-4 col-md-6">
          <div className="inner-block">
            <div className="content">
              <div className="number">01</div>
              <div className="h6 title"><Link href="/page-project-details">Multi-Channel Support</Link></div>
              <div className="text">Deliver seamless customer experiences to multi-channel support system.</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit8-1.jpg" alt=""/>
              <img src="/assets/images/resource/benefit8-1.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-eight col-lg-4 col-md-6">
          <div className="inner-block">
            <div className="content">
              <div className="number">02</div>
              <div className="h6 title"><Link href="/page-project-details">Live Chat Support</Link></div>
              <div className="text">Engage with your customers in real time through in live chat support.</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit8-2.jpg" alt=""/>
              <img src="/assets/images/resource/benefit8-2.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-eight col-lg-4 col-md-6">
          <div className="inner-block">
            <div className="content">
              <div className="number">03</div>
              <div className="h6 title"><Link href="/page-project-details">AI-Powered Automation</Link></div>
              <div className="text">Take the manual work out of best customer support with intelligent automation.</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit8-3.jpg" alt=""/>
              <img src="/assets/images/resource/benefit8-3.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-nine col-12">
          <div className="inner-block">
            <div className="content">
              <div className="number">04</div>
              <div className="h6 title"><Link href="/page-project-details">Seamless Experience for Every User, Every Time</Link></div>
              <div className="text">Our Help Desk is designed with accessibility, usability, and performance at core, ensuring's every user can get the support.</div>
              <ul className="benefit-list">
                <li>Real-Time Ticket Updates</li>
                <li>Smart Caching & Optimization</li>
                <li>Low Latency Communication</li>
                <li>High Uptime Reliability</li>
              </ul>
              <Link className="btn-style-one" href="/page-about"><span className="btn-text">Get Started 14th-days Trial</span></Link>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit8-4.jpg" alt=""/>
              <img src="/assets/images/resource/benefit8-4.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BenefitSectionThree;