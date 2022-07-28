// GLOBAL VARIABLE

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

let moves = ['rock', 'paper', 'scissor']


function getComputerChoice() {
    let rand = Math.random()
    if (rand < 0.33) {
        return 'rock'
    }
    if (rand >= 0.33 && rand < 0.66) {
        return 'paper'
    }
    if (rand >= 0.66 && rand < 1) {
        return 'scissor'
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if ((playerChoice == 'rock' && computerChoice == 'scissor') || 
        (playerChoice == 'scissor' && computerChoice == 'paper') || 
        (playerChoice == 'paper' && computerChoice == 'rock')) {
            return 1
        }
    else if (playerChoice === computerChoice) {
        return 0
    }
    else {
        return -1
    }
}

function fetchImage(choice) {
    if (choice === 'rock') {
        return './images/rock.png'
    } 
    else if (choice === 'paper') {
        return './images/paper.png';
    }
    else {
        return './images/scissor.png';
    }
}

function editScoreboard() {
    let score = document.querySelector('.score');
    score.innerHTML = String(playerScore) + ' : ' + String(computerScore);
}

function updateScores(result) {
    if (result === 1) {
        playerScore += 1;
        currentRound += 1;
    }
    else if (result === -1) {
        computerScore += 1;
        currentRound += 1;
    }
    editScoreboard();
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    editScoreboard();
}

function getMessage(result, playerChoice, computerChoice) {
    if (result === 1) {
        return 'You won the round! ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + ' Beats ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } 
    else if (result === 0) {
        return 'Tie! Go again'
    } 
    else if (result === -1) {
        return 'You lose the round! ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' Beats ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }
}

function printMessage(result, playerChoice, computerChoice) {
    let res = document.querySelector('.res');
    if (playerScore !== 3 && computerScore !== 3) {
        res.innerHTML = getMessage(result, playerChoice, computerChoice);
    } else {
        if (playerScore > computerScore) {
            res.innerHTML = 'You won the game!!'
        } else {
            res.innerHTML = 'You lost the game..'
        }

        let ingame = document.querySelector('.ingame');
        let btnContainer = document.createElement('div');
        btnContainer.className = 'start-game-btn';
        let btn = document.createElement('button');
        btn.innerHTML = 'Play Again';
        btnContainer.appendChild(btn);
        btn.onclick = () => {
            window.location.reload();
        };
        ingame.appendChild(btnContainer);
    }
}

function startGame() {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn, key) => {
        let playerChoice = moves[key];

        btn.addEventListener('click', (e) => {
            let computerChoice = getComputerChoice();

            let computerImg = document.querySelector('.computer-img');
            computerImg.src = fetchImage(computerChoice);

            let playerImg = document.querySelector('.player-img');
            playerImg.src = fetchImage(playerChoice);

            let result = playRound(playerChoice, computerChoice);

            updateScores(result);
            printMessage(result, playerChoice, computerChoice);
        })
    })
}

function stopGame() {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn, key) => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        }, true)
    })
}

let sbtn = document.querySelector('.sbtn');
sbtn.onclick = () => {
    let res = document.querySelector('.result');
    let pregame = document.querySelector('.pregame');
    pregame.remove();
    res.innerHTML = '<div class="ingame"><div class="score">0 : 0</div><div class="res"></div></div>';
    startGame();
}

// Check for possible victory
setInterval(() => {
    if (playerScore === 3 || computerScore === 3) {
        stopGame();
    }
}, 500)
