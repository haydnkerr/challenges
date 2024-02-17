let hiddenWord = '';
let chosenCategory = '';
let health = 100;
let healthBar = document.querySelector('.progress-bar')
let correctGuess = false
let homeScreen = document.querySelector('.home-screen-container')
let hiddenWordContainer = document.querySelector('.hidden-word-container')
let categoryContainer = document.querySelector('.category-container')
let gameScreen = document.querySelector('.game-screen')
let gameScreenHeader = document.querySelector('.game-screen-header')
let homeScreenHeader = document.querySelector('.menu-header')
let homeScreenHeaderTitle = document.querySelector('.menu-header-title')
let categoryHeader = document.querySelector('.category-header')
let howToScreen = document.querySelector('.instructions-container')

/* Buttons */
let chooseCategoryBtn = document.querySelectorAll('.category-btn')
let howToBtn = document.querySelector('.how-to-btn');
let guessLetterBtn = document.querySelectorAll('.key-btn');
let backBtn = document.querySelector('.back-btn')
let playBtn = document.querySelector('.play-btn')

playBtn.addEventListener('click', toggleCategory)

function toggleCategory() {
    homeScreen.classList.toggle('display-none')
    categoryContainer.classList.toggle('display-none')
    homeScreenHeader.classList.toggle('display-none')
    homeScreenHeaderTitle.innerHTML = "Pick a Category"
}


backBtn.addEventListener('click', goBack)

function goBack() {
    homeScreen.classList.toggle('display-none')
    howToScreen.classList.add('display-none')
    homeScreenHeader.classList.add('display-none')
    categoryContainer.classList.add('display-none')
}

howToBtn.addEventListener('click', toggleHowTo)

function toggleHowTo() {
    homeScreen.classList.toggle('display-none')
    howToScreen.classList.toggle('display-none')
    homeScreenHeader.classList.toggle('display-none')
    homeScreenHeaderTitle.innerHTML = "How to Play"
}





chooseCategoryBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        chosenCategory = this.value;
        initiateGame(chosenCategory)
        homeScreenHeader.classList.toggle('display-none')
        gameScreenHeader.classList.remove('display-none')
        categoryHeader.innerHTML = this.value
    })
})

guessLetterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (!this.classList.contains('inactive-key')) {
            this.classList.add('inactive-key')
        this.tabIndex = "-1"
        checkLetter(this.value)
        }
    })
})




/* Check Letter Function  */
function checkLetter(letter) {
    for (let i = 0; i < hiddenWord.length; i++) {
        if (letter == hiddenWord[i]) {
            console.log(hiddenWord[i])
            console.log(i)
            const letterTile = hiddenWordContainer.children[i].querySelector('.hidden-letter-inner');
            letterTile.classList.add('reveal-letter')
            correctGuess = true
        }
    }

    if (!correctGuess) {
        health -= 12.5
    } else {
        correctGuess = false
    }
    healthBar.style.width = health + "%";
};

/* Start Game Function */
function initiateGame(category) {
    fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const randNum = Math.floor(Math.random()* data.categories[category].length)
        hiddenWord = data.categories[category][randNum].name.toLowerCase()
        console.log(hiddenWord);

        populateWord(hiddenWord)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function populateWord(word) {
    for (let i = 0; i < word.length; i ++) {
    const hiddenLetterTile = document.createElement('div');
    hiddenLetterTile.classList.add('hidden-letter-tile');

    const hiddenLetterInner = document.createElement('div');
    hiddenLetterInner.classList.add('hidden-letter-inner');

    const hiddenLetterFront = document.createElement('div');
    hiddenLetterFront.classList.add('hidden-letter-front');

    const hiddenLetterBack = document.createElement('div');
    hiddenLetterBack.classList.add('hidden-letter-back');

    const h2 = document.createElement('h2');
    h2.textContent = word[i];

    hiddenLetterBack.appendChild(h2);
    hiddenLetterInner.appendChild(hiddenLetterFront);
    hiddenLetterInner.appendChild(hiddenLetterBack);
    hiddenLetterTile.appendChild(hiddenLetterInner);

    const hiddenWordContainer = document.querySelector('.hidden-word-container');
    hiddenWordContainer.appendChild(hiddenLetterTile);
    }

    categoryContainer.classList.add('display-none')
    gameScreen.classList.remove('display-none')
}


