const menu = document.querySelectorAll(".color");
// color change of menu header

menu.forEach(function (element) {
  element.addEventListener("mouseenter", function (e) {
    const target = e.target;
    menu.forEach(function (el) {
      if (el !== target) {
        el.style.opacity = ".4";
      }
    });
  });
});
menu.forEach(function (element) {
  element.addEventListener("mouseout", function () {
    menu.forEach(function (el) {
      el.style.opacity = "1";
    });
  });
});
console.log(menu);
const close = document.querySelector(".btn-close");
const contact = document.getElementById("form");
contact.addEventListener("click", function () {
  document.querySelector(".contact1").style.display = "block";
});
close.addEventListener("click", function () {
  document.querySelector(".contact1").style.display = "none";
});
document.getElementById("about").addEventListener("click", function (e) {
  const final = document.querySelector(".fourthbox");
  final.scrollIntoView({ behavior: "smooth" });
});
/// adding Cookie msg or adding any element to html by using js
const cookie = document.createElement("div");
cookie.classList.add("cookie-msg");
cookie.innerHTML =
  '<p class="cookie-text"> We accept Cookies For Better Experience of our users</p>  <button class="btn-close-cookie">Accept</button>';
const positionCookie = document.querySelector(".head");
positionCookie.prepend(cookie);
document
  .querySelector(".btn-close-cookie")
  .addEventListener("click", function () {
    cookie.remove();
  });
/// sticky navigation while scrolling
const startPoint = document.querySelector(".secondbox").getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > startPoint.top) {
    document.querySelector(".head").classList.add("sticky");
  } else document.querySelector(".head").classList.remove("sticky");
});
///Slider
const btnleft = document.querySelector(".nikal-left");
const btnright = document.querySelector(".nikal-right");
const slides = document.querySelectorAll(".slides");
let a = 0;
slides.forEach(function (el, i) {
  el.style.transform = `translateX(${100 * (i - a)}%)`;
});
btnleft.addEventListener("click", function () {
  a++;
  if (a == 3) a = 0;
  slides.forEach(function (el, i) {
    el.style.transform = `translateX(${100 * (i - a)}%)`;
  });
});
btnright.addEventListener("click", function () {
  a--;
  if (a <= -1) a = 2;
  console.log(a);
  slides.forEach(function (el, i) {
    el.style.transform = `translateX(${100 * (i - a)}%)`;
  });
});
