import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ProjectGrid from "../section/project/ProjectGrid";

export const metadata = {
  title: `Project || ${SITE_NAME}`,
};

const ProjectGridPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two">
            <PageTitle pageName="Project" />
            <ProjectGrid />
        </LayoutWrapper>
        </>
    );
};

export default ProjectGridPage;