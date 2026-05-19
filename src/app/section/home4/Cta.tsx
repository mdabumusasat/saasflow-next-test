"use client";
import React from "react";

export default function CtaSectionLayout4() {

  return (
    <section className="cta-section-layout4 pt-0 pb-0">
      <div className="container">
        <div className="outer-box pb-0 pt-120">
          <div className="bg-image bg">
            <img
              src="/assets/images/background/cta4-bg1.jpg"
              alt="CTA background"
            />
          </div>
          <div className="sec-title text-center light mb-0">
            <span className="sub-title">
              <span>Get a Demo</span> Start Community
            </span>
            <div className="h2 title">
              Seamless setup, instant <br />
              heigh Productivity
            </div>
          </div>
          <div className="subscribe-form2">
            <form>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="email"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="btn-style-13 ml-10"
                  aria-label="Submit email">
                  <span className="btn-text">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
          <div className="cta-image">
            <img
              src="/assets/images/resource/cta4-1.jpg"
              alt="CTA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}