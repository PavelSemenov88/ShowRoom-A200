'use strict';

const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelectorAll('.main__scroll');

const newArray = [...linksHead, ...mainScroll]

newArray.forEach(linkHead => {
  linkHead.addEventListener('click', (event) => {
    event.preventDefault()
    const ID = event.target.getAttribute('href').slice(1);

    const elems = document.querySelector(`#${ID}`);
    elems.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

  })
})