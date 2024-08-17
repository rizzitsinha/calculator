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

let firstOperand;
let secondOperand;
let operator;

function operate(firstOperand, secondOperand, operator){
    return operator(firstOperand, secondOperand);
}

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

