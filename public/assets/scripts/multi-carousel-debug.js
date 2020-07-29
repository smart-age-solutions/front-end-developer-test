"use strict";

var scrollLeftCategory = function scrollLeftCategory() {
  var x = document.querySelector(".category div");
  var step = window.outerWidth / 2;
  x.scrollLeft -= step;
};

var scrollRightCategory = function scrollRightCategory() {
  var x = document.querySelector(".category div");
  var step = window.outerWidth / 2;
  x.scrollLeft += step;
};

var scrollLeftShop = function scrollLeftShop() {
  var x = document.querySelector(".shop-carousel__carousel div");
  var step = window.outerWidth / 2;
  x.scrollLeft -= step;
};

var scrollRightShop = function scrollRightShop() {
  var x = document.querySelector(".shop-carousel__carousel div");
  var step = window.outerWidth / 2;
  x.scrollLeft += step;
};

var scrollLeftInsta = function scrollLeftInsta() {
  var x = document.querySelector(".instagram__carousel div");
  var step = window.outerWidth / 2;
  x.scrollLeft -= step;
};

var scrollRightInsta = function scrollRightInsta() {
  var x = document.querySelector(".instagram__carousel div");
  var step = window.outerWidth / 2;
  x.scrollLeft += step;
};