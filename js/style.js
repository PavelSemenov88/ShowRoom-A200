'use strict';

const btnAccordРeadings = document.querySelectorAll('.feature__link');
const accordTexts = document.querySelectorAll('.feature-sub');


btnAccordРeadings.forEach((btnAccordРeading, index) => {
  btnAccordРeading.addEventListener('click', () => {

    if (btnAccordРeading.classList.contains('feature__link_active')) {
        btnAccordРeading.classList.remove('feature__link_active');
        accordTexts[index].classList.add('hidden');

    } else {
      btnAccordРeadings.forEach(btnAccordРeading => {
        btnAccordРeading.classList.remove('feature__link_active');
      })
      btnAccordРeading.classList.add('feature__link_active');

      accordTexts.forEach(accordText => {
        accordText.classList.add('hidden');
      })
  
      accordTexts[index].classList.remove('hidden');
    }
  })
})
