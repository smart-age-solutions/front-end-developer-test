"use strict";

var slideIndex = 1;
showSlides(slideIndex);

var plusSlides = function plusSlides(n) {
  showSlides(slideIndex += n);
};

var currentSlide = function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var slides = document.getElementsByClassName("slides__item");
  var dots = document.getElementsByClassName("dots__item");
  var i;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}