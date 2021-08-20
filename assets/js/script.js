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
                createEvent()
            })

        })

})
// let cart = []
// let btnAddToCart = document.getElementsByClassName('addToCart');
// console.log(btnAddToCart)
// for (let i = 0; i < btnAddToCart.length; i++) {
//     btnAddToCart[i].onclick = (event) => {

//         let ref = event.target.dataset.ref;
//         cart.push(ref)
//         console.log(ref)
//         console.log(cart)
//     }
// }
var array = [];
var modalCart = document.getElementById("modalCart")
var articleInCart = []
let createEvent = () => {
    var btnAddToCart = document.querySelectorAll('.addToCart');
    btnAddToCart.forEach(element => {
        element.onclick = (event) => {
            let ref = event.target.dataset.ref;
            let product = event.target.dataset.product;
            let productPrice = event.target.dataset.price;
            let quantity = 1;
            if(localStorage.getItem(ref)){
                stock = JSON.parse(localStorage.getItem(ref))
                stock[3]++;
                console.log(stock);
                localStorage.setItem(ref,JSON.stringify(stock))
            }else{
                array = [product, productPrice, ref, quantity];
                localStorage.setItem(ref,JSON.stringify(array))
            }
            
            


            articleInCart = [];
            modalCart.innerHTML = "";
            Object.keys(localStorage).forEach(function(key){
                currentItem = JSON.parse(localStorage.getItem(key));
                productName = currentItem[0];
                productPrice = currentItem[1];
                productRef = currentItem[2];
                productQuantity = currentItem[3];
                let text = `<div>Nom : ${productName} , Prix = ${productPrice}, Quantité : ${productQuantity}</div>`
                articleInCart.push(text)
            });
            articleInCart.forEach(function(element){
                modalCart.innerHTML += element;
            })
        }
    });
}












// for (let i = 0; i < btnAddToCart.length; i++) {
// btnAddToCart[i].addEventListener('click', Item(name, id, price, count));
// }
//         })
// })
// let refls = localStorage.getItem('refls')
// let cart = []

// function Item(name, id, price, count) {
//     let array = JSON.parse(localStorage.getItem('cart'));
//     let product = this.dataset.product;
//     let ref = this.dataset.ref
//     let productPrice = this.dataset.price;
//     this.count = count;
//     array.push(ref);
//     JSON.stringify(localStorage.setItem('cart'));


// let array = []
// array.push(product,ref,productPrice)
// cart.push(array)
// console.log(cart)
// }


// function addToCart(){
//     let array = []
//     array.push(Item)
//     cart.push(array)
//     console.log(cart)
// }


// function clearCart(){
//     cart = []
// }

// array.push(product, ref, productPrice)
// cart.push(array)
// console.log(cart)



// for(let item in cart) {
//     if(cart[item].product === product) {
//       cart[item].count ++;
//     }
// }