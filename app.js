const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#decimal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const equals = document.querySelector('#equals');
const screenBottom = document.querySelector('#screen-bottom');
const screenTop = document.querySelector('#screen-top');
const clear = document.querySelector('#clear');

let number = 0;
let updateNumber = 0;
let operation = '+';
let decimalNumber;

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine, decimal];

for (let num of numbers) {
  num.addEventListener('click', function () {
    number += num.textContent;
    decimalNumber = parseFloat(number);
    console.log(parseFloat(number));
    screenBottom.textContent = '';
    screenTop.textContent = decimalNumber;
    
  });
  
}

function operate() {
  if (operation == '+') {
    updateNumber += decimalNumber;
  } else if (operation == '-') {
    updateNumber -= decimalNumber;
  } else if (operation == '*') {
    updateNumber *= decimalNumber;
  } else if (operation == '/') {
    updateNumber /= decimalNumber;
  }
}

add.addEventListener('click', function () {
  operate();
  console.log(updateNumber);
  operation = '+';
  screenTop.textContent += ' + ';
  number = 0;

});

subtract.addEventListener('click', function () {
  operate();
  console.log(updateNumber);
  operation = '-';
  number = 0;
});

multiply.addEventListener('click', function () {
  operate();
  console.log(updateNumber);
  operation = '*';
  number = 0;
});

divide.addEventListener('click', function () {
  operate();
  console.log(updateNumber);
  operation = '/';
  number = 0;
});

equals.addEventListener('click', function () {
  operate();
  console.log(updateNumber);
  number = 0;
  screenBottom.textContent = updateNumber;
  updateNumber = 0;
});

clear.addEventListener('click', function() {
  number = 0;
  screenBottom.textContent = '';
  screenTop.textContent = '';
  updateNumber = 0;
})