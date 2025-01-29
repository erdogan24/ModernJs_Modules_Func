import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

console.log('Importing module');
//console.log(shippingCost);

addToCart('bread', 5);
console.log(totalPrice, totalQuantity);

console.log('start fetching');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');

const data = await res.json();
