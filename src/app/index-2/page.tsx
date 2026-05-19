import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import Clients from "../section/home2/Clients";
import Features from "../section/home2/Features";
import Benefit from "../section/home2/Benefit";
import Funfact from "../section/home2/Funfact";
import Features2 from "../section/home2/Features2";
import Pricing from "../section/home2/Pricing";
import Testimonial from "../section/home2/Testimonial";
import Faqs from "../section/home2/Faqs";

export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two" styleMode="Blue">
      <Banner />
      <Clients />
      <Features />
      <Benefit />
      <Funfact />
      <Features2 />
      <Pricing />
      <Testimonial />
      <Faqs />
    </LayoutWrapper>
  );
};

export default Home2;