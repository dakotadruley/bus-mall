export class ProductsArray {
    constructor(products) {
        this.products = products.slice();
    }

    getProducts() {
        return this.products;
    }
// to remove a product
    removeProductById(Id) {
        this.products.forEach((product, i) => {
            if (Id === product.id) {
                this.products.splice(i, 1);
            }
        });
    }

    // get the product images
    getProductsById(id) {
        let productMatch;

        this.products.forEach(product => {
            if (id === product.id) {
                productMatch = product;
            }
        });

        return productMatch;
    }

    hasAnyProducts() {
        return this.products.length;
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
    }
}