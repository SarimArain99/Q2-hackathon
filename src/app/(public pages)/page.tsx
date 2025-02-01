import Category from "@/components/Category";
import DiscountItem from "@/components/DiscountItem";
import Featured from "@/components/Featured";
import Latest from "@/components/Latest";
import LatestBlogs from "@/components/LatestBlogs";
import Newsletter from "@/components/Newsletter";
import Offered from "@/components/Offered";
import Promotional from "@/components/Promotional";
import TopProducts from "@/components/TopProducts";
import Treandy from "@/components/Treandy";
import React from "react";

function page() {
  return (
    <div>
      <Promotional/>
      <Featured/>
      <Latest/>
      <Offered/>
      <Treandy/>
      <TopProducts/>
      <DiscountItem/>
      <Category/>
      <Newsletter/>
      <LatestBlogs/>
    </div>
  );
}

export default page;
