const URL = `https://fakestoreapi.com/products/`

const productPageContainer = document.querySelector('.product-page-container');

function quantityCount(){
    const productQuantity = document.querySelector('.product-quantity');
    const quantityPlus = document.getElementById('quantity-plus');
    const quantityMinus = document.getElementById('quantity-minus');
    let quantityCounter = 1;

    console.log(quantityPlus);

    quantityPlus.addEventListener('click', ()=>{
        if(quantityCounter < 11){
            productQuantity.innerHTML = quantityCounter++;
        }
       
    })

    quantityMinus.addEventListener('click', ()=>{
        if(quantityCounter > 0){
            productQuantity.innerHTML = quantityCounter--;
        }

    })
}

function getProduct(id){
    fetch(`${URL}${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            productPageContainer.innerHTML += `
            <img src="${data.image}" alt="" class="product-image">
            <div class="product-description-block">            
            
                <p class="logo-product-block">FASCO</p>
                <h2 class="product-name">${data.title}</h2>
                <p class="product-rating">${data.rating.rate} ★</p>
                <h2 class="product-price">${data.price + `$`}</h2>
                <p class="product-description">${data.description}</p>
                <p class="product-size">Size: <span class="size-span">M</span></p>
                <div class="product-size-container">
                    <button class="product-size-button">XS</button>
                    <button class="product-size-button">S</button>
                    <button class="product-size-button active-size">M</button>
                    <button class="product-size-button">L</button>
                    <button class="product-size-button">XL</button>
                </div>
                <div class="add-to-cart-block">
                    <p class="product-quantity-title">Quantity</p>
                    <div class="add-to-cart-container">
                        <div class="quantity-picker">
                            <button class="quantity-button" id="quantity-minus">-</button>
                            <p class="product-quantity">1</p>
                            <button class="quantity-button" id="quantity-plus">+</button>
                        </div>
                        <button class="add-to-cart-button">Add to cart</button>
                    </div>
                </div>
            </div>
            `
            quantityCount()            
        })
;
            
}

let params = new URLSearchParams(document.location.search);
let id = parseInt(params.get('id'));
console.log(id);

getProduct(id);






// const addToCartBtn = document.querySelector('.add-to-cart-button');

// addToCartBtn.addEventListener('click', ()=>{
//     localStorage.setItem
// })