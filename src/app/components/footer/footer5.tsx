"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
  <footer className="main-footer footer-style-five">
    <div className="bg-image bg"><img src="/assets/images/background/footer5-bg1.jpg" alt=""/></div>
    <div className="shape-2 animation__rotateY"><img src="/assets/images/icons/shape21.png" alt="Image"/></div>
    <div className="shape-3"><img src="/assets/images/icons/shape22.png" alt="Image"/></div>
    <div className="shape-4"><img src="/assets/images/icons/shape23.png" alt="Image"/></div>
    <div className="container">
      <div className="widgets-section-two">
        <div className="shape-1"><img src="/assets/images/icons/shape24.png" alt="Image"/></div>
        <div className="footer-middle">
          <div className="row"> 
            <div className="col-xl-5">
              <div className="footer-widget about-widget">
                <div className="h5 title">Join Our Newsletter</div>
                <div className="text">Never Miss an Update — Sign Up Today</div>
                <div className="subscribe-form2">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input type="email" id="email" name="email" className="email" placeholder="Email Address" required />
                      <button type="submit" className="btn-style-one" aria-label="Submit email">
                        <span className="btn-text"><i className="fa-solid fa-arrow-right"></i></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-sm-4">
              <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                <div className="h6 widget-title">Product</div>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><Link href="#">Features</Link></li>
                    <li><Link href="#">Integrations</Link></li>
                    <li><Link href="#">Download</Link></li>
                    <li><Link href="#">Pricing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-sm-4">
              <div className="footer-widget links-widget ms-0 ms-xxl-4 wow fadeInLeft" data-wow-delay="200ms">
                <div className="h6 widget-title">Company</div>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><Link href="#">About us</Link></li>
                    <li><Link href="#">Latest Blog</Link></li>
                    <li><Link href="#">Our Clients</Link></li>
                    <li><Link href="#">Careers</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-sm-4">
              <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                <div className="h6 widget-title">Resources</div>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><Link href="#">Support center</Link></li>
                    <li><Link href="#">Documentation</Link></li>
                    <li><Link href="#">Community</Link></li>
                    <li><Link href="#">Hosting</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="inner-container">
            <div className="copyright-text">SaasFlow ,2026 © All rights reserved</div>
            <button id="back_to_top" type="button" className="back-to-top-btn">
                <i className="fa-solid fa-arrow-up"></i>
            </button>
            <ul className="footer-nav">
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}