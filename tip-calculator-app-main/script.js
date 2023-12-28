let tipBtn = document.querySelectorAll('.tip-btn');
let billTotalInput = document.getElementById('bill-total-input')
let numPeopleInput = document.getElementById('total-people-input')
let customTip = document.getElementById('custom-tip-input')
let peopleError = document.getElementById('people-error')
let tipError = document.getElementById('tip-error')

let tipAmountTotalDisplay = document.getElementById('tip-amount-total-display')
let totalDisplay = document.getElementById('total-display')
let resetBtn = document.getElementById('reset-btn')

let tipValue = 0.05
let numPeople = 0
let billAmount = 0
let tipAmountPerPerson = 0
let totalperPerson = 0
let tipAmountTotal = 0
let totalAmountPerson = 0


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

customTip.addEventListener('input', customTipInput)

resetBtn.addEventListener('click', resetValues)

function updateNumPeople() {
    numPeople = this.value
    if (numPeople == 0) {
        peopleError.classList.remove('hidden')
        this.style.border = '2px solid red'
    } else {
        peopleError.classList.add('hidden')
        this.style.border = '2px solid hsl(189, 41%, 97%)'
    }
    calculateTip()
    console.log(numPeople)
}

function customTipInput() {
    for (let i = 0; i < tipBtn.length; i++) {
        tipBtn[i].classList.remove('active-tip')
    }
    tipValue = this.value / 100
    calculateTip()
}

function updateBillTotal() {
    billAmount = this.value

    if (billAmount == 0) {
        tipError.classList.remove('hidden')
        this.style.border = '2px solid red'
    } else {
        tipError.classList.add('hidden')
        this.style.border = '2px solid hsl(189, 41%, 97%)'
    }
    calculateTip()
}

function updateTip(element) {

    tipValue = element.value
    calculateTip()
    console.log(tipValue)
}

function calculateTip() {

    if (billAmount > 0 && numPeople > 0) {
        tipAmountTotal = (billAmount * tipValue) / numPeople
        totalAmountPerson = (billAmount / numPeople) + tipAmountTotal


        tipAmountPerPerson = parseFloat(tipAmountTotal.toFixed(2))
        totalperPerson = parseFloat(totalAmountPerson.toFixed(2))

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
    billTotalInput.value = ''
    numPeopleInput.value = ''
}