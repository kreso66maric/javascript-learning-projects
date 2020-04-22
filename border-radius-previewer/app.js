const output = document.querySelector('.output-wrapper');
const borderInputs = document.querySelectorAll('.border-corner');

let topLeft;
let topRight;
let bottomLeft;
let bottomRight;

console.log(borderInputs);
borderInputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        console.log(`input ${e.target.id} value is ${e.target.value}`);
        if (e.target.id === 'corner-1') {
             topLeft = e.target.value
        }
        switch (e.target.id) {
            case 'corner-1':
                topLeft = e.target.value;
                break;
            case 'corner-2':
                topRight = e.target.value;
                break;
            case 'corner-3':
                bottomLeft = e.target.value;
                break;
            case 'corner-4':
                bottomRight = e.target.value;
        }

        output.style.borderTopLeftRadius = `${topLeft}px`;
        output.style.borderTopRightRadius = `${topRight}px`;
        output.style.borderBottomLeftRadius = `${bottomLeft}px`;
        output.style.borderBottomRightRadius = `${bottomRight}px`;
    });
});