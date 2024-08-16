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