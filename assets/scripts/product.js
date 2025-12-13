const URL = `https://fakestoreapi.com/products/`

const productPageContainer = document.querySelector('.product-page-container');

function getProduct(id){
    fetch(`${URL}${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            productPageContainer.innerHTML += `
            <img src="${data.image}" alt="" class="product-image">
            <div class="product-description-block">            
            
                <p class="logo-product-block">Fasco</p>
                <h2 class="product-name">${data.title}</h2>
                <p class="product-rating">${data.rating.rate}</p>
                <h2 class="product-price">${data.price + `$`}</h2>
                <p class="product-description">${data.description}</p>
            </div>
            `
        })
            
}

let params = new URLSearchParams(document.location.search);
let id = parseInt(params.get('id'));
console.log(id);

getProduct(id);