import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home5/Banner5";
import Clients from "../section/home5/Clients";
import Service from "../section/home5/Service5";
import Service2 from "../section/home5/Service2Five";
import ProgressBar from "../section/home5/ProgressBar";
import Pricing from "../section/home5/Pricing5";
import Testimonial from "../section/home5/Testimonial";
import Faqs from "../section/home5/Faqs5";
import News from "../section/home5/News5";
import News2Five from "../section/home5/News2Five";

export const metadata = {
  title: `Home Layout5 || ${SITE_NAME}`,
};

const home5: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="five" FooterStyle="five" styleMode="Coral">
      <Banner />
      <Clients />
      <Service />
      <Service2 />
      <ProgressBar />
      <Pricing />
      <Testimonial />
      <Faqs />
      <News />
      <News2Five />
    </LayoutWrapper>
  );
};

export default home5;