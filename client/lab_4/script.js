let slidePosition = 0;
const slides = document.querySelectorAll('.carousel-item'); //creates array-like object of carousel items
const totalSlides = slides.length;

//console.log(slides.length);

document.querySelector('#carousel-button--next')
.addEventListener("click", () => {
    moveToNextSlide();
})

document.querySelector('#carousel-button--prev')
.addEventListener("click", () => {
    moveToPrevSlide();
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
    }

    else {
        slidePosition++;
    }
    updateSlidePosition();
}

moveToPrevSlide = () => {
    //console.log('test');
    if (slidePosition === 0) {
        slidePosition = totalSlides-1;
    }

    else {
        slidePosition--;
    }
    
    updateSlidePosition();
}
    