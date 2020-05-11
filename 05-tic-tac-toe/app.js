const x = '<div class="x"></div>';
const o = '<div class="o"></div>';
const blocks = document.querySelectorAll('.block');

let playerTurn = true;

const playerOne = {
    
}

const allBlocks = blocks.forEach(block => block.addEventListener('click', handleClick, { once: true }));

function handleClick(e) {
    const block = e.target;
    const currentClass = playerTurn ? x : o;
    // place mark
    placeMark(block, currentClass)
    // check for win
    // check for draw
    // switch turns
    playerTurn = !playerTurn;
};

function placeMark(block, currentClass) {
    block.innerHTML = currentClass;
    console.log(block.id, currentClass);
}

function handleWin() {
}



