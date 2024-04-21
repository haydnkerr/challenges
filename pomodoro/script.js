window.onload = setInterval(timerUpdate, 1000)

/******* Timer Variables ***********/

let timerActive = false;
let currentTime = document.getElementById('current-time')
let pauseTimerBtn = document.getElementById('pause-timer-btn')
let circleTracker = document.getElementById('circle-tracker')
let toggleIndicator = document.getElementById('toggle-indicator')
let toggleChoiceBtn = document.querySelectorAll('.toggle-choice')
let openModalBtn = document.getElementById('open-modal-btn')

let minutes = 5
let seconds = 0
let pomodoroMinutes = 25
let shortBreakMinutes = 5
let longBreakMinutes = 20
let colorTheme = 'coral'
let fontTheme = ''
let clockAnimationTime = 0

/*********** Event Listeners ***************/
pauseTimerBtn.addEventListener('click', pauseTimer)
openModalBtn.addEventListener('click', toggleModal)
toggleChoiceBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let num = this.value
        seconds = 0
        timerActive = false
        toggleIndicator.style.left = num + "%"
        pauseTimerBtn.innerHTML = "start"
        circleTracker.style.animationPlayState = 'paused'
        circleTracker.style.animationDuration = "500s"
        if (num == 0) {
            minutes = pomodoroMinutes
        } else if (num == 33) {
            minutes = shortBreakMinutes
        } else {
            minutes = longBreakMinutes
        }
        currentTime.innerHTML = minutes + ":00"
    })

})

/********* Settings Modal **********/
/***********Variables **************/
let settingsModal = document.getElementById('settings-modal')
let pomodoroValue = document.querySelector('.pomodoro-value')
let shortBreakValue = document.querySelector('.short-break-value')
let longBreakValue = document.querySelector('.long-break-value')
let fontPickerBtn = document.querySelectorAll('.font-picker-btn')
let colorPickerBtn = document.querySelectorAll('.color-picker-btn')
let closeModalBtn = document.getElementById('close-modal-btn')

let applySettingsBtn = document.getElementById('apply-settings-btn')

/************ Event Listeners **************/
closeModalBtn.addEventListener('click', toggleModal)
applySettingsBtn.addEventListener('click', toggleModal)
pomodoroValue.addEventListener('input', function() {
    pomodoroMinutes = this.value
})

shortBreakValue.addEventListener('input', function() {
    shortBreakMinutes = this.value
})

longBreakValue.addEventListener('input', function() {
    longBreak = this.value
})

fontPickerBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        fontTheme = this.value;
        for(let i=0; i < fontPickerBtn.length; i++) {
            fontPickerBtn[i].classList.remove('active')
        }
        this.classList.add('active')
    })
})

colorPickerBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        colorTheme = this.value
        document.documentElement.style.setProperty('--primary-color', colorTheme);
        for(let i=0; i < colorPickerBtn.length; i++) {
            colorPickerBtn[i].classList.remove('active')
        }
        this.classList.add('active')
    })
})

/*************** Functions **************/
function timerUpdate() {
    if (timerActive) {
        clockAnimationTime = minutes * 60
        circleTracker.style.animationDuration = clockAnimationTime + "s"
        seconds -= 1;

        if (seconds < 0 && minutes > 0) {
            seconds = 59
                minutes -= 1
            
        }

        if (minutes < 10) {
            if (seconds < 10) {
                currentTime.innerHTML = "0" + minutes + ":0" + seconds
            } else {
                currentTime.innerHTML = "0" + minutes + ":" + seconds
            }
        } else if (seconds < 10) {
            currentTime.innerHTML = minutes + ":0" + seconds
        } else {
            currentTime.innerHTML = minutes + ":" + seconds

        }
    }

    if (seconds == 0 && minutes == 0) {
            timerActive = false
            circleTracker.style.animationPlayState = "paused"
    }
}

function pauseTimer() {
    if (timerActive) {
        timerActive = false
        pauseTimerBtn.innerHTML = "resume"
        circleTracker.style.animationPlayState = 'paused'
    } else {
        timerActive = true
        pauseTimerBtn.innerHTML = "pause"
        circleTracker.style.animationPlayState = 'running'
    }
}



function toggleModal() {
    settingsModal.classList.toggle('display-none')
}


/************ Line for color ***********/



let countryList = document.querySelector('.country-list')


fetch('data.json')
.then(response => response.json())
.then(data => {
    for(let i = 0; i < data.length; i++) {
        let rowCol = document.createElement('div')
        rowCol.classList.add('col-sm-6', 'col-md-4', 'col-lg-3')
        let country = document.createElement('button')
        country.value = data[i].name
        country.classList.add('country-btn', 'card', 'w-100')
        country.style.overflow = 'hidden'

        let countryFlag = document.createElement('img')
    
        countryFlag.src = data[i].flags.png
        countryFlag.classList.add('card-img-top')
        countryFlag.style.height = '160px'
        countryFlag.style.width = '100%'
        countryFlag.style.objectFit = 'cover'

        let countryInfo = document.createElement('div')
        countryInfo.classList.add('card-body')
        let countryName = document.createElement('h2')
        countryName.innerHTML = data[i].name
        let countryPopulation = document.createElement('p')
        countryPopulation.innerHTML = '<strong>Population: </strong>' + data[i].population
        let countryRegion = document.createElement('p')
        countryRegion.innerHTML = '<strong>Region: </strong>' + data[i].region
        let countryCapital = document.createElement('p')
        countryCapital.innerHTML = '<strong>Capital: </strong>' + data[i].capital


        countryInfo.append(countryName)
        countryInfo.append(countryPopulation)
        countryInfo.append(countryRegion)
        countryInfo.append(countryCapital)
        country.append(countryFlag)
        country.append(countryInfo)
        rowCol.append(country)
        countryList.append(rowCol)
    }

    
})
