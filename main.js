var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: '.arrow',
  },
  loop: true,

  breakpoints: {
    540: {
      slidesPerView: 3,
    },
  },
});
let button = document.querySelector('.button');
let menuButton = document.querySelector('.menu-button');
console.log(menuButton);
let buttonPlay = document.querySelector('.play-button');
let headerNavigation = document.querySelector('.header-navigation');
console.log(headerNavigation);
menuButton.addEventListener('click', function(e) {
  headerNavigation.classList.toggle('header-active');
  this.classList.toggle('menu-button-active');
});

button.addEventListener('mouseenter', function(e) {
  if (this.classList.contains('bounceIn')) {
    this.classList.remove('bounceIn');
    this.classList.remove('delay-1s');
  }
  this.classList.add('bounce');
});
button.addEventListener('mouseleave', function(e) {
  this.classList.remove('bounce');
  console.log(1);
});

buttonPlay.addEventListener('mouseenter', function(e) {
  if (this.classList.contains('bounceIn')) {
    this.classList.remove('bounceIn');
    this.classList.remove('delay-2s');
  }
  this.classList.add('bounce');
});

buttonPlay.addEventListener('mouseleave', function(e) {
  this.classList.remove('bounce');
  console.log(1);
});
// $('[data-fancybox]').fancybox({
//   protect: true,
// });
