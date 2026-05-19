"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const clientLogos = [
  "/assets/images/resource/client1-1.png",
  "/assets/images/resource/client1-2.png",
  "/assets/images/resource/client1-3.png",
  "/assets/images/resource/client1-4.png",
  "/assets/images/resource/client1-5.png",
  "/assets/images/resource/client1-2.png",
   "/assets/images/resource/client1-4.png",
];

const ClientsSection = () => {
  return (
    <section className="clients-section-two">
      <div className="container">
        <div
          className="outer-box"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200">
          <div className="h6 client-title">
            Trusted by over 1.8 million companies worldwide
          </div>
          <div className="swiper-container">
            <Swiper
              className="clients-swiper-two"
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}>
              {clientLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="client-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img
                            src={logo}
                            alt={`Client Logo ${index + 1}`}
                          />
                          <img
                            src={logo}
                            alt={`Client Logo ${index + 1}`}
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
};

export default ClientsSection;