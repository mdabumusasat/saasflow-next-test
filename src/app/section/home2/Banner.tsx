"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';

export default function BannerSection() {
const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-two">
      <div className="container">
        <div className="banner-slide">
          <div className="inner-container">
            <div
              className="content-box mb-12">
              <div className="inner-box">
                <h1 className="h1 title">
                  Revolutionize your marketing with data-driven
                  <span className="text-blue-600">automation</span> tools
                </h1>
                <p className="text">
                  Marketing automation empowers businesses to streamline campaigns,
                  nurture leads, and deliver personalized experiences at scale.
                </p>
                <div className="subscribe-form2">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Email Address"
                      />
                      <button
                        type="submit"
                        className="btn-style-one ml-10">
                        <span className="btn-text">Try For Free</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          <div className="bottom-box">
            <div className="row g-2">
              <div className="col-xl-4">
                <div className="bottom-outer">
                  <div className="banner-feature-box">
                    <div className="inner-box">
                      <div className="title-box">
                        <div className="icon"><img src="/assets/images/icons/feature2-1.png" alt=""/></div>
                        <div className="h6 title">Boost productivity <br/>with AI-powered</div>
                      </div>
                      <div className="counter-box">
                        <div className="count-box"><span className="count-text" data-speed="3000" data-stop="2000">0</span>+</div>
                        <div className="text">Streamline workflows with business automation solutions</div>
                      </div>
                    </div>
                  </div>
                  <div className="image2"><img src="/assets/images/banner/banner2-2.jpg" alt=""/></div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="image-box" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                  <div className="image mb-0"><img src="/assets/images/banner/banner2-1.png" alt="Image"/></div>
                  <a onClick={() => setOpen(true)} className="play-now" data-fancybox="gallery" data-caption="">
                    <i className="icon fa-solid fa-play"></i>
                    <span className="ripple"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* SHAPES */}
      <div className="shape-1 absolute top-10 left-10">
        <img src="/assets/images/icons/shape-49.png" alt="" />
      </div>

      <div className="shape-2 absolute top-20 right-10">
        <img src="/assets/images/icons/shape-54.png" alt="" />
      </div>

      <div className="shape-3 absolute bottom-10 left-20">
        <img src="/assets/images/icons/shape-53.png" alt="" />
      </div>

      <div className="shape-4 absolute bottom-20 right-20">
        <img src="/assets/images/icons/shape-52.png" alt="" />
      </div>
      <div className="shape-5 bounce-x"><img src="/assets/images/icons/shape-51.png" alt="Image"/></div>
      <div className="shape-6 bounce-y"><img src="/assets/images/icons/shape-50.png" alt="Image"/></div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}