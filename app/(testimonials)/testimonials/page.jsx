import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import Blog from "@/components/homes/blogs/Blog";
import Resume from "@/components/homes/resume/Resume";
import React from "react";
import Preloader from "@/components/homes/Preloader";
import MenuTwo from "@/components/homes/menus/MenuTwo";
import Testimonials from "@/components/homes/testimonial/Testimonials";
export const metadata = {
  title: "Blog-1 || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      <Preloader />

      <div className="page-wrapper home-1" id="blog">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <Testimonials />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
