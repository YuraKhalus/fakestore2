// const URL = 'https://fakestoreapi.com/'

const cards = document.querySelector('.cards');

function addProductToCart(productID) {
    fetch(`https://fakestoreapi.com/products/${productID}`)
    .then(respone => respone.json())
    .then(product => {
        cards.innerHTML += `
                <div class="card">
               <div class="photo_block">
                  <img class="card_photo" src="${product.image}" alt="">
                  <h3 class="title_card">${product.title}</h3>

                  <h3 class="text_color">Color: Red</h3>
                  <h3 class="remove_text">Remove</h3>
               </div>
               <div class="block">
                  <div class="block_price">
                     <h3 class="price_card">$<span class="priceNumber">${product.price}</span></h3>
                  </div>
                  
                  <div class="block_quantity">
                     <div class="quantity-picker">
                        <button class="quantity-button quantity-minus" id="">-</button>
                        <p class="product-quantity">1</p>
                        <button class="quantity-button quantity-plus" id="">+</button>
                    </div>

                  </div>

                  <div class="block_total">
                     <h3 class="total_card">$14.90</h3>
                  </div>
               </div>

            </div>
`

quantityCount();
totalByProduct()
})
}








function quantityCount() {

    let quantityCounterMinus = cards.querySelector('.quantity-minus');
    let quantityCounterPlus = cards.querySelector('.quantity-plus');
    let productQuantity = cards.querySelector('.product-quantity');
    let quantity = 1;

    quantityCounterPlus.addEventListener('click', () => {

        
        if (quantity < 10) {
            productQuantity.innerText = ++quantity;
            totalByProduct();
        }
        
    })
    quantityCounterMinus.addEventListener('click', () => {
        if (quantity > 1) {
            productQuantity.innerText = --quantity;
            totalByProduct();
        } 
    })
}



function totalByProduct() {
    let productPrice = +document.querySelector('.priceNumber').innerHTML;
    let productQuantity = +document.querySelector('.product-quantity').innerHTML;
    let total = document.querySelector(".total_card");
    let totalPrice = productPrice * productQuantity;
    total.innerText = `$${totalPrice.toFixed(2)}`;
    console.log(productPrice);
    
}


function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    
    if (cart) {
        cart.forEach(productID => {
            addProductToCart(productID);
        })
    }

}
localStorage.setItem('cart', JSON.stringify([1, 2, 3,]));

getCart()

