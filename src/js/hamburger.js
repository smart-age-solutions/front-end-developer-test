// Hamburger menu
const hamburgerNav = document.querySelector(".hamburger-nav");
const hamburgerIcon = document.querySelector(".hamburger__icon");

hamburgerIcon.addEventListener("click", function(){
    hamburgerNav.classList.toggle("active");
});
