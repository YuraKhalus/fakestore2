const URL = 'https://fakestoreapi.com/'

const products_box = document.querySelector('.products');

const category = [
   "men's clothing",
   "women's clothing",
   "jewelery",
   "electronics"
]

// const listOfCategoryProducts = [];

fetch(`${URL}/products`)
   .then(response => response.json())
   .then(data => {
      const listOfCategoryProducts = data.filter(product => product.category === category[0])
      console.log(listOfCategoryProducts);
      listOfCategoryProducts.forEach(product => {
         console.log(product);
         products_box.innerHTML += `
            <div class="product">
               <img src="${product.image}" alt="" class="product_photo">
               <div class="product_details">
                  <h3 class="product_name">
                     ${product.title}
                  </h3>
                  <span class="product_raiting">${product.rating.rate}</span>
                  <h3 class="product_price">${product.price}$</h3>
               </div>
            </div>
         `
      });
   })