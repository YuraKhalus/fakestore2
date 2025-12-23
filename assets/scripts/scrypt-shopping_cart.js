// const URL = 'https://fakestoreapi.com/'

const cards = document.querySelector('.cards');

fetch(`https://fakestoreapi.com/products`)
    .then(respone => respone.json())
    .then(data => {

        const product = data[0];
        console.log(product);
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
                     <h3 class="price_card">$${product.price}</h3>
                  </div>
                  
                  <div class="block_quantity">
                     <div class="quantity-picker">
                        <button class="quantity-button" id="quantity-minus">-</button>
                        <p class="product-quantity">1</p>
                        <button class="quantity-button" id="quantity-plus">+</button>
                    </div>

                  </div>

                  <div class="block_total">
                     <h3 class="total_card">$14.90</h3>
                  </div>
               </div>

            </div>
`

quantityCount();
})






function quantityCount() {

    let quantityCounterMinus = document.getElementById('quantity-minus');
    let quantityCounterPlus = document.getElementById('quantity-plus');
    let productQuantity = document.querySelector('.product-quantity');
    let quantity = 1;

    quantityCounterPlus.addEventListener('click', () => {

        
        if (quantity < 10) {
            productQuantity.innerText = ++quantity;
        }
        
    })
    quantityCounterMinus.addEventListener('click', () => {
        if (quantity > 1) {
            productQuantity.innerText = --quantity;
        } 
    })
}



