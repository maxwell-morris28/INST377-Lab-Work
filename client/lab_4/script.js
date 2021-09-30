/* eslint-disable no-plusplus */
/* eslint-disable keyword-spacing */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
let slidePosition = 0;
const slides = document.querySelectorAll('.carousel-item'); //creates array-like object of carousel items
const totalSlides = slides.length;
const next_button = document.querySelector('#carousel-button--next');
const prev_button = document.querySelector('#carousel-button--prev');

//console.log(slides.length);

next_button.addEventListener("click", () => {
    moveToNextSlide();
    next_button.style.border = "medium solid green";
    prev_button.style.border = "none";
})

prev_button.addEventListener("click", () => {
    moveToPrevSlide();
    prev_button.style.border = "medium solid green";
    next_button.style.border = "none";
})

updateSlidePosition = () => {
    for(let slide of slides) {
        slide.classList.remove('carousel-item--visible');
        slide.classList.add('carousel-item--hidden');
    }

    slides[slidePosition].classList.add('carousel-item--visible');
}

moveToNextSlide = () => {
    //console.log('test');

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

moveToPrevSlide = () => {
    //console.log('test');
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}