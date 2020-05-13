const xClass = 'x';
const oClass = 'o';
const blocks = document.querySelectorAll('.block');
const p1Score =document.getElementById('player-one-score');
const p2Score = document.getElementById('player-two-score');
const tie = document.getElementById('tie');
const winnerText = document.getElementById('winner-text');
const winnerModal = document.getElementById('winner-modal');
const playAgainBtn = document.getElementById('play-again');
const restartBtn = document.getElementById('restart');
const colorModeBtn = document.getElementById('switch-box');
const colorModeBall = document.getElementById('switch');

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let playerTurn;

let scores = {
    playerOneScore: 0,
    playerTwoScore: 0,
    tie: 0
};

function startGame() {
    playerTurn = true;
    blocks.forEach(block => {
        block.classList.remove(xClass);
        block.classList.remove(oClass);
        block.removeEventListener('click', handleClick);
        block.addEventListener('click', handleClick, { once: true });
        winnerModal.style.display = '';
    });
};

function handleClick(e) {
    const block = e.target;
    const currentClass = playerTurn ? xClass : oClass;
    // place mark
    placeMark(block, currentClass);

    // check for win
    if (handleWin(currentClass)) {
        endGame(false)
    } else if (handleDraw()) {
        // check for draw
        endGame(true)
    } else {
        // switch turns
        switchTurns();
    }
};

function placeMark(block, currentClass) {
    block.classList.add(currentClass);
};

function handleWin(currentClass) {
    return winCombinations.some(combination => {
      return combination.every(index => {
        return blocks[index].classList.contains(currentClass)
      });
    });
};

function handleDraw() {
    return [...blocks].every(block => {
        return block.classList.contains(xClass) || block.classList.contains(oClass);
    });
};

function switchTurns () {
    playerTurn = !playerTurn;
};

function handleModal() {
    playAgainBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
}

function restartGame() {
    scores.playerOneScore = 0;
    scores.playerTwoScore = 0;
    scores.tie = 0;
    p1Score.textContent = scores.playerOneScore;
    p2Score.textContent = scores.playerTwoScore;
    tie.textContent = scores.tie;
    winnerModal.style.display = '';
    startGame();
}



function endGame(draw) {
    if (draw) {
        // const modalContent = document.getElementById('modal-content');
        const h2 = document.getElementsByTagName('h2');
        scores.tie++;
        tie.textContent = scores.tie;
        winnerModal.style.display = 'block';
        h2[0].textContent = 'It\'s a draw!';
        handleModal();
    } else {
        if (playerTurn) {
            scores.playerOneScore++;
            p1Score.textContent = scores.playerOneScore;
            winnerText.textContent = 'Player One';
            winnerModal.style.display = 'block';
            handleModal();
        } else {
            scores.playerTwoScore++;
            p2Score.textContent = scores.playerTwoScore;
            winnerText.textContent = 'Player Two';
            winnerModal.style.display = 'block';
            handleModal();
        }
    }
}

colorModeBtn.addEventListener('click', () => {

    const main = document.getElementById('main');
    const boardScore = document.getElementById('board-score');

    colorModeBtn.style.border = '2px solid var(--black-color)';
    colorModeBall.classList.toggle('switch-move');
    main.classList.toggle('main-light');
    boardScore.classList.toggle('board-score-light');
    blocks.forEach(block => {
        block.classList.toggle('block-light');
        block.classList.toggle('x-dark');
        block.classList.toggle('o-dark');
    });
});


startGame();