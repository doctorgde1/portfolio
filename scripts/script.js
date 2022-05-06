const background_slider = document.querySelectorAll('.slider__item');
let Orientation = "horizontal";

$(document).ready(function () {
    $('.background-slider').slick({
        arrows: false,
        waitForAnimate: true,
        infinite: true,
        slidesToShow: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable: false,
        swipe: false,
        variableHeight: true,
        fade: true,
        easing: "ease",
    });
    $('.background-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (window.innerHeight > window.innerWidth) {
            Orientation = "vertical";
        }
        else {
            Orientation = "horizontal";
        }
        background_slider[nextSlide].querySelector('img').setAttribute('src', `images/${Orientation}/background_${nextSlide}.jpg`);
    });
});