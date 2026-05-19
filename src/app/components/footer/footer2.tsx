"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
  <footer className="main-footer footer-style-two">
    <div className="shape-1"><img src="/assets/images/icons/shape-62.png" alt="Image"/></div>
    <div className="shape-2"><img src="/assets/images/icons/shape-64.png" alt="Image"/></div>
    <div className="shape-3 animation__rotateY"><img src="/assets/images/icons/shape-63.png" alt="Image"/></div>
    <div className="shape-4 bounce-y"><img src="/assets/images/icons/shape-53.png" alt="Image"/></div>
    <div className="shape-5 bounce-x"><img src="/assets/images/icons/shape-52.png" alt="Image"/></div>
    <div className="shape-6 bounce-x"><img src="/assets/images/icons/shape-51.png" alt="Image"/></div>
    <div className="shape-7 bounce-y"><img src="/assets/images/icons/shape-50.png" alt="Image"/></div>
    <div className="container">
      <div className="sec-title text-center light mb-100">
        <div className="h2 title">Intelligent <span className="style-two">automation </span> to <br/>speed up workflow</div>
        <div className="text">Boost your productivity and streamline your operations <br/>with smarter automation.</div>
        <div className="button-box">
          <Link className="btn-style-one" href="/page-contact">
            <span className="btn-text">Get Started Now</span>
          </Link>
          <Link className="btn-style-12" href="#">
            <span className="btn-text">Request a Demo</span>
          </Link>
        </div>
      </div>
      <div className="widgets-section-two">
        <div className="footer-middle">
          <div className="row"> 
            <div className="col-xl-5">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <Link href="#">
                    <img src="/assets/images/logo2.png" alt="Image"/>
                  </Link>
                </div>
                <div className="text">Our SaaS platform combines powerful features <br/>with an intuitive interface, giving tools.</div>
                <ul className="social-list-one">
                  <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                  <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                  <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-md-4">
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
            <div className="footer-column col-xl-3 col-md-4">
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
            <div className="footer-column col-xl-2 col-md-4">
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
        </div>
        <div className="outer-box">
          <div className="subscribe-form2">
            <div className="h5 title">Join Our Newsletter</div>
            <div className="text">Stay updated with the latest news, offers, and expert tips</div>
            <form method="post" action="#">
              <div className="form-group">
                <input type="email" name="fomr_email" className="email" placeholder="Email Address" required />
                <button type="submit" className="btn-style-one" aria-label="Submit email">
                  <span className="btn-text">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
          <div className="footer-clients-box">
            <div className="h5 title">10m+ Trusted Clients</div>
            <div className="text">Join over 10 million satisfied clients trust our platform </div>
            <div className="clients-image">
              <img src="/assets/images/resource/footer-client1.jpg" alt="Image"/>
              <img src="/assets/images/resource/footer-client2.jpg" alt="Image"/>
              <img src="/assets/images/resource/footer-client3.jpg" alt="Image"/>
              <i className="icon fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright-text">SaaSFlow, 2026 © All rights reserved</div>
      </div>
    </div>
  </footer>
  );
}