"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const scrollToTop = (): void => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    <div className="large-container">
      <footer className="main-footer footer-style-three">
        <div className="bg-image bg"><img src="/assets/images/background/footer3-bg1.jpg" alt=""/></div>
        <div className="container">
          <div className="sec-title text-center light">
            <div className="h2 title">Turn Exceptional Support <br/>into Your <span className="style-two"> Advantage </span></div>
            <div className="text">In today’s competitive market, customer experience is more <br/>than just support—it’s the foundation of brand loyalty</div>
            <div className="button-box">
              <Link className="btn-style-one" href="#"><span className="btn-text">Get Started 14th-days Trial</span></Link>
            </div>
          </div>
          <div className="widgets-section-two">
            <div className="footer-middle">
              <div className="row"> 
                <div className="col-lg-3">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                      <Link href="#"><img src="/assets/images/logo4.png" alt=""/></Link>
                    </div>
                  </div>
                </div>
                <div className="footer-column col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                    <div className="h6 widget-title">Product</div>
                    <div className="widget-content">
                      <ul className="user-links">
                        <li><Link href="#">Documentation</Link></li>
                        <li><Link href="#">Changelog</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                        <li><Link href="#">Parsers</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-column col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-widget links-widget ms-0 ms-xxl-4 wow fadeInLeft" data-wow-delay="200ms">
                    <div className="h6 widget-title">Resources</div>
                    <div className="widget-content">
                      <ul className="user-links">
                        <li><Link href="#">Guide</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Customers</Link></li>
                        <li><Link href="#">Help Center</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-column col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-widget ms-0 ms-xxl-5 links-widget wow fadeInLeft" data-wow-delay="200ms">
                    <div className="h6 widget-title">Company</div>
                    <div className="widget-content">
                      <ul className="user-links">
                        <li><Link href="#">Press kit</Link></li>
                        <li><Link href="#">Climate</Link></li>
                        <li><Link href="#">Jobs</Link></li>
                        <li><Link href="#">Contact us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-column col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-widget ms-0 ms-xxl-5 links-widget wow fadeInLeft" data-wow-delay="200ms">
                    <div className="h6 widget-title">Community</div>
                    <div className="widget-content">
                      <ul className="user-links">
                        <li><Link href="#">Discord</Link></li>
                        <li><Link href="#">Twitter</Link></li>
                        <li><Link href="#">GitHub</Link></li>
                        <li><Link href="#">Dribbble</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h2 gradient-title1">SaasFlow</div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner-container">
              <ul className="footer-nav">
                <li><Link href="#">Privacy policy</Link></li>
                <li><Link href="#">Terms of use</Link></li>
                <li><Link href="#">Security</Link></li>
              </ul>
              <button
                id="back_to_top"
                type="button"
                className="back-to-top-btn"
                onClick={scrollToTop}
                aria-label="Back to top"
              >
              <i className="fa-solid fa-arrow-up"></i>
              </button>
              <div className="copyright-text">©2025 <Link href="#">Saasflow</Link> · All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}