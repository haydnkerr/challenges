// let criteriaCheckbox = document.querySelectorAll('.criteria-checkbox')

let uppercase = document.getElementById('uppercase-checkbox');

uppercase.addEventListener('input', criteria)

function criteria() {
    if (this.checked) {
        console.log("yes")
    }
    
}








// function myFunction(e) {


//     console.log(e.value)

// }

// criteriaCheckbox.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         myFunction(btn);
//     });
// });