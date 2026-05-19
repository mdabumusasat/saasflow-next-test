"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const clients = [
  { id: 1, image1: "/assets/images/resource/client2-7.png", image2: "/assets/images/resource/client2-1.png" },
  { id: 2, image1: "/assets/images/resource/client2-8.png", image2: "/assets/images/resource/client2-2.png" },
  { id: 3, image1: "/assets/images/resource/client2-9.png", image2: "/assets/images/resource/client2-3.png" },
  { id: 4, image1: "/assets/images/resource/client2-10.png", image2: "/assets/images/resource/client2-4.png" },
  { id: 5, image1: "/assets/images/resource/client2-11.png", image2: "/assets/images/resource/client2-5.png" },
  { id: 6, image1: "/assets/images/resource/client2-12.png", image2: "/assets/images/resource/client2-6.png" },
  { id: 7, image1: "/assets/images/resource/client2-7.png", image2: "/assets/images/resource/client2-1.png" },
];

export default function ClientsSection() {
  return (
    <section className="clients-section-layout5">
      <div className="container">
        <div className="h6 client-title">
          Trusted by over 1.7 million companies worldwide
        </div>
        <Swiper
          className="clients-swiper-two"
          spaceBetween={20}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
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
                        src={client.image1}
                        alt="Client logo"
                      />
                      <img
                        src={client.image2}
                        alt="Client logo"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}