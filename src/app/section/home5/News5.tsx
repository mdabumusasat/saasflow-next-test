"use client";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    category: "CRM",
    author: "Admin",
    date: "May 12, 2026",
    title: "Integrating Your CRM Marketing Tools A Complete Guide",
    image: "/assets/images/resource/blog5-1.jpg",
    link: "/news-details",
  },
  {
    category: "CRM",
    author: "Admin",
    date: "May 12, 2026",
    title: "Real-Life CRM Success Stories from Small Businesses",
    image: "/assets/images/resource/blog5-2.jpg",
    link: "/news-details",
  },
  {
    category: "CRM",
    author: "Admin",
    date: "May 12, 2026",
    title: "How to Choose the Right CRM for Your Company",
    image: "/assets/images/resource/blog5-3.jpg",
    link: "/news-details",
  },
];

const BlogSectionLayout5 = () => {
  return (
    <section className="blog-section2-layout5 pt-0 pb-100">
      <div className="shape-1 bounce-y">
        <img src="/assets/images/icons/shape19.png" alt="shape" />
      </div>
      <div className="shape-2 bounce-x">
        <img src="/assets/images/icons/shape20.png" alt="shape" />
      </div>
      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-xl-5">
              <span className="sub-title">
                <span>SaaS</span> News & Blogs
              </span>
              <div className="h2 title">
                News, Guides & CRM Success Stories
              </div>
            </div>
            <div className="col-xl-5 offset-xl-2">
              <div className="text">
                Our CRM platform is packed with powerful, user-friendly <br />
                features designed to simplify your daily operations and <br />
                supercharge productivity
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="blog-block-five">
                <div className="inner-block">
                  <div className="image-box">
                    <div className="image">
                      <Link href={blog.link}>
                        <img src={blog.image} alt="blog" />
                        <img src={blog.image} alt="blog hover" />
                      </Link>
                    </div>
                  </div>
                  <div className="content">
                    <div className="post-meta">
                      <div className="meta">{blog.category}</div>
                      <div className="meta">
                        By <span>{blog.author}</span>
                      </div>
                      <div className="meta">{blog.date}</div>
                    </div>
                    <div className="h4 title">
                      <Link href={blog.link}>{blog.title}</Link>
                    </div>

                    <Link href={blog.link} className="theme-btn-nine">
                      Read More <i className="fa-light fa-arrow-right"></i>
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

export default BlogSectionLayout5;