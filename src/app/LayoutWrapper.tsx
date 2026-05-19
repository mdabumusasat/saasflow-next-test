"use client";

import React, { useEffect, useState, useRef } from "react";
import BackToTop from "./components/elements/BackToTop";
import Footer from "./components/footer/footer";
import Footer2 from "./components/footer/footer2";
import Footer3 from "./components/footer/footer3";
import Footer4 from "./components/footer/footer4";
import Footer5 from "./components/footer/footer5";
import Header from "./components/header/header";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Header4 from "./components/header/Header4";
import Header5 from "./components/header/Header5";
// import "animate.css/animate.min.css";

interface LayoutProps {
  children: React.ReactNode;
  HeaderStyle?: string;
  FooterStyle?: string;
  styleMode?: string;
  menuType?: string;
}

const LayoutWrapper: React.FC<LayoutProps> = ({
  children,
  HeaderStyle,
  FooterStyle,
  styleMode,
  menuType,
}) => {
  const [scroll, setScroll] = useState(false);
  const [searchToggle, setSearchToggled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [companyInfoVisible, setCompanyInfoVisible] = useState(false);
  const [searchPopupVisible, setSearchPopupVisible] = useState(false);
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      bodyRef.current = document.body as HTMLBodyElement;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Dynamically import WOW.js only on client side to avoid hydration issues
    if (typeof window !== "undefined") {
      // Load WOW.js dynamically
      import("wowjs/dist/wow.js").then((module) => {
        // wowjs exports WOW constructor - try different access patterns
        const WOW = (module as any).default || (module as any).WOW || module;

        // Verify it's a constructor function
        if (WOW && typeof WOW === 'function') {
          try {
            const wowInstance = new WOW({ live: false });
            if (wowInstance && typeof wowInstance.init === 'function') {
              wowInstance.init();
            }
          } catch (error: any) {
            // If constructor fails, try accessing from window (UMD fallback)
            if ((window as any).WOW && typeof (window as any).WOW === 'function') {
              try {
                new (window as any).WOW({ live: false }).init();
              } catch (windowError) {
                console.error("Error initializing WOW.js from window:", windowError);
              }
            } else {
              console.error("Error initializing WOW.js:", error);
            }
          }
        } else {
          // Fallback: check window object
          if ((window as any).WOW && typeof (window as any).WOW === 'function') {
            try {
              new (window as any).WOW({ live: false }).init();
            } catch (error) {
              console.error("Error initializing WOW.js from window:", error);
            }
          } else {
            console.error("WOW.js constructor not found. Module keys:", Object.keys(module));
          }
        }
      }).catch((error) => {
        console.error("Failed to load WOW.js:", error);
      });
    }
  }, []);

  // Use requestAnimationFrame to ensure these run after hydration
    useEffect(() => {
        if (styleMode === "Blue") {
            document.body.classList.add("blue-mode");
            document.body.classList.remove("green-mode", "cyan-mode", "coral-mode");
        } else if (styleMode === "Green") {
            document.body.classList.add("green-mode");
            document.body.classList.remove("blue-mode", "cyan-mode", "coral-mode");
        } else if (styleMode === "Cyan") {
            document.body.classList.add("cyan-mode");
            document.body.classList.remove("blue-mode", "green-mode", "coral-mode");
        } else if (styleMode === "Coral") {
            document.body.classList.add("coral-mode");
            document.body.classList.remove("blue-mode", "green-mode", "cyan-mode");
        }else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("blue-mode", "green-mode", "cyan-mode", "coral-mode");
        }
    }, [styleMode]);

  useEffect(() => {
    if (typeof window !== "undefined" && bodyRef.current) {
      requestAnimationFrame(() => {
        if (bodyRef.current) {
          bodyRef.current.classList.toggle("single-menu", menuType === "single");
        }
      });
    }
  }, [menuType]);

  useEffect(() => {
    if (typeof window !== "undefined" && bodyRef.current) {
      requestAnimationFrame(() => {
        if (bodyRef.current) {
          bodyRef.current.classList.toggle("mobile-menu-visible", mobileMenuVisible);
        }
      });
    }
  }, [mobileMenuVisible]);

  useEffect(() => {
    if (typeof window !== "undefined" && bodyRef.current) {
      requestAnimationFrame(() => {
        if (bodyRef.current) {
          bodyRef.current.classList.toggle("company-info-visible", companyInfoVisible);
        }
      });
    }
  }, [companyInfoVisible]);

  useEffect(() => {
    if (typeof window !== "undefined" && bodyRef.current) {
      requestAnimationFrame(() => {
        if (bodyRef.current) {
          bodyRef.current.classList.toggle("search-popup-visible", searchPopupVisible);
        }
      });
    }
  }, [searchPopupVisible]);

  const handleOpen = () => setMobileMenuVisible(true);
  const handleOpen2 = () => setCompanyInfoVisible(true);
  const handleRemove = () => setMobileMenuVisible(false);
  const handleRemove2 = () => setCompanyInfoVisible(false);
  const handleToggle = () => setSearchPopupVisible((prev) => !prev);

  const headerProps = {
    handleOpen,
    handleRemove,
    handleRemove2,
    handleToggle,
    scroll,
    searchToggle,
  };

  const renderHeader = () => {
    switch (HeaderStyle) {
      case "two":
        return <Header2 {...headerProps} />;
      case "three":
        return <Header3 {...headerProps} />;
      case "four":
        return <Header4 {...headerProps} />;
      case "five":
        return <Header5 {...headerProps} />;
      default:
        return <Header {...headerProps} />;
    }
  };

  // Dynamic Footer
  const renderFooter = () => {
    switch (FooterStyle) {
      case "two":
        return <Footer2 />;
      case "three":
        return <Footer3 />;
      case "four":
        return <Footer4 />;
      case "five":
        return <Footer5 />;
      default:
        return <Footer />;
    }
  };

  return (
    <div id="top">
      <div className="page-wrapper">
        {renderHeader()}
        {children}
        {renderFooter()}
        <BackToTop />
      </div>
    </div>
  );
};

export default LayoutWrapper;