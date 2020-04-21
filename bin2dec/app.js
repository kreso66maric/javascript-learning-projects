const form = document.querySelector('#form');
const input = document.querySelector('input[type="text"]');
const output = document.querySelector('.output');
let par = document.createElement('p');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = document.querySelector('input[type="text"]').value;
    let isNum = /^\d+$/.test(value);
    let isBinary = /^[01]+$/.test(value);
    if (isNum && isBinary) {
        output.textContent = parseInt(value, 2);
        document.querySelector('.wrapper').classList.remove('warning');
        par.remove();
    } else {
        document.querySelector('.wrapper').classList.add('warning');
        form.appendChild(par);
        par.textContent = 'Please enter binary number.';
        par.classList.add('warning-par');
    }
    input.value = '';
});

// par.remove();