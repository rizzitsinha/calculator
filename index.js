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

// Function that calls on an operator function and two operands
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
        text += num;
        display.textContent = text;
        displayValue = +text;
        console.log(`I'm the current displayValue: ${displayValue}`)
        
    })
})

// Adding functinality to decimal-point button
const decimalPointButton = document.querySelector(".decimal-point-btn");

decimalPointButton.addEventListener('click', () => {
    console.log('decimal was clicked')
    if(!text.includes('.')){
        text += '.';
        display.textContent = text;
        displayValue = +text;
        console.log(`I'm the current displayValue: ${displayValue}`)

    }
})

// Giving functionality to toggle sign button
const toggleSignButton = document.querySelector(`.toggle-sign-btn`);

toggleSignButton.addEventListener(`click`, () => {
    text = display.textContent;
    text *= -1;
    display.textContent = text;
    displayValue = +text;
})

// Giving functionality to backspace button
const backspace = document.querySelector('.backspace');

backspace.addEventListener('click', () => {
    text = text.toString()
    let textArr = text.split("");
    textArr.pop();
    text = textArr.join("");
    display.textContent = text;
    displayValue = +text;
})

// Storing value of first operand and second operand
let firstOperand;
let secondOperand;
let operator;


const operatorButtons = document.querySelectorAll(".operator-btn");

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(firstOperand){
            firstOperand = equating();
        }
        else{
            firstOperand = displayValue;
        }
        operator = e.target.id;
        text = "";
    })
})

// Performing equality operation

const equalityButton = document.querySelector(".equality-btn");

equalityButton.addEventListener(`click`, () => {
    equating();
    clear();
})

// Function to equate
function equating(){
    secondOperand = displayValue;
    text = "";

    switch (operator) {
        case '+':
            let sum = add(firstOperand, secondOperand);
            if(!Number.isInteger(sum)){
                sum = sum.toFixed(2);
            }
            display.textContent = sum;
            console.log(`I'm the current sum: ${sum}`);
            return sum;

        case '-':
            let difference = subtract(firstOperand, secondOperand);
            if(!Number.isInteger(difference)){
                difference = difference.toFixed(2);
            }
            display.textContent = difference;
            return difference;

        case '*':
            let product = multiply(firstOperand, secondOperand);
            if(!Number.isInteger(product)){
                product = product.toFixed(2);
            }
            display.textContent = product;
            return product;

        case '/':
            if(secondOperand === 0){
                display.textContent = "SIN!";
                break;
            }
            let quotient = divide(firstOperand, secondOperand);
            if(!Number.isInteger(quotient)){
                quotient = quotient.toFixed(2);
            }
            display.textContent = quotient;
            return quotient;
    
        default:
            break;
    }

}


// Giving functionality to the clear button
const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener('click', () => {
    clear();
    display.textContent = "";
})
// Function to clear
function clear() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    text = "";
}