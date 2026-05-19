"use client";
import React from "react";
import Link from "next/link";


export default function BlogSection() {
  return (
  <section className="blog-section pb-100">
    <div className="container">      
      <div className="sec-title text-center">
        <span className="sub-title"><span>Blogs</span> News & blogs</span>
        <div className="h2 title">Reads our latest insight</div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className="blog-block">
            <div className="inner-block">
              <div className="image-box">
                <div className="image">
                  <Link href="/news-details">
                    <img src="/assets/images/resource/blog1-1.jpg" alt="blog"/>
                    <img src="/assets/images/resource/blog1-1.jpg" alt="blog"/>
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="post-meta">
                  <div className="meta"><img src="/assets/images/icons/user1.png" alt=""/> by Michel</div>
                  <div className="meta"><img src="/assets/images/icons/calendar1.png" alt=""/> 10 May 2026</div>
                </div>
                <div className="h5 title"><Link href="/news-details">The ultimate guide to choosing the right SaaS solution</Link></div>
                <div className="text">We share valuable content to help you make smarter decisions and get the most.</div>
                <Link className="btn-style-six" href="news-details">Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="blog-block">
            <div className="inner-block">
              <div className="image-box">
                <div className="image">
                  <Link href="/news-details">
                    <img src="/assets/images/resource/blog1-2.jpg" alt="blog"/>
                    <img src="/assets/images/resource/blog1-2.jpg" alt="blog"/>
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="post-meta">
                  <div className="meta"><img src="/assets/images/icons/user1.png" alt=""/> by Michel</div>
                  <div className="meta"><img src="/assets/images/icons/calendar1.png" alt=""/> 10 May 2026</div>
                </div>
                <div className="h5 title"><Link href="/news-details">Intelligent automation powers modern SaaS platforms</Link></div>
                <div className="text">We share valuable content to help you make smarter decisions and get the most.</div>
                <Link className="btn-style-six" href="news-details">Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="blog-block">
            <div className="inner-block">
              <div className="image-box">
                <div className="image">
                  <Link href="/news-details">
                    <img src="/assets/images/resource/blog1-3.jpg" alt="blog"/>
                    <img src="/assets/images/resource/blog1-3.jpg" alt="blog"/>
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="post-meta">
                  <div className="meta"><img src="/assets/images/icons/user1.png" alt=""/> by Michel</div>
                  <div className="meta"><img src="/assets/images/icons/calendar1.png" alt=""/> 10 May 2026</div>
                </div>
                <div className="h5 title"><Link href="/news-details">Why businesses trust SaaS for security and scalability</Link></div>
                <div className="text">We share valuable content to help you make smarter decisions and get the most.</div>
                <Link className="btn-style-six" href="news-details">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}