window.onload = initiateGame

let homeMenu = document.getElementById('home-menu-container')
let startGameBtn = document.getElementById('start-game-btn')

startGameBtn.addEventListener('click', initiateGame)

let gameboard = document.getElementById('gameboard')
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

startGameBtn.addEventListener('click', initiateGame)

// In Game Menu Buttons
let resumeGameBtn = document.getElementById('resume-game-btn')
let newGameBtn = document.getElementById('new-game-btn')
let restartBtn = document.getElementById('restart-btn')
let inGameMenu = document.querySelector('.in-game-menu-container')
let inGameMenuBtn = document.getElementById('in-game-menu-btn')

inGameMenuBtn.addEventListener('click', toggleInGameMenu)
resumeGameBtn.addEventListener('click', resumeGame)
newGameBtn.addEventListener('click', initiateGame)

function toggleInGameMenu() {
    inGameMenu.classList.remove('display-none')
}

function resumeGame() {
    inGameMenu.classList.add('display-none')
}

/********* Gameboard **********/
let gamePiece = document.querySelectorAll('.game-piece')

let gameboardArray = [];
let classNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];

let choiceOneValue
let choiceTwoValue
let numOfTurns = 0
let numOfMatches = 0

let seconds = 0
let minutes = 0
let totalMoves = 0
let timeIndicator = document.getElementById('time-passed')
let totalMovesIndicator = document.getElementById('total-moves-indicator')

let winContainer = document.getElementById('win-container')

/********** Event Listeners ********************/

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
    let gamePiece = document.querySelectorAll('.game-piece')
    if (choiceOneValue == choiceTwoValue) {
        for (let i = 0; i < gamePiece.length; i++) {
            let innerPiece = gamePiece[i].querySelector('.game-piece-inner');

            if (innerPiece.classList.contains('chosen-piece') && !innerPiece.classList.contains('discovered-piece')) {
                innerPiece.classList.add('discovered-piece');
            }

        }
        numOfMatches += 1

        if (numOfMatches == 8) {
            winFunction()
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
    totalMoves += 1
    totalMovesIndicator.innerHTML = totalMoves
}

function winFunction() {
    winContainer.classList.remove('display-none')
}


function initiateGame() {
    timeIndicator.innerHTML = seconds
    totalMovesIndicator.innerHTML = totalMoves
    while (gameboard.firstChild) {
        gameboard.removeChild(gameboard.firstChild);
    }
    inGameMenu.classList.add('display-none')
    homeMenu.classList.add('display-none')
    for (let i = 0; i < 16; i++) {
        slot = document.createElement('button');
        slot.className = 'game-piece active-piece'
        randomNum = Math.floor(Math.random() * randomArray.length);
        slot.value = randomArray[randomNum];
        let innerDiv = document.createElement('div');
        innerDiv.className = 'game-piece-inner';
        let front = document.createElement('div');
        front.className = 'game-piece-front';
        let back = document.createElement('div');
        back.className = classNames[slot.value] + ' game-piece-back';
        innerDiv.appendChild(front)
        innerDiv.appendChild(back)
        slot.appendChild(innerDiv)
        randomArray.splice(randomNum, 1)
        // gameboardArray.push(slot)
        gameboard.appendChild(slot);
    }
    let gamePiece = document.querySelectorAll('.game-piece')

    

    gamePiece.forEach(function (btn) {
        btn.addEventListener('click', chooseTile)
    })
}

let timeTracker = setInterval(determineTime,1000);

function determineTime() {
    seconds += 1
    if (seconds > 59) {
        minutes += 1
        seconds = 0
        
        
    } 
    if(minutes == 0) {
    timeIndicator.innerText = seconds
    } else {
        if (seconds < 10) {
            timeIndicator.innerText = minutes + ":0" + seconds
        } else {
            timeIndicator.innerText = minutes + ":" + seconds
        }
    }
    
    console.log(seconds)
    
}






