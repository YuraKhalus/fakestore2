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
               <div class="product_photo">
                  <img src="${product.image}" alt="CardPhoto" class="product_photo_img">
               </div>

               <div class="product_detsils">
                  <div class="product_main_information">
                     <h3 class="product_name">
                        ${product.title}
                     </h3>
                     <h4 class="descryption">
                        ${product.category}
                     </h4>
                  </div>

                  <div class="info">
                     <h4 class="reviews">(${product.rating.count}) Customer Reviews</h4>
                  </div>

                  <div class="price">
                     <h3 class="price_text">
                        $${product.price}
                     </h3>
                  </div>

                  <div class="product_raiting">
                     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                           fill="#FCA120" />
                     </svg>
                     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                           fill="#FCA120" />
                     </svg>

                     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                           fill="#FCA120" />
                     </svg>

                     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                           fill="#FCA120" />
                     </svg>

                     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z"
                           fill="#FCA120" />
                     </svg>

                  </div>
               </div>
            </div>`
      });
   })