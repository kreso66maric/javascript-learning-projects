const currentValueText = document.querySelector('.current-value');
const previousValueText = document.querySelector('.previous-value');
const del = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const numbers = document.querySelectorAll('#num');
const operations = document.querySelectorAll('.ops');
const equals = document.getElementById('equals');

class Calculator {
    constructor(previousValueText, currentValueText) {
        this.previousValueText = previousValueText;
        this.currentValueText = currentValueText;
        this.clear();
    };

    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
    };

    delete() {

    };

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber = this.currentNumber.toString() + number.toString();
    };

    chooseOperation(operation) {

        if (this.currentNumber === '') return;

        if (this.previousNumber !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    };

    compute() {
         let computation;
         const prev = parseFloat(this.previousNumber);
         const current = parseFloat(this.currentNumber);
         if (isNaN(prev) || isNaN(current)) return;
         switch (this.operation) {
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '&#xd7;':
                computtion = prev * current;
                break
            case '&#xf7;':
                computation = prev / current;
                break   
            default:
                return;          
        };
        this.currentNumber = computation;
        this.operation = undefined;
        this.previousNumber = '';
    };

    updateDisplay() {
        this.currentValueText.innerText = this.currentNumber;
        this.previousValueText.innerText = this.previousNumber;
    };
};

const calculator = new Calculator(previousValueText, currentValueText);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerText);
        calculator.updateDisplay();
    });
});

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.innerText);
        calculator.updateDisplay();
    });
});

equals.addEventListener('click', equal => {
    calculator.compute();
    calculator.updateDisplay();
});