"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const clients = [
  { id: 1, logo1: "/assets/images/resource/client2-7.png", logo2: "/assets/images/resource/client2-1.png" },
  { id: 2, logo1: "/assets/images/resource/client2-8.png", logo2: "/assets/images/resource/client2-2.png" },
  { id: 3, logo1: "/assets/images/resource/client2-9.png", logo2: "/assets/images/resource/client2-3.png" },
  { id: 4, logo1: "/assets/images/resource/client2-10.png", logo2: "/assets/images/resource/client2-4.png" },
  { id: 5, logo1: "/assets/images/resource/client2-11.png", logo2: "/assets/images/resource/client2-5.png" },
  { id: 6, logo1: "/assets/images/resource/client2-12.png", logo2: "/assets/images/resource/client2-6.png" },
  { id: 7, logo1: "/assets/images/resource/client2-7.png", logo2: "/assets/images/resource/client2-1.png" },
];

export default function ClientsSectionLayoutFour() {
  return (
    <section className="clients-section-layout4 pt-0">
      <div className="container">
        <div
          className="outer-box"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200">
          <h6 className="client-title">
            Trusted by over 1.8 million companies worldwide
          </h6>
          <div className="swiper-container">
            <Swiper
              className="clients-swiper-two"
              spaceBetween={30}
              slidesPerView={2}
              loop
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}>
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="client-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img
                            src={client.logo1}
                            alt="Client Logo"
                          />
                          <img
                            src={client.logo2}
                            alt="Client Logo"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}