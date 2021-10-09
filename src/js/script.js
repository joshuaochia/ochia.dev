"use strict";
// Jquery Import
const $ = require("jquery");
window.$ = $;

///////////////////////////// Progress Bar for about me page
const progressBarList = ["75", "90", "65"];
const progressBar = $(".progress-bar");
progressBar.each(function (index) {
  $(this).animate(
    {
      width: `${progressBarList[index]}%`,
    },
    5000
  );
});

//////////////////////////////// Sticky Navbar for all page
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
