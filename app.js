
// Select elements.
const numberButtons = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('#equals');
const screenBottom = document.querySelector('#screen-bottom');
const screenTop = document.querySelector('#screen-top');
const clear = document.querySelector('#clear');
const erase = document.querySelector('#delete');
const special = document.querySelectorAll('.special');

// CSS colors for calculator screen.
screenTop.classList.add('green');
screenTop.style.textAlign = "right";
screenBottom.classList.add('white');
screenBottom.style.textAlign = "right";

// Initializing variables and arrays
let number = ' ';
let decimalNumber;
let aux = 0;
let screen = '';
let array = [];

// Function to add text to the screen variable, which we will later use to convert into a mathematical operation.
//It also checks that there is no more than one decimal point per operation.
numberButtons.forEach(num => {
  num.addEventListener('click', function () {
    number = num.textContent;
    aux += number;
    decimalNumber = parseFloat(aux);
    screenBottom.textContent = '';
  
    if (number == '.' && !array.includes('.')) {
      screen = screenTop.textContent += number;
      array.push(number);
    } else if (number != '.') {
      screen = screenTop.textContent += number;
      array.push(number);
    }
  })
});

// Function to show/hide background on mouse-over number buttons.
numberButtons.forEach(num => {
  num.addEventListener('mouseenter', function () {
    num.classList.add('orange');
  });
  num.addEventListener('mouseleave', function () {
    num.classList.remove('orange');
  })
});

// Function to show/hide background on mouse-over operations buttons.
operations.forEach(ele => {
  ele.addEventListener('mouseenter', function () {
    ele.classList.add('blue');
  });
  ele.addEventListener('mouseleave', function () {
    ele.classList.remove('blue');
  })
});

// Function to show/hide background on mouse-over delete, erase and equal buttons.
special.forEach(ele => {
  ele.addEventListener('mouseenter', function () {
    ele.classList.add('violet');
  });
  ele.addEventListener('mouseleave', function () {
    ele.classList.remove('violet');
  })
});

// Function to validate that there are not two operation signs in a row.
operations.forEach(ele => {
  ele.addEventListener('click', function () {
    const operation = ele.textContent;
    if (screen[screen.length - 2] != '+' && screen[screen.length - 2] != '-' && screen[screen.length - 2] != '*'
    && screen[screen.length - 2] != '/' && screen[screen.length - 1] != '.') {
    screen = screenTop.textContent += ' ' + operation + ' ';
    array = [];
  }
  })
});

//Function to transform the entered text into a mathematical operation.
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

// addEventListener by clicking on the equals button and rounding the result to 4 decimal places at most.

equals.addEventListener('click', function () {
  if (calculateString(screen) != 'Infinity') {
    screenBottom.textContent = Math.round(calculateString(screen) * 10000) / 10000;;
  } else {
    alert('You cannot divide by 0');
  }

});

// addEventListener by clicking on the AC button.
clear.addEventListener('click', function () {
  screenBottom.textContent = '';
  screenTop.textContent = '';
})

// addEventListener by clicking on the C button.
erase.addEventListener('click', function () {
  screen = screen.slice(0, -1);
  screenTop.textContent = screen;
})

// addEventListener to run the calculator with the keyboard.

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName == 1 || keyName == 2 || keyName == 3 || keyName == 4 ||
    keyName == 5 || keyName == 6 || keyName == 7 || keyName == 8 || keyName == 9 || keyName == 0
    || keyName == '.') {
    number = keyName;
    aux += number;
    decimalNumber = parseFloat(aux);
    screenBottom.textContent = '';
    if (number == '.' && !array.includes('.')) {
      screen = screenTop.textContent += number;
      array.push(number);
    } else if (number != '.') {
      screen = screenTop.textContent += number;
      array.push(number);
    }
  };

  if ((keyName == '+') && ((screen[screen.length - 2] != '+' && screen[screen.length - 2] != '-' && screen[screen.length - 2] != '*'
    && screen[screen.length - 2] != '/' && screen[screen.length - 1] != '.'))) {
    screen = screenTop.textContent += ' + ';
    array = [];
  };

  if (keyName == '=') {
    if (calculateString(screen) != 'Infinity') {
      screenBottom.textContent = Math.round(calculateString(screen) * 10000) / 10000;;
    } else {
      alert('You cannot divide by 0');
    }
  }

  if (keyName == 'Backspace') {
    screen = screen.slice(0, -1);
    screenTop.textContent = screen;
  }

if (keyName == '-') {
  if (screen[screen.length - 2] != '+' && screen[screen.length - 2] != '-' && screen[screen.length - 2] != '*'
    && screen[screen.length - 2] != '/' && screen[screen.length - 1] != '.') {
    screen = screenTop.textContent += ' - ';
    array = [];
  }
}
if (keyName == '*') {
  if (screen[screen.length - 2] != '+' && screen[screen.length - 2] != '-' && screen[screen.length - 2] != '*'
    && screen[screen.length - 2] != '/' && screen[screen.length - 1] != '.') {
    screen = screenTop.textContent += ' * ';
    array = [];
  }
}

if (keyName == '/') {
  if (screen[screen.length - 2] != '+' && screen[screen.length - 2] != '-' && screen[screen.length - 2] != '*'
    && screen[screen.length - 2] != '/' && screen[screen.length - 1] != '.') {
    screen = screenTop.textContent += ' / ';
    array = [];
  }
}
});
