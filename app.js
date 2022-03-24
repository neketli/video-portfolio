// video-slider
const setVideoUrl = (source) => {
  document.getElementById("video-slider").src = source;
};

// contacts-slider
const showSlides = (n) => {
  let slideItems = document.getElementsByClassName("slider__item");
  let navItems = document.getElementsByClassName("slider__nav-item");
  if (n === slideItems.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slideItems.length-1;
  }
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].style.display = "none";
  }
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].className = navItems[i].className.replace(
      " slider__nav-item-active",
      ""
    );
  }
  slideItems[slideIndex].style.display = "flex";
  navItems[slideIndex].className += " slider__nav-item-active";
};

const nextSlide = () => {
  showSlides((slideIndex += 1));
};
const prevSlide = () => {
  showSlides((slideIndex -= 1));
};
const setSlide = (n) => {
  showSlides((slideIndex = n));
};

var slideIndex = 0;
showSlides(slideIndex);