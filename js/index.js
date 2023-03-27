let slides = document.querySelectorAll('.slide');
let nextBtn = document.getElementById('nextBtn');

let prevBtn = document.getElementById('prevBtn');
let currentSlide = 0;

function showSlide(mySlide) {
  slides[currentSlide].classList.remove('active');

  currentSlide = (mySlide + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', function() {
  showSlide(currentSlide + 1);
});
prevBtn.addEventListener('click', function() {
    showSlide(currentSlide - 1);
  });
console.log(slides)