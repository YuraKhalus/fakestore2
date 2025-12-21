const modalbtn = document.querySelector('.ultimate-sale-button');
const modalblock = document.querySelector('.modal');
const closebtn = document.querySelector('.close-modal-btn');
const productlist = document.querySelector('.product-list');



modalbtn.addEventListener('click', function () {
    modalblock.style.display = 'block';
})
closebtn.addEventListener('click', function () {
    modalblock.style.display = 'none';
})


fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => {
        productlist.innerHTML = ``
        productlist.innerHTML = `<div class="product-info">
               <div class="product-image">
                  <img class="product-image" src="${data.image}">
               </div>
               <div class="product-info-less">
                  <h4>${data.title}</h4>
                     <p>${data.price}</p>
                     <div class="amount">
                        <button class="btn-take-product">-</button>
                        <span class="product-amount">01</span>
                        <button class="btn-add-product">+</button>
                     </div>
               </div>
            </div>`
    });



