let displayValue = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(newOperator) {
    if (operator !== '' && displayValue !== '') {
        calculateResult();
    }
    operator = newOperator;
    firstOperand = parseFloat(displayValue);
    displayValue = '';
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function calculateResult() {
    if (operator === '' || displayValue === '') {
        return;
    }

    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            }else{
                alert('Cannot divide by zero!');
                clearDisplay();
                return;
            }
            break;
        default:
            break;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}