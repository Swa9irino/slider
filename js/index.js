let displacement = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__next').addEventListener('click', function(){
    displacement +=  256;
    if (displacement > 768) {
        displacement = 0;
    }
    sliderLine.style.left = -displacement + 'px';
});

document.querySelector('.slider__prev').addEventListener('click', function () {
    displacement -=256;
    if (displacement < 0) {
        displacement = 768;
    }
    sliderLine.style.left = -displacement + 'px';
});