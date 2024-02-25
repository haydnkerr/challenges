let scoresContainer = document.querySelector('.scores-container')
let totalScore = document.querySelector('.total-score')
let score = 0
let sumOfScores = 0

window.addEventListener('load', populate)

function populate() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {

                let scoreCard = document.createElement('div')
                scoreCard.classList.add('score-card')
                scoreCard.id = data[i].category.toLowerCase()

                let leftSide = document.createElement('div')
                leftSide.classList.add('space-between')

                let image = document.createElement('img')
                image.src = data[i].icon



                let title = document.createElement('p')
                title.classList.add(data[i].category.toLowerCase())
                title.innerHTML = data[i].category

                leftSide.appendChild(image)
                leftSide.appendChild(title)

                let rightSide = document.createElement('div')
                let score = document.createElement('p')
                score.innerHTML = data[i].score 

                let opaque = document.createElement('span')
                opaque.classList.add('opaque-text')
                opaque.innerHTML = " / 100"

                score.appendChild(opaque)

                rightSide.append(score)

                scoreCard.appendChild(leftSide)
                scoreCard.appendChild(rightSide)
                scoresContainer.append(scoreCard)

                sumOfScores += data[i].score
            }

            score = Math.floor(sumOfScores / 4)

            totalScore.innerHTML = score
        })
        .catch(error => {
            console.error('There was an error', error)
        })
}


