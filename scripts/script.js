const background_slider = document.querySelectorAll('.slider__item');
let i = 0;
let memory = "horizontal";
let Orientation = "horizontal";

$(document).ready(function () {
    $('.background-slider').slick({
        arrows: false,
        waitForAnimate: true,
        infinite: true,
        slidesToShow: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable: false,
        swipe: false,
        variableHeight: true,
        fade: true,
        easing: "linear",
    });
    $('.background-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (window.innerHeight > window.innerWidth) {
            Orientation = "vertical";
        }
        else {
            Orientation = "horizontal";
        }
        if (Orientation != memory) {
            background_slider.forEach(element => {
                if (element != currentSlide) {
                    element.querySelector('img').setAttribute('src', `images/${Orientation}/background_${i}.jpg`);
                    i++;
                }
                else {
                    i++;
                }
            });
            i = 0;
            memory = Orientation;
        }
    });
});