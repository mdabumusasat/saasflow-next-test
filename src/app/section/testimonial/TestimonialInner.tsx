"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quoteTitle: "Highly recommended",
    text:
      '"The analytics and reporting feature help us make data-driven decisions that boosted our ROI."',
    image: "/assets/images/resource/testi2-1.jpg",
    name: "Matthew Johnson",
    designation: "CEO at Apex",
  },
  {
    id: 2,
    quoteTitle: "Highly recommended",
    text:
      '"The analytics and reporting feature help us make data-driven decisions that boosted our ROI."',
    image: "/assets/images/resource/testi2-2.jpg",
    name: "James Walker",
    designation: "CEO at Horizon Tech",
  },
  {
    id: 3,
    quoteTitle: "Highly recommended",
    text:
      '"The analytics and reporting feature help us make data-driven decisions that boosted our ROI."',
    image: "/assets/images/resource/testi2-3.jpg",
    name: "Emma Rodner",
    designation: "CEO at Zox Tech",
  },
  {
    id: 4,
    quoteTitle: "Highly recommended",
    text:
      '"The analytics and reporting feature help us make data-driven decisions that boosted our ROI."',
    image: "/assets/images/resource/testi2-3.jpg",
    name: "Matthew Johnson",
    designation: "CEO at Apex",
  },
  {
    id: 5,
    quoteTitle: "Highly recommended",
    text:
      '"The analytics and reporting feature help us make data-driven decisions that boosted our ROI."',
    image: "/assets/images/resource/testi2-3.jpg",
    name: "Emma Rodner",
    designation: "CEO at Zox Tech",
  },
];

const TestimonialSectionLayout2: React.FC = (): JSX.Element => {
  return (
    <section className="testimonial-section-layout2 pb-0">
      <div className="shape-1 bounce-y">
        <img
          src="/assets/images/icons/shape-58.png"
          alt="Shape 58"
        />
      </div>
      <div className="shape-2 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape-59.png"
          alt="Shape 59"
        />
      </div>
      <div className="container">
        <Swiper
          modules={[
            Autoplay,
            EffectCoverflow,
          ]}
          className="testimonial-layout2 pb-lg--0"
          effect="coverflow"
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 12,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
            scale: 0.9,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}>
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div className="testimonial-block-two">
                  <div
                    className={`inner-block ${
                      isActive ? "active" : ""
                    }`}>
                    <div className="quote-box">
                      <div className="quote-icon">
                        <i className="fa-solid fa-quote-left"></i>
                      </div>
                      <div className="quote-text">
                        “{item.quoteTitle}”
                      </div>
                    </div>
                    <div className="text">{item.text}</div>
                    <div className="author-box">
                      <div className="author-image">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="author-info">
                        <div className="h6 name">
                          {item.name},
                        </div>
                        <div className="designation">
                          {item.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSectionLayout2;