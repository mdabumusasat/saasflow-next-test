"use client";
import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';

export default function BannerSectionFour() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-four">
      <div className="container">
        <div className="banner-slide">
          <div className="inner-container">
            <div
              className="content-box"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="inner-box">
                <div className="sec-title mb-0">
                  <span className="sub-title">
                    <span>SaaS</span> The #1 AI Agent for customer service
                  </span>
                  <h1 className="h1">
                    Unlock efficiency with our <br />
                    cloud-powered SaaS
                  </h1>
                  <div className="text">
                    Our SaaS platform is designed to simplify complex
                    processes, improve <br />
                    productivity, and empower your business to scale
                    effortlessly
                  </div>
                  <div className="button-box">
                    <Link className="btn-style-one" href="/page-about">
                      <span className="btn-text">Get Started For Free</span>
                    </Link>
                    <Link className="btn-style-three" href="/page-about">
                      <span className="btn-text">View SaaS Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="image-box"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="image mb-0">
                <img
                  src="/assets/images/banner/banner4-1.jpg"
                  alt="Banner Image"
                />
              </div>
              <a
                onClick={() => setOpen(true)}
                className="play-now"
                target="_blank"
                rel="noopener noreferrer">
                <i className="icon fa-solid fa-play"></i>
                <span className="ripple"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image bg">
        <img
          src="/assets/images/banner/banner4-2.png"
          alt="Background"
        />
      </div>
      <div className="shape-1 bounce-y">
        <img
          src="/assets/images/icons/shape-29.png"
          alt="Shape"
        />
      </div>
      <div className="shape-2 bounce-x">
        <img
          src="/assets/images/icons/shape-30.png"
          alt="Shape"
        />
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}