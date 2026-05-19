import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home4/Banner4";
import Clients from "../section/home4/Clients";
import About from "../section/home4/About";
import Service from "../section/home4/Service4";
import Benefit from "../section/home4/Benefit4";
import Testimonial2 from "../section/home4/Testimonial2Four";
import Pricing from "../section/home4/Pricing4";
import Testimonial from "../section/home4/Testimonial4";
import Faqs from "../section/home4/Faqs4";
import Cta from "../section/home4/Cta";

export const metadata = {
  title: `Home Layout4 || ${SITE_NAME}`,
};

const home4: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="four" FooterStyle="four" styleMode="Cyan">
      <Banner />
      <Clients />
      <About />
      <Service />
      <Benefit />
      <Testimonial2 />
      <Pricing />
      <Testimonial />
      <Faqs />
      <Cta />
    </LayoutWrapper>
  );
};

export default home4;