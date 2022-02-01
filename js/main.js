document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------------------
  // 1. Реализовать слайдер в hero-блоке.
  // -------------------------------------------------------------------------------------
  new Swiper('.swiper-container', {
    autoplay: { delay: 4000 },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  // -------------------------------------------------------------------------------------
  // 2. Реализовать табы в секции “Как мы работаем”.
  // -------------------------------------------------------------------------------------
  const tabsButtons = document.querySelectorAll('.tabs__btn');
  const contentBlocks = document.querySelectorAll('.tab-content');

  tabsButtons.forEach(tabsBtn => {
    tabsBtn.addEventListener('click', event => {
      tabsButtons.forEach(tabsBtn => tabsBtn.classList.remove('tabs__btn--active'));
      const path = event.currentTarget.dataset.path;

      contentBlocks.forEach(tabContent => {
        tabContent.classList.remove('tab-content--active');
      });

      tabsBtn.classList.add('tabs__btn--active');
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
    });
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
});
