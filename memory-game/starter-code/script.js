let gameboard = document.getElementById('gameboard')

let slot = '';
let randomArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
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


let gameboardArray = [];

for (let i = 0; i < 16; i++) {
    slot = document.createElement('button');
    slot.className = 'gameboard-piece'
    randomNum = Math.floor(Math.random() * randomArray.length);
    slot.value = randomArray[randomNum];
    gameboardArray.push(slot)
    if (slot.value == 1) {
        slot.className = 'one gameboard-piece'
    } else if (slot.value == 2) {
        slot.className = 'two gameboard-piece'
    } else if (slot.value == 3) {
        slot.className = 'three gameboard-piece'
    } else if (slot.value == 4) {
        slot.className = 'four gameboard-piece'
    } else if (slot.value == 5) {
        slot.className = 'five gameboard-piece'
    } 
    gameboard.appendChild(slot);
}

let gameboardPiece = document.querySelectorAll('.gameboard-piece')
let playerOneScoreDisplay = document.getElementById('player-one-score')

function tileChoice(e) {
    if (firstChoice == true) {
        if (playerOne == true) {
            playerOneFirstChoice = e.value
            console.log(playerOneFirstChoice)
            firstChoice = false
        }
    } else {
        if (playerOne == true) {
            playerOneSecondChoice = e.value
            console.log(playerOneSecondChoice)
            if (playerOneFirstChoice == playerOneSecondChoice) {
                playerOneScore += 1
                playerOneScoreDisplay.innerHTML = playerOneScore
                firstChoice = true
                secondChoice = false

            } else {
                firstChoice = true
                secondChoice = false
                console.log('lose')
            }
        }
    }
}

gameboardPiece.forEach(function (btn) {
    btn.addEventListener('click', function () {
        tileChoice(btn);
    });
});

