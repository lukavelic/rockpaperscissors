const signs = ['rock', 'paper', 'scissors'];

function computerPlay(signs){
    return signs[Math.floor(Math.random()*3)];
}

let userScore = 0;
let computerScore = 0;
let userChoice;

const buttons = document.querySelectorAll('.buttons');
const restart = document.getElementById('restart');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickFunction);
};

function restartGame(){
    userScore = 0;
    computerScore = 0;
    userChoice = '';
    playByPlay = document.getElementById('playthrough');
    playByPlay.innerText = 'Press one of the buttons to start playing!';
    pScore = document.getElementById('pScore');
    pScore.innerText = 'First one to 5 wins!';
    updateScore();
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', clickFunction);
    };
}

function endGame(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', clickFunction);
    };
}

restart.addEventListener('click', restartGame);

function clickFunction(event){
    let id = event.target.id;
    userChoice = id;
    game();
};

function updateScore(){
    const userScoreboard = document.getElementById('user');
    userScoreboard.innerText = `User: ${userScore}`;
    const compScoreboard = document.getElementById('computer');
    compScoreboard.innerText = `Computer: ${computerScore}`;
}

function playRound(){

    let computerChoice = computerPlay(signs);
    console.log(computerChoice);
    let playByPlay;

    if(userChoice == computerChoice){
        playByPlay = document.getElementById('playthrough');
        playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. It is a tie`;
    }
    if(userChoice == 'rock' && computerChoice == 'paper'){
        computerScore = computerScore + 1;
        playByPlay = document.getElementById('playthrough');
        playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. The computer wins.`;
    } else {
        if(userChoice == 'rock' && computerChoice == 'scissors'){
            userScore = userScore + 1;
            playByPlay = document.getElementById('playthrough');
            playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. You win.`;
            }
        }
    if(userChoice == 'paper' && computerChoice == 'rock'){;
        userScore = userScore + 1;
        playByPlay = document.getElementById('playthrough');
        playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. You win.`;
    } else {
        if(userChoice == 'paper' && computerChoice == 'scissors'){
            computerScore = computerScore + 1;
            playByPlay = document.getElementById('playthrough');
            playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. The computer wins.`;
            }
        }
    if(userChoice == 'scissors' && computerChoice == 'rock'){
        computerScore = computerScore + 1;
        playByPlay = document.getElementById('playthrough');
        playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. The computer wins.`;
    } else {
        if(userChoice == 'scissors' && computerChoice == 'paper'){
            userScore = userScore + 1;
            playByPlay = document.getElementById('playthrough');
            playByPlay.innerText = `You chose ${userChoice} and the computer chose ${computerChoice}. You win.`;
            }   
        }
    updateScore();
}

function game(){
    let pScore;
    if(userScore < 5 && computerScore < 5){
        playRound()
    }
    if(userScore > 4){
        pScore = document.getElementById('pScore');
        pScore.innerText = 'Congratulations, you won!';
        endGame()
    }
    if(computerScore > 4){
        pScore = document.getElementById('pScore');
        pScore.innerText = 'The machines have prevailed!';
        endGame()
    }
}
