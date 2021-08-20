window.addEventListener("DOMContentLoaded", (event) => {

    fetch('assets/js/products.json')
        .then(response => response.json())
        .then((data) => {
            data.console.map((item) => {
                let productName = item.name
                let reference = item.reference
                let price = item.price
                let picture = item.picture
                let category = item.category

                document.getElementById('console').innerHTML += `<div class='col-md-3 col-lg-3 col-sm-6 border'><img src="${picture}"></img> ${productName}, ${price} euros  <br><input data-ref= ${reference} data-product = ${productName} data-price = ${price} type="image" class="addToCart" src="assets/img/addToCart.png"></div>`
            })
        })
    fetch('assets/js/products.json')
        .then(response => response.json())
        .then((data) => {
            data.games.map((item) => {
                let productName = item.name
                let reference = item.reference
                let price = item.price
                let picture = item.picture
                let category = item.category

                document.getElementById('games').innerHTML += `<div class='col-md-3 col-lg-3 col-sm-6 border'><img src="${picture}"></img> ${productName}, ${price} euros  <br><input data-ref= ${reference} data-product = ${productName} data-price = ${price} type="image" class="addToCart" src="assets/img/addToCart.png"></div>`
            })
        })
    fetch('assets/js/products.json')
        .then(response => response.json())
        .then((data) => {
            data.accessories.map((item) => {
                let productName = item.name
                let reference = item.reference
                let price = item.price
                let picture = item.picture
                let category = item.category

                document.getElementById('accessories').innerHTML += `<div  class='col-md-3 col-lg-3 col-sm-6 border'><img src="${picture}"></img> ${productName}, ${price} euros  <br><input data-ref= ${reference} data-product = ${productName} data-price = ${price} type="image" class="addToCart" src="assets/img/addToCart.png"></div>`
            })

let btnAddToCart = document.getElementsByClassName('addToCart') 
for (let i = 0; i < btnAddToCart.length; i++) {
btnAddToCart[i].addEventListener('click', addToCart)
}
        })
})

let cart = []

function addToCart(name, id, price, count) {
    let array = []
    let product = this.dataset.product;
    let ref = this.dataset.ref
    let productPrice = this.dataset.price;
    array.push(product, ref, productPrice)
    cart.push(array)
    console.log(cart)
    this.count = count;
  }










// for (let i = 0; i < btnAddToCart.length; i++) {
//     btnAddToCart[i].addEventListener('click', function () {
//         console.log("test");
//     });
// }



