"use client";
import React from "react";
import Link from "next/link";
 

const BenefitSectionThree = () => {
  return (
  <section className="benefits-section-layout4 pt-0 pb-90">
    <div className="container">      
      <div className="sec-title text-center">
        <span className="sub-title"><span>Benefits</span> Core SaaS Features</span>
        <div className="h2 title">All-in-one tools built for growth, <br/> performance, & efficiency</div>
      </div>
      <div className="row">
        <div className="benefit-block col-md-6">
          <div className="inner-block">
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit1-1.jpg" alt=""/>
              <img src="/assets/images/resource/benefit1-1.jpg" alt=""/></Link>
            </div>
            <div className="content">
              <div className="h5 title"><Link href="/page-project-details">Sync with real-time data</Link></div>
              <div className="text">Every update, change, or action is instantly reflected across all devices and platforms, ensuring your team always works with the latest information.</div>
            </div>
          </div>
        </div>
        <div className="benefit-block col-md-6">
          <div className="inner-block">
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit1-2.jpg" alt=""/>
              <img src="/assets/images/resource/benefit1-2.jpg" alt=""/></Link>
            </div>
            <div className="content">
              <div className="h5 title"><Link href="/page-project-details">Take actions on your systems</Link></div>
              <div className="text">Whether it’s managing tasks, updating records, or executing processes, our solution gives you the control and efficiency you need</div>
            </div>
          </div>
        </div>
        <div className="benefit-block col-lg-4 col-md-6">
          <div className="inner-block theme-color3 light">
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit1-3.jpg" alt=""/>
              <img src="/assets/images/resource/benefit1-3.jpg" alt=""/></Link>
            </div>
            <div className="content">
              <div className="h5 title"><Link href="/page-project-details">Compare AI models</Link></div>
              <div className="text">Provides side-by-side performance metrics, accuracy scores, and real-time insights.</div>
            </div>
          </div>
        </div>
        <div className="benefit-block col-lg-4 col-md-6">
          <div className="inner-block theme-color1">
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit1-4.jpg" alt=""/>
              <img src="/assets/images/resource/benefit1-4.jpg" alt=""/></Link>
            </div>
            <div className="content">
              <div className="h5 title"><Link href="/page-project-details">Smart escalation</Link></div>
              <div className="text">Ensure critical issues addressed promptly with our Smart Escalation feature.</div>
            </div>
          </div>
        </div>
        <div className="benefit-block col-lg-4 col-md-6">
          <div className="inner-block theme-color3 light">
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit1-5.jpg" alt=""/>
              <img src="/assets/images/resource/benefit1-5.jpg" alt=""/></Link>
            </div>
            <div className="content">
              <div className="h5 title"><Link href="/page-project-details">Advanced reporting</Link></div>
              <div className="text">Gain deep insights into your business with performance with advanced reporting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape1 animation__rotateY"><img src="/assets/images/icons/shape-34.png" alt=""/></div>
  </section>
  );
};

export default BenefitSectionThree;