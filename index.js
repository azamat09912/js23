let firstNumber;
let operator;
let secondNumber;

let currentNumber = "";

const numberBtns = Array.from(document.getElementsByClassName("number"));
const display = document.getElementsByClassName("display")[0];

numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
       /*  if(prevesinput && operator){
            curreninput = calculate(prevesinput,currentinput,operator)
            display.value = currentinput
        } */
        currentNumber += btn.textContent;
        display.textContent = currentNumber;
    });
});

const opBtns = Array.from(document.getElementsByClassName("operator"));
opBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        firstNumber = currentNumber;
        operator = btn.textContent === 'x' ? '*' : btn.textContent;
        currentNumber = "";
    });
}); 


const equal = document.getElementsByClassName("equal")[0];
equal.addEventListener("click", () => {
    secondNumber = currentNumber;
    currentNumber = "";
    let result;
    
    switch(operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '*':
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case '/':
            result = parseInt(firstNumber) / parseInt(secondNumber);
            break;
        default:
            result = "Error";
    }
    
    display.textContent = result;
});

const clearBtn = document.getElementsByClassName("clear")[0]
clearBtn.addEventListener("click",() => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    currentNumber = "";
    display.textContent = "0"
})

const plusMinusBtn = document.getElementsByClassName("plus-minus")[0];
plusMinusBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        currentNumber = (parseFloat(currentNumber) * -1).toString();
        display.textContent = currentNumber;
    }
});


const percentBtn = document.getElementsByClassName("percent")[0];
percentBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        currentNumber = (parseInt(currentNumber) / 100).toString();
        display.textContent = currentNumber;
    }
});

const nukteBtn = document.getElementsByClassName("nukte")[0];
nukteBtn.addEventListener("click", () => {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        display.textContent = currentNumber;
    }
});












 