"use client";
import React from "react";
import Link from "next/link";

export default function FeaturesSection() {
  return (
  <section className="features-section-layout2">
    <div className="shape-1 tm-gsap-img-parallax"><img src="/assets/images/icons/shape-55.png" alt=""/></div>
    <div className="auto-container">
      <div className="outer-box pt-110 pb-100">
        <div className="sec-title">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="h2 title">Unlock the Power of Automation for Your Business</div>
            </div>
            <div className="col-xl-4 offset-xl-3">
              <div className="text mb-30 mt-0">Automation is no longer the future—it’s the now. By replacing repetitive tasks with smart, scalable solutions, you free up valuable time to focus matters</div>
              <Link className="btn-style-eight" href="/page-service-details"><span className="btn-text">See All Features</span></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="feature-box-two col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-box">
              <div className="icon"><img src="/assets/images/icons/feature2-icon2.png" alt=""/></div>
              <div className="h6 title"><Link href="/page-service-details">CRM & Sales Automation</Link></div>
              <div className="text">Streamlining lead management, customer follow-ups, and sales pipelines.</div>
              <Link className="btn-style-seven w-100" href="/page-service-details"><span className="btn-text">Get Started</span></Link>
            </div>
          </div>
          <div className="feature-box-two col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-box">
              <div className="icon"><img src="/assets/images/icons/feature2-icon3.png" alt=""/></div>
              <div className="h6 title"><Link href="/page-service-details">Marketing Automation</Link></div>
              <div className="text">Automated email campaigns, social media scheduling, and customer segmentation.</div>
              <Link className="btn-style-seven w-100" href="/page-service-details"><span className="btn-text">Get Started</span></Link>
            </div>
          </div>
          <div className="feature-box-two col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-box">
              <div className="icon"><img src="/assets/images/icons/feature2-icon4.png" alt=""/></div>
              <div className="h6 title"><Link href="/page-service-details">HR & Financial Automation</Link></div>
              <div className="text">Simplifying invoicing, payroll, and expense tracking with accuracy.</div>
              <Link className="btn-style-seven w-100" href="/page-service-details"><span className="btn-text">Get Started</span></Link>
            </div>
          </div>
          <div className="feature-box-two col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-box">
              <div className="icon"><img src="/assets/images/icons/feature2-icon1.png" alt=""/></div>
              <div className="h6 title"><Link href="/page-service-details">Data & API Services</Link></div>
              <div className="text">Seamlessly mosty application databases, and platforms with powerful API integrations.</div>
              <Link className="btn-style-seven w-100" href="/page-service-details"><span className="btn-text">Get Started</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}