const carouselImages = document.querySelectorAll('.carouselSlide');
let currentImgIndex = 0;

function showNextImage() {
  carouselImages[currentImgIndex].classList.remove('active');
  currentImgIndex = (currentImgIndex + 1) % carouselImages.length;
  carouselImages[currentImgIndex].classList.add('active');
}

setInterval(showNextImage, 4000);


  