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
let winStatementHeading = document.querySelector('.win-statement-heading')
let winningPiece = document.getElementById('winning-piece')
let winningColor = document.getElementById('winning-color')
let mainMenuContainer = document.getElementById('main-menu-container')
let playScreen = document.getElementById('play-screen')
let gameStartComputerBtn = document.getElementById('game-start-computer-btn')
let gameStartPlayerBtn = document.getElementById('game-start-player-btn')
let playerChooseCross = document.getElementById('player-choose-cross')
let playerChooseCircle = document.getElementById('player-choose-circle')
let circlePerson = document.getElementById('circle-person')
let crossPerson = document.getElementById('cross-person')
let playerOneTurn = true;
let playerTwoTurn = false;
let playerOneCross = true;
let playerOneWin = false;
let playerTwoWin = false;
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


playerChooseCircle.addEventListener('click', chooseCircle)
playerChooseCross.addEventListener('click', chooseCross)
restartBtn.addEventListener('click', initiateGame)
quitBtn.addEventListener('click', quitGame)
nextRoundBtn.addEventListener('click', nextRound)
gameStartComputerBtn.addEventListener('click', playComputer)
gameStartPlayerBtn.addEventListener('click', playPlayer)

function chooseCircle() {
    playerOneCross = false
    
    playerChooseCross.style.backgroundColor = 'transparent'
    playerChooseCircle.style.backgroundColor = "#31c3bd"
}

function chooseCross() {
    playerOneCross = true

    playerChooseCross.classList.add('active-choice')
    playerChooseCircle.classList.remove('active-choice')
    playerChooseCross.style.backgroundColor = '#f2b137'
    playerChooseCircle.style.backgroundColor = "transparent"
}

function playComputer() {
    computerActive = true
    initiateGame()
}

function playPlayer() {
    computerActive = false
    if (playerOneCross) {
        playerTwoTurn = false
    } else {
        playerTwoTurn = true
    }
    initiateGame()
}

function initiateGame() {
    wins = 0
    losses = 0
    draws = 0
    winTally.innerHTML = wins
    loseTally.innerHTML = losses
    drawTally.innerHTML = draws
    totalTurns = 0
    turnIndicatorChange()
    for (let i = 0; i < 9; i++) {
        gameboard.children[i].className = 'btn empty'
    }
    playerOneTiles = []
    playerTwoTiles = []
    gameOver = false;
    mainMenuContainer.classList.add('hidden')
    playScreen.classList.remove('hidden')
    if (playerOneCross) {
        playerOneTurn = true;
        playerTwoTurn = false;
        computerTurn = false;
    } else if (computerActive) {
        playerOneTurn = false;
        computerTurn = true;
        setTimeout(computerRandomTurn, 500)
    } else {
        playerOneTurn = false;
        computerTurn = false;
        playerTwoTurn = true;
    }

    //******** Change Player names at bottom of screen  **************//
    if (playerOneCross && computerActive) {
        crossPerson.innerHTML = "YOU"
        circlePerson.innerHTML = "CPU"
    } else if(playerOneCross && !computerActive) {
        crossPerson.innerHTML = "P1"
        circlePerson.innerHTML = "P2"
    } else if(!playerOneCross && !computerActive) {
        crossPerson.innerHTML = "P2"
        circlePerson.innerHTML = "P1"
    } else {
        crossPerson.innerHTML = "CPU"
        circlePerson.innerHTML = "YOU"
    }

}

function nextRound() {
    winningColor.innerHTML = "takes the round"
    winningScreenContainer.classList.add('hidden')
    totalTurns = 0
    turnIndicatorChange()
    for (let i = 0; i < 9; i++) {
        gameboard.children[i].className = 'btn empty'
    }
    playerOneTiles = []
    playerTwoTiles = []
    gameOver = false;

    if (playerOneCross) {

        playerOneTurn = true;
        computerTurn = false;
        playerTwoTurn = false;
    } else if (computerActive) {

        playerOneTurn = false;
        computerTurn = true;
        computerRandomTurn()
    } else {

        playerOneTurn = false;
        computerTurn = false;
        playerTwoTurn = true
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
    if (playerOneTurn && playerOneCross) {
        if (e.className == 'btn empty') {
            e.className = 'btn cross'
            playerOneTurn = false
            playerTwoTurn = true
            playerOneTiles.push(parseInt(e.value))
            totalTurns += 1
            checkWin()
        }

    } else if (playerOneTurn && playerOneCross == false) {
        if (e.className == 'btn empty') {
            e.className = 'btn circle'
            playerOneTurn = false
            playerTwoTurn = true
            playerOneTiles.push(parseInt(e.value))
            totalTurns += 1
            checkWin()
        }
        
    } else if (playerTwoTurn && playerOneCross) {
        if (e.className == 'btn empty') {
            e.className = 'btn circle'
            playerOneTurn = true
            playerTwoTurn = false
            playerTwoTiles.push(parseInt(e.value))
            totalTurns += 1
            checkWin()
        }

    } else if (playerTwoTurn && playerOneCross == false) {
        if (e.className == 'btn empty') {
            e.className = 'btn cross'
            playerOneTurn = true
            playerTwoTurn = false
            playerTwoTiles.push(parseInt(e.value))
            totalTurns += 1
            checkWin()
        }
    } 

    if (computerActive && !playerOneTurn) {
        computerTurn = true
        setTimeout(computerRandomTurn, 500)
    }

}

function computerRandomTurn() {
    while (computerTurn && gameOver == false) {
        if (gameboard.children[2].className == 'btn empty' && ((playerOneTiles.includes(5) && playerOneTiles.includes(8)) || (playerOneTiles.includes(0) && playerOneTiles.includes(1)) || (playerOneTiles.includes(4) && playerOneTiles.includes(6)))) {
            gameboard.children[2].className = 'btn circle';
            playerTwoTiles.push(parseInt(2))
            computerTurn = false
            playerOneTurn = true
            totalTurns += 1
            checkWin()

        } else if (gameboard.children[1].className == 'btn empty' && ((playerOneTiles.includes(4) && playerOneTiles.includes(7)))) {
            gameboard.children[1].className = 'btn circle';
            playerTwoTiles.push(parseInt(1))
            computerTurn = false
            playerOneTurn = true
            totalTurns += 1
            checkWin()

        } else if (gameboard.children[0].className == 'btn empty' && ((playerOneTiles.includes(1) && playerOneTiles.includes(2)) || (playerOneTiles.includes(3) && playerOneTiles.includes(6)) || (playerOneTiles.includes(4) && playerOneTiles.includes(8)))) {
            gameboard.children[0].className = 'btn circle';
            computerTurn = false
            playerOneTurn = true
            playerTwoTiles.push(parseInt(0))
            totalTurns += 1
            console.log('zero')
            checkWin()

        } else if (gameboard.children[3].className == 'btn empty' && ((playerOneTiles.includes(0) && playerOneTiles.includes(6)) || (playerOneTiles.includes(4) && playerOneTiles.includes(5)) )) {
            gameboard.children[3].className = 'btn circle';
            playerTwoTiles.push(parseInt(3))
            computerTurn = false
            playerOneTurn = true
            totalTurns += 1
            checkWin()

        }  else if (gameboard.children[4].className == 'btn empty' && ((playerOneTiles.includes(0) && playerOneTiles.includes(8)) || (playerOneTiles.includes(1) && playerOneTiles.includes(7)) || (playerOneTiles.includes(2) && playerOneTiles.includes(7)) || (playerOneTiles.includes(3) && playerOneTiles.includes(5)))) {
            gameboard.children[4].className = 'btn circle';
            playerTwoTiles.push(parseInt(4))
            computerTurn = false
            playerOneTurn = true
            totalTurns += 1
            checkWin()

        } else if (gameboard.children[5].className == 'btn empty' && ((playerOneTiles.includes(2) && playerOneTiles.includes(8)) || (playerOneTiles.includes(4) && playerOneTiles.includes(3)) )) {
            gameboard.children[5].className = 'btn circle';
            playerTwoTiles.push(parseInt(5))
            computerTurn = false
            playerOneTurn = true
            totalTurns += 1
            checkWin()

        } else if (gameboard.children[6].className == 'btn empty' && ((playerOneTiles.includes(0) && playerOneTiles.includes(3)) || (playerOneTiles.includes(4) && playerOneTiles.includes(2)) || (playerOneTiles.includes(7) && playerOneTiles.includes(8)))) {
            gameboard.children[6].className = 'btn circle';
            computerTurn = false
            playerOneTurn = true
            playerTwoTiles.push(parseInt(6))
            totalTurns += 1
            console.log('six')
            checkWin()

        } else if (gameboard.children[7].className == 'btn empty' && ((playerOneTiles.includes(1) && playerOneTiles.includes(4)) || (playerOneTiles.includes(6) && playerOneTiles.includes(8)) )) {
            gameboard.children[7].className = 'btn circle';
            playerTwoTiles.push(parseInt(7))
            computerTurn = false
            playerOneTurn = true
            totalTurns += 1
            checkWin()

        }  else if (gameboard.children[8].className === 'btn empty' && ((playerOneTiles.includes(0) && playerOneTiles.includes(4)) || (playerOneTiles.includes(2) && playerOneTiles.includes(5)) || (playerOneTiles.includes(6) && playerOneTiles.includes(7)))) {
            gameboard.children[8].className = 'btn circle';
            computerTurn = false
            playerOneTurn = true
            playerTwoTiles.push(parseInt(8))
            totalTurns += 1
            console.log('eight')
            checkWin()

        } else {
            randomNum = Math.floor(Math.random() * 9)
            console.log(randomNum)
            if ((gameboard.children[randomNum].className == 'btn empty') && (playerOneCross == true)) {
                gameboard.children[randomNum].className = 'btn circle';
                computerTurn = false
                playerOneTurn = true
                playerTwoTiles.push(parseInt(randomNum))
                totalTurns += 1
                checkWin()
            } else if (gameboard.children[randomNum].className == 'btn empty') {
                gameboard.children[randomNum].className = 'btn cross';
                computerTurn = false
                playerOneTurn = true
                playerTwoTiles.push(parseInt(randomNum))
                totalTurns += 1
                checkWin()
            }
        }
    }
}

function turnIndicatorChange() {
    if (totalTurns % 2 == 0) {
        turnIndicator.src = "./assets/icon-x.svg"
    } else {
        turnIndicator.src = "./assets/icon-o.svg"
    }
}

function checkWin() {
    turnIndicatorChange()
    for (let i = 0; i < winningCombos.length; i++) {
        if ((winningCombos[i].every(elem => playerOneTiles.includes(elem)))) {
            console.log('one win')
            wins += 1
            // winTally.innerHTML = wins
            gameOver = true
            playerOneWin = true
            gameWinScreen()
        } else if ((winningCombos[i].every(elem => playerTwoTiles.includes(elem)))) {
            console.log('two win')
            losses += 1
            // loseTally.innerHTML = losses
            playerTwoWin = true
            gameWinScreen()
            gameOver = true
        }
    }

    if (totalTurns == 9 && gameOver == false) {
        draws += 1
        drawTally.innerHTML = draws
        gameOver = true
        gameWinScreen()
        
    }

}

function gameWinScreen() {
    if (playerOneWin && playerOneCross) {
        winTally.innerHTML = wins
        winningPiece.src = './assets/icon-x.svg'
        winningColor.style.color = '#31C3BD'
        if (computerActive) {
            winStatementHeading.innerHTML = "YOU WON!"       
        } else {
            winStatementHeading.innerHTML = "PLAYER ONE WINS!"
        }
    } else if (playerOneWin && !playerOneCross) {
        loseTally.innerHTML = wins
        winningPiece.src = './assets/icon-o.svg'
        winningColor.style.color = '#F2B137'
        if (computerActive) {
            winStatementHeading.innerHTML = "YOU WON!"       
        } else {
            winStatementHeading.innerHTML = "PLAYER ONE WINS!"
        }
    } else if (playerTwoWin && playerOneCross) {
        loseTally.innerHTML = losses
        winningPiece.src = './assets/icon-o.svg'
        winningColor.style.color = '#F2B137'
        if (computerActive) {
            winStatementHeading.innerHTML = "OH NO YOU LOST!"       
        } else {
            winStatementHeading.innerHTML = "PLAYER TWO WINS!"
        }
    } else if (playerTwoWin && !playerOneCross) {
        winTally.innerHTML = losses
        winningPiece.src = './assets/icon-x.svg'
        winningColor.style.color = '#31C3BD'
        if (computerActive) {
            winStatementHeading.innerHTML = "OH NO YOU!"       
        } else {
            winStatementHeading.innerHTML = "PLAYER TWO WINS!"
        }
    }

    if (!playerTwoWin && !playerOneWin) {
        winningColor.innerHTML = "its a draw"
        winningColor.style.color = "#A8BFC9"
    }
    winningScreenContainer.classList.remove('hidden')
    playerTwoWin = false
    playerOneWin = false
}


