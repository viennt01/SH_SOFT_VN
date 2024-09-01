import { initializeSection0 } from "./assets/components/section_0/index.js";
import { initializeSection1 } from "./assets/components/section_1/index.js";
import { initializeSection2 } from "./assets/components/section_2/index.js";

function loadHTML(selector, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback(); // Execute the callback function after the content is loaded
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header", "./assets/components/header/index.html");
  loadHTML(
    "section_0",
    "./assets/components/section_0/index.html",
    function () {
      initializeSection0();
    }
  );
  loadHTML("list_button", "./assets/components/section_0/list_button.html");
  loadHTML(
    "section_1",
    "./assets/components/section_1/index.html",
    function () {
      initializeSection1();
    }
  );
  loadHTML(
    "section_2",
    "./assets/components/section_2/index.html",
    function () {
      initializeSection2();
    }
  );
  loadHTML("section_3", "./assets/components/section_3/index.html");
  loadHTML("footer", "./assets/components/footer/index.html");
});

document.addEventListener("wheel", function (event) {
  event.preventDefault();

  const sections = document.querySelectorAll("section");
  const currentScroll = window.scrollY;

  let currentSectionIndex = Array.from(sections).findIndex((section, index) => {
    return (
      currentScroll >= section.offsetTop &&
      currentScroll < section.offsetTop + section.offsetHeight
    );
  });

  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    window.scrollTo({
      top: sections[currentSectionIndex + 1].offsetTop,
      behavior: "smooth",
    });
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    window.scrollTo({
      top: sections[currentSectionIndex - 1].offsetTop,
      behavior: "smooth",
    });
  }
});
