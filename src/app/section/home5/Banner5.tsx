"use client";
import React from "react";
import Link from "next/link";

export default function BannerSectionFive() {
  return (
    <>
  <section className="banner-section-five">
    <div className="shape-1 bounce-y"><img src="/assets/images/icons/shape-85.png" alt="Image"/></div>
    <div className="container">
      <div className="banner-slide">
        <div className="inner-container">
          <div className="content-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <div className="inner-box">
              <div className="row">
                <div className="col-xl-6">
                  <div className="h1 title">All-in-One CRM to Boost Your Sales & Support</div>
                </div>
                <div className="col-xl-5 offset-xl-1">
                  <div className="text">We specialize in delivering full-cycle software solutions and AI-driven marketing tools designed to accelerate digital transformation.</div>
                  <Link href="/page-service-details" className="theme-btn-four">Get 14th days Free Trial <i className="fa-light fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="image-box" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="image mb-0"><img src="/assets/images/banner/banner5-1.jpg" alt="Image"/></div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-image bg"><img src="/assets/images/banner/banner5-2.png" alt="Image"/></div>
  </section>
    </>
  );
}