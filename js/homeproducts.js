import {products} from './products.js';

let productsHTML = '';

products.slice(0, 13).forEach((product) => {
    productsHTML += `
        <div class="product-box">
            <a href="${product.link}" target="_blank">
                <img class="product-img" src="${product.image}">
                <div class"line">
                <h2 class="product-title">${product.name}</h2>
                <img class="cartadd" src="images/cart2.svg">
                </div>
            </a>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;
