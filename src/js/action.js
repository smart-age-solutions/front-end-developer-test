

$(document).ready(function(){
    function goToByScroll(item) {
        $('html,body').animate({
            scrollTop: $(item).offset().top
        }, 'slow');
    }

    $("header ul > li > a").click(function(e) {
        e.preventDefault();
        goToByScroll($(this).attr('href'));
    });

    //Principal Slider
    function showSlidesIntro(n) {
        var i;

        var slides = [];
        $('.slide-intro').each(function(){
            slides.push($(this));
        })
        var dots = []
        $('.dot-intro').each(function(){
            dots.push($(this));
        })

        if (n > slides.length) index = 1;
        if (n < 1) index = slides.length;
        for (i = 0; i < slides.length; i++) {
            slides[i].hide()
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].removeClass(" active").addClass("");
        }
        slides[index-1].css('display', 'flex');
        dots[index-1].addClass(" active")
    }

    function currentSlideIntro(n) {
        showSlidesIntro(index = n);
    }

    var index = 1;
    showSlidesIntro(index);

    //Obtains the id number of the clicked btn, to show the referring image
    $(".dot-intro").on("click", function(){
        var id = $(this).attr("id")
        currentSlideIntro(id.substring(id.length - 1))
    })

    //Categories Sliders
    let slidesCategory = []
    $('.slide-category').each(function(el){
        slidesCategory.push($(this));
    })
    let indexCategory = 0;
    slidesCategory[indexCategory].addClass("removeOpacity");

    $("#arrow-left").on('click', function(){slideCategories(-1)})
    $("#arrow-right").on('click', function(){slideCategories(+1)}) 

    function slideCategories(increase) {
        indexCategory += increase;
        indexCategory = Math.min(Math.max(indexCategory ,0), slidesCategory.length-1);
        
        for(let i = 0; i < slidesCategory.length; i++) {
            slidesCategory[indexCategory].removeClass("removeOpacity")
        }

        var currentPosition = slidesCategory[indexCategory - 1].offset().left
        slidesCategory[indexCategory].addClass("removeOpacity");
        
        $(".slider-content-categories").animate({
            scrollLeft: slidesCategory[indexCategory].offset().left - currentPosition
        })
    }

    //Carousel Shop
    $('.rings-carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '200px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '100px',
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1
              }
            }
        ]

    });

    //Carousel Instagram Pics
    $('.instagram-carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '100px',
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 1
              }
            }
        ]
    });
})