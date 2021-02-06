// Hero carrousel
$('.hero-carrousel-items').slick({
    prevArrow: false,
    nextArrow: false,
});

$('.nav-items').slick({
    prevArrow: false,
    nextArrow: false,
    
    
    slidesToShow: 3,
    asNavFor: '.hero-carrousel-items',
    focusOnSelect: true
});

