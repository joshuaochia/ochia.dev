import Preloader from "@/components/homes/Preloader";
import Header from "@/components/homes/headers/Header";
import MenuTwo from "@/components/homes/menus/MenuTwo";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import Portfolio from "@/components/homes/portfolio/Portfolio";

import React from "react";
export const metadata = {
  title: "Portfolio",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      <Preloader />

      <div className="page-wrapper home-1" id={"portfolio"}>
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <Portfolio />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
