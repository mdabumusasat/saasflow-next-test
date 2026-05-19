"use client";
import React from "react";

const FunfactSectionLayout3 = () => {
  return (
    <section className="funfact-section-layout3 pt-110">
      <div className="shape-1">
        <img
          src="/assets/images/icons/shape-70.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2">
        <img
          src="/assets/images/icons/shape-76.png"
          alt="Shape"
        />
      </div>
      <div className="shape-3">
        <img
          src="/assets/images/icons/shape-77.png"
          alt="Shape"
        />
      </div>
      <div className="shape-4">
        <img
          src="/assets/images/icons/shape-73.png"
          alt="Shape"
        />
      </div>
      <div className="shape-5">
        <img
          src="/assets/images/icons/shape-74.png"
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="sec-title light text-center">
          <div className="h2 title">
            Unlock 180+ Integrations for <br />
            Effortless Workflow
          </div>
          <div className="text">
            Our platform seamlessly connects with over 180 apps and tools,
            <br />
            giving you the flexibility to streamline your workflow
          </div>
        </div>
        <div className="funfact-outer">
          <div className="funfact-image1">
            <img
              src="/assets/images/resource/funfact3-1.png"
              alt="Integrations"
            />
          </div>
          <div className="funfact-image2">
            <img
              src="/assets/images/resource/funfact3-2.png"
              alt="Workflow"
            />
          </div>
          <div className="counter-block-layout3">
            <div className="inner-block">
              <div className="count-box">
                +<br />
                <span
                  className="count-text"
                  data-speed="3000"
                  data-stop="138"
                >
                  138
                </span>
              </div>
              <div className="h4 title">Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunfactSectionLayout3;