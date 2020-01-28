import { productData } from './data/products.js';
import { ProductsArray } from './ProductsArray.js';

const productRadioTags = document.querySelectorAll('input');
const productName = document.getElementById('product-name');
const next = document.getElementById('next-button');
const results = document.getElementById('numberOfSelections');

const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const listOfProducts = new ProductsArray(productData);
let numOfClicks = 0;

let shownProductArray = new ProductsArray([]);

next.addEventListener('click', () => { 
    numOfClicks++; 
    initializeNewProductButton(); 
    if (numOfClicks === 25) {
        results.textContent = numOfClicks;
        // get the stroed items 
    }
            // listOfProducts.removeProductById(radioTag.value);
});

// three random products
const initializeNewProductButton = () => {
    const randomProduct = listOfProducts.getRandomProduct();
    let randomProduct2 = listOfProducts.getRandomProduct();
    let randomProduct3 = listOfProducts.getRandomProduct();

    if (randomProduct.id === randomProduct2.id) {
        randomProduct2 = listOfProducts.getRandomProduct();
    } else if (randomProduct2.id === randomProduct3.id) {
        randomProduct3 = listOfProducts.getRandomProduct();
    } else if (randomProduct.id === randomProduct3.id) {
        randomProduct3 = listOfProducts.getRandomProduct();
    }

    image1.src = randomProduct.image;
    image2.src = randomProduct2.image;
    image3.src = randomProduct3.image;

    input1.value = randomProduct.id;
    input2.value = randomProduct2.id;
    input3.value = randomProduct3.id;
};
//product selection
initializeNewProductButton(); 

productRadioTags.addEventListener('click', () => {
    productRadioTags.forEach(radioTag => {
        if (radioTag.checked) {
            console.log(radioTag);
        }
    })
    let json = localStorage.getItem('selections');
    let selectionList;
    if (json) {
        selectionList = JSON.parse(json);
    } else {
        selectionList = [];
    }

    input.value

    json = JSON.stringify(selectionList);
    localStorage.setItem('selections', json);

});

