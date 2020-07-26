"use strict";

var burger = document.querySelector('.header__brand__menu__burger');
var listLinks = document.querySelector('.header__brand__menu__list');
var links = document.querySelectorAll('.header__brand__menu__list li');
burger.addEventListener('click', function () {
  listLinks.classList.toggle('open');
  links.forEach(function (link) {
    link.classList.toggle('fade');
  });
});