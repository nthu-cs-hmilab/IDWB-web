"use strict";

// SELECTION
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".tab-content");

tabs.addEventListener("click", function (e) {
  const target = e.target.closest(".btn");

  if (!target) return;

  btns.forEach((btn_o) => btn_o.classList.remove("btn-active"));
  target.classList.add("btn-active");

  content.forEach((cont) => cont.classList.add("tab-hidden"));

  document
    .querySelector(`.tab-content--${target.dataset.tab}`)
    .classList.remove("tab-hidden");
});

