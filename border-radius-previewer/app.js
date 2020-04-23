const outputBorder = document.querySelector('.output-wrapper');
const borderInputs = document.querySelectorAll('.border-corner');
const sliders = document.querySelectorAll('input[type="range"]');
const btn = document.querySelector('.btn');
let output = document.querySelector('.output');
let outputParOne = document.querySelector('#output-1');
let outputParTwo = document.querySelector('#output-2');
let outputParThree = document.querySelector('#output-3');
let topLeft = '0';
let topRight = '0';
let bottomLeft = '0';
let bottomRight = '0';

// slider.addEventListener('mousedown', (e) => {
//     output.style.borderRadius = `${e.target.value}${e.target.dataset.sizing}`;
// });

// slider.addEventListener('mousemove', (e) => {
//         console.log(e.target.value + e.target.dataset.sizing)
//     output.style.borderRadius = `${e.target.value}${e.target.dataset.sizing}`;
// });

function handleChange(e) {
    // console.log(`input ${e.target.id} value is ${e.target.value}${e.target.dataset.sizing}`);
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
       };

       outputBorder.style.borderTopLeftRadius = `${topLeft}${e.target.dataset.sizing}`;
       outputBorder.style.borderTopRightRadius = `${topRight}${e.target.dataset.sizing}`;
       outputBorder.style.borderBottomLeftRadius = `${bottomLeft}${e.target.dataset.sizing}`;
       outputBorder.style.borderBottomRightRadius = `${bottomRight}${e.target.dataset.sizing}`;
        
};

function handleOutput(e) {
    outputParOne.textContent = `-webkit-border-radius: ${topLeft}${e.target.dataset.sizing} ${topRight}${e.target.dataset.sizing} ${bottomRight}${e.target.dataset.sizing} ${bottomLeft}${e.target.dataset.sizing};`;
    outputParTwo.textContent = `-moz-border-radius: ${topLeft}${e.target.dataset.sizing} ${topRight}${e.target.dataset.sizing} ${bottomRight}${e.target.dataset.sizing} ${bottomLeft}${e.target.dataset.sizing};`;
    outputParThree.textContent = `border-radius: ${topLeft}${e.target.dataset.sizing} ${topRight}${e.target.dataset.sizing} ${bottomRight}${e.target.dataset.sizing} ${bottomLeft}${e.target.dataset.sizing};`;
};

function copyToClip(){
    const tempTxt = document.createElement("textarea")
    tempTxt.value = output.textContent
    document.body.appendChild(tempTxt)
    tempTxt.select()
    document.execCommand("copy")
    document.body.removeChild(tempTxt)
  };


sliders.forEach(slider => {
    slider.addEventListener('mousemove', (e) => {
        handleChange(e);
        handleOutput(e);
    });
    slider.addEventListener('change', (e) => {
        handleChange(e);
        handleOutput(e);
    });
});

btn.addEventListener('click', () => {
    copyToClip();
});

