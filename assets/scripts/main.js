const URL = 'https://fakestoreapi.com/'

const products_box = document.querySelector('.products');

fetch(`${URL}/products`)
   .then(response => response.json())
   .then(data => {
      console.log(data);
   })