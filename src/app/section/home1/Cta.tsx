"use client";
import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="cta-section pt-0 pb-0">
      <div className="large-container">
        <div className="outer-box">
          <div className="bg-shape bg">
            <img
              src="/assets/images/background/cta-shape-bg1.png"
              alt="CTA Background"
            />
          </div>
          <div className="shape1 bounce-x">
            <img
              src="/assets/images/icons/shape-40.png"
              alt="Shape 1"
            />
          </div>
          <div className="shape2 bounce-y">
            <img
              src="/assets/images/icons/shape-41.png"
              alt="Shape 2"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="sec-title light">
                  <span className="sub-title">
                    <span>Join Us</span> Start Community
                  </span>
                  <h2 className="h2 title">
                    Connect, <span>collaborate,</span> and grow together
                  </h2>
                  <div className="text">
                    Community is designed to inspire growth, foster
                    connections,
                    <br />
                    and help you achieve your goals faster—together.
                  </div>
                  <Link
                    href="/page-contact"
                    className="btn-style-one theme-btn">
                    <span className="btn-text">
                      Join Our Community
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="image">
                  <img
                    src="/assets/images/resource/cta1.png"
                    alt="Join Community"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;