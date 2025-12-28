const modalbtn = document.querySelector('.ultimate-sale-button');
const modalblock = document.querySelector('.modal');
const closebtn = document.querySelector('.close-modal-btn');
const productlist = document.querySelector('.product-list');
const deletebtn = document.querySelector('.delete-btn');

modalbtn.addEventListener('click', function () {
    modalblock.style.display = 'block';
})
closebtn.addEventListener('click', function () {
    modalblock.style.display = 'none';
})


function counter() {
    const addProduct = document.querySelector('.btn-add-product');
    const takeProduct = document.querySelector('.btn-take-product');

    let productNumber = document.querySelector('.product-amount');

    let productCount = 1;

    addProduct.addEventListener('click', () => {
        if (productCount >= 10){
            alert('limit is 10!')
        } else {
            productNumber.innerText = ++productCount;
        }
    })
    takeProduct.addEventListener('click', () => {
        if (productCount <= 1) {
            alert('Please enter some products');
        } else {
            productCount--;
        }
        productNumber.innerText = productCount;
    });
}

function getLScart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    productlist.innerHTML = '';
    console.log(cart);
    cart.forEach((product) => {
        fetchProduct(product.id)
    });
}
getLScart();

function fetchProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            productlist.innerHTML += `<div class="product-info">
               <div class="product-image">
                  <img class="product-image" src="${data.image}">
               </div>
               <div class="product-info-less">
                  <h4>${data.title}</h4>
                     <p>$${data.price}</p>
                     <div class="amount">
                        <button class="btn-take-product">-</button>
                        <span class="product-amount">1</span>
                        <button class="btn-add-product">+</button>
                     </div>
                     <div class="delete-product">
                     <button class="delete-btn" data-productID="${data.id}">Delete
                     </button>
                  </div>
               </div>
            </div>`
            counter()
            deleteProduct()
        });
}

function deleteProduct (){
    const cart = JSON.parse(localStorage.getItem('cart'));
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            let productId = deleteBtn.getAttribute('data-productID');
            // console.log(productId);
            // console.log(cart)
            for(let i = 0; i < cart.length; i++) {
                // console.log(cart[i]);
                if (cart[i].id == productId) {
                    cart.splice(i, 1);

                    localStorage.setItem('cart', JSON.stringify(cart));
                    console.log(cart);
                    break;
                }
            }
            getLScart()
        })
    })
}



