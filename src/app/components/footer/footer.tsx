"use client";
import React from "react";
import Link from "next/link";

type FooterLink = {
  title: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
  className?: string;
};

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Download", href: "#" },
      { title: "Pricing", href: "/page-pricing" },
    ],
  },
  {
    title: "Company",
    className: "ms-0 ms-xxl-4",
    links: [
      { title: "About us", href: "/page-about" },
      { title: "Latest Blog", href: "/news-grid" },
      { title: "Our Clients", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { title: "Analytics", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Workflows", href: "#" },
      { title: "Dashboards", href: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { title: "My Account", href: "#" },
      { title: "Privacy Policy", href: "/" },
      { title: "FAQs", href: "/page-faq" },
      { title: "Sign Up", href: "#" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer footer-style-one">
      <div className="shape1 bounce-y">
        <img
          src="/assets/images/icons/shape-46.png"
          alt="Shape"
        />
      </div>
      <div className="shape2 bounce-x">
        <img
          src="/assets/images/icons/shape-47.png"
          alt="Shape"
        />
      </div>
      <div className="widgets-section">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-8">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/images/logo.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="text">
                    Our SaaS platform combines powerful features
                    <br />
                    with an intuitive interface, giving tools.
                  </div>
                  <Link href="/page-about" className="btn-style-one">
                    <span className="btn-text">
                      Get Free 14-days Trial
                    </span>
                  </Link>
                </div>
              </div>
              {footerSections.map((section, index) => (
                <div
                  key={index}
                  className="footer-column col-lg-2 col-md-4 col-sm-6">
                  <div
                    className={`footer-widget links-widget ${
                      section.className || ""
                    } wow fadeInLeft`}
                    data-wow-delay="200ms">
                    <div className="h6 widget-title">
                      {section.title}
                    </div>
                    <div className="widget-content">
                      <ul className="user-links">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link href={link.href}>
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h2 gradient-title1">Saasflow</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="shape3 bounce-x">
            <img
              src="/assets/images/icons/shape-48.png"
              alt="Shape"
            />
          </div>
          <div className="container">
            <div className="inner-container">
              <div className="copyright-text">
                SaaSFlow, {currentYear} © All rights reserved
              </div>

              <ul className="footer-nav">
                <li>
                  <Link href="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;