// const URL = 'https://fakestoreapi.com/'

const cards = document.querySelector('.cards');

function addProductToCart(productID, quantity) {
    fetch(`https://fakestoreapi.com/products/${productID}`)
    .then(respone => respone.json())
    .then(product => {

        const cardItem = document.createElement('div');
        cardItem.classList.add('card');
        cardItem.innerHTML = `
                
               <div class="photo_block">
                  <img class="card_photo" src="${product.image}" alt="">
                  <h3 class="title_card">${product.title}</h3>

                  <h3 class="text_color">Color: Red</h3>
                  <h3 class="remove_text" data-removeid="${product.id}">Remove</h3>
               </div>
               <div class="block">
                  <div class="block_price">
                     <h3 class="price_card">$<span class="priceNumber">${product.price}</span></h3>
                  </div>
                  
                  <div class="block_quantity">
                     <div class="quantity-picker">
                        <button class="quantity-button quantity-minus" id="">-</button>
                        <p class="product-quantity">${quantity}</p>
                        <button class="quantity-button quantity-plus" id="">+</button>
                    </div>

                  </div>

                  <div class="block_total">
                     <h3 class="total_card">$14.90</h3>
                  </div>
               </div>
`
cards.append(cardItem);

setupCardLogic(cardItem, product.price)
removeBtnLogic(cardItem)
})
}








function setupCardLogic(cardElement, price) {

    let quantityCounterMinus = cardElement.querySelector('.quantity-minus');
    let quantityCounterPlus = cardElement.querySelector('.quantity-plus');
    let productQuantity = cardElement.querySelector('.product-quantity');
    let totalText = cardElement.querySelector('.total_card');
    let quantity = Number(productQuantity.innerText);

    const updatePrice = () => {
        let total = price * quantity;

        totalText.innerText = `$${total.toFixed(2)}`;
         updateSubtotal();
    }
    updatePrice();

    quantityCounterPlus.addEventListener('click', () => {
        if (quantity < 10) {
            productQuantity.innerText = ++quantity;
            updatePrice();
        }
        
    })
    quantityCounterMinus.addEventListener('click', () => {
        if (quantity > 1) {
            productQuantity.innerText = --quantity;
            updatePrice();
        } 
    })



   
}






function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    
    if (cart) {
        cart.forEach(product => {
            console.log(product);
            
            addProductToCart(product.id, product.count);
        })
    }

}
// localStorage.setItem('cart', JSON.stringify([1, 2, 3,]));

getCart()

function updateSubtotal() {
    const totalCards = document.querySelectorAll('.card');
    let subtotal = 0;

    totalCards.forEach(card => {
        const totalText = card.querySelector('.total_card');
        const totalValue = parseFloat(totalText.innerText.replace('$', ''));
        subtotal += totalValue;
    });


    const subtotalElement = document.querySelector('.price_subtotal');
    subtotalElement.innerText = `$${subtotal.toFixed(2)}`;

}

function removeBtnLogic(cardElement) {
    let removeBtn = cardElement.querySelector(".remove_text");
    
        removeBtn.addEventListener('click', () => {
            const removeID = removeBtn.getAttribute('data-removeid');
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart = cart.filter(product => product.id != removeID);
            localStorage.setItem('cart', JSON.stringify(cart));
            cards.innerHTML = '';
            getCart();
            console.log("delete");
        })

}