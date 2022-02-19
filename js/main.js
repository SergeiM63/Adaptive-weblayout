document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------------------
  // 1. Реализовать слайдер в hero-блоке.
  // -------------------------------------------------------------------------------------
  new Swiper('.swiper-container', {
    autoplay: { delay: 4000 },
    loop: true,

    pagination: { el: '.swiper-pagination'}
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
      const content = document.querySelector(`[data-target="${path}"]`);
      const contentTitle = content.querySelector('.block__text-title');

      contentBlocks.forEach(tabContent => {
        tabContent.classList.remove('tab-content--active');
      });

      tabsBtn.classList.add('tabs__btn--active');
      content.classList.add('tab-content--active');
      contentTitle.focus();
    });
  });

  // -------------------------------------------------------------------------------------
  // 3. Реализовать аккордеон в секции “часто задаваемые вопросы”.
  // -------------------------------------------------------------------------------------
  const accordionListItem = document.querySelectorAll('.accordion');

  accordionListItem.forEach(listItem => {
    const accordionTitle = listItem.querySelector('.accordion__title');
    const accordionBtn = listItem.querySelector('.accordion__btn');
    const accordionContent = listItem.querySelector('.accordion__content');
    const accordionControl = listItem.querySelector('.accordion__control');

    listItem.addEventListener('click', (event) => {
      const self = event.currentTarget;

      listItem.classList.toggle('open');
      accordionTitle.classList.toggle('open');
      accordionBtn.classList.toggle('open');
      accordionContent.classList.toggle('open');

      if (self.classList.contains('open')) {
        accordionControl.setAttribute('aria-expanded', true);
        accordionContent.setAttribute('aria-hidden', false);
        accordionContent.setAttribute('tabindex', '0');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

      } else {
        accordionControl.setAttribute('aria-expanded', false);
        accordionContent.setAttribute('aria-hidden', true);
        accordionContent.setAttribute('tabindex', '-1');
        accordionContent.style.maxHeight = null;
      }
    });
  });

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
  // 5. Реализовать открытие и закрытие поля поиска по клику на кнопку-лупу.
  // -------------------------------------------------------------------------------------
  const searchBox = document.querySelector('.search');
  const searchInput = document.querySelector('.search__input');
  const searchOpenBtn = document.querySelector('.search__open');
  const searchResetBtn = document.querySelector('.search__reset');
  const windowWidth = window.screen.width;

  windowWidth <= 500 ? searchBox.style.top = '-10px' : searchBox.style.top;

  searchOpenBtn.addEventListener('click', () => {
    searchBox.classList.toggle('search--active');
    searchInput.classList.toggle('search__input--active')

    if (  searchInput.classList.contains('search__input--active') ) {
      searchInput.setAttribute('tabindex', '0');
      searchInput.setAttribute('aria-hidden', false);
      searchInput.focus();
      searchOpenBtn.setAttribute('aria-label', 'Закрыть Поиск');
    } else {
      searchInput.setAttribute('tabindex', '-1');
      searchInput.setAttribute('aria-hidden', true);
      searchOpenBtn.setAttribute('aria-label', 'Отрыть Поиск');
    }

    searchOpenBtn.classList.toggle('search__open--active');
    searchResetBtn.classList.toggle('search__reset--active');
  });

  searchResetBtn.addEventListener('click', () => { searchInput.value = '' });
});
