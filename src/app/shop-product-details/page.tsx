import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopDetails from "../section/shop/ShopDetails";

export const metadata = {
  title: `Product Details || ${SITE_NAME}`,
};

export default function ShopProductDetailsPage() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Product Details" />
      <ShopDetails />
    </LayoutWrapper>
  );
}

