// Hero carousel
//Current slide and button
let currentSlide = document.querySelector('.carousel-item');
let currentNavButton = document.querySelector('.nav__item');

//Navigation
const navigation = document.querySelectorAll('.nav__item');

//Foreach nav-element clicked set slide visible
navigation.forEach((value, i) => {
    value.addEventListener("click", function () {

        setBorder(value);

        const selected = document.querySelectorAll('.carousel-item')[i];

        setVisibility(selected);
    });
});

function setBorder(value) {
    currentNavButton.style.border = 'none';
    value.style.border = 'solid 1px rgba(213, 163, 104, 1)';
    value.style.borderRadius = '100%';
    currentNavButton = value;
}

function setVisibility(selected) {
    currentSlide.style.display = "none";
    selected.style.display = 'flex';
    currentSlide = selected;
}
