// Functions for basic operations
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

// function that calls on an operator function and two operands
function operate(firstOperand, secondOperand, operator){
    return operator(firstOperand, secondOperand);
}


// Giving functionality to digit buttons and adding the digits to the display and the variable displayValue
const digitButtons = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display-value");

let text = ""
display.textContent = text;
let displayValue;

digitButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let num = e.target.id;
        console.log(num);
        text += num;
        display.textContent = text;
        displayValue = +text;
        console.log(displayValue)
        
    })
})

// Storing value of first operand and operator
let firstOperand;
let secondOperand;
let operator;


const operatorButtons = document.querySelectorAll(".operator-btn");

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        operator = e.target.id;
        firstOperand = displayValue;
        text = "";
    })
})

// Performing operation

const equalityButton = document.querySelector(".equality-btn");

equalityButton.addEventListener(`click`, () => {
    secondOperand = displayValue;
    text = "";

    switch (operator) {
        case '+':
            let sum = add(firstOperand, secondOperand);
            display.textContent = sum;
            break;
        case '-':
            let difference = subtract(firstOperand, secondOperand);
            display.textContent = difference;
            break;
        case '*':
            let product = multiply(firstOperand, secondOperand);
            display.textContent = product;
            break;
        case '/':
            if(secondOperand === 0){
                display.textContent = "SIN!";
                break;
            }
            let quotient = divide(firstOperand, secondOperand);
            display.textContent = quotient;
            break;
    
        default:
            break;
    }
})


// Giving functionality to the clear button
const clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener('click', () => {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    text = "";
    display.textContent = "";
})