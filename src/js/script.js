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

// Type writer in index page
class TyperWriter {
  _txtElement = document.querySelector(".txt-type");
  _words = JSON.parse(this._txtElement.getAttribute("data-words"));
  _wait = this._txtElement.getAttribute("data-wait");
  _txt = "";
  _isDeleting = false;
  _wordIndex = 0;

  constructor(typeSpeed) {
    this.wait = parseInt(this._wait, 10);
    this._writing();
    this.typeSpeed = typeSpeed;
  }

  _writing() {
    let typeSpeed = this.typeSpeed;
    const current = this._wordIndex % this._words.length;

    const fullTxt = this._words[current];

    if (this._isDeleting) {
      typeSpeed /= 2;
      this._txt = fullTxt.substring(0, this._txt.length - 1);
    } else {
      this._txt = fullTxt.substring(0, this._txt.length + 1);
    }

    if (!this._isDeleting && this._txt === fullTxt) {
      typeSpeed = this.wait;
      this._isDeleting = true;
    } else if (this._isDeleting && this._txt === "") {
      typeSpeed = 1000;
      this._isDeleting = false;
      this._wordIndex++;
    }
    setTimeout(() => this._writing(), typeSpeed);

    this._txtElement.innerHTML = `${this._txt}`;
  }
}
if (document.querySelector(".index-sub-heading")) new TyperWriter(100);

// Section Intersection

const allSection = document.querySelectorAll("section");
const sectionCallBack = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.add("show-section");
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionCallBack, {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
});

allSection.forEach(function (sec) {
  sectionObserver.observe(sec);
});

document.onload = function () {
  document.querySelector(".header-2").classList.remove("section--hidden");
  document.querySelector(".header-2").classList.add("show-section");
};

// Q and A Functionality

const QAcontent = document.querySelectorAll(".QA-content");

QAcontent.forEach((body) => {
  body.addEventListener("click", function (e) {
    const contentParent = e.target.closest(".QA-content");

    if (!contentParent) return;

    const bodyContent = contentParent.querySelector(".QA-content-body");
    const plusIcon = contentParent.querySelectorAll(".plus-icon");

    plusIcon.forEach((icon) => icon.classList.toggle("hidden"));

    bodyContent.classList.toggle("hidden");
  });
});
