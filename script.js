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
    if (currentValue !== undefined) {
        display.textContent = '';
        currentValue = undefined;
    }
}

function clearEverything() {
    clearArray(operationValues)
    display.textContent = '';
    currentValue = undefined;
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

function clearArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = '';
    }

}

function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr.includes('')) {
            return true;
        }
    }
    return false;
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

let operationValues = ['', '', ''];



let display = document.querySelector(".selection");

let numButtons = document.querySelectorAll('.num');
for (let btn of numButtons) {
    btn.addEventListener('click', (e) => {
        clearDisplay();
        appendNumber(e.target.textContent);
    })
}

let decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (e) => {
    appendDecimal(decimal);
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
    clearEverything();

});

let currentValue = undefined;

let operator = document.querySelectorAll('.operator');
for (let btn of operator) {
    btn.addEventListener('click', (e) => {
        if (checkArray(operationValues)) {
            console.log(operationValues);
            if (operationValues[0] === '') {
                operationValues[0] = parseInt(display.textContent);
                display.textContent = '';
            } else if (operationValues[1] === '') {
                operationValues[1] = e.target.textContent;
            } else {
                operationValues[2] = parseInt(display.textContent);
                display.textContent = operate(operationValues[0], operationValues[1], operationValues[2]);
                currentValue = operate(operationValues[0], operationValues[1], operationValues[2]);
                clearArray(operationValues);
                operationValues[0] = currentValue;
                console.log(operationValues);

            }
            operationValues[1] = e.target.textContent;

            console.log(operationValues);
        }
    })
}

let equals = document.querySelector('.equals');
equals.addEventListener('click', (e) => {
    if (checkArray(operationValues)) {
        if (operationValues[0] === '') {
            return
        } else if (operationValues[1] === '') {
            return;
        } else if (operationValues[2] === '') {
            operationValues[2] = parseInt(display.textContent);
            display.textContent = operate(operationValues[0], operationValues[1], operationValues[2]);
            currentValue = operate(operationValues[0], operationValues[1], operationValues[2]);
            clearArray(operationValues);
            operationValues[0] = currentValue;
            console.log(operationValues);
        } else
            return
    }

})