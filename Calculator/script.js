const display = document.getElementById('result');

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendToDisplay(key);
  } else if (['+', '-', '*', '/', '%'].includes(key)) {
    appendToDisplay(key);
  } else if (key === '.') {
    appendToDisplay('.');
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLastChar();
  } else if (key === 'Escape') {
    clearDisplay();
  }

  if (['Enter', '=', 'Backspace', 'Escape'].includes(key)) {
    event.preventDefault();
  }
});

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    expression = expression.replace(/×/g, '*');
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'خطأ';
  }
}
