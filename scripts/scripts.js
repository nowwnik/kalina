const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

function copyEmail() {
  navigator.clipboard.writeText
      ("spkkalina@mail.ru");
}

function copyPhone() {
  navigator.clipboard.writeText
      ("+7(34372) 5-36-91");
}