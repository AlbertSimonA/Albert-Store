import React from "react";
import Announcement from "../Announcement/Announcement";
import Discount from "../Discount/Discount";

import FlashDeals from "../FlashDeals/FlashDeals";
import Footer from "../Footer/Footer";
import Home from "../Header/Mainpage/Home";
import NewArrivals from "../NewArrivals/NewArrivals";

import TopCate from "../Top/TopCate";
import Wrapper from "../Wrapper/Wrapper";

function Pages({ productItems, CartItem, addToCart, shopItems }) {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Announcement />
      <Wrapper />
      <Footer />
    </>
  );
}

export default Pages;
