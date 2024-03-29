"use client";
import React, { useState, useEffect } from "react";
import Menu from "../menus/Menu";
import { menuItems } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import svgLogo from "../../../public/assets/img/logo/logo-white1.svg";
export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const addDarkbg = () => {
    const elements = document.querySelectorAll(".home-1");

    elements.forEach((element) => {
      element.style.backgroundImage = `url(/assets/img/bg/page-bg-dark-1.jpg)`;
    });
    setDarkMode(true);
  };

  const addlightBg = () => {
    const elements = document.querySelectorAll(".home-1");

    elements.forEach((element) => {
      element.style.backgroundImage = `url(/assets/img/bg/page-bg-1.jpg)`;
    });

    setDarkMode(false);
  };
  const handleDarkmode = () => {
    const currentState = localStorage?.getItem("idDarkMode");

    if (JSON.parse(currentState) == true) {
      localStorage.setItem("idDarkMode", false);
      document.body.classList.remove("dark-theme");

      addlightBg();
    } else {
      localStorage?.setItem("idDarkMode", true);
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const currentState = localStorage?.getItem("idDarkMode");
    document.body.classList.add("dark-theme");
    addDarkbg();
    // if (JSON.parse(currentState) == true) {
    //   document.body.classList.add("dark-theme");
    //   addDarkbg();
    // } else {
    //   document.body.classList.remove("dark-theme");
    //   addlightBg();
    // }
  }, []);

  return (
    <div className="bostami-header-area mb-30 ">
      <div className="container">
        <div className="bostami-header-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="bostami-header-logo">
                <Link className="site-logo" href="/">
                  <Image height={60} width={150} src={svgLogo} alt="logo" />
                </Link>
              </div>
            </div>

            <div className="col-6">
              <div className="bostami-header-menu-btn text-right">
                {/* <div
                  className="dark-btn dark-btn-stored mode-btn"
                  onClick={() => handleDarkmode()}
                >
                  {darkMode ? (
                    <i class="sunicon fa-light fa-sun-bright"></i>
                  ) : (
                    <i class="moonicon fa-solid fa-moon"></i>
                  )}
                </div> */}
                <div
                  className={`menu-btn toggle_menu ${menuOpen && "active"} `}
                  onClick={() => setMenuOpen((pre) => !pre)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu ${menuOpen && "active"} `}>
            <Menu setMenuOpen={setMenuOpen} data={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
