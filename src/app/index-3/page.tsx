import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home3/Banner";
import Marquee from "../section/home3/Marquee";
import Service from "../section/home3/Service";
import Benefit from "../section/home3/Benefit";
import Service2 from "../section/home3/Service2";
import Feature from "../section/home3/Feature";
import Funfact from "../section/home3/Funfact";
import Pricing from "../section/home3/Pricing";
import Faqs from "../section/home3/Faqs";

export const metadata = {
  title: `Home Layout3 || ${SITE_NAME}`,
};

const home3: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="three" FooterStyle="three" styleMode="Green">
      <div className="large-container">
      <Banner />
      <Marquee />
      <Service />
      <Benefit />
      <Service2 />
      <Feature />
      <Funfact />
      <Pricing />
      <Faqs />
      </div>
    </LayoutWrapper>
  );
};

export default home3;