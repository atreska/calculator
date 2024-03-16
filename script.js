function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let fistNum = 0;
let secondNum = 0;
let operator = '';

function operate(num1, opp, num2) {

    switch (opp) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.log('not a correct operator!');
    }

}

let display = document.querySelector('.selection');
let displayButtons = document.querySelectorAll('.will-display');
let displayValue = '';

for (let btn of displayButtons) {
    btn.addEventListener('click', (e) => {
        display.textContent += btn.textContent;
        displayValue = display.textContent;
    })
}

let num1 = 0;
let num2 = 0;


let operators = document.querySelectorAll('.operator');

for (let number1 of operators) {
    number1.addEventListener('click', () => {
        num1 = parseInt(display.textContent);
        console.log(`Num 1 = ${num1}`);
        operator = number1.textContent;
        console.log(operator);
        display.textContent = '';
    })
}

let equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    num2 = parseInt(display.textContent)
    console.log(`Num 2 = ${num2}`);
    display.textContent = '';

    display.textContent = operate(num1, operator, num2);
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    num1 = 0;
    num2 = 0;
})

