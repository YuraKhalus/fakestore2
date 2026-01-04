const URL = `https://fakestoreapi.com/products/`

const productPageContainer = document.querySelector('.product-page-container');
let quantityCounter = 1;
function quantityCount(){
    const productQuantity = document.querySelector('.product-quantity');
    const quantityPlus = document.getElementById('quantity-plus');
    const quantityMinus = document.getElementById('quantity-minus');
  

    console.log(quantityPlus);

    quantityPlus.addEventListener('click', ()=>{
        if(quantityCounter < 10){
            productQuantity.innerHTML = ++quantityCounter;
        }
       
    })

    quantityMinus.addEventListener('click', ()=>{
        if(quantityCounter > 1){
            productQuantity.innerHTML = --quantityCounter;
        }

    })
}
function addingToCart(){
    const addToCartBtn = document.querySelector('.add-to-cart-button');

    addToCartBtn.addEventListener('click', ()=>{
        if(localStorage.getItem("cart")){
            const savedCart = JSON.parse(localStorage.getItem("cart"));

            savedCart.forEach((product) => {
            if(product.id === id){
                product.count += quantityCounter;
            }else{
            savedCart.push({
                id: id,
                count: quantityCounter
            });
        }
        });
            console.log(savedCart);

            localStorage.setItem("cart", JSON.stringify(savedCart))
            
        }else{
            const cart = [
                {
                    id: id, 
                    count: quantityCounter
                }
            ]
        localStorage.setItem("cart", JSON.stringify(cart))   
        }
        console.log(localStorage.getItem("cart") );
        
        alert('Successfully added to cart!')

    })   
}


function sizePicking(){
    const pickedSize = document.querySelector('.size-span');
    
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
            quantityCount();     
            addingToCart();       
        })
;
            
}

let params = new URLSearchParams(document.location.search);
let id = parseInt(params.get('id'));
console.log(id);

getProduct(id);


