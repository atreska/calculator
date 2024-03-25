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

function clearDisplay() {
    display.textContent = '';
}

function appendNumber(btnValue) {
    display.textContent += btnValue;
}

function appendDecimal(dec) {
    if (display.textContent.includes('.')) {
        return;
    } else
        display.textContent += dec.textContent;
}


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

let display = document.querySelector(".selection");

let numButtons = document.querySelectorAll('.num');
let decimal = document.querySelector('.decimal');

for (let btn of numButtons) {
    btn.addEventListener('click', (e) => {
        appendNumber(e.target.textContent);
    })
}

decimal.addEventListener('click', (e) => {
    appendDecimal(decimal);
})


