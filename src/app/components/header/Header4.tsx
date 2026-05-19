"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
  handleToggle?: () => void;
  searchToggle?: boolean;
}

const Header4: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }): JSX.Element => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleToggle = () => {
      setIsSearchActive(!isSearchActive);
    };
  return (
    <>
    <div className="line-shape-animation fix cus-z-1 first w-100 h-100 d-flex flex-wrap">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
      <div className="header-top">
        <div className="text">The most complete framework for evaluating SaaS performance, take control of your workflow –</div>
        <Link href="#" className="header-btn2">Get Started</Link>
        <div className="shape-1"><img src="/assets/images/icons/shape-79.png" alt=""/></div>
      </div>
      <div className="outer-box">
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="#"><img src="/assets/images/logo5.png" alt="Logo" /></Link>
              </div>
            </div>
            <div className="nav-outer">
              <nav className="nav main-menu">
                <NavLinks extraClassName="main-menu-list" />
              </nav>
            </div>
          </div>

          {/* <!-- Outer Box --> */}
          <div className="action-box">
            <div className="single-list-outer">
              <div className="single-list">
                <div className="icon"><img src="/assets/images/icons/earth-americas.png" alt=""/></div>
                <select className="nice-select">
                  <option>Eng</option>
                  <option>Au</option>
                  <option>Ne</option>
                </select>
              </div>
              <div className="single-list2">
                <select className="nice-select">
                  <option>Log In</option>
                  <option>Log Out</option>
                </select>
              </div>
            </div>
            <div className="header-btn">
              <Link className="header-btn-main" href="/page-contact"><span className="btn-text">Book a Demo</span></Link>
            </div>

            {/* <!-- Mobile Nav toggler --> */}
            <div className="mobile-nav-toggler" onClick={handleOpen}>
              <div className="shape-line-img"><i className="fas fa-bars"></i></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={() => { handleRemove(); handleRemove2(); }} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link href="#"><img src="/assets/images/logo7.png" alt="" /></Link>
            </div>
            <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}>
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-envelope1"></i>
              <span className="title">Send Email</span>
              <div className="text"><Link href="#">alma.lawson@example.com</Link></div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-vimeo-v"></i></Link></li>
          </ul>
        </nav>
      </div>
      <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
        <span className="search-back-drop" onClick={handleToggle} />
        <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
        <div className="search-inner">
          <form method="post" action="/">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link href="/"><img src="/assets/images/logo.png" alt="" /></Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                  <NavLinks extraClassName="main-menu-list" />
                  </ul>
                </div>
              </nav>
              <div className="mobile-nav-toggler" onClick={handleOpen}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header4;