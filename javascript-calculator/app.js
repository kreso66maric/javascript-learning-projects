const viewer = document.getElementById('viewer');
const del = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const numbers = document.querySelectorAll('#num');


numbers.forEach(nums => {
    nums.addEventListener('click', (e) => {
        console.log(`you clicked number ${e.target.value}`);
        viewer.textContent = e.target.value;
    });
});
