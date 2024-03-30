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

function defaultZero() {
    display.textContent = '0';
}

function clearDefaultZero(arr) {
    if (operationValues[0] == 0 && operationValues[1] == 0 && operationValues[2] == 0) {
        return true;
    }

    return false;
}

function deleteNumber() {
    if (display.textContent == currentValue) {
        return
    }

    let number = display.textContent;
    let deletedNumber = number.slice(0, -1)
    display.textContent = deletedNumber;
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
//show 0 as default display
defaultZero();

//on and off switch to clear the current total the first time around.
let clearTotal = 0;
let checkDisplayLength = 0;

let numButtons = document.querySelectorAll('.num');
for (let btn of numButtons) {
    btn.addEventListener('click', (e) => {
        if (checkDisplayLength >= 9) {
            return;
        }

        if (display.textContent == 0 && display.textContent.length <= 1) {
            display.textContent = '';
        }
        //used to delete the current value that is showing 
        if (clearTotal === 1) {
            display.textContent = '';
            clearTotal = 0;
        }

        clearDisplay();
        appendNumber(e.target.textContent);
        checkDisplayLength++;
    })
}

let decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (e) => {
    appendDecimal(decimal);
    console.log(display.textContent);

})

let clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
    clearEverything();
    display.textContent = 0;
});

let deleteANumber = document.querySelector('.delete');
deleteANumber.addEventListener('click', (e) => {
    if (display.textContent === 'Error') {
        return;
    } else if (display.textContent == 0 && display.textContent.length <= 1) {
        return;
    } else if (display.textContent != 0 && display.textContent.length <= 1) {
        display.textContent = 0;
        return;
    }
    deleteNumber();
})

let currentValue = undefined;

let operator = document.querySelectorAll('.operator');

for (let btn of operator) {
    btn.addEventListener('click', (e) => {

        if (checkArray(operationValues)) {
            console.log(operationValues);
            if (operationValues[0] === '') {
                operationValues[0] = parseFloat(display.textContent);
                // display.textContent = '';
                clearTotal = 1;
            } else if (operationValues[1] === '') {
                operationValues[1] = e.target.textContent;
            } else {
                operationValues[2] = parseFloat(display.textContent);

                if (operationValues[1] == '/' && operationValues[2] == 0) {
                    display.textContent = 'Error';
                    return;
                }

                display.textContent = operate(operationValues[0], operationValues[1], operationValues[2]);
                currentValue = operate(operationValues[0], operationValues[1], operationValues[2]);
                clearArray(operationValues);
                operationValues[0] = currentValue;
                console.log(operationValues);

            }
            operationValues[1] = e.target.textContent;
            checkDisplayLength = 0;
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
            operationValues[2] = parseFloat(display.textContent);

            //division by zero error
            if (operationValues[1] == '/' && operationValues[2] == 0) {
                display.textContent = 'Error';
                return;
            }

            display.textContent = operate(operationValues[0], operationValues[1], operationValues[2]);
            currentValue = operate(operationValues[0], operationValues[1], operationValues[2]);
            clearArray(operationValues);
            operationValues[0] = currentValue;
            console.log(operationValues);
        } else
            return
    }

    checkDisplayLength = 0;

})