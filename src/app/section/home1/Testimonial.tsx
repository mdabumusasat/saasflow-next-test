"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import "swiper/css";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Foliumin Walker",
    role: "Head of Operations at Summit Global",
    image: "/assets/images/resource/testi1-1.jpg",
    text:
      "Implementing this platform completely transformed the way operate. streamlining workflows to giving full visibility into every project, our team has saved.",
    quote: "Highly recommended",
  },
  {
    name: "Foliumin Walker",
    role: "Head of Operations at Summit Global",
    image: "/assets/images/resource/testi1-1.jpg",
    text:
      "Implementing this platform completely transformed the way operate. streamlining workflows to giving full visibility into every project, our team has saved.",
    quote: "Highly recommended",
  },
  {
    name: "Foliumin Walker",
    role: "Head of Operations at Summit Global",
    image: "/assets/images/resource/testi1-1.jpg",
    text:
      "Implementing this platform completely transformed the way operate. streamlining workflows to giving full visibility into every project, our team has saved.",
    quote: "Highly recommended",
  },
  {
    name: "Foliumin Walker",
    role: "Head of Operations at Summit Global",
    image: "/assets/images/resource/testi1-1.jpg",
    text:
      "Implementing this platform completely transformed the way operate. streamlining workflows to giving full visibility into every project, our team has saved.",
    quote: "Highly recommended",
  },
  {
    name: "Foliumin Walker",
    role: "Head of Operations at Summit Global",
    image: "/assets/images/resource/testi1-1.jpg",
    text:
      "Implementing this platform completely transformed the way operate. streamlining workflows to giving full visibility into every project, our team has saved.",
    quote: "Highly recommended",
  },
  {
    name: "Foliumin Walker",
    role: "Head of Operations at Summit Global",
    image: "/assets/images/resource/testi1-1.jpg",
    text:
      "Implementing this platform completely transformed the way operate. streamlining workflows to giving full visibility into every project, our team has saved.",
    quote: "Highly recommended",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="testimonial-block">
      <div className="inner-block">
        <div className="author-box">
          <div className="author-image">
            <img
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="author-info">
            <div className="h6 name">{item.name},</div>
            <div className="designation">{item.role}</div>
          </div>
        </div>
        <div className="text">{item.text}</div>
        <div className="quote-box">
          <div className="quote-icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div className="quote-text">“{item.quote}”</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const topSwiper = useRef<any>(null);
  const bottomSwiper = useRef<any>(null);

  useEffect(() => {
    if (topSwiper.current && bottomSwiper.current) {
      topSwiper.current.controller.control = bottomSwiper.current;
      bottomSwiper.current.controller.control = topSwiper.current;
    }
  }, []);

  return (
    <section className="testimonial-section">
      <div className="large-container">
        <div className="outer-box pt-120 pb-100">
          <div className="bg-image bg">
            <img
              src="/assets/images/background/testimonial1-1.jpg"
              alt="bg"
            />
          </div>
          <div className="sec-title text-center light">
            <span className="sub-title">
              <span>Testimonials</span> Clients Feedback
            </span>
            <h2 className="h2 title">
              Trusted by thousands of <br /> businesses
            </h2>
          </div>
          <div className="swiper-outer">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              loop
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              className="testimonial-swiper-h1"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="swiper-outer">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              loop
              speed={5000}
              autoplay={{
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              className="testimonial-swiper-h2"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}