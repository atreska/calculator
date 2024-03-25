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

for (let btn of numButtons) {
    btn.addEventListener('click', (e) => {
        appendNumber(e.target.textContent);
    })
}


