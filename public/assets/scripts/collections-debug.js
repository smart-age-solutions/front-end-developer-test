"use strict";

var links = document.querySelectorAll('.collections__list__item__link');
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var image = document.querySelector('.collections__list__item__image');
    image.classList.remove('active');
    image.classList.add('active');
  });
});