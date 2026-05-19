import React from "react";
import { SITE_NAME } from "./Head";
import LayoutWrapper from "./LayoutWrapper";
import Banner from "./section/home1/Banner";
import Clients from "./section/home1/Clients";
import About from "./section/home1/About";
import Service from "./section/home1/Service";
import Benefits from "./section/home1/Benefits";
import Cta from "./section/home1/Cta";
import Features from "./section/home1/Features";
import Pricing from "./section/home1/Pricing";
import Testimonial from "./section/home1/Testimonial";
import Faqs from "./section/home1/Faqs";
import News from "./section/home1/News";
import Cta2 from "./section/home1/Cta2";

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home1: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper>
      <Banner />
      <Clients />
      <About />
      <Service />
      <Benefits />
      <Cta />
      <Features />
      <Pricing />
      <Testimonial />
      <Faqs />
      <News />
      <Cta2 />
    </LayoutWrapper>
  );
};

export default Home1;