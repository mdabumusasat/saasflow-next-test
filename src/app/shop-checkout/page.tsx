import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ShopCheckout from "../section/shop/ShopCheckout";

export const metadata = {
  title: `Checkout || ${SITE_NAME}`,
};

export default function ShopCheckoutPage() {
  return (
    <LayoutWrapper HeaderStyle="two">
      <PageTitle pageName="Checkout" />
      <ShopCheckout />
    </LayoutWrapper>
  );
}

