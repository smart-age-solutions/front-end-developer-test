$('.collections-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '300px',
  prevArrow: false,
  nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        nextArrow: false,
      }
    }
  ]
});