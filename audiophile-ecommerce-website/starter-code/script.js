
let productImg = document.getElementById('product-img')
let productHeading = document.getElementById('product-heading')
let decreaseQuantityBtn = document.getElementById('decrease-quantity-btn')
let increaseQuantityBtn = document.getElementById('increase-quantity-btn')
let itemQuantityIndicator = document.getElementById('item-quantity-indicator')
let itemExtrasList = document.getElementById('item-extras-list')
let productDescription = document.getElementById('product-description')
let productFeatures = document.getElementById('product-features')
let productPrice = document.getElementById('product-price')
let productImgOne = document.getElementById('product-img-one')
let productImgTwo = document.getElementById('product-img-two')
let productImgThree = document.getElementById('product-img-three')

let productCardOneImg = document.getElementById('product-card-one-img')
let productCardOneHeading = document.getElementById('product-card-one-heading')
let productCardOneBtn = document.getElementById('product-card-one-btn')
let productCardTwoImg = document.getElementById('product-card-two-img')
let productCardTwoHeading = document.getElementById('product-card-two-heading')
let productCardTwoBtn = document.getElementById('product-card-two-btn')
let productCardThreeImg = document.getElementById('product-card-three-img')
let productCardThreeHeading = document.getElementById('product-card-three-heading')
let productCardThreeBtn = document.getElementById('product-card-three-btn')

/***** Home Buttons *******/
let homeX99TwoBtn = document.getElementById('home-x99-ii-product-btn')
let homeZx9Btn = document.getElementById('home-zx9-product-btn')
let homeZx7Btn = document.getElementById('home-zx7-product-btn')
let homeYx1Btn = document.getElementById('home-yx1-product-btn')

// let xx99ProductBtn = document.getElementById('xx99-mark-one-headphones')
// let xx59ProductBtn = document.getElementById('xx59-headphones')
// let zx9ProductBtn = document.getElementById('zx9-speaker')
// let xx99TwoProductBtn = document.getElementById('xx99-mark-two-headphones')
// let zx7ProductBtn = document.getElementById('zx7-speaker')

homeX99TwoBtn.addEventListener('click', function () {
    n = 3;
    localStorage.setItem('nValue', n);
    window.location.assign('product-page.html');
})

homeZx9Btn.addEventListener('click', function () {
    n = 5;
    localStorage.setItem('nValue', n);
    window.location.assign('product-page.html');
})

homeZx7Btn.addEventListener('click', function () {
    n = 4;
    localStorage.setItem('nValue', n);
    window.location.assign('product-page.html');
})

homeYx1Btn.addEventListener('click', function () {
    n = 0;
    localStorage.setItem('nValue', n);
    window.location.assign('product-page.html');
})


let quantity = 1

increaseQuantityBtn.addEventListener('click', increaseQuantity)
decreaseQuantityBtn.addEventListener('click', decreaseQuantity)



function increaseQuantity() {
    quantity += 1
    itemQuantityIndicator.value = quantity
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity -= 1
        itemQuantityIndicator.value = quantity
    }

}

// function populateProductPage(num) {

//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });

//     window.location.assign('product-page.html');


//     fetch('data.json')
//         .then(response => response.json())
//         .then(data => {

//             while (itemExtrasList.firstChild) {
//                 itemExtrasList.removeChild(itemExtrasList.firstChild)
//             }

//             productImg.src = data[num].image.mobile
//             productHeading.innerHTML = data[num].name
//             productDescription.innerHTML = data[num].description
//             productFeatures.innerHTML = data[num].features
//             productPrice.innerHTML = data[num].price

//             productImgOne.src = data[num].gallery.first.mobile
//             productImgTwo.src = data[num].gallery.second.mobile
//             productImgThree.src = data[num].gallery.third.mobile

//             productCardOneHeading.innerHTML = data[num].others[0].name
//             productCardOneBtn.id = data[num].others[0].slug
//             productCardOneImg.src = data[num].others[0].image.mobile

//             productCardTwoHeading.innerHTML = data[num].others[1].name
//             productCardTwoBtn.id = data[num].others[1].slug
//             productCardTwoImg.src = data[num].others[1].image.mobile

//             productCardThreeHeading.innerHTML = data[num].others[2].name
//             productCardThreeBtn.id = data[num].others[2].slug
//             productCardThreeImg.src = data[num].others[2].image.mobile


//             for (let i = 0; i < data[num].includes.length; i++) {
//                 let newDiv = document.createElement('div')
//                 newDiv.innerHTML = "<p class=orange-font>" + data[num].includes[i].quantity + "x</p>" + "<p>" + data[num].includes[i].item + "</p>"
//                 newDiv.classList.add('item-count-container')
//                 itemExtrasList.appendChild(newDiv)
//             }

//             let xx99ProductBtn = document.getElementById('xx99-mark-one-headphones')
//             let xx59ProductBtn = document.getElementById('xx59-headphones')
//             let zx9ProductBtn = document.getElementById('zx9-speaker')
//             let xx99TwoProductBtn = document.getElementById('xx99-mark-two-headphones')
//             let zx7ProductBtn = document.getElementById('zx7-speaker')
//             let yx1ProductBtn = document.getElementById('yx1-earphones')

//             if (xx99ProductBtn != null) {
//                 xx99ProductBtn.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     populateProductPage(2);

//                 })
//             } else {
//                 console.log('false')
//             };

//             if (xx99TwoProductBtn != null) {
//                 xx99TwoProductBtn.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     populateProductPage(3);

//                 })
//             } else {
//                 console.log('false')
//             };

//             if (zx9ProductBtn != null) {
//                 zx9ProductBtn.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     populateProductPage(5);

//                 })
//             } else {
//                 console.log('false')
//             };

//             if (zx7ProductBtn != null) {
//                 zx7ProductBtn.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     populateProductPage(4);

//                 })
//             } else {
//                 console.log('false')
//             };

//             if (yx1ProductBtn != null) {
//                 yx1ProductBtn.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     populateProductPage(0);

//                 })
//             } else {
//                 console.log('false')
//             };

//             if (xx59ProductBtn != null) {
//                 xx59ProductBtn.addEventListener('click', function (event) {
//                     event.preventDefault();
//                     populateProductPage(1);

//                 })
//             } else {
//                 console.log('false')
//             };

//         })
//         .catch(error => {
//             console.error('Error fetching JSON:', error);
//         });
// }



// fetch('data.json')

//     .then(response => response.json())
//     .then(data => {



//         productImg.src = data[n].image.mobile
//         productHeading.innerHTML = data[n].name
//         productDescription.innerHTML = data[n].description
//         productFeatures.innerHTML = data[n].features
//         productPrice.innerHTML = data[n].price

//         productImgOne.src = data[n].gallery.first.mobile
//         productImgTwo.src = data[n].gallery.second.mobile
//         productImgThree.src = data[n].gallery.third.mobile

//         productCardOneHeading.innerHTML = data[n].others[0].name
//         productCardOneBtn.id = data[n].others[0].slug
//         productCardOneImg.src = data[n].others[0].image.mobile

//         productCardTwoHeading.innerHTML = data[n].others[1].name
//         productCardTwoBtn.id = data[n].others[1].slug
//         productCardTwoImg.src = data[n].others[1].image.mobile

//         productCardThreeHeading.innerHTML = data[n].others[2].name
//         productCardThreeBtn.id = data[n].others[2].slug
//         productCardThreeImg.src = data[n].others[2].image.mobile


//         for (let i = 0; i < data[n].includes.length; i++) {
//             let newDiv = document.createElement('div')
//             newDiv.innerHTML = "<p class=orange-font>" + data[n].includes[i].quantity + "x</p>" + "<p>" + data[n].includes[i].item + "</p>"
//             newDiv.classList.add('item-count-container')
//             itemExtrasList.appendChild(newDiv)
//         };

//         let xx99ProductBtn = document.getElementById('xx99-mark-one-headphones')
//         let xx59ProductBtn = document.getElementById('xx59-headphones')
//         let zx9ProductBtn = document.getElementById('zx9-speaker')
//         let xx99TwoProductBtn = document.getElementById('xx99-mark-two-headphones')
//         let zx7ProductBtn = document.getElementById('zx7-speaker')
//         let yx1ProductBtn = document.getElementById('yx1-earphones')

//         if (xx99ProductBtn != null) {
//             xx99ProductBtn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 populateProductPage(2);

//             })
//         } else {
//             console.log('false')
//         };

//         if (xx99TwoProductBtn != null) {
//             xx99TwoProductBtn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 populateProductPage(3);

//             })
//         } else {
//             console.log('false')
//         };

//         if (zx9ProductBtn != null) {
//             zx9ProductBtn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 populateProductPage(5);

//             })
//         } else {
//             console.log('false')
//         };

//         if (zx7ProductBtn != null) {
//             zx7ProductBtn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 populateProductPage(4);

//             })
//         } else {
//             console.log('false')
//         };

//         if (yx1ProductBtn != null) {
//             yx1ProductBtn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 populateProductPage(0);

//             })
//         } else {
//             console.log('false')
//         };

//         if (xx59ProductBtn != null) {
//             xx59ProductBtn.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 populateProductPage(1);

//             })
//         } else {
//             console.log('false')
//         };



//     })
//     .catch(error => {
//         console.error('Error fetching JSON:', error);
//     });




// xx99ProductBtn.addEventListener('click', function (event) {
//     if (event.target.id == 'xx99-mark-one-headphones') {
//         event.preventDefault()
//         populateProductPage(2);
//     }

// });




/******** Creating the Cart  **************/
let cartObjects = []
function createCartObject(quantity, price, product) {

}

