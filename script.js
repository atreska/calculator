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

let num1 = undefined;
let num2 = undefined;
let currentTotal = undefined;

let display = document.querySelector('.selection');
let displayButtons = document.querySelectorAll('.will-display');
display.textContent = '0'

function btnDisplay(buttons) {
    for (let btn of buttons) {
        btn.addEventListener('click', (e) => {
            console.log(currentTotal);
            if (display.textContent === '0') {
                display.textContent = btn.textContent;
            } else if (currentTotal !== undefined) {
                display.textContent = btn.textContent;
                console.log('in if statement for buttons')
            } else
                display.textContent += btn.textContent;

        })
    }
}

btnDisplay(displayButtons);

let operators = document.querySelectorAll('.operator');

for (let number1 of operators) {
    number1.addEventListener('click', (e) => {
        if (num1 === undefined) {
            num1 = parseInt(display.textContent);
            console.log(`Num 1 = ${num1}`);
            operator = number1.textContent;
            console.log(operator);
            display.textContent = '';
        } else if (num2 === undefined) {
            num2 = parseInt(display.textContent)
            console.log(`Num 2 = ${num2}`);
            display.textContent = '';
            display.textContent = operate(num1, operator, num2);
            console.log('in 2nd if!')
        } else if (num1 !== undefined && num2 !== undefined) {
            currentTotal = display.textContent;
            // console.log(currentTotal);
            // display.textContent = '';
            display.textContent = operate(currentTotal, operator, num2);
            console.log('in 3rd if!')
        } else if (currentTotal !== undefined) {
            console.log('Were here!')
        }

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
    display.textContent = '0';
    num1 = undefined;
    num2 = undefined;
})

