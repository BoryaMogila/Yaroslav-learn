const calculator = document.getElementById('calculator');

const operations = {
    addition, minus, multiplication, division,
}

calculator.onsubmit = function (e) {
    e.preventDefault();
    const numberOneElement = document.getElementById('numberOne');
    const numberTwoElement = document.getElementById('numberTwo');
    const operationElement = document.getElementById('operation');
    const numberOne = numberOneElement.value;
    const numberTwo = numberTwoElement.value;
    const operation = operationElement.value;
    const result = calculate (Number(numberOne), Number(numberTwo), operations[operation]);
    document.getElementById('result').innerHTML = result;
}

function addition(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

function calculate (a, b, operation) {
    return operation(a, b)
}

let i = 0;
do {
    i = i + 1
    console.log(i);
} while (i < 10) 

const numbers = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numbers.length; ++i) {
    console.log(numbers[i])
};