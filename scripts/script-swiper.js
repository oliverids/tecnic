let windowWidth = window.innerWidth;

let servicosSlider = new Swiper(".card-slider", {
  spaceBetween: windowWidth < 1366 ? 20 : 32,
  centeredSlides: false,
  slidesPerView: 'auto',
  pagination: {
    el: ".card-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

let depoimentosSlider = new Swiper(".depoimentos-slider", {
  spaceBetween: windowWidth < 1366 ? 16 : 40,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el: ".depoimento-pagination",
    clickable: true,
  },
});