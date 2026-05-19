"use client";
import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';
 


const featureData = [
  {
    id: 1,
    style: "style-one",
    title: "AI-power Help Desk",
    icon: "/assets/images/icons/feature3-icon2.png",
    features: [
      "AI Chatbots for Instant Support",
      "Intelligent Ticket Routing",
      "Multilingual AI Assistance",
    ],
  },
  {
    id: 2,
    style: "style-two",
    title: "AI-power Help Desk",
    icon: "/assets/images/icons/feature3-icon2.png",
    features: [
      "AI Chatbots for Instant Support",
      "Intelligent Ticket Routing",
      "Multilingual AI Assistance",
    ],
  },
  {
    id: 3,
    style: "style-three",
    title: "AI-power Help Desk",
    icon: "/assets/images/icons/feature3-icon2.png",
    features: [
      "AI Chatbots for Instant Support",
      "Intelligent Ticket Routing",
      "Multilingual AI Assistance",
    ],
  },
];

const BannerSectionThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-three">
      <div className="bg-image2 bg">
        <img
          src="/assets/images/banner/banner3-2.png"
          alt="Background Image"
        />
      </div>
      <div className="outer-box">
        <div className="row g-0">
          <div className="col-xxl-4 col-xl-5">
            <div
              className="content-box"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="inner-box">
                <div className="sec-title mb-0">
                  <span className="sub-title">
                    <span>Help Desk</span> 99% Clients Satisfactions
                  </span>

                  <div className="h1">
                    Helping you help your{" "}
                    <span className="style-one">customers</span> by AI-power
                    solutions
                  </div>
                  <div className="text">
                    Help Desk isn’t just about solving problems—it’s about
                    creating a smooth, reliable, &amp; friendly experience
                  </div>
                  <div className="button-box">
                    <Link className="btn-style-one" href="/page-about">
                      <span className="btn-text">Get Started For Free</span>
                    </Link>
                    <a
                      onClick={() => setOpen(true)}
                      className="play-now banner-play-btn"
                      data-fancybox="gallery"
                      data-caption=""
                      target="_blank"
                      rel="noopener noreferrer">
                      <span>How it Works</span>
                      <i className="icon fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 offset-xxl-1 col-xl-7">
            <div className="banner-feature-box">
              <div className="bg-image">
                <img
                  src="/assets/images/banner/banner3-1.png"
                  alt="Banner Image"
                />
              </div>
              {featureData.map((item) => (
                <div
                  key={item.id}
                  className={`feature-block-layout3 ${item.style}`}>
                  <div className="inner-block">
                    <div className="header">
                      <div className="title-box">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.title}
                          />
                        </div>
                        <div className="h6 title">{item.title}</div>
                      </div>
                      <div className="dots-icon">
                        <i className="fa-solid fa-ellipsis"></i>
                      </div>
                    </div>
                    <ul className="features-list">
                      {item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
};

export default BannerSectionThree;