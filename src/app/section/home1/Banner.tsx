"use client";

import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';

const BannerSectionOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
  <section className="banner-section-one">
    <div className="container">
      <div className="banner-slide">
        <div className="inner-container">
          <div className="content-box">
            <div className="inner-box">              
              <div className="sec-title mb-0">
                <span className="sub-title"><span>SaaS</span> The #1 AI Agent for customer service</span>
                <div className="h1">Unlock <span>efficiency</span> with our cloud-powered SaaS</div>
                <div className="text">Our SaaS platform is designed to simplify complex processes, improve productivity, and empower your business to scale effortlessly</div>
                <div className="button-box">
                  <Link className="btn-style-one" href="/page-contact"><span className="btn-text">Get Started For Free</span></Link>
                  <Link className="btn-style-three" href="/page-about"><span className="btn-text">View SaaS Demo</span></Link>
                </div>
              </div>
              <div className="bottom-box">
                <div className="logo"><img src="/assets/images/icons/reviews-logo.png" alt=""/></div>
                <div className="reviews-box">
                  <div className="review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    150+ Reviews <br/>by over 2500+ global satisfied clients
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-box">
            <div className="image mb-0"><img src="/assets/images/banner/banner1-1.png" alt="Image"/></div>
            <a onClick={() => setOpen(true)} className="play-now" data-fancybox="gallery" data-caption="">
              <i className="icon fa-solid fa-play"></i>
              <span className="ripple"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-1 bounce-y"><img src="/assets/images/icons/shape13.png" alt="Image"/></div>
    <div className="shape-2 tm-gsap-img-parallax"><img src="/assets/images/icons/shape14.png" alt="Image"/></div>
    <div className="shape-3 bounce-x"><img src="/assets/images/icons/shape15.png" alt="Image"/></div>
  </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default BannerSectionOne;