$(document).ready(function () {
    for (let i = 0; i < 7; i++) {
        $(`.content-main__slider-${i}`).slick({
            arrows: false,
            waitForAnimate: true,
            infinite: true,
            slidesToShow: 3,
            initialSlide: 0,
            adaptiveHeight: true,
            centerMode: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ],
        });
    }
});