
const numberButtons = document.querySelectorAll('.number');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const equals = document.querySelector('#equals');
const screenBottom = document.querySelector('#screen-bottom');
const screenTop = document.querySelector('#screen-top');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#delete');

let number = 0;
let decimalNumber;
let aux = 0;
let screen;

numberButtons.forEach(num => {
  num.addEventListener('click', function () {
    number = num.textContent;
    aux += number;
    decimalNumber = parseFloat(aux);
    screenBottom.textContent = '';
    screen = screenTop.textContent += number;
  })
});

add.addEventListener('click', function () {
  screenTop.textContent += ' + ';
});

subtract.addEventListener('click', function () {
  screenTop.textContent += ' - ';
});

multiply.addEventListener('click', function () {
  screenTop.textContent += ' * ';
});

divide.addEventListener('click', function () {
  screenTop.textContent += ' / ';
});

function calculateString(str) {
  var valArr = str.split(/\s[+-/*]\s/),//split string on each operator (having a space either side allowing for a negative value)
    opArr = str.match(/\s[+-/*]\s/g);//return all operators from string

  for (var i = 0, len = valArr.length; i < len; i++) {
    //convert each value to a number instead of string
    valArr[i] = +valArr[i];
  }
  for (var i = 0, len = opArr.length; i < len; i++) {
    //cleanup whitespace from operators
    opArr[i] = opArr[i].trim();
  }

  var currentTotal = valArr[0];
  for (var i = 0, len = opArr.length; i < len; i++) {
    switch (opArr[i]) {
      case '+':
        currentTotal = currentTotal + valArr[i + 1];
        break;
      case '-':
        currentTotal = currentTotal - valArr[i + 1];
        break;
      case '*':
        currentTotal = currentTotal * valArr[i + 1];
        break;
      case '/':
        currentTotal = currentTotal / valArr[i + 1];
        break;
    }
  }
  return currentTotal;
}
equals.addEventListener('click', function () {
  screenBottom.textContent = calculateString(screen);
});

clear.addEventListener('click', function () {
  screenBottom.textContent = '';
  screenTop.textContent = '';
})

erase.addEventListener('click', function () {
  screen = screen.slice(0, -1);
  screenTop.textContent = screen;
})