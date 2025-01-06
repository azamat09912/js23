const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number')) {
            handleNumber(value);
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('clear')) {
            clear();
        } else if (button.classList.contains('plus-minus')) {
            plusMinus();
        } else if (button.classList.contains('percent')) {
            percent();
        } else if (button.classList.contains('nukte')) {
            addDecimal();
        } else if (button.classList.contains('ten')) {
            calculate();
        }

        updateDisplay();
    });
});

function handleNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
}

function handleOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result;
    operator = '';
    previousNumber = '';
}

function clear() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function plusMinus() {
    if (currentNumber === '') return;
    currentNumber = currentNumber * -1;
}

function percent() {
    if (currentNumber === '') return;
    currentNumber = currentNumber / 100;
}

function addDecimal() {
    if (currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + '.';
}

function updateDisplay() {
    display.textContent = currentNumber;
}
