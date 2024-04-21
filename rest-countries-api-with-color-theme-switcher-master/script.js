let countryList = document.querySelector('.country-container')
let singleCountry = document.querySelector('.single-country')

fetch('data.json')
.then(response => response.json())
.then(data => {
    // let singleRow = document.createElement('div')
    // singleRow.classList.add('row')
    // let singleCol = document.createElement('div')
    // singleCol.classList.add('col-6')
    // let singleCountryFlag = document.createElement('img')
    //     singleCountryFlag.src = data[2].flags.png
    //     singleCountryFlag.style.height = '100%'

    //     singleCol.append(singleCountryFlag)
    //     singleRow.append(singleCol)
    //     singleCountry.append(singleRow)



    for (let i = 0; i < data.length; i++) {
        let rowCol = document.createElement('div')
        rowCol.classList.add('col-sm-6','col-md-4','col-lg-3')
        let country = document.createElement('button')
        country.value = data[i].name 
        country.classList.add('country-btn', 'card', 'w-100', 'shadow-sm')
        country.style.overflow = 'hidden'

        let countryFlag = document.createElement('img')
        countryFlag.src = data[i].flags.png
        countryFlag.classList.add('card-img-top')
        countryFlag.style.height = '160px'
        countryFlag.style.width = '100%'


        let countryInfo = document.createElement('div')
        countryInfo.classList.add('card-body')
        let countryName = document.createElement('h2')
        countryName.innerHTML = '<strong>'+ data[i].name + '</strong>'
        let countryPopulation = document.createElement('p')
        countryPopulation.innerHTML = '<strong>Population: </strong>' +  data[i].population
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