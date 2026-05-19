"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function TestimonialSectionThree() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const testimonials = [
    {
      name: "Angelina Brown",
      role: "Designer",
      text: "An unforgettable experience from start to finish. The moment we arrived, the staff made us feel like VIPs, offering impeccable service and attention to every detail. The room was spacious, beautifully designed.",
      image: "/assets/images/resource/testi-h3-1.jpg",
    },
    {
      name: "David Smith",
      role: "Clients of Company",
      text: "An unforgettable experience from start to finish. The moment we arrived, the staff made us feel like VIPs, offering impeccable service and attention to every detail. The room was spacious, beautifully designed.",
      image: "/assets/images/resource/testi-h3-2.jpg",
    },
    {
      name: "Joan Cooper",
      role: "Designer",
      text: "An unforgettable experience from start to finish. The moment we arrived, the staff made us feel like VIPs, offering impeccable service and attention to every detail. The room was spacious, beautifully designed.",
      image: "/assets/images/resource/testi-h3-3.jpg",
    },
    {
      name: "Angelina Brown",
      role: "Designer",
      text: "An unforgettable experience from start to finish. The moment we arrived, the staff made us feel like VIPs, offering impeccable service and attention to every detail. The room was spacious, beautifully designed.",
      image: "/assets/images/resource/testi-h3-1.jpg",
    },
    {
      name: "David Smith",
      role: "Clients of Company",
      text: "An unforgettable experience from start to finish. The moment we arrived, the staff made us feel like VIPs, offering impeccable service and attention to every detail. The room was spacious, beautifully designed.",
      image: "/assets/images/resource/testi-h3-2.jpg",
    },
  ];

  return (
    <section className="testimonial-section-three">
      <div className="shape-1">
        <img src="/assets/images/icons/shape-24.png" alt="shape" />
      </div>
      <div className="auto-container">
        <div className="sec-title light text-center">
          <div className="h6 sub-title">Customer Feedback</div>
          <div className="h2 title char-animation">
            Hear what others say about partnering with us
          </div>
        </div>
        <div className="inner-container">
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            className="testimonial-h3-thumbs"
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
            }}>
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <img src={item.image} alt="thumb" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Thumbs]}
            navigation={{
              nextEl: ".testi-button-next",
              prevEl: ".testi-button-prev",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            className="testimonial-h3-slider-content">
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-block-two">
                  <div className="inner-block">
                    <div className="rating">
                      {[...Array(5)].map((_, idx) => (
                        <i key={idx} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className="text">{item.text}</div>
                    <div className="author-info">
                      <div className="h4 name">{item.name}</div>
                      <div className="designation">{item.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testi-button-next">
            <i className="fa-regular fa-arrow-right-long"></i>
          </div>
          <div className="testi-button-prev">
            <i className="fa-regular fa-arrow-left-long"></i>
          </div>
        </div>
        <div className="client-box col-lg-12 overflow-hidden">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop
          className="client-h3-slider"
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}>
          {[
            "client3-1.png",
            "client3-2.png",
            "client3-3.png",
            "client3-4.png",
            "client3-5.png",
            "client3-2.png",
            "client3-3.png",
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="client-block-two">
                <div className="inner-block">
                  <img
                    src={`/assets/images/icons/${img}`}
                    alt="client"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
}