"use client";
import Link from "next/link";
import React from "react";


const Blog2SectionLayout5 = () => {
  return (
  <section className="blog-section-layout5 pb-0">
    <div className="bg-image bg"><img src="/assets/images/background/footer5-bg2.jpg" alt=""/></div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="sec-title light mb-0">
            <span className="sub-title"><span>SaaS</span> News & Blogs</span>
            <div className="h2 title">One Platform. Every Customer.</div>
            <div className="text">Ready to Take Your Business to the Next Level? Start Your CRM Journey Now,It’s Time to Work Smarter, Not Harder</div>
            <Link href="/page-testimonial" className="theme-btn-four mt-40">
              Get Started With Sasico <i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="image-column col-xl-6 offset-xl-1 col-lg-7">
          <div className="inner-column">
            <div className="row g-2">
              <div className="col-12">
                <div className="image"><img src="/assets/images/resource/blog5-4.jpg" alt=""/></div>
              </div>
              <div className="col-sm-6">
                <div className="image"><img src="/assets/images/resource/blog5-5.jpg" alt=""/></div>
              </div>
              <div className="col-sm-6">
                <div className="image"><img src="/assets/images/resource/blog5-6.jpg" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Blog2SectionLayout5;