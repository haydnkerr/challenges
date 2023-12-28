let summaryList = document.getElementById("summary-list")
let storedJsonData = [];
fetch('data.json')

    .then(response => response.json())
    .then(data => {

        localStorage.setItem('myJsonData', JSON.stringify(data));

        // storedJsonData.push(JSON.parse(localStorage.getItem('myJsonData')));

        storedJsonData = JSON.parse(localStorage.getItem('myJsonData'));

        // Add a new item to the array
        let newItem = {
            "category": "NewCategory",
            "score": 90,
            "icon": "./assets/images/icon-new.svg"
        };

        storedJsonData.push(newItem);

        // Update the stored JSON array in local storage
        localStorage.setItem('myJsonData', JSON.stringify(storedJsonData));

        console.log(storedJsonData);



    })


    .catch(error => {
        console.error('Error fetching JSON:', error);
    });


