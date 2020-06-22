import './style.css';

document.querySelector('.display').textContent = '1234';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.keyboard__button');
const reset = document.querySelector('.keyboard__button--reset');
const save = document.querySelector('.keyboard__button--save');

let arrayNumber = [];
buttons.forEach(button => {
  button.addEventListener('click', () => {
      if(button.dataset.value === '99' || button.dataset.value === '-99' ){
        return
      } else {
arrayNumber.push(button.dataset.value)
    console.log(arrayNumber)
      }
  })
})
save.addEventListener('click', () => {
  const numbers = arrayNumber.join('');
display.textContent = numbers
})

reset.addEventListener('click', () => {
  arrayNumber = [];
  display.textContent = arrayNumber
})