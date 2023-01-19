import React, { useEffect, useState } from "react";

function CommonHooks() {
  let nav = document.querySelectorAll<HTMLElement>(".doc-header")[0];
  let nav_small = document.querySelectorAll<HTMLElement>(".content-feature")[0];
  let [scrollY, setScrollY] = useState(0);
  let [lastScrollY, setLastScrollY] = useState(0);
  let [wheelDirection, setWheelDirection] = useState("");

  function remove_class_on() {
    document.querySelectorAll(".list_gnb > li")[0].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[1].classList.remove("on");
    document.querySelectorAll(".list_gnb > li")[2].classList.remove("on");
  }
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollY(window.scrollY);
      if (nav instanceof HTMLElement) {
        setLastScrollY(scrollY);
        if (scrollY > lastScrollY) {
          setWheelDirection("down");
        } else {
          setWheelDirection("up");
        }
        if (scrollY > 150 && wheelDirection == "up") {
          nav.classList.remove("hide_header");
          remove_class_on();
        } else if (scrollY > 150) {
          nav_small.style.visibility = "visible";
          nav.classList.add("hide_header");
          remove_class_on();
        } else {
          nav_small.style.visibility = "hidden";
        }

        if (scrollY > 20) {
          nav.style.borderBottom = "1px solid var(--colorBg1)";
        } else if (scrollY < 20) {
          nav.style.borderBottom = "none";
        }
      } else {
        nav as HTMLElement;
      }
    });
  }, [scrollY, lastScrollY]);
}

export default CommonHooks;
