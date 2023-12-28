let tipBtn = document.querySelectorAll('.tip-btn');
let billTotalInput = document.getElementById('bill-total-input')
let numPeopleInput = document.getElementById('total-people-input')

let tipAmountTotalDisplay = document.getElementById('tip-amount-total-display')
let totalDisplay = document.getElementById('total-display')
let resetBtn = document.getElementById('reset-btn')

let tipValue = 0.05
let numPeople = 0
let billAmount = 0
let tipAmountPerPerson = 0
let totalperPerson = 0
let tipAmountCalc = 0
let totalCalc = 0

tipBtn.forEach(function (element) {
    element.addEventListener('click', function () {
        for (let i = 0; i < tipBtn.length; i++) {
            tipBtn[i].classList.remove('active-tip')
        }
        element.classList.add('active-tip')
        updateTip(element)
    })
})

billTotalInput.addEventListener('input', updateBillTotal)

numPeopleInput.addEventListener('input', updateNumPeople)

resetBtn.addEventListener('click', resetValues)

function updateNumPeople() {
    numPeople = this.value
    calculateTip()
    console.log(numPeople)
}

function updateBillTotal() {
    billAmount = this.value
    calculateTip()
    console.log(billAmount)
}

function updateTip(element) {

    tipValue = element.value
    calculateTip()
    console.log(tipValue)
}

function calculateTip() {

    if (billAmount > 0 && numPeople > 0) {
        tipAmountCalc = (billAmount * tipValue) / numPeople
        totalCalc = (billAmount / numPeople) + tipAmountPerPerson

        tipAmountPerPerson = tipAmountCalc.toFixed(2)
        totalperPerson = totalCalc.toFixed()

        tipAmountTotalDisplay.innerHTML = '$' + tipAmountPerPerson
        totalDisplay.innerHTML = '$' + totalperPerson
    }
}

function resetValues() {
    tipValue = 0
    numPeople = 0
    billAmount = 0
    tipAmountPerPerson = 0
    totalperPerson = 0
    tipAmountTotalDisplay.innerHTML = '$' + tipAmountPerPerson
    totalDisplay.innerHTML = '$' + totalperPerson
}