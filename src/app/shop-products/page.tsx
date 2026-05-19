import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopProduct from "../section/shop/ShopProduct";

export const metadata = {
  title: `Shop || ${SITE_NAME}`,
};

export default function ShopProductsPage() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Shop" />
      <ShopProduct />
    </LayoutWrapper>
  );
}

