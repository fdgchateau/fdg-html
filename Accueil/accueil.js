const slider = document.querySelector(".carousel-slider");
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 10000);