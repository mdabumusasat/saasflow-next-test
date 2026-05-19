"use client";

import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!hasScrolled) return null;

  return (
  <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" onClick={scrollToTop} className="back-to-top-btn">
          <i className="fa-solid fa-angle-up"></i>
      </button>
  </div>
  );
};

export default BackToTop;