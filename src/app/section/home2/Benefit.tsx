"use client";
import React from "react";
import Link from "next/link";

export default function BenefitSection() {
  return (
  <section className="benefit-section-layout2">
    <div className="shape-1"><img src="/assets/images/icons/shape-19.png" alt=""/></div>
    <div className="shape-2"><img src="/assets/images/icons/shape-20.png" alt=""/></div>
    <div className="shape-3 bounce-y"><img src="/assets/images/icons/shape-21.png" alt=""/></div>
    <div className="shape-4 bounce-y"><img src="/assets/images/icons/shape-22.png" alt=""/></div>
    <div className="shape-5 bounce-y"><img src="/assets/images/icons/shape-23.png" alt=""/></div>
    <div className="container">
      <div className="sec-title text-center">
        <div className="h2 title">Next-level automation starts <br/>with our core capabilities</div>
        <div className="text">Business automation platform is designed with powerful <br/>core features that streamline daily operations.</div>
      </div>
      <div className="row">
        <div className="benefit-block-five col-lg-6">
          <div className="inner-block">
            <div className="content">
              <div className="h4 title"><Link href="/page-project-details">Design Automated Workflows Instantly</Link></div>
              <div className="text">Save time and boost productivity by creating automated workflows in just a few clicks platform allows you to map out processes</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit2-1.jpg" alt=""/>
              <img src="/assets/images/resource/benefit2-1.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-six col-lg-6">
          <div className="inner-block">
            <div className="content">
              <div className="h4 title"><Link href="/page-project-details">Real-Time Collaboration Made Easy</Link></div>
              <div className="text">Enhance team productivity and streamline communication with real-time collaboration tools. platform allows team</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit2-2.jpg" alt=""/>
              <img src="/assets/images/resource/benefit2-2.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-six col-lg-4">
          <div className="inner-block">
            <div className="content">
              <div className="h4 title"><Link href="/page-project-details">100+ Integrations tools</Link></div>
              <div className="text">CRM and email marketing project analytics, integrations allow you to centralize.</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit2-3.jpg" alt=""/>
              <img src="/assets/images/resource/benefit2-3.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-six col-lg-4">
          <div className="inner-block">
            <div className="content">
              <div className="h4 title"><Link href="/page-project-details">Multi-Channel Campaigns</Link></div>
              <div className="text">Reach your audience wherever they with powerful multi-channel campaigns</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit2-4.jpg" alt=""/>
              <img src="/assets/images/resource/benefit2-4.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="benefit-block-seven col-lg-4">
          <div className="inner-block">
            <div className="content">
              <div className="h4 title"><Link href="/page-project-details">Simplify Work with Fast</Link></div>
              <div className="text">Take the complexity out of daily operations with fast and efficient automation.</div>
            </div>
            <div className="image"><Link href="/page-project-details">
              <img src="/assets/images/resource/benefit2-5.jpg" alt=""/>
              <img src="/assets/images/resource/benefit2-5.jpg" alt=""/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  );
}