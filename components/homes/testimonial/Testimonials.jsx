"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  return (
    <>
      <div className="col-xxl-8 col-xl-9">
        <div className="bostami-page-content-wrap">
          <div className="section-wrapper pl-60 pr-60 pt-60">
            <div className="bostami-page-title-wrap mb-15">
              <h2 className="page-title">Testimonials</h2>
            </div>
          </div>

          <div className="section-wrapper pr-60 pl-60 mb-60">
            <div className="blog-slider-wrap">
              <div className="swiper-container blog-slider-active">
                <Swiper
                  // {...setting}
                  modules={[Navigation, Pagination]}
                  pagination={{
                    el: ".blog-progation-one",
                    clickable: true,
                  }}
                  // loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                >
                  <TestimonialItem />
                  <TestimonialItem />
                  <TestimonialItem />
                  <TestimonialItem />
                  <TestimonialItem />
                  <TestimonialItem />
                </Swiper>

                <div className="blog-progation blog-progation-one"></div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
            <span>
              © {new Date().getFullYear()} All Rights Reserved by ib-themes.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
