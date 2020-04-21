const form = document.querySelector('#form');
const input = document.querySelector('input[type="text"]');
const output = document.querySelector('.output');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = document.querySelector('input[type="text"]').value;
    output.textContent = parseInt(value, 2);
    input.value = '';
});