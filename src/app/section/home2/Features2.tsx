"use client";
import React from "react";

export default function Features2Section() {
  return (
    <section className="features-section-two">
      <div className="shape-1 bounce-y"><img src="/assets/images/icons/shape-26.png" alt=""/></div>
      <div className="shape-2 bounce-x"><img src="/assets/images/icons/shape-27.png" alt=""/></div>
      <div className="shape-3 bounce-y"><img src="/assets/images/icons/shape-28.png" alt=""/></div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-5 col-lg-7">
            <div className="inner-column">
              <div className="sec-title light">
                <div className="h2 title">Secure access <br/>with effortless data protection</div>
                <div className="text">Protecting your data doesn’t have be complicated <br/>secure gateway system ensures smooth</div>
              </div>
              <div className="row">
                <div className="feature-box-three col-sm-6">
                  <div className="inner-box">
                    <div className="icon"><img src="/assets/images/icons/feature-icon2-1.png" alt=""/></div>
                    <div className="h6 title">Advanced Encryption</div>
                    <div className="text">Platform advanced to encryption protocols ensure protect.</div>
                  </div>
                </div>
                <div className="feature-box-three col-sm-6">
                  <div className="inner-box style-two">
                    <div className="icon"><img src="/assets/images/icons/feature-icon2-2.png" alt=""/></div>
                    <div className="h6 title">Role-Based Control</div>
                    <div className="text">With role-based access control, can define permissions.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-xl-6 offset-xl-1 col-lg-5">
            <div className="inner-column">
              <div className="image-1"><img src="/assets/images/resource/feature2-1.jpg" alt=""/></div>
              <div className="image-2"><img src="/assets/images/resource/feature2-2.jpg" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}