import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TeamGrid from "../section/team/TeamGrid";

export const metadata = {
  title: `Our Teams || ${SITE_NAME}`,
};

const TeamPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two">
            <PageTitle pageName="Team Grid" />
            <TeamGrid />
        </LayoutWrapper>
        </>
    );
};

export default TeamPage;