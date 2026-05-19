"use client";
import React from "react";
import Link from "next/link";

interface BlogType {
  id: number;
  title: string;
  image: string;
  author: string;
  category: string;
  date: string;
  month: string;
}

export default function BlogSectionThree() {
  const blogs: BlogType[] = [
    {
      id: 1,
      title: "Converting Clicks into Clients: Strategies from Agencies",
      image: "/assets/images/resource/blog3-1.jpg",
      author: "kamrul",
      category: "Investment",
      date: "07",
      month: "Dec",
    },
    {
      id: 2,
      title: "Driving Tangible Results: How Agencies Convert",
      image: "/assets/images/resource/blog3-2.jpg",
      author: "kamrul",
      category: "Luxury",
      date: "07",
      month: "Dec",
    },
    {
      id: 3,
      title: "Traffic to Customers: How Leading Agencies Succeed",
      image: "/assets/images/resource/blog3-1.jpg",
      author: "kamrul",
      category: "Market Trends",
      date: "07",
      month: "Dec",
    },
  ];

  return (
    <section className="blog-section-three">
      <div className="shape-1 bounce-x">
        <img src="/assets/images/icons/shape-27.png" alt="shape" />
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="h6 sub-title">News & Articles</div>
          <div className="h2 title">
            Experience new inspirations and movements
          </div>
        </div>
        <div className="row gx-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-block-two col-lg-4 col-md-6">
              <div className="inner-block">
                <div className="image-box">
                  <div className="image">
                    <img src={blog.image} alt={blog.title} />
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="date-box">
                    <div className="date">{blog.date}</div>
                    <div className="month">{blog.month}</div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <ul className="meta-box">
                      <li>
                        <i className="fa-regular fa-circle-user"></i>
                        <span>By {blog.author}</span>
                      </li>
                      <li>
                        <i className="fa-regular fa-folder"></i>
                        <span>{blog.category}</span>
                      </li>
                    </ul>
                    <div className="h4 title">
                      <Link href="/news-details">
                        {blog.title}
                      </Link>
                    </div>
                    <div className="text">
                      Your business absolutely needs a updated daily This service is best
                    </div>
                    <Link href="/news-details" className="read-more-btn">
                      <i className="fa-solid fa-circle-right"></i>
                      <span>READ MORE</span>
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
}