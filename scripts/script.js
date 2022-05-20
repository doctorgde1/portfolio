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




const burger = document.querySelector(".burger");


const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

ul.classList = "burger__ico";
li1.classList = "burger__ico-item";
li2.classList = "burger__ico-item";
li3.classList = "burger__ico-item";

ul.append(li1);
ul.append(li2);
ul.append(li3);
burger.prepend(ul);


burger.style.setProperty("--display", "none");

ul.addEventListener("click", () => {
    if (burger.style.getPropertyValue("--display") === "none") {
        burger.style.setProperty("--animation1", "cross-1");
        burger.style.setProperty("--animation2", "disapear");
        burger.style.setProperty("--animation3", "cross-2");

        burger.style.setProperty("--width", "100%");
        burger.style.setProperty("--bgc", "hsla(0, 0%, 0%, 0.8)");
        burger.style.setProperty("--display", "block");
    }
    else {
        burger.style.setProperty("--animation1", "cross-1-reverse");
        burger.style.setProperty("--animation2", "disapear-reverse");
        burger.style.setProperty("--animation3", "cross-2-reverse");
        burger.style.setProperty("--width", "0%");
        burger.style.setProperty("--bgc", "transparent");
        burger.style.setProperty("--display", "none");
    }
});