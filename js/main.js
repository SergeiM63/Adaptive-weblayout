// 4. Реализовать открытие и закрытие бургер меню в мобильной и планшетной версиях сайта.
// Burger Menu
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.nav__list');
const body = document.body;
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.nav__list-item-link');

burger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('burger--active');
  menuList.classList.toggle('nav__list--active');
  body.classList.toggle('lock-scroll');
  overlay.classList.toggle('overlay--active');
});

overlay.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  menuList.classList.remove('nav__list--active');
  body.classList.remove('lock-scroll');
  overlay.classList.remove('overlay--active');
});

menuLinks.forEach(element => {
  element.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menuList.classList.remove('nav__list--active');
    body.classList.remove('lock-scroll');
    overlay.classList.remove('overlay--active');
  });
});
