"use strict";

var anchorLinks = document.querySelectorAll('.scrolling a[href^="#"]');
anchorLinks.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var hashVal = item.getAttribute('href');
    var target = document.querySelector(hashVal);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    history.pushState(null, null, hashVal);
    e.preventDefault();
  });
});