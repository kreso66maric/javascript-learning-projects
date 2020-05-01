const viewer = document.getElementById('viewer');
const del = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const numbers = document.querySelectorAll('#num');
const ops = document.querySelectorAll('.ops');
const equals = document.getElementById('equals');

let numArray = [];
let numbersToAdd;
// Looping over numbers
numbers.forEach(nums => {
    // Listening for a click
    nums.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log(`you clicked number ${parseInt(e.target.value)}`);
        // Storing numbr to the array
        numArray.push(parseInt(e.target.value));
        // Displaying the numbers to the screen
        viewer.textContent = numArray.join('');
        console.log(numArray.join(''));

    });
});

// Button to clear all numbers from the screen
clearAll.addEventListener('click', () => {
    numArray = [];
    viewer.textContent = 0;
});


// Button to delete last num from the screen
del.addEventListener('click', () => {
    numArray.pop();
    viewer.textContent = numArray.join('');
    if (numArray.length < 1) {
        viewer.textContent = 0;
    }
    console.log(numArray);
});

// Logic for operation buttons
ops.forEach(item => item.addEventListener('click', (e) => {
    console.log(e.target.dataset.ops);
    // if plus was clicked, store last numbers
    if (e.target.dataset.ops === 'plus') {
        numbersToAdd = numArray.join('');
        numArray = [];
        console.log(parseInt(numbersToAdd));
    }
    


}));

// Logic for equals button
equals.addEventListener('click', () => {
   console.log('equals') ;
   let addedNumbers = parseInt(numbersToAdd) + parseInt(numArray);
   viewer.textContent = addedNumbers;
   console.log(addedNumbers);
});