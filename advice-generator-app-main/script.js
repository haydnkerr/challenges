window.onload = populateQuote()

let quoteNumber = document.getElementById('quote-number')
let quote = document.getElementById('quote')
let quoteBtn = document.getElementById('generate-quote-btn')

quoteBtn.addEventListener('click', populateQuote)

function populateQuote() {
    fetch('https://api.adviceslip.com/advice')

    .then(response => {

        return response.json()
    })

    .then(data => {
        let name = data.slip

        quoteNumber.innerHTML = name.id
        quote.innerHTML = name.advice
    })
}






