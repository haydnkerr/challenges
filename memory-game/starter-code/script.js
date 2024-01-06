let homeMenu = document.getElementById('home-menu-container')

let gameboard = document.getElementById('gameboard')
let startGameBtn = document.querySelector('.start-game-btn')
let slot = '';
let randomArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let randomNum
let playerOneScore = 0
let playerTwoScore = 0
let playerThreeScore = 0
let playerFourScore = 0

let playerOneFirstChoice = 0
let PlayerOneFirstChoice = 0
let playerOne = true

let firstChoiceActive = true
let firstChoice = []
let secondChoice = []

// In Game Menu Buttons
let resumeGameBtn = document.getElementById('resume-game-btn')
let newGameBtn = document.getElementById('new-game-btn')
let restartBtn = document.getElementById('restart-btn')
let inGameMenu = document.querySelector('.in-game-menu-container')
let inGameMenuBtn = document.getElementById('in-game-menu-btn')

inGameMenuBtn.addEventListener('click', toggleInGameMenu)
resumeGameBtn.addEventListener('click', resumeGame)

function toggleInGameMenu() {
    inGameMenu.classList.remove('display-none')
}

function resumeGame() {
    inGameMenu.classList.add('display-none')
}

/********* Gameboard **********/
let gamePiece = document.querySelectorAll('.game-piece')

let choiceOneValue
let choiceTwoValue
let numOfTurns = 0

gamePiece.forEach(function (btn) {
    btn.addEventListener('click', chooseTile)
})

function chooseTile() {
    let flipPiece = this.querySelector('.game-piece-inner')
    if (numOfTurns < 2) {
        flipPiece.classList.add('chosen-piece')
        if (numOfTurns == 0) {
            choiceOneValue = this.value
        } else {
            choiceTwoValue = this.value
        }
        numOfTurns += 1

    }
    if (numOfTurns > 1) {
        setTimeout(determinePair, 750)
    }
}

function determinePair() {
    if (choiceOneValue == choiceTwoValue) {
        for (let i = 0; i < gamePiece.length; i++) {
            let innerPiece = gamePiece[i].querySelector('.game-piece-inner');

            if (innerPiece.classList.contains('chosen-piece') && !innerPiece.classList.contains('discovered-piece')) {
                innerPiece.classList.add('discovered-piece');
            }
        }
        
        
    } else {
        for (let i = 0; i < gamePiece.length; i++) {
            let innerPiece = gamePiece[i].querySelector('.game-piece-inner');

            if (innerPiece.classList.contains('chosen-piece') && !innerPiece.classList.contains('discovered-piece')) {
                innerPiece.classList.remove('chosen-piece');
            }
        }
    }
    choiceOneValue = 0
    choiceTwoValue = 0
    numOfTurns = 0
}


let gameboardArray = [];

startGameBtn.addEventListener('click', initiateGame)

function initiateGame() {
    homeMenu.classList.add('display-none')
}

// for (let i = 0; i < 16; i++) {
//     slot = document.createElement('button');
//     slot.className = 'gameboard-piece'
//     randomNum = Math.floor(Math.random() * randomArray.length);
//     slot.value = randomArray[randomNum];
//     gameboardArray.push(slot)
//     if (slot.value == 1) {
//         slot.className = 'one gameboard-piece'
//     } else if (slot.value == 2) {
//         slot.className = 'two gameboard-piece'
//     } else if (slot.value == 3) {
//         slot.className = 'three gameboard-piece'
//     } else if (slot.value == 4) {
//         slot.className = 'four gameboard-piece'
//     } else if (slot.value == 5) {
//         slot.className = 'five gameboard-piece'
//     } 
//     gameboard.appendChild(slot);
// }

// let gameboardPiece = document.querySelectorAll('.gameboard-piece')
// let playerOneScoreDisplay = document.getElementById('player-one-score')

// function tileChoice(e) {
//     if (firstChoice == true) {
//         if (playerOne == true) {
//             playerOneFirstChoice = e.value
//             console.log(playerOneFirstChoice)
//             firstChoice = false
//         }
//     } else {
//         if (playerOne == true) {
//             playerOneSecondChoice = e.value
//             console.log(playerOneSecondChoice)
//             if (playerOneFirstChoice == playerOneSecondChoice) {
//                 playerOneScore += 1
//                 playerOneScoreDisplay.innerHTML = playerOneScore
//                 firstChoice = true
//                 secondChoice = false

//             } else {
//                 firstChoice = true
//                 secondChoice = false
//                 console.log('lose')
//             }
//         }
//     }
// }

// gameboardPiece.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         tileChoice(btn);
//     });
// });

