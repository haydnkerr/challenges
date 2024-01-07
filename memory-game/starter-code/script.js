let gameStart = false
let homeMenu = document.getElementById('home-menu-container')
let startGameBtn = document.getElementById('start-game-btn')
let numPlayersBtn = document.querySelectorAll('.num-players-btn')
let gridSizeBtn = document.querySelectorAll('.grid-size-btn')
let themeBtn = document.querySelectorAll('.theme-btn')


let gameboard = document.getElementById('gameboard')
let slot = '';
let randomArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18]
let gridSize = 16
let numPlayers = 1
let gameTheme = 'icons';
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

/********** Home Menu Event Listeners **********/
themeBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        for (let i = 0; i < 2; i++) {
            themeBtn[i].classList.remove('active')
        }
        this.classList.add('active')
        gameTheme = this.value
    })
})

numPlayersBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        for (let i = 0; i < 4; i++) {
            numPlayersBtn[i].classList.remove('active')
        }
        this.classList.add('active')
        numPlayers = this.value
    })
})

gridSizeBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (btn.value % 2 === 0) {
            gridSize = btn.value * btn.value
            gameboard.style.gridTemplateColumns = "repeat(" + btn.value + ",1fr)"
            gameboard.style.gridTemplateRows = "repeat(" + btn.value + ",1fr)"
            gameboard.style.aspectRatio = 1 / 1
        } else {
            gridSize = 6
            gameboard.style.gridTemplateColumns = "repeat(3,1fr)"
            gameboard.style.gridTemplateRows = "repeat(2,1fr)"
            gameboard.style.aspectRatio = 4 / 3
        }
        for (let i = 0; i < 4; i++) {
            gridSizeBtn[i].classList.remove('active')
        }
        this.classList.add('active')
    })
})


startGameBtn.addEventListener('click', function () {
    homeMenu.classList.add('display-none')
    initiateGame()
})

// In Game Menu Buttons
let resumeGameBtn = document.getElementById('resume-game-btn')
let newGameBtn = document.getElementById('new-game-btn')
let restartBtn = document.getElementById('restart-btn')
let inGameMenu = document.querySelector('.in-game-menu-container')
let inGameMenuBtn = document.getElementById('in-game-menu-btn')

inGameMenuBtn.addEventListener('click', toggleInGameMenu)
resumeGameBtn.addEventListener('click', resumeGame)
restartBtn.addEventListener('click', initiateGame)
newGameBtn.addEventListener('click', function () {
    toggleInGameMenu();
    homeMenu.classList.remove('display-none')
    gameboardContainer.classList.add('display-none')
})

function toggleInGameMenu() {
    inGameMenu.classList.toggle('display-none')
}

function resumeGame() {
    inGameMenu.classList.add('display-none')
}

/********* Gameboard **********/
let gameboardContainer = document.getElementById('gameboard-container')
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
let pointTrackerContainer = document.getElementById('point-tracker-container')
let timeTrackerContainer = document.getElementById('time-tracker-container')

let winContainer = document.getElementById('win-container')
let totalMovesWin = document.getElementById('total-moves-win')
let totalTimeWin = document.getElementById('total-time-win')
let winRestartBtn = document.getElementById('win-restart-btn')

/********** Event Listeners ********************/

winRestartBtn.addEventListener('click', initiateGame)

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

        if (numOfMatches == gridSize / 2) {
            winFunction()
            gameStart = false
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
    totalMovesWin.innerHTML = totalMoves
}

function winFunction() {
    winContainer.classList.remove('display-none')
}


function initiateGame() {
    setUpIndicators()
    randomArray.splice(gridSize, randomArray.length)
    console.log(randomArray)
    gameStart = true
    timeIndicator.innerHTML = seconds
    totalMovesIndicator.innerHTML = totalMoves
    totalMovesWin.innerHTML = totalMoves
    winContainer.classList.add('display-none')
    gameboardContainer.classList.remove('display-none')
    while (gameboard.firstChild) {
        gameboard.removeChild(gameboard.firstChild);
    }
    inGameMenu.classList.add('display-none')


    for (let i = 0; i < gridSize; i++) {
        slot = document.createElement('button');
        slot.className = 'game-piece active-piece'
        randomNum = Math.floor(Math.random() * randomArray.length);
        slot.value = randomArray[randomNum];
        let innerDiv = document.createElement('div');
        innerDiv.className = 'game-piece-inner';
        let front = document.createElement('div');
        front.className = 'game-piece-front';
        let back = document.createElement('div');
        if (gameTheme == 'icons') {
            back.className = classNames[slot.value] + ' game-piece-back';
        } else {
            back.className = 'game-piece-back';
            back.innerHTML = "<h1>" + randomArray[randomNum] + "</h1>"
        }

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

    numOfTurns = 0
    numOfMatches = 0
    seconds = 0
    minutes = 0
    totalMoves = 0

    timeIndicator.innerHTML = seconds
    totalMovesIndicator.innerHTML = totalMoves
    totalMovesWin.innerHTML = totalMoves

    randomArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12]
    classNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
}

function setUpIndicators() {
    if (numPlayers < 2) {
        pointTrackerContainer.classList.remove('display-none')
        timeTrackerContainer.classList.add('display-none')
        console.log('no success')
    } else {
        console.log('success')
        for (let i = 0; i < numPlayers; i++) {
            let mainContainer = document.createElement('div');
            mainContainer.className = 'turn-indicator-container';


            let turnTriangle = document.createElement('div');
            turnTriangle.className = 'turn-triangle display-none';


            let playerPointsContainer = document.createElement('div');
            playerPointsContainer.className = 'player-points-container';


            let playerDiv = document.createElement('p');
            let num = i + 1
            playerDiv.textContent = 'P' + num;


            let timeIndicator = document.createElement('h2');
            timeIndicator.className = 'points-indicator';
            timeIndicator.textContent = '0';


            playerPointsContainer.appendChild(playerDiv);
            playerPointsContainer.appendChild(timeIndicator);


            let currentTurnStatement = document.createElement('div');
            currentTurnStatement.className = 'current-turn-statement';

            let currentTurn = document.createElement('span');
            currentTurn.className = 'current-turn display-none';
            currentTurn.textContent = 'current turn';

            currentTurnStatement.appendChild(currentTurn);

            mainContainer.appendChild(turnTriangle);
            mainContainer.appendChild(playerPointsContainer);
            mainContainer.appendChild(currentTurnStatement);

            pointTrackerContainer.appendChild(mainContainer);

            pointTrackerContainer.classList.remove('display-none')
            timeTrackerContainer.classList.add('display-none')

        }
    }

}

let timeTracker = setInterval(determineTime, 1000);


function determineTime() {
    if (gameStart) {
        seconds += 1
        console.log(seconds)
        if (seconds > 59) {
            minutes += 1
            seconds = 0


        }
        if (minutes == 0) {
            timeIndicator.innerText = seconds
            totalTimeWin.innerText = seconds
        } else {
            if (seconds < 10) {
                timeIndicator.innerText = minutes + ":0" + seconds
                totalMovesWin.innerText = minutes + ":0" + seconds
                totalTimeWin.innerText = seconds
            } else {
                timeIndicator.innerText = minutes + ":" + seconds
                totalMovesWin.innerText = minutes + ":" + seconds
            }
        }
    }



}






