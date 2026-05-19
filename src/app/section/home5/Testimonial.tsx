"use client";
import React from "react";
import Link from "next/link";

const testimonials = [
  {
    title: "Reliable, intuitive, scalable",
    text: "The automation features saved us hours every week, and the customer insights helped us close deals faster. It's a growth engine",
    name: "Daniel Rivera",
    role: "CO-Founder",
    image: "/assets/images/resource/testi5-1.jpg",
  },
  {
    title: "Our Sales Funnel Runs",
    text: "Chatbot engages visitors, qualifies leads, hands them off to our team automatically boosted our conversions.",
    name: "William C. Irvin",
    role: "CO-Founder",
    image: "/assets/images/resource/testi5-2.jpg",
  },
  {
    title: "Game-Changer Support!",
    text: "Since integrating this CRM response time has improved by 70% customer satisfaction is at an all-time high.",
    name: "Sean C. White",
    role: "Social Manager",
    image: "/assets/images/resource/testi5-3.jpg",
  },
  {
    title: "Perfect for Startup",
    text: "As a small team, this chatbot has been a lifesaver handles routine inquiries so we can grow the business!",
    name: "Philip K. Shields",
    role: "App Developer",
    image: "/assets/images/resource/testi5-4.jpg",
  },
  {
    title: "Smart, Fast & Reliable!",
    text: "We were able to integrate chatbot with CRM helpdesk in minutes. It’s reliable, fast, and well supported.",
    name: "Vincent L. Smith",
    role: "CO-Founder",
    image: "/assets/images/resource/testi5-5.jpg",
  },
  {
    title: "Smooth Integration",
    text: "We cut down manual tasks by 60% and improved team productivity across the board. Automation is a game changer!",
    name: "Jerry T. Rochon",
    role: "UI Designer",
    image: "/assets/images/resource/testi5-6.jpg",
  },
];

const TestimonialSectionLayout5 = () => {
  return (
    <section className="testimonial-section-layout5 pb-100">
      <div className="shape-1 bounce-x">
        <img src="/assets/images/icons/shape-97.png" alt="shape" />
      </div>
      <div className="shape-2 tm-gsap-img-parallax">
        <img src="/assets/images/icons/shape-98.png" alt="shape" />
      </div>
      <div className="shape-3 tm-gsap-img-parallax">
        <img src="/assets/images/icons/shape-99.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="content-column col-xl-4">
            <div className="sec-title">
              <span className="sub-title">
                <span>SaaS</span> Hear from Customers
              </span>
              <div className="h2 title">
                Hear from Our Worldwide Happy Customers
              </div>
              <div className="text">
                Our CRM platform is built for performance — but don’t just take
                our word for it.
              </div>
              <Link href="#" className="theme-btn-four mt-40">
                See all Feedback <i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="testimonial-column col-xl-7 offset-xl-1">
            <div className="row">
              {testimonials.map((item, i) => (
                <div key={i} className="testimonial-block-five col-md-6">
                  <div className="inner-block">
                    <div className="h6 quote-text">“{item.title}”</div>
                    <div className="rating-star">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <i key={idx} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className="text">“{item.text}”</div>
                    <div className="author-box">
                      <div className="author-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="author-info">
                        <div className="h6 name">{item.name},</div>
                        <div className="designation">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionLayout5;