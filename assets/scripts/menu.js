const burger = document.querySelector('.header__brand__menu__burger');
const listLinks = document.querySelector('.header__brand__menu__list');
const links = document.querySelectorAll('.header__brand__menu__list li'); 

burger.addEventListener('click', () => {
  listLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })
});