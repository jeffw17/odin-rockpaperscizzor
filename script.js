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
            return 'You Win! ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + ' Beats ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }
    else if (playerChoice === computerChoice) {
        return 'Tie Game!'
    }
    else {
        return 'You Lose! ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' Beats ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }
}

function checkValidInput(playerChoice) {
    if (playerChoice !== 'rock' && playerChoice !=='paper' && playerChoice !== 'scissor' && playerChoice !== null) {
        return false;
    } else {
        return true;
    }
}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt('Rock Paper Scizzor?', '');
//         while (playerChoice !== 'rock' && playerChoice !=='paper' && playerChoice !== 'scizzor' && playerChoice !== null) {
//             console.log('Invalid Input. Try Again!');
//             playerChoice = prompt('Rock Paper Scizzor?', '');
//         }
//         if (playerChoice === null) {
//             return;
//         }

//         let computerChoice = getComputerChoice();
        
//         let result = playRound(playerChoice, computerChoice);
//         console.log(result);
//     }
// }

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

function game() {
    let buttons = document.querySelectorAll('.btn');
    
    buttons[0].addEventListener('click', () => {
        let computerChoice = getComputerChoice();

        let computerImg = document.querySelector('.computer-img');
        computerImg.src = fetchImage(computerChoice);

        let playerImg = document.querySelector('.player-img');
        playerImg.src = fetchImage('rock');

        let result = playRound('rock', computerChoice);

        let res = document.querySelector('.result');
        res.innerHTML = result;
    })

    buttons[1].addEventListener('click', () => {
        let computerChoice = getComputerChoice();

        let computerImg = document.querySelector('.computer-img');
        computerImg.src = fetchImage(computerChoice);

        let playerImg = document.querySelector('.player-img');
        playerImg.src = fetchImage('paper');

        let result = playRound('paper', computerChoice);

        let res = document.querySelector('.result');
        res.innerHTML = result;
    })

    buttons[2].addEventListener('click', () => {
        let computerChoice = getComputerChoice();

        let computerImg = document.querySelector('.computer-img');
        computerImg.src = fetchImage(computerChoice);

        let playerImg = document.querySelector('.player-img');
        playerImg.src = fetchImage('scissor');

        let result = playRound('scissor', computerChoice);

        let res = document.querySelector('.result');
        res.innerHTML = result;


    })
}

game()