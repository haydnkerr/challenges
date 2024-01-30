let usernameSearch = 'haydnkerr'
let userInput = document.getElementById('user-input')
let searchBtn = document.getElementById('search-btn')
let name = document.getElementById('name')
let username = document.getElementById('username')
let dateJoined = document.getElementById('date-joined')
let userAvatar = document.getElementById('user-avatar')
let bio = document.getElementById('bio')
let reposStat = document.getElementById('repos-stat')
let followersStat = document.getElementById('followers-stat')
let followingStat = document.getElementById('following-stat')
let userLocation = document.getElementById('user-location')
let gitLink = document.getElementById('git-link')
let twitter = document.getElementById('twitter')
let company = document.getElementById('company')

let darkTheme = true
let themeToggle = document.getElementById('theme-toggle')

/************ Event Listeners ****************/
userInput.addEventListener('input', function() {
    usernameSearch = userInput.value
    console.log(usernameSearch)
})

searchBtn.addEventListener('click', populateUser);

themeToggle.addEventListener('click', toggleTheme);

/******************** Functions ****************/

function populateUser() {
    
    fetch("https://api.github.com/users/" + usernameSearch)

        .then(response => {
            return response.json()
        })


        .then(data => {
            name.innerHTML = data.name
            username.innerHTML = data.login
            userAvatar.src = data.avatar_url
            dateJoined.innerHTML = data.created_at
            bio.innerHTML = data.bio
            reposStat.innerHTML = data.public_repos
            followersStat.innerHTML = data.followers
            followingStat.innerHTML = data.following
            userLocation.innerHTML = data.location
            twitter.innerHTML = data.twitter_username
            company.innerHTML = data.company
            gitLink.innerHTML = data.html_url
        })
}

function toggleTheme() {
    let div = document.documentElement.style
    if(darkTheme) {
        div.setProperty('--primary-color','#fff' )
        div.setProperty('--secondary-color', '#f6f8fd')
        div.setProperty('--main-fontColor', 'black')
        div.setProperty('--secondary-fontColor', 'black')
        div.setProperty('--accent-color', '#3478f5')
        darkTheme = false
    } else {
        div.setProperty('--primary-color', '#161c2e')
        div.setProperty('--secondary-color', '#212a46')
        div.setProperty('--main-fontColor', '#fff')
        div.setProperty('--secondary-fontColor', '#7d808a')
        div.setProperty('--accent-color', '#3478f5')
        darkTheme = true
    }


}









