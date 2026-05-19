import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../section/home1/About";
import Testimonial from "../section/about/Testimonial";
import Benefits from "../section/home1/Benefits";
import Funfact from "../section/about/Funfact";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two">
            <PageTitle pageName="About Us" />
            <About />
            <Testimonial />
            <Benefits />
            <Funfact />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;