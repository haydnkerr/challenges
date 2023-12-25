import { quizzes } from "./data.js";

let htmlQuizBtn = document.getElementById("html-option-container")
let cssQuizBtn = document.getElementById("css-option-container")
let jsQuizBtn = document.getElementById("javascript-option-container")
let accessQuizBtn = document.getElementById("accessibility-option-container")
let quizTopic = document.querySelectorAll(".quiz-option")
let quizScreen = document.getElementById('quizz-screen')
let homeScreen = document.getElementById('home-screen')
let scoreScreen = document.getElementById('score-screen')
let finalScore = document.getElementById('final-score')
let quizHeadingContainer = document.getElementById('quiz-heading-container')
let quizGenreHeading = document.querySelectorAll('.quiz-genre-heading')
let quizGenreImg = document.querySelectorAll('.quiz-genre-img')
let progressBar = document.getElementById('progress-bar')
let quizOptionContainer = document.querySelectorAll('.quiz-option-container')

let currentQuestionNumber = document.getElementById('current-question-num')
let submitBtn = document.getElementById('submit-btn')
let newQuizBtn = document.getElementById('new-quiz-btn')
let answerA = document.getElementById('answer-a')
let answerB = document.getElementById('answer-b')
let answerC = document.getElementById('answer-c')
let answerD = document.getElementById('answer-d')
let aImg = document.getElementById('answer-a-img')
let bImg = document.getElementById('answer-b-img')
let cImg = document.getElementById('answer-c-img')
let dImg = document.getElementById('answer-d-img')
let question = document.getElementById('question')
let userAnswerInput = document.querySelectorAll('.answer')
let quizOption = document.querySelectorAll('.quiz-option-answer')
let answerContent = document.querySelectorAll('.answer-content')
let emptyMsg = document.getElementById("empty-answer-msg")
let progressBarContainer = document.querySelector('.progress-bar-container')

let htmlScore = document.getElementById('html-score')
let cssScore = document.getElementById('css-score')
let jsScore = document.getElementById('js-score')
let accessibilityScore = document.getElementById('acessibility-score')

let htmlScoreContainer = document.getElementById('html-score-container')
let cssScoreContainer = document.getElementById('css-score-container')
let jsScoreContainer = document.getElementById('js-score-container')
let accessibilityScoreContainer = document.getElementById('accessibility-score-container');

/******** Theme Toggle *********/
let switchContainer = document.getElementById('switch-container');
let switchBtn = document.getElementById('switch-button')
let moonIcon = document.getElementById('moon-icon')
let sunIcon = document.getElementById('sun-icon')


/********* Indicators *******/
let questionNumber = 1;
let currentQuestion = 0;
let quizGenre = 0;
let progressWidth = 0;
let playerScore = 0;
let correctAnswer = ' ';
let userGuess = ' '
let answerChosen = false;
let answerGiven = false;
let isAnswerCorrect = false;
let toggleTheme = true;



/******* Evenet Listeners  *********/
switchContainer.addEventListener("click", toggleThemeSlider);

quizTopic.forEach(function (element) {
   element.addEventListener('click', populateQuiz)
})

userAnswerInput.forEach(function (element) {
   element.addEventListener('change', userInput)

})

quizOption.forEach(function (element) {

   element.addEventListener('mouseover', inputHover)
   element.addEventListener('mouseout', inputHoverOut)
})




submitBtn.addEventListener("click", checkAnswer);
newQuizBtn.addEventListener('click', newQuiz)

/******** Functions ********** */

function inputHover() {
   console.log('triggered')
   this.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#F6E7FF"
   this.querySelector('.display-flex').querySelector('.letter').style.color = "#A729F5"
   
}

function inputHoverOut() {
   console.log('triggered')
   this.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#F4F6FA"
   this.querySelector('.display-flex').querySelector('.letter').style.color = "#626C7F"
   
}

function populateQuiz() {
   quizGenre = this.value
   homeScreen.classList.add('hidden')
   quizScreen.classList.remove('hidden')
   quizHeadingContainer.style.opacity = "1"
   populateQuestions()

   for (let i = 0; i < quizGenreImg.length; i++) {
      quizGenreHeading[i].innerHTML = quizzes[quizGenre].title
      quizGenreImg[i].src = quizzes[quizGenre].icon
      if (this.value == 0) {
         quizGenreImg[i].style.backgroundColor = '#FFF1E9';
      } else if (this.value == 1) {
         quizGenreImg[i].style.backgroundColor = '#E0FDEF';
      } else if (this.value == 2) {
         quizGenreImg[i].style.backgroundColor = '#EBF0FF'
      } else {
         quizGenreImg[i].style.backgroundColor = '#F6E7FF'
      }
   }

}

function populateQuestions() {

   currentQuestionNumber.innerHTML = questionNumber
   question.innerHTML = quizzes[quizGenre].questions[currentQuestion].question
   answerA.innerHTML = quizzes[quizGenre].questions[currentQuestion].options[0]
   answerB.innerHTML = quizzes[quizGenre].questions[currentQuestion].options[1]
   answerC.innerHTML = quizzes[quizGenre].questions[currentQuestion].options[2]
   answerD.innerHTML = quizzes[quizGenre].questions[currentQuestion].options[3]
   correctAnswer = quizzes[quizGenre].questions[currentQuestion].answer
   progressWidth = questionNumber * 10
   progressBar.style.width = progressWidth + '%'
   if (answerA.innerHTML == correctAnswer) {
      aImg.src = "./assets/images/icon-correct.svg"
      aImg.classList.add('correct')
   } else {
      aImg.src = "./assets/images/icon-incorrect.svg"
   }

   if (answerB.innerHTML == correctAnswer) {
      bImg.src = "./assets/images/icon-correct.svg"
      bImg.classList.add('correct')
   } else {
      bImg.src = "./assets/images/icon-incorrect.svg"
   }

   if (answerC.innerHTML == correctAnswer) {
      cImg.src = "./assets/images/icon-correct.svg"
      cImg.classList.add('correct')
   } else {
      cImg.src = "./assets/images/icon-incorrect.svg"
   }

   if (answerD.innerHTML == correctAnswer) {
      dImg.src = "./assets/images/icon-correct.svg"
      dImg.classList.add('correct')
   } else {
      dImg.src = "./assets/images/icon-incorrect.svg"
   }
}

function userInput() {
   emptyMsg.style.opacity = '0'
   userGuess = quizzes[quizGenre].questions[currentQuestion].options[this.value]
   answerChosen = true;
   userAnswerInput.forEach(function (element) {
      if (element.checked == true) {
         element.nextElementSibling.style.border = "2px solid #A729F5"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#A729F5"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.color = "white"
      } else {
         element.nextElementSibling.style.border = "2px solid #3f4c65"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#F4F6FA"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.color = "#626C7F"
      }

   });
}

function checkAnswer() {
   if (answerChosen) {
      if (answerGiven && questionNumber <= 10) {
         answerChosen = false
         answerGiven = false
         questionNumber += 1
         currentQuestion += 1
         submitBtn.innerHTML = '<h4>Submit Answer</h4>'
         userAnswerInput.forEach(function (radio) {
            radio.checked = false;
            radio.nextElementSibling.querySelector('img').style.opacity = '0'
            radio.nextElementSibling.style.border = '2px solid #3f4c65'
            radio.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#F4F6FA"
            radio.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.color = "#626C7F"
         });

         aImg.classList.remove('correct')
         bImg.classList.remove('correct')
         cImg.classList.remove('correct')
         dImg.classList.remove('correct')
         if (questionNumber == 11) {
            quizScreen.classList.add('hidden')
            finalScore.innerHTML = playerScore
            scoreScreen.classList.remove('hidden')
         }
         populateQuestions()
         isAnswerCorrect = false


      } else {

         if (correctAnswer == userGuess) {
            playerScore += 1;
            isAnswerCorrect = true

            submitBtn.innerHTML = '<h4>Next Question</h4>'
            if (questionNumber == 10) {
               submitBtn.innerHTML = '<h4>See Results</h4>'
            }
         } else {
            submitBtn.innerHTML = '<h4>Next Question</h4>'
            if (questionNumber == 10) {
               submitBtn.innerHTML = '<h4>See Results</h4>'
            }
         }
         giveAnswer()



         correctAnswer = ''
         userGuess = ''
         answerGiven = true
      }
   } else if (answerChosen == false) {
      emptyMsg.style.opacity = '1'
   }
}

function giveAnswer() {
   userAnswerInput.forEach(function (element) {
      if (element.checked == true && isAnswerCorrect) {
         element.nextElementSibling.querySelector('img').style.opacity = '1'
         element.nextElementSibling.style.border = "2px solid #26D782"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#26D782"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.color = "white"
      } else if (element.checked == true) {
         element.nextElementSibling.querySelector('img').style.opacity = '1'
         element.nextElementSibling.style.border = "2px solid #EE5454"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.backgroundColor = "#EE5454"
         element.nextElementSibling.querySelector('.display-flex').querySelector('.letter').style.color = "white"


      }

      if (element.nextElementSibling.querySelector('img').classList.contains('correct')) {
         element.nextElementSibling.querySelector('img').style.opacity = '1'
      }

   });
}

function newQuiz() {
   if (quizGenre == 0) {
      htmlScore.innerHTML = playerScore
      htmlScoreContainer.classList.remove('hidden')
   } else if (quizGenre == 1) {
      cssScore.innerHTML = playerScore
      cssScoreContainer.classList.remove('hidden')
   } else if (quizGenre == 2) {
      jsScore.innerHTML = playerScore
      jsScoreContainer.classList.remove('hidden')
   } else {
      accessibilityScore.innerHTML = playerScore
      accessibilityScoreContainer.classList.remove('hidden')
   }
   homeScreen.classList.remove('hidden')
   scoreScreen.classList.add('hidden')
   playerScore = 0
   questionNumber = 1;
   currentQuestion = 0;
   quizGenre = 0;
   progressWidth = 0;
   correctAnswer = ' ';
   userGuess = ' '
   answerChosen = false;
   answerGiven = false;
}

function toggleThemeSlider() {
   if (toggleTheme) {
      switchBtn.style.transform = "translateX(-20px)";
      document.body.classList.add('light-theme')
      toggleTheme = false;
      sunIcon.src = "./assets/images/icon-sun-dark.svg"
      moonIcon.src = "./assets/images/icon-moon-dark.svg"
      progressBarContainer.classList.add('light-theme')
      for (let i = 0; i < quizOptionContainer.length; i++) {
         quizOptionContainer[i].classList.add('light-theme')
      }
   } else {
      switchBtn.style.transform = "translateX(0px)";
      document.body.classList.remove('light-theme')
      toggleTheme = true;
      sunIcon.src = "./assets/images/icon-sun-light.svg"
      moonIcon.src = "./assets/images/icon-moon-light.svg"
      progressBarContainer.classList.remove('light-theme')
      for (let i = 0; i < quizOptionContainer.length; i++) {
         quizOptionContainer[i].classList.remove('light-theme')
      }
   }
}



