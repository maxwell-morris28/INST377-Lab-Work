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

moveToNextSlide = () => {
    //console.log('test');
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        slides[slidePosition].classList.add("carousel-item--visible");
        slides[totalSlides-1].classList.remove("carousel-item--visible")
    }

    else {
        slidePosition++;
        //console.log(slidePosition);
        slides[slidePosition].classList.add("carousel-item--visible");
        slides[slidePosition-1].classList.remove("carousel-item--visible")
    }
}

moveToPrevSlide = () => {
    //console.log('test');
    if (slidePosition === 0) {
        slidePosition = totalSlides-1;
        slides[slidePosition].classList.add("carousel-item--visible");
        slides[0].classList.remove("carousel-item--visible")
    }

    else {
        slidePosition--;
        console.log(slidePosition);
        slides[slidePosition].classList
        .add("carousel-item--visible");
        slides[slidePosition+1].classList
        .remove("carousel-item--visible")
    }
}
    