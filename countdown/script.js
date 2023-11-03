

// let countDownDate = new Date("Dec 12, 2023 19:00:00").getTime()
let countDownDate = new Date("Nov 3, 2023 20:15:00").getTime()

let daysLeft = document.getElementById('days')
let hoursLeft = document.getElementById('hours')
let minsLeft = document.getElementById('minutes')
let secsLeft = document.getElementById('seconds')
let countdownInterface = document.getElementById('countdown-interface')
let ratInterface = document.getElementById('rat')

const d = new Date();
let time = d.getTime();
    let difference = countDownDate - time;


let days = Math.floor(difference / (1000 * 60 * 60 * 24));
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let mins = Math.floor(((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))
let secs = Math.floor((((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000)

if (days < 10) {
    daysLeft.innerHTML = '0' + days
} else {
    daysLeft.innerHTML = days
}

if (hours < 10) {
    hoursLeft.innerHTML = '0' + hours
} else {
    hoursLeft.innerHTML = hours
}

if (mins < 10) {
    minsLeft.innerHTML = '0' + mins
} else {
    minsLeft.innerHTML = mins
}

if (secs < 10) {
    secsLeft.innerHTML = '0' + secs
} else {
    secsLeft.innerHTML = secs
}






setInterval (function() {
    const d = new Date();
let time = d.getTime();
    let difference = countDownDate - time;
    if (difference < 0) {
        quizTime()
    }

let days = Math.floor(difference / (1000 * 60 * 60 * 24));
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let mins = Math.floor(((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))
let secs = Math.floor((((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000)

if (days < 10) {
    daysLeft.innerHTML = '0' + days
} else {
    daysLeft.innerHTML = days
}

if (hours < 10) {
    hoursLeft.innerHTML = '0' + hours
} else {
    hoursLeft.innerHTML = hours
}

if (mins < 10) {
    minsLeft.innerHTML = '0' + mins
} else {
    minsLeft.innerHTML = mins
}

if (secs < 10) {
    secsLeft.innerHTML = '0' + secs
} else {
    secsLeft.innerHTML = secs
}
},1000)

function quizTime() {
    ratInterface.classList.remove('display-none')
    countdownInterface.classList.add('display-none')
    
}



