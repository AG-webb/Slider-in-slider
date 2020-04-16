$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        // start slide
        initialSlide: 0,
        // =======
        // Pause
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        // ======
        // desctop swipe
        draggable: true,
        // Mobile swipe
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        // waiting for animation
        waitForAnimate: true,
        // center Mode
        centerMode: false,
        // full width Slider items
        variableWidth: false,
        // Rows
        rows: 1,
        slidesPerRow: 1,
        // verical slider(don't work good)
        vertical: false,
        verticalSwiping: false,

        // appendArrows: $( container class here)---(append arrows to your own contaier),
        // appendDots: $( container class here)---(append dots to your oun container),

        // For conecting 2 sliders(also need to write this in second slider whith this class)
        // asNavfor: "sliderClass here",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.slider-small').slick();


    // Slider events ================================>

    // $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     console.log(nextSlide);
    // });

    // $('.slider').on('afterChange', function(event, slick, currentSlide) {
    //     console.log(currentSlide);
    // });

    // =================================================>


    // Slider methods ================================>

    // renload slider
    // $('.slider').slick('setPosition');
    // go to current slide       
    // $('.slider').slick('goTo', 5);

    // Give control click events to your element
    // $('your element').click(function(event) {
    //     $('.slider').slick("slickPrev/slickNext or slickPause/slickPlay");
    // });
    // $('your element').click(function(event) {
    //     $('.slider').slick("slickAdd", "any html code");
    // });
});   
