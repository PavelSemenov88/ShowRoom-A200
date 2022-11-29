'use strict';

const formTestDrive = document.querySelector('.form-test-drive');
const modalForm = document.querySelector('.modal__form')

const forms = [formTestDrive, modalForm];

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {};
    for (let { name, value } of form.elements) {
      if (name && value.trim() !== '') {
        data[name] = value;
      }
    }
    if (Object.keys(data) == 0) {
      alert('Заполните форму');
      form.reset();
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.status === 200 || response.status === 201) {
            return response.json();
          } else {
            throw new Error(response.status)
          }
        })
        .then(data => {
          alert('Данные успушно сохранены!');
          form.reset();
          
          const modal = document.querySelector('.modal');
          if (form.classList.contains('modal__form')) {
            modal.classList.add('hidden');
          }
          
          console.log(data)
        })
        .catch(error => {
          alert('ERROR: ' + error.message)
        })
    }
  
  
  
  })
})

