import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopSidebar from "../section/shop/ShopSidebar";

export const metadata = {
  title: `Shop || ${SITE_NAME}`,
};

export default function ShopProductsSidebarPage() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Shop" />
      <ShopSidebar />
    </LayoutWrapper>
  );
}

