"use client";
import React from "react";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    image: "/assets/images/resource/blog1-1.jpg",
    title: "The ultimate guide to choosing the right SaaS solution",
  },
  {
    id: 2,
    image: "/assets/images/resource/blog1-2.jpg",
    title: "Intelligent automation powers modern SaaS platforms",
  },
  {
    id: 3,
    image: "/assets/images/resource/blog1-3.jpg",
    title: "Why businesses trust SaaS for security and scalability",
  },
  {
    id: 4,
    image: "/assets/images/resource/blog1-3.jpg",
    title: "Why businesses trust SaaS for security and scalability",
  },
  {
    id: 5,
    image: "/assets/images/resource/blog1-1.jpg",
    title: "The ultimate guide to choosing the right SaaS solution",
  },
  {
    id: 6,
    image: "/assets/images/resource/blog1-2.jpg",
    title: "Intelligent automation powers modern SaaS platforms",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section pt-100">
      <div className="container">
        <div className="row">

          {blogData.map((item) => (
            <div className="col-xl-4 col-md-6" key={item.id}>
              <div className="blog-block">
                <div className="inner-block">

                  {/* Image */}
                  <div className="image-box">
                    <div className="image">
                      <Link href="/news-details">
                        <img src={item.image} alt="blog" />
                        <img src={item.image} alt="blog hover" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="content">

                    <div className="post-meta">
                      <div className="meta">
                        <img src="/assets/images/icons/user1.png" alt="" /> by Michel
                      </div>

                      <div className="meta">
                        <img src="/assets/images/icons/calendar1.png" alt="" /> 12 May 2026
                      </div>
                    </div>

                    <h5 className="title">
                      <Link href="/news-details">{item.title}</Link>
                    </h5>

                    <div className="text">
                      We share valuable content to help you make smarter decisions and get the most.
                    </div>

                    <Link className="btn-style-six" href="/news-details">
                      Read more
                    </Link>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BlogSection;