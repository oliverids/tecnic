let servicosSlider = new Swiper(".card-slider", {
  spaceBetween: 20,
  centeredSlides: false,
  slidesPerView: 'auto',
  pagination: {
    el: ".card-pagination",
    clickable: true,
  },
});

let depoimentosSlider = new Swiper(".depoimentos-slider", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: 'auto',
  pagination: {
    el: ".depoimento-pagination",
    clickable: true,
  },
});