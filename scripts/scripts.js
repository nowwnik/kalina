const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  autheight: true,
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
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  }
});

function copyEmail() {
  navigator.clipboard.writeText
      ("spkkalina@mail.ru");
}

function copyPhone() {
  navigator.clipboard.writeText
      ("+7(34372) 5-36-91");
}