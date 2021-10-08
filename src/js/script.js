"use strict";
// Jquery Import
const $ = require("jquery");
window.$ = $;

// $(".progress-bar").animate(
//   {
//     width: "75%",
//   },
//   2500
// );

const bar = $(".progress-bar");
const navbar = document.querySelector(".nav-bar-main");
const header = document.querySelector("#header");

const navCallBack = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
};

const navObs = new IntersectionObserver(navCallBack, {
  root: null,
  threshold: 0.1,
  rootMargin: "-120px",
});

navObs.observe(header);
