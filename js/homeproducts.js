import {products} from './products.js';

let productsHTML = '';

products.slice(0, 6).forEach((product) => {
    productsHTML += `
        <div class="product-box">
            <a href="${product.link}" target="_blank">
                <img class="product-img" src="${product.image}">
            </a>
            <h2 class="product-title">${product.name}</h2>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;
