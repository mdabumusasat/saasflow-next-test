"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
  <footer className="main-footer footer-style-four">
    <div className="shape-1"><img src="/assets/images/icons/shape-84.png" alt=""/></div>
    <div className="widgets-section">
      <div className="footer-middle">
        <div className="container">
          <div className="row"> 
            {/* <!-- Footer Column --> */}
            <div className="col-xl-4">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="#"><img src="/assets/images/logo5.png" alt=""/></Link>
                </div>
                <div className="text">Our SaaS platform combines powerful features <br/>with an intuitive interface, giving tools.</div>
                <Link className="btn-style-one" href="/page-about"><span className="btn-text">Get Free 14-days Trial</span></Link>
              </div>
            </div>
            {/* <!-- footer column --> */}
            <div className="footer-column col-xl-2 col-md-3 col-sm-6">
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
            {/* <!-- footer column --> */}
            <div className="footer-column col-xl-2 col-md-3 col-sm-6">
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
            {/* <!-- footer column --> */}
            <div className="footer-column col-xl-2 col-md-3 col-sm-6">
              <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                <div className="h6 widget-title">Features</div>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><Link href="#">Analytics</Link></li>
                    <li><Link href="#">Integrations</Link></li>
                    <li><Link href="#">Workflows</Link></li>
                    <li><Link href="#">Dashboards</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- footer column --> */}
            <div className="footer-column col-xl-2 col-md-3 col-sm-6">
              <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                <div className="h6 widget-title">Links</div>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><Link href="#">My Account</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">FAQs</Link></li>
                    <li><Link href="#">Sign Up</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h2 gradient-title1">Saasflow</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="inner-container">
            <div className="copyright-text">Saasflow,2026 © All rights reserved</div>
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