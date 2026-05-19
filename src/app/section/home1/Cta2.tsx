"use client";
import React from "react";

const Cta2Section = () => {
  return (
  <section className="cta-section-layout1 pt-0 pb-0">
    <div className="shape1 bounce-x"><img src="/assets/images/icons/shape-45.png" alt=""/></div>
    <div className="large-container">
      <div className="outer-box">
        <div className="bg-image bg"><img src="/assets/images/background/cta4-bg1-2.jpg" alt=""/></div>
        <div className="sec-title text-center light mb-0">
          <span className="sub-title"><span>Get a Demo</span> Start Community</span>
          <div className="h2 title">Seamless setup, instant <br/>heigh Productivity</div>
        </div>
        <div className="subscribe-form2">
          <form method="post" action="#">
            <div className="form-group">
              <input type="email" id="email" name="email" className="email" placeholder="Email Address" />
              <button type="submit" className="btn-style-one ml-10" aria-label="Submit email">
                <span className="btn-text">Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Cta2Section;