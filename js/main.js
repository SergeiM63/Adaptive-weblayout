// -------------------------------------------------------------------------------------
// 1. Реализовать слайдер в hero-блоке.
// -------------------------------------------------------------------------------------

const swiper = new Swiper('.swiper-container', {
  autoplay: { delay: 4000 },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// -------------------------------------------------------------------------------------
// 3. Реализовать аккордеон в секции “часто задаваемые вопросы”.
// -------------------------------------------------------------------------------------

// $(function() {
//   $( "#accordion" ).accordion({heightStyle: "content"});
// });

// $( function() {
//   $("#accordion").accordion({
//     collapsible: true});
// } );

// -------------------------------------------------------------------------------------
// 4. Реализовать открытие и закрытие бургер меню в мобильной и планшетной версиях сайта.
// -------------------------------------------------------------------------------------

const burger = document.querySelector('.burger');
const menuList = document.querySelector('.header__nav');
const body = document.body;
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.nav__list-item-link');

burger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('burger--active');
  menuList.classList.toggle('header__nav--active');
  body.classList.toggle('lock-scroll');
  overlay.classList.toggle('overlay--active');
});

menuLinks.forEach(element => {
  element.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menuList.classList.remove('header__nav--active');
    body.classList.remove('lock-scroll');
    overlay.classList.remove('overlay--active');
  });

  overlay.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menuList.classList.remove('header__nav--active');
    body.classList.remove('lock-scroll');
    overlay.classList.remove('overlay--active');
  });
});
// -------------------------------------------------------------------------------------
