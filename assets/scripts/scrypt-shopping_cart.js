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
                     <input class="input_quantity" type="number" value="1" min="1" max="10">
                  </div>
                     <!-- <div class="quantity">
                        <button class="qty-btn minus">-</button>
                        <span class="qty-value">01</span>
                        <button class="qty-btn plus">+</button>
                     </div>
                  </div> -->

                  <div class="block_total">
                     <h3 class="total_card">$14.90</h3>
                  </div>
               </div>

            </div>
`
})