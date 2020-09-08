const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  secondNumber: null,
  inverseNumber: false,
  waitingForSecondNumber: false,
  equal: false,
};

function updateDisplay() {
  document.querySelector('#displayNumber').innerText =
    `${calculator.displayNumber}${calculator.operator === null ? '' : calculator.operator}${calculator.secondNumber === null ? '' : calculator.secondNumber}`;
};

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.equal = false;
};

function inputDigit(digit) {
  if (calculator.equal) {
    clearCalculator();
    console.log('masuk');
  }

  if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
    calculator.secondNumber = digit;
  }
  else {
    if (calculator.displayNumber === '0') {
      // console.log(digit);
      calculator.displayNumber = digit;
      calculator.firstNumber = digit;
    } else {
      console.log(digit);
      if (calculator.inverseNumber) {
        // calculator.displayNumber += digit * -1;
        calculator.firstNumber += digit * -1;
      }
      calculator.displayNumber += digit;
    }
  }
};

function inverseNumber() {
  if (!calculator.inverseNumber) {
    return;
  }
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
};


function handleOperator(operator) {
  if (calculator.firstNumber === null) {
    if (calculator.equal) {
      clearCalculator();
      console.log('masuk');
    }
    // to do
    console.log('masuk');
    calculator.displayNumber = '-';
    calculator.inverseNumber = true;
    return;
  }
  if (!calculator.waitingForSecondNumber) {
    calculator.operator = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
  } else {
    alert('Operator sudah ditetapkan')
  }
};

function performCalculation() {
  if (calculator.firstNumber === null || calculator.operator === null) {
    alert('Tetapkan operator terlebih dahulu!');
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.secondNumber);
  }
  else if (calculator.operator === "×") {
    result = parseInt(calculator.firstNumber) * parseInt(calculator.secondNumber);
  }
  else if (calculator.operator === "÷") {
    result = parseInt(calculator.firstNumber) / parseInt(calculator.secondNumber);
    console.log(result);
  }
  else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.secondNumber);
  }

  calculator.displayNumber = result;
  calculator.secondNumber = null;
  calculator.firstNumber = null;
  calculator.operator = null;
  calculator.equal = true;
}

const buttons = document.querySelectorAll('.button');

[...buttons].forEach(button => {
  button.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains('operator')) {
      handleOperator(target.innerText)
      updateDisplay();
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
});