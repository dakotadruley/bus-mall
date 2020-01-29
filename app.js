import { productData } from './data/products.js';
import { ProductsArray } from './ProductsArray.js';
import findById from './utiuls/util.js';

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

next.addEventListener('click', () => { 
    numOfClicks++; 
    
    const productSelected = document.querySelector('input:checked');
    let product = productSelected.value; 

    let json = localStorage.getItem('SELECTIONS');
    let selectionsArray;
    if (json) {
        selectionsArray = JSON.parse(json);
    } else {
        selectionsArray = [];
    }
  
    let selected = findById(product, selectionsArray);
    
    if (!selected) {
        selected = {
            id: productSelected.value,
            quantity: 1
        }; 

        selectionsArray.push(selected);
    } else { 
        selected.quantity++;
    }

    json = JSON.stringify(selectionsArray);
    localStorage.setItem('SELECTIONS', json);

    // once you reach 25 clicks
    if (numOfClicks === 25) {
        results.textContent = numOfClicks;
    } 
    
    // render new random three products
    initializeNewProductButton(); 
  
});

// three random products
const initializeNewProductButton = () => {
    const randomProduct = listOfProducts.getRandomProduct();
    let randomProduct2 = listOfProducts.getRandomProduct();
    let randomProduct3 = listOfProducts.getRandomProduct();

    while (randomProduct.id === randomProduct2.id
        || randomProduct2.id === randomProduct3.id
        || randomProduct.id === randomProduct3.id
    ) { 
        randomProduct2 = listOfProducts.getRandomProduct();
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

// chart.js (a library that already exists review the 1/28 read me)
// making a new array and looping through for the canvas chart
    // ids as lables and selections as data
    // mySelections.forEach(selection => 
    // selections.push(selection.selections))