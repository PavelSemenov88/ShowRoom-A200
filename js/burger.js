'use strict';

const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu-list__link')

burger.addEventListener('click', (e) => {
  burger.classList.toggle('humburger-menu-active');
  menuElem.classList.toggle('menu-active');
});


menuList.forEach(menu => {
  menu.addEventListener('click', () => {
    burger.classList.remove('humburger-menu-active');
    menuElem.classList.remove('menu-active');
  })
})
