"use client";
import React from "react";
import Link from "next/link";

export default function TeamSectionTwo() {
  return (
    <>
      <section className="team-section-two pt-0">
        <div className="auto-container">
          <div className="sec-title-box">
            <div className="sec-title">
              <div className="h6 sub-title">Our Leaders</div>
              <div className="h2 title">
                Get to Know our leader ship team
              </div>
            </div>
            <Link className="theme-btn btn-style-two" href="/page-team">
              <span className="icon">
                <i className="fa-solid fa-arrow-right"></i>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <span className="btn-title">Read More</span>
            </Link>
          </div>
          <div className="row gx-4">
            <div className="team-block col-lg-4 col-md-6">
              <div className="inner-block">
                <div className="images-box">
                  <div className="image">
                    <img
                      src="/assets/images/resource/team1-2.png"
                      alt="team"
                    />
                  </div>
                  <svg
                    className="shape"
                    width="304"
                    height="543"
                    viewBox="0 0 304 543"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                  </svg>
                  <ul className="social-link">
                    <li>
                      <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="author-info">
                  <div className="inner-box">
                    <div className="h4 name">
                      <Link href="/page-team-details">Ralph Edwards</Link>
                    </div>
                    <div className="designation">Chief Executive</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block col-lg-4 col-md-6">
              <div className="inner-block">
                <div className="images-box">
                  <div className="image">
                    <img
                      src="/assets/images/resource/team1-3.png"
                      alt="team"
                    />
                  </div>
                  <svg
                    className="shape"
                    width="304"
                    height="543"
                    viewBox="0 0 304 543"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                  </svg>
                  <ul className="social-link">
                    <li>
                      <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="author-info">
                  <div className="inner-box">
                    <div className="h4 name">
                      <Link href="/page-team-details">Wade Worren</Link>
                    </div>
                    <div className="designation">Principal & CEO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-block col-lg-4 col-md-6">
              <div className="inner-block">
                <div className="images-box">
                  <div className="image">
                    <img
                      src="/assets/images/resource/team1-4.png"
                      alt="team"
                    />
                  </div>
                  <svg
                    className="shape"
                    width="304"
                    height="543"
                    viewBox="0 0 304 543"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                  </svg>

                  <ul className="social-link">
                    <li>
                      <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="author-info">
                  <div className="inner-box">
                    <div className="h4 name">
                      <Link href="/page-team-details">Albert Flores</Link>
                    </div>
                    <div className="designation">Ceo-Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}