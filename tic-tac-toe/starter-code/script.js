let gameTile = document.querySelectorAll('.btn')
let gameboard = document.getElementById('gameboard')
let winTally = document.getElementById('win-tally')
let loseTally = document.getElementById('lose-tally')
let drawTally = document.getElementById('draw-tally')
let restartBtn = document.getElementById('restart-btn')
let turnIndicator = document.getElementById('turn-indicator')
let quitBtn = document.getElementById('quit-btn')
let nextRoundBtn = document.getElementById('next-round-btn')
let winningScreenContainer = document.getElementById('winning-screen-container')
let mainMenuContainer = document.getElementById('main-menu-container')
let playScreen = document.getElementById('play-screen')
let gameStartComputerBtn = document.getElementById('game-start-computer-btn')
let gameStartPlayerBtn = document.getElementById('game-start-player-btn')
let playerChooseCross = document.getElementById('player-choose-cross')
let playerChooseCircle = document.getElementById('player-choose-circle')
let playerOneTurn = true;
let playerOneCross = true;
let wins = 0
let losses = 0
let draws = 0
let totalTurns = 0
let computerTurn = false
let computerActive = false;
let gameOver = false;
let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let playerOneTiles = []
let playerTwoTiles = []

winTally.innerHTML = wins
loseTally.innerHTML = losses
drawTally.innerHTML = draws


// playerChooseCircle.addEventListener('click',chooseCircle)
// playerChooseCross.addEventListener('click', chooseCross)
restartBtn.addEventListener('click', initiateGame)
quitBtn.addEventListener('click', quitGame)
nextRoundBtn.addEventListener('click', nextRound)
gameStartComputerBtn.addEventListener('click', playComputer)
gameStartPlayerBtn.addEventListener('click', playPlayer)

function playComputer() {
    computerActive = true
    initiateGame()
}

function playPlayer() {
    computerActive = false
    initiateGame()
}

function initiateGame() {
    winTally.innerHTML = wins
    loseTally.innerHTML = losses
    drawTally.innerHTML = draws
    totalTurns = 0
    for (let i = 0; i < 9; i++) {
        gameboard.children[i].className = 'btn empty'
    }
    playerOneTiles = []
    playerTwoTiles = []
    gameOver = false;
    mainMenuContainer.classList.add('hidden')
    playScreen.classList.remove('hidden')

}

function nextRound() {
    winningScreenContainer.classList.add('hidden')
    totalTurns = 0
    for (let i = 0; i < 9; i++) {
        gameboard.children[i].className = 'btn empty'
    }
    playerOneTiles = []
    playerTwoTiles = []
    gameOver = false;
    
    if (playerOneCross) {
        playerOneTurn = true;
        computerTurn = false;
    } else if(computerActive) {
        playerOneTurn = false;
        computerTurn = true;
        computerRandomTurn()
    } else {
        playerOneTurn = false;
        computerTurn = false;
    }
    

}

function quitGame() {
    playerOneTurn = true
    wins = 0
    losses = 0
    draws = 0
    totalTurns = 0
    computerTurn = false
    computerActive = false;
    gameOver = false;
    winningScreenContainer.classList.add('hidden')
    mainMenuContainer.classList.remove('hidden')
    playScreen.classList.add('hidden')
}


gameTile.forEach(function (btn) {
    btn.addEventListener('click', function () {
        chooseTile(btn)
    });
});



function chooseTile(e) {
    console.log(totalTurns)
    if (playerOneTurn && playerOneCross) {
        if (e.className == 'btn empty')
            e.className = 'btn cross'
        playerOneTurn = false
        computerTurn = true
        playerOneTiles.push(parseInt(e.value))
        console.log(playerOneTiles)
        totalTurns += 1
        checkWin()
        if (computerActive) {
            setTimeout(computerRandomTurn, 500)
        }
    } else {
        if (e.className == 'btn empty')
            e.className = 'btn circle'
        playerOneTurn = true
        playerTwoTiles.push(parseInt(e.value))
        totalTurns += 1
        checkWin()
    }

}

function computerRandomTurn() {
    while (computerTurn && gameOver == false) {
        randomNum = Math.floor(Math.random() * 9)
        console.log(randomNum)
        if (gameboard.children[randomNum].className == 'btn empty') {
            gameboard.children[randomNum].className = 'btn circle';
            computerTurn = false
            playerOneTurn = true
            playerTwoTiles.push(parseInt(randomNum))
            totalTurns += 1
            checkWin()
        }
    }
}

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        if ((winningCombos[i].every(elem => playerOneTiles.includes(elem)))) {
            console.log('one win')
            wins += 1
            winTally.innerHTML = wins
            gameOver = true
            winningScreenContainer.classList.remove('hidden')
        } else if ((winningCombos[i].every(elem => playerTwoTiles.includes(elem)))) {
            console.log('two win')
            losses += 1
            loseTally.innerHTML = losses
            winningScreenContainer.classList.remove('hidden')
            gameOver = true
        }
    }

    if (totalTurns == 9 && gameOver == false) {
        draws += 1
        drawTally.innerHTML = draws
        gameOver = true
        winningScreenContainer.classList.remove('hidden')
    }
}


