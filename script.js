function getComputerChoice() {
    let rand = Math.random()
    if (rand < 0.33) {
        return 'rock'
    }
    if (rand >= 0.33 && rand < 0.66) {
        return 'paper'
    }
    if (rand >= 0.66 && rand < 1) {
        return 'scizzor'
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if ((playerChoice == 'rock' && computerChoice == 'scizzor') || 
        (playerChoice == 'scizzor' && computerChoice == 'paper') || 
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


function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Rock Paper Scizzor?', '');
        while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scizzor') {
            console.log('Invalid Input. Try Again!');
            playerChoice = prompt('Rock Paper Scizzor?', '');
        }

        let computerChoice = getComputerChoice();
        
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
    }
}

game()