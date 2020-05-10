const x = '<div class="x"></div>';
const o = '<div class="o"></div>';
const block = document.querySelectorAll('.block');


block.forEach(block => block.addEventListener('click', (e) => {
    console.log(e.target.id);
    block.innerHTML = x;
}));
