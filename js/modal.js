'use strict';

const modalBtns = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');


modalBtns.forEach(modalBtn => {
  modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  })
})

modal.addEventListener('click', (e) => {
  let className = e.target.className;

  if (className === 'modal__close' || className === 'overlay') {
    modal.classList.add('hidden');
  };
})